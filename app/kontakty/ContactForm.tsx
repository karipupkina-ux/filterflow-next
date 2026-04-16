"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import {
  sendApplicationEmail,
  SEND_EMAIL_USER_ERROR,
} from "@/lib/send-email-client";

const MAX_MSG = 500;

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
  const lastSubmitAtRef = useRef(0);

  // Защита от "тапа" / автосабмита с клиента.
  const MIN_SUBMIT_INTERVAL_MS = 10_000;

  const msgLen = message.length;
  const canSubmit =
    name.trim().length > 0 &&
    email.trim().length > 0 &&
    message.trim().length > 0 &&
    msgLen <= MAX_MSG &&
    consent &&
    !isSubmitting;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("[ContactForm] submit started");

    // Honeypot антиспам: если автозаполнитель заполнил скрытое поле — не отправляем.
    if (website.trim().length > 0) {
      console.log("[ContactForm] honeypot filled; blocking submission");
      return;
    }

    if (!canSubmit) {
      console.log("[ContactForm] submit blocked by canSubmit=false", {
        hasName: name.trim().length > 0,
        hasEmail: email.trim().length > 0,
        hasMessage: message.trim().length > 0,
        msgLen,
        withinLimit: msgLen <= MAX_MSG,
        consent,
        isSubmitting,
      });
      return;
    }

    const now = Date.now();
    if (now - lastSubmitAtRef.current < MIN_SUBMIT_INTERVAL_MS) {
      setSubmitStatus("error");
      setErrorText("Слишком часто отправляете. Подождите несколько секунд.");
      return;
    }
    lastSubmitAtRef.current = now;

    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorText("");

    const payload = {
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      message: message.trim(),
      website: website.trim(),
    };
    console.log("[ContactForm] payload prepared", payload);

    try {
      console.log("[ContactForm] before fetch");
      await sendApplicationEmail(payload);
      console.log("[ContactForm] after fetch");

      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setWebsite("");
      setConsent(false);
      setSubmitStatus("success");
    } catch (error) {
      console.error("[ContactForm] fetch failed", error);
      console.error("ContactForm:", error);
      setSubmitStatus("error");
      setErrorText(SEND_EMAIL_USER_ERROR);
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
          className="hidden"
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
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-xl border border-[#e2e8f0] bg-white px-4 py-2.5 text-sm text-[#0f172a] outline-none ring-[#0aa79d]/30 transition placeholder:text-[#94a3b8] focus:border-[#0aa79d] focus:ring-2"
            required
          />
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
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border border-[#e2e8f0] bg-white px-4 py-2.5 text-sm text-[#0f172a] outline-none ring-[#0aa79d]/30 transition placeholder:text-[#94a3b8] focus:border-[#0aa79d] focus:ring-2"
            required
          />
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
            onChange={(e) => setPhone(e.target.value)}
            className="w-full rounded-xl border border-[#e2e8f0] bg-white px-4 py-2.5 text-sm text-[#0f172a] outline-none ring-[#0aa79d]/30 transition placeholder:text-[#94a3b8] focus:border-[#0aa79d] focus:ring-2"
          />
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
            onChange={(e) => setMessage(e.target.value)}
            className="w-full resize-y rounded-xl border border-[#e2e8f0] bg-white px-4 py-2.5 text-sm text-[#0f172a] outline-none ring-[#0aa79d]/30 transition placeholder:text-[#94a3b8] focus:border-[#0aa79d] focus:ring-2"
            required
          />
          <div className="mt-1 flex justify-end text-xs text-[#94a3b8]">
            {msgLen}/{MAX_MSG}
          </div>
        </div>

        <label className="flex cursor-pointer gap-3 text-sm leading-snug text-[#475569]">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-[#cbd5e1] text-[#0aa79d] focus:ring-[#0aa79d]"
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

        <button
          type="submit"
          disabled={!canSubmit}
          className="w-full rounded-full bg-[#0aa79d] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#088f86] disabled:cursor-not-allowed disabled:bg-[#94a3b8] disabled:opacity-90"
        >
          {isSubmitting ? "Отправляем..." : "Отправить сообщение"}
        </button>
        {submitStatus === "success" && (
          <p className="text-sm font-medium text-[#0aa79d]">
            Спасибо! Мы получили заявку и свяжемся с вами в ближайшее время.
          </p>
        )}
        {submitStatus === "error" && (
          <p className="text-sm font-medium text-[#dc2626]">
            {errorText || SEND_EMAIL_USER_ERROR}
          </p>
        )}
      </div>
    </form>
  );
}
