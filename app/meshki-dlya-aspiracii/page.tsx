import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo-metadata";

export const metadata: Metadata = pageMetadata({
  title:
    "Мешки для аспирации — верхние и нижние под размеры",
  description:
    "Мешки для аспирации от производителя FilterFlow: верхние и нижние, тканевые, под УВП и циклоны. Изготовление по размерам, контроль качества швов. Доставка по России.",
  path: "/meshki-dlya-aspiracii",
});

const cards = [
  {
    title: "Верхние мешки",
    description:
      "Фильтруют мелкую пыль и обеспечивают чистоту воздуха на выходе из системы аспирации.",
    image: "/images/catalog/verhnie-meshki.webp",
    link: "/verhnie-meshki",
  },
  {
    title: "Нижние мешки",
    description:
      "Собирают крупную стружку и опилки, предотвращая засорение системы.",
    image: "/images/catalog/nizhnie-meshki.webp",
    link: "/nizhnie-meshki",
  },
  {
    title: "Тканевые мешки",
    description:
      "Изготовлены из высококачественной фильтровальной ткани для максимальной эффективности очистки.",
    image: "/images/catalog/tkanevye-meshki.webp",
    link: "/tkanevye-meshki",
  },
  {
    title: "Мешки для УВП и циклонов",
    description:
      "Специализированные мешки для пылеулавливающих установок и циклонных систем.",
    image: "/images/catalog/meshki-uvp-ciklonov.webp",
    link: "/meshki-dlya-ciklonov-i-uvp",
  },
];

