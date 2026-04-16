import nodemailer from "nodemailer";
import type { SentMessageInfo } from "nodemailer/lib/smtp-transport";
import { NextResponse } from "next/server";

const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;
const RECEIVER_EMAIL = "filterflow@mail.ru";
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

const SMTP_HOST = "smtp.mail.ru";
const SMTP_PORT = 465;
const SMTP_SECURE = true;

/** Для логов: не светим полный email целиком */
function maskEmailHint(user: string): string {
  const at = user.indexOf("@");
  if (at <= 0) return "(invalid)";
  const local = user.slice(0, at);
  const domain = user.slice(at);
  const shown = local.length <= 2 ? "*" : `${local.slice(0, 2)}…`;
  return `${shown}${domain}`;
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function nodemailerErrDetails(err: unknown): Record<string, unknown> {
  if (!err || typeof err !== "object") return { message: String(err) };
  const e = err as NodeJS.ErrnoException & {
    responseCode?: number;
    response?: string;
    command?: string;
  };
  return {
    name: e.name,
    message: e.message,
    code: e.code,
    errno: e.errno,
    syscall: e.syscall,
    responseCode: e.responseCode,
    command: e.command,
    response: e.response,
  };
}

async function sendTelegramNotification(params: {
  name: string;
  email: string;
  phone: string;
  message: string;
  sentAt: string;
}) {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    console.log("[send-email] telegram skipped: missing env", {
      hasBotToken: Boolean(TELEGRAM_BOT_TOKEN),
      hasChatId: Boolean(TELEGRAM_CHAT_ID),
    });
    return;
  }

  const text = [
    "Новая заявка с сайта FilterFlow",
    "",
    `Имя: ${params.name}`,
    `Email: ${params.email}`,
    `Телефон: ${params.phone || "—"}`,
    `Сообщение: ${params.message}`,
    `Дата и время: ${params.sentAt}`,
  ].join("\n");

  const response = await fetch(
    `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text,
      }),
    }
  );

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      `Telegram send failed with status ${response.status}: ${errorText}`
    );
  }
}

export async function POST(request: Request) {
  const started = Date.now();
  console.log("[send-email] POST start");

  try {
    if (!EMAIL_USER || !EMAIL_PASS) {
      console.error(
        "[send-email] missing env: need EMAIL_USER and EMAIL_PASS",
        { hasUser: Boolean(EMAIL_USER), hasPass: Boolean(EMAIL_PASS) }
      );
      return NextResponse.json(
        { error: "Email service is not configured on the server." },
        { status: 500 }
      );
    }

    console.log("[send-email] env ok, auth user:", maskEmailHint(EMAIL_USER));

    let body: unknown;
    try {
      body = await request.json();
    } catch (parseErr) {
      console.error("[send-email] JSON parse failed", parseErr);
      return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
    }

    const raw = body as Record<string, unknown>;
    const name = typeof raw?.name === "string" ? raw.name.trim() : "";
    const email = typeof raw?.email === "string" ? raw.email.trim() : "";
    const phone = typeof raw?.phone === "string" ? raw.phone.trim() : "";
    const message = typeof raw?.message === "string" ? raw.message.trim() : "";

    if (!name || !email || !message) {
      console.warn("[send-email] validation failed", {
        hasName: Boolean(name),
        hasEmail: Boolean(email),
        hasMessage: Boolean(message),
      });
      return NextResponse.json(
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
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_SECURE,
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });

    try {
      await transporter.verify();
      console.log("[send-email] SMTP verify OK", {
        host: SMTP_HOST,
        port: SMTP_PORT,
        secure: SMTP_SECURE,
        ms: Date.now() - started,
      });
    } catch (verifyErr) {
      console.error(
        "[send-email] SMTP verify FAILED — Mail.ru требует пароль приложения (не пароль от ящика). См. https://help.mail.ru/mail/security/protection/external"
      );
      console.error("[send-email] verify error message:", String(verifyErr));
      console.error("[send-email] verify error details:", nodemailerErrDetails(verifyErr));
      return NextResponse.json(
        { error: "Failed to send email." },
        { status: 500 }
      );
    }

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

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone || "—");
    const safeMessage = escapeHtml(message).replace(/\r\n|\n|\r/g, "<br />");

    const htmlBody = `
      <h2>Новая заявка с сайта FilterFlow</h2>
      <p><strong>Имя:</strong> ${safeName}</p>
      <p><strong>Email:</strong> ${safeEmail}</p>
      <p><strong>Телефон:</strong> ${safePhone}</p>
      <p><strong>Сообщение:</strong></p>
      <p>${safeMessage}</p>
      <hr />
      <p><strong>Дата и время отправки (МСК):</strong> ${escapeHtml(sentAt)}</p>
    `;

    let info: SentMessageInfo;
    try {
      info = await transporter.sendMail({
        from: `"FilterFlow" <${EMAIL_USER}>`,
        to: RECEIVER_EMAIL,
        replyTo: email,
        subject: "Новая заявка с сайта FilterFlow",
        text: textBody,
        html: htmlBody,
      });
    } catch (sendErr) {
      console.error(
        "[send-email] sendMail FAILED",
        nodemailerErrDetails(sendErr)
      );
      return NextResponse.json(
        { error: "Failed to send email." },
        { status: 500 }
      );
    }

    console.log("[send-email] sendMail OK", {
      messageId: info.messageId,
      accepted: info.accepted,
      rejected: info.rejected,
      response: info.response,
      msTotal: Date.now() - started,
    });

    try {
      await sendTelegramNotification({
        name,
        email,
        phone,
        message,
        sentAt,
      });
      console.log("[send-email] telegram notification OK");
    } catch (telegramErr) {
      console.error(
        "[send-email] telegram notification FAILED",
        String(telegramErr)
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[send-email] unexpected error", nodemailerErrDetails(error));
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}
