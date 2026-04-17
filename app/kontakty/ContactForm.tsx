"use client";

import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import {
  sendApplicationEmail,
  SEND_EMAIL_USER_ERROR,
} from "@/lib/send-email-client";

const MAX_MSG = 500;
const MIN_MSG = 10;
const MIN_SUBMIT_INTERVAL_MS = 10_000;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_ALLOWED_RE = /^[\d+\s\-()]+$/;

type FieldErrors = Partial<
  Record<"name" | "email" | "phone" | "message" | "consent", string>
>;

function validateForm(values: {
  name: string;
  email: string;
  phone: string;
  message: string;
  consent: boolean;
}): FieldErrors {
  const errors: FieldErrors = {};
  const normalizedName = values.name.trim();
  const normalizedEmail = values.email.trim();
  const normalizedPhone = values.phone.trim();
  const normalizedMessage = values.message.trim();
  const phoneDigits = normalizedPhone.replace(/\D/g, "");

  if (!normalizedName) {
    errors.name = "Укажите имя.";
  }

  if (!normalizedEmail) {
    errors.email = "Укажите email.";
  } else if (!EMAIL_RE.test(normalizedEmail)) {
    errors.email = "Проверьте корректность email.";
  }

  if (normalizedPhone) {
    if (!PHONE_ALLOWED_RE.test(normalizedPhone) || phoneDigits.length < 6) {
      errors.phone = "Проверьте телефон. Укажите номер в понятном формате.";
    }
  }

  if (!normalizedMessage) {
    errors.message = "Введите сообщение.";
  } else if (normalizedMessage.length < MIN_MSG) {
    errors.message = `Сообщение должно быть не короче ${MIN_MSG} символов.`;
  } else if (normalizedMessage.length > MAX_MSG) {
    errors.message = `Сообщение должно быть не длиннее ${MAX_MSG} символов.`;
  }

  if (!values.consent) {
    errors.consent = "Нужно согласие на обработку персональных данных.";
  }

  return errors;
}

