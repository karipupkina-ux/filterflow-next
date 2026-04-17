"use client";

import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

export default function FAQSection() {
  const faqs: FaqItem[] = [
    {
      question: "Из каких материалов изготавливаются фильтровальные мешки?",
      answer:
        "Мы используем нетканые полипропиленовые материалы, полиэстер, а также специальные антистатические ткани. Выбор материала зависит от условий эксплуатации: температуры, влажности, химического состава пыли и требований к тонкости фильтрации.",
    },
    {
      question: "Можно ли заказать мешки нестандартного размера?",
      answer:
        "Да, мы специализируемся на изготовлении мешков по индивидуальным размерам. Достаточно предоставить чертёж или образец — мы изготовим точную копию или улучшенный аналог. Минимальный заказ на нестандартные изделия уточняйте у менеджера.",
    },
    {
      question: "Какой срок изготовления и доставки?",
      answer:
        "Стандартные позиции из наличия отправляем в течение 1–2 рабочих дней. Изготовление нестандартных мешков занимает от 3 до 10 рабочих дней в зависимости от объёма и сложности. Доставка по России — от 1 до 7 дней в зависимости от региона.",
    },
    {
      question: "Подойдут ли ваши мешки к моему оборудованию?",
      answer:
        "Мы производим мешки для большинства популярных марок стружкоотсосов, аспирационных установок и циклонов. Укажите марку и модель вашего оборудования — мы подберём подходящий вариант или изготовим мешок по вашим параметрам.",
    },
    {
      question: "Какой минимальный объём заказа?",
      answer:
        "Для стандартных позиций минимальный заказ — от 1 штуки. Для нестандартных изделий минимальная партия обсуждается индивидуально и зависит от сложности изготовления. Мы работаем как с частными мастерами, так и с крупными предприятиями.",
    },
    {
      question: "Как правильно подобрать степень фильтрации?",
      answer:
        "Степень фильтрации выбирается исходя из типа обрабатываемого материала и требований к чистоте воздуха. Для деревообработки обычно достаточно 5–25 мкм. Для мелкодисперсной пыли (МДФ, лак, краска) рекомендуем 1–5 мкм. Наши специалисты помогут с выбором бесплатно.",
    },
    {
      question: "Как оформить заказ?",
      answer:
        "Оформить заказ можно несколькими способами: заполнить форму на сайте, написать нам в WhatsApp или Telegram, позвонить по телефону +7 951 499-25-76 или отправить письмо на filterflow@mail.ru. Менеджер свяжется с вами в течение нескольких часов.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="bg-[#f8fafc] py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mb-10 text-center md:mb-12">
          <div className="mb-4 inline-flex rounded-full bg-[#e8faf7] px-5 py-2 text-[12px] font-medium uppercase tracking-[0.18em] text-[#0f9f93]">
            Часто задаваемые вопросы
          </div>

          <h2 className="text-[28px] font-bold leading-[1.12] tracking-[-0.02em] text-[#1f2937] sm:text-[34px] md:text-[52px]">
            Вопросы о мешках для аспирации и рукавных фильтрах
          </h2>

          <p className="mx-auto mt-3 max-w-3xl text-[14px] leading-[1.65] text-slate-500 sm:text-[16px] md:text-[17px]">
            Подбор фильтровальных материалов, сроки и доставка. Не нашли ответ —
            напишите нам.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className={`overflow-hidden rounded-[16px] border bg-white transition ${
                  isOpen
                    ? "border-[#9be3db] shadow-[0_8px_24px_rgba(15,23,42,0.06)]"
                    : "border-[#e8edf2]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left sm:px-5 sm:py-5 md:px-6"
                >
                  <span className="text-[15px] font-medium leading-[1.45] text-[#1f2937] transition sm:text-[17px] md:text-[18px]">
                    {item.question}
                  </span>

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition ${
                      isOpen
                        ? "bg-[#23b8ad] text-white"
                        : "bg-[#f3f6f8] text-slate-400"
                    }`}
                  >
                    <svg
                      className={`h-4 w-4 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 9l6 6 6-6"
                      />
                    </svg>
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-[#eef2f5] px-4 pb-4 pt-3 text-[14px] leading-[1.7] text-slate-600 sm:px-5 sm:pb-5 sm:pt-4 sm:text-[15px] md:px-6 md:text-[16px]">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <div className="mb-5 text-[16px] text-slate-500">
            Остались вопросы? Мы на связи!
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://wa.me/79514992576"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-[44px] items-center justify-center gap-2 rounded-[12px] bg-[#25D366] px-5 text-[15px] font-medium text-white transition hover:brightness-95"
            >
              <svg
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.52 3.48A11.82 11.82 0 0 0 12.1 0C5.57 0 .27 5.3.27 11.83c0 2.08.55 4.12 1.6 5.91L0 24l6.44-1.69a11.8 11.8 0 0 0 5.66 1.45h.01c6.52 0 11.82-5.3 11.82-11.83 0-3.16-1.23-6.13-3.41-8.45ZM12.1 21.74h-.01a9.88 9.88 0 0 1-5.03-1.37l-.36-.21-3.82 1 1.02-3.72-.23-.38a9.84 9.84 0 0 1-1.51-5.23c0-5.45 4.44-9.89 9.9-9.89a9.8 9.8 0 0 1 7.01 2.9 9.84 9.84 0 0 1 2.89 6.99c0 5.46-4.44 9.9-9.89 9.9Zm5.42-7.42c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.35.23-.65.08-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.8-1.68-2.1-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.68-1.65-.93-2.26-.25-.6-.5-.53-.68-.54h-.58c-.2 0-.53.08-.8.38-.28.3-1.06 1.03-1.06 2.5 0 1.48 1.08 2.9 1.23 3.1.15.2 2.12 3.25 5.13 4.55.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.78-.73 2.03-1.44.25-.7.25-1.31.18-1.43-.08-.13-.28-.2-.58-.35Z" />
              </svg>
              WhatsApp
            </a>

            <a
              href="https://t.me/Violetta0502"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-[44px] items-center justify-center gap-2 rounded-[12px] bg-[#2AABEE] px-5 text-[15px] font-medium text-white transition hover:brightness-95"
            >
              <svg
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9.04 15.48 8.66 20.8c.55 0 .8-.24 1.1-.52l2.64-2.53 5.48 4.01c1 .55 1.7.26 1.95-.93L23.37 4.2h0c.3-1.39-.5-1.93-1.47-1.57L1.7 10.4c-1.37.53-1.35 1.29-.23 1.64l5.17 1.61L18.6 6.1c.56-.37 1.07-.16.65.21" />
              </svg>
              Telegram
            </a>

            <a
              href="https://max.ru/u/f9LHodD0cOLehfNZxc-dfvXrRQQ-ApKrfczCjbhEa_va3lGdtndd7SgNP8U"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-[44px] items-center justify-center gap-2 rounded-[12px] bg-[#8b5cf6] px-5 text-[15px] font-medium text-white transition hover:brightness-95"
            >
              <img
                src="/images/max.png"
                alt="MAX"
                className="h-4 w-4 object-contain"
              />
              MAX
            </a>

            <a
              href="tel:+79514992576"
              className="inline-flex h-[44px] items-center justify-center gap-2 rounded-[12px] bg-[#23b8ad] px-5 text-[15px] font-medium text-white transition hover:brightness-95"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5.5C3 4.67 3.67 4 4.5 4h2.38c.72 0 1.33.5 1.47 1.21l.5 2.53c.1.53-.06 1.08-.44 1.46l-1.3 1.3a15.94 15.94 0 006.3 6.3l1.3-1.3c.38-.38.93-.54 1.46-.44l2.53.5c.71.14 1.21.75 1.21 1.47v2.38c0 .83-.67 1.5-1.5 1.5h-1C9.3 21.91 2.09 14.7 2.09 6.5v-1A1.5 1.5 0 013.59 4h-.09C3.22 4 3 4.22 3 4.5v1z"
                />
              </svg>
              Позвонить
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}