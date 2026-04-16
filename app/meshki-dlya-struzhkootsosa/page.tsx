import type { Metadata } from "next";
import Link from "next/link";
import SeeAlsoLinks from "../components/SeeAlsoLinks";
import { pageMetadata } from "@/lib/seo-metadata";

export const metadata: Metadata = pageMetadata({
  title:
    "Мешки для стружкоотсоса — фильтр, накопитель, мешки для опилок и стружки",
  description:
    "Мешок для стружкоотсоса и мешок-накопитель для деревообработки: тканевые мешки, верхний и нижний мешок, узлы УВП и аспирации опилок. Изготовление по размерам, доставка по России. FilterFlow.",
  path: "/meshki-dlya-struzhkootsosa",
  openGraphTitle: "Мешки для стружкоотсоса | FilterFlow",
});

const productLinks = [
  { href: "/meshki-dlya-aspiracii", label: "Мешки для аспирации" },
  { href: "/filtracionnye-rukava", label: "Фильтрационные рукава" },
  { href: "/meshki-dlya-struzhkootsosa", label: "Мешки для стружкоотсоса" },
  { href: "/meshki-dlya-ciklonov-i-uvp", label: "Мешки для циклонов и УВП" },
  { href: "/bystrosemnye-homyty", label: "Быстросъёмные хомуты" },
  {
    href: "/nestandartnye-meshki-dlya-filtracii",
    label: "Нестандартные мешки для фильтрации",
  },
];

const articleLinks = [
  {
    href: "/blog/kak-vybrat-meshok-aspiracii",
    label: "Как выбрать мешок для аспирации",
  },
  {
    href: "/blog/kak-rabotaet-aspiraciya",
    label: "Как работает аспирация",
  },
  {
    href: "/blog/kogda-menyat-filtr-meshok",
    label: "Когда менять фильтр-мешок",
  },
  {
    href: "/blog/tipy-filtruyushchikh-meshkov",
    label: "Типы фильтровальных мешков",
  },
];

const typeCards = [
  {
    title: "Мешки для опилок",
    description:
      "Специализированные мешки для сбора мелких опилок с высокой степенью фильтрации.",
    image: "/images/catalog/meshki-struzhkootsosa.webp",
    link: "/meshki-dlya-opilok",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-[18px] w-[18px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 3 4 7l8 4 8-4-8-4Z" />
        <path d="M4 12l8 4 8-4" />
        <path d="M4 17l8 4 8-4" />
      </svg>
    ),
  },
  {
    title: "Для деревообрабатывающих станков",
    description:
      "Универсальные мешки для фрезерных, токарных и шлифовальных станков.",
    image: "/images/catalog/dust_collector_single.webp",
    link: "/meshki-dlya-aspiracii",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-[18px] w-[18px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7 7h10" />
        <path d="M7 17h10" />
        <path d="M10 7c0 5-3 5-3 10" />
        <path d="M14 7c0 5 3 5 3 10" />
      </svg>
    ),
  },
  {
    title: "Нижние мешки для сбора",
    description:
      "Прочные мешки для сбора крупной стружки и отходов деревообработки.",
    image: "/images/catalog/nizhnie-meshki dlya aspiracii.webp",
    link: "/nizhnie-meshki",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-[18px] w-[18px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="8" />
        <path d="M12 9v6" />
        <path d="M9 12h6" />
      </svg>
    ),
  },
  {
    title: "Верхние фильтровальные мешки",
    description:
      "Фильтруют мелкую древесную пыль, обеспечивая чистоту воздуха в цеху.",
    image: "/images/catalog/verhnie-meshki.webp",
    link: "/verhnie-meshki",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-[18px] w-[18px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v8" />
        <path d="M9.5 10.5 12 8l2.5 2.5" />
      </svg>
    ),
  },
];

const advantageCards = [
  {
    title: "Высокая прочность",
    description:
      "Используем износостойкие материалы, выдерживающие интенсивную работу деревообрабатывающего оборудования.",
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
        <path d="M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4Z" />
        <path d="m9.5 12 1.7 1.7 3.3-3.3" />
      </svg>
    ),
  },
  {
    title: "Эффективная фильтрация",
    description:
      "Задерживают мелкую древесную пыль, обеспечивая чистоту воздуха в производственном помещении.",
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
        <path d="M4 7h16" />
        <path d="M7 12h10" />
        <path d="M10 17h4" />
      </svg>
    ),
  },
  {
    title: "Точные размеры",
    description:
      "Изготавливаем мешки под конкретные модели стружкоотсосов и станков — идеальная посадка.",
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
        <path d="m3 21 7-7" />
        <path d="m14 7 7-7" />
        <path d="m14 3 7 7" />
        <path d="M5 19 3 21l2-6 6 2-2 2" />
      </svg>
    ),
  },
  {
    title: "Долгий срок службы",
    description:
      "Качественные швы и прочная ткань обеспечивают длительную эксплуатацию без потери свойств.",
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
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
  },
  {
    title: "Простая установка",
    description:
      "Мешки легко устанавливаются и снимаются, что упрощает обслуживание оборудования.",
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
        <path d="m14 7 3-3" />
        <path d="M7 14 4 17" />
        <path d="M17 17 7 7" />
        <path d="m8 21-4-4" />
        <path d="m20 8-4-4" />
      </svg>
    ),
  },
  {
    title: "Выгодные цены",
    description:
      "Прямые поставки с производства без наценок посредников — экономия до 30%.",
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
        <path d="M20 12V7l-8-4-8 4v5c0 5 4 8 8 9 4-1 8-4 8-9Z" />
        <path d="M9 12h6" />
      </svg>
    ),
  },
];

const applicationCards = [
  {
    title: "Столярные мастерские",
    description:
      "Сбор опилок и стружки при работе с ручным и станочным оборудованием.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-[18px] w-[18px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 7h10" />
        <path d="M9 7v10" />
        <path d="M7 17h4" />
        <path d="M14 7h6" />
      </svg>
    ),
  },
  {
    title: "Мебельные производства",
    description:
      "Очистка воздуха от древесной пыли на крупных мебельных фабриках.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-[18px] w-[18px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 18h16" />
        <path d="M7 18V8h5v10" />
        <path d="M12 12h5v6" />
        <path d="M7 12h5" />
      </svg>
    ),
  },
  {
    title: "Деревообрабатывающие цеха",
    description:
      "Промышленная аспирация для фрезерных, токарных и шлифовальных станков.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-[18px] w-[18px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7 21h10" />
        <path d="M12 3l7 4v6c0 4.5-3 6.8-7 8-4-1.2-7-3.5-7-8V7l7-4Z" />
        <path d="m9.5 12 1.7 1.7 3.3-3.3" />
      </svg>
    ),
  },
  {
    title: "Производство дверей и окон",
    description:
      "Удаление стружки при обработке деревянных заготовок и профилей.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-[18px] w-[18px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="4" y="6" width="16" height="12" rx="2" />
        <path d="M9 6v12" />
        <path d="M15 6v12" />
      </svg>
    ),
  },
];

