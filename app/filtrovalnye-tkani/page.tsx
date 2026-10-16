import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navigation from "../components/Navigation";
import ProductInquiryForm from "../components/ProductInquiryForm";
import SeeAlsoLinks from "../components/SeeAlsoLinks";
import ProductGuides from "../components/ProductGuides";
import FloatingContacts from "../components/feature/FloatingContacts";
import { pageMetadata, SITE_URL } from "@/lib/seo-metadata";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Фильтровальные ткани для рукавов и аспирации — метражом",
    description:
      "Фильтровальные ткани для рукавов и аспирации: полиэстер, PTFE, PPS, P84, мета-арамид и другие материалы. Продажа метражом и подбор под условия работы.",
    path: "/filtrovalnye-tkani",
    openGraphTitle: "Фильтровальные ткани для промышленной фильтрации | FilterFlow",
  }),
  keywords: [
    "фильтровальные ткани",
    "фильтровальная ткань",
    "ткань для фильтровальных рукавов",
    "ткань для аспирации",
    "ткань для мешков стружкоотсоса",
    "фильтровальное полотно",
    "фильтрующая ткань",
    "антистатическая фильтровальная ткань",
    "термостойкая фильтровальная ткань",
  ],
};

const materials = [
  {
    id: "polyester",
    title: "Полиэстеровая фильтровальная ткань",
    description:
      "Универсальный материал для сухой промышленной аспирации и пылеулавливания. Полиэстер ценят за механическую прочность, износостойкость и стабильную работу с большинством неагрессивных сухих пылей. Доступны исполнения разной плотности и варианты дополнительной обработки под условия эксплуатации.",
    note:
      "Подходит для изготовления фильтровальных рукавов, мешков аспирации и стружкоотсосов. При повышенной влажности и риске конденсации материал подбирают с учётом режима работы.",
    images: [
      ["/images/filter-fabrics/Фильтровальное полотно светло-графитовый фон.webp", "Полиэстеровая фильтровальная ткань в рулоне"],
      ["/images/filter-fabrics/Фильтровальное полотно без пальцев светло-графитовый фон.webp", "Полиэстеровое фильтровальное полотно"],
      ["/images/filter-fabrics/ChatGPT_Image_7_iyun_2026.webp", "Полиэстеровая ткань для промышленной фильтрации"],
    ],
  },
  {
    id: "antistatic",
    title: "Антистатическая полиэстеровая ткань",
    description:
      "Фильтровальная ткань с проводящими элементами применяется там, где при движении сухой пыли возможно накопление статического заряда. Проводящая структура помогает отводить заряд при корректном заземлении фильтрующей системы.",
    note:
      "Возможны исполнения с дополнительной водо- и маслоотталкивающей обработкой. Антистатический материал является частью комплекса мер безопасности и подбирается вместе с конструкцией оборудования.",
    images: [
      ["/images/filter-fabrics/полиэстер антистатик с пропиткой масловодооталкивмбшей.webp", "Антистатическая полиэстеровая фильтровальная ткань"],
      ["/images/filter-fabrics/filter_closeup.webp", "Антистатическая фильтрующая ткань крупным планом"],
    ],
  },
  {
    id: "polypropylene",
    title: "Полипропиленовая фильтровальная ткань",
    description:
      "Полипропилен отличается низким влагопоглощением и хорошей стойкостью ко многим кислотным и щелочным средам. Его используют в процессах, где важна химическая совместимость материала с рабочей средой.",
    note:
      "Выбор полипропилена зависит от температуры, состава газа или жидкости и характера загрязнений. Для рукавной фильтрации материал согласуют с режимом регенерации.",
    images: [
      ["/images/filter-fabrics/Polypropylene-Needle-Felt-Filter-Cloth-03-clean.webp", "Полипропиленовая фильтровальная ткань"],
    ],
  },
  {
    id: "ptfe",
    title: "Фильтровальная ткань PTFE",
    description:
      "Политетрафторэтилен применяют для сложных промышленных процессов, где требуется высокая химическая стойкость и стабильность фильтрующего материала. Низкая склонность поверхности к налипанию помогает работе с трудными пылевыми нагрузками.",
    note:
      "PTFE используют как основной материал, а также в виде мембран и специальных обработок на других фильтрующих основах. Конкретное исполнение выбирают по составу газов и условиям регенерации.",
    images: [
      ["/images/filter-fabrics/PTFE-Needle-Felt-Filter-Cloth-04-clean.webp", "Фильтровальная ткань PTFE"],
    ],
  },
  {
    id: "fiberglass",
    title: "Фильтровальная ткань из стекловолокна",
    description:
      "Стекловолоконные материалы применяют в высокотемпературной промышленной газоочистке. Они отличаются хорошей размерной стабильностью и могут использоваться с защитными покрытиями или мембранами, если этого требуют условия процесса.",
    note:
      "Стекловолокно чувствительнее к механическому перегибу и абразивному воздействию, поэтому конструкцию рукава и режим очистки подбирают особенно внимательно.",
    images: [
      ["/images/filter-fabrics/Фильтрующая ткань из иглопробивного войлока из стекловолокна.webp", "Стекловолоконная фильтровальная ткань"],
      ["/images/filter-fabrics/fiberglass-fg.webp", "Фильтровальный рукав из стекловолоконной ткани"],
    ],
  },
  {
    id: "p84",
    title: "Полиимидная фильтровальная ткань P84",
    description:
      "Полиимид P84 используют для высокотемпературной очистки промышленных газов и тонкодисперсной пыли. Особая форма волокна увеличивает рабочую поверхность материала и способствует эффективному формированию фильтрующего слоя.",
    note:
      "При подборе учитывают влажность, возможность конденсации и химический состав газа. Для сложных процессов доступны специальные пропитки и комбинированные исполнения.",
    images: [
      ["/images/filter-fabrics/P84-Needle-Felt-Filter-Cloth-03-clean.webp", "Полиимидная фильтровальная ткань P84"],
      ["/images/filter-fabrics/polyimide-p84.webp", "Фильтрующая ткань из полиимида"],
      ["/images/filter-fabrics/полиимид Impregnation-P84-Needle-Felt-clean.webp", "Полиимидная фильтровальная ткань со специальной обработкой"],
    ],
  },
  {
    id: "aramid",
    title: "Мета-арамидная фильтровальная ткань",
    description:
      "Мета-арамидные материалы, включая исполнения типа Nomex, применяют для горячих сухих газов, когда обычного полиэстера уже недостаточно. Материал сочетает термостойкость, механическую прочность и хорошую стойкость к истиранию.",
    note:
      "Для влажных газов и процессов с возможной кислой конденсацией необходим отдельный подбор. Возможны специальные поверхностные обработки и антистатические исполнения.",
    images: [
      ["/images/filter-fabrics/Nomex-Aramid-Needle-Punched-Felt-04-clean.webp", "Мета-арамидная фильтровальная ткань"],
      ["/images/filter-fabrics/Filter-bag-Nomex.webp", "Фильтровальный рукав из мета-арамидной ткани"],
    ],
  },
  {
    id: "pps",
    title: "Фильтровальная ткань PPS",
    description:
      "Полифениленсульфид используют в промышленной газоочистке при сочетании повышенной температуры, влажности и химически активных компонентов. Материал отличается низким влагопоглощением и стойкостью ко многим кислотным и щелочным средам.",
    note:
      "Для PPS важно учитывать окислительную составляющую газового потока, поэтому материал выбирают не только по температуре, но и по полному составу среды.",
    images: [
      ["/images/filter-fabrics/PPS.webp", "Фильтровальная ткань PPS"],
    ],
  },
  {
    id: "fms",
    title: "Композитная фильтровальная ткань FMS",
    description:
      "FMS — группа композитных высокотемпературных фильтрующих материалов. В зависимости от производителя и исполнения в составе сочетаются стекловолокно и термостойкие волокна, чтобы получить баланс прочности, температурной и химической стойкости.",
    note:
      "FMS применяют в тяжёлых промышленных системах пылегазоочистки. Состав конкретной ткани обязательно уточняется перед подбором под оборудование.",
    images: [
      ["/images/filter-fabrics/FMS-needle-punched-felt-03-clean.webp", "Композитная фильтровальная ткань FMS"],
    ],
  },
  {
    id: "acrylic",
    title: "Акриловая фильтровальная ткань",
    description:
      "Акриловые фильтрующие материалы востребованы в процессах, где полиэстеру не подходит сочетание влажности и химической среды. Они применяются для промышленного пылеулавливания и газовой фильтрации при умеренных рабочих температурах.",
    note:
      "Акрил может быть полезен в условиях повышенной влажности и ряда кислотных сред, но химическую совместимость всегда проверяют по конкретному технологическому процессу.",
    images: [
      ["/images/filter-fabrics/Акриловый иглопробивной войлок.webp", "Акриловая фильтровальная ткань"],
    ],
  },
  {
    id: "polyamide",
    title: "Полиамидная фильтровальная ткань",
    description:
      "Полиамидные ткани отличаются высокой механической прочностью и стойкостью к истиранию. Их применяют в различных фильтрационных процессах, когда важны прочность полотна и устойчивость к механическим нагрузкам.",
    note:
      "Назначение полиамидной ткани зависит от химического состава среды, температуры и конструкции фильтра. Для рукавов и мешков материал подбирается по условиям конкретной установки.",
    images: [
      ["/images/filter-fabrics/Три слоя белого фильтровального полотна(5).webp", "Полиамидная фильтровальная ткань"],
    ],
  },
  {
    id: "woven-polyester",
    title: "Полиэфирная тканая фильтровальная ткань",
    description:
      "Тканое полиэфирное полотно выбирают для задач, где важны стабильная геометрия, прочность и предсказуемое поведение материала под механической нагрузкой. Это отдельное конструктивное исполнение полиэфирного фильтрующего материала.",
    note:
      "Тканые материалы российского и импортного производства подбираются под конкретный тип фильтра, пыль, способ регенерации и условия эксплуатации.",
    images: [
      ["/images/filter-fabrics/Полиэфирный игольчатый войлок.webp", "Полиэфирная тканая фильтровальная ткань"],
      ["/images/filter-fabrics/ChatGPT_Image_7_iyun_2026.webp", "Тканое фильтровальное полотно"],
    ],
  },
] as const;

