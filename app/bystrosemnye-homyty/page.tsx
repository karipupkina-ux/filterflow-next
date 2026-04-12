import Navigation from "../components/Navigation";
import SeeAlsoLinks from "../components/SeeAlsoLinks";
import Footer from "../components/Footer";
import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo-metadata";

export const metadata: Metadata = pageMetadata({
  title:
    "Быстросъёмные хомуты для аспирации — промышленные, для рукавов и воздуховодов",
  description:
    "Соединительные промышленные хомуты для аспирации, фильтровальных рукавов и воздуховодов. Производство FilterFlow, поставка по России; стоимость — по запросу после подбора диаметра и типа замка.",
  path: "/bystrosemnye-homyty",
  openGraphTitle: "Быстросъёмные хомуты для аспирации | FilterFlow",
});

const applicationItems = [
  "Хомуты для аспирационных систем — крепление мешков и рукавов к патрубкам и фланцам",
  "Соединительные хомуты для фильтровальных рукавов на циклонах и рукавных фильтрах",
  "Хомуты для воздуховодов и врезок в линиях вентиляции и пылеулавливания (УВП)",
  "Промышленные хомуты для рукавных фильтров и крупного оборудования",
  "Деревообрабатывающее оборудование и стружкоотсосы",
  "Системы очистки воздуха и общеобменная вентиляция на производстве",
];

const clampTypes = [
  {
    title: "Ленточные хомуты для фильтров",
    description:
      "Классический тип хомутов с металлической лентой и винтовым или рычажным замком. Универсальное решение для большинства задач. Обеспечивают равномерное распределение давления по окружности.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-[20px] w-[20px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 12a9 9 0 0 1-15.36 6.36" />
        <path d="M3 12A9 9 0 0 1 18.36 5.64" />
        <path d="M3 16v-4h4" />
        <path d="M21 8v4h-4" />
      </svg>
    ),
  },
  {
    title: "Профильные хомуты усиленные",
    description:
      "Хомуты с профилированной лентой для усиленной фиксации. Применяются при высоких нагрузках и давлении. Обладают повышенной жёсткостью и надёжностью крепления.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-[20px] w-[20px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="5" y="5" width="4" height="4" rx="1" />
        <rect x="15" y="5" width="4" height="4" rx="1" />
        <rect x="5" y="15" width="4" height="4" rx="1" />
        <rect x="15" y="15" width="4" height="4" rx="1" />
        <path d="M9 7h6" />
        <path d="M7 9v6" />
        <path d="M17 9v6" />
        <path d="M9 17h6" />
      </svg>
    ),
  },
  {
    title: "Хомуты с рычажным замком — быстрый монтаж",
    description:
      "Быстросъёмные хомуты с рычажным замком для моментального монтажа и демонтажа без инструмента. Идеальны для частой замены фильтровальных элементов. Максимальная скорость обслуживания.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-[20px] w-[20px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="5" y="11" width="14" height="9" rx="2" />
        <path d="M8 11V8a4 4 0 1 1 8 0v3" />
        <path d="M12 14v3" />
      </svg>
    ),
  },
];

const materialCards = [
  {
    title: "Хомуты из нержавеющей стали AISI 304/316",
    description:
      "Хомуты из нержавеющей стали AISI 304 или AISI 316 обладают максимальной коррозионной стойкостью и долговечностью. Рекомендуются для агрессивных сред, высокой влажности и температур.",
    points: [
      "Устойчивость к коррозии",
      "Долгий срок службы (более 10 лет)",
      "Работа при температуре до +300°C",
      "Гигиеничность и экологичность",
    ],
  },
  {
    title: "Хомуты из оцинкованной стали — экономичный вариант",
    description:
      "Хомуты из оцинкованной стали — экономичное решение для стандартных условий эксплуатации. Цинковое покрытие защищает от коррозии в нормальных условиях влажности.",
    points: [
      "Оптимальное соотношение цена/качество",
      "Защита от коррозии в сухих помещениях",
      "Работа при температуре до +150°C",
      "Подходит для большинства задач",
    ],
  },
];

const sizeRows = [
  {
    diameter: "100-200",
    width: "20",
    thickness: "0.8",
    usage: "Малые патрубки, стружкоотсосы",
  },
  {
    diameter: "200-300",
    width: "25",
    thickness: "1.0",
    usage: "Стандартные аспирационные системы",
  },
  {
    diameter: "300-400",
    width: "30",
    thickness: "1.2",
    usage: "Циклоны, УВП средней мощности",
  },
  {
    diameter: "400-500",
    width: "35",
    thickness: "1.5",
    usage: "Промышленные фильтры, крупные циклоны",
  },
  {
    diameter: "500-600",
    width: "40",
    thickness: "1.5",
    usage: "Рукавные фильтры большой производительности",
  },
  {
    diameter: "600-800",
    width: "50",
    thickness: "2.0",
    usage: "Крупногабаритное промышленное оборудование",
  },
];

