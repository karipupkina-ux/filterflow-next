export const SEND_EMAIL_API = "/api/send-email";

export type ApplicationPayload = {
  name: string;
  email: string;
  phone: string;
  message: string;
  /**
   * Honeypot-поле для антиспама.
   * Обычный пользователь не заполняет его (оно скрыто на форме).
   */
  website?: string;
};

/** Текст для пользователя при любой ошибке отправки (детали только в console.error) */
export const SEND_EMAIL_USER_ERROR =
  "Не удалось отправить заявку. Попробуйте позже.";

export async function sendApplicationEmail(
  payload: ApplicationPayload
): Promise<void> {
  let response: Response;
  try {
    response = await fetch(SEND_EMAIL_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch (err) {
    console.error("send-email: network or fetch failed:", err);
    throw new Error(SEND_EMAIL_USER_ERROR);
  }

  let data: { error?: string } = {};
  try {
    const text = await response.text();
    if (text) data = JSON.parse(text) as { error?: string };
  } catch (parseErr) {
    console.error("send-email: response is not valid JSON", parseErr);
    throw new Error(SEND_EMAIL_USER_ERROR);
  }

  if (!response.ok) {
    console.error("send-email API error:", {
      status: response.status,
      statusText: response.statusText,
      body: data,
    });
    throw new Error(SEND_EMAIL_USER_ERROR);
  }
}
