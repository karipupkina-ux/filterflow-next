"use client";

import { useState } from "react";

type Testimonial = {
  text: string;
  name: string;
  role: string;
  company: string;
};

export default function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      text: "Заказываем мешки для аспирации уже второй год. Качество отличное, все размеры точно соблюдаются. Особенно радует оперативность изготовления и доставки.",
      name: "Александр Петров",
      role: "Директор деревообрабатывающего предприятия",
      company: 'ООО "ДревПром"',
    },
    {
      text: "Перешли на фильтры от FilterFlow после проблем с предыдущим поставщиком. Разница очевидна — мешки служат дольше, не рвутся. Рекомендую!",
      name: "Михаил Соколов",
      role: "Главный инженер",
      company: 'Мебельная фабрика "Классика"',
    },
    {
      text: "Нужны были фильтровальные рукава нестандартных размеров. FilterFlow изготовили точно по нашим чертежам, все подошло идеально. Профессиональный подход.",
      name: "Дмитрий Волков",
      role: "Технический директор",
      company: "Металлообрабатывающий завод",
    },
    {
      text: "Небольшое производство, но требования к фильтрации высокие. Ребята помогли подобрать оптимальный вариант мешков, цена адекватная. Доволен сотрудничеством.",
      name: "Сергей Иванов",
      role: "Владелец столярной мастерской",
      company: 'Мастерская "Золотые руки"',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setActiveIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const active = testimonials[activeIndex];

  return (
    <section className="bg-[#f8fafc] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center md:mb-12">
          <h2 className="text-[34px] font-bold leading-[1.08] tracking-[-0.02em] text-[#1f2937] md:text-[52px]">
            Отзывы клиентов
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-[16px] leading-[1.65] text-slate-500 md:text-[17px]">
            Что говорят о нас наши партнеры и клиенты
          </p>
        </div>

        <div className="mx-auto max-w-4xl rounded-[24px] bg-white px-8 py-8 shadow-[0_10px_30px_rgba(15,23,42,0.08)] md:px-10 md:py-10">
          <div className="mb-7 flex h-[44px] w-[44px] items-center justify-center rounded-full bg-[#c8f1ea]">
            <svg
              className="h-6 w-6 text-[#0f9f93]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M10.3 7.2c-2.9 1.1-4.6 3.2-5.1 6.4h3.4c-.2 2.1-1.3 3.7-3.3 4.8l1.1 2.1c4-1.7 6-4.8 6-9.3V7.2H10.3Zm8.2 0c-2.9 1.1-4.6 3.2-5.1 6.4h3.4c-.2 2.1-1.3 3.7-3.3 4.8l1.1 2.1c4-1.7 6-4.8 6-9.3V7.2h-2.1Z" />
            </svg>
          </div>

          <div className="mb-6 flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className="h-5 w-5 text-[#f5c518]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="m10 1.8 2.5 5.1 5.7.8-4.1 4 1 5.7L10 14.8l-5.1 2.6 1-5.7-4.1-4 5.7-.8L10 1.8Z" />
              </svg>
            ))}
          </div>

          <div className="border-b border-[#e8edf2] pb-8">
            <p className="max-w-3xl text-[18px] italic leading-[1.75] text-slate-600 md:text-[19px]">
              “{active.text}”
            </p>
          </div>

          <div className="pt-6">
            <div className="text-[18px] font-semibold text-[#1f2937]">
              {active.name}
            </div>

            <div className="mt-1 text-[15px] leading-[1.6] text-slate-500">
              {active.role}
            </div>

            <div className="mt-1 text-[15px] font-medium text-[#0f9f93]">
              {active.company}
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center">
          <div className="mb-4 flex items-center gap-3">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Предыдущий отзыв"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-600 shadow-[0_6px_18px_rgba(15,23,42,0.08)] transition hover:bg-[#f4f7fa] hover:text-slate-900"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.3"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 18l-6-6 6-6"
                />
              </svg>
            </button>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Следующий отзыв"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#1f2937] bg-white text-[#1f2937] shadow-[0_6px_18px_rgba(15,23,42,0.08)] transition hover:bg-[#f4f7fa]"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.3"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 6l6 6-6 6"
                />
              </svg>
            </button>
          </div>

          <div className="flex items-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Перейти к отзыву ${index + 1}`}
                className={`h-2.5 rounded-full transition ${
                  index === activeIndex
                    ? "w-7 bg-[#23b8ad]"
                    : "w-2.5 bg-[#d3d9df] hover:bg-[#bec6ce]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}