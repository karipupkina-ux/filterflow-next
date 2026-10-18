"use client";

import { useRef, useState } from "react";
import {
  sendApplicationEmail,
  SEND_EMAIL_USER_ERROR,
} from "@/lib/send-email-client";

export default function ContactFormClient() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    website: "",
    agree: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);
  const [errorText, setErrorText] = useState("");
  const lastSubmitAtRef = useRef(0);

  const MIN_SUBMIT_INTERVAL_MS = 10_000;

  const isButtonActive =
    form.agree &&
    form.name.trim().length > 0 &&
    form.email.trim().length > 0 &&
    form.message.trim().length > 0 &&
    !isSubmitting;

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setForm((prev) => ({ ...prev, [name]: checked }));
      return;
    }

    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formElement = e.currentTarget;

    if (!formElement.reportValidity()) return;

    if (form.website.trim().length > 0) {
      console.log("[ContactFormClient] honeypot filled; blocking submission");
      return;
    }

    if (!form.agree || isSubmitting) return;

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

    try {
      await sendApplicationEmail({
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        message: form.message.trim(),
        website: form.website.trim(),
      });

      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
        website: "",
        agree: false,
      });
      setSubmitStatus("success");
    } catch (error) {
      console.error("ContactFormClient:", error);
      setSubmitStatus("error");
      setErrorText(SEND_EMAIL_USER_ERROR);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="rounded-[28px] bg-white px-6 py-7 shadow-[0_10px_40px_rgba(15,23,42,0.06)] md:px-8">
      <h3 className="mb-5 text-[28px] font-bold leading-[1.08] tracking-[-0.02em] text-[#0f172a]">
        Напишите нам
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="website"
          value={form.website}
          onChange={handleChange}
          autoComplete="off"
          tabIndex={-1}
          aria-hidden="true"
          className="hidden"
        />

        <div>
          <label htmlFor="home-contact-name" className="mb-2 block text-[12px] font-medium text-[#344054]">
            Ваше имя *
          </label>
          <input
            id="home-contact-name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Иван Иванов"
            className="h-11 w-full rounded-2xl border border-[#d8dee8] px-4 text-[14px] text-[#0f172a] outline-none transition focus:border-[#11b3a6] focus:ring-2 focus:ring-[#11b3a6]/10"
          />
        </div>

        <div>
          <label htmlFor="home-contact-email" className="mb-2 block text-[12px] font-medium text-[#344054]">
            Email *
          </label>
          <input
            id="home-contact-email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="example@mail.ru"
            className="h-11 w-full rounded-2xl border border-[#d8dee8] px-4 text-[14px] text-[#0f172a] outline-none transition focus:border-[#11b3a6] focus:ring-2 focus:ring-[#11b3a6]/10"
          />
        </div>

        <div>
          <label htmlFor="home-contact-phone" className="mb-2 block text-[12px] font-medium text-[#344054]">
            Телефон
          </label>
          <input
            id="home-contact-phone"
            name="phone"
            type="text"
            value={form.phone}
            onChange={handleChange}
            placeholder="+7 (___) ___-__-__"
            className="h-11 w-full rounded-2xl border border-[#d8dee8] px-4 text-[14px] text-[#0f172a] outline-none transition focus:border-[#11b3a6] focus:ring-2 focus:ring-[#11b3a6]/10"
          />
        </div>

        <div>
          <label htmlFor="home-contact-message" className="mb-2 block text-[12px] font-medium text-[#344054]">
            Сообщение *
          </label>
          <textarea
            id="home-contact-message"
            name="message"
            required
            value={form.message}
            onChange={handleChange}
            placeholder="Ваш вопрос или комментарий (макс. 500 символов)"
            rows={5}
            maxLength={500}
            className="w-full resize-none rounded-2xl border border-[#d8dee8] px-4 py-3 text-[14px] text-[#0f172a] outline-none transition focus:border-[#11b3a6] focus:ring-2 focus:ring-[#11b3a6]/10"
          />
          <div className="mt-2 text-right text-[11px] text-[#98a2b3]">
            {form.message.length}/500
          </div>
        </div>

        <div className="flex min-h-11 items-start gap-3">
          <label
            htmlFor="home-contact-agree"
            className="relative inline-flex min-h-11 cursor-pointer items-center"
          >
            <input
              id="home-contact-agree"
              name="agree"
              type="checkbox"
              checked={form.agree}
              onChange={handleChange}
              className="peer sr-only"
            />
            <span className="sr-only">
              Согласие на обработку персональных данных
            </span>
            <span className="flex h-7 w-7 items-center justify-center rounded-[8px] border border-[#98a2b3] bg-white transition peer-focus-visible:ring-2 peer-focus-visible:ring-[#11b3a6] peer-focus-visible:ring-offset-2 peer-checked:border-[#11b3a6] peer-checked:bg-[#11b3a6]">
              {form.agree && (
                <svg
                  className="h-4 w-4 text-white"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 10l3 3 7-7" />
                </svg>
              )}
            </span>
          </label>

          <p className="pt-0.5 text-[12px] leading-[1.5] text-[#667085]">
            Даю согласие на обработку персональных данных и соглашаюсь с{" "}
            <a
              href="/politika-konfidencialnosti/"
              className="text-[#11b3a6] underline underline-offset-2 transition hover:text-[#0f9f93]"
            >
              политикой конфиденциальности
            </a>
          </p>
        </div>

        <button
          type="submit"
          disabled={!isButtonActive}
          className={`flex h-14 w-full items-center justify-center rounded-2xl text-[16px] font-semibold text-white shadow-[0_8px_24px_rgba(15,23,42,0.10)] transition ${
            isButtonActive
              ? "bg-[#11b3a6] hover:bg-[#0f9f93]"
              : "cursor-not-allowed bg-[#98a2b3]"
          }`}
        >
          {isSubmitting ? "Отправляем..." : "Отправить сообщение"}
        </button>

        {submitStatus === "success" && (
          <p className="text-sm font-medium text-[#11b3a6]">
            Спасибо! Мы получили заявку и свяжемся с вами в ближайшее время.
          </p>
        )}

        {submitStatus === "error" && (
          <p className="text-sm font-medium text-[#dc2626]">
            {errorText || SEND_EMAIL_USER_ERROR}
          </p>
        )}
      </form>
    </div>
  );
}
