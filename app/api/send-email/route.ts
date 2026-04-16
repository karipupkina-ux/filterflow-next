import nodemailer from "nodemailer";

const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;
const RECEIVER_EMAIL = "filterflow@mail.ru";

export async function POST(request: Request) {
  try {
    if (!EMAIL_USER || !EMAIL_PASS) {
      console.error(
        "send-email: missing EMAIL_USER or EMAIL_PASS in environment"
      );
      return Response.json(
        { error: "Email service is not configured on the server." },
        { status: 500 }
      );
    }

    let body: unknown;
    try {
      body = await request.json();
    } catch (parseErr) {
      console.error("send-email: invalid JSON body", parseErr);
      return Response.json({ error: "Invalid JSON body." }, { status: 400 });
    }

    const raw = body as Record<string, unknown>;
    const name = typeof raw?.name === "string" ? raw.name.trim() : "";
    const email = typeof raw?.email === "string" ? raw.email.trim() : "";
    const phone = typeof raw?.phone === "string" ? raw.phone.trim() : "";
    const message = typeof raw?.message === "string" ? raw.message.trim() : "";

    if (!name || !email || !message) {
      return Response.json(
        { error: "Fields name, email and message are required." },
        { status: 400 }
      );
    }

    const sentAt = new Intl.DateTimeFormat("ru-RU", {
      dateStyle: "long",
      timeStyle: "short",
      timeZone: "Europe/Moscow",
    }).format(new Date());

    const transporter = nodemailer.createTransport({
      host: "smtp.mail.ru",
      port: 465,
      secure: true,
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });

    const textBody = [
      `Имя: ${name}`,
      `Email: ${email}`,
      `Телефон: ${phone || "—"}`,
      "",
      "Сообщение:",
      message,
      "",
      `Дата и время отправки (МСК): ${sentAt}`,
    ].join("\n");

    await transporter.sendMail({
      from: EMAIL_USER,
      to: RECEIVER_EMAIL,
      replyTo: email,
      subject: "Новая заявка с сайта FilterFlow",
      text: textBody,
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Failed to send email:", error);
    return Response.json({ error: "Failed to send email." }, { status: 500 });
  }
}
