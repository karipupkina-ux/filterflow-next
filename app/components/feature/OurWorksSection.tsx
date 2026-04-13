"use client";

import Link from "next/link";
import { useState } from "react";

/** Первые два ряда (8 карточек) — порядок как в макете */
const worksFirstRows = [
  {
    title: "Мешки для аспирации",
    image: "/images/nashi-raboti/meshki-aspiracii.webp",
    href: "/meshki-dlya-aspiracii",
  },
  {
    title: "Производство карманных фильтров",
    image: "/images/nashi-raboti/filter_bags_table.webp",
    href: "/filtracionnye-rukava",
  },
  {
    title: "Мешки для циклонов",
    image: "/images/nashi-raboti/grow_bags_white.webp",
    href: "/meshki-dlya-ciklonov-i-uvp",
  },
  {
    title: "Верхние мешки-фильтры",
    image: "/images/nashi-raboti/filter55_bag.webp",
    href: "/verhnie-meshki",
  },
  {
    title: "Мешки для стружкоотсоса",
    image: "/images/nashi-raboti/meshki-struzhkootsosa.webp",
    href: "/meshki-dlya-struzhkootsosa",
  },
  {
    title: "Фильтровальные рукава",
    image: "/images/nashi-raboti/filter_sleeves_hero.webp",
    href: "/filtracionnye-rukava",
  },
  {
    title: "Рукавные фильтры",
    image: "/images/nashi-raboti/fabric.webp",
    href: "/filtracionnye-rukava",
  },
  {
    title: "Нижние пылесборники",
    image: "/images/nashi-raboti/dust_collector_single.webp",
    href: "/nizhnie-meshki",
  },
];

/** Третий ряд — показывается по кнопке «Показать больше работ» */
const worksMoreRow = [
  {
    title: "Нестандартный мешок для фильтрации",
    image: "/images/nashi-raboti/converted_image.webp",
    href: "/nestandartnye-meshki-dlya-filtracii",
  },
  {
    title: "Фильтры по размерам",
    image: "/images/nashi-raboti/filter_bags.webp",
    href: "/nestandartnye-meshki-dlya-filtracii",
  },
  {
    title: "Антистатические фильтры",
    image: "/images/nashi-raboti/air_filter.webp",
    href: "/filtracionnye-rukava",
  },
  {
    title: "Мешки для УВП",
    image: "/images/nashi-raboti/roll_image.webp",
    href: "/meshki-dlya-ciklonov-i-uvp",
  },
];

export default function OurWorksSection() {
  const [moreOpen, setMoreOpen] = useState(false);
  const visibleWorks = moreOpen
    ? [...worksFirstRows, ...worksMoreRow]
    : worksFirstRows;

  return (
    <section id="portfolio" className="bg-[#f8fafc] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <div className="mb-3 inline-flex rounded-full bg-[#fff3ed] px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#ff6b2c]">
              Портфолио
            </div>
            <h2 className="text-[30px] font-bold leading-tight text-[#0f172a] md:text-[42px]">
              Наши работы
            </h2>
            <p className="mt-3 max-w-3xl text-[15px] leading-7 text-[#475569] md:text-[16px]">
              Примеры выполненных проектов по установке фильтровальных систем для
              различных предприятий
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
          {visibleWorks.map((work) => (
            <Link
              key={work.title}
              href={work.href}
              className="group relative overflow-hidden rounded-[18px] bg-slate-200 shadow-[0_10px_25px_rgba(15,23,42,0.08)]"
            >
              <div className="relative aspect-[1/0.72] overflow-hidden">
                <img
                  src={work.image}
                  alt={work.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>

              <div className="absolute inset-x-0 bottom-0 p-3 md:p-4">
                <h3 className="text-[13px] font-medium leading-5 text-[#12c8bd] md:text-[15px]">
                  {work.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center gap-4 text-center">
          {!moreOpen ? (
            <button
              type="button"
              onClick={() => setMoreOpen(true)}
              className="inline-flex h-[52px] items-center justify-center gap-2 rounded-[14px] bg-[#28c4b7] px-8 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-[#20b4a8] md:min-w-[280px]"
            >
              Показать больше работ
              <span className="text-lg leading-none" aria-hidden="true">
                ↓
              </span>
            </button>
          ) : (
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-[15px] font-medium text-[#0aa79d] transition hover:text-[#087a73]"
            >
              Смотреть все проекты
              <span aria-hidden="true">→</span>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