const advantages = [
  {
    title: "Индивидуальные размеры",
    description:
      "Изготавливаем мешки по вашим чертежам и размерам — точное соответствие любому оборудованию.",
    icon: (
      <svg
        className="h-5 w-5 text-teal-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 3v2.25M14.25 3v2.25M4.5 9.75h15M6.75 6.75h10.5A2.25 2.25 0 0119.5 9v8.25a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 17.25V9A2.25 2.25 0 016.75 6.75z"
        />
      </svg>
    ),
  },
  {
    title: "Контроль качества",
    description:
      "Каждая партия проходит проверку на прочность швов, плотность ткани и соответствие размерам.",
    icon: (
      <svg
        className="h-5 w-5 text-teal-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3l7.5 3v6c0 5.25-3.375 8.625-7.5 9.75C7.875 20.625 4.5 17.25 4.5 12V6L12 3z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4"
        />
      </svg>
    ),
  },
  {
    title: "Быстрая доставка",
    description:
      "Отправляем по всей России транспортными компаниями. Срок изготовления — от 3 рабочих дней.",
    icon: (
      <svg
        className="h-5 w-5 text-teal-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 7.5h11.25v7.5H3zM14.25 10.5h3.621a1.5 1.5 0 011.17.562l1.709 2.136V15h-6.5v-4.5z"
        />
        <circle cx="7.5" cy="17.25" r="1.75" />
        <circle cx="17.25" cy="17.25" r="1.75" />
      </svg>
    ),
  },
  {
    title: "Цены от производителя",
    description:
      "Работаем без посредников — вы получаете продукцию напрямую с производства по выгодным ценам.",
    icon: (
      <svg
        className="h-5 w-5 text-teal-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="8" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8v8M9.5 10.5H13a1.5 1.5 0 010 3h-2a1.5 1.5 0 000 3h3.5"
        />
      </svg>
    ),
  },
  {
    title: "Долговечные материалы",
    description:
      "Используем износостойкие ткани с высокой степенью фильтрации и устойчивостью к нагрузкам.",
    icon: (
      <svg
        className="h-5 w-5 text-teal-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v4.5M12 16.5V21M4.929 7.93l3.182 3.181M15.89 14.89l3.182 3.182M3 12h4.5M16.5 12H21M4.929 16.07l3.182-3.181M15.89 9.11l3.182-3.182"
        />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: "Техническая поддержка",
    description:
      "Помогаем подобрать нужный тип мешка, материал и размер под ваше конкретное оборудование.",
    icon: (
      <svg
        className="h-5 w-5 text-teal-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 10.5a6 6 0 10-12 0v3a2.25 2.25 0 002.25 2.25H9l1.5 2.25h3L15 15.75h.75A2.25 2.25 0 0018 13.5v-3z"
        />
      </svg>
    ),
  },
];

const applications = [
  {
    title: "Деревообработка",
    description:
      "Мешки для стружкоотсосов, рейсмусов, фрезерных и шлифовальных станков.",
    image: "/images/catalog/derevoobrabotka.webp",
    icon: (
      <svg
        className="h-4 w-4 text-teal-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 5v14M8 7h8"
        />
      </svg>
    ),
  },
  {
    title: "Мебельное производство",
    description:
      "Фильтрация пыли и стружки на мебельных предприятиях и столярных мастерских.",
    image: "/images/catalog/meb-proiz.webp",
    icon: (
      <svg
        className="h-4 w-4 text-teal-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 10.5l8-6 8 6"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 9.75v8.25h10.5V9.75"
        />
      </svg>
    ),
  },
  {
    title: "Пылеулавливающие установки",
    description:
      "Мешки для УВП, циклонов и промышленных систем очистки воздуха.",
    image: "/images/catalog/pileulavliv.webp",
    icon: (
      <svg
        className="h-4 w-4 text-teal-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 19.5V6.75m7.5 12.75V4.5M4.5 19.5h15"
        />
      </svg>
    ),
  },
  {
    title: "Строительство",
    description:
      "Сбор строительной пыли, цемента и мелкодисперсных частиц на объектах.",
    image: "/images/catalog/stroitelstvo.webp",
    icon: (
      <svg
        className="h-4 w-4 text-teal-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 18h15M7.5 18V9.75l4.5-3 4.5 3V18"
        />
      </svg>
    ),
  },
];

const materials = [
  {
    title: "Нетканый полипропилен",
    description:
      "Оптимальный выбор для большинства систем аспирации. Высокая прочность и долговечность.",
    badge: "Популярный",
    badgeClass: "bg-[#d9f5ee] text-[#159b83]",
    density: "100–200 г/м²",
    filtration: "до 5 мкм",
    temperature: "до +80°C",
  },
  {
    title: "Иглопробивной войлок",
    description:
      "Для тонкой фильтрации мелкодисперсной пыли. Высокая термостойкость.",
    badge: "Тонкая фильтрация",
    badgeClass: "bg-[#dce8fb] text-[#3366cc]",
    density: "300–500 г/м²",
    filtration: "до 1 мкм",
    temperature: "до +120°C",
  },
  {
    title: "Полиэфирная ткань",
    description:
      "Устойчива к химическим воздействиям и высоким температурам.",
    badge: "Термостойкий",
    badgeClass: "bg-[#fde8d3] text-[#df6b1d]",
    density: "150–250 г/м²",
    filtration: "до 3 мкм",
    temperature: "до +150°C",
  },
  {
    title: "Хлопчатобумажная ткань",
    description:
      "Экологичный материал для сбора крупной стружки и опилок.",
    badge: "Эко",
    badgeClass: "bg-[#daf5df] text-[#2b9b55]",
    density: "200–350 г/м²",
    filtration: "до 10 мкм",
    temperature: "до +90°C",
  },
];

const standardSizes = [
  {
    model: "AC-200",
    diameter: "200 мм",
    height: "600 мм",
    type: "Верхний",
    equipment: "Стружкоотсос малый",
  },
  {
    model: "AC-300",
    diameter: "300 мм",
    height: "800 мм",
    type: "Верхний",
    equipment: "Стружкоотсос средний",
  },
  {
    model: "AC-400",
    diameter: "400 мм",
    height: "1000 мм",
    type: "Верхний / Нижний",
    equipment: "УВП, циклон",
  },
  {
    model: "AC-500",
    diameter: "500 мм",
    height: "1200 мм",
    type: "Нижний",
    equipment: "Промышленный УВП",
  },
  {
    model: "AC-600",
    diameter: "600 мм",
    height: "1500 мм",
    type: "Нижний",
    equipment: "Крупный циклон",
  },
  {
    model: "Нестандарт",
    diameter: "По чертежу",
    height: "По чертежу",
    type: "Любой",
    equipment: "Любое оборудование",
  },
];

const formBenefits = [
  {
    text: "Ответ в течение 30 минут",
    icon: (
      <svg
        className="h-4 w-4 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="8" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8v4l2.5 1.5"
        />
      </svg>
    ),
  },
  {
    text: "Изготовление по вашим размерам",
    icon: (
      <svg
        className="h-4 w-4 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 15l5-5 5 5M14 5l5 5-9 9H5v-5l9-9z"
        />
      </svg>
    ),
  },
  {
    text: "Доставка по всей России",
    icon: (
      <svg
        className="h-4 w-4 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 7.5h11.25v7.5H3zM14.25 10.5h3.621a1.5 1.5 0 011.17.562l1.709 2.136V15h-6.5v-4.5z"
        />
        <circle cx="7.5" cy="17.25" r="1.5" />
        <circle cx="17.25" cy="17.25" r="1.5" />
      </svg>
    ),
  },
];

const similarProducts = [
  {
    title: "Верхние мешки для аспирации",
    description: "Фильтруют мелкую пыль на выходе из системы аспирации.",
    link: "/verhnie-meshki",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="8" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 16V8m0 0l-3 3m3-3l3 3"
        />
      </svg>
    ),
  },
  {
    title: "Нижние мешки для аспирации",
    description: "Собирают крупную стружку и опилки в нижней части установки.",
    link: "/nizhnie-meshki",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="8" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8v8m0 0l-3-3m3 3l3-3"
        />
      </svg>
    ),
  },
  {
    title: "Тканевые мешки для аспирации",
    description:
      "Высококачественная тканевая фильтрация для профессиональных систем.",
    link: "/tkanevye-meshki",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 7.5h12M6 12h12M6 16.5h12"
        />
      </svg>
    ),
  },
  {
    title: "Мешки для циклонов и УВП",
    description: "Специализированные мешки для пылеулавливающих установок.",
    link: "/meshki-dlya-ciklonov-i-uvp",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 7h14M7 12h10M10 17h4"
        />
      </svg>
    ),
  },
  {
    title: "Фильтровальные рукава",
    description: "Промышленные рукава для систем очистки воздуха.",
    link: "/filtracionnye-rukava",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 5.25h12l-4.5 6v5.25l-3 1.5v-6.75L6 5.25z"
        />
      </svg>
    ),
  },
  {
    title: "Мешки для опилок",
    description: "Мешки для сбора опилок и древесной стружки.",
    link: "/meshki-dlya-struzhkootsosa",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7 12c0-2.761 2.239-5 5-5 1.78 0 3.343.93 4.228 2.33C18.317 9.782 20 11.675 20 14c0 2.761-2.239 5-5 5-1.062 0-2.047-.331-2.857-.896A4.982 4.982 0 017 12z"
        />
      </svg>
    ),
  },
];

const blogArticles = [
  {
    title: "Как выбрать мешок для аспирации",
    description:
      "Полное руководство по подбору фильтровального мешка: материалы, размеры и типы крепления",
    link: "/blog/kak-vybrat-meshok-aspiratsii",
  },
  {
    title: "Как работает система аспирации",
    description:
      "Принцип работы систем пылеудаления и роль фильтровальных мешков",
    link: "/blog/kak-rabotaet-aspiratsiya",
  },
  {
    title: "Когда менять фильтровальный мешок",
    description:
      "Признаки износа, средние сроки службы и советы по продлению ресурса фильтра",
    link: "/blog/kogda-menyat-filtr-meshok",
  },
  {
    title: "Типы фильтровальных мешков",
    description:
      "Обзор видов фильтров: верхние, нижние, рукавные, для циклонов",
    link: "/blog/tipy-filtruyushchikh-meshkov",
  },
];

