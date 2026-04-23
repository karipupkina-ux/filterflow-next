"use client";

import Link from "next/link";
import { useState } from "react";
import EmailLink from "../EmailLink";
import {
  sendApplicationEmail,
  SEND_EMAIL_USER_ERROR,
} from "@/lib/send-email-client";

export default function OrderFormSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [productType, setProductType] = useState("");
  const [comment, setComment] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!agreed || !name.trim() || !phone.trim() || !email.trim() || !productType) {
      return;
    }
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      const message = [
        "Заявка: оформить заказ (главная страница)",
        "",
        "Тип продукции:",
        productType,
        "",
        `Email: ${email.trim()}`,
        "",
        "Комментарий:",
        comment.trim() || "—",
      ].join("\n");
      await sendApplicationEmail({
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        message,
      });
      setName("");
      setPhone("");
      setEmail("");
      setProductType("");
      setComment("");
      setAgreed(false);
      setSubmitStatus("success");
    } catch (err) {
      console.error("OrderFormSection:", err);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  const productOptions = [
    "Мешки для аспирации",
    "Фильтрационные рукава",
    "Мешки для стружкоотсоса",
    "Мешки для циклонов и УВП",
    "Нестандартные мешки",
  ];

  const canSubmit =
    agreed &&
    name.trim().length > 0 &&
    phone.trim().length > 0 &&
    email.trim().length > 0 &&
    productType.length > 0 &&
    !isSubmitting;

  return (
    <section id="order" className="bg-[#f8fafc] py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div>
            <h2 className="text-[28px] font-bold leading-[1.12] tracking-[-0.02em] text-[#1f2937] sm:text-[34px] md:text-[52px]">
              Оформить заказ
            </h2>

            <p className="mt-5 max-w-[520px] text-[14px] leading-[1.7] text-slate-600 sm:text-[16px] md:text-[17px]">
              Заполните форму — уточним задачу по аспирации или пылеулавливанию и
              подберём рукавные фильтры или мешки под ваше оборудование.
              Изготавливаем фильтровальные мешки и рукава точно по требованиям.
            </p>

            <div className="mt-10 space-y-6">
              <a
                href="tel:+79514992576"
                className="group flex items-start gap-4"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] bg-[#dff5f1] text-[#23b8ad] transition group-hover:bg-[#23b8ad] group-hover:text-white">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 0 1 2-2h2.2a1 1 0 0 1 .98.804l.57 2.61a1 1 0 0 1-.29.95L6.97 8.85a16 16 0 0 0 8.18 8.18l1.49-1.49a1 1 0 0 1 .95-.29l2.61.57A1 1 0 0 1 21 16.8V19a2 2 0 0 1-2 2h-1C9.716 21 3 14.284 3 6V5Z"
                    />
                  </svg>
                </div>

                <div>
                  <div className="text-[18px] font-semibold text-[#1f2937]">
                    Телефон
                  </div>
                  <div className="mt-1 text-[17px] text-[#23b8ad] transition group-hover:text-[#179b91]">
                    +7 951 499-25-76
                  </div>
                </div>
              </a>

              <EmailLink className="group flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] bg-[#dff5f1] text-[#23b8ad] transition group-hover:bg-[#23b8ad] group-hover:text-white">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16v12H4z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4 7 8 6 8-6"
                    />
                  </svg>
                </div>

                <div>
                  <div className="text-[18px] font-semibold text-[#1f2937]">
                    Email
                  </div>
                  <div className="mt-1 text-[17px] text-[#23b8ad] transition group-hover:text-[#179b91]">
                    filterflow@mail.ru
                  </div>
                </div>
              </EmailLink>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] bg-[#dff5f1] text-[#23b8ad]">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 7v5l3 3"
                    />
                  </svg>
                </div>

                <div>
                  <div className="text-[18px] font-semibold text-[#1f2937]">
                    Режим работы
                  </div>
                  <div className="mt-1 text-[17px] text-slate-500">
                    Прием заявок 24/7
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[22px] border border-[#e7edf2] bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)] sm:p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="mb-2 block text-[14px] font-medium text-[#1f2937]">
                  Ваше имя *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Иван Иванов"
                  className="h-12 w-full rounded-[14px] border border-[#dbe4ea] px-4 text-[15px] text-[#1f2937] outline-none transition placeholder:text-slate-400 focus:border-[#23b8ad] sm:h-[56px]"
                />
              </div>

              <div>
                <label className="mb-2 block text-[14px] font-medium text-[#1f2937]">
                  Телефон *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+7 (___) ___-__-__"
                  className="h-12 w-full rounded-[14px] border border-[#dbe4ea] px-4 text-[15px] text-[#1f2937] outline-none transition placeholder:text-slate-400 focus:border-[#23b8ad] sm:h-[56px]"
                />
              </div>

              <div>
                <label className="mb-2 block text-[14px] font-medium text-[#1f2937]">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@mail.ru"
                  className="h-12 w-full rounded-[14px] border border-[#dbe4ea] px-4 text-[15px] text-[#1f2937] outline-none transition placeholder:text-slate-400 focus:border-[#23b8ad] sm:h-[56px]"
                />
              </div>

              <div>
                <label className="mb-2 block text-[14px] font-medium text-[#1f2937]">
                  Тип продукции *
                </label>
                <select
                  name="productType"
                  required
                  value={productType}
                  onChange={(e) => setProductType(e.target.value)}
                  className="h-12 w-full rounded-[14px] border border-[#dbe4ea] px-4 text-[15px] text-[#1f2937] outline-none transition focus:border-[#23b8ad] sm:h-[56px]"
                >
                  <option value="" disabled>
                    Выберите тип продукции
                  </option>
                  {productOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-2 block text-[14px] font-medium text-[#1f2937]">
                  Комментарий
                </label>
                <textarea
                  name="comment"
                  rows={5}
                  maxLength={500}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Укажите размеры, количество и другие детали заказа (макс. 500 символов)"
                  className="w-full rounded-[14px] border border-[#dbe4ea] px-4 py-4 text-[15px] text-[#1f2937] outline-none transition placeholder:text-slate-400 focus:border-[#23b8ad]"
                />
              </div>

              <label className="flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="peer sr-only"
                />

                <span
                  className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-[8px] border transition ${
                    agreed
                      ? "border-[#23b8ad] bg-[#23b8ad] text-white"
                      : "border-[#cfd9e1] bg-white text-transparent"
                  }`}
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>

                <span className="text-[13px] leading-[1.6] text-slate-500">
                  Даю согласие на обработку персональных данных и соглашаюсь с{" "}
                  <a
                    href="/politika-konfidencialnosti"
                    className="text-[#23b8ad] underline underline-offset-2"
                  >
                    политикой конфиденциальности
                  </a>
                </span>
              </label>

              <button
                type="submit"
                disabled={!canSubmit}
                className={`mt-2 flex h-12 w-full items-center justify-center rounded-[16px] text-[15px] font-semibold text-white transition sm:h-[58px] sm:text-[16px] ${
                  canSubmit
                    ? "bg-[#23b8ad] hover:bg-[#1ea79b]"
                    : "cursor-not-allowed bg-[#aab4c2]"
                }`}
              >
                {isSubmitting ? "Отправка..." : "Отправить заявку"}
              </button>

              {submitStatus === "success" && (
                <p className="text-center text-sm font-medium text-[#23b8ad]">
                  Заявка успешно отправлена
                </p>
              )}
              {submitStatus === "error" && (
                <p className="text-center text-sm font-medium text-red-600">
                  {SEND_EMAIL_USER_ERROR}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
