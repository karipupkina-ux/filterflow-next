"use client";

import Link from "next/link";
import { useState } from "react";
import {
  sendApplicationEmail,
  SEND_EMAIL_USER_ERROR,
} from "@/lib/send-email-client";

type ProductInquiryFormProps = {
  productName: string;
  detailsLabel?: string;
  detailsPlaceholder?: string;
};

export default function ProductInquiryForm({
  productName,
  detailsLabel = "Параметры / размеры",
  detailsPlaceholder = "Укажите размеры, количество или модель оборудования",
}: ProductInquiryFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const [comment, setComment] = useState("");
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!consent || !name.trim() || !phone.trim() || !email.trim()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const message = [
        `Заявка: ${productName}`,
        "",
        `${detailsLabel}:`,
        details.trim() || "—",
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
      setDetails("");
      setComment("");
      setConsent(false);
      setSubmitStatus("success");
    } catch (error) {
      console.error("ProductInquiryForm:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  const canSubmit =
    consent &&
    name.trim().length > 0 &&
    phone.trim().length > 0 &&
    email.trim().length > 0 &&
    !isSubmitting;

  const fieldClass =
    "h-[56px] w-full rounded-[14px] border border-[#d8e1e8] bg-white px-4 text-[15px] text-[#0f172a] outline-none transition placeholder:text-[#94a3b8] focus:border-[#22bdb0] focus:ring-1 focus:ring-[#22bdb0]";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="product-inquiry-name" className="mb-2 block text-[14px] font-semibold text-[#334155]">
            Ваше имя <span className="text-red-500">*</span>
          </label>
          <input
            id="product-inquiry-name"
            type="text"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Иван Иванов"
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor="product-inquiry-phone" className="mb-2 block text-[14px] font-semibold text-[#334155]">
            Телефон <span className="text-red-500">*</span>
          </label>
          <input
            id="product-inquiry-phone"
            type="tel"
            required
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            placeholder="+7 (___) ___-__-__"
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="product-inquiry-email" className="mb-2 block text-[14px] font-semibold text-[#334155]">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          id="product-inquiry-email"
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="example@mail.ru"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="product-inquiry-details" className="mb-2 block text-[14px] font-semibold text-[#334155]">
          {detailsLabel}
        </label>
        <input
          id="product-inquiry-details"
          type="text"
          value={details}
          onChange={(event) => setDetails(event.target.value)}
          placeholder={detailsPlaceholder}
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="product-inquiry-comment" className="mb-2 block text-[14px] font-semibold text-[#334155]">
          Комментарий
        </label>
        <textarea
          id="product-inquiry-comment"
          rows={4}
          maxLength={700}
          value={comment}
          onChange={(event) => setComment(event.target.value)}
          placeholder="Дополнительные требования, материал, срок, количество..."
          className="w-full resize-none rounded-[14px] border border-[#d8e1e8] bg-white px-4 py-4 text-[15px] text-[#0f172a] outline-none transition placeholder:text-[#94a3b8] focus:border-[#22bdb0] focus:ring-1 focus:ring-[#22bdb0]"
        />
      </div>

      <label className="flex min-h-11 cursor-pointer items-start gap-3 py-1 text-[13px] leading-[1.6] text-[#64748b]">
        <input
          type="checkbox"
          checked={consent}
          onChange={(event) => setConsent(event.target.checked)}
          required
          className="mt-1 h-4 w-4 shrink-0 rounded border-[#cbd5e1] accent-[#149c94]"
        />
        <span>
          Даю согласие на обработку персональных данных и соглашаюсь с{" "}
          <Link href="/politika-konfidencialnosti/" className="font-medium text-[#149c94] underline underline-offset-3">
            политикой конфиденциальности
          </Link>
          .
        </span>
      </label>

      <button
        type="submit"
        disabled={!canSubmit}
        className="inline-flex h-[58px] w-full items-center justify-center rounded-[16px] bg-[#149c94] px-7 text-[17px] font-semibold text-white shadow-[0_12px_30px_rgba(20,156,148,0.22)] transition hover:bg-[#118b84] disabled:cursor-not-allowed disabled:bg-[#94a3b8]"
      >
        {isSubmitting ? "Отправка..." : "Отправить заявку"}
      </button>

      {submitStatus === "success" && (
        <p className="text-center text-sm font-medium text-[#149c94]">Заявка успешно отправлена</p>
      )}
      {submitStatus === "error" && (
        <p className="text-center text-sm font-medium text-red-600">{SEND_EMAIL_USER_ERROR}</p>
      )}
    </form>
  );
}