const materials = [
  {
    material: "Полиэстер",
    filtration: "99,5%",
    temperature: "До 130°C",
    use: "Стандартные стружкоотсосы",
  },
  {
    material: "Полипропилен",
    filtration: "99,2%",
    temperature: "До 90°C",
    use: "Бытовые станки",
  },
  {
    material: "Смесовая ткань",
    filtration: "99,7%",
    temperature: "До 150°C",
    use: "Промышленные установки",
  },
  {
    material: "Нетканый материал",
    filtration: "99,9%",
    temperature: "До 120°C",
    use: "Высокая степень очистки",
  },
];

const similarProducts = [
  {
    title: "Мешки для опилок",
    description: "Специализированные мешки для сбора мелких опилок",
    href: "/meshki-dlya-opilok",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-[19px] w-[19px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 3 4 7l8 4 8-4-8-4Z" />
        <path d="M4 12l8 4 8-4" />
        <path d="M4 17l8 4 8-4" />
      </svg>
    ),
  },
  {
    title: "Верхние мешки",
    description: "Фильтровальные мешки для очистки воздуха",
    href: "/verhnie-meshki",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-[19px] w-[19px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v8" />
        <path d="M9.5 10.5 12 8l2.5 2.5" />
      </svg>
    ),
  },
  {
    title: "Нижние мешки",
    description: "Мешки для сбора крупной стружки",
    href: "/nizhnie-meshki",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-[19px] w-[19px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="8" />
        <path d="M12 9v6" />
        <path d="M9 12h6" />
      </svg>
    ),
  },
  {
    title: "Фильтровальные рукава",
    description: "Промышленные рукава для систем аспирации",
    href: "/filtracionnye-rukava",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-[19px] w-[19px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 4h8" />
        <path d="M9 4v6l3 3 3-3V4" />
        <path d="M10 13v7" />
        <path d="M14 13v7" />
      </svg>
    ),
  },
];

const usefulArticles = [
  {
    title: "Как выбрать мешок для аспирации",
    description:
      "Советы по подбору фильтровального мешка для стружкоотсоса и деревообрабатывающих станков",
    href: "/blog/kak-vybrat-meshok-aspiracii",
  },
  {
    title: "Как работает система аспирации",
    description: "Принцип работы аспирационных систем в деревообработке",
    href: "/blog/kak-rabotaet-aspiraciya",
  },
  {
    title: "Когда менять фильтровальный мешок",
    description:
      "Признаки износа мешка для стружкоотсоса и сроки замены",
    href: "/blog/kogda-menyat-filtr-meshok",
  },
  {
    title: "Типы фильтровальных мешков",
    description:
      "Обзор видов мешков: верхние, нижние, тканевые, для циклонов",
    href: "/blog/tipy-filtruyushchikh-meshkov",
  },
];

const faqItems = [
  {
    question: "Как часто нужно менять мешок для стружкоотсоса?",
    answer:
      "Частота замены зависит от интенсивности работы и типа материала. В среднем, при ежедневной работе мешок служит 6-12 месяцев. Признаки необходимости замены: снижение мощности всасывания, видимые повреждения ткани, запылённость воздуха в помещении.",
  },
  {
    question: "Можно ли стирать фильтровальные мешки?",
    answer:
      "Да, большинство мешков можно стирать или продувать сжатым воздухом для удаления накопившейся пыли. Это продлевает срок службы и восстанавливает эффективность фильтрации. Рекомендуем чистку каждые 2-3 месяца при активном использовании.",
  },
  {
    question: "Какой размер мешка мне нужен?",
    answer:
      "Размер зависит от модели вашего стружкоотсоса. Укажите марку и модель оборудования — мы подберём точный размер. Также можем изготовить мешок по вашим индивидуальным размерам и чертежам.",
  },
  {
    question: "Какой материал лучше для деревообработки?",
    answer:
      "Для деревообработки оптимален полиэстер — он обеспечивает высокую степень фильтрации (99,5%), выдерживает температуру до 130°C и имеет долгий срок службы. Для промышленных установок рекомендуем смесовую ткань.",
  },
  {
    question: "Как быстро вы изготавливаете мешки?",
    answer:
      "Стандартные размеры отправляем в течение 1-2 рабочих дней. Изготовление мешков по индивидуальным размерам занимает 3-5 рабочих дней. Доставка по России — 2-7 дней в зависимости от региона.",
  },
];

