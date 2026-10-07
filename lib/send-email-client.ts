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
  "Не удалось отправить заявку. Попробуйте позже или свяжитесь с нами по телефону.";

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
  const contentType = response.headers.get("content-type") ?? "";

  if (contentType.includes("application/json")) {
    try {
      data = (await response.json()) as { error?: string };
    } catch (parseErr) {
      console.error("send-email: invalid JSON response", parseErr);
    }
  } else if (!response.ok) {
    // Например, dev-сервер может вернуть HTML/текст при внутренней ошибке сборщика.
    // Не пытаемся разбирать такой ответ через JSON.parse — пользователь всё равно
    // получит нормальное понятное сообщение ниже.
    const text = await response.text().catch(() => "");
    console.error("send-email API returned non-JSON response:", {
      status: response.status,
      statusText: response.statusText,
      preview: text.slice(0, 200),
    });
  }

  if (!response.ok) {
    const userMessage =
      typeof data.error === "string" && data.error.trim().length > 0
        ? data.error
        : SEND_EMAIL_USER_ERROR;
    console.error("send-email API error:", {
      status: response.status,
      statusText: response.statusText,
      body: data,
    });
    throw new Error(userMessage);
  }

  // Фиксируем конверсию только после успешной отправки письма.
  // Если Метрика не загружена (например, пользователь не дал согласие на аналитику),
  // отправка формы всё равно считается успешной и не ломается.
  if (typeof window !== "undefined") {
    try {
      const ym = (
        window as Window & {
          ym?: (...args: unknown[]) => void;
        }
      ).ym;

      if (typeof ym === "function") {
        ym(109113581, "reachGoal", "form_success");
      }
    } catch (err) {
      console.error("Yandex Metrika reachGoal failed:", err);
    }
  }
}
