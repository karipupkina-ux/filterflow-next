"use client";

import { useEffect, useMemo, useState } from "react";

type WorkItem = {
  title: string;
  image: string;
};

export default function OurWorksSection() {
  const primaryWorks: WorkItem[] = [
    {
      title: "Мешки для аспирации",
      image: "/images/nashi-raboti/meshki-aspirac.webp",
    },
    {
      title: "Производство карманных фильтров",
      image: "/images/nashi-raboti/generated_image.webp",
    },
    {
      title: "Мешки для циклонов",
      image: "/images/nashi-raboti/meshki-ciklonov-uvp.webp",
    },
    {
      title: "Верхние мешки-фильтры",
      image: "/images/nashi-raboti/photo_1.webp",
    },
    {
      title: "Мешки для стружкоотсоса",
      image: "/images/nashi-raboti/industrial_filter_system.webp",
    },
    {
      title: "Фильтровальные рукава",
      image: "/images/nashi-raboti/filter_bag_white.webp",
    },
    {
      title: "Рукавные фильтры",
      image: "/images/nashi-raboti/filter_cage.webp",
    },
    {
      title: "Нижние пылесборники",
      image: "/images/nashi-raboti/image_webp_optimized.webp",
    },
  ];

  const extraWorks: WorkItem[] = [
    {
      title: "Нестандартный мешок для фильтрации",
      image: "/images/nashi-raboti/nestandartnye-meshki.webp",
    },
    {
      title: "Фильтры по размерам",
      image: "/images/nashi-raboti/converted_image5.webp",
    },
    {
      title: "Антистатические фильтры",
      image: "/images/nashi-raboti/filter_closeup.webp",
    },
    {
      title: "Мешки для УВП",
      image: "/images/nashi-raboti/optimized_image_2 (1).webp",
    },
  ];

  const allWorks = useMemo(() => [...primaryWorks, ...extraWorks], []);
  const [showAll, setShowAll] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const visibleWorks = showAll ? allWorks : primaryWorks;

  useEffect(() => {
    if (activeIndex === null) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIndex(null);

      if (e.key === "ArrowLeft") {
        setActiveIndex((prev) =>
          prev === null ? 0 : (prev - 1 + allWorks.length) % allWorks.length
        );
      }

      if (e.key === "ArrowRight") {
        setActiveIndex((prev) =>
          prev === null ? 0 : (prev + 1) % allWorks.length
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, allWorks.length]);

  const openModal = (indexInVisible: number) => {
    const item = visibleWorks[indexInVisible];
    const realIndex = allWorks.findIndex((work) => work.image === item.image);
    setActiveIndex(realIndex);
  };

  const closeModal = () => setActiveIndex(null);

  const showPrev = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex - 1 + allWorks.length) % allWorks.length);
  };

  const showNext = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex + 1) % allWorks.length);
  };

  return (
    <>
      <section className="bg-[#f8fafc] py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 text-center md:mb-12">
            <h2 className="text-[34px] font-bold leading-[1.08] tracking-[-0.02em] text-[#1f2937] md:text-[52px]">
              Наши работы
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-[16px] leading-[1.65] text-slate-500 md:text-[17px]">
              Примеры выполненных проектов по установке фильтровальных систем для
              различных предприятий
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 xl:grid-cols-4">
            {visibleWorks.map((item, index) => (
              <button
                key={`${item.title}-${index}`}
                type="button"
                onClick={() => openModal(index)}
                className="group relative overflow-hidden rounded-[14px] bg-white text-left shadow-[0_6px_18px_rgba(15,23,42,0.08)]"
              >
                <div className="relative h-[156px] sm:h-[178px] lg:h-[192px] bg-[#eef1f4]">
                  <div className="absolute inset-0 flex items-center justify-center p-3 md:p-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="max-h-full max-w-full object-contain transition duration-500 group-hover:scale-[1.04]"
                    />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/38 to-black/0" />

                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-[2px] shadow-[0_6px_18px_rgba(0,0,0,0.25)]">
                      <svg
                        className="h-6 w-6 text-white"
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
                    <div className="text-[13px] font-medium leading-[1.35] text-[#22d3c5] md:text-[14px]">
                      {item.title}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

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
            ) : (
              <a
                href="#nashi-proekty"
                className="inline-flex items-center gap-2 text-[16px] font-medium text-[#0f9f93] transition hover:text-[#0b8c81]"
              >
                Смотреть все проекты
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
                    d="M5 12h14M13 6l6 6-6 6"
                  />
                </svg>
              </a>
            )}
          </div>
        </div>
      </section>

      {activeIndex !== null && (
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
              {activeIndex + 1} / {allWorks.length}
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
                src={allWorks[activeIndex].image}
                alt={allWorks[activeIndex].title}
                className="mx-auto max-h-[78vh] w-auto max-w-full rounded-[18px] bg-white object-contain shadow-2xl"
              />
              <div className="mt-4 text-[16px] font-medium text-[#22d3c5]">
                {allWorks[activeIndex].title}
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