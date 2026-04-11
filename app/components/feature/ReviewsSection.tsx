"use client";

import { useState } from "react";

const reviews = [
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

export default function ReviewsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const review = reviews[activeIndex];

  return (
    <section className="bg-[#f8fafc] py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-[#1f2937] md:text-[44px]">
            Отзывы клиентов
          </h2>
          <p className="mt-3 text-[15px] leading-[1.7] text-slate-500 md:text-[17px]">
            Что говорят о нас наши партнеры и клиенты
          </p>
        </div>

        <div className="rounded-[24px] border border-[#edf1f5] bg-white p-8 shadow-[0_12px_35px_rgba(15,23,42,0.06)] md:p-10">
          <div className="mb-6 flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#d9f5f1] text-[34px] font-bold leading-none text-[#23b8ad]">
            “
          </div>

          <div className="mb-6 flex gap-1 text-[#f4c542]">
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>

          <p className="text-[19px] italic leading-[1.75] text-slate-600 md:text-[21px]">
            "{review.text}"
          </p>

          <div className="my-8 h-px bg-[#e8edf3]" />

          <div>
            <div className="text-[28px] font-semibold leading-[1.25] text-[#1f2937]">
              {review.name}
            </div>
            <div className="mt-2 text-[15px] text-slate-500">{review.role}</div>
            <div className="mt-2 text-[16px] font-medium text-[#23b8ad]">
              {review.company}
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center">
          <div className="mb-5 flex items-center gap-4">
            <button
              type="button"
              onClick={prevSlide}
              className="flex h-[46px] w-[46px] items-center justify-center rounded-full border border-[#e7edf3] bg-white text-slate-600 shadow-sm transition hover:border-[#23b8ad] hover:text-[#23b8ad]"
              aria-label="Предыдущий отзыв"
            >
              ←
            </button>

            <button
              type="button"
              onClick={nextSlide}
              className="flex h-[46px] w-[46px] items-center justify-center rounded-full border border-[#1f2937] bg-white text-slate-700 shadow-sm transition hover:border-[#23b8ad] hover:text-[#23b8ad]"
              aria-label="Следующий отзыв"
            >
              →
            </button>
          </div>

          <div className="flex items-center gap-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Перейти к отзыву ${index + 1}`}
                className={`h-[8px] rounded-full transition-all duration-200 ${
                  activeIndex === index
                    ? "w-[24px] bg-[#23b8ad]"
                    : "w-[8px] bg-[#d3dae3]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}