"use client";

import type { ReactNode } from "react";
import { useCallback, useEffect, useMemo, useState } from "react";

// ——————————————————————————————————————————————————————————————
// Кейсы наших клиентов
// ——————————————————————————————————————————————————————————————

type CaseStudy = {
  title: string;
  category: string;
  categoryClassName: string;
  task: string;
  solution: string;
  result: string;
};

const CASES: CaseStudy[] = [
  {
    title: "Модернизация системы аспирации на мебельной фабрике",
    category: "Деревообрабатывающая промышленность",
    categoryClassName: "text-[#14b8a6]",
    task: "Старая система фильтрации не справлялась с объемом древесной пыли, что приводило к загрязнению цеха и снижению производительности.",
    solution:
      "Установили 12 верхних мешков-фильтров из полиэстера с антистатической обработкой и 8 нижних пылесборников увеличенного объема.",
    result:
      "Эффективность очистки воздуха повысилась до 99,5%, производительность цеха выросла на 15%, срок службы фильтров увеличился в 2 раза.",
  },
  {
    title: "Комплексная система фильтрации для металлообрабатывающего завода",
    category: "Металлообработка",
    categoryClassName: "text-[#14b8a6]",
    task: "Высокая концентрация металлической стружки и абразивной пыли выводила из строя стандартные фильтры и нарушала нормы охраны труда.",
    solution:
      "Смонтировали рукавные фильтры из износостойкого полиэстера и верхние мешки для УВП с увеличенной площадью фильтрации.",
    result:
      "Снижение выбросов до предельно допустимых концентраций, бесперебойная работа линии, межсервисный интервал вырос примерно на 40%.",
  },
  {
    title: "Фильтрация для пищевого производства",
    category: "Пищевая промышленность",
    categoryClassName: "text-[#10b981]",
    task: "Требовались фильтры, соответствующие санитарным нормам пищевой промышленности для очистки воздуха от мучной пыли.",
    solution:
      "Изготовили специализированные фильтровальные рукава из пищевого полиэстера с гладкой поверхностью для легкой очистки.",
    result:
      "Получено разрешение Роспотребнадзора, концентрация пыли снижена до нормативных значений, простота обслуживания системы.",
  },
];

function CasesBriefcaseIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <path d="M12 12v.01" />
    </svg>
  );
}

function CasesTaskIcon() {
  return (
    <div
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#fee2e2]"
      aria-hidden
    >
      <span className="text-[17px] font-bold leading-none text-[#dc2626]">
        !
      </span>
    </div>
  );
}

function CasesSolutionIcon() {
  return (
    <div
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#dbeafe]"
      aria-hidden
    >
      <svg
        className="h-[19px] w-[19px] text-[#2563eb]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 21h6M12 3a4 4 0 0 0-4 4c0 2 1.5 3.5 2 5h4c.5-1.5 2-3 2-5a4 4 0 0 0-4-4Z" />
        <path d="M10 14h4" />
      </svg>
    </div>
  );
}

function CasesResultIcon() {
  return (
    <div
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#d1fae5]"
      aria-hidden
    >
      <svg
        className="h-[18px] w-[18px] text-[#059669]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 13l4 4L19 7" />
      </svg>
    </div>
  );
}