const faqItems = [
  {
    question: "Как подобрать мешок для аспирации под моё оборудование?",
    answer:
      "Для подбора мешка нам нужны: диаметр патрубка, высота мешка и тип оборудования (стружкоотсос, УВП, циклон). Напишите нам в WhatsApp или оставьте заявку — мы поможем подобрать нужный вариант.",
  },
  {
    question: "Изготавливаете ли вы мешки нестандартных размеров?",
    answer:
      "Да, мы производим мешки по индивидуальным чертежам и размерам заказчика. Пришлите нам размеры или чертёж — рассчитаем стоимость и сроки изготовления.",
  },
  {
    question: "Какой срок изготовления мешков?",
    answer:
      "Стандартные размеры — от 3 рабочих дней. Нестандартные мешки — от 5 рабочих дней в зависимости от сложности и объёма заказа.",
  },
  {
    question: "Как осуществляется доставка?",
    answer:
      "Отправляем по всей России транспортными компаниями: СДЭК, Деловые Линии, ПЭК и другими. Стоимость доставки рассчитывается индивидуально в зависимости от региона и веса заказа.",
  },
  {
    question: "Какие материалы используются для изготовления мешков?",
    answer:
      "Используем нетканый полипропилен, иглопробивной войлок, полиэфирную и хлопчатобумажную ткань. Выбор материала зависит от типа пыли, температуры и требований к фильтрации.",
  },
  {
    question: "Можно ли заказать пробную партию?",
    answer:
      "Да, принимаем заказы от 1 штуки. Для крупных партий предусмотрены скидки. Свяжитесь с нами для уточнения условий.",
  },
];

const seoMaterials = [
  "Полиэстер — универсальный материал, степень фильтрации до 99,5%, температура до 130°C",
  "Полипропилен — высокая химическая стойкость, подходит для влажных и агрессивных сред",
  "Иглопробивной войлок — повышенная пылеёмкость, для тяжёлых условий эксплуатации",
  "Антистатические ткани — обязательны при работе с взрывоопасной пылью",
];

const seoSelectionPoints = [
  "Диаметр патрубка — определяет диаметр горловины мешка (стандартные: 100, 120, 150, 200, 250 мм)",
  "Высота мешка — зависит от объёма накопительного бункера оборудования",
  "Тип крепления — хомутовое, кольцевое или фланцевое соединение",
  "Тип пыли — древесная, металлическая, пластиковая или химическая",
];

