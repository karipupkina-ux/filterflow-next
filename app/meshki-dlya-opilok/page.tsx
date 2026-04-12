import type { Metadata } from "next";
import Link from "next/link";
import SeeAlsoLinks from "../components/SeeAlsoLinks";
import { pageMetadata } from "@/lib/seo-metadata";

export const metadata: Metadata = pageMetadata({
  title:
    "Мешки для опилок и стружки — мешок для стружкоотсоса, сбор опилок",
  description:
    "Мешки для опилок и сбора стружки: мешок для стружкоотсоса, мешок-накопитель. Деревообработка, мебельные цеха, пилорамы. Изготовление на заказ у производителя FilterFlow, доставка по России.",
  path: "/meshki-dlya-opilok",
  openGraphTitle:
    "Мешки для опилок и стружки — мешок для стружкоотсоса | FilterFlow",
});

const productLinks = [
  { href: "/meshki-dlya-aspiracii", label: "Мешки для аспирации" },
  { href: "/filtracionnye-rukava", label: "Фильтрационные рукава" },
  { href: "/meshki-dlya-struzhkootsosa", label: "Мешки для стружкоотсоса" },
  { href: "/meshki-dlya-ciklonov-i-uvp", label: "Мешки для циклонов и УВП" },
  {
    href: "/bystrosemnye-homyty",
    label: "Быстросъёмные хомуты",
  },
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

const features = [
  "Большой объем от 50 до 300 литров",
  "Прочная ткань с усиленными швами",
  "Удобная система крепления и снятия",
  "Устойчивость к влаге и истиранию",
  "Многоразовое использование",
];

const bagTypes = [
  {
    title: "Верхние мешки",
    description:
      "Фильтровальные мешки с функцией очистки воздуха. Задерживают мелкую пыль.",
    link: "/verhnie-meshki",
  },
  {
    title: "Нижние мешки",
    description:
      "Мешки для сбора стружки и опилок большого объёма — мешок-накопитель для стружкоотсоса.",
    link: "/nizhnie-meshki",
  },
  {
    title: "Тканевые мешки",
    description:
      "Универсальные мешки из прочной ткани для любых типов древесных отходов.",
    link: "/tkanevye-meshki",
  },
];

const workshops = [
  "Циркулярные пилы",
  "Фрезерные станки",
  "Рейсмусовые станки",
  "Шлифовальные машины",
];

const furnitureUse = [
  "Сбор опилок и пыли на кромкооблицовочных и фрезерных линиях",
  "Мешки для сбора стружки в зонах распила и обработки кромки",
  "Мешок для стружкоотсоса в мебельных цехах — под размер патрубка",
];

const sawmillUse = [
  "Мешки для опилок и щепы при распиле брёвен и многопильных станках",
  "Мешок-накопитель для стружкоотсоса на выносных бункерах и аспирации",
  "Мешок для сбора стружки на линиях оцилиндровки и брусования",
];

const faqItems = [
  {
    question: "Какой объём мешка для опилок выбрать?",
    answer:
      "Объём зависит от интенсивности работы и типа оборудования. Для домашних мастерских достаточно 50-100 литров, для небольших производств — 100-200 литров, для промышленных систем — 200-300 литров. Чем больше объём, тем реже нужно опустошать мешок.",
  },
  {
    question: "Из какого материала лучше мешки для опилок?",
    answer:
      "Для мелкой древесной пыли оптимален полиэстер плотностью 500-550 г/м² с высокой степенью фильтрации. Для крупной стружки подойдёт плотная ткань или полипропилен. Для универсального использования рекомендуем иглопробивной фильтр — он задерживает и пыль, и стружку.",
  },
  {
    question: "Как часто нужно менять мешки для опилок?",
    answer:
      "Мешки для опилок служат 3-5 лет при правильной эксплуатации. Опустошать мешок нужно по мере заполнения (обычно раз в неделю при интенсивной работе). Замена требуется только при износе ткани, повреждении швов или снижении эффективности фильтрации.",
  },
  {
    question: "Можно ли использовать один мешок для разных станков?",
    answer:
      "Да, если диаметр горловины мешка подходит к патрубкам всех станков. Универсальные мешки с регулируемым креплением (на резинке или хомуте) можно использовать на разном оборудовании. Главное — обеспечить герметичность соединения.",
  },
  {
    question: "Как правильно ухаживать за мешками для опилок?",
    answer:
      "Регулярно опустошайте мешок, не допуская переполнения. Периодически (раз в 1-2 месяца) вытряхивайте или продувайте мешок для удаления мелкой пыли. Тканевые мешки можно стирать в тёплой воде. Проверяйте швы и крепления на износ.",
  },
];

const seoBullets = [
  {
    strong: "Объём мешка",
    text: "от 50 до 300 литров в зависимости от интенсивности работы",
  },
  {
    strong: "Диаметр горловины",
    text: "должен точно соответствовать патрубку оборудования",
  },
  {
    strong: "Материал ткани",
    text: "полиэстер для мелкой пыли, плотная ткань для крупной стружки",
  },
  {
    strong: "Тип крепления",
    text: "хомутовое, кольцевое или на резинке",
  },
  {
    strong: "Прочность швов",
    text: "усиленные швы для тяжёлых опилок и стружки",
  },
];

const equipmentBullets = [
  {
    strong: "Ручные и стационарные стружкоотсосы",
    text: "стандартные размеры в наличии, нестандартные под заказ",
  },
  {
    strong: "Циклонные установки",
    text: "мешки диаметром от 300 до 800 мм, высотой до 2000 мм",
  },
  {
    strong: "Промышленные аспирационные системы",
    text: "рукавные фильтры и мешки большого объёма",
  },
];

export default function Page() {
  return (
    <main id="top" className="min-h-screen bg-[#f6f7f9] text-slate-900">
      <style>{`
        details.faq-item > summary::-webkit-details-marker {
          display: none;
        }

        details.faq-item summary {
          list-style: none;
        }

        details.faq-item[open] {
          border-color: #ffd3bf;
          background: #fff8f4;
          box-shadow: 0 10px 28px rgba(255,107,44,0.08);
        }

        details.faq-item[open] .faq-question {
          color: #10233f;
        }

        details.faq-item[open] .faq-icon {
          color: #ff6b2c;
          transform: rotate(180deg);
        }
      `}</style>

      <div className="sticky top-0 z-50">
        <div className="border-b border-[#d8dde3] bg-[#c9c9c9]">
          <div className="mx-auto flex h-10 max-w-[1440px] items-center justify-end gap-6 px-6 text-[13px] text-white">
            <a
              href="mailto:filterflow@mail.ru"
              className="transition-colors duration-200 hover:text-[#28c4b7]"
            >
              filterflow@mail.ru
            </a>

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
                      {productLinks.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex items-start gap-3 rounded-[14px] px-4 py-3 text-[15px] text-[#475569] transition-all duration-200 hover:bg-[#eefaf8] hover:text-[#28c4b7]"
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
                      ))}
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
        </header>
      </div>

      <section className="py-10 md:py-12">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="mb-8 flex items-center gap-3 text-[14px]">
            <Link
              href="/"
              className="font-medium text-[#28c4b7] transition-colors duration-200 hover:text-[#1fa99e]"
            >
              Главная
            </Link>
            <span className="text-[#a0aec0]">›</span>
            <span className="text-[#475569]">Мешки для опилок</span>
          </div>

          <h1 className="mb-6 max-w-[920px] text-[34px] font-bold leading-[1.12] tracking-[-0.03em] text-[#1f2937] md:text-[56px]">
            Мешки для опилок и сбора стружки — для стружкоотсоса и
            деревообработки
          </h1>

          <div className="grid gap-8 lg:grid-cols-[540px_minmax(0,1fr)] lg:items-start">
            <div className="overflow-hidden rounded-[18px] bg-[#f1f2f4]">
              <img
                src="/images/catalog/nizhnie-meshki.webp"
                alt="Мешки для опилок и сбора стружки для стружкоотсоса"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="pt-1">
              <p className="max-w-[640px] text-[17px] leading-[1.75] text-[#374151]">
                <strong className="font-bold text-[#1f2937]">
                  Мешок для опилок
                </strong>{" "}
                (накопитель) и{" "}
                <strong className="font-bold text-[#1f2937]">
                  мешок для сбора стружки
                </strong>{" "}
                ставят на стружкоотсосы и в аспирацию — для крупной фракции и
                опилок, с усиленными швами. Подходят для столярки,
                мебельных цехов и пилорам — по размерам горловины под ваше
                оборудование.
              </p>

              <h2 className="mt-10 text-[28px] font-bold leading-[1.2] text-[#1f2937] md:text-[40px]">
                Особенности: мешок для стружкоотсоса и сбора опилок
              </h2>

              <div className="mt-7 space-y-5">
                {features.map((item) => (
                  <div key={item} className="flex items-start gap-4">
                    <span className="mt-[5px] flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-full bg-[#ff6b2c] text-white">
                      <svg
                        viewBox="0 0 20 20"
                        className="h-[11px] w-[11px]"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.2 7.26a1 1 0 0 1-1.428-.006L3.29 9.09a1 1 0 1 1 1.42-1.408l4.08 4.12 6.49-6.506a1 1 0 0 1 1.414-.006Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>

                    <p className="text-[17px] leading-[1.7] text-[#1f2937]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-14 pt-4 md:pb-16">
        <div className="mx-auto max-w-[1280px] px-6">
          <h2 className="mb-8 text-[34px] font-bold leading-[1.12] tracking-[-0.03em] text-[#0f213d] md:text-[54px]">
            Виды мешков для опилок: верхние, нижние и тканевые
          </h2>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {bagTypes.map((item) => (
              <Link key={item.title} href={item.link} className="group block">
                <article className="min-h-[250px] rounded-[22px] border border-[#ebedf0] bg-white px-7 py-7 shadow-[0_6px_18px_rgba(15,23,42,0.06)] transition-all duration-200 hover:-translate-y-[2px] hover:shadow-[0_12px_28px_rgba(15,23,42,0.08)]">
                  <h3 className="text-[21px] font-bold leading-[1.3] text-[#10233f] transition-colors duration-200 group-hover:text-[#ff6b2c]">
                    {item.title}
                  </h3>

                  <p className="mt-5 max-w-[360px] text-[16px] leading-[1.75] text-[#374151]">
                    {item.description}
                  </p>

                  <div className="mt-8 flex items-center gap-2 text-[16px] font-medium text-[#ff6b2c]">
                    <span>Подробнее</span>
                    <span>→</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 pt-2">
        <div className="mx-auto max-w-[1280px] px-6">
          <h2 className="mb-8 text-[34px] font-bold leading-[1.12] tracking-[-0.03em] text-[#0f213d] md:text-[54px]">
            Мешки для опилок в деревообработке, на мебельных фабриках и пилорамах
          </h2>

          <div className="rounded-[26px] bg-[#f2f4f7] px-9 py-10 md:px-10 md:py-11">
            <div className="grid gap-12 lg:grid-cols-3 lg:gap-10">
              <div>
                <h3 className="mb-6 text-[22px] font-bold leading-[1.3] text-[#10233f] md:text-[26px]">
                  Деревообработка и столярка
                </h3>

                <div className="space-y-5">
                  {workshops.map((item) => (
                    <div key={item} className="flex items-start gap-4">
                      <span className="mt-[7px] flex h-[10px] w-[10px] shrink-0 items-center justify-center text-[#ff6b2c]">
                        <svg
                          viewBox="0 0 12 12"
                          className="h-[10px] w-[10px]"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M3 1.5 8.5 6 3 10.5V1.5Z" />
                        </svg>
                      </span>

                      <p className="text-[18px] leading-[1.6] text-[#374151]">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-6 text-[22px] font-bold leading-[1.3] text-[#10233f] md:text-[26px]">
                  Мебельное производство
                </h3>

                <div className="space-y-5">
                  {furnitureUse.map((item) => (
                    <div key={item} className="flex items-start gap-4">
                      <span className="mt-[7px] flex h-[10px] w-[10px] shrink-0 items-center justify-center text-[#ff6b2c]">
                        <svg
                          viewBox="0 0 12 12"
                          className="h-[10px] w-[10px]"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M3 1.5 8.5 6 3 10.5V1.5Z" />
                        </svg>
                      </span>

                      <p className="text-[18px] leading-[1.6] text-[#374151]">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-6 text-[22px] font-bold leading-[1.3] text-[#10233f] md:text-[26px]">
                  Пилорамы и лесопиление
                </h3>

                <div className="space-y-5">
                  {sawmillUse.map((item) => (
                    <div key={item} className="flex items-start gap-4">
                      <span className="mt-[7px] flex h-[10px] w-[10px] shrink-0 items-center justify-center text-[#ff6b2c]">
                        <svg
                          viewBox="0 0 12 12"
                          className="h-[10px] w-[10px]"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M3 1.5 8.5 6 3 10.5V1.5Z" />
                        </svg>
                      </span>

                      <p className="text-[18px] leading-[1.6] text-[#374151]">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-14 pt-0">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="rounded-[24px] bg-[#ff6b2c] px-7 py-7 text-white md:px-9 md:py-8">
            <h2 className="text-[28px] font-bold leading-[1.12] tracking-[-0.02em] md:text-[40px]">
              Изготовление мешков для опилок на заказ
            </h2>

            <p className="mt-4 max-w-[980px] text-[17px] leading-[1.65] text-white/95 md:text-[18px]">
              Пошив мешка для стружкоотсоса и мешков для сбора стружки под ваши
              размеры и крепление. Минимальный заказ — от 1 штуки, срок — от 3
              рабочих дней.
            </p>

            <div className="mt-7 grid gap-4 md:grid-cols-3 md:gap-5">
              {[
                "Любые размеры",
                "Быстрое производство",
                "Доставка по России",
              ].map((item) => (
                <div
                  key={item}
                  className="flex min-h-[62px] items-center gap-3 rounded-[18px] border border-white/20 bg-white/10 px-5 py-4 backdrop-blur-[2px]"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/12 text-white">
                    <svg
                      viewBox="0 0 20 20"
                      className="h-4 w-4"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.2 7.26a1 1 0 0 1-1.428-.006L3.29 9.09a1 1 0 1 1 1.42-1.408l4.08 4.12 6.49-6.506a1 1 0 0 1 1.414-.006Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="whitespace-nowrap text-[17px] font-medium leading-[1.45] text-white md:text-[18px]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-12 pt-0 md:pb-14">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="rounded-[26px] border border-[#e8ecf1] bg-white px-8 py-9 shadow-[0_6px_20px_rgba(15,23,42,0.05)] md:px-10 md:py-10">
            <h2 className="text-[28px] font-bold leading-[1.12] tracking-[-0.02em] text-[#10233f] md:text-[38px]">
              Купить мешки для опилок и заказать по размерам
            </h2>

            <p className="mt-5 max-w-[880px] text-[16px] leading-[1.75] text-[#4b5563] md:text-[17px]">
              Заказать и купить мешки для опилок или мешок для сбора стружки у
              производителя просто: пришлите диаметр горловины или фото патрубка
              — подберём конфигурацию и рассчитаем стоимость. Прямые цены с цеха,
              без наценки посредников.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://wa.me/79514992576"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-[52px] items-center justify-center rounded-[14px] bg-[#28c4b7] px-8 text-[16px] font-semibold text-white transition-colors duration-200 hover:bg-[#20b4a8]"
              >
                Заказать в WhatsApp
              </a>
              <a
                href="mailto:filterflow@mail.ru?subject=Заказ%20мешков%20для%20опилок"
                className="inline-flex h-[52px] items-center justify-center rounded-[14px] border border-[#e3e8ee] bg-[#f8fafc] px-8 text-[16px] font-semibold text-[#10233f] transition-colors duration-200 hover:border-[#28c4b7] hover:text-[#28c4b7]"
              >
                Запросить расчёт
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 pt-0 md:pb-20">
        <div className="mx-auto max-w-[1280px] px-6">
          <h2 className="mb-8 text-[34px] font-bold leading-[1.12] tracking-[-0.03em] text-[#0f213d] md:text-[56px]">
            Вопросы о мешках для опилок
          </h2>

          <div className="space-y-5">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="faq-item overflow-hidden rounded-[20px] border border-[#eceef1] bg-white shadow-[0_6px_18px_rgba(15,23,42,0.05)] transition-all duration-200"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-6 px-7 py-7">
                  <span className="faq-question text-[19px] font-bold leading-[1.45] text-[#10233f] transition-colors duration-200 md:text-[22px]">
                    {item.question}
                  </span>

                  <span className="faq-icon shrink-0 text-[#ff6b2c] transition-all duration-200">
                    <svg
                      viewBox="0 0 20 20"
                      className="h-6 w-6"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.168l3.71-3.938a.75.75 0 1 1 1.08 1.04l-4.25 4.51a.75.75 0 0 1-1.08 0l-4.25-4.51a.75.75 0 0 1 .02-1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <div className="px-7 pb-7 pt-0 text-[16px] leading-[1.8] text-[#4b5563] md:text-[18px]">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-10 pt-0 md:pb-12">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="space-y-7">
            <h2 className="text-[28px] font-bold leading-[1.12] tracking-[-0.02em] text-[#10233f] md:text-[40px]">
              Мешок для опилок и стружкоотсоса: выбор и применение
            </h2>

            <div className="space-y-6 text-[15px] leading-[1.75] text-[#374151] md:text-[16px]">
              <p>
                Мешки для опилок и мешки для сбора стружки подключают к{" "}
                <Link
                  href="/meshki-dlya-aspiracii"
                  className="font-semibold text-[#ff6b2c] underline-offset-2 hover:underline"
                >
                  аспирации
                </Link>{" "}
                и к нижнему бункеру стружкоотсоса — это мешок-накопитель для
                стружкоотсоса либо отдельный{" "}
                <Link
                  href="/meshki-dlya-struzhkootsosa"
                  className="font-semibold text-[#ff6b2c] underline-offset-2 hover:underline"
                >
                  мешок для стружкоотсоса
                </Link>{" "}
                по размеру патрубка. На мебельном производстве и пилорамах важны
                объём и прочность дна; в столярке — удобное снятие и крепление.
              </p>

              <p>
                Правильно подобранный мешок для опилок держит нагрузку от веса
                фракции, не рвёт швы и сохраняет тягу аспирации. Для{" "}
                <strong className="font-bold text-[#10233f]">
                  деревообработки
                </strong>{" "}
                мы подбираем ткань и диаметр горловины под ваш станок или бункер.
              </p>

              <div className="space-y-4">
                <p>На что обратить внимание при выборе мешка для опилок:</p>

                <ul className="space-y-3 pl-6">
                  {seoBullets.map((item) => (
                    <li
                      key={item.strong}
                      className="list-disc text-[15px] leading-[1.75] text-[#374151] md:text-[16px]"
                    >
                      <strong className="font-bold text-[#10233f]">
                        {item.strong}
                      </strong>{" "}
                      — {item.text}
                    </li>
                  ))}
                </ul>
              </div>

              <p>
                Мы производим{" "}
                <strong className="font-bold text-[#10233f]">
                  мешки для опилок по индивидуальным размерам
                </strong>{" "}
                под любое оборудование. Минимальный заказ — от 1 штуки. Срок
                изготовления — от 3 рабочих дней. Доставка по всей России.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-10 pt-2 md:pb-12">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="rounded-[28px] bg-[#f2f4f6] px-8 py-9 md:px-10 md:py-10">
            <h2 className="text-[28px] font-bold leading-[1.12] tracking-[-0.02em] text-[#10233f] md:text-[40px]">
              Мешок для стружкоотсоса и циклона: типы оборудования
            </h2>

            <div className="mt-7 space-y-6 text-[15px] leading-[1.75] text-[#374151] md:text-[16px]">
              <p>
                Мешки для опилок подбираются под конкретный тип оборудования.
                Для <strong className="font-bold text-[#10233f]">стружкоотсосов</strong>{" "}
                используются двухкомпонентные системы: верхний фильтровальный
                мешок и нижний накопительный. Для{" "}
                <strong className="font-bold text-[#10233f]">
                  циклонных установок
                </strong>{" "}
                — мешки большого объёма с усиленным дном. Для{" "}
                <strong className="font-bold text-[#10233f]">
                  промышленных аспирационных систем
                </strong>{" "}
                — рукавные фильтры с высокой площадью фильтрации.
              </p>

              <div className="space-y-4">
                {equipmentBullets.map((item) => (
                  <div key={item.strong} className="flex items-start gap-4">
                    <span className="mt-[4px] flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-full bg-[#ff6b2c] text-white">
                      <svg
                        viewBox="0 0 20 20"
                        className="h-[11px] w-[11px]"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.2 7.26a1 1 0 0 1-1.428-.006L3.29 9.09a1 1 0 1 1 1.42-1.408l4.08 4.12 6.49-6.506a1 1 0 0 1 1.414-.006Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>

                    <p className="text-[15px] leading-[1.75] text-[#374151] md:text-[16px]">
                      <strong className="font-bold text-[#10233f]">
                        {item.strong}
                      </strong>{" "}
                      — {item.text}
                    </p>
                  </div>
                ))}
              </div>

              <p>
                Если вы не знаете точные размеры — пришлите фотографию
                оборудования или его модель, и мы подберём подходящий мешок для
                опилок.
              </p>
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <a
              href="mailto:filterflow@mail.ru?subject=Заказать%20мешки%20для%20опилок"
              className="inline-flex h-[60px] items-center justify-center gap-3 rounded-full bg-[#ff6b2c] px-10 text-[17px] font-semibold text-white transition-colors duration-200 hover:bg-[#e85e24] md:px-12 md:text-[18px]"
            >
              Заказать мешки для опилок
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.3"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <SeeAlsoLinks />

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
    </main>
  );
}