function PortfolioClientCasesBlock() {
  return (
    <section className="border-b border-slate-200/80 bg-[#f9fafb] pb-14 pt-10 md:pb-20 md:pt-14">
      <div className="mx-auto max-w-[1200px] px-6 md:px-8">
        <h2 className="text-center text-[28px] font-bold leading-[1.15] tracking-[-0.02em] text-[#0f172a] md:text-[36px] lg:text-[40px]">
          Кейсы наших клиентов
        </h2>
        <p className="mx-auto mt-4 max-w-[720px] text-center text-[15px] leading-[1.65] text-[#64748b] md:text-[16px] md:leading-[1.7]">
          Реальные примеры решения задач по фильтрации для различных отраслей
          промышленности
        </p>

        <div className="mx-auto mt-10 max-w-[1120px] space-y-8 md:mt-12 md:space-y-10">
          {CASES.map((item) => (
            <article
              key={item.title}
              className="rounded-[24px] bg-white p-9 shadow-[0_4px_24px_rgba(15,23,42,0.07)] transition-[box-shadow,transform] duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_16px_48px_rgba(15,23,42,0.11)] md:p-11 lg:p-12"
            >
              <header className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
                <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[14px] bg-[#e6f7f5] md:h-14 md:w-14 md:rounded-2xl">
                  <CasesBriefcaseIcon className="h-6 w-6 text-[#0d9488] md:h-7 md:w-7" />
                </div>
                <div className="min-w-0 flex-1 pt-0.5">
                  <h3 className="text-[20px] font-bold leading-snug text-[#0f172a] md:text-[22px] lg:text-[24px]">
                    {item.title}
                  </h3>
                  <p
                    className={`mt-2 text-[14px] font-medium leading-snug md:text-[15px] ${item.categoryClassName}`}
                  >
                    {item.category}
                  </p>
                </div>
              </header>

              <div className="mt-9 grid gap-10 border-t border-slate-100 pt-9 md:mt-10 md:grid-cols-3 md:gap-12 md:pt-10 lg:gap-14">
                <div>
                  <div className="mb-3 flex items-center gap-3">
                    <CasesTaskIcon />
                    <span className="text-[15px] font-bold text-[#0f172a] md:text-[16px]">
                      Задача
                    </span>
                  </div>
                  <p className="text-[14px] leading-[1.7] text-[#475569] md:text-[15px] md:leading-[1.75]">
                    {item.task}
                  </p>
                </div>
                <div>
                  <div className="mb-3 flex items-center gap-3">
                    <CasesSolutionIcon />
                    <span className="text-[15px] font-bold text-[#0f172a] md:text-[16px]">
                      Решение
                    </span>
                  </div>
                  <p className="text-[14px] leading-[1.7] text-[#475569] md:text-[15px] md:leading-[1.75]">
                    {item.solution}
                  </p>
                </div>
                <div>
                  <div className="mb-3 flex items-center gap-3">
                    <CasesResultIcon />
                    <span className="text-[15px] font-bold text-[#0f172a] md:text-[16px]">
                      Результат
                    </span>
                  </div>
                  <p className="text-[14px] leading-[1.7] text-[#475569] md:text-[15px] md:leading-[1.75]">
                    {item.result}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ——————————————————————————————————————————————————————————————
// Примеры клиентов
// ——————————————————————————————————————————————————————————————

function ExamplesCheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M5 10.5 8.2 13.7 15 6" />
    </svg>
  );
}

function ExamplesHammerIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.85"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="m14 13-8 8-3-3 8-8" />
      <path d="m16 8 4-4-2-2-4 4" />
      <path d="m18 6 2 2" />
    </svg>
  );
}

function ExamplesWrenchIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.85"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}

function ExamplesUtensilsIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.85"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M6 2v10c0 1.1.9 2 2 2h0c1.1 0 2-.9 2-2V2" />
      <path d="M6 6h4M6 10h4" />
      <path d="M16 3v18l3-3V6l-3-3" />
      <path d="M16 8h3" />
    </svg>
  );
}

function ExamplesListItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex gap-3">
      <ExamplesCheckIcon className="mt-[3px] h-[17px] w-[17px] shrink-0 text-emerald-500" />
      <span className="text-[14px] leading-[1.55] text-slate-600 md:text-[15px] md:leading-[1.6]">
        {children}
      </span>
    </li>
  );
}

