"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import {
  sendApplicationEmail,
  SEND_EMAIL_USER_ERROR,
} from "@/lib/send-email-client";

export default function ContactsSection() {
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

  // Защита от "тапа" / автосабмита с клиента.
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

    if (!formElement.reportValidity()) {
      return;
    }

    // Honeypot антиспам: если автозаполнитель заполнил скрытое поле — не отправляем.
    if (form.website.trim().length > 0) {
      console.log("[ContactsSection] honeypot filled; blocking submission");
      return;
    }

    if (!form.agree || isSubmitting) {
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
      console.error("ContactsSection:", error);
      setSubmitStatus("error");
      setErrorText(SEND_EMAIL_USER_ERROR);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contacts" className="bg-[#f6f7fb] py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-3 text-[42px] font-bold leading-[1.04] tracking-[-0.02em] text-[#0f172a] md:text-[54px]">
            Контакты
          </h2>

          <p className="mx-auto max-w-2xl text-[16px] leading-[1.6] text-[#667085]">
            Свяжитесь с нами удобным способом — мы всегда готовы ответить на ваши
            вопросы
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          {/* Левая колонка */}
          <div className="space-y-5">
            <a
              href="tel:+79514992576"
              className="group flex items-start gap-4 rounded-[24px] bg-white px-6 py-5 shadow-[0_8px_28px_rgba(15,23,42,0.05)] transition-all duration-200 hover:-translate-y-[1px] hover:shadow-[0_12px_34px_rgba(15,23,42,0.08)]"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#c9f0ea] text-[#11b3a6] transition-colors duration-200 group-hover:bg-[#b9ebe3]">
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.89.33 1.76.63 2.59a2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6.09 6.09l1.49-1.24a2 2 0 0 1 2.11-.45c.83.3 1.7.51 2.59.63A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>

              <div>
                <div className="mb-1 text-[15px] font-semibold text-[#0f172a] transition-colors duration-200 group-hover:text-[#11b3a6]">
                  Телефон
                </div>
                <div className="mb-1 text-[17px] font-medium text-[#11b3a6] transition-colors duration-200 group-hover:text-[#0f9f93]">
                  +7 951 499-25-76
                </div>
                <div className="text-[14px] leading-[1.55] text-[#667085]">
                  Прием звонков 24/7
                </div>
              </div>
            </a>

            <Link
              href="/kontakty"
              className="group flex items-start gap-4 rounded-[24px] bg-white px-6 py-5 shadow-[0_8px_28px_rgba(15,23,42,0.05)] transition-all duration-200 hover:-translate-y-[1px] hover:shadow-[0_12px_34px_rgba(15,23,42,0.08)]"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#c9f0ea] text-[#11b3a6] transition-colors duration-200 group-hover:bg-[#b9ebe3]">
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 7l9 6 9-6" />
                </svg>
              </div>

              <div>
                <div className="mb-1 text-[15px] font-semibold text-[#0f172a] transition-colors duration-200 group-hover:text-[#11b3a6]">
                  Email
                </div>
                <div className="mb-1 text-[17px] font-medium text-[#11b3a6] transition-colors duration-200 group-hover:text-[#0f9f93]">
                  filterflow@mail.ru
                </div>
                <div className="text-[14px] leading-[1.55] text-[#667085]">
                  Ответим в течение 24 часов
                </div>
              </div>
            </Link>

            <div className="flex items-start gap-4 rounded-[24px] bg-white px-6 py-5 shadow-[0_8px_28px_rgba(15,23,42,0.05)]">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#c9f0ea] text-[#11b3a6]">
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 21s-6-4.35-6-10a6 6 0 1 1 12 0c0 5.65-6 10-6 10z" />
                  <circle cx="12" cy="11" r="2.5" />
                </svg>
              </div>

              <div>
                <div className="mb-1 text-[15px] font-semibold text-[#0f172a]">
                  География работы
                </div>
                <div className="text-[14px] leading-[1.55] text-[#667085]">
                  Работаем по всей России и странам СНГ. Доставка в любой
                  регион.
                </div>
              </div>
            </div>

            <div className="rounded-[24px] bg-white px-6 py-5 shadow-[0_8px_28px_rgba(15,23,42,0.05)]">
              <div className="mb-4 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#c9f0ea] text-[#11b3a6]">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="4" y="4" width="16" height="16" rx="3" />
                    <path d="M9 9h6v6H9z" />
                  </svg>
                </div>

                <div>
                  <div className="mb-1 text-[15px] font-semibold text-[#0f172a]">
                    Мессенджеры
                  </div>
                  <div className="text-[14px] leading-[1.55] text-[#667085]">
                    Пишите нам в удобный мессенджер
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://wa.me/79514992576"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#25D366] transition-transform duration-200 hover:scale-105"
                  aria-label="WhatsApp"
                >
                  <img
                    src="/images/whatsapp.png"
                    alt="WhatsApp"
                    className="h-10 w-10 object-contain"
                    style={{ filter: "brightness(0) invert(1)" }}
                  />
                </a>

                <a
                  href="https://t.me/Violetta0502"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#229ED9] transition-transform duration-200 hover:scale-105"
                  aria-label="Telegram"
                >
                  <img
                    src="/images/telegram.png"
                    alt="Telegram"
                    className="h-10 w-10 object-contain"
                  />
                </a>

                <a
                  href="https://max.ru/u/f9LHodD0cOLehfNZxc-dfvXrRQQ-ApKrfczCjbhEa_va3lGdtndd7SgNP8U"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#8b5cf6] transition-transform duration-200 hover:scale-105"
                  aria-label="MAX"
                >
                  <img
                    src="/images/max.png"
                    alt="MAX"
                    className="h-10 w-10 object-contain"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Правая колонка */}
          <div className="rounded-[28px] bg-white px-6 py-7 shadow-[0_10px_40px_rgba(15,23,42,0.06)] md:px-8">
            <h3 className="mb-5 text-[28px] font-bold leading-[1.08] tracking-[-0.02em] text-[#0f172a]">
              Напишите нам
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Honeypot антиспам: обычный пользователь это поле не видит и не заполняет */}
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
                <label className="mb-2 block text-[12px] font-medium text-[#344054]">
                  Ваше имя *
                </label>
                <input
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
                <label className="mb-2 block text-[12px] font-medium text-[#344054]">
                  Email *
                </label>
                <input
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
                <label className="mb-2 block text-[12px] font-medium text-[#344054]">
                  Телефон
                </label>
                <input
                  name="phone"
                  type="text"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+7 (___) ___-__-__"
                  className="h-11 w-full rounded-2xl border border-[#d8dee8] px-4 text-[14px] text-[#0f172a] outline-none transition focus:border-[#11b3a6] focus:ring-2 focus:ring-[#11b3a6]/10"
                />
              </div>

              <div>
                <label className="mb-2 block text-[12px] font-medium text-[#344054]">
                  Сообщение *
                </label>
                <textarea
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

              <div className="flex items-start gap-3">
                <label className="relative mt-0.5 inline-flex cursor-pointer items-center">
                  <input
                    name="agree"
                    type="checkbox"
                    checked={form.agree}
                    onChange={handleChange}
                    className="peer sr-only"
                  />
                  <span className="flex h-7 w-7 items-center justify-center rounded-[8px] border border-[#98a2b3] bg-white transition peer-checked:border-[#11b3a6] peer-checked:bg-[#11b3a6]">
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
                    href="/politika-konfidencialnosti"
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
        </div>
      </div>
    </section>
  );
}