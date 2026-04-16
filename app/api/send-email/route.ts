import nodemailer from "nodemailer";

const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;
const RECEIVER_EMAIL = "filterflow@mail.ru";

export async function POST(request: Request) {
  try {
    if (!EMAIL_USER || !EMAIL_PASS) {
      return Response.json(
        { error: "Email service is not configured on the server." },
        { status: 500 }
      );
    }

    const body = await request.json();
    const name = typeof body?.name === "string" ? body.name.trim() : "";
    const email = typeof body?.email === "string" ? body.email.trim() : "";
    const phone = typeof body?.phone === "string" ? body.phone.trim() : "";
    const message = typeof body?.message === "string" ? body.message.trim() : "";

    if (!name || !email || !message) {
      return Response.json(
        { error: "Fields name, email and message are required." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.mail.ru",
      port: 465,
      secure: true,
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: EMAIL_USER,
      to: RECEIVER_EMAIL,
      subject: "Новая заявка с сайта FilterFlow",
      text: [
        `Имя: ${name}`,
        `Email: ${email}`,
        `Телефон: ${phone || "-"}`,
        `Сообщение: ${message}`,
      ].join("\n"),
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Failed to send email:", error);
    return Response.json({ error: "Failed to send email." }, { status: 500 });
  }
}
