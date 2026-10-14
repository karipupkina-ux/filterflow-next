import Link from "next/link";
import type { ReactNode } from "react";

type SolutionItem = {
  title: string;
  description: string;
  href: string;
  icon: ReactNode;
};

const items: SolutionItem[] = [
  {
    title: "Аспирация и пылеулавливание",
    description:
      "Мешки, фильтровальные рукава и нестандартные решения для циклонов, УВП и промышленных установок.",
    href: "/meshki-dlya-aspiracii/",
    icon: (
      <svg className="h-[17px] w-[17px]" fill="none" stroke="currentColor" strokeWidth="1.9" viewBox="0 0 24 24">
        <path d="M6 5h12v5H6zM8 10v9m8-9v9M5 19h14" />
      </svg>
    ),
  },
  {
    title: "Фильтровальные материалы",
    description:
      "Полиэстер, полипропилен, полиамид, мета-арамид, PPS, P84, PTFE, стекловолокно и специальные исполнения.",
    href: "/filtrovalnye-tkani/",
    icon: (
      <svg className="h-[17px] w-[17px]" fill="none" stroke="currentColor" strokeWidth="1.9" viewBox="0 0 24 24">
        <path d="M4 7c4-2 12-2 16 0M4 12c4-2 12-2 16 0M4 17c4-2 12-2 16 0" />
      </svg>
    ),
  },
  {
    title: "Рукавные фильтры и каркасы",
    description:
      "Фильтровальные рукава, круглые и плоские металлические каркасы, подбор конструкции по ТЗ, чертежу или образцу.",
    href: "/karkasy-dlya-filtrovalnyh-rukavov/",
    icon: (
      <svg className="h-[17px] w-[17px]" fill="none" stroke="currentColor" strokeWidth="1.9" viewBox="0 0 24 24">
        <path d="M8 4h8M7 8h10M7 16h10M8 20h8M9 4v16m6-16v16" />
      </svg>
    ),
  },
  {
    title: "Вентиляционные фильтры",
    description:
      "Карманные и кассетные воздушные фильтры для вентиляционных установок по стандартным и индивидуальным размерам.",
    href: "/karmannye-filtry/",
    icon: (
      <svg className="h-[17px] w-[17px]" fill="none" stroke="currentColor" strokeWidth="1.9" viewBox="0 0 24 24">
        <rect x="4" y="5" width="16" height="14" rx="2" />
        <path d="M8 5v14M12 5v14M16 5v14" />
      </svg>
    ),
  },
  {
    title: "Фильтры для покрасочных камер",
    description:
      "Лабиринтные, напольные Paint Stop, потолочные и кокосово-волокнистые фильтры для окрасочных и сушильных камер.",
    href: "/filtry-dlya-pokrasochnyh-kamer/",
    icon: (
      <svg className="h-[17px] w-[17px]" fill="none" stroke="currentColor" strokeWidth="1.9" viewBox="0 0 24 24">
        <path d="M5 7h14v10H5zM8 10h8M8 14h8" />
      </svg>
    ),
  },
  {
    title: "Стружкоотсосы и деревообработка",
    description:
      "Фильтрующие и сборные мешки для стружки, опилок и древесной пыли, а также воздуховоды и крепёж.",
    href: "/meshki-dlya-struzhkootsosa/",
    icon: (
      <svg className="h-[17px] w-[17px]" fill="none" stroke="currentColor" strokeWidth="1.9" viewBox="0 0 24 24">
        <path d="M6 7h12M8 11h8M10 15h4M12 15v5" />
      </svg>
    ),
  },
  {
    title: "Гибкие воздуховоды и хомуты",
    description:
      "Шланги и воздуховоды для аспирации, транспортировки пыли, стружки и опилок; стяжные и червячные хомуты.",
    href: "/vozduhovody-dlya-aspiracii/",
    icon: (
      <svg className="h-[17px] w-[17px]" fill="none" stroke="currentColor" strokeWidth="1.9" viewBox="0 0 24 24">
        <path d="M4 8c4-3 12-3 16 0M4 12c4-3 12-3 16 0M4 16c4-3 12-3 16 0" />
      </svg>
    ),
  },
  {
    title: "Изготовление по образцу и размерам",
    description:
      "Нестандартные мешки и фильтрующие элементы по чертежу, фотографии, образцу или исходным размерам оборудования.",
    href: "/nestandartnye-meshki-dlya-filtracii/",
    icon: (
      <svg className="h-[17px] w-[17px]" fill="none" stroke="currentColor" strokeWidth="1.9" viewBox="0 0 24 24">
        <path d="M5 19 19 5M8 5h11v11M5 8v11h11" />
      </svg>
    ),
  },
];

export default function CatalogGridSection() {
  return (
    <section className="bg-[#f8fafc] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-9 max-w-4xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#0aa79d]">
            Решения FilterFlow
          </p>
          <h2 className="mt-3 text-[34px] font-bold leading-[1.08] tracking-[-0.02em] text-[#1f2937] md:text-[52px]">
            Подбор фильтрации под оборудование и условия работы
          </h2>
          <p className="mt-4 text-[16px] leading-[1.7] text-slate-500 md:text-[17px]">
            Не дублируем каталог, а объединяем продукцию по задачам: аспирация и пылеулавливание,
            вентиляция, покрасочные камеры, рукавные фильтры, деревообработка и подбор
            фильтровальных материалов.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group rounded-[18px] border border-[#e8edf2] bg-white px-5 py-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#9fded7] hover:bg-[#eaf8f6] hover:shadow-[0_12px_28px_rgba(15,23,42,0.07)]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#dfe6ea] bg-white text-[#1fb5a8] transition-all duration-200 group-hover:border-[#1fb5a8] group-hover:bg-[#23b8ad] group-hover:text-white">
                {item.icon}
              </div>
              <h3 className="mt-4 text-[17px] font-semibold leading-[1.35] text-[#1f2937]">
                {item.title}
              </h3>
              <p className="mt-2 text-[13px] leading-[1.55] text-slate-500">
                {item.description}
              </p>
              <span className="mt-4 inline-flex text-[14px] font-medium text-[#0aa79d]">
                Подробнее →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
