"use client";

import Link from "next/link";
import { useState } from "react";
import {
  sendApplicationEmail,
  SEND_EMAIL_USER_ERROR,
} from "@/lib/send-email-client";

export default function MeshkiAspiraciiOrderForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [equipment, setEquipment] = useState("");
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !email.trim()) {
      return;
    }
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      const message = [
        "Заявка: мешки для аспирации (страница каталога)",
        "",
        "Тип мешка / оборудование:",
        equipment.trim() || "—",
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
      setEquipment("");
      setComment("");
      setSubmitStatus("success");
    } catch (err) {
      console.error("MeshkiAspiraciiOrderForm:", err);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  const canSubmit =
    name.trim().length > 0 &&
    phone.trim().length > 0 &&
    email.trim().length > 0 &&
    !isSubmitting;

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="mb-5">
        <label className="mb-3 block text-[16px] font-medium text-slate-800">
          Ваше имя <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Иван Иванов"
          className="h-[58px] w-full rounded-2xl border border-[#e6e8ec] px-5 text-[16px] text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-teal-500"
        />
      </div>

      <div className="mb-5">
        <label className="mb-3 block text-[16px] font-medium text-slate-800">
          Телефон <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          name="phone"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+7 (___) ___-__-__"
          className="h-[58px] w-full rounded-2xl border border-[#e6e8ec] px-5 text-[16px] text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-teal-500"
        />
      </div>

      <div className="mb-5">
        <label className="mb-3 block text-[16px] font-medium text-slate-800">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="example@mail.ru"
          className="h-[58px] w-full rounded-2xl border border-[#e6e8ec] px-5 text-[16px] text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-teal-500"
        />
      </div>

      <div className="mb-5">
        <label className="mb-3 block text-[16px] font-medium text-slate-800">
          Тип мешка / оборудование
        </label>
        <input
          type="text"
          name="equipment"
          value={equipment}
          onChange={(e) => setEquipment(e.target.value)}
          placeholder="Например: верхний мешок для стружкоотсоса"
          className="h-[58px] w-full rounded-2xl border border-[#e6e8ec] px-5 text-[16px] text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-teal-500"
        />
      </div>

      <div className="mb-6">
        <label className="mb-3 block text-[16px] font-medium text-slate-800">
          Комментарий
        </label>
        <textarea
          name="message"
          rows={4}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Размеры, количество, особые требования..."
          className="w-full resize-none rounded-2xl border border-[#e6e8ec] px-5 py-4 text-[16px] text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-teal-500"
        />
      </div>

      <button
        type="submit"
        disabled={!canSubmit}
        className="flex h-[62px] w-full items-center justify-center rounded-2xl bg-[#22b8ad] px-6 text-[18px] font-semibold text-white transition hover:bg-[#1aa99f] disabled:cursor-not-allowed disabled:bg-slate-400"
      >
        {isSubmitting ? "Отправка..." : "Отправить заявку"}
      </button>

      {submitStatus === "success" && (
        <p className="text-center text-sm font-medium text-teal-700">
          Заявка успешно отправлена
        </p>
      )}
      {submitStatus === "error" && (
        <p className="text-center text-sm font-medium text-red-600">
          {SEND_EMAIL_USER_ERROR}
        </p>
      )}

      <p className="mt-6 text-center text-[14px] leading-6 text-slate-400">
        Нажимая кнопку, вы соглашаетесь с{" "}
        <Link
          href="/politika-konfidencialnosti"
          className="font-medium text-teal-600 transition hover:text-teal-700"
        >
          политикой конфиденциальности
        </Link>
      </p>
    </form>
  );
}
