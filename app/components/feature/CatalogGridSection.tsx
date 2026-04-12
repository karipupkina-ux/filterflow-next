import Link from "next/link";
import type { ReactNode } from "react";

type CatalogItem = {
  title: string;
  description: string;
  href: string;
  icon: ReactNode;
};

const items: CatalogItem[] = [
  {
    title: "Мешки для аспирации",
    description: "Верхние и нижние фильтровальные мешки для систем пылеудаления",
    href: "/meshki-dlya-aspiracii",
    icon: (
      <svg className="h-[15px] w-[15px]" fill="none" stroke="currentColor" strokeWidth="1.9" viewBox="0 0 24 24">
        <rect x="7" y="4" width="10" height="16" rx="2" />
        <path d="M9 8h6M9 12h6" />
      </svg>
    ),
  },
  {
    title: "Фильтрационные рукава",
    description: "Промышленные рукава для рукавных фильтров и УВП",
    href: "/filtracionnye-rukava",
    icon: (
      <svg className="h-[15px] w-[15px]" fill="none" stroke="currentColor" strokeWidth="1.9" viewBox="0 0 24 24">
        <path d="M8 4h8M12 4v16M9 20h6" />
      </svg>
    ),
  },
  {
    title: "Мешки для стружкоотсоса",
    description: "Мешки для деревообрабатывающих станков",
    href: "/meshki-dlya-struzhkootsosa",
    icon: (
      <svg className="h-[15px] w-[15px]" fill="none" stroke="currentColor" strokeWidth="1.9" viewBox="0 0 24 24">
        <path d="M8 5h8M12 5v14M10 19h4" />
      </svg>
    ),
  },
  {
    title: "Мешки для циклонов и УВП",
    description: "Для пылеулавливающих установок и циклонных систем",
    href: "/meshki-dlya-ciklonov-i-uvp",
    icon: (
      <svg className="h-[15px] w-[15px]" fill="none" stroke="currentColor" strokeWidth="1.9" viewBox="0 0 24 24">
        <path d="M4 7h16M7 12h10M10 17h4" />
      </svg>
    ),
  },
  {
    title: "Быстросъёмные хомуты",
    description: "Металлические хомуты для крепления фильтровальных мешков",
    href: "/bystrosemnye-homyty",
    icon: (
      <svg className="h-[15px] w-[15px]" fill="none" stroke="currentColor" strokeWidth="1.9" viewBox="0 0 24 24">
        <path d="M8 12a4 4 0 1 1 8 0 4 4 0 1 1-8 0Z" />
        <path d="M16 8l3-3M16 16l3 3" />
      </svg>
    ),
  },
  {
    title: "Верхние мешки для аспирации",
    description: "Фильтровальные мешки для очистки воздуха",
    href: "/verhnie-meshki",
    icon: (
      <svg className="h-[15px] w-[15px]" fill="none" stroke="currentColor" strokeWidth="1.9" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="7" />
        <path d="M12 9v6M9 12h6" />
      </svg>
    ),
  },
  {
    title: "Нижние мешки для аспирации",
    description: "Сборные мешки для стружки и опилок",
    href: "/nizhnie-meshki",
    icon: (
      <svg className="h-[15px] w-[15px]" fill="none" stroke="currentColor" strokeWidth="1.9" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="7" />
        <path d="M9 12h6" />
      </svg>
    ),
  },
  {
    title: "Тканевые мешки для аспирации",
    description: "Универсальные тканевые фильтровальные мешки",
    href: "/tkanevye-meshki",
    icon: (
      <svg className="h-[15px] w-[15px]" fill="none" stroke="currentColor" strokeWidth="1.9" viewBox="0 0 24 24">
        <rect x="6" y="5" width="12" height="14" rx="3" />
      </svg>
    ),
  },
  {
    title: "Мешки для опилок",
    description: "Для сбора древесных опилок и мелкой стружки",
    href: "/meshki-dlya-struzhkootsosa",
    icon: (
      <svg className="h-[15px] w-[15px]" fill="none" stroke="currentColor" strokeWidth="1.9" viewBox="0 0 24 24">
        <path d="M7 17c5 0 10-5 10-10M8 8h.01M16 16h.01" />
      </svg>
    ),
  },
  {
    title: "Мешки для циклона",
    description: "Усиленные мешки для циклонных установок",
    href: "/meshki-dlya-ciklonov-i-uvp",
    icon: (
      <svg className="h-[15px] w-[15px]" fill="none" stroke="currentColor" strokeWidth="1.9" viewBox="0 0 24 24">
        <path d="M12 5v4M12 15v4M8.5 8.5l2.5 2.5M13 13l2.5 2.5M5 12h4M15 12h4" />
      </svg>
    ),
  },
  {
    title: "Нестандартные мешки",
    description: "Изготовление по чертежам и индивидуальным размерам",
    href: "/nestandartnye-meshki-dlya-filtracii",
    icon: (
      <svg className="h-[15px] w-[15px]" fill="none" stroke="currentColor" strokeWidth="1.9" viewBox="0 0 24 24">
        <path d="M7 7l10 10M17 7L7 17" />
      </svg>
    ),
  },
  {
    title: "Пошив фильтр-мешков",
    description: "Услуги пошива фильтровальных мешков под заказ",
    href: "/#order",
    icon: (
      <svg className="h-[15px] w-[15px]" fill="none" stroke="currentColor" strokeWidth="1.9" viewBox="0 0 24 24">
        <path d="M8 7c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2Zm6 10c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2ZM10 9l6 6" />
      </svg>
    ),
  },
];

export default function CatalogGridSection() {
  return (
    <section className="bg-[#f8fafc] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8">
          <h2 className="text-[34px] font-bold leading-[1.08] tracking-[-0.02em] text-[#1f2937] md:text-[52px]">
            Каталог фильтровальных мешков и рукавов
          </h2>

          <p className="mt-3 text-[16px] leading-[1.7] text-slate-500 md:text-[17px]">
            Рукавные фильтры, мешки для аспирации и фильтровальные материалы —
            производство под заказ, доставка по России
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group rounded-[16px] border border-[#e8edf2] bg-white px-5 py-4 transition-all duration-200 hover:border-[#9fded7] hover:bg-[#eaf8f6]"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] border border-[#dfe6ea] bg-white text-[#1fb5a8] transition-all duration-200 group-hover:border-[#1fb5a8] group-hover:bg-[#23b8ad] group-hover:text-white">
                  {item.icon}
                </div>

                <div className="min-w-0">
                  <div className="text-[15px] font-semibold leading-[1.35] text-[#1f2937] md:text-[16px]">
                    {item.title}
                  </div>

                  <div className="mt-1.5 text-[13px] leading-[1.45] text-slate-500 md:text-[13px]">
                    {item.description}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}