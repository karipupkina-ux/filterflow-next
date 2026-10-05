import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navigation from "../components/Navigation";
import ProductInquiryForm from "../components/ProductInquiryForm";
import FloatingContacts from "../components/feature/FloatingContacts";
import { pageMetadata, SITE_URL } from "@/lib/seo-metadata";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Шланги и гибкие воздуховоды для аспирации",
    description:
      "Аспирационные шланги и гибкие воздуховоды для стружкоотсосов, пыли, стружки и опилок. ПВХ, PO и PUR, подбор по диаметру, хомуты для соединения.",
    path: "/vozduhovody-dlya-aspiracii",
    openGraphTitle: "Гибкие воздуховоды для аспирации | FilterFlow",
  }),
  keywords: [
    "воздуховоды для аспирации",
    "шланг для аспирации",
    "аспирационный шланг",
    "рукав для аспирации",
    "шланг для стружкоотсоса",
    "шланг для опилок",
    "полиуретановый шланг",
    "ПВХ воздуховод",
    "PUR шланг",
    "хомут для воздуховода",
  ],
};

const faq = [
  {
    question: "Какой диаметр шланга нужен для аспирации?",
    answer:
      "Диаметр подбирают под патрубок оборудования и расчётные параметры системы. Без необходимости уменьшать проходное сечение не рекомендуется, так как это увеличивает сопротивление линии.",
  },
  {
    question: "Какой шланг выбрать для стружки и опилок?",
    answer:
      "Для деревообработки обычно выбирают гибкий воздуховод, рассчитанный на транспортировку пыли, стружки и опилок. Материал и толщину стенки подбирают по абразивности, длине трассы и условиям эксплуатации.",
  },
  {
    question: "Чем отличаются ПВХ, PO и PUR воздуховоды?",
    answer:
      "Они отличаются материалом, гибкостью, стойкостью к износу и рабочими условиями. Точные температурные и химические ограничения зависят от конкретной модели шланга и должны проверяться по её техническим характеристикам.",
  },
  {
    question: "Можно ли сразу подобрать хомут к воздуховоду?",
    answer:
      "Да. Хомут выбирают под наружный диаметр шланга и конструкцию патрубка, чтобы соединение было надёжно зафиксировано.",
  },
] as const;

const types = [
  {
    title: "ПВХ / VINIL",
    href: "#pvh-vozduhovody",
    text: "Гибкие промышленные шланги для вентиляции и аспирации. Конкретное исполнение подбирается по среде и нагрузке.",
    image: "/images/new-products/vinyl-black-duct-clean.webp",
    width: 1536,
    height: 1024,
    alt: "Гибкий ПВХ воздуховод для аспирации",
  },
  {
    title: "PO / полиолефин",
    href: "#po-vozduhovody",
    text: "Лёгкие гибкие воздуховоды для перемещения воздуха и газовоздушных сред в пределах характеристик конкретной модели.",
    image: "/images/new-products/hose-po1.webp",
    width: 1448,
    height: 1086,
    alt: "Полиолефиновый гибкий воздуховод",
  },
  {
    title: "PUR / полиуретан",
    href: "#pur-vozduhovody",
    text: "Аспирационные рукава для задач, где важна стойкость к износу при транспортировке пыли, стружки и опилок.",
    image: "/images/new-products/website-photo-optimized.webp",
    width: 1536,
    height: 1024,
    alt: "Прозрачный полиуретановый шланг PUR для аспирации",
  },
] as const;