const selectionFactors = [
  ["Температура процесса", "Определяет базовую группу материалов и допустимые режимы работы."],
  ["Влажность и конденсация", "Важны для оценки гидролиза, налипания пыли и необходимости защитной обработки."],
  ["Химический состав", "Кислоты, щёлочи, растворители и окислители по-разному воздействуют на волокна."],
  ["Характер пыли", "Учитывают дисперсность, абразивность, липкость и склонность к электризации."],
  ["Способ регенерации", "Импульсная продувка, встряхивание и другие режимы предъявляют разные требования к ткани."],
  ["Конструкция фильтра", "Материал согласуют с размерами рукава или мешка, каркасом и способом крепления."],
] as const;

const faq = [
  {
    question: "Можно ли купить фильтровальную ткань метражом?",
    answer:
      "Да. Фильтровальные ткани доступны для продажи метражом. Цена и фактически доступный метраж зависят от материала и текущего наличия, поэтому рассчитываются по запросу.",
  },
  {
    question: "Как выбрать ткань для фильтровального рукава?",
    answer:
      "Для подбора нужны условия эксплуатации: назначение установки, температура, влажность, химический состав газа, тип и свойства пыли, способ регенерации и сведения о текущем материале, если он известен.",
  },
  {
    question: "Можно ли подобрать материал для мешка стружкоотсоса или аспирации?",
    answer:
      "Да. Для деревообработки и других аспирационных систем материал выбирают по типу пыли, требуемой воздухопроницаемости, режиму работы и конструкции мешка. При необходимости можно одновременно рассчитать пошив изделия.",
  },
  {
    question: "Когда нужна антистатическая фильтровальная ткань?",
    answer:
      "Антистатическое исполнение рассматривают при работе с пылью, способной накапливать электростатический заряд. Такое полотно работает как часть правильно спроектированной и заземлённой системы, а не как отдельная гарантия взрывобезопасности.",
  },
] as const;

