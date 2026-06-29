import nodemailer from "nodemailer";
import type { Transporter } from "nodemailer";
import type SMTPTransport from "nodemailer/lib/smtp-transport";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;
const RECEIVER_EMAIL = "filterflow@mail.ru";

const SMTP_HOST = "smtp.mail.ru";
const SMTP_PORT = 587;
const SMTP_SECURE = false;

const SMTP_CONNECTION_TIMEOUT_MS = 20_000;
const SMTP_GREETING_TIMEOUT_MS = 20_000;
const SMTP_SOCKET_TIMEOUT_MS = 30_000;

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const rateLimitStore = new Map<string, number[]>();

const USER_ERROR =
  "Не удалось отправить заявку. Попробуйте позже или свяжитесь с нами по телефону.";

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

function smtpErrDetails(err: unknown): Record<string, unknown> {
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

function isSmtpTimeout(err: unknown): boolean {
  if (!err || typeof err !== "object") return false;
  const e = err as NodeJS.ErrnoException;
  return (
    e.code === "ETIMEDOUT" ||
    e.code === "ESOCKET" ||
    e.code === "ECONNRESET" ||
    e.code === "ECONNREFUSED" ||
    (typeof e.message === "string" &&
      /timeout|timed out|connection timeout/i.test(e.message))
  );
}

function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    const firstIp = forwardedFor.split(",")[0]?.trim();
    if (firstIp) return firstIp;
  }

  const realIp = request.headers.get("x-real-ip")?.trim();
  if (realIp) return realIp;

  return "unknown";
}

function isRateLimited(clientIp: string): boolean {
  const now = Date.now();
  const recentRequests =
    rateLimitStore.get(clientIp)?.filter(
      (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS
    ) ?? [];

  if (recentRequests.length >= RATE_LIMIT_MAX_REQUESTS) {
    rateLimitStore.set(clientIp, recentRequests);
    return true;
  }

  recentRequests.push(now);
  rateLimitStore.set(clientIp, recentRequests);

  if (rateLimitStore.size > 500) {
    for (const [ip, timestamps] of rateLimitStore.entries()) {
      const activeTimestamps = timestamps.filter(
        (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS
      );

      if (activeTimestamps.length === 0) {
        rateLimitStore.delete(ip);
        continue;
      }

      rateLimitStore.set(ip, activeTimestamps);
    }
  }

  return false;
}

function createMailTransporter(): Transporter<SMTPTransport.SentMessageInfo> {
  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_SECURE,
    requireTLS: true,
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
    connectionTimeout: SMTP_CONNECTION_TIMEOUT_MS,
    greetingTimeout: SMTP_GREETING_TIMEOUT_MS,
    socketTimeout: SMTP_SOCKET_TIMEOUT_MS,
    tls: {
      minVersion: "TLSv1.2",
      servername: SMTP_HOST,
    },
  });
}

export async function POST(request: Request) {
  const started = Date.now();
  console.log("[send-email] POST start");

  try {
    if (!EMAIL_USER || !EMAIL_PASS) {
      console.error("[send-email] missing env: need EMAIL_USER and EMAIL_PASS", {
        hasUser: Boolean(EMAIL_USER),
        hasPass: Boolean(EMAIL_PASS),
      });
      return NextResponse.json({ error: USER_ERROR }, { status: 500 });
    }

    console.log("[send-email] env ok, auth user:", maskEmailHint(EMAIL_USER));
    console.log("[send-email] SMTP config", {
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_SECURE,
      requireTLS: true,
      connectionTimeout: SMTP_CONNECTION_TIMEOUT_MS,
      greetingTimeout: SMTP_GREETING_TIMEOUT_MS,
      socketTimeout: SMTP_SOCKET_TIMEOUT_MS,
      receiver: RECEIVER_EMAIL,
    });

    let body: unknown;
    try {
      body = await request.json();
    } catch (parseErr) {
      console.error("[send-email] JSON parse failed", parseErr);
      return NextResponse.json(
        { error: "Некорректные данные формы." },
        { status: 400 }
      );
    }

    const raw = body as Record<string, unknown>;
    const name = typeof raw?.name === "string" ? raw.name.trim() : "";
    const email = typeof raw?.email === "string" ? raw.email.trim() : "";
    const phone = typeof raw?.phone === "string" ? raw.phone.trim() : "";
    const message = typeof raw?.message === "string" ? raw.message.trim() : "";
    const website =
      typeof raw?.website === "string" ? raw.website.trim() : "";
    const clientIp = getClientIp(request);

    if (website) {
      console.warn("[send-email] honeypot triggered", { clientIp });
      return NextResponse.json({ ok: true });
    }

    if (isRateLimited(clientIp)) {
      console.warn("[send-email] rate limit triggered", { clientIp });
      return NextResponse.json(
        {
          error:
            "Слишком много попыток отправки. Подождите немного и попробуйте снова.",
        },
        { status: 429 }
      );
    }

    if (!name || !email || !message) {
      console.warn("[send-email] validation failed", {
        hasName: Boolean(name),
        hasEmail: Boolean(email),
        hasMessage: Boolean(message),
      });
      return NextResponse.json(
        { error: "Заполните имя, email и сообщение." },
        { status: 400 }
      );
    }

    const sentAt = new Intl.DateTimeFormat("ru-RU", {
      dateStyle: "long",
      timeStyle: "short",
      timeZone: "Europe/Moscow",
    }).format(new Date());

    const transporter = createMailTransporter();

    try {
      await transporter.verify();
      console.log("[send-email] SMTP verify OK", {
        host: SMTP_HOST,
        port: SMTP_PORT,
        secure: SMTP_SECURE,
        ms: Date.now() - started,
      });
    } catch (verifyErr) {
      const details = smtpErrDetails(verifyErr);
      console.error("[send-email] SMTP verify FAILED", details);

      if (isSmtpTimeout(verifyErr)) {
        console.error(
          "[send-email] SMTP timeout hint: Timeweb Cloud по умолчанию блокирует исходящие порты 25/465/587. " +
            "Разблокируйте порт 587 в панели Timeweb или обратитесь в поддержку. " +
            "Документация: https://timeweb.cloud/docs/cloud-servers/limitations"
        );
      } else {
        console.error(
          "[send-email] SMTP auth hint: Mail.ru требует пароль приложения (не пароль от ящика). " +
            "См. https://help.mail.ru/mail/security/protection/external"
        );
      }

      return NextResponse.json({ error: USER_ERROR }, { status: 500 });
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

    try {
      const info = await transporter.sendMail({
        from: `"FilterFlow" <${EMAIL_USER}>`,
        to: RECEIVER_EMAIL,
        replyTo: email,
        subject: "Новая заявка с сайта FilterFlow",
        text: textBody,
        html: htmlBody,
      });

      console.log("[send-email] sendMail OK", {
        messageId: info.messageId,
        accepted: info.accepted,
        rejected: info.rejected,
        response: info.response,
        msTotal: Date.now() - started,
      });
    } catch (sendErr) {
      console.error("[send-email] sendMail FAILED", smtpErrDetails(sendErr));

      if (isSmtpTimeout(sendErr)) {
        console.error(
          "[send-email] sendMail timeout hint: проверьте разблокировку SMTP-портов на Timeweb Cloud"
        );
      }

      return NextResponse.json({ error: USER_ERROR }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[send-email] unexpected error", smtpErrDetails(error));
    return NextResponse.json({ error: USER_ERROR }, { status: 500 });
  }
}