function getInputClassName(hasError: boolean): string {
  return [
    "w-full rounded-xl border bg-white px-4 py-2.5 text-sm text-[#0f172a] outline-none ring-[#0aa79d]/30 transition placeholder:text-[#94a3b8] focus:border-[#0aa79d] focus:ring-2",
    hasError ? "border-[#dc2626] focus:border-[#dc2626] focus:ring-[#dc2626]/20" : "border-[#e2e8f0]",
  ].join(" ");
}

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState("");
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);
  const [errorText, setErrorText] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const lastSubmitAtRef = useRef(0);

  const msgLen = message.length;
  const validationErrors = useMemo(
    () => validateForm({ name, email, phone, message, consent }),
    [name, email, phone, message, consent]
  );
  const canSubmit = Object.keys(validationErrors).length === 0 && !isSubmitting;

  function clearFieldError(field: keyof FieldErrors) {
    setFieldErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Honeypot антиспам: если автозаполнитель заполнил скрытое поле — не отправляем.
    if (website.trim().length > 0) {
      setSubmitStatus("success");
      setErrorText("");
      return;
    }

    if (isSubmitting) {
      return;
    }

    const nextErrors = validateForm({ name, email, phone, message, consent });
    if (Object.keys(nextErrors).length > 0) {
      setFieldErrors(nextErrors);
      setSubmitStatus(null);
      setErrorText("");
      return;
    }

    const now = Date.now();
    if (now - lastSubmitAtRef.current < MIN_SUBMIT_INTERVAL_MS) {
      setFieldErrors({});
      setSubmitStatus("error");
      setErrorText("Слишком часто отправляете. Подождите несколько секунд.");
      return;
    }
    lastSubmitAtRef.current = now;

    setIsSubmitting(true);
    setFieldErrors({});
    setSubmitStatus(null);
    setErrorText("");

    const payload = {
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      message: message.trim(),
      website: website.trim(),
    };

    try {
      await sendApplicationEmail(payload);
    
      try {
        await fetch("/api/save-to-sheets", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });
      } catch (sheetError) {
        console.error("Ошибка записи в Google Sheets:", sheetError);
      }
    
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setWebsite("");
      setConsent(false);
      setSubmitStatus("success");
    } catch (error) {
      setSubmitStatus("error");
      setErrorText(
        error instanceof Error && error.message
          ? error.message
          : SEND_EMAIL_USER_ERROR
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-[#e2e8f0] bg-[#f8fafc] p-6 shadow-[0_8px_24px_rgba(15,23,42,0.04)] sm:p-8"
    >
      <h3 className="text-xl font-bold tracking-tight text-[#0f172a] sm:text-2xl">
        Форма обратной связи FilterFlow
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-[#64748b] sm:text-[15px]">
        Оставьте заявку на расчёт или консультацию по фильтровальным мешкам и рукавам — ответим в рабочем порядке
      </p>

      <div className="mt-6 space-y-5">
        {/* Honeypot антиспам: обычный пользователь это поле не видит и не заполняет */}
        <input
          type="text"
          name="website"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          autoComplete="off"
          tabIndex={-1}
          aria-hidden="true"
          className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden opacity-0"
        />
        <div>
          <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-[#334155]">
            Ваше имя <span className="text-[#0aa79d]">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Иван Иванов"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              clearFieldError("name");
            }}
            className={getInputClassName(Boolean(fieldErrors.name))}
            aria-invalid={Boolean(fieldErrors.name)}
            aria-describedby={fieldErrors.name ? "contact-name-error" : undefined}
            required
          />
          {fieldErrors.name && (
            <p id="contact-name-error" className="mt-1.5 text-sm text-[#dc2626]">
              {fieldErrors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-[#334155]">
            Email <span className="text-[#0aa79d]">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="example@mail.ru"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              clearFieldError("email");
            }}
            className={getInputClassName(Boolean(fieldErrors.email))}
            aria-invalid={Boolean(fieldErrors.email)}
            aria-describedby={fieldErrors.email ? "contact-email-error" : undefined}
            required
          />
          {fieldErrors.email && (
            <p id="contact-email-error" className="mt-1.5 text-sm text-[#dc2626]">
              {fieldErrors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="contact-phone" className="mb-1.5 block text-sm font-medium text-[#334155]">
            Телефон
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+7 (___) ___-__-__"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
              clearFieldError("phone");
            }}
            className={getInputClassName(Boolean(fieldErrors.phone))}
            aria-invalid={Boolean(fieldErrors.phone)}
            aria-describedby={fieldErrors.phone ? "contact-phone-error" : undefined}
          />
          {fieldErrors.phone && (
            <p id="contact-phone-error" className="mt-1.5 text-sm text-[#dc2626]">
              {fieldErrors.phone}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-[#334155]">
            Сообщение <span className="text-[#0aa79d]">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            maxLength={MAX_MSG}
            placeholder="Ваш вопрос или комментарий (макс. 500 символов)"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              clearFieldError("message");
            }}
            className={`${getInputClassName(Boolean(fieldErrors.message))} resize-y`}
            aria-invalid={Boolean(fieldErrors.message)}
            aria-describedby={
              fieldErrors.message
                ? "contact-message-error contact-message-counter"
                : "contact-message-counter"
            }
            required
          />
          <div
            id="contact-message-counter"
            className="mt-1 flex justify-end text-xs text-[#94a3b8]"
          >
            {msgLen}/{MAX_MSG}
          </div>
          {fieldErrors.message && (
            <p id="contact-message-error" className="mt-1.5 text-sm text-[#dc2626]">
              {fieldErrors.message}
            </p>
          )}
        </div>

        <label className="flex cursor-pointer gap-3 text-sm leading-snug text-[#475569]">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => {
              setConsent(e.target.checked);
              clearFieldError("consent");
            }}
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-[#cbd5e1] text-[#0aa79d] focus:ring-[#0aa79d]"
            aria-invalid={Boolean(fieldErrors.consent)}
            aria-describedby={fieldErrors.consent ? "contact-consent-error" : undefined}
            required
          />
          <span>
            Даю согласие на обработку персональных данных и соглашаюсь с{" "}
            <Link
              href="/politika-konfidencialnosti"
              className="font-medium text-[#0aa79d] underline underline-offset-2 hover:text-[#088f86]"
            >
              политикой конфиденциальности
            </Link>
            .
          </span>
        </label>
        {fieldErrors.consent && (
          <p id="contact-consent-error" className="-mt-3 text-sm text-[#dc2626]">
            {fieldErrors.consent}
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-full bg-[#0aa79d] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#088f86] disabled:cursor-not-allowed disabled:bg-[#94a3b8] disabled:opacity-90"
        >
          {isSubmitting ? "Отправляем..." : "Отправить сообщение"}
        </button>
        {!isSubmitting && !canSubmit && Object.keys(fieldErrors).length === 0 && (
          <p className="text-sm text-[#64748b]">
            Заполните обязательные поля и подтвердите согласие на обработку данных.
          </p>
        )}
        {submitStatus === "success" && (
          <p className="text-sm font-medium text-[#0aa79d]" role="status">
            Заявка успешно отправлена. Мы свяжемся с вами в ближайшее время.
          </p>
        )}
        {submitStatus === "error" && (
          <p className="text-sm font-medium text-[#dc2626]" role="alert">
            {errorText || SEND_EMAIL_USER_ERROR}
          </p>
        )}
      </div>
    </form>
  );
}