export default function FilterFabricsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Главная", item: SITE_URL + "/" },
          {
            "@type": "ListItem",
            position: 2,
            name: "Фильтровальные ткани",
            item: SITE_URL + "/filtrovalnye-tkani/",
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
      <main id="top" className="bg-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
        />

        <section className="relative overflow-hidden bg-[#0f2341] pt-[124px] text-white sm:pt-[116px] lg:pt-[94px]">
          <div className="absolute inset-0 opacity-20 [background:radial-gradient(circle_at_78%_20%,#2dd4bf_0,transparent_34%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-9 px-5 pb-12 pt-6 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-14">
            <div>
              <div className="mb-4 flex gap-2 text-[13px] text-white/70">
                <Link href="/">Главная</Link><span>/</span><span>Фильтровальные ткани</span>
              </div>
              <h1 className="text-[34px] font-bold leading-[1.08] tracking-[-0.03em] sm:text-[44px] md:text-[58px]">
                Фильтровальные ткани для рукавов и аспирации
              </h1>
              <p className="mt-4 max-w-[760px] text-[16px] leading-[1.75] text-white/80 md:text-[18px]">
                Ткани для фильтровальных рукавов, мешков аспирации и стружкоотсосов.
                Подбираем материал под пыль, температуру, влажность, химическую среду
                и способ регенерации. Цена и доступный метраж — по запросу.
              </p>
              <div className="mt-5 flex flex-wrap gap-2.5 text-[13px] font-medium">
                {["Продажа метражом", "Для рукавов и мешков", "Антистатические исполнения", "Термостойкие материалы"].map((item) => (
                  <span key={item} className="rounded-full border border-white/20 bg-white/10 px-4 py-2.5">{item}</span>
                ))}
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a href="#zakaz" className="inline-flex h-[56px] items-center justify-center rounded-[15px] bg-[#22bdb0] px-7 font-semibold">
                  Запросить цену и метраж
                </a>
                <a href="#materialy" className="inline-flex h-[56px] items-center justify-center rounded-[15px] border border-white/25 px-7 font-semibold">
                  Смотреть ткани
                </a>
              </div>
            </div>
            <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[#d8dadd] shadow-[0_30px_80px_rgba(0,0,0,0.28)]">
              <Image
                src="/images/filter-fabrics/FMS-needle-punched-felt-03-clean.webp"
                alt="Фильтровальная ткань FMS для промышленных рукавов и мешков"
                width={512}
                height={384}
                priority
                sizes="(max-width:1023px) 92vw,48vw"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-16">
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#149c94]">Материал под условия работы</p>
              <h2 className="mt-3 text-[32px] font-bold leading-[1.12] text-[#10233f] md:text-[48px]">
                Какую фильтровальную ткань выбрать
              </h2>
              <div className="mt-6 space-y-5 text-[16px] leading-[1.8] text-[#475569]">
                <p>
                  Универсальной ткани для всех установок не существует. Материал выбирают
                  одновременно по температуре, влажности, химическому составу потока,
                  свойствам пыли и способу очистки фильтра.
                </p>
                <p>
                  Для обычной сухой аспирации часто применяют полиэстер, а для более
                  сложных условий рассматривают акрил, PPS, мета-арамид, P84, PTFE,
                  стекловолокно или композитные материалы.
                </p>
                <p>
                  Из выбранной ткани можно изготовить{" "}
                  <Link href="/filtracionnye-rukava/" className="font-semibold text-[#149c94] underline underline-offset-4">фильтровальные рукава</Link>,{" "}
                  <Link href="/meshki-dlya-aspiracii/" className="font-semibold text-[#149c94] underline underline-offset-4">мешки для аспирации</Link>{" "}
                  и{" "}
                  <Link href="/meshki-dlya-struzhkootsosa/" className="font-semibold text-[#149c94] underline underline-offset-4">мешки для стружкоотсоса</Link>.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Image src="/images/filter-fabrics/Рукава фильтровальные светло-графитовый фон.webp" alt="Фильтровальные рукава из разных тканей" width={1000} height={750} className="h-full w-full rounded-[22px] object-cover" />
              <Image src="/images/filter-fabrics/Фильтровальные манжеты WebP.webp" alt="Фильтровальные манжеты из промышленной ткани" width={1000} height={574} className="h-full w-full rounded-[22px] object-cover" />
              <Image src="/images/filter-fabrics/Фильтровальные рукава светло-графитовый фон.webp" alt="Фильтровальные рукава из промышленных тканей" width={980} height={980} className="col-span-2 h-[260px] w-full rounded-[22px] bg-[#eef0f1] object-contain p-3 sm:h-[320px] sm:p-4" />
            </div>
          </div>
        </section>

        <section id="materialy" className="bg-[#f8fafc] py-14 md:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-6">
            <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#149c94]">Ассортимент</p>
            <h2 className="mt-3 max-w-[950px] text-[32px] font-bold leading-[1.12] text-[#10233f] md:text-[48px]">
              Виды фильтровальных тканей
            </h2>
            <p className="mt-5 max-w-[980px] text-[16px] leading-[1.8] text-[#64748b]">
              Ниже — основные материалы для промышленной фильтрации. Точное исполнение,
              наличие, цена и доступный метраж уточняются по запросу.
            </p>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {materials.map((material) => (
                <article key={material.id} id={material.id} className="overflow-hidden rounded-[24px] border border-[#e2e8f0] bg-white shadow-sm">
                  <div className={`grid gap-2 bg-[#eef0f1] p-2 ${material.images.length === 1 ? "grid-cols-1" : material.images.length === 2 ? "grid-cols-2" : "grid-cols-3"}`}>
                    {material.images.map(([src, alt]) => (
                      <Image
                        key={src + alt}
                        src={src}
                        alt={alt}
                        width={760}
                        height={760}
                        sizes="(max-width:1023px) 45vw, 22vw"
                        className="aspect-square h-full w-full rounded-[18px] object-cover"
                      />
                    ))}
                  </div>
                  <div className="p-6 md:p-7">
                    <h3 className="text-[25px] font-bold leading-tight text-[#10233f] md:text-[28px]">{material.title}</h3>
                    <p className="mt-4 text-[15px] leading-[1.75] text-[#475569]">{material.description}</p>
                    <p className="mt-4 rounded-[16px] bg-[#f5faf9] px-4 py-3 text-[14px] leading-[1.65] text-[#526170]">{material.note}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-6">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
              <div>
                <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#149c94]">Подбор материала</p>
                <h2 className="mt-3 text-[32px] font-bold leading-[1.12] text-[#10233f] md:text-[48px]">
                  Что нужно прислать для расчёта и подбора
                </h2>
                <p className="mt-5 text-[16px] leading-[1.8] text-[#475569]">
                  Для цены и корректного подбора достаточно описать условия работы и нужный объём.
                  Если марка материала неизвестна, отправьте фото старой ткани или фильтрующего элемента.
                </p>
              <a
                href="#zakaz"
                className="mt-6 inline-flex min-h-[50px] items-center justify-center rounded-[14px] bg-[#149c94] px-7 text-[15px] font-semibold text-white transition hover:bg-[#118b84]"
              >
                Отправить параметры
                <span className="ml-2 text-[18px] leading-none">→</span>
              </a>
              </div>
              <div className="overflow-hidden rounded-[20px] border border-[#dfe6ec] bg-white">
                {selectionFactors.map(([name, value], index) => (
                  <div key={name} className={`grid gap-2 px-5 py-4 text-[14px] md:grid-cols-[0.8fr_1.2fr] md:gap-4 md:text-[15px] ${index ? "border-t border-[#edf1f4]" : ""}`}>
                    <span className="font-semibold text-[#1e293b]">{name}</span>
                    <span className="text-[#64748b]">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#0f2341] py-14 text-white md:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14">
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#4ad8cc]">Для промышленной фильтрации</p>
              <h2 className="mt-3 text-[32px] font-bold leading-[1.12] md:text-[48px]">
                Ткань, рукав и каркас должны работать как одна система
              </h2>
              <p className="mt-5 text-[16px] leading-[1.8] text-white/78">
                При подборе фильтровального материала важно учитывать не только саму ткань,
                но и геометрию элемента, нагрузку, способ регенерации и контакт с каркасом.
                Для рукавных фильтров можно одновременно подобрать{" "}
                <Link href="/karkasy-dlya-filtrovalnyh-rukavov/" className="font-semibold text-[#4ad8cc] underline underline-offset-4">
                  металлический каркас
                </Link>.
              </p>
              <p className="mt-4 text-[16px] leading-[1.8] text-white/78">
                Работаем с тканями российского и импортного производства. Для расчёта
                достаточно прислать назначение материала, фото или маркировку старого
                фильтра и условия эксплуатации.
              </p>
            </div>
            <div className="rounded-[24px] bg-white/10 p-6 ring-1 ring-white/15 md:p-8">
              <Image
                src="/images/filter-fabrics/ChatGPT_Image_3_iyun_2026.webp"
                alt="Фильтровальная ткань для изготовления промышленных фильтров"
                width={760}
                height={506}
                className="w-full rounded-[18px] object-cover"
              />
              <div className="mt-5 rounded-[16px] bg-white/10 px-5 py-4 text-[15px] leading-[1.7] text-white/85">
                Цена и доступный метраж рассчитываются индивидуально по материалу и текущему наличию.
              </div>
            </div>
          </div>
        </section>

        <section id="zakaz" className="py-14 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.88fr_1.12fr] lg:gap-14">
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#149c94]">Цена и метраж по запросу</p>
              <h2 className="mt-3 text-[32px] font-bold leading-[1.12] text-[#10233f] md:text-[48px]">
                Запросить фильтровальную ткань
              </h2>
              <p className="mt-5 text-[16px] leading-[1.8] text-[#475569]">
                Напишите нужный материал или опишите условия работы. Если марка ткани
                неизвестна, подберём подходящие варианты по назначению и среде эксплуатации.
              </p>
            </div>
            <div className="rounded-[24px] border border-[#e2e8f0] bg-white p-6 shadow-[0_18px_60px_rgba(15,35,65,0.08)] md:p-8">
              <ProductInquiryForm
                productName="фильтровальные ткани"
                detailsLabel="Материал и назначение"
                detailsPlaceholder="Например: ткань для фильтровальных рукавов, сухая древесная пыль; нужен подбор материала"
              />
            </div>
          </div>
        </section>

        <section className="bg-[#f8fafc] py-14 md:py-20">
          <div className="mx-auto max-w-5xl px-5 sm:px-6">
            <h2 className="text-center text-[32px] font-bold text-[#10233f] md:text-[46px]">
              Частые вопросы о фильтровальных тканях
            </h2>
            <div className="mt-9 grid gap-4">
              {faq.map((item) => (
                <details key={item.question} className="rounded-[20px] border border-[#e2e8f0] bg-white p-5">
                  <summary className="cursor-pointer list-none text-[17px] font-semibold text-[#10233f]">{item.question}</summary>
                  <p className="mt-4 text-[15px] leading-[1.75] text-[#64748b]">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <ProductGuides items={[
          {
            title: "Как выбрать фильтровальную ткань для промышленной аспирации",
            href: "/blog/kak-vybrat-filtrovalnuyu-tkan/",
            text: "Какие параметры процесса и материала нужно учесть до заказа.",
          },
          {
            title: "Когда нужна антистатическая фильтровальная ткань",
            href: "/blog/kogda-nuzhna-antistaticheskaya-tkan/",
            text: "Антистатик, заземление и условия, при которых обычного материала недостаточно.",
          },
        ]} />
        <SeeAlsoLinks excludeHref="/filtrovalnye-tkani/" />
        <FloatingContacts />
      </main>
    </>
  );
}
