"use client";

import Link from "next/link";
import { useState } from "react";
import {
  sendApplicationEmail,
  SEND_EMAIL_USER_ERROR,
} from "@/lib/send-email-client";

export default function ClampOrderForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [diameter, setDiameter] = useState("");
  const [quantity, setQuantity] = useState("");
  const [clampType, setClampType] = useState("");
  const [comment, setComment] = useState("");
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (
      !consent ||
      !name.trim() ||
      !phone.trim() ||
      !email.trim() ||
      !diameter.trim() ||
      !quantity.trim() ||
      !clampType
    ) {
      return;
    }
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      const message = [
        "Заявка: быстросъёмные хомуты для аспирации",
        "",
        `Диаметр (мм): ${diameter.trim()}`,
        `Количество (шт): ${quantity.trim()}`,
        `Тип хомута: ${clampType}`,
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
      setDiameter("");
      setQuantity("");
      setClampType("");
      setComment("");
      setConsent(false);
      setSubmitStatus("success");
    } catch (err) {
      console.error("ClampOrderForm:", err);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="clamp-name"
            className="mb-3 block text-[15px] font-semibold text-[#334155]"
          >
            Имя <span className="text-[#ef4444]">*</span>
          </label>
          <input
            id="clamp-name"
            name="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ваше имя"
            className="h-[56px] w-full rounded-[14px] border border-[#cfd8e3] px-5 text-[15px] text-[#0f172a] outline-none transition-colors duration-200 placeholder:text-[#94a3b8] focus:border-[#22c1b6] focus:ring-1 focus:ring-[#22c1b6]"
          />
        </div>

        <div>
          <label
            htmlFor="clamp-phone"
            className="mb-3 block text-[15px] font-semibold text-[#334155]"
          >
            Телефон <span className="text-[#ef4444]">*</span>
          </label>
          <input
            id="clamp-phone"
            name="phone"
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+7 (___) ___-__-__"
            className="h-[56px] w-full rounded-[14px] border border-[#cfd8e3] px-5 text-[15px] text-[#0f172a] outline-none transition-colors duration-200 placeholder:text-[#94a3b8] focus:border-[#22c1b6] focus:ring-1 focus:ring-[#22c1b6]"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="clamp-email"
          className="mb-3 block text-[15px] font-semibold text-[#334155]"
        >
          Email <span className="text-[#ef4444]">*</span>
        </label>
        <input
          id="clamp-email"
          name="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className="h-[56px] w-full rounded-[14px] border border-[#cfd8e3] px-5 text-[15px] text-[#0f172a] outline-none transition-colors duration-200 placeholder:text-[#94a3b8] focus:border-[#22c1b6] focus:ring-1 focus:ring-[#22c1b6]"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="clamp-diameter"
            className="mb-3 block text-[15px] font-semibold text-[#334155]"
          >
            Диаметр (мм) <span className="text-[#ef4444]">*</span>
          </label>
          <input
            id="clamp-diameter"
            name="diameter"
            type="text"
            required
            value={diameter}
            onChange={(e) => setDiameter(e.target.value)}
            placeholder="Например: 300"
            className="h-[56px] w-full rounded-[14px] border border-[#cfd8e3] px-5 text-[15px] text-[#0f172a] outline-none transition-colors duration-200 placeholder:text-[#94a3b8] focus:border-[#22c1b6] focus:ring-1 focus:ring-[#22c1b6]"
          />
        </div>

        <div>
          <label
            htmlFor="clamp-quantity"
            className="mb-3 block text-[15px] font-semibold text-[#334155]"
          >
            Количество (шт) <span className="text-[#ef4444]">*</span>
          </label>
          <input
            id="clamp-quantity"
            name="quantity"
            type="number"
            min={1}
            required
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="Например: 10"
            className="h-[56px] w-full rounded-[14px] border border-[#cfd8e3] px-5 text-[15px] text-[#0f172a] outline-none transition-colors duration-200 placeholder:text-[#94a3b8] focus:border-[#22c1b6] focus:ring-1 focus:ring-[#22c1b6]"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="clamp-type"
          className="mb-3 block text-[15px] font-semibold text-[#334155]"
        >
          Тип хомута <span className="text-[#ef4444]">*</span>
        </label>
        <select
          id="clamp-type"
          name="clampType"
          required
          value={clampType}
          onChange={(e) => setClampType(e.target.value)}
          className="h-[56px] w-full rounded-[14px] border border-[#cfd8e3] bg-white px-5 text-[15px] text-[#0f172a] outline-none transition-colors duration-200 focus:border-[#22c1b6] focus:ring-1 focus:ring-[#22c1b6]"
        >
          <option value="" disabled>
            Выберите тип хомута
          </option>
          <option value="Ленточный">Ленточный</option>
          <option value="Профильный">Профильный</option>
          <option value="Рычажный">Рычажный</option>
          <option value="Нужна консультация">Нужна консультация</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="clamp-comment"
          className="mb-3 block text-[15px] font-semibold text-[#334155]"
        >
          Комментарий
        </label>
        <textarea
          id="clamp-comment"
          name="comment"
          maxLength={500}
          rows={5}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Дополнительная информация о заказе (максимум 500 символов)"
          className="w-full rounded-[14px] border border-[#cfd8e3] px-5 py-4 text-[15px] text-[#0f172a] outline-none transition-colors duration-200 placeholder:text-[#94a3b8] focus:border-[#22c1b6] focus:ring-1 focus:ring-[#22c1b6]"
        />
        <div className="mt-2 text-right text-[14px] text-[#64748b]">
          {comment.length}/500
        </div>
      </div>

      <div className="pt-1">
        <label className="flex items-start gap-3 text-[15px] leading-[1.6] text-[#334155]">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            required
            className="mt-1 h-[24px] w-[24px] rounded border border-[#cfd8e3] accent-[#149c94]"
          />
          <span>
            Даю согласие на обработку персональных данных и соглашаюсь с{" "}
            <Link
              href="/politika-konfidencialnosti"
              className="font-medium text-[#149c94] underline underline-offset-4 transition-colors duration-200 hover:text-[#118b84]"
            >
              политикой конфиденциальности
            </Link>{" "}
            <span className="text-[#ef4444]">*</span>
          </span>
        </label>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex h-[58px] w-full items-center justify-center rounded-[16px] bg-[#149c94] px-8 text-[18px] font-semibold text-white shadow-[0_12px_30px_rgba(20,156,148,0.24)] transition-all duration-200 hover:bg-[#118b84] disabled:cursor-not-allowed disabled:bg-[#94a3b8]"
      >
        {isSubmitting ? "Отправка..." : "Отправить заявку"}
      </button>

      {submitStatus === "success" && (
        <p className="text-center text-sm font-medium text-[#149c94]">
          Заявка успешно отправлена
        </p>
      )}
      {submitStatus === "error" && (
        <p className="text-center text-sm font-medium text-red-600">
          {SEND_EMAIL_USER_ERROR}
        </p>
      )}
    </form>
  );
}