export default function AirDuctsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Главная", item: `${SITE_URL}/` },
          {
            "@type": "ListItem",
            position: 2,
            name: "Воздуховоды для аспирации",
            item: `${SITE_URL}/vozduhovody-dlya-aspiracii/`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };

  return (
    <>
      <Navigation />
      <main className="bg-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
        />

        <section className="relative overflow-hidden bg-[#0f2341] pt-[112px] text-white sm:pt-[102px]">
          <div className="absolute inset-0 opacity-20 [background:radial-gradient(circle_at_78%_20%,#2dd4bf_0,transparent_34%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-8 px-5 pb-10 pt-5 sm:px-6 md:pb-12 md:pt-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-14">
            <div>
              <div className="mb-4 flex flex-wrap items-center gap-2 text-[13px] text-white/70">
                <Link href="/" className="transition hover:text-white">Главная</Link>
                <span>/</span>
                <span>Воздуховоды для аспирации</span>
              </div>

              <h1 className="max-w-[780px] text-[34px] font-bold leading-[1.08] tracking-[-0.03em] sm:text-[44px] md:text-[58px]">
                Гибкие воздуховоды и шланги для аспирации
              </h1>
              <p className="mt-4 max-w-[760px] text-[16px] leading-[1.75] text-white/80 md:text-[18px]">
                Подбираем гибкие промышленные рукава для подключения станков, стружкоотсосов, циклонов и других элементов аспирационных систем. Шланги для отвода воздуха, пыли, древесной стружки и опилок.
              </p>

              <div className="mt-5 flex flex-wrap gap-2.5 text-[13px] font-medium text-white/90">
                {[
                  "ПВХ, PO и PUR",
                  "Для пыли, стружки и опилок",
                  "Подбор по диаметру",
                  "Хомуты для соединения",
                ].map((item) => (
                  <span key={item} className="rounded-full border border-white/20 bg-white/10 px-4 py-2.5 backdrop-blur-sm">
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a href="#zakaz" className="inline-flex h-[56px] items-center justify-center rounded-[15px] bg-[#22bdb0] px-7 text-[16px] font-semibold text-white transition hover:bg-[#1aa99d]">
                  Подобрать воздуховод
                </a>
                <a href="#vidy" className="inline-flex h-[56px] items-center justify-center rounded-[15px] border border-white/25 px-7 text-[16px] font-semibold text-white transition hover:bg-white/10">
                  Смотреть виды
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[610px]">
              <div className="absolute -inset-4 rounded-[34px] bg-[#2dd4bf]/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#d8dadd] shadow-[0_30px_80px_rgba(0,0,0,0.28)]">
                <Image
                  src="/images/new-products/aspiration-hoses.webp"
                  alt="Гибкие шланги для системы аспирации"
                  width={1417}
                  height={1110}
                  priority
                  sizes="(max-width: 1023px) 92vw, 48vw"
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-6">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
              <div>
                <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#149c94]">Аспирационные линии</p>
                <h2 className="mt-3 text-[32px] font-bold leading-[1.12] tracking-[-0.025em] text-[#10233f] md:text-[48px]">
                  Для чего нужен гибкий воздуховод
                </h2>
                <div className="mt-6 space-y-5 text-[16px] leading-[1.8] text-[#475569]">
                  <p>
                    Гибкий воздуховод соединяет источник образования пыли и отходов с аспирационной установкой. В деревообработке через него удаляются стружка и опилки от станка к стружкоотсосу, циклону или другому пылеулавливающему оборудованию.
                  </p>
                  <p>
                    При подборе учитывают внутренний диаметр, длину трассы, гибкость, износостойкость, характер транспортируемого материала и рабочие условия. Технические пределы по температуре и химической стойкости проверяют для конкретной модели шланга.
                  </p>
                  <p>
                    Если вы одновременно комплектуете систему, можно подобрать и <Link href="/meshki-dlya-aspiracii/" className="font-semibold text-[#149c94] underline underline-offset-4">мешки для аспирации</Link>, а для деревообрабатывающего оборудования — <Link href="/meshki-dlya-struzhkootsosa/" className="font-semibold text-[#149c94] underline underline-offset-4">мешки для стружкоотсоса</Link>.
                  </p>
                </div>
              </div>

              <div className="overflow-hidden rounded-[24px] border border-[#e2e8f0] bg-[#f2f3f4] p-3 shadow-sm">
                <Image src="/images/new-products/flexible-hoses.webp" alt="Гибкие промышленные шланги для аспирации и вентиляции" width={1254} height={1254} sizes="(max-width: 1023px) 92vw, 47vw" className="h-auto w-full rounded-[18px] object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section id="vidy" className="bg-[#f8fafc] py-14 md:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-6">
            <div className="max-w-[900px]">
              <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#149c94]">Ассортимент</p>
              <h2 className="mt-3 text-[32px] font-bold leading-[1.12] tracking-[-0.025em] text-[#10233f] md:text-[48px]">
                Виды гибких воздуховодов
              </h2>
              <p className="mt-5 text-[16px] leading-[1.8] text-[#475569]">
                Материал шланга подбирают по задаче. Ниже — основные группы, которые удобно сравнить перед расчётом.
              </p>
            </div>

            <div className="mt-9 grid gap-5 md:grid-cols-3">
              {types.map((item) => (
                <a key={item.title} href={item.href} className="group overflow-hidden rounded-[22px] border border-[#e2e8f0] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <div className="aspect-[4/3] overflow-hidden bg-[#eef0f1]">
                    <Image src={item.image} alt={item.alt} width={item.width} height={item.height} sizes="(max-width: 767px) 92vw, 31vw" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-[22px] font-bold text-[#10233f]">{item.title}</h3>
                    <p className="mt-3 text-[14px] leading-[1.7] text-[#64748b]">{item.text}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-[14px] font-semibold text-[#149c94]">Подробнее <span>↓</span></span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="pvh-vozduhovody" className="py-14 md:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
            <div className="overflow-hidden rounded-[24px] border border-[#e2e8f0] bg-[#e9eaec]">
              <Image src="/images/new-products/vinyl-duct-bend.webp" alt="Гибкий ПВХ воздуховод в изогнутом положении" width={1448} height={1086} sizes="(max-width: 1023px) 92vw, 47vw" className="h-auto w-full object-cover" />
            </div>
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#149c94]">ПВХ / VINIL</p>
              <h2 className="mt-3 text-[32px] font-bold leading-[1.12] tracking-[-0.025em] text-[#10233f] md:text-[46px]">ПВХ воздуховоды для аспирации и вентиляции</h2>
              <div className="mt-6 space-y-5 text-[16px] leading-[1.8] text-[#475569]">
                <p>
                  Гибкие ПВХ-шланги применяют в вентиляционных и аспирационных линиях для перемещения воздуха и различных лёгких материалов. Гофрированная конструкция позволяет прокладывать трассу между патрубками при сложном расположении оборудования.
                </p>
                <p>
                  Конкретное исполнение выбирают по диаметру, длине, толщине стенки и условиям эксплуатации. Если среда содержит химически активные компоненты, высокую температуру или абразив, характеристики выбранной модели нужно проверить отдельно.
                </p>
              </div>
              <a href="#homuty-dlya-vozduhovodov" className="mt-7 inline-flex items-center gap-2 font-semibold text-[#149c94] transition hover:text-[#118b84]">
                Подобрать хомут к воздуховоду →
              </a>
            </div>
          </div>
        </section>

        <section id="po-vozduhovody" className="bg-[#f8fafc] py-14 md:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#149c94]">PO / полиолефин</p>
              <h2 className="mt-3 text-[32px] font-bold leading-[1.12] tracking-[-0.025em] text-[#10233f] md:text-[46px]">Полиолефиновые гибкие воздуховоды</h2>
              <div className="mt-6 space-y-5 text-[16px] leading-[1.8] text-[#475569]">
                <p>
                  Полиолефиновые шланги применяют в вентиляционных и промышленных системах для перемещения воздуха и газовоздушных сред. Их выбирают, когда важны небольшой вес, гибкость и совместимость материала с конкретной рабочей средой.
                </p>
                <p>
                  Стойкость к кислотам, щелочам, растворителям и температуре отличается у разных исполнений, поэтому такие параметры всегда согласовываются по техническому паспорту выбранного воздуховода.
                </p>
              </div>
              <a href="#zakaz" className="mt-7 inline-flex items-center gap-2 font-semibold text-[#149c94] transition hover:text-[#118b84]">Подобрать PO воздуховод →</a>
            </div>
            <div className="overflow-hidden rounded-[24px] border border-[#e2e8f0] bg-[#e9eaec]">
              <Image src="/images/new-products/hose-po1.webp" alt="Гибкий полиолефиновый воздуховод PO" width={1448} height={1086} sizes="(max-width: 1023px) 92vw, 49vw" className="h-auto w-full object-cover" />
            </div>
          </div>
        </section>

        <section id="pur-vozduhovody" className="py-14 md:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
            <div className="overflow-hidden rounded-[24px] border border-[#e2e8f0] bg-[#e9eaec]">
              <Image src="/images/new-products/duct-29kb.webp" alt="Полиуретановый аспирационный шланг PUR для стружки и опилок" width={1518} height={1036} sizes="(max-width: 1023px) 92vw, 47vw" className="h-auto w-full object-cover" />
            </div>
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#149c94]">PUR / полиуретан</p>
              <h2 className="mt-3 text-[32px] font-bold leading-[1.12] tracking-[-0.025em] text-[#10233f] md:text-[46px]">Полиуретановые шланги для стружки и опилок</h2>
              <div className="mt-6 space-y-5 text-[16px] leading-[1.8] text-[#475569]">
                <p>
                  Полиуретановые аспирационные шланги востребованы в деревообработке и других производствах, где вместе с воздушным потоком перемещаются пыль, стружка, опилки и мелкие частицы.
                </p>
                <p>
                  При выборе важно учитывать абразивность материала, требуемую гибкость и соответствие диаметра шланга патрубкам оборудования. Для отдельных задач также проверяют возможность отвода статического заряда и другие свойства конкретной модели.
                </p>
                <p>
                  Для полной комплектации линии можно подобрать <Link href="/verhnie-meshki/" className="font-semibold text-[#149c94] underline underline-offset-4">верхний фильтровальный мешок для стружкоотсоса</Link> или <Link href="/meshki-dlya-ciklonov-i-uvp/" className="font-semibold text-[#149c94] underline underline-offset-4">мешок для циклона и УВП</Link>.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f8fafc] py-14 md:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-6">
            <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start lg:gap-14">
              <div>
                <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#149c94]">Подбор системы</p>
                <h2 className="mt-3 text-[32px] font-bold leading-[1.12] tracking-[-0.025em] text-[#10233f] md:text-[46px]">Как подобрать диаметр аспирационного шланга</h2>
                <div className="mt-6 space-y-5 text-[16px] leading-[1.8] text-[#475569]">
                  <p>
                    В первую очередь внутренний диаметр воздуховода должен соответствовать патрубку оборудования и расчётным параметрам аспирационной системы. Уменьшение проходного сечения повышает сопротивление линии и может снизить производительность.
                  </p>
                  <p>
                    Для подбора сообщите диаметр патрубка, ориентировочную длину участка, тип транспортируемого материала и оборудование, к которому подключается шланг.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  ["1", "Диаметр патрубка", "Измерьте внутренний или наружный размер и уточните тип соединения."],
                  ["2", "Длина трассы", "Укажите требуемую длину гибкого участка и количество поворотов."],
                  ["3", "Что транспортируется", "Воздух, пыль, опилки, стружка или другие частицы."],
                  ["4", "Условия работы", "Температура, абразивность и особенности среды при наличии."],
                ].map(([num, title, text]) => (
                  <div key={num} className="rounded-[20px] border border-[#e2e8f0] bg-white p-5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e8f8f6] text-[15px] font-bold text-[#149c94]">{num}</div>
                    <h3 className="mt-4 text-[18px] font-bold text-[#10233f]">{title}</h3>
                    <p className="mt-2 text-[14px] leading-[1.65] text-[#64748b]">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="homuty-dlya-vozduhovodov" className="py-14 md:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#149c94]">Комплектующие</p>
              <h2 className="mt-3 text-[32px] font-bold leading-[1.12] tracking-[-0.025em] text-[#10233f] md:text-[46px]">Хомуты для гибких воздуховодов</h2>
              <div className="mt-6 space-y-5 text-[16px] leading-[1.8] text-[#475569]">
                <p>
                  Для фиксации гибкого воздуховода на патрубке станка, циклона или аспирационной установки используют металлические хомуты подходящего диапазона диаметра.
                </p>
                <p>
                  При заказе сообщите наружный диаметр установленного шланга или размеры патрубка. Хомут должен надёжно фиксировать соединение без повреждения стенки воздуховода.
                </p>
              </div>
              <a href="#zakaz" className="mt-7 inline-flex items-center gap-2 font-semibold text-[#149c94] transition hover:text-[#118b84]">Подобрать воздуховод и хомут →</a>
            </div>
            <div className="overflow-hidden rounded-[24px] border border-[#e2e8f0] bg-[#e9eaec] p-3 shadow-sm">
              <Image src="/images/new-products/clamps-light-graphite.webp" alt="Металлические хомуты для крепления гибких воздуховодов" width={1538} height={1022} sizes="(max-width: 1023px) 92vw, 49vw" className="h-auto w-full rounded-[18px] object-cover" />
            </div>
          </div>
        </section>

        <section id="zakaz" className="bg-[#f8fafc] py-14 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-start lg:gap-14">
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#149c94]">Подбор и поставка</p>
              <h2 className="mt-3 text-[32px] font-bold leading-[1.12] tracking-[-0.025em] text-[#10233f] md:text-[48px]">Рассчитать воздуховод для аспирации</h2>
              <p className="mt-5 text-[16px] leading-[1.8] text-[#475569]">
                Укажите диаметр патрубка, длину шланга, что будет проходить по воздуховоду, модель оборудования и количество. Если нужен хомут — добавьте это в комментарии.
              </p>
              <div className="mt-7 rounded-[20px] bg-white p-5 text-[14px] leading-[1.7] text-[#64748b]">
                Комплектуете аспирацию целиком? Посмотрите <Link href="/meshki-dlya-aspiracii/" className="font-semibold text-[#149c94] underline underline-offset-4">мешки для аспирации</Link>, <Link href="/meshki-dlya-struzhkootsosa/" className="font-semibold text-[#149c94] underline underline-offset-4">мешки для стружкоотсоса</Link> и <Link href="/bystrosemnye-homyty/" className="font-semibold text-[#149c94] underline underline-offset-4">быстросъёмные хомуты для мешков</Link>.
              </div>
            </div>
            <div className="rounded-[24px] border border-[#e2e8f0] bg-white p-6 shadow-[0_18px_60px_rgba(15,35,65,0.08)] md:p-8">
              <ProductInquiryForm
                productName="гибкие воздуховоды и шланги для аспирации"
                detailsLabel="Диаметр, длина и задача"
                detailsPlaceholder="Например: Ø100 мм, 5 м, для стружки и опилок"
              />
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="mx-auto max-w-5xl px-5 sm:px-6">
            <h2 className="text-center text-[32px] font-bold tracking-[-0.025em] text-[#10233f] md:text-[48px]">Частые вопросы</h2>
            <div className="mt-9 space-y-4">
              {faq.map((item) => (
                <details key={item.question} className="rounded-[18px] border border-[#e2e8f0] bg-white px-5 py-4 open:shadow-sm md:px-6">
                  <summary className="cursor-pointer pr-8 text-[16px] font-semibold leading-[1.5] text-[#10233f] md:text-[17px]">{item.question}</summary>
                  <p className="mt-4 border-t border-[#edf1f4] pt-4 text-[15px] leading-[1.75] text-[#64748b]">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <FloatingContacts />
    </>
  );
}