export default function Page() {
  return (
    <>
      <style>{`
        details.faq-item > summary::-webkit-details-marker {
          display: none;
        }
        details.faq-item summary {
          list-style: none;
        }
        details.faq-item[open] {
          border-color: #9be9df;
          background: #f5fffd;
          box-shadow: 0 10px 24px rgba(34,184,173,0.10);
        }
        details.faq-item[open] .faq-question {
          color: #14b8a6;
        }
        details.faq-item[open] .faq-icon {
          background: #22b8ad;
          color: white;
          border-color: #22b8ad;
        }
        details.faq-item[open] .faq-plus {
          display: none;
        }
        details.faq-item:not([open]) .faq-minus {
          display: none;
        }
        details.faq-item[open] .faq-minus {
          display: inline;
        }
      `}</style>

      {/* HEADER */}
      <div className="sticky top-0 z-50">
        <div className="h-[36px] w-full border-b border-gray-300 bg-[#D0D0D0]">
          <div className="mx-auto flex h-full max-w-7xl items-center justify-end gap-7 px-6 text-[14px] text-slate-600">
            <a
              href="mailto:filterflow@mail.ru"
              className="transition hover:text-teal-600"
            >
              filterflow@mail.ru
            </a>

            <a
              href="tel:+79514992576"
              className="transition hover:text-teal-600"
            >
              +7 (951) 499-25-76
            </a>

            <a
              href="https://wa.me/79514992576"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-teal-600"
            >
              WhatsApp
            </a>

            <a
              href="https://t.me/Violetta0502"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-teal-600"
            >
              Telegram
            </a>

            <a
              href="https://max.ru/u/f9LHodD0cOLehfNZxc-dfvXrRQQ-ApKrfczCjbhEa_va3lGdtndd7SgNP8U"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#9B5DE5] transition hover:text-teal-600"
            >
              MAX
            </a>
          </div>
        </div>

        <div className="w-full border-b border-gray-200 bg-white shadow-sm">
          <div className="mx-auto flex min-h-[82px] max-w-7xl items-center justify-between px-6">
            <div className="flex flex-col">
              <a href="/" className="flex items-center gap-4">
                <img
                  src="/favicon.ico"
                  alt="FilterFlow"
                  className="h-12 w-12 rounded-xl"
                />
                <span className="text-xl font-semibold transition hover:text-teal-600">
                  FilterFlow
                </span>
              </a>

              <div className="mt-1 flex items-center gap-2 text-sm">
                <a href="/" className="text-teal-600 hover:underline">
                  Главная
                </a>
                <span className="text-gray-400">›</span>
                <span className="text-gray-700">Мешки для аспирации</span>
              </div>
            </div>

            <nav className="hidden items-center gap-8 text-gray-700 lg:flex">
              <a href="/" className="transition hover:text-teal-600">
                Главная
              </a>

              <div className="group relative">
                <button
                  type="button"
                  className="flex items-center gap-2 transition hover:text-teal-600"
                >
                  <span>Продукция</span>
                  <svg
                    className="h-4 w-4 text-teal-500 transition-transform duration-200 group-hover:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <div className="absolute left-1/2 top-full z-30 w-[310px] -translate-x-1/2 pt-4 opacity-0 invisible pointer-events-none transition-all duration-200 group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto">
                  <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-2xl">
                    <div className="space-y-1">
                      <a
                        href="/meshki-dlya-aspiracii"
                        className="block rounded-xl bg-teal-50 px-4 py-3 font-medium text-teal-700 transition hover:bg-teal-100 hover:text-teal-700"
                      >
                        • Мешки для аспирации
                      </a>

                      <a
                        href="/filtracionnye-rukava"
                        className="block rounded-xl px-4 py-3 transition hover:bg-teal-50 hover:text-teal-600"
                      >
                        • Фильтровальные рукава
                      </a>

                      <a
                        href="/meshki-dlya-struzhkootsosa"
                        className="block rounded-xl px-4 py-3 transition hover:bg-teal-50 hover:text-teal-600"
                      >
                        • Мешки для стружкоотсоса
                      </a>

                      <a
                        href="/meshki-dlya-ciklonov-i-uvp"
                        className="block rounded-xl px-4 py-3 transition hover:bg-teal-50 hover:text-teal-600"
                      >
                        • Мешки для циклонов и УВП
                      </a>

                      <a
                        href="/bystrosemnye-homyty"
                        className="block rounded-xl px-4 py-3 transition hover:bg-teal-50 hover:text-teal-600"
                      >
                        • Быстросъёмные хомуты
                      </a>

                      <a
                        href="/nestandartnye-meshki-dlya-filtracii"
                        className="block rounded-xl px-4 py-3 transition hover:bg-teal-50 hover:text-teal-600"
                      >
                        • Нестандартные мешки для фильтрации
                      </a>
                    </div>

                    <a
                      href="/#catalog"
                      className="mt-4 block rounded-xl bg-teal-500 px-4 py-3 text-center font-medium text-white transition hover:bg-teal-600"
                    >
                      Весь каталог →
                    </a>
                  </div>
                </div>
              </div>

              <div className="group relative">
                <button
                  type="button"
                  className="flex items-center gap-2 transition hover:text-teal-600"
                >
                  <span>Статьи</span>
                  <svg
                    className="h-4 w-4 text-teal-500 transition-transform duration-200 group-hover:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <div className="absolute left-1/2 top-full z-30 w-[320px] -translate-x-1/2 pt-4 opacity-0 invisible pointer-events-none transition-all duration-200 group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto">
                  <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-2xl">
                    <div className="space-y-1">
                      <a
                        href="/blog/kak-vybrat-meshok-aspiratsii"
                        className="block rounded-xl px-4 py-3 transition hover:bg-teal-50 hover:text-teal-600"
                      >
                        Как выбрать мешок для аспирации
                      </a>

                      <a
                        href="/blog/kak-rabotaet-aspiratsiya"
                        className="block rounded-xl px-4 py-3 transition hover:bg-teal-50 hover:text-teal-600"
                      >
                        Как работает аспирация
                      </a>

                      <a
                        href="/blog/kogda-menyat-filtr-meshok"
                        className="block rounded-xl px-4 py-3 transition hover:bg-teal-50 hover:text-teal-600"
                      >
                        Когда менять фильтр-мешок
                      </a>

                      <a
                        href="/blog/tipy-filtruyushchikh-meshkov"
                        className="block rounded-xl px-4 py-3 transition hover:bg-teal-50 hover:text-teal-600"
                      >
                        Типы фильтровальных мешков
                      </a>
                    </div>

                    <a
                      href="/blog"
                      className="mt-4 block rounded-xl bg-teal-500 px-4 py-3 text-center font-medium text-white transition hover:bg-teal-600"
                    >
                      Все статьи блога →
                    </a>
                  </div>
                </div>
              </div>

              <a href="/portfolio" className="transition hover:text-teal-600">
                Портфолио
              </a>

              <a href="/o-kompanii" className="transition hover:text-teal-600">
                О компании
              </a>

              <a href="/kontakty" className="transition hover:text-teal-600">
                Контакты
              </a>
            </nav>

            <a
              href="https://wa.me/79514992576"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-teal-500 px-5 py-2 text-sm text-white transition hover:bg-teal-600"
            >
              Получить расчёт
            </a>
          </div>
        </div>
      </div>

      {/* HERO */}
      <section
        id="top"
        className="relative min-h-[620px] w-full overflow-hidden scroll-mt-[120px]"
      >
        <img
          src="/images/meshki-hero.webp"
          alt="Мешки для аспирации"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="relative z-10 mx-auto flex min-h-[620px] max-w-7xl items-start justify-center px-6 pb-16 pt-24 md:pt-28">
          <div className="max-w-4xl text-center text-white">
            <div className="mb-5 inline-block rounded-full bg-teal-500/90 px-4 py-1 text-sm">
              Производство и поставка
            </div>

            <h1 className="mb-6 whitespace-nowrap text-5xl font-bold leading-tight md:text-7xl">
              Мешки для аспирации
            </h1>

            <p className="mb-10 text-lg md:text-xl">
              Фильтровальные мешки для систем аспирации и стружкоотсосов.
              <br />
              Производство по индивидуальным размерам, доставка по всей России.
            </p>

            <div className="mb-10 flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/79514992576"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-teal-500 px-8 py-4 text-lg font-semibold transition hover:bg-teal-600"
              >
                Получить расчет
              </a>

              <a
                href="/kontakty"
                className="rounded-xl border border-white/40 bg-white/10 px-8 py-4 text-lg backdrop-blur-md transition hover:bg-white/20"
              >
                Связаться с нами
              </a>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-8 text-sm text-white/90 md:text-base">
              <div className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 text-teal-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Гарантия качества
              </div>

              <div className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 text-teal-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 6h13v9h-1a3 3 0 01-6 0H9a3 3 0 01-6 0H2V8a2 2 0 011-2zm16 3h2l3 3v3h-1a3 3 0 01-6 0h-1V9zM6 18a1 1 0 100-2 1 1 0 000 2zm12 0a1 1 0 100-2 1 1 0 000 2z" />
                </svg>
                Доставка по России
              </div>

              <div className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 text-teal-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v18M3 12h18"
                  />
                </svg>
                Индивидуальные размеры
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* КАТАЛОГ */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-block rounded-full bg-teal-100 px-4 py-1 text-sm text-teal-600">
            Ассортимент
          </div>

          <h2 className="mb-4 text-4xl font-bold">
            Виды мешков для аспирации
          </h2>

          <p className="mx-auto max-w-2xl text-gray-500">
            Производим полный спектр фильтровальных мешков для любых систем
            аспирации и пылеудаления
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <Link key={card.title} href={card.link} className="group block">
              <article className="h-full rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <div className="mb-4 flex h-[180px] items-center justify-center overflow-hidden rounded-xl bg-[#f7f7f7]">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="max-h-[180px] w-auto max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <h3 className="mb-2 text-lg font-semibold transition-colors group-hover:text-teal-500">
                  {card.title}
                </h3>

                <p className="mb-4 text-sm text-gray-500">
                  {card.description}
                </p>

                <span className="text-sm font-medium text-teal-500">
                  Подробнее →
                </span>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* ПРЕИМУЩЕСТВА */}
      <section className="bg-[#f8fafc] py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center md:mb-12">
            <div className="mb-3 inline-flex rounded-full bg-[#eafaf6] px-4 py-1 text-[13px] font-medium text-teal-600">
              Почему выбирают нас
            </div>

            <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
              Преимущества FilterFlow
            </h2>

            <p className="mx-auto max-w-3xl text-[15px] leading-7 text-slate-500 md:text-[16px]">
              Собственное производство и многолетний опыт — гарантия надёжности
              каждого изделия
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {advantages.map((item) => (
              <article
                key={item.title}
                className="rounded-[22px] border border-[#edf1f5] bg-white px-7 py-7 shadow-[0_4px_14px_rgba(15,23,42,0.04)] transition hover:-translate-y-[2px] hover:shadow-[0_8px_20px_rgba(15,23,42,0.07)]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eefaf7]">
                  {item.icon}
                </div>

                <h3 className="mb-3 text-[18px] font-semibold leading-[1.35] text-slate-900 md:text-[19px]">
                  {item.title}
                </h3>

                <p className="text-[15px] leading-8 text-slate-500">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ПРИМЕНЕНИЕ НА ПРЕДПРИЯТИЯХ */}
      <section className="bg-[#f8fafc] py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center md:mb-12">
            <div className="mb-3 inline-flex rounded-full bg-[#eafaf6] px-4 py-1 text-[13px] font-medium text-teal-600">
              Сферы применения
            </div>

            <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
              Применение на предприятиях
            </h2>

            <p className="mx-auto max-w-3xl text-[15px] leading-7 text-slate-500 md:text-[16px]">
              Наши мешки используются в различных отраслях промышленности и
              производства
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {applications.map((item) => (
              <article
                key={item.title}
                className="group overflow-hidden rounded-[22px] border border-[#e9eef3] bg-white shadow-[0_4px_14px_rgba(15,23,42,0.04)] transition hover:-translate-y-[2px] hover:shadow-[0_8px_20px_rgba(15,23,42,0.08)]"
              >
                <div className="relative h-[220px] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                  />
                </div>

                <div className="p-5">
                  <div className="mb-4 flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#eefaf7]">
                      {item.icon}
                    </div>

                    <h3 className="text-[18px] font-semibold leading-[1.3] text-slate-900">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-[15px] leading-8 text-slate-500">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ФИЛЬТРОВАЛЬНЫЕ МАТЕРИАЛЫ */}
      <section className="bg-[#f8fafc] py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center md:mb-12">
            <div className="mb-3 inline-flex rounded-full bg-[#eafaf6] px-4 py-1 text-[13px] font-medium text-teal-600">
              Материалы
            </div>

            <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
              Фильтровальные материалы
            </h2>

            <p className="mx-auto max-w-3xl text-[15px] leading-7 text-slate-500 md:text-[16px]">
              Используем только проверенные материалы с подтверждёнными
              характеристиками фильтрации
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {materials.map((item) => (
              <article
                key={item.title}
                className="rounded-[22px] border border-[#e9eef3] bg-white px-6 py-6 shadow-[0_4px_14px_rgba(15,23,42,0.04)] transition hover:-translate-y-[2px] hover:shadow-[0_8px_20px_rgba(15,23,42,0.08)]"
              >
                <div className="mb-5 flex items-start justify-between gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#eefaf7]">
                    <svg
                      className="h-5 w-5 text-teal-500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4l8 4-8 4-8-4 8-4z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 12l8 4 8-4"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 16l8 4 8-4"
                      />
                    </svg>
                  </div>

                  <span
                    className={`inline-flex shrink-0 rounded-full px-4 py-1 text-[12px] font-semibold ${item.badgeClass}`}
                  >
                    {item.badge}
                  </span>
                </div>

                <h3 className="mb-4 text-[18px] font-semibold leading-[1.35] text-slate-900">
                  {item.title}
                </h3>

                <p className="min-h-[116px] text-[15px] leading-8 text-slate-500">
                  {item.description}
                </p>

                <div className="mt-5 border-t border-[#edf1f5] pt-5">
                  <div className="mb-2 flex items-center justify-between gap-4">
                    <span className="text-[14px] text-slate-400">Плотность</span>
                    <span className="text-[14px] font-medium text-slate-800">
                      {item.density}
                    </span>
                  </div>

                  <div className="mb-2 flex items-center justify-between gap-4">
                    <span className="text-[14px] text-slate-400">Фильтрация</span>
                    <span className="text-[14px] font-medium text-slate-800">
                      {item.filtration}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[14px] text-slate-400">Температура</span>
                    <span className="text-[14px] font-medium text-slate-800">
                      {item.temperature}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* СТАНДАРТНЫЕ РАЗМЕРЫ МЕШКОВ */}
      <section className="bg-[#f8fafc] py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center md:mb-12">
            <div className="mb-3 inline-flex rounded-full bg-[#eafaf6] px-4 py-1 text-[13px] font-medium text-teal-600">
              Размеры
            </div>

            <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
              Стандартные размеры мешков
            </h2>

            <p className="mx-auto max-w-3xl text-[15px] leading-7 text-slate-500 md:text-[16px]">
              Производим мешки стандартных размеров и по индивидуальным
              чертежам заказчика
            </p>
          </div>

          <div className="overflow-hidden rounded-[22px] border border-[#e7ecef] bg-white shadow-[0_4px_14px_rgba(15,23,42,0.04)]">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[980px] border-collapse">
                <thead>
                  <tr className="bg-[#22b8ad] text-white">
                    <th className="px-5 py-6 text-left text-[16px] font-semibold">
                      Модель
                    </th>
                    <th className="px-5 py-6 text-left text-[16px] font-semibold">
                      Диаметр
                    </th>
                    <th className="px-5 py-6 text-left text-[16px] font-semibold">
                      Высота
                    </th>
                    <th className="px-5 py-6 text-left text-[16px] font-semibold">
                      Тип
                    </th>
                    <th className="px-5 py-6 text-left text-[16px] font-semibold">
                      Оборудование
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {standardSizes.map((item, index) => (
                    <tr
                      key={item.model}
                      className={`border-b border-[#edf1f5] last:border-b-0 ${
                        index % 2 === 0 ? "bg-white" : "bg-[#fcfdfd]"
                      }`}
                    >
                      <td className="px-5 py-6 text-[16px] font-semibold text-teal-600">
                        {item.model}
                      </td>
                      <td className="px-5 py-6 text-[16px] text-slate-700">
                        {item.diameter}
                      </td>
                      <td className="px-5 py-6 text-[16px] text-slate-700">
                        {item.height}
                      </td>
                      <td className="px-5 py-6 text-[16px] text-slate-700">
                        {item.type}
                      </td>
                      <td className="px-5 py-6 text-[16px] text-slate-500">
                        {item.equipment}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="mt-6 text-center text-[16px] text-slate-400">
            Не нашли нужный размер?{" "}
            <a
              href="https://wa.me/79514992576"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-600 transition hover:text-teal-700"
            >
              Напишите нам
            </a>{" "}
            — изготовим по вашим параметрам.
          </p>
        </div>
      </section>

      {/* ЗЕЛЕНЫЙ БЛОК ЗАЯВКИ */}
      <section className="bg-[#129d95] py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14">
          <div className="max-w-[620px] text-white">
            <div className="mb-8 inline-flex rounded-full bg-white/12 px-5 py-2 text-[16px] font-semibold text-white">
              Заказать мешки
            </div>

            <h2 className="mb-7 text-[44px] font-bold leading-[1.12] tracking-[-0.02em] md:text-[58px]">
              Получите расчёт стоимости
            </h2>

            <p className="mb-10 max-w-[620px] text-[18px] leading-[1.7] text-white/90 md:text-[19px]">
              Оставьте заявку — мы свяжемся с вами в течение 30 минут, уточним
              параметры и рассчитаем стоимость.
            </p>

            <div className="space-y-5">
              {formBenefits.map((item) => (
                <div key={item.text} className="flex items-center gap-4">
                  <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-xl bg-white/12">
                    {item.icon}
                  </div>
                  <span className="text-[18px] font-medium leading-[1.5] text-white">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] bg-white p-7 shadow-[0_20px_50px_rgba(0,0,0,0.12)] md:p-8">
            <div className="mb-5">
              <label className="mb-3 block text-[16px] font-medium text-slate-800">
                Ваше имя
              </label>
              <input
                type="text"
                placeholder="Иван Иванов"
                className="h-[58px] w-full rounded-2xl border border-[#e6e8ec] px-5 text-[16px] text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-teal-500"
              />
            </div>

            <div className="mb-5">
              <label className="mb-3 block text-[16px] font-medium text-slate-800">
                Телефон
              </label>
              <input
                type="tel"
                placeholder="+7 (___) ___-__-__"
                className="h-[58px] w-full rounded-2xl border border-[#e6e8ec] px-5 text-[16px] text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-teal-500"
              />
            </div>

            <div className="mb-5">
              <label className="mb-3 block text-[16px] font-medium text-slate-800">
                Тип мешка / оборудование
              </label>
              <input
                type="text"
                placeholder="Например: верхний мешок для стружкоотсоса"
                className="h-[58px] w-full rounded-2xl border border-[#e6e8ec] px-5 text-[16px] text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-teal-500"
              />
            </div>

            <div className="mb-6">
              <label className="mb-3 block text-[16px] font-medium text-slate-800">
                Комментарий
              </label>
              <textarea
                rows={4}
                placeholder="Размеры, количество, особые требования..."
                className="w-full resize-none rounded-2xl border border-[#e6e8ec] px-5 py-4 text-[16px] text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-teal-500"
              />
            </div>

            <a
              href="mailto:filterflow@mail.ru?subject=Заявка%20с%20сайта%20FilterFlow"
              className="flex h-[62px] w-full items-center justify-center rounded-2xl bg-[#22b8ad] px-6 text-[18px] font-semibold text-white transition hover:bg-[#1aa99f]"
            >
              Отправить заявку
            </a>

            <p className="mt-6 text-center text-[14px] leading-6 text-slate-400">
              Нажимая кнопку, вы соглашаетесь с{" "}
              <a
                href="/politika-konfidentsialnosti"
                className="font-medium text-teal-600 transition hover:text-teal-700"
              >
                политикой конфиденциальности
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ПОХОЖИЕ ПРОДУКТЫ */}
      <section className="bg-[#f8fafc] py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center md:mb-12">
            <div className="mb-3 inline-flex rounded-full bg-[#eafaf6] px-4 py-1 text-[13px] font-medium text-teal-600">
              Смотрите также
            </div>

            <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
              Похожие продукты
            </h2>

            <p className="mx-auto max-w-3xl text-[15px] leading-7 text-slate-500 md:text-[16px]">
              Ознакомьтесь с другими видами фильтровальных мешков и рукавов
              нашего производства
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {similarProducts.map((item) => (
              <Link key={item.title} href={item.link} className="group block">
                <article className="rounded-[22px] border border-[#e9eef3] bg-white px-6 py-6 shadow-[0_4px_14px_rgba(15,23,42,0.04)] transition duration-200 hover:border-[#9be9df] hover:shadow-[0_10px_24px_rgba(34,184,173,0.14)]">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#eefaf7] text-teal-500 transition group-hover:bg-[#22b8ad] group-hover:text-white">
                        {item.icon}
                      </div>

                      <div>
                        <h3 className="mb-2 text-[18px] font-semibold leading-[1.35] text-slate-900 transition group-hover:text-teal-600">
                          {item.title}
                        </h3>

                        <p className="max-w-[310px] text-[15px] leading-8 text-slate-500">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <svg
                      className="mt-1 h-5 w-5 shrink-0 text-slate-300 transition group-hover:translate-x-1 group-hover:text-teal-500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h14M13 6l6 6-6 6"
                      />
                    </svg>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ПОЛЕЗНЫЕ СТАТЬИ */}
      <section className="bg-[#f8fafc] py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 flex flex-col gap-6 md:mb-12 md:flex-row md:items-start md:justify-between">
            <div className="max-w-[760px]">
              <div className="mb-5 inline-flex rounded-full bg-[#fff1e8] px-4 py-1 text-[13px] font-semibold text-[#ff6b2c]">
                Читайте в блоге
              </div>

              <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 md:text-[54px] md:leading-[1.08]">
                Полезные статьи о фильтрации и аспирации
              </h2>
            </div>

            <Link
              href="/blog"
              className="inline-flex items-center gap-2 self-start text-[16px] font-semibold text-teal-600 transition hover:text-teal-700"
            >
              Все статьи
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14M13 6l6 6-6 6"
                />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {blogArticles.map((item) => (
              <Link key={item.title} href={item.link} className="group block">
                <article className="h-full rounded-[22px] border border-[#edf1f5] bg-white px-6 py-6 shadow-[0_4px_14px_rgba(15,23,42,0.04)] transition hover:-translate-y-[2px] hover:border-[#ffe1d3] hover:shadow-[0_10px_24px_rgba(255,107,44,0.10)]">
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl border border-[#ffe3d5] bg-white text-[#ff6b2c]">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 6.75h7.5M8.25 10.5h7.5M8.25 14.25h4.5"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 3.75h10.5A1.5 1.5 0 0118.75 5.25v13.5a1.5 1.5 0 01-1.5 1.5H6.75a1.5 1.5 0 01-1.5-1.5V5.25a1.5 1.5 0 011.5-1.5z"
                      />
                    </svg>
                  </div>

                  <h3 className="mb-3 text-[18px] font-semibold leading-[1.4] text-slate-900 transition group-hover:text-[#ff6b2c]">
                    {item.title}
                  </h3>

                  <p className="text-[15px] leading-8 text-slate-500">
                    {item.description}
                  </p>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f8fafc] py-14 md:py-16">
        <div className="mx-auto max-w-[1120px] px-6">
          <div className="mb-10 text-center md:mb-12">
            <div className="mb-3 inline-flex rounded-full bg-[#eafaf6] px-4 py-1 text-[13px] font-medium text-teal-600">
              Вопросы и ответы
            </div>

            <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 md:text-[56px] md:leading-[1.08]">
              Часто задаваемые вопросы
            </h2>

            <p className="mx-auto max-w-3xl text-[15px] leading-7 text-slate-500 md:text-[16px]">
              Ответы на популярные вопросы о мешках для аспирации и условиях
              заказа
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="faq-item overflow-hidden rounded-[22px] border border-[#edf1f5] bg-white transition-all duration-200"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-5 px-7 py-6">
                  <span className="faq-question text-[18px] font-semibold leading-[1.45] text-slate-900 transition">
                    {item.question}
                  </span>

                  <span className="faq-icon flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#e6eaee] bg-white text-teal-500 text-[24px] leading-none transition">
                    <span className="faq-plus">+</span>
                    <span className="faq-minus">−</span>
                  </span>
                </summary>

                <div className="px-7 pb-6 pt-0 text-[16px] leading-8 text-slate-500">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="mb-5 text-[16px] text-slate-400">
              Не нашли ответ на свой вопрос?
            </p>

            <a
              href="https://wa.me/79514992576"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-[62px] items-center justify-center gap-3 rounded-2xl bg-[#22b8ad] px-8 text-[18px] font-semibold text-white transition hover:bg-[#1aa99f]"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19.05 4.94A9.77 9.77 0 0012.09 2a9.86 9.86 0 00-8.5 14.86L2 22l5.29-1.52A9.87 9.87 0 0012.09 22c5.45 0 9.91-4.42 9.91-9.86a9.8 9.8 0 00-2.95-7.2zM12.09 20.3a8.16 8.16 0 01-4.16-1.14l-.3-.18-3.14.9.92-3.05-.2-.31a8.12 8.12 0 01-1.27-4.38 8.26 8.26 0 018.15-8.16 8.1 8.1 0 015.8 2.41 8.08 8.08 0 012.39 5.75 8.25 8.25 0 01-8.19 8.16zm4.47-6.13c-.24-.12-1.4-.69-1.62-.77-.22-.08-.38-.12-.54.12-.16.24-.61.77-.75.93-.14.16-.28.18-.52.06-.24-.12-1.02-.37-1.94-1.19-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.79-.2-.47-.4-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.18 1.11.15 1.53.09.47-.07 1.4-.57 1.6-1.12.2-.55.2-1.02.14-1.12-.06-.1-.22-.16-.46-.28z" />
              </svg>
              Задать вопрос в WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* SEO ТЕКСТ 1 */}
      <section className="bg-[#f8fafc] py-12 md:py-14">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-[28px] bg-[#f4f6f8] px-8 py-10 md:px-12 md:py-12">
            <h2 className="mb-7 text-[34px] font-bold leading-[1.12] tracking-[-0.02em] text-slate-900 md:text-[58px]">
              Мешки для аспирации — виды, материалы и применение
            </h2>

            <div className="space-y-6 text-[17px] leading-[1.75] text-slate-700 md:text-[18px]">
              <p>
                <strong className="font-semibold text-slate-900">
                  Мешки для аспирации
                </strong>{" "}
                — это фильтровальные элементы, которые устанавливаются в системы
                аспирации, стружкоотсосы и пылеулавливающие установки для
                очистки воздуха от пыли, опилок, стружки и других
                мелкодисперсных частиц. Они делятся на{" "}
                <strong className="font-semibold text-slate-900">
                  верхние (фильтровальные) и нижние (накопительные)
                </strong>{" "}
                в зависимости от функции в системе.
              </p>

              <p>
                Верхний мешок задерживает мелкую пыль и возвращает очищенный
                воздух в помещение, нижний — собирает крупную стружку и опилки
                для последующей утилизации. Оба элемента необходимы для
                полноценной работы аспирационной системы.
              </p>

              <p>Основные материалы для изготовления мешков для аспирации:</p>

              <div className="space-y-4">
                {seoMaterials.map((item) => (
                  <div key={item} className="flex items-start gap-4">
                    <span className="mt-[6px] flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#ff6b2c] text-white">
                      <svg
                        className="h-3.5 w-3.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <p className="text-[17px] leading-[1.75] text-slate-700 md:text-[18px]">
                      <strong className="font-semibold text-slate-900">
                        {item.split(" — ")[0]}
                      </strong>
                      {" — "}
                      {item.split(" — ").slice(1).join(" — ")}
                    </p>
                  </div>
                ))}
              </div>

              <p>
                Мы производим{" "}
                <strong className="font-semibold text-slate-900">
                  мешки для аспирации по индивидуальным размерам
                </strong>{" "}
                под любое оборудование. Минимальный заказ — от 1 штуки. Срок
                изготовления — от 3 рабочих дней. Доставка по всей России.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO ТЕКСТ 2 */}
      <section className="bg-[#f8fafc] py-6 md:py-8">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-[28px] bg-[#f4f6f8] px-8 py-10 md:px-12 md:py-12">
            <h2 className="mb-7 text-[34px] font-bold leading-[1.12] tracking-[-0.02em] text-slate-900 md:text-[58px]">
              Как подобрать мешок для аспирации под своё оборудование
            </h2>

            <div className="space-y-6 text-[17px] leading-[1.75] text-slate-700 md:text-[18px]">
              <p>
                Для правильного подбора мешка для аспирации необходимо знать
                модель оборудования или точные размеры: диаметр патрубка, высоту
                мешка и тип крепления. Если размеры неизвестны — пришлите
                фотографию или название станка, и наши специалисты подберут
                подходящий вариант.
              </p>

              <div className="space-y-4">
                {seoSelectionPoints.map((item) => (
                  <div key={item} className="flex items-start gap-4">
                    <span className="mt-[6px] flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#ff6b2c] text-white">
                      <svg
                        className="h-3.5 w-3.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <p className="text-[17px] leading-[1.75] text-slate-700 md:text-[18px]">
                      <strong className="font-semibold text-slate-900">
                        {item.split(" — ")[0]}
                      </strong>
                      {" — "}
                      {item.split(" — ").slice(1).join(" — ")}
                    </p>
                  </div>
                ))}
              </div>

              <p>
                Для деревообрабатывающих станков, фрезеров, рейсмусов и
                циркулярных пил чаще всего используются полиэстеровые мешки. Для
                металлообработки и химических производств —
                полипропиленовые или антистатические.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO ТЕКСТ 3 */}
      <section className="bg-[#f8fafc] py-6 pb-16 md:py-8 md:pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="px-0 py-2">
            <h2 className="mb-7 text-[34px] font-bold leading-[1.12] tracking-[-0.02em] text-slate-900 md:text-[58px]">
              Купить мешки для аспирации от производителя
            </h2>

            <div className="max-w-[1320px] space-y-6 text-[17px] leading-[1.75] text-slate-700 md:text-[18px]">
              <p>
                FilterFlow — производитель{" "}
                <strong className="font-semibold text-slate-900">
                  мешков для аспирации
                </strong>{" "}
                с собственным производством. Мы изготавливаем{" "}
                <strong className="font-semibold text-slate-900">
                  верхние и нижние мешки для стружкоотсосов, тканевые мешки для
                  аспирации, мешки для УВП и циклонов,
                </strong>{" "}
                а также{" "}
                <strong className="font-semibold text-slate-900">
                  нестандартные фильтровальные мешки по чертежам
                </strong>.
              </p>

              <p>
                Доставляем заказы по всей России: Москва, Санкт-Петербург,
                Екатеринбург, Новосибирск, Казань, Краснодар, Ростов-на-Дону и
                другие города. Работаем с юридическими и физическими лицами.
                Предоставляем все необходимые документы.
              </p>
            </div>

            <div className="mt-10 flex justify-center md:mt-12">
              <a
                href="mailto:filterflow@mail.ru?subject=Заказать%20мешки%20для%20аспирации"
                className="inline-flex h-[68px] items-center justify-center gap-3 rounded-full bg-[#ff6b2c] px-10 text-[20px] font-semibold text-white transition hover:bg-[#f15e20] md:px-14"
              >
                Заказать мешки для аспирации
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14M13 6l6 6-6 6"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}