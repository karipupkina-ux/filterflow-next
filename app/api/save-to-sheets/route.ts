import { google } from "googleapis";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

function getErrorDetails(error: unknown) {
  if (error instanceof Error) {
    return {
      name: error.name,
      message: error.message,
      stack: error.stack,
    };
  }

  if (typeof error === "object" && error !== null) {
    return JSON.parse(JSON.stringify(error));
  }

  return { message: String(error) };
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, phone, message } = body as {
      name?: string;
      email?: string;
      phone?: string;
      message?: string;
    };

    const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
    const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, "\n");
    const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
    const sheetName = process.env.GOOGLE_SHEETS_SHEET_NAME || "Лист1";

    if (!clientEmail || !privateKey || !spreadsheetId || !sheetName) {
      console.error("Google Sheets env is not configured", {
        hasClientEmail: Boolean(clientEmail),
        hasPrivateKey: Boolean(privateKey),
        hasSpreadsheetId: Boolean(spreadsheetId),
        hasSheetName: Boolean(sheetName),
      });

      return NextResponse.json(
        {
          error: "Google Sheets is not configured",
          details: {
            hasClientEmail: Boolean(clientEmail),
            hasPrivateKey: Boolean(privateKey),
            hasSpreadsheetId: Boolean(spreadsheetId),
            hasSheetName: Boolean(sheetName),
          },
        },
        { status: 500 }
      );
    }

    const auth = new google.auth.JWT({
      email: clientEmail,
      key: privateKey,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    // Сначала отдельно проверяем авторизацию
    try {
      await auth.authorize();
    } catch (authError) {
      console.error("Google auth failed:", authError);

      return NextResponse.json(
        {
          error: "Google auth failed",
          details: getErrorDetails(authError),
        },
        { status: 500 }
      );
    }

    const sheets = google.sheets({
      version: "v4",
      auth,
    });

    const now = new Date().toLocaleString("ru-RU");

    try {
      await sheets.spreadsheets.values.append({
        spreadsheetId,
        range: `${sheetName}!A:G`,
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [
            [
              now,
              name || "",
              email || "",
              phone || "",
              message || "",
              "Сайт",
              "Новая",
            ],
          ],
        },
      });
    } catch (appendError) {
      console.error("Google Sheets append failed:", appendError);

      return NextResponse.json(
        {
          error: "Google Sheets append failed",
          details: getErrorDetails(appendError),
          debug: {
            spreadsheetId,
            sheetName,
            clientEmail,
            range: `${sheetName}!A:G`,
          },
        },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Ошибка записи в Google Sheets:", error);

    return NextResponse.json(
      {
        error: "Ошибка записи в таблицу",
        details: getErrorDetails(error),
      },
      { status: 500 }
    );
  }
}