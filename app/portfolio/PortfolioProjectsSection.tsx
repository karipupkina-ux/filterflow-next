"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

type CategoryFilter = "all" | "wood" | "metal";

type WorkItem = {
  title: string;
  image: string;
  categories: ("wood" | "metal")[];
};

const FILTERS: { id: CategoryFilter; label: string }[] = [
  { id: "all", label: "Все проекты" },
  { id: "wood", label: "Деревообработка" },
  { id: "metal", label: "Металлообработка" },
];

const PORTFOLIO_WORKS: WorkItem[] = [
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

export default function PortfolioProjectsSection() {
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

  const openModal = useCallback((item: WorkItem) => {
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
            {FILTERS.map(({ id, label }) => {
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