const benefits = [
  {
    title: "Быстрый монтаж без инструмента",
    description:
      "Замена фильтровального мешка занимает 1-2 минуты без использования специального инструмента. Экономия времени на обслуживании оборудования.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-[22px] w-[22px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 6v6l4 2" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
  },
  {
    title: "Надёжная герметичная фиксация",
    description:
      "Равномерное распределение давления по всей окружности обеспечивает герметичное соединение и предотвращает утечки воздуха.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-[22px] w-[22px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Многоразовое использование хомутов",
    description:
      "Хомуты выдерживают сотни циклов установки и снятия без потери свойств. Долгий срок службы снижает эксплуатационные расходы.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-[22px] w-[22px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7 7h4V3" />
        <path d="M17 17h-4v4" />
        <path d="M20 11a8 8 0 0 0-13-5" />
        <path d="M4 13a8 8 0 0 0 13 5" />
      </svg>
    ),
  },
  {
    title: "Монтаж хомута без инструмента",
    description:
      "Рычажные замки позволяют производить монтаж и демонтаж вручную. Не нужны отвёртки, ключи или другие инструменты.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-[22px] w-[22px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m14 7 3-3" />
        <path d="m7 14-3 3" />
        <path d="M5 19l6-6" />
        <path d="M13 5l6 6" />
        <path d="m15 15 4 4" />
      </svg>
    ),
  },
  {
    title: "Температурная стойкость до +300°C",
    description:
      "Нержавеющая сталь выдерживает температуры до +300°C, оцинковка — до +150°C. Подходят для горячих процессов.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-[22px] w-[22px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 14.76V5a2 2 0 1 0-4 0v9.76a4 4 0 1 0 4 0z" />
      </svg>
    ),
  },
  {
    title: "Универсальность — подходят для всех мешков",
    description:
      "Подходят для любых типов фильтровальных мешков и рукавов. Совместимы с большинством промышленного оборудования.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-[22px] w-[22px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06A1.7 1.7 0 0 0 15 19.4a1.7 1.7 0 0 0-1 .6 1.7 1.7 0 0 0-.4 1.08V21a2 2 0 1 1-4 0v-.09a1.7 1.7 0 0 0-.4-1.08 1.7 1.7 0 0 0-1-.6 1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-.6-1 1.7 1.7 0 0 0-1.08-.4H2.9a2 2 0 1 1 0-4H3a1.7 1.7 0 0 0 1.08-.4 1.7 1.7 0 0 0 .6-1 1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-.6 1.7 1.7 0 0 0 .4-1.08V2.9a2 2 0 1 1 4 0V3a1.7 1.7 0 0 0 .4 1.08 1.7 1.7 0 0 0 1 .6 1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.7 1.7 0 0 0 19.4 9c.27.3.48.64.6 1a1.7 1.7 0 0 0 1.08.4h.09a2 2 0 1 1 0 4H21a1.7 1.7 0 0 0-1.08.4 1.7 1.7 0 0 0-.52 1Z" />
      </svg>
    ),
  },
];

const productionChoicePoints = [
  "Диаметра патрубка или фланца оборудования",
  "Типа замкового механизма (ленточный, профильный, рычажный)",
  "Условий эксплуатации (температура, влажность, агрессивные среды)",
  "Частоты замены фильтровальных элементов",
];

const whyChooseUsPoints = [
  "Долговечность хомутов (срок службы более 10 лет)",
  "Быстрый монтаж без инструмента (1-2 минуты)",
  "Герметичное соединение без утечек воздуха",
  "Многоразовое использование (сотни циклов установки)",
];

const clampChoicePoints = [
  "Диаметр патрубка или фланца — измерьте внешний диаметр места крепления, стандартные размеры от 100 до 800 мм, возможно изготовление нестандартных",
  "Тип замкового механизма — ленточный (универсальный), профильный (усиленный), рычажный (быстрый монтаж без инструмента)",
  "Материал хомута — нержавеющая сталь для агрессивных сред и высоких температур (до +300°C), оцинковка для стандартных условий (до +150°C)",
  "Условия эксплуатации — температура, влажность, наличие химически активных веществ в воздухе",
  "Частота замены мешков — при частой замене рекомендуются хомуты с рычажным замком для экономии времени",
];

const relatedProducts = [
  {
    title: "Мешки для аспирации",
    description: "Верхние и нижние фильтровальные мешки для систем пылеудаления",
    href: "/meshki-dlya-aspiracii",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-[18px] w-[18px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7 4h10" />
        <path d="M8 4v5a4 4 0 0 0 8 0V4" />
        <path d="M6 13h12" />
        <path d="M8 13v4a4 4 0 0 0 8 0v-4" />
      </svg>
    ),
  },
  {
    title: "Фильтрационные рукава",
    description: "Промышленные рукава для рукавных фильтров и УВП",
    href: "/filtracionnye-rukava",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-[18px] w-[18px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 5h12" />
        <path d="M7 5v4" />
        <path d="M17 5v4" />
        <path d="M8 9h8" />
        <path d="M10 9v10" />
        <path d="M14 9v10" />
      </svg>
    ),
  },
  {
    title: "Мешки для циклонов и УВП",
    description: "Специализированные мешки для пылеулавливающих установок",
    href: "/meshki-dlya-ciklonov-i-uvp",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-[18px] w-[18px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 7h16" />
        <path d="M6 11h12" />
        <path d="M8 15h8" />
        <path d="M10 19h4" />
      </svg>
    ),
  },
  {
    title: "Мешки для стружкоотсоса",
    description: "Мешки для деревообрабатывающих станков и стружкоотсосов",
    href: "/meshki-dlya-struzhkootsosa",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-[18px] w-[18px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 4v16" />
        <path d="M8 8h8" />
        <path d="M9 4h6" />
      </svg>
    ),
  },
];

const blogArticles = [
  {
    title: "Как работает система аспирации",
    description: "Принцип работы систем пылеудаления и роль фильтров",
    href: "/blog/kak-rabotaet-aspiraciya",
  },
  {
    title: "Как выбрать мешок для аспирации",
    description: "Руководство по подбору фильтров и крепёжных элементов",
    href: "/blog/kak-vybrat-meshok-aspiracii",
  },
  {
    title: "Типы фильтровальных мешков",
    description: "Полный обзор видов фильтров для аспирации",
    href: "/blog/tipy-filtruyushchikh-meshkov",
  },
  {
    title: "Когда менять фильтровальный мешок",
    description: "Признаки износа фильтра и сроки замены",
    href: "/blog/kogda-menyat-filtr-meshok",
  },
];