function PortfolioClientExamplesBlock() {
  return (
    <section className="border-b border-slate-200/80 bg-white py-12 md:py-16 lg:py-[4.5rem]">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <h2 className="text-center text-[26px] font-bold leading-tight tracking-[-0.02em] text-slate-900 md:text-[32px]">
          Примеры клиентов
        </h2>
        <p className="mx-auto mt-3 max-w-[640px] text-center text-[15px] leading-[1.65] text-slate-500 md:mt-4 md:text-[16px] md:leading-[1.7]">
          Мы работаем с предприятиями различных отраслей промышленности
        </p>

        <div className="mx-auto mt-10 grid max-w-[1180px] grid-cols-1 gap-6 md:mt-12 md:grid-cols-3 md:gap-7 lg:gap-8">
          <div className="rounded-[24px] bg-[#fff9f0] p-8 transition-transform duration-300 ease-in-out will-change-transform hover:scale-[1.03] md:p-9 lg:p-10">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#ffedd5] md:mb-6 md:h-[52px] md:w-[52px] md:rounded-2xl">
              <ExamplesHammerIcon className="h-6 w-6 text-[#9a3412] md:h-7 md:w-7" />
            </div>
            <h3 className="text-[17px] font-bold leading-snug text-slate-900 md:text-lg">
              Деревообрабатывающая промышленность
            </h3>
            <ul className="mt-5 space-y-3 md:mt-6 md:space-y-3.5">
              <ExamplesListItem>Мебельные фабрики</ExamplesListItem>
              <ExamplesListItem>Столярные цеха</ExamplesListItem>
              <ExamplesListItem>Деревообрабатывающие комбинаты</ExamplesListItem>
              <ExamplesListItem>Производство пиломатериалов</ExamplesListItem>
              <ExamplesListItem>Производство фанеры и ДСП</ExamplesListItem>
            </ul>
          </div>

          <div className="rounded-[24px] bg-slate-50 p-8 transition-transform duration-300 ease-in-out will-change-transform hover:scale-[1.03] md:p-9 lg:p-10">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-200/70 md:mb-6 md:h-[52px] md:w-[52px] md:rounded-2xl">
              <ExamplesWrenchIcon className="h-6 w-6 text-slate-700 md:h-7 md:w-7" />
            </div>
            <h3 className="text-[17px] font-bold leading-snug text-slate-900 md:text-lg">
              Металлообработка
            </h3>
            <ul className="mt-5 space-y-3 md:mt-6 md:space-y-3.5">
              <ExamplesListItem>Машиностроительные заводы</ExamplesListItem>
              <ExamplesListItem>Токарные и фрезерные цеха</ExamplesListItem>
              <ExamplesListItem>Сварочные производства</ExamplesListItem>
              <ExamplesListItem>Литейные цеха</ExamplesListItem>
              <ExamplesListItem>Металлургические предприятия</ExamplesListItem>
            </ul>
          </div>

          <div className="rounded-[24px] bg-green-50 p-8 transition-transform duration-300 ease-in-out will-change-transform hover:scale-[1.03] md:p-9 lg:p-10">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100/90 md:mb-6 md:h-[52px] md:w-[52px] md:rounded-2xl">
              <ExamplesUtensilsIcon className="h-6 w-6 text-emerald-800 md:h-7 md:w-7" />
            </div>
            <h3 className="text-[17px] font-bold leading-snug text-slate-900 md:text-lg">
              Пищевая промышленность
            </h3>
            <ul className="mt-5 space-y-3 md:mt-6 md:space-y-3.5">
              <ExamplesListItem>Мукомольные комбинаты</ExamplesListItem>
              <ExamplesListItem>Хлебопекарни</ExamplesListItem>
              <ExamplesListItem>Зерноперерабатывающие заводы</ExamplesListItem>
              <ExamplesListItem>Производство кормов</ExamplesListItem>
              <ExamplesListItem>Кондитерские фабрики</ExamplesListItem>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// ——————————————————————————————————————————————————————————————
// Выполненные работы (галерея)
// ——————————————————————————————————————————————————————————————

type CategoryFilter = "all" | "wood" | "metal";

type GalleryWorkItem = {
  title: string;
  image: string;
  categories: ("wood" | "metal")[];
};

const GALLERY_FILTERS: { id: CategoryFilter; label: string }[] = [
  { id: "all", label: "Все проекты" },
  { id: "wood", label: "Деревообработка" },
  { id: "metal", label: "Металлообработка" },
];

const PORTFOLIO_WORKS: GalleryWorkItem[] = [
  {
    title: "Мешки для аспирации",
    image: "/images/nashi-raboti/meshki-aspirac.webp",
    categories: ["wood", "metal"],
  },
  {
    title: "Производство карманных фильтров",
    image: "/images/nashi-raboti/generated_image.webp",
    categories: ["metal"],
  },
  {
    title: "Мешки для циклонов",
    image: "/images/nashi-raboti/meshki-ciklonov-uvp.webp",
    categories: ["metal"],
  },
  {
    title: "Верхние мешки-фильтры",
    image: "/images/nashi-raboti/photo_1.webp",
    categories: ["wood", "metal"],
  },
  {
    title: "Мешки для стружкоотсоса",
    image: "/images/nashi-raboti/industrial_filter_system.webp",
    categories: ["wood"],
  },
  {
    title: "Фильтровальные рукава",
    image: "/images/nashi-raboti/filter_bag_white.webp",
    categories: ["metal"],
  },
  {
    title: "Рукавные фильтры",
    image: "/images/nashi-raboti/filter_cage.webp",
    categories: ["metal"],
  },
  {
    title: "Нижние пылесборники",
    image: "/images/nashi-raboti/image_webp_optimized.webp",
    categories: ["wood", "metal"],
  },
  {
    title: "Нестандартный мешок для фильтрации",
    image: "/images/nashi-raboti/nestandartnye-meshki.webp",
    categories: ["wood", "metal"],
  },
  {
    title: "Фильтры по размерам",
    image: "/images/nashi-raboti/converted_image5.webp",
    categories: ["metal"],
  },
  {
    title: "Антистатические фильтры",
    image: "/images/nashi-raboti/filter_closeup.webp",
    categories: ["metal"],
  },
  {
    title: "Мешки для УВП",
    image: "/images/nashi-raboti/grow_bags_white.webp",
    categories: ["metal"],
  },
  {
    title: "Мешок фильтр для стружкоотсоса",
    image: "/images/nashi-raboti/dust_collector_single.webp",
    categories: ["wood"],
  },
  {
    title: "Мешки для стружкоотсоса УВП",
    image: "/images/nashi-raboti/filter_sleeves_hero.webp",
    categories: ["wood"],
  },
  {
    title: "Фильтр мешки",
    image: "/images/nashi-raboti/converted.webp",
    categories: ["wood", "metal"],
  },
  {
    title: "Фильтр карманный",
    image: "/images/nashi-raboti/air_filter.webp",
    categories: ["metal"],
  },
  {
    title: "Мешок для фильтрации жидкости",
    image: "/images/nashi-raboti/filter55_bag.webp",
    categories: ["metal"],
  },
  {
    title: "Прозрачное окно у нижнего мешка",
    image: "/images/nashi-raboti/window_webp_1.webp",
    categories: ["wood", "metal"],
  },
  {
    title: "Мешки для обезвоживания осадка",
    image: "/images/nashi-raboti/filter_bags_table.webp",
    categories: ["metal"],
  },
  {
    title: "Хомут быстросъёмный",
    image: "/images/nashi-raboti/bystrosemnye-homuty.webp",
    categories: ["wood", "metal"],
  },
  {
    title: "Фильтр рукавный",
    image: "/images/nashi-raboti/filter_bags.webp",
    categories: ["metal"],
  },
  {
    title: "Мешки для аспирации опилок",
    image: "/images/nashi-raboti/meshki-aspiracii.webp",
    categories: ["wood"],
  },
  {
    title: "Мешки для систем аспирации",
    image: "/images/nashi-raboti/meshki-struzhkootsosa.webp",
    categories: ["wood", "metal"],
  },
  {
    title: "Ткань для аспирации",
    image: "/images/nashi-raboti/roll_image.webp",
    categories: ["wood", "metal"],
  },
  {
    title: "Фильтровальная ткань",
    image: "/images/nashi-raboti/fabric.webp",
    categories: ["metal"],
  },
  {
    title: "Ткань для стружкоотсоса",
    image: "/images/nashi-raboti/fabric2.webp",
    categories: ["wood"],
  },
  {
    title: "Фильтр ткань",
    image: "/images/nashi-raboti/fabric3.webp",
    categories: ["metal"],
  },
  {
    title: "Ткань для фильтрации",
    image: "/images/nashi-raboti/fabric4.webp",
    categories: ["metal"],
  },
  {
    title: "Мешок-фильтр",
    image: "/images/nashi-raboti/converted_image.webp",
    categories: ["wood", "metal"],
  },
  {
    title: "Петелька для подвеса на верхнем мешке",
    image: `/images/nashi-raboti/${encodeURIComponent("edited_image (1).webp")}`,
    categories: ["wood", "metal"],
  },
];

const INITIAL_VISIBLE = 8;

function PortfolioProjectsGalleryBlock() {
  const [filter, setFilter] = useState<CategoryFilter>("all");
  const [showAll, setShowAll] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const filteredWorks = useMemo(() => {
    if (filter === "all") return PORTFOLIO_WORKS;
    return PORTFOLIO_WORKS.filter((w) => w.categories.includes(filter));
  }, [filter]);

  const visibleWorks = useMemo(() => {
    if (showAll) return filteredWorks;
    return filteredWorks.slice(0, INITIAL_VISIBLE);
  }, [filteredWorks, showAll]);

  const hasMoreInFilter = filteredWorks.length > INITIAL_VISIBLE;

  useEffect(() => {
    setShowAll(false);
  }, [filter]);

  useEffect(() => {
    if (activeIndex === null) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      const n = PORTFOLIO_WORKS.length;
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowLeft") {
        setActiveIndex((prev) =>
          prev === null ? 0 : (prev - 1 + n) % n
        );
      }
      if (e.key === "ArrowRight") {
        setActiveIndex((prev) =>
          prev === null ? 0 : (prev + 1) % n
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex]);

  const openModal = useCallback((item: GalleryWorkItem) => {
    const idx = PORTFOLIO_WORKS.findIndex(
      (w) => w.image === item.image && w.title === item.title
    );
    setActiveIndex(idx >= 0 ? idx : 0);
  }, []);

  const closeModal = () => setActiveIndex(null);

  const showPrev = () => {
    if (activeIndex === null) return;
    const n = PORTFOLIO_WORKS.length;
    setActiveIndex((activeIndex - 1 + n) % n);
  };

  const showNext = () => {
    if (activeIndex === null) return;
    const n = PORTFOLIO_WORKS.length;
    setActiveIndex((activeIndex + 1) % n);
  };

  return (
    <>
      <section className="bg-[#f8fafc] pb-16 pt-6 md:pb-20 md:pt-8">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-8 text-center text-[28px] font-bold leading-tight text-[#0f172a] md:mb-10 md:text-[40px]">
            Выполненные работы для промышленных предприятий
          </h2>

          <div className="mb-8 flex flex-wrap items-center justify-center gap-2 md:gap-3">
            {GALLERY_FILTERS.map(({ id, label }) => {
              const isActive = filter === id;
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => setFilter(id)}
                  className={`rounded-full px-4 py-2.5 text-[14px] font-medium transition md:px-5 md:text-[15px] ${
                    isActive
                      ? "bg-[#23b8ad] text-white shadow-sm"
                      : "bg-white text-[#374151] shadow-[0_2px_8px_rgba(15,23,42,0.08)] hover:bg-slate-50"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 xl:grid-cols-4">
            {visibleWorks.map((item, index) => (
              <button
                key={`${item.title}-${item.image}-${index}`}
                type="button"
                onClick={() => openModal(item)}
                className="group relative overflow-hidden rounded-[14px] bg-white text-left shadow-[0_6px_18px_rgba(15,23,42,0.08)]"
              >
                <div className="relative h-[156px] overflow-hidden bg-[#eef1f4] sm:h-[178px] lg:h-[192px]">
                  <div className="absolute inset-0 flex items-center justify-center overflow-hidden p-2 md:p-3">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="max-h-full max-w-full object-contain transition duration-500 ease-out group-hover:scale-[1.08]"
                    />
                  </div>

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100">
                    <div
                      className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/90 bg-black/25 shadow-[0_8px_24px_rgba(0,0,0,0.35)] backdrop-blur-[2px]"
                      aria-hidden
                    >
                      <svg
                        className="h-7 w-7 text-white"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        viewBox="0 0 24 24"
                      >
                        <circle cx="11" cy="11" r="6.5" />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M20 20l-3.5-3.5"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11 8.5v5"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.5 11h5"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-3">
                    <div className="text-left text-[13px] font-medium leading-[1.35] text-[#22d3c5] md:text-[14px]">
                      {item.title}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {hasMoreInFilter && (
            <div className="mt-8 text-center">
              {!showAll ? (
                <button
                  type="button"
                  onClick={() => setShowAll(true)}
                  className="inline-flex h-[46px] items-center justify-center gap-2 rounded-xl bg-[#23b8ad] px-6 text-[15px] font-medium text-white transition hover:bg-[#1ea79d]"
                >
                  Показать больше работ
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
                      d="M12 5v14M5 12l7 7 7-7"
                    />
                  </svg>
                </button>
              ) : null}
            </div>
          )}
        </div>
      </section>

      {activeIndex !== null && PORTFOLIO_WORKS[activeIndex] && (
        <div
          className="fixed inset-0 z-[200] bg-black/80 px-4 py-6"
          onClick={closeModal}
        >
          <div className="relative flex h-full w-full items-center justify-center">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                closeModal();
              }}
              className="absolute right-2 top-2 z-[210] flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 md:right-6 md:top-6"
              aria-label="Закрыть"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 6l12 12M18 6L6 18"
                />
              </svg>
            </button>

            <div className="absolute left-1/2 top-4 z-[210] -translate-x-1/2 text-sm text-white/90 md:top-6">
              {activeIndex + 1} / {PORTFOLIO_WORKS.length}
            </div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              className="absolute left-2 top-1/2 z-[210] flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/12 text-white transition hover:bg-white/22 md:left-6"
              aria-label="Предыдущее изображение"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 18l-6-6 6-6"
                />
              </svg>
            </button>

            <div
              className="max-h-full max-w-[92vw] text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={PORTFOLIO_WORKS[activeIndex].image}
                alt={PORTFOLIO_WORKS[activeIndex].title}
                className="mx-auto max-h-[78vh] w-auto max-w-full rounded-[18px] bg-white object-contain shadow-2xl"
              />
              <div className="mt-4 text-[16px] font-medium text-[#22d3c5]">
                {PORTFOLIO_WORKS[activeIndex].title}
              </div>
            </div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              className="absolute right-2 top-1/2 z-[210] flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/12 text-white transition hover:bg-white/22 md:right-6"
              aria-label="Следующее изображение"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
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
        </div>
      )}
    </>
  );
}

// ——————————————————————————————————————————————————————————————
// Экспорт: три блока подряд
// ——————————————————————————————————————————————————————————————

export default function PortfolioPageBlocks() {
  return (
    <>
      <PortfolioClientCasesBlock />
      <PortfolioClientExamplesBlock />
      <PortfolioProjectsGalleryBlock />
    </>
  );
}
