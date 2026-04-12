"use client";

import { useState } from "react";

export default function OrderFormSection() {
  const [agreed, setAgreed] = useState(false);

  return (
    <section id="order" className="bg-[#f8fafc] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div>
            <h2 className="text-[34px] font-bold leading-[1.08] tracking-[-0.02em] text-[#1f2937] md:text-[52px]">
              Оформить заказ
            </h2>

            <p className="mt-6 max-w-[520px] text-[16px] leading-[1.8] text-slate-600 md:text-[17px]">
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

              <a
                href="mailto:filterflow@mail.ru"
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
              </a>

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

          <div className="rounded-[22px] border border-[#e7edf2] bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.06)] md:p-8">
            <form className="space-y-5">
              <div>
                <label className="mb-2 block text-[14px] font-medium text-[#1f2937]">
                  Ваше имя *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Иван Иванов"
                  className="h-[56px] w-full rounded-[14px] border border-[#dbe4ea] px-4 text-[15px] text-[#1f2937] outline-none transition placeholder:text-slate-400 focus:border-[#23b8ad]"
                />
              </div>

              <div>
                <label className="mb-2 block text-[14px] font-medium text-[#1f2937]">
                  Телефон *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+7 (___) ___-__-__"
                  className="h-[56px] w-full rounded-[14px] border border-[#dbe4ea] px-4 text-[15px] text-[#1f2937] outline-none transition placeholder:text-slate-400 focus:border-[#23b8ad]"
                />
              </div>

              <div>
                <label className="mb-2 block text-[14px] font-medium text-[#1f2937]">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="example@mail.ru"
                  className="h-[56px] w-full rounded-[14px] border border-[#dbe4ea] px-4 text-[15px] text-[#1f2937] outline-none transition placeholder:text-slate-400 focus:border-[#23b8ad]"
                />
              </div>

              <div>
                <label className="mb-2 block text-[14px] font-medium text-[#1f2937]">
                  Тип продукции *
                </label>
                <select
                  required
                  defaultValue=""
                  className="h-[56px] w-full rounded-[14px] border border-[#dbe4ea] px-4 text-[15px] text-[#1f2937] outline-none transition focus:border-[#23b8ad]"
                >
                  <option value="" disabled>
                    Выберите тип продукции
                  </option>
                  <option>Мешки для аспирации</option>
                  <option>Фильтрационные рукава</option>
                  <option>Мешки для стружкоотсоса</option>
                  <option>Мешки для циклонов и УВП</option>
                  <option>Нестандартные мешки</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-[14px] font-medium text-[#1f2937]">
                  Комментарий
                </label>
                <textarea
                  rows={5}
                  maxLength={500}
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
                disabled={!agreed}
                className={`mt-2 flex h-[58px] w-full items-center justify-center rounded-[16px] text-[16px] font-semibold text-white transition ${
                  agreed
                    ? "bg-[#23b8ad] hover:bg-[#1ea79b]"
                    : "cursor-not-allowed bg-[#aab4c2]"
                }`}
              >
                Отправить заявку
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}