export default function Page() {
  return (
    <>
      <Navigation />

      <main id="top" className="bg-[#f8fafc]">
        <section className="border-b border-[#e8edf3] bg-white">
          <div className="mx-auto max-w-[1440px] px-6 py-4">
            <div className="flex items-center gap-3 text-[14px]">
              <Link
                href="/"
                className="font-medium text-[#28c4b7] transition-colors duration-200 hover:text-[#1ea89d]"
              >
                Главная
              </Link>
              <span className="text-[#9aa8b7]">›</span>
              <span className="text-[#475569]">Быстросъёмные хомуты</span>
            </div>
          </div>
        </section>

        <section className="px-6 pt-12 pb-24 md:pt-14 md:pb-28">
          <div className="mx-auto max-w-[1280px]">
            <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
              <div className="max-w-[560px] pt-[94px] md:pt-[108px]">
                <h1 className="text-[30px] font-bold leading-[0.98] tracking-[-0.04em] text-[#0f172a] md:text-[42px] xl:text-[52px]">
                  Быстросъёмные хомуты
                  <br />
                  для аспирации
                  <br />
                  и фильтровальных
                  <br />
                  рукавов
                </h1>

                <p className="mt-8 max-w-[560px] text-[15px] leading-[1.72] text-[#475569] md:text-[16px]">
                  Промышленные соединительные хомуты для крепления мешков и
                  рукавов: хомуты для аспирации, фильтровальных рукавов и
                  воздуховодов. Нержавейка AISI и оцинковка, диаметры 100–800 мм.
                  Быстрый монтаж. Производство и поставка FilterFlow по России.
                </p>

                <div className="mt-9 flex flex-wrap items-center gap-4">
                  <a
                    href="#order-clamps"
                    className="inline-flex h-[62px] items-center justify-center rounded-[18px] bg-[#149c94] px-8 text-[16px] font-semibold text-white shadow-[0_12px_30px_rgba(20,156,148,0.24)] transition-all duration-200 hover:bg-[#118b84]"
                  >
                    Оставить заявку
                  </a>

                  <a
                    href="tel:+79514992576"
                    className="inline-flex h-[62px] items-center justify-center rounded-[18px] border-2 border-[#149c94] bg-transparent px-8 text-[16px] font-semibold text-[#149c94] transition-all duration-200 hover:bg-[#e8fbf8]"
                  >
                    Позвонить
                  </a>
                </div>
              </div>

              <div className="flex justify-center lg:justify-end">
                <div className="w-full max-w-[690px] rounded-[28px] bg-white p-4 shadow-[0_20px_50px_rgba(15,23,42,0.07)]">
                  <div className="flex min-h-[320px] items-center justify-center overflow-hidden rounded-[22px] bg-[#f6f7f9] md:min-h-[450px]">
                    <img
                      src="/images/catalog/bystrosemnye-homuty.webp"
                      alt="Быстросъёмные промышленные хомуты для аспирации и рукавов"
                      className="h-auto max-h-[405px] w-auto max-w-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-14 md:pb-16">
          <div className="mx-auto grid max-w-[1280px] gap-8 lg:grid-cols-[1fr_0.95fr] lg:gap-12">
            <div className="pt-1">
              <h2 className="max-w-[620px] text-[28px] font-bold leading-[1.08] tracking-[-0.03em] text-[#10233f] md:text-[38px]">
                Применение: хомуты для аспирации, рукавов и пылеулавливания
              </h2>

              <div className="mt-7 max-w-[670px] space-y-7 text-[15px] leading-[1.78] text-[#475569] md:text-[16px]">
                <p>
                  Быстросъёмные хомуты — соединительные элементы для герметичной
                  фиксации фильтровальных мешков и рукавов на патрубках
                  оборудования. Ускоряют замену фильтромодулей: часть моделей
                  монтируется без инструмента.
                </p>

                <p>
                  Используются на линиях вентиляции и пылеулавливания, на
                  циклонах и УВП, на рукавных фильтрах и аспирационных системах
                  деревообработки и металлообработки.
                </p>
              </div>
            </div>

            <div className="rounded-[28px] bg-[#eef7f5] px-8 py-8 md:px-10 md:py-9">
              <p className="max-w-[560px] text-[22px] font-bold leading-[1.2] tracking-[-0.02em] text-[#10233f] md:text-[28px]">
                Типичные задачи
              </p>

              <div className="mt-8 space-y-6">
                {applicationItems.map((item) => (
                  <div key={item} className="flex items-start gap-4">
                    <div className="mt-[2px] flex h-7 w-7 shrink-0 items-center justify-center text-[#149c94]">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-[18px] w-[18px]"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m5 12 5 5L20 7" />
                      </svg>
                    </div>
                    <p className="text-[15px] leading-[1.65] text-[#334155] md:text-[16px]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-14 md:pb-16">
          <div className="mx-auto max-w-[1280px]">
            <div className="rounded-[28px] border border-[#cfe8e3] bg-white px-8 py-9 shadow-[0_8px_28px_rgba(15,23,42,0.05)] md:px-11 md:py-11">
              <h2 className="max-w-[920px] text-[26px] font-bold leading-[1.12] tracking-[-0.03em] text-[#10233f] md:text-[34px]">
                Аспирация, фильтровальные рукава и вентиляция: где нужны хомуты
              </h2>

              <div className="mt-8 space-y-8 text-[15px] leading-[1.78] text-[#475569] md:text-[16px]">
                <div>
                  <h3 className="mb-3 text-[18px] font-bold leading-snug text-[#10233f] md:text-[20px]">
                    Хомуты для аспирационных систем
                  </h3>
                  <p>
                    На линиях аспирации соединительные хомуты фиксируют мешки и
                    переходы на патрубках, обеспечивая герметичность при разряжении
                    и вибрации. Это типичный узел для цехов с шлифовкой, пилением и
                    обработкой металла.
                  </p>
                </div>

                <div>
                  <h3 className="mb-3 text-[18px] font-bold leading-snug text-[#10233f] md:text-[20px]">
                    Хомуты для фильтровальных рукавов
                  </h3>
                  <p>
                    Для рукавных фильтров и циклонов хомут подбирают по диаметру
                    горловины и типу замка — ленточный, профильный или рычажный.
                    Такое крепление удобно при регулярной смене рукава без простоя
                    линии.
                  </p>
                </div>

                <div>
                  <h3 className="mb-3 text-[18px] font-bold leading-snug text-[#10233f] md:text-[20px]">
                    Вентиляция и пылеулавливание
                  </h3>
                  <p>
                    В составе воздуховодов и пылеулавливающих установок хомуты
                    стягивают гибкие вставки и фильтроэлементы там, где нужна
                    повторная сборка после обслуживания агрегата.
                  </p>
                </div>
              </div>

              <p className="mt-9 border-t border-[#e2e8f0] pt-8 text-[15px] leading-[1.75] text-[#475569] md:text-[16px]">
                К хомутам обычно комплектуют{" "}
                <Link
                  href="/meshki-dlya-aspiracii"
                  className="font-semibold text-[#149c94] underline decoration-[#149c94]/30 underline-offset-2 transition-colors hover:text-[#118b84]"
                >
                  мешки для аспирации
                </Link>{" "}
                и{" "}
                <Link
                  href="/filtracionnye-rukava"
                  className="font-semibold text-[#149c94] underline decoration-[#149c94]/30 underline-offset-2 transition-colors hover:text-[#118b84]"
                >
                  фильтрационные рукава
                </Link>
                — подберём сочетание под вашу схему пылеудаления.
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 pb-16 md:pb-18">
          <div className="mx-auto max-w-[1280px]">
            <div className="mb-10 text-center">
              <h2 className="text-[28px] font-bold leading-[1.15] tracking-[-0.03em] text-[#10233f] md:text-[40px]">
                Виды быстросъёмных хомутов для мешков
              </h2>
            </div>

            <div className="grid items-stretch gap-6 lg:grid-cols-3">
              {clampTypes.map((item) => (
                <article
                  key={item.title}
                  className="flex h-full flex-col rounded-[24px] bg-white px-8 py-8 shadow-[0_10px_28px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(15,23,42,0.08)]"
                >
                  <div className="mb-6 flex h-[68px] w-[68px] items-center justify-center rounded-[18px] bg-[#bfeee8] text-[#149c94]">
                    {item.icon}
                  </div>

                  <h3 className="max-w-[320px] text-[20px] font-bold leading-[1.25] tracking-[-0.02em] text-[#10233f] md:text-[22px]">
                    {item.title}
                  </h3>

                  <p className="mt-6 text-[15px] leading-[1.72] text-[#475569] md:text-[16px]">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 pb-16 md:pb-18">
          <div className="mx-auto max-w-[1280px]">
            <div className="mb-10 text-center">
              <h2 className="text-[28px] font-bold leading-[1.15] tracking-[-0.03em] text-[#10233f] md:text-[40px]">
                Материалы быстросъёмных хомутов
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {materialCards.map((card) => (
                <article
                  key={card.title}
                  className="rounded-[24px] border border-[#d7dee7] bg-white px-8 py-8 shadow-[0_8px_24px_rgba(15,23,42,0.04)]"
                >
                  <h3 className="max-w-[520px] text-[20px] font-bold leading-[1.25] tracking-[-0.02em] text-[#10233f] md:text-[22px]">
                    {card.title}
                  </h3>

                  <p className="mt-6 max-w-[620px] text-[15px] leading-[1.72] text-[#475569] md:text-[16px]">
                    {card.description}
                  </p>

                  <div className="mt-7 space-y-4">
                    {card.points.map((point) => (
                      <div key={point} className="flex items-start gap-4">
                        <div className="mt-[2px] flex h-6 w-6 shrink-0 items-center justify-center text-[#149c94]">
                          <svg
                            viewBox="0 0 24 24"
                            className="h-[17px] w-[17px]"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m5 12 5 5L20 7" />
                          </svg>
                        </div>

                        <p className="text-[15px] leading-[1.6] text-[#334155] md:text-[16px]">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 pb-16 md:pb-18">
          <div className="mx-auto max-w-[1280px]">
            <div className="mx-auto mb-10 max-w-[980px] text-center">
              <h2 className="text-[28px] font-bold leading-[1.15] tracking-[-0.03em] text-[#10233f] md:text-[40px]">
                Размерный ряд хомутов для фильтровальных мешков
              </h2>

              <p className="mt-5 text-[15px] leading-[1.7] text-[#475569] md:text-[16px]">
                Производим хомуты любых диаметров от 100 до 800 мм. Возможно
                изготовление нестандартных размеров под заказ.
              </p>
            </div>

            <div className="overflow-hidden rounded-[24px] bg-white shadow-[0_10px_28px_rgba(15,23,42,0.06)]">
              <div className="grid grid-cols-[1.1fr_1.3fr_1.1fr_2.8fr] bg-[#149c94] px-7 py-5 text-[15px] font-semibold text-white md:text-[16px]">
                <div>Диаметр (мм)</div>
                <div>Ширина ленты (мм)</div>
                <div>Толщина (мм)</div>
                <div>Применение</div>
              </div>

              {sizeRows.map((row, index) => (
                <div
                  key={`${row.diameter}-${row.width}`}
                  className={`grid grid-cols-[1.1fr_1.3fr_1.1fr_2.8fr] px-7 py-5 text-[15px] leading-[1.6] text-[#334155] md:text-[16px] ${
                    index !== sizeRows.length - 1 ? "border-b border-[#dfe5ec]" : ""
                  }`}
                >
                  <div className="font-medium text-[#10233f]">{row.diameter}</div>
                  <div>{row.width}</div>
                  <div>{row.thickness}</div>
                  <div>{row.usage}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 pb-16 md:pb-18">
          <div className="mx-auto max-w-[1280px]">
            <div className="mx-auto mb-12 max-w-[980px] text-center">
              <h2 className="text-[28px] font-bold leading-[1.15] tracking-[-0.03em] text-[#10233f] md:text-[40px]">
                Преимущества быстросъёмных хомутов FilterFlow
              </h2>
            </div>

            <div className="grid gap-y-12 gap-x-10 md:grid-cols-2 xl:grid-cols-3">
              {benefits.map((item) => (
                <article
                  key={item.title}
                  className="mx-auto flex max-w-[360px] flex-col items-center text-center"
                >
                  <div className="mb-7 flex h-[86px] w-[86px] items-center justify-center rounded-full bg-[#bfeee8] text-[#149c94]">
                    {item.icon}
                  </div>

                  <h3 className="text-[18px] font-bold leading-[1.35] tracking-[-0.02em] text-[#10233f] md:text-[19px]">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-[15px] leading-[1.72] text-[#475569] md:text-[16px]">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 pb-20 md:pb-24">
          <div className="mx-auto max-w-[1280px]">
            <div className="mb-12 text-center">
              <h2 className="text-[28px] font-bold leading-[1.15] tracking-[-0.03em] text-[#10233f] md:text-[40px]">
                Фото быстросъёмных хомутов — наша продукция
              </h2>
            </div>

            <div className="grid gap-7 lg:grid-cols-2">
              <div className="group relative overflow-hidden rounded-[20px] bg-white shadow-[0_10px_28px_rgba(15,23,42,0.06)]">
                <div className="aspect-[1.52/1] overflow-hidden bg-[#f5f6f8]">
                  <img
                    src="/images/catalog/bystrosemnye-homuty.webp"
                    alt="Быстросъёмный хомут для фильтровального мешка с рычажным замком"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.58)] via-[rgba(0,0,0,0.18)] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="pointer-events-none absolute inset-x-0 bottom-0 p-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="max-w-[95%] text-[14px] font-semibold leading-[1.45] text-white md:text-[15px]">
                    Быстросъёмный хомут для фильтровального мешка с рычажным замком
                  </p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-[20px] bg-white shadow-[0_10px_28px_rgba(15,23,42,0.06)]">
                <div className="aspect-[1.52/1] overflow-hidden bg-[#f5f6f8]">
                  <img
                    src="/images/catalog/image_converted%20(1).webp"
                    alt="Быстросъёмный хомут из нержавеющей стали для крепления фильтровальных рукавов"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.58)] via-[rgba(0,0,0,0.18)] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="pointer-events-none absolute inset-x-0 bottom-0 p-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="max-w-[96%] text-[14px] font-semibold leading-[1.45] text-white md:text-[15px]">
                    Быстросъёмный хомут из нержавеющей стали для крепления фильтровальных рукавов
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-16 md:pb-18">
          <div className="mx-auto max-w-[1280px]">
            <div className="max-w-[1240px]">
              <h2 className="text-[28px] font-bold leading-[1.15] tracking-[-0.03em] text-[#10233f] md:text-[36px]">
                Быстросъёмные хомуты для фильтровальных мешков — производство и подбор
              </h2>

              <div className="mt-8 space-y-7 text-[15px] leading-[1.72] text-[#334155] md:text-[16px]">
                <p>
                  Подбираем и изготавливаем хомуты под ваш патрубок и режим работы:
                  серийные диаметры и нестандарт по чертежу. На выходе — контроль
                  геометрии и крепления перед отгрузкой.
                </p>

                <p>
                  Мы производим металлические хомуты из <strong>нержавеющей стали AISI 304/316 и оцинкованной стали</strong> с диаметрами от 100 до 800 мм. Параметры согласуем с вашим оборудованием и условиями среды.
                </p>

                <div>
                  <p className="mb-4">Выбор хомута зависит от:</p>
                  <ul className="space-y-3 pl-5">
                    {productionChoicePoints.map((item) => (
                      <li key={item} className="list-disc">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <p>
                  Мы предлагаем <strong>индивидуальное производство хомутов под заказ</strong>, с быстрым расчётом стоимости и доставкой по всей России. Все изделия соответствуют промышленным стандартам и обеспечивают долгий срок службы.
                </p>

                <div>
                  <p className="mb-4">Наши клиенты выбирают нас за:</p>
                  <ul className="space-y-3 pl-5">
                    {whyChooseUsPoints.map((item) => (
                      <li key={item} className="list-disc">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-16 md:pb-18">
          <div className="mx-auto max-w-[1280px]">
            <div className="rounded-[28px] bg-[#f1f5f9] px-8 py-9 md:px-12 md:py-12">
              <h2 className="max-w-[980px] text-[28px] font-bold leading-[1.15] tracking-[-0.03em] text-[#10233f] md:text-[36px]">
                Как правильно выбрать быстросъёмный хомут для фильтровальных мешков
              </h2>

              <p className="mt-7 max-w-[1160px] text-[15px] leading-[1.72] text-[#334155] md:text-[16px]">
                Выбор хомута напрямую влияет на надёжность крепления фильтровального мешка и эффективность работы всей системы. Чтобы выбрать подходящий хомут, учитывайте:
              </p>

              <div className="mt-8 space-y-5">
                {clampChoicePoints.map((item) => (
                  <div key={item} className="flex items-start gap-4">
                    <div className="mt-[3px] flex h-7 w-7 shrink-0 items-center justify-center text-[#149c94]">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-[18px] w-[18px]"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m5 12 5 5L20 7" />
                      </svg>
                    </div>

                    <p className="text-[15px] leading-[1.7] text-[#334155] md:text-[16px]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-8 max-w-[1160px] text-[15px] leading-[1.72] text-[#334155] md:text-[16px]">
                Для деревообрабатывающих предприятий обычно используются оцинкованные хомуты, для химической промышленности и влажных сред — нержавеющая сталь. Если размеры неизвестны, отправьте фото оборудования или параметры патрубка — мы подберём хомут под вашу систему.
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 pb-16 md:pb-18">
          <div className="mx-auto max-w-[1280px]">
            <div className="max-w-[1240px]">
              <h2 className="text-[28px] font-bold leading-[1.15] tracking-[-0.03em] text-[#10233f] md:text-[36px]">
                Промышленные хомуты для циклонов, аспирации и рукавных фильтров
              </h2>

              <div className="mt-8 space-y-7 text-[15px] leading-[1.72] text-[#334155] md:text-[16px]">
                <p>
                  Быстросъёмные хомуты ставят на циклоны, аспирационные системы,
                  УВП и рукавные фильтры — везде, где нужно соединить мешок или
                  рукав с патрубком без подтеков. Доступны{" "}
                  <strong>металлические хомуты</strong> из нержавейки AISI 304/316
                  и оцинковки под вашу среду и температуру.
                </p>

                <p>
                  Изготавливаем под задачи деревообработки, металлообработки,
                  пищевой и химической отраслей. Отгрузка по России; стоимость и
                  сроки называем после согласования диаметра, типа замка и объёма
                  партии.
                </p>
              </div>

              <div className="mt-10 flex justify-center">
                <a
                  href="#order-clamps"
                  className="inline-flex h-[58px] items-center justify-center rounded-[18px] bg-[#149c94] px-9 text-[16px] font-semibold text-white shadow-[0_12px_30px_rgba(20,156,148,0.22)] transition-all duration-200 hover:bg-[#118b84]"
                >
                  Заказать хомуты
                  <span className="ml-3 text-[20px] leading-none">→</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-12 md:pb-14">
          <div className="mx-auto max-w-[1280px]">
            <h2 className="mx-auto mb-8 max-w-[900px] text-center text-[26px] font-bold leading-[1.15] tracking-[-0.03em] text-[#10233f] md:text-[34px]">
              Купить быстросъёмный хомут или заказать поставку
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-[24px] bg-[#149c94] px-8 py-8 text-white shadow-[0_12px_32px_rgba(20,156,148,0.22)] md:px-9 md:py-9">
                <h3 className="text-[20px] font-bold leading-tight md:text-[22px]">
                  Купить и заказать
                </h3>
                <p className="mt-4 text-[15px] leading-[1.7] text-white/95 md:text-[16px]">
                  Заказать и купить хомуты для аспирации можно по форме ниже, по
                  телефону или почте: подскажем по типу замка и диаметру, для
                  нестандартных узлов — по фото или чертежу.
                </p>
                <a
                  href="#order-clamps"
                  className="mt-6 inline-flex h-[50px] items-center justify-center rounded-[14px] bg-white px-6 text-[15px] font-semibold text-[#128f88] transition hover:bg-[#f0fdfa]"
                >
                  Перейти к заявке
                </a>
              </div>
              <div className="rounded-[24px] border border-[#d7dee7] bg-white px-8 py-8 shadow-[0_8px_24px_rgba(15,23,42,0.05)] md:px-9 md:py-9">
                <h3 className="text-[20px] font-bold leading-tight text-[#10233f] md:text-[22px]">
                  Производство и поставка
                </h3>
                <p className="mt-4 text-[15px] leading-[1.7] text-[#475569] md:text-[16px]">
                  Производство металлических хомутов — на площадке FilterFlow;
                  поставка комплектами по России транспортными компаниями. Сроки и
                  условия согласуем после подбора размера и материала.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="order-clamps" className="px-6 pb-24 md:pb-28">
          <div className="mx-auto max-w-[1280px]">
            <div className="mx-auto max-w-[980px] text-center">
              <h2 className="text-[30px] font-bold leading-[1.15] tracking-[-0.03em] text-[#10233f] md:text-[42px]">
                Заказать хомут для аспирации
              </h2>

              <p className="mx-auto mt-5 max-w-[900px] text-[15px] leading-[1.7] text-[#475569] md:text-[16px]">
                Заполните форму — свяжемся для уточнения диаметра, количества и
                типа хомута, затем рассчитаем стоимость и срок.
              </p>
            </div>

            <div className="mx-auto mt-10 max-w-[920px] rounded-[28px] bg-white px-8 py-10 shadow-[0_16px_40px_rgba(15,23,42,0.08)] md:px-12 md:py-12">
              <form
                action="mailto:filterflow@mail.ru"
                method="post"
                encType="text/plain"
                className="space-y-8"
              >
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-3 block text-[15px] font-semibold text-[#334155]"
                    >
                      Имя <span className="text-[#ef4444]">*</span>
                    </label>
                    <input
                      id="name"
                      name="Имя"
                      type="text"
                      required
                      placeholder="Ваше имя"
                      className="h-[56px] w-full rounded-[14px] border border-[#cfd8e3] px-5 text-[15px] text-[#0f172a] outline-none transition-colors duration-200 placeholder:text-[#94a3b8] focus:border-[#22c1b6] focus:ring-1 focus:ring-[#22c1b6]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-3 block text-[15px] font-semibold text-[#334155]"
                    >
                      Телефон <span className="text-[#ef4444]">*</span>
                    </label>
                    <input
                      id="phone"
                      name="Телефон"
                      type="tel"
                      required
                      placeholder="+7 (___) ___-__-__"
                      className="h-[56px] w-full rounded-[14px] border border-[#cfd8e3] px-5 text-[15px] text-[#0f172a] outline-none transition-colors duration-200 placeholder:text-[#94a3b8] focus:border-[#22c1b6] focus:ring-1 focus:ring-[#22c1b6]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-3 block text-[15px] font-semibold text-[#334155]"
                  >
                    Email <span className="text-[#ef4444]">*</span>
                  </label>
                  <input
                    id="email"
                    name="Email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="h-[56px] w-full rounded-[14px] border border-[#cfd8e3] px-5 text-[15px] text-[#0f172a] outline-none transition-colors duration-200 placeholder:text-[#94a3b8] focus:border-[#22c1b6] focus:ring-1 focus:ring-[#22c1b6]"
                  />
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="diameter"
                      className="mb-3 block text-[15px] font-semibold text-[#334155]"
                    >
                      Диаметр (мм) <span className="text-[#ef4444]">*</span>
                    </label>
                    <input
                      id="diameter"
                      name="Диаметр"
                      type="text"
                      required
                      placeholder="Например: 300"
                      className="h-[56px] w-full rounded-[14px] border border-[#cfd8e3] px-5 text-[15px] text-[#0f172a] outline-none transition-colors duration-200 placeholder:text-[#94a3b8] focus:border-[#22c1b6] focus:ring-1 focus:ring-[#22c1b6]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="quantity"
                      className="mb-3 block text-[15px] font-semibold text-[#334155]"
                    >
                      Количество (шт) <span className="text-[#ef4444]">*</span>
                    </label>
                    <input
                      id="quantity"
                      name="Количество"
                      type="number"
                      min="1"
                      required
                      placeholder="Например: 10"
                      className="h-[56px] w-full rounded-[14px] border border-[#cfd8e3] px-5 text-[15px] text-[#0f172a] outline-none transition-colors duration-200 placeholder:text-[#94a3b8] focus:border-[#22c1b6] focus:ring-1 focus:ring-[#22c1b6]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="clampType"
                    className="mb-3 block text-[15px] font-semibold text-[#334155]"
                  >
                    Тип хомута <span className="text-[#ef4444]">*</span>
                  </label>
                  <select
                    id="clampType"
                    name="Тип хомута"
                    required
                    defaultValue=""
                    className="h-[56px] w-full rounded-[14px] border border-[#cfd8e3] bg-white px-5 text-[15px] text-[#0f172a] outline-none transition-colors duration-200 focus:border-[#22c1b6] focus:ring-1 focus:ring-[#22c1b6]"
                  >
                    <option value="" disabled>
                      Выберите тип хомута
                    </option>
                    <option value="Ленточный">Ленточный</option>
                    <option value="Профильный">Профильный</option>
                    <option value="Рычажный">Рычажный</option>
                    <option value="Нужна консультация">Нужна консультация</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="comment"
                    className="mb-3 block text-[15px] font-semibold text-[#334155]"
                  >
                    Комментарий
                  </label>
                  <textarea
                    id="comment"
                    name="Комментарий"
                    maxLength={500}
                    rows={5}
                    placeholder="Дополнительная информация о заказе (максимум 500 символов)"
                    className="w-full rounded-[14px] border border-[#cfd8e3] px-5 py-4 text-[15px] text-[#0f172a] outline-none transition-colors duration-200 placeholder:text-[#94a3b8] focus:border-[#22c1b6] focus:ring-1 focus:ring-[#22c1b6]"
                  />
                  <div className="mt-2 text-right text-[14px] text-[#64748b]">
                    0/500
                  </div>
                </div>

                <div className="pt-1">
                  <label className="flex items-start gap-3 text-[15px] leading-[1.6] text-[#334155]">
                    <input
                      type="checkbox"
                      name="Согласие"
                      required
                      className="mt-1 h-[24px] w-[24px] rounded border border-[#cfd8e3] accent-[#149c94]"
                    />
                    <span>
                      Даю согласие на обработку персональных данных и соглашаюсь с{" "}
                      <Link
                        href="/politika-konfidencialnosti"
                        className="font-medium text-[#149c94] underline underline-offset-4 transition-colors duration-200 hover:text-[#118b84]"
                      >
                        политикой конфиденциальности
                      </Link>{" "}
                      <span className="text-[#ef4444]">*</span>
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="inline-flex h-[58px] w-full items-center justify-center rounded-[16px] bg-[#149c94] px-8 text-[18px] font-semibold text-white shadow-[0_12px_30px_rgba(20,156,148,0.24)] transition-all duration-200 hover:bg-[#118b84]"
                >
                  Отправить заявку
                </button>
              </form>
            </div>
          </div>
        </section>

        <section className="w-full bg-[linear-gradient(135deg,#149c94_0%,#1ca79f_45%,#168b84_100%)] px-6 py-18 md:py-20">
          <div className="mx-auto max-w-[980px] text-center">
            <h2 className="mx-auto max-w-[900px] text-[28px] font-bold leading-[1.18] tracking-[-0.03em] text-white md:text-[44px]">
              Нужна консультация по выбору хомутов для фильтров?
            </h2>

            <p className="mx-auto mt-6 max-w-[920px] text-[15px] leading-[1.7] text-white/95 md:text-[16px]">
              Наши специалисты помогут подобрать оптимальный тип и размер хомутов
              для вашего оборудования. Звоните или оставляйте заявку!
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="tel:+79514992576"
                className="inline-flex h-[58px] min-w-[258px] items-center justify-center gap-3 rounded-[16px] bg-white px-7 text-[16px] font-semibold text-[#128f88] shadow-[0_14px_34px_rgba(0,0,0,0.12)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_38px_rgba(0,0,0,0.16)]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-[18px] w-[18px]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.08 5.18 2 2 0 0 1 5.06 3h3a2 2 0 0 1 2 1.72c.12.9.33 1.8.63 2.65a2 2 0 0 1-.45 2.11L9 10.72a16 16 0 0 0 4.28 4.28l1.24-1.24a2 2 0 0 1 2.11-.45c.85.3 1.75.51 2.65.63A2 2 0 0 1 22 16.92z" />
                </svg>
                +7 (951) 499-25-76
              </a>

              <a
                href="mailto:filterflow@mail.ru"
                className="inline-flex h-[58px] min-w-[258px] items-center justify-center gap-3 rounded-[16px] bg-[#0f6f69] px-7 text-[16px] font-semibold text-white shadow-[0_14px_34px_rgba(0,0,0,0.14)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0d6660] hover:shadow-[0_18px_38px_rgba(0,0,0,0.18)]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-[18px] w-[18px]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16v16H4z" />
                  <path d="m4 7 8 6 8-6" />
                </svg>
                filterflow@mail.ru
              </a>
            </div>
          </div>
        </section>

        <section className="px-6 py-18 md:py-20">
          <div className="mx-auto max-w-[1280px]">
            <div className="text-center">
              <div className="inline-flex items-center justify-center rounded-full bg-[#ecf8f5] px-6 py-2 text-[14px] font-semibold text-[#149c94]">
                Смотрите также
              </div>

              <h2 className="mt-7 text-[30px] font-bold leading-[1.15] tracking-[-0.03em] text-[#10233f] md:text-[42px]">
                Фильтровальные мешки и рукава
              </h2>

              <p className="mx-auto mt-4 max-w-[760px] text-[15px] leading-[1.7] text-[#64748b] md:text-[16px]">
                Продукция FilterFlow для систем аспирации и пылеудаления
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {relatedProducts.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group rounded-[22px] border border-[#e4eaf1] bg-white px-7 py-6 shadow-[0_8px_24px_rgba(15,23,42,0.04)] transition-all duration-200 hover:-translate-y-1 hover:border-[#bfeee8] hover:bg-[#f4fcfa] hover:shadow-[0_14px_32px_rgba(20,156,148,0.10)]"
                >
                  <div className="flex h-[44px] w-[44px] items-center justify-center rounded-[14px] bg-[#ecf8f5] text-[#149c94] transition-colors duration-200 group-hover:bg-[#d9f5ef]">
                    {item.icon}
                  </div>

                  <h3 className="mt-5 text-[17px] font-bold leading-[1.35] text-[#10233f]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[15px] leading-[1.6] text-[#64748b]">
                    {item.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 pb-24 md:pb-28">
          <div className="mx-auto max-w-[1280px]">
            <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
              <div>
                <div className="inline-flex items-center justify-center rounded-full bg-[#fff2ea] px-5 py-2 text-[14px] font-semibold text-[#ff7a2f]">
                  Читайте в блоге
                </div>

                <h2 className="mt-5 text-[28px] font-bold leading-[1.15] tracking-[-0.03em] text-[#10233f] md:text-[40px]">
                  Полезные статьи о фильтрации
                </h2>
              </div>

              <Link
                href="/blog"
                className="mt-1 inline-flex items-center gap-2 self-start text-[15px] font-semibold text-[#149c94] transition-colors duration-200 hover:text-[#ff7a2f]"
              >
                Все статьи
                <span className="text-[18px] leading-none">→</span>
              </Link>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {blogArticles.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group rounded-[22px] border border-[#e5ebf2] bg-white px-6 py-6 shadow-[0_8px_24px_rgba(15,23,42,0.04)] transition-all duration-200 hover:-translate-y-1 hover:border-[#ffd8c2] hover:bg-[#fffaf7] hover:shadow-[0_14px_34px_rgba(255,122,47,0.12)]"
                >
                  <div className="flex h-[40px] w-[40px] items-center justify-center rounded-[12px] border border-[#ffd7c0] bg-[#fff5ef] text-[#ff7a2f] transition-colors duration-200 group-hover:bg-[#ffede2] group-hover:text-[#f26b21]">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-[18px] w-[18px]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="6" y="4" width="12" height="16" rx="2" />
                      <path d="M9 8h6" />
                      <path d="M9 12h6" />
                      <path d="M9 16h4" />
                    </svg>
                  </div>

                  <h3 className="mt-5 text-[16px] font-bold leading-[1.4] text-[#10233f] transition-colors duration-200 group-hover:text-[#f26b21] md:text-[17px]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[15px] leading-[1.6] text-[#64748b]">
                    {item.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <SeeAlsoLinks />
      </main>

      <div className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-4 xl:flex">
        <a
          href="mailto:filterflow@mail.ru"
          className="flex h-[56px] w-[56px] items-center justify-center rounded-full bg-white text-[#ff7a2f] shadow-[0_10px_30px_rgba(15,23,42,0.12)] transition-transform duration-200 hover:scale-105"
        >
          <span className="text-[28px]">✉</span>
        </a>

        <a
          href="tel:+79514992576"
          className="flex h-[56px] w-[56px] items-center justify-center rounded-full bg-white text-[#1f1f1f] shadow-[0_10px_30px_rgba(15,23,42,0.12)] transition-transform duration-200 hover:scale-105"
        >
          <span className="text-[28px]">☎</span>
        </a>

        <a
          href="https://wa.me/79514992576"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-[56px] w-[56px] items-center justify-center rounded-full bg-white shadow-[0_10px_30px_rgba(15,23,42,0.12)] transition-transform duration-200 hover:scale-105"
        >
          <img
            src="/images/whatsapp.png"
            alt="WhatsApp"
            className="h-[44px] w-[44px] object-contain"
          />
        </a>

        <a
          href="https://t.me/Violetta0502"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-[56px] w-[56px] items-center justify-center rounded-full bg-white shadow-[0_10px_30px_rgba(15,23,42,0.12)] transition-transform duration-200 hover:scale-105"
        >
          <img
            src="/images/telegram.png"
            alt="Telegram"
            className="h-[44px] w-[44px] object-contain"
          />
        </a>

        <a
          href="https://max.ru/u/f9LHodD0cOLehfNZxc-dfvXrRQQ-ApKrfczCjbhEa_va3lGdtndd7SgNP8U"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[linear-gradient(135deg,#6d4dff_0%,#c23fff_100%)] shadow-[0_10px_30px_rgba(15,23,42,0.16)] transition-transform duration-200 hover:scale-105"
        >
          <img
            src="/images/max.png"
            alt="MAX"
            className="h-[30px] w-[30px] object-contain"
          />
        </a>
      </div>

      <a
        href="#top"
        className="fixed bottom-8 right-8 z-40 flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[#28c4b7] text-white shadow-[0_10px_30px_rgba(40,196,183,0.35)] transition-colors duration-200 hover:bg-[#20b4a8]"
      >
        ↑
      </a>

      <Footer />
    </>
  );
}