export default function Page() {
  return (
    <main id="top" className="min-h-screen bg-[#f8fafc] text-slate-900">
      <style>{`
        details.ff-faq > summary::-webkit-details-marker {
          display: none;
        }

        details.ff-faq summary {
          list-style: none;
        }

        details.ff-faq[open] {
          background: #eefaf8;
          border-color: #95e7df;
          box-shadow: 0 12px 28px rgba(34, 189, 176, 0.10);
        }

        details.ff-faq[open] .ff-faq-title {
          color: #10233f;
        }

        details.ff-faq[open] .ff-faq-icon {
          transform: rotate(180deg);
          color: #22bdb0;
        }
      `}</style>

      <div className="sticky top-0 z-50">
        <div className="border-b border-[#d8dde3] bg-[#c9c9c9]">
          <div className="mx-auto flex h-10 max-w-[1440px] items-center justify-end gap-6 px-6 text-[13px] text-white">
            <Link
              href="/kontakty"
              className="transition-colors duration-200 hover:text-[#28c4b7]"
            >
              filterflow@mail.ru
            </Link>

            <a
              href="tel:+79514992576"
              className="transition-colors duration-200 hover:text-[#28c4b7]"
            >
              +7 (951) 499-25-76
            </a>

            <a
              href="https://wa.me/79514992576"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 hover:text-[#28c4b7]"
            >
              WhatsApp
            </a>

            <a
              href="https://t.me/Violetta0502"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 hover:text-[#28c4b7]"
            >
              Telegram
            </a>

            <a
              href="https://max.ru/u/f9LHodD0cOLehfNZxc-dfvXrRQQ-ApKrfczCjbhEa_va3lGdtndd7SgNP8U"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#a95cff] transition-colors duration-200 hover:text-[#28c4b7]"
            >
              MAX
            </a>
          </div>
        </div>

        <header className="border-b border-[#e9edf3] bg-white shadow-[0_2px_10px_rgba(15,23,42,0.03)]">
          <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4">
            <Link href="/" className="flex items-center gap-4">
              <img
                src="/favicon.ico"
                alt="FilterFlow"
                className="h-[58px] w-[58px] rounded-[14px] object-contain"
              />
              <span className="text-[26px] font-bold tracking-[-0.02em] text-[#11233f]">
                FilterFlow
              </span>
            </Link>

            <nav className="hidden items-center gap-12 text-[16px] font-medium text-[#334155] lg:flex">
              <Link
                href="/"
                className="transition-colors duration-200 hover:text-[#28c4b7]"
              >
                Главная
              </Link>

              <div className="group relative">
                <button
                  type="button"
                  className="flex items-center gap-2 text-[#334155] transition-colors duration-200 hover:text-[#28c4b7] group-hover:text-[#28c4b7]"
                >
                  <span>Продукция</span>
                  <svg
                    className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.168l3.71-3.938a.75.75 0 1 1 1.08 1.04l-4.25 4.51a.75.75 0 0 1-1.08 0l-4.25-4.51a.75.75 0 0 1 .02-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                <div className="absolute left-1/2 top-full z-30 w-[320px] -translate-x-1/2 pt-4 opacity-0 invisible pointer-events-none transition-all duration-200 group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto">
                  <div className="rounded-[22px] bg-white p-4 shadow-[0_20px_60px_rgba(0,0,0,0.14)]">
                    <div className="space-y-1.5">
                      {productLinks.map((item) => {
                        const isActive =
                          item.href === "/meshki-dlya-struzhkootsosa";

                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-start gap-3 rounded-[14px] px-4 py-3 text-[15px] transition-all duration-200 ${
                              isActive
                                ? "bg-[#eefaf8] text-[#28c4b7]"
                                : "text-[#475569] hover:bg-[#eefaf8] hover:text-[#28c4b7]"
                            }`}
                          >
                            <svg
                              viewBox="0 0 20 20"
                              className="mt-[2px] h-[18px] w-[18px] shrink-0 text-[#28c4b7]"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <circle cx="10" cy="10" r="3" />
                            </svg>

                            <span className="leading-[1.4]">{item.label}</span>
                          </Link>
                        );
                      })}
                    </div>

                    <Link
                      href="/#catalog"
                      className="mt-4 flex h-[50px] items-center justify-center rounded-[14px] bg-[#28c4b7] text-[16px] font-semibold text-white transition-colors duration-200 hover:bg-[#20b4a8]"
                    >
                      Весь каталог
                      <span className="ml-2 text-[18px]">→</span>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="group relative">
                <button
                  type="button"
                  className="flex items-center gap-2 text-[#334155] transition-colors duration-200 hover:text-[#28c4b7] group-hover:text-[#28c4b7]"
                >
                  <span>Статьи</span>
                  <svg
                    className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.168l3.71-3.938a.75.75 0 1 1 1.08 1.04l-4.25 4.51a.75.75 0 0 1-1.08 0l-4.25-4.51a.75.75 0 0 1 .02-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                <div className="absolute left-1/2 top-full z-30 w-[340px] -translate-x-1/2 pt-4 opacity-0 invisible pointer-events-none transition-all duration-200 group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto">
                  <div className="rounded-[22px] bg-white p-4 shadow-[0_20px_60px_rgba(0,0,0,0.14)]">
                    <div className="space-y-1.5">
                      {articleLinks.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex items-start gap-3 rounded-[14px] px-4 py-3 text-[15px] text-[#475569] transition-all duration-200 hover:bg-[#eefaf8] hover:text-[#28c4b7]"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            className="mt-[1px] h-[18px] w-[18px] shrink-0 text-[#28c4b7]"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <rect x="5" y="4" width="14" height="16" rx="2" />
                            <path d="M8 8h8M8 12h8M8 16h5" />
                          </svg>

                          <span className="leading-[1.4]">{item.label}</span>
                        </Link>
                      ))}
                    </div>

                    <Link
                      href="/blog"
                      className="mt-4 flex h-[50px] items-center justify-center rounded-[14px] bg-[#28c4b7] text-[16px] font-semibold text-white transition-colors duration-200 hover:bg-[#20b4a8]"
                    >
                      Все статьи блога
                      <span className="ml-2 text-[18px]">→</span>
                    </Link>
                  </div>
                </div>
              </div>

              <Link
                href="/portfolio"
                className="transition-colors duration-200 hover:text-[#28c4b7]"
              >
                Портфолио
              </Link>

              <Link
                href="/o-kompanii"
                className="transition-colors duration-200 hover:text-[#28c4b7]"
              >
                О компании
              </Link>

              <Link
                href="/kontakty"
                className="transition-colors duration-200 hover:text-[#28c4b7]"
              >
                Контакты
              </Link>
            </nav>

            <a
              href="https://wa.me/79514992576"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden h-[48px] items-center justify-center rounded-[14px] bg-[#28c4b7] px-8 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-[#20b4a8] lg:flex"
            >
              Получить расчёт
            </a>
          </div>

          <div className="mx-auto max-w-[1440px] px-6 pb-4">
            <div className="flex items-center gap-3 text-[14px]">
              <Link
                href="/"
                className="font-medium text-[#28c4b7] transition-colors duration-200 hover:text-[#1fa99e]"
              >
                Главная
              </Link>
              <span className="text-[#a0aec0]">›</span>
              <span className="text-[#475569]">Мешки для стружкоотсоса</span>
            </div>
          </div>
        </header>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="relative min-h-[640px] bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(7,18,35,0.72) 0%, rgba(9,24,44,0.58) 32%, rgba(10,29,48,0.42) 55%, rgba(10,29,48,0.18) 100%), linear-gradient(180deg, rgba(4,12,24,0.34) 0%, rgba(4,12,24,0.16) 28%, rgba(4,12,24,0.18) 72%, rgba(4,12,24,0.42) 100%), url('/images/hero.png')",
          }}
        >
          <div className="mx-auto flex min-h-[640px] max-w-[1440px] items-start justify-center px-6 pb-14 pt-10 md:pt-14">
            <div className="flex w-full max-w-[980px] flex-col items-center text-center text-white">
              <div className="mb-5 inline-flex rounded-full bg-[#28c4b7]/35 px-6 py-2.5 text-[13px] font-semibold text-[#d8fffb] backdrop-blur-sm">
                Для деревообработки
              </div>

              <h1 className="mb-5 max-w-[920px] text-[34px] font-bold leading-[1.12] tracking-[-0.03em] sm:text-[42px] md:text-[52px] md:leading-[1.08]">
                Мешки для стружкоотсоса
                <br className="max-md:hidden" />
                <span className="max-md:block">
                  мешок-фильтр и накопитель
                </span>
              </h1>

              <p className="max-w-[760px] text-[17px] leading-[1.7] text-white/92 md:text-[18px]">
                Мешок-фильтр и мешок для сбора стружки на стружкоотсосе — для
                деревообработки и мебельного производства: тканевые мешки под
                патрубок, сбор опилок и узлы в аспирации и на УВП. Пошив под размер
                патрубка, заказ от одной штуки.
              </p>

              <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="https://wa.me/79514992576"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-[58px] items-center justify-center gap-3 rounded-[16px] bg-[#28c4b7] px-8 text-[16px] font-semibold text-white transition-colors duration-200 hover:bg-[#20b4a8]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    className="h-[18px] w-[18px] shrink-0 fill-white"
                    aria-hidden="true"
                  >
                    <path d="M19.11 17.21c-.29-.14-1.69-.83-1.95-.92-.26-.1-.45-.14-.64.14-.19.29-.74.92-.9 1.11-.17.19-.33.22-.62.07-.29-.14-1.2-.44-2.29-1.41-.85-.76-1.42-1.69-1.59-1.98-.17-.29-.02-.45.12-.59.13-.13.29-.33.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.55-.88-2.12-.23-.55-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.36-.26.29-.98.95-.98 2.31 0 1.36 1 2.67 1.14 2.86.14.19 1.97 3 4.78 4.2.67.29 1.19.46 1.6.59.67.21 1.29.18 1.77.11.54-.08 1.69-.69 1.93-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.33Z" />
                    <path d="M16.01 3.2c-7.05 0-12.77 5.72-12.77 12.77 0 2.25.59 4.45 1.72 6.39L3.2 28.8l6.61-1.73a12.7 12.7 0 0 0 6.19 1.59h.01c7.05 0 12.78-5.72 12.78-12.77S23.06 3.2 16.01 3.2Zm0 23.31h-.01a10.5 10.5 0 0 1-5.35-1.47l-.38-.22-3.92 1.03 1.05-3.82-.25-.39a10.48 10.48 0 0 1-1.61-5.59c0-5.79 4.71-10.5 10.5-10.5 2.8 0 5.44 1.09 7.42 3.08a10.43 10.43 0 0 1 3.08 7.42c0 5.79-4.72 10.5-10.51 10.5Z" />
                  </svg>
                  Получить расчёт
                </a>

                <Link
                  href="/kontakty"
                  className="inline-flex h-[58px] items-center justify-center gap-3 rounded-[16px] border border-white/25 bg-white/10 px-8 text-[16px] font-semibold text-white backdrop-blur-sm transition-colors duration-200 hover:bg-white/18"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-[18px] w-[18px] shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6.27 6.27l1.27-1.28a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92z" />
                  </svg>
                  Связаться с нами
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[14px] text-white/92 md:text-[15px]">
                <div className="flex items-center gap-2">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-[16px] w-[16px] text-[#28c4b7]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="6" width="18" height="12" rx="2" />
                    <path d="M7 10h10" />
                    <path d="M7 14h5" />
                  </svg>
                  <span>Для всех типов станков</span>
                </div>

                <div className="flex items-center gap-2">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-[16px] w-[16px] text-[#28c4b7]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4Z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                  <span>Прочные материалы</span>
                </div>

                <div className="flex items-center gap-2">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-[16px] w-[16px] text-[#28c4b7]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="1" y="7" width="13" height="9" rx="2" />
                    <path d="M14 10h4l3 3v3h-7z" />
                    <circle cx="7" cy="18" r="1.5" />
                    <circle cx="18" cy="18" r="1.5" />
                  </svg>
                  <span>Доставка по России</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Типы мешков */}
      <section className="bg-[#f8fafc] py-16 md:py-18">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="mb-10 flex flex-col items-center text-center">
            <div className="mb-4 inline-flex rounded-full bg-[#e9f9f7] px-5 py-2 text-[13px] font-semibold text-[#28c4b7]">
              Ассортимент
            </div>

            <h2 className="text-[28px] font-bold leading-[1.12] tracking-[-0.02em] text-[#10233f] md:text-[40px]">
              Типы мешков для стружкоотсоса
            </h2>

            <p className="mt-4 max-w-[720px] text-[15px] leading-[1.65] text-[#64748b] md:text-[16px]">
              Верхний и нижний мешок, тканевые мешки для стружкоотсоса, узлы для
              УВП — подберём под схему аспирации и модель бункера
            </p>
          </div>

          <div className="grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-4">
            {typeCards.map((card) => (
              <Link key={card.title} href={card.link} className="group block h-full">
                <article className="flex h-full flex-col overflow-hidden rounded-[24px] border border-[#e7edf4] bg-white shadow-[0_8px_24px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(15,23,42,0.08)]">
                  <div className="flex h-[210px] items-center justify-center overflow-hidden rounded-t-[24px] bg-[#f4f5f7] p-6">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-[12px] bg-[#eefaf8] text-[#28c4b7]">
                      {card.icon}
                    </div>

                    <h3 className="min-h-[74px] text-[18px] font-bold leading-[1.35] text-[#10233f] transition-colors duration-200 group-hover:text-[#28c4b7]">
                      {card.title}
                    </h3>

                    <p className="mt-4 flex-1 text-[14px] leading-[1.75] text-[#64748b]">
                      {card.description}
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-[14px] font-semibold text-[#28c4b7]">
                      <span>Подробнее</span>
                      <span>→</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="bg-[#f8fafc] pb-18 pt-4 md:pb-20">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="mb-10 flex flex-col items-center text-center">
            <div className="mb-4 inline-flex rounded-full bg-[#e9f9f7] px-5 py-2 text-[13px] font-semibold text-[#28c4b7]">
              Почему выбирают нас
            </div>

            <h2 className="text-[28px] font-bold leading-[1.12] tracking-[-0.02em] text-[#10233f] md:text-[40px]">
              Преимущества наших мешков
            </h2>

            <p className="mt-4 max-w-[700px] text-[15px] leading-[1.65] text-[#64748b] md:text-[16px]">
              Надёжность и качество, проверенные на тысячах деревообрабатывающих
              производств
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {advantageCards.map((card) => (
              <article
                key={card.title}
                className="rounded-[24px] border border-[#95e7df] bg-white px-6 py-6 shadow-[0_8px_24px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-[3px] hover:border-[#59d9ce] hover:shadow-[0_16px_30px_rgba(34,189,176,0.12)]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-[14px] bg-[#f0fbf9] text-[#22bdb0]">
                  {card.icon}
                </div>

                <h3 className="text-[17px] font-bold leading-[1.35] text-[#10233f]">
                  {card.title}
                </h3>

                <p className="mt-4 text-[14px] leading-[1.75] text-[#64748b]">
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Сферы применения */}
      <section className="bg-[#f8fafc] pb-20 pt-2 md:pb-24">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="mb-10 flex flex-col items-center text-center">
            <div className="mb-4 inline-flex rounded-full bg-[#e9f9f7] px-5 py-2 text-[13px] font-semibold text-[#28c4b7]">
              Применение
            </div>

            <h2 className="text-[28px] font-bold leading-[1.12] tracking-[-0.02em] text-[#10233f] md:text-[40px]">
              Мешки для деревообработки: сферы применения
            </h2>

            <p className="mt-4 max-w-[760px] text-[15px] leading-[1.65] text-[#64748b] md:text-[16px]">
              От мастерской до фабрики — мешки для сбора стружки и фильтрации в
              аспирационных системах
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {applicationCards.map((card) => (
              <article
                key={card.title}
                className="rounded-[24px] border border-[#95e7df] bg-white px-6 py-6 shadow-[0_8px_24px_rgba(15,23,42,0.04)]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-[14px] bg-[#f0fbf9] text-[#22bdb0]">
                  {card.icon}
                </div>

                <h3 className="text-[17px] font-bold leading-[1.35] text-[#10233f]">
                  {card.title}
                </h3>

                <p className="mt-4 text-[14px] leading-[1.75] text-[#64748b]">
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SEO: деревообработка, мебель, аспирация */}
      <section className="bg-[#f8fafc] pb-14 pt-2 md:pb-16">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="rounded-[28px] border border-[#c5ebe4] bg-white px-8 py-9 shadow-[0_8px_28px_rgba(15,23,42,0.05)] md:px-11 md:py-11">
            <h2 className="max-w-[960px] text-[26px] font-bold leading-[1.12] tracking-[-0.02em] text-[#10233f] md:text-[34px]">
              Деревообработка, мебель и аспирация: как работает мешок для
              стружкоотсоса
            </h2>

            <div className="mt-9 grid gap-8 lg:grid-cols-2">
              <div>
                <h3 className="mb-3 text-[17px] font-bold leading-snug text-[#10233f] md:text-[18px]">
                  Деревообработка и мебельное производство
                </h3>
                <p className="text-[15px] leading-[1.75] text-[#64748b] md:text-[16px]">
                  На станках и кромочниках мешки для деревообработки удерживают
                  стружку и пыль: верхний мешок очищает воздух, нижний — крупную
                  фракцию. В мебельном цехе такие же фильтры снижают запылённость
                  линий раскроя и сборки.
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-[17px] font-bold leading-snug text-[#10233f] md:text-[18px]">
                  Удаление стружки и опилок
                </h3>
                <p className="text-[15px] leading-[1.75] text-[#64748b] md:text-[16px]">
                  Мешок для опилок и мешок для сбора стружки чаще всего стоят в
                  нижнем бункере: накопитель заполняется крупной фракцией, пока
                  верхний фильтрующий мешок задерживает мелочь. Для чисто
                  опилочных задач смотрите также{" "}
                  <Link
                    href="/meshki-dlya-opilok"
                    className="font-semibold text-[#22bdb0] underline decoration-[#22bdb0]/35 underline-offset-2 hover:text-[#169d92]"
                  >
                    мешки для опилок
                  </Link>
                  .
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-[17px] font-bold leading-snug text-[#10233f] md:text-[18px]">
                  Аспирационные системы и УВП
                </h3>
                <p className="text-[15px] leading-[1.75] text-[#64748b] md:text-[16px]">
                  На линиях УВП и в общей аспирации мешки для сбора опилок
                  подключают к патрубкам пылеудаления: важны диаметр горловины и
                  устойчивость швов к вибрации. Тканевые мешки для стружкоотсоса
                  подбирают по плотности и условиям среды.
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-[17px] font-bold leading-snug text-[#10233f] md:text-[18px]">
                  Верхний и нижний мешок
                </h3>
                <p className="text-[15px] leading-[1.75] text-[#64748b] md:text-[16px]">
                  Верхний мешок — фильтровальный элемент, нижний — накопитель.
                  Подробнее — в разделах{" "}
                  <Link
                    href="/verhnie-meshki"
                    className="font-semibold text-[#22bdb0] underline decoration-[#22bdb0]/35 underline-offset-2 hover:text-[#169d92]"
                  >
                    верхние мешки
                  </Link>{" "}
                  и{" "}
                  <Link
                    href="/nizhnie-meshki"
                    className="font-semibold text-[#22bdb0] underline decoration-[#22bdb0]/35 underline-offset-2 hover:text-[#169d92]"
                  >
                    нижние мешки
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Купить / изготовление по размерам */}
      <section className="bg-[#f8fafc] pb-14 md:pb-16">
        <div className="mx-auto max-w-[1280px] px-6">
          <h2 className="mx-auto mb-8 max-w-[900px] text-center text-[26px] font-bold leading-[1.12] tracking-[-0.02em] text-[#10233f] md:text-[32px]">
            Купить мешки для стружкоотсоса и заказать по размерам
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[24px] bg-[#28c4b7] px-8 py-8 text-white shadow-[0_12px_32px_rgba(40,196,183,0.22)] md:px-9 md:py-9">
              <h3 className="text-[20px] font-bold leading-tight md:text-[22px]">
                Купить и заказать
              </h3>
              <p className="mt-4 text-[15px] leading-[1.7] text-white/95 md:text-[16px]">
                Заказать мешок для стружкоотсоса можно через WhatsApp, почту или
                заявку внизу страницы: уточним диаметр, тип крепления и партию.
              </p>
              <a
                href="https://wa.me/79514992576"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex h-[50px] items-center justify-center rounded-[14px] bg-white px-6 text-[15px] font-semibold text-[#128f88] transition hover:bg-[#f0fdfa]"
              >
                Написать в WhatsApp
              </a>
            </div>
            <div className="rounded-[24px] border border-[#d7dee7] bg-white px-8 py-8 shadow-[0_8px_24px_rgba(15,23,42,0.05)] md:px-9 md:py-9">
              <h3 className="text-[20px] font-bold leading-tight text-[#10233f] md:text-[22px]">
                Изготовление по размерам
              </h3>
              <p className="mt-4 text-[15px] leading-[1.7] text-[#475569] md:text-[16px]">
                Нестандартный мешок для стружкоотсоса шьём по чертежу или фото
                патрубка — от одной штуки, срок согласуем по загрузке производства.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Фильтровальные материалы */}
      <section className="bg-[#f8fafc] pb-12 pt-2 md:pb-14">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="mb-10 flex flex-col items-center text-center">
            <div className="mb-4 inline-flex rounded-full bg-[#e9f9f7] px-5 py-2 text-[13px] font-semibold text-[#28c4b7]">
              Материалы
            </div>

            <h2 className="text-[28px] font-bold leading-[1.12] tracking-[-0.02em] text-[#10233f] md:text-[40px]">
              Фильтровальные материалы
            </h2>

            <p className="mt-4 max-w-[720px] text-[15px] leading-[1.65] text-[#64748b] md:text-[16px]">
              Подбираем оптимальный материал под ваши условия эксплуатации
            </p>
          </div>

          <div className="overflow-hidden rounded-[22px] border border-[#edf1f5] bg-white shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
            <div className="grid grid-cols-4 bg-white px-6 py-5 text-[14px] font-semibold text-[#10233f] md:px-7 md:text-[15px]">
              <div>Материал</div>
              <div>Степень фильтрации</div>
              <div>Температура</div>
              <div>Применение</div>
            </div>

            {materials.map((item, index) => (
              <div
                key={item.material}
                className={`grid grid-cols-4 px-6 py-5 text-[14px] text-[#475569] md:px-7 md:text-[15px] ${
                  index !== materials.length - 1 ? "border-t border-[#edf1f5]" : ""
                }`}
              >
                <div className="font-medium text-[#10233f]">{item.material}</div>
                <div>{item.filtration}</div>
                <div>{item.temperature}</div>
                <div>{item.use}</div>
              </div>
            ))}
          </div>

          <div className="mt-7 flex items-start gap-4 rounded-[22px] border border-[#bfeee8] bg-[#eefaf8] px-6 py-6 md:px-7">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] bg-[#22bdb0] text-white">
              <svg
                viewBox="0 0 24 24"
                className="h-[18px] w-[18px]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M12 10v6" />
                <path d="M12 7h.01" />
              </svg>
            </div>

            <div>
              <h3 className="text-[18px] font-bold leading-[1.35] text-[#10233f]">
                Помощь в выборе материала
              </h3>

              <p className="mt-3 max-w-[980px] text-[14px] leading-[1.75] text-[#64748b] md:text-[15px]">
                Не знаете, какой материал подойдёт для вашего оборудования? Наши
                специалисты помогут подобрать оптимальный вариант с учётом типа
                станка, интенсивности работы и условий эксплуатации.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[linear-gradient(135deg,#24bdb2_0%,#1aa49a_100%)] py-16 md:py-18">
        <div className="mx-auto max-w-[1280px] px-6 text-center">
          <h2 className="text-[30px] font-bold leading-[1.15] tracking-[-0.02em] text-white md:text-[42px]">
            Закажите мешки для стружкоотсоса
          </h2>

          <p className="mx-auto mt-5 max-w-[760px] text-[16px] leading-[1.7] text-white/95 md:text-[17px]">
            Получите бесплатный расчёт стоимости и консультацию по выбору
            оптимального решения для вашего оборудования
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/79514992576"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-[58px] items-center justify-center gap-3 rounded-[16px] bg-white px-8 text-[16px] font-semibold text-[#169d92] transition-colors duration-200 hover:bg-[#f6fffe]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="h-[18px] w-[18px] shrink-0 fill-current"
                aria-hidden="true"
              >
                <path d="M19.11 17.21c-.29-.14-1.69-.83-1.95-.92-.26-.1-.45-.14-.64.14-.19.29-.74.92-.9 1.11-.17.19-.33.22-.62.07-.29-.14-1.2-.44-2.29-1.41-.85-.76-1.42-1.69-1.59-1.98-.17-.29-.02-.45.12-.59.13-.13.29-.33.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.55-.88-2.12-.23-.55-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.36-.26.29-.98.95-.98 2.31 0 1.36 1 2.67 1.14 2.86.14.19 1.97 3 4.78 4.2.67.29 1.19.46 1.6.59.67.21 1.29.18 1.77.11.54-.08 1.69-.69 1.93-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.33Z" />
                <path d="M16.01 3.2c-7.05 0-12.77 5.72-12.77 12.77 0 2.25.59 4.45 1.72 6.39L3.2 28.8l6.61-1.73a12.7 12.7 0 0 0 6.19 1.59h.01c7.05 0 12.78-5.72 12.78-12.77S23.06 3.2 16.01 3.2Zm0 23.31h-.01a10.5 10.5 0 0 1-5.35-1.47l-.38-.22-3.92 1.03 1.05-3.82-.25-.39a10.48 10.48 0 0 1-1.61-5.59c0-5.79 4.71-10.5 10.5-10.5 2.8 0 5.44 1.09 7.42 3.08a10.43 10.43 0 0 1 3.08 7.42c0 5.79-4.72 10.5-10.51 10.5Z" />
              </svg>
              Написать в WhatsApp
            </a>

            <a
              href="tel:+79514992576"
              className="inline-flex h-[58px] items-center justify-center gap-3 rounded-[16px] bg-[#0f6c67] px-8 text-[16px] font-semibold text-white transition-colors duration-200 hover:bg-[#0c615c]"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-[18px] w-[18px] shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6.27 6.27l1.27-1.28a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92z" />
              </svg>
              +7 (951) 499-25-76
            </a>
          </div>

          <div className="mx-auto mt-12 grid max-w-[860px] gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-[16px] bg-white/14 text-white">
                <svg
                  viewBox="0 0 24 24"
                  className="h-[22px] w-[22px]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" />
                </svg>
              </div>
              <p className="mt-4 text-[15px] font-medium text-white">
                Срок изготовления от 1 дня
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-[16px] bg-white/14 text-white">
                <svg
                  viewBox="0 0 24 24"
                  className="h-[22px] w-[22px]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="1" y="7" width="13" height="9" rx="2" />
                  <path d="M14 10h4l3 3v3h-7z" />
                  <circle cx="7" cy="18" r="1.5" />
                  <circle cx="18" cy="18" r="1.5" />
                </svg>
              </div>
              <p className="mt-4 text-[15px] font-medium text-white">
                Доставка по России
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-[16px] bg-white/14 text-white">
                <svg
                  viewBox="0 0 24 24"
                  className="h-[22px] w-[22px]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4Z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <p className="mt-4 text-[15px] font-medium text-white">
                Долгий срок службы
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Вам также может понадобиться */}
      <section className="bg-[#f8fafc] py-16 md:py-18">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="mb-10 flex flex-col items-center text-center">
            <div className="mb-4 inline-flex rounded-full bg-[#e9f9f7] px-5 py-2 text-[13px] font-semibold text-[#28c4b7]">
              Похожие продукты
            </div>

            <h2 className="text-[28px] font-bold leading-[1.12] tracking-[-0.02em] text-[#10233f] md:text-[40px]">
              Вам также может понадобиться
            </h2>
          </div>

          <div className="grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-4">
            {similarProducts.map((item) => (
              <Link key={item.href} href={item.href} className="group block h-full">
                <article className="flex h-full flex-col rounded-[24px] border border-[#e9edf3] bg-white px-6 py-6 shadow-[0_8px_24px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-[3px] hover:border-[#95e7df] hover:bg-[#f7fffd] hover:shadow-[0_14px_30px_rgba(34,189,176,0.10)]">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-[14px] bg-[#f0fbf9] text-[#22bdb0] transition-colors duration-300 group-hover:bg-[#e7faf7]">
                    {item.icon}
                  </div>

                  <h3 className="min-h-[52px] text-[17px] font-bold leading-[1.35] text-[#10233f]">
                    {item.title}
                  </h3>

                  <p className="mt-4 min-h-[58px] flex-1 text-[14px] leading-[1.75] text-[#64748b]">
                    {item.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-[14px] font-semibold text-[#22bdb0]">
                    <span>Подробнее</span>
                    <span>→</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Полезные статьи */}
      <section className="bg-[#f8fafc] pb-18 pt-2 md:pb-20">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="mb-8 flex items-center justify-between gap-6">
            <div>
              <div className="mb-4 inline-flex rounded-full bg-[#fff1e8] px-5 py-2 text-[13px] font-semibold text-[#ff7a2f]">
                Читайте в блоге
              </div>

              <h2 className="text-[28px] font-bold leading-[1.12] tracking-[-0.02em] text-[#10233f] md:text-[40px]">
                Полезные статьи о мешках для стружкоотсоса
              </h2>
            </div>

            <Link
              href="/blog"
              className="hidden items-center gap-2 text-[15px] font-semibold text-[#22bdb0] transition-colors duration-200 hover:text-[#169d92] md:inline-flex"
            >
              Все статьи
              <span>→</span>
            </Link>
          </div>

          <div className="grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-4">
            {usefulArticles.map((item) => (
              <Link key={item.href} href={item.href} className="group block h-full">
                <article className="flex h-full flex-col rounded-[24px] border border-[#e9edf3] bg-white px-6 py-6 shadow-[0_8px_24px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-[3px] hover:border-[#ffd6c2] hover:bg-[#fffaf7] hover:shadow-[0_14px_30px_rgba(255,122,47,0.08)]">
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-[12px] border border-[#ffe0cf] bg-white text-[#ff7a2f] transition-colors duration-300 group-hover:bg-[#fff4ee]">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-[16px] w-[16px]"
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

                  <h3 className="min-h-[74px] text-[17px] font-bold leading-[1.35] text-[#10233f]">
                    {item.title}
                  </h3>

                  <p className="mt-4 flex-1 text-[14px] leading-[1.75] text-[#64748b]">
                    {item.description}
                  </p>
                </article>
              </Link>
            ))}
          </div>

          <div className="mt-8 flex justify-end md:hidden">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[15px] font-semibold text-[#22bdb0] transition-colors duration-200 hover:text-[#169d92]"
            >
              Все статьи
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Вопросы и ответы */}
      <section className="bg-[#f8fafc] pb-20 pt-2 md:pb-24">
        <div className="mx-auto max-w-[1000px] px-6">
          <div className="mb-10 flex flex-col items-center text-center">
            <div className="mb-4 inline-flex rounded-full bg-[#e9f9f7] px-5 py-2 text-[13px] font-semibold text-[#28c4b7]">
              Вопросы и ответы
            </div>

            <h2 className="text-[28px] font-bold leading-[1.12] tracking-[-0.02em] text-[#10233f] md:text-[40px]">
              Часто задаваемые вопросы
            </h2>

            <p className="mt-4 max-w-[680px] text-[15px] leading-[1.65] text-[#64748b] md:text-[16px]">
              Ответы на популярные вопросы о мешках для стружкоотсосов
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="ff-faq overflow-hidden rounded-[20px] border border-[#e7edf4] bg-white shadow-[0_6px_18px_rgba(15,23,42,0.04)] transition-all duration-300"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-6 px-7 py-6">
                  <span className="ff-faq-title text-[18px] font-bold leading-[1.4] text-[#10233f] transition-colors duration-200">
                    {item.question}
                  </span>

                  <span className="ff-faq-icon shrink-0 text-[#22bdb0] transition-all duration-300">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-[20px] w-[20px]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </span>
                </summary>

                <div className="px-7 pb-6 pt-0">
                  <div className="rounded-[16px] bg-white/70 px-0 py-1 text-[15px] leading-[1.8] text-[#5b6778]">
                    {item.answer}
                  </div>
                </div>
              </details>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center justify-center text-center">
            <p className="mb-5 text-[15px] text-[#64748b]">
              Не нашли ответ на свой вопрос?
            </p>

            <Link
              href="/kontakty"
              className="inline-flex h-[56px] items-center justify-center gap-3 rounded-[16px] bg-[#28c4b7] px-8 text-[16px] font-semibold text-white transition-colors duration-200 hover:bg-[#20b4a8]"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-[18px] w-[18px]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
                <path d="M8 9h8" />
                <path d="M8 13h5" />
              </svg>
              Задать вопрос специалисту
            </Link>
          </div>
        </div>
      </section>

      {/* Текстовый блок после FAQ */}
      <section className="bg-[#f8fafc] pb-24 pt-2">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="rounded-[28px] bg-[#f3f6f9] px-10 py-12 md:px-14 md:py-14">
            <h2 className="text-[28px] font-bold leading-[1.15] tracking-[-0.02em] text-[#10233f] md:text-[40px]">
              Мешки для стружкоотсоса — виды, материалы и применение
            </h2>

            <div className="mt-8 space-y-6 text-[15px] leading-[1.8] text-[#425066] md:text-[16px]">
              <p>
                <strong className="font-semibold text-[#10233f]">
                  Мешки для стружкоотсоса
                </strong>{" "}
                — это фильтровальные и накопительные элементы, которые
                устанавливаются в стружкоотсосы для сбора и фильтрации древесной
                стружки, опилок и мелкодисперсной пыли. Они являются расходным
                материалом и требуют периодической замены для поддержания
                эффективности системы.
              </p>

              <p>
                Стружкоотсос, как правило, оснащается двумя мешками:{" "}
                <strong className="font-semibold text-[#10233f]">
                  верхним (фильтровальным)
                </strong>
                , который задерживает мелкую пыль и возвращает очищенный воздух
                в помещение, и{" "}
                <strong className="font-semibold text-[#10233f]">
                  нижним (накопительным)
                </strong>
                , который собирает крупную стружку и опилки. Оба мешка
                необходимы для полноценной работы оборудования.
              </p>

              <div>
                <p className="mb-4">
                  Признаки необходимости замены мешков для стружкоотсоса:
                </p>

                <div className="space-y-3">
                  {[
                    "Снижение мощности всасывания и производительности системы",
                    "Появление пыли в воздухе рабочего помещения",
                    "Видимые повреждения ткани — разрывы, потёртости, расхождение швов",
                    "Мешок быстро забивается и требует частой очистки",
                    "Срок эксплуатации превысил 12 месяцев при интенсивной работе",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="mt-[7px] h-[7px] w-[7px] rounded-full bg-[#ff7a2f]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p>
                Мы производим{" "}
                <strong className="font-semibold text-[#10233f]">
                  мешки для стружкоотсосов по индивидуальным размерам
                </strong>{" "}
                под любое оборудование. Минимальный заказ — от 1 штуки. Срок
                изготовления — от 3 рабочих дней. Доставка по всей России.
              </p>
            </div>

            <div className="mt-12 rounded-[28px] bg-white px-10 py-10 shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
              <h3 className="text-[26px] font-bold leading-[1.2] tracking-[-0.02em] text-[#10233f] md:text-[32px]">
                Как подобрать мешок для стружкоотсоса
              </h3>

              <div className="mt-7 space-y-6 text-[15px] leading-[1.8] text-[#425066] md:text-[16px]">
                <p>
                  Для правильного подбора мешка для стружкоотсоса необходимо
                  знать модель оборудования или точные размеры: диаметр
                  патрубка, высоту мешка и тип крепления. Если размеры
                  неизвестны — пришлите фотографию или название станка, и наши
                  специалисты подберут подходящий вариант.
                </p>

                <div className="space-y-4">
                  {[
                    "Диаметр патрубка — стандартные размеры: 100, 120, 150, 200, 250 мм",
                    "Высота мешка — зависит от объёма накопительного бункера стружкоотсоса",
                    "Тип крепления — хомутовое, кольцевое или фланцевое соединение",
                    "Материал — полиэстер для стандартных условий, полипропилен для влажных сред",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-4">
                      <div className="mt-[2px] flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#eefaf8] text-[#22bdb0]">
                        <svg
                          viewBox="0 0 24 24"
                          className="h-[15px] w-[15px]"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m5 13 4 4L19 7" />
                        </svg>
                      </div>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>

                <p>
                  Для деревообрабатывающих станков, фрезеров, рейсмусов и
                  циркулярных пил чаще всего используются{" "}
                  <strong className="font-semibold text-[#10233f]">
                    полиэстеровые мешки
                  </strong>{" "}
                  со степенью фильтрации 99,5%. Они обеспечивают эффективное
                  улавливание мелкой древесной пыли и имеют длительный срок
                  службы.
                </p>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-[26px] font-bold leading-[1.2] tracking-[-0.02em] text-[#10233f] md:text-[32px]">
                Купить мешки для стружкоотсоса от производителя
              </h3>

              <div className="mt-7 space-y-6 text-[15px] leading-[1.8] text-[#425066] md:text-[16px]">
                <p>
                  FilterFlow — производитель{" "}
                  <strong className="font-semibold text-[#10233f]">
                    мешков для стружкоотсосов
                  </strong>{" "}
                  с собственным производством. Мы изготавливаем{" "}
                  <strong className="font-semibold text-[#10233f]">
                    верхние фильтровальные мешки, нижние накопительные мешки
                  </strong>
                  , а также{" "}
                  <strong className="font-semibold text-[#10233f]">
                    нестандартные мешки по чертежам заказчика
                  </strong>{" "}
                  для любых моделей стружкоотсосов.
                </p>

                <p>
                  Подходят для распространённых стационарных и переносных
                  стружкоотсосов; по марке оборудования или фото патрубка
                  подберём посадку. Если модели нет в каталоге — изготовим мешок
                  по вашим размерам.
                </p>

                <p>
                  Доставляем заказы по всей России: Москва, Санкт-Петербург,
                  Екатеринбург, Новосибирск, Казань, Краснодар и другие города.
                  Работаем с юридическими и физическими лицами, предоставляем
                  все необходимые документы.
                </p>
              </div>

              <div className="mt-10 flex justify-center">
                <Link
                  href="/kontakty"
                  className="inline-flex h-[60px] items-center justify-center gap-3 rounded-[18px] bg-[#22bdb0] px-10 text-[16px] font-semibold text-white transition-colors duration-200 hover:bg-[#1aa99d]"
                >
                  Заказать мешки для стружкоотсоса
                  <span className="text-[18px]">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SeeAlsoLinks />

      {/* Плавающие контакты */}
      <div className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-4 xl:flex">
        <Link
          href="/kontakty"
          className="flex h-[56px] w-[56px] items-center justify-center rounded-full bg-white text-[#ff7a2f] shadow-[0_10px_30px_rgba(15,23,42,0.12)] transition-transform duration-200 hover:scale-105"
        >
          <span className="text-[28px]">✉</span>
        </Link>

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

      {/* Кнопка наверх */}
      <a
        href="#top"
        className="fixed bottom-8 right-8 z-40 flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[#28c4b7] text-white shadow-[0_10px_30px_rgba(40,196,183,0.35)] transition-colors duration-200 hover:bg-[#20b4a8]"
      >
        ↑
      </a>
    </main>
  );
}