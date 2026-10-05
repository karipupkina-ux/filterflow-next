import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navigation from "../components/Navigation";
import ProductInquiryForm from "../components/ProductInquiryForm";
import FloatingContacts from "../components/feature/FloatingContacts";
import { pageMetadata, SITE_URL } from "@/lib/seo-metadata";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Кассетные фильтры для вентиляции — изготовление на заказ",
    description:
      "Кассетные воздушные фильтры для вентиляции. Изготовление от 1 шт. стандартных и нестандартных размеров под посадочное место и оборудование заказчика.",
    path: "/kassetnye-filtry",
    openGraphTitle: "Кассетные фильтры для вентиляции | FilterFlow",
  }),
  keywords: [
    "кассетные фильтры",
    "кассетный фильтр",
    "кассетные фильтры для вентиляции",
    "воздушный кассетный фильтр",
    "ФВКас",
    "кассетный фильтр G3",
    "кассетный фильтр G4",
    "кассетный фильтр F5",
    "кассетный фильтр F7",
  ],
};

const faq = [
  {
    question: "Какие размеры нужны для заказа кассетного фильтра?",
    answer:
      "Укажите ширину, высоту и толщину рамки. Желательно также прислать фото старого фильтра, маркировку и количество изделий.",
  },
  {
    question: "Можно ли изготовить кассетный фильтр нестандартного размера?",
    answer:
      "Да. Фильтр можно изготовить под конкретное посадочное место вентиляционной установки, если известны размеры и требования к фильтрации.",
  },
  {
    question: "Что означают G3, G4, M5, F5 и другие обозначения?",
    answer:
      "Это классы, которые часто встречаются в старой технической документации и маркировке фильтров. При замене лучше передать маркировку целиком и требования оборудования.",
  },
  {
    question: "Когда выбирать кассетный, а когда карманный фильтр?",
    answer:
      "Кассетный фильтр удобен при ограниченной монтажной глубине, а карманный даёт большую рабочую поверхность. В первую очередь ориентируются на конструкцию и посадочное место вентиляционной установки.",
  },
] as const;

const compareRows = [
  ["Монтажная глубина", "Компактная", "Требуется место под карманы"],
  ["Рабочая поверхность", "Зависит от складчатого исполнения", "Увеличена за счёт глубины карманов"],
  ["Посадочное место", "Жёсткая рамочная кассета", "Рамка + свободная глубина за ней"],
  ["Выбор", "По размерам установки и ТЗ", "По размерам установки и ТЗ"],
] as const;

export default function CassetteFiltersPage() {
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
            name: "Кассетные фильтры",
            item: `${SITE_URL}/kassetnye-filtry/`,
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
          <div className="absolute inset-0 opacity-20 [background:radial-gradient(circle_at_80%_22%,#2dd4bf_0,transparent_34%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-8 px-5 pb-10 pt-5 sm:px-6 md:pb-12 md:pt-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-14">
            <div>
              <div className="mb-4 flex flex-wrap items-center gap-2 text-[13px] text-white/70">
                <Link href="/" className="transition hover:text-white">Главная</Link>
                <span>/</span>
                <span>Кассетные фильтры</span>
              </div>

              <h1 className="max-w-[760px] text-[34px] font-bold leading-[1.08] tracking-[-0.03em] sm:text-[44px] md:text-[58px]">
                Кассетные фильтры для вентиляции и очистки воздуха
              </h1>
              <p className="mt-4 max-w-[760px] text-[16px] leading-[1.75] text-white/80 md:text-[18px]">
                Изготавливаем сменные кассетные воздушные фильтры по стандартным и индивидуальным размерам. Подбираем конструкцию под посадочное место, требуемую толщину рамки и параметры вентиляционного оборудования.
              </p>

              <div className="mt-5 flex flex-wrap gap-2.5 text-[13px] font-medium text-white/90">
                {[
                  "Стандартные и нестандартные размеры",
                  "От 1 штуки",
                  "Для вентиляционных установок",
                  "Подбор по маркировке",
                ].map((item) => (
                  <span key={item} className="rounded-full border border-white/20 bg-white/10 px-4 py-2.5 backdrop-blur-sm">
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a href="#zakaz" className="inline-flex h-[56px] items-center justify-center rounded-[15px] bg-[#22bdb0] px-7 text-[16px] font-semibold text-white transition hover:bg-[#1aa99d]">
                  Рассчитать стоимость
                </a>
                <a href="#razmery" className="inline-flex h-[56px] items-center justify-center rounded-[15px] border border-white/25 px-7 text-[16px] font-semibold text-white transition hover:bg-white/10">
                  Как снять размеры
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[560px]">
              <div className="absolute -inset-4 rounded-[34px] bg-[#2dd4bf]/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#d8dadd] p-3 shadow-[0_30px_80px_rgba(0,0,0,0.28)]">
                <Image
                  src="/images/new-products/cassette-filter.webp"
                  alt="Кассетный воздушный фильтр в металлической рамке"
                  width={1254}
                  height={1254}
                  priority
                  sizes="(max-width: 1023px) 86vw, 44vw"
                  className="h-auto w-full rounded-[22px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-6">
            <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
              <div>
                <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#149c94]">Компактная конструкция</p>
                <h2 className="mt-3 text-[32px] font-bold leading-[1.12] tracking-[-0.025em] text-[#10233f] md:text-[48px]">
                  Что такое кассетный фильтр
                </h2>
                <div className="mt-6 space-y-5 text-[16px] leading-[1.8] text-[#475569]">
                  <p>
                    Кассетный фильтр — сменный фильтрующий элемент в жёсткой рамке. Фильтрующий материал внутри кассеты может иметь плоское или складчатое исполнение, а поддерживающая сетка помогает сохранить форму при прохождении воздушного потока.
                  </p>
                  <p>
                    Такие фильтры применяют в вентиляционных и климатических установках, где важно получить компактный фильтрующий блок с заданными посадочными размерами.
                  </p>
                  <p>
                    Для замены старого фильтра можно прислать его размеры и фото. Если на изделии есть маркировка, лучше передать её полностью — это ускорит подбор исполнения.
                  </p>
                </div>
              </div>

              <div className="overflow-hidden rounded-[24px] border border-[#e2e8f0] bg-[#f2f3f4] p-3 shadow-sm">
                <Image src="/images/new-products/cassette-filters-pair.webp" alt="Кассетные фильтры для системы вентиляции" width={1531} height={1027} sizes="(max-width: 1023px) 92vw, 47vw" className="h-auto w-full rounded-[18px] object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section id="razmery" className="bg-[#f8fafc] py-14 md:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-6">
            <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start lg:gap-16">
              <div>
                <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#149c94]">Параметры изготовления</p>
                <h2 className="mt-3 text-[32px] font-bold leading-[1.12] tracking-[-0.025em] text-[#10233f] md:text-[48px]">
                  Размеры кассетного фильтра
                </h2>
                <p className="mt-5 text-[16px] leading-[1.8] text-[#475569]">
                  Для расчёта нужны три основных габарита: ширина, высота и толщина рамки. Дополнительно укажите маркировку старого фильтра, требуемое количество и особенности конструкции, если они известны.
                </p>
                <div className="mt-7 space-y-3">
                  {[
                    ["A", "ширина кассеты"],
                    ["B", "высота кассеты"],
                    ["C", "толщина / глубина рамки"],
                    ["Класс", "по маркировке, паспорту или техническому заданию"],
                  ].map(([title, text]) => (
                    <div key={title} className="flex gap-4 rounded-[16px] border border-[#dfe6ec] bg-white px-5 py-4">
                      <span className="flex h-8 min-w-8 items-center justify-center rounded-[9px] bg-[#e8f8f6] px-2 font-bold text-[#149c94]">{title}</span>
                      <span className="pt-1 text-[15px] text-[#64748b]">{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <Image src="/images/new-products/cassette-filter.webp" alt="Кассетный фильтр с металлической рамкой" width={1254} height={1254} sizes="(max-width: 639px) 92vw, 42vw" className="h-full w-full rounded-[22px] bg-[#eef0f1] object-cover" />
                <div className="rounded-[22px] border border-[#dfe6ec] bg-white p-6 md:p-7">
                  <h3 className="text-[22px] font-bold text-[#10233f]">Если размеров нет</h3>
                  <p className="mt-4 text-[15px] leading-[1.75] text-[#64748b]">
                    Пришлите фото фильтра рядом с рулеткой, фото маркировки и модель вентиляционной установки. Подскажем, какие параметры ещё нужно измерить.
                  </p>
                  <a href="#zakaz" className="mt-6 inline-flex items-center gap-2 font-semibold text-[#149c94] transition hover:text-[#118b84]">
                    Отправить параметры <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-6">
            <div className="max-w-[970px]">
              <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#149c94]">Маркировка фильтров</p>
              <h2 className="mt-3 text-[32px] font-bold leading-[1.12] tracking-[-0.025em] text-[#10233f] md:text-[48px]">
                Кассетные фильтры G3, G4, M5, F5 и других классов
              </h2>
              <div className="mt-6 space-y-5 text-[16px] leading-[1.8] text-[#475569]">
                <p>
                  В технической документации и на старых фильтрах часто указаны классы G3, G4, M5/F5 и другие обозначения прежних систем классификации. Эту маркировку полезно сохранить в заявке, но для изготовления важны также реальные параметры фильтрующего материала и требования оборудования.
                </p>
                <p>
                  В современной классификации воздушных фильтров общей вентиляции используются показатели эффективности относительно частиц PM. Поэтому мы не используем упрощённый «перевод» старого класса в новый без характеристик конкретного материала.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f8fafc] py-14 md:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#149c94]">Сравнение конструкций</p>
                <h2 className="mt-3 text-[32px] font-bold leading-[1.12] tracking-[-0.025em] text-[#10233f] md:text-[48px]">
                  Кассетный или карманный фильтр
                </h2>
              </div>
              <Link href="/karmannye-filtry/" className="font-semibold text-[#149c94] transition hover:text-[#118b84]">
                Посмотреть карманные фильтры →
              </Link>
            </div>

            <div className="mt-8 overflow-x-auto rounded-[20px] border border-[#dfe6ec] bg-white">
              <table className="w-full min-w-[720px] border-collapse text-left">
                <thead>
                  <tr className="bg-[#eefaf8] text-[14px] text-[#10233f]">
                    <th className="px-5 py-4 font-semibold">Параметр</th>
                    <th className="px-5 py-4 font-semibold">Кассетный фильтр</th>
                    <th className="px-5 py-4 font-semibold">Карманный фильтр</th>
                  </tr>
                </thead>
                <tbody>
                  {compareRows.map((row) => (
                    <tr key={row[0]} className="border-t border-[#edf1f4] text-[14px] leading-[1.55] text-[#64748b] md:text-[15px]">
                      <td className="px-5 py-4 font-semibold text-[#334155]">{row[0]}</td>
                      <td className="px-5 py-4">{row[1]}</td>
                      <td className="px-5 py-4">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-6">
            <div className="max-w-[900px]">
              <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#149c94]">Области применения</p>
              <h2 className="mt-3 text-[32px] font-bold leading-[1.12] tracking-[-0.025em] text-[#10233f] md:text-[48px]">
                Где применяются кассетные фильтры
              </h2>
              <p className="mt-5 text-[16px] leading-[1.8] text-[#475569]">
                Кассетные фильтры используют как сменные элементы в системах вентиляции и очистки воздуха. Конкретное исполнение подбирают по посадочным размерам установки, требуемой ступени фильтрации и условиям эксплуатации.
              </p>
            </div>

            <div className="mt-9 grid gap-5 md:grid-cols-3">
              {[
                ["Вентиляционные установки", "Сменные элементы для приточных и вытяжных систем."],
                ["Коммерческие помещения", "Офисные, торговые и общественные объекты с механической вентиляцией."],
                ["Промышленные системы", "Фильтрация воздуха в составе технологической и общеобменной вентиляции."],
              ].map(([title, text]) => (
                <div key={title} className="rounded-[22px] border border-[#e2e8f0] bg-white p-6 shadow-sm md:p-7">
                  <h3 className="text-[21px] font-bold text-[#10233f]">{title}</h3>
                  <p className="mt-3 text-[15px] leading-[1.7] text-[#64748b]">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="zakaz" className="bg-[#f8fafc] py-14 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-start lg:gap-14">
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#149c94]">Изготовление под заказ</p>
              <h2 className="mt-3 text-[32px] font-bold leading-[1.12] tracking-[-0.025em] text-[#10233f] md:text-[48px]">
                Рассчитать кассетный фильтр
              </h2>
              <p className="mt-5 text-[16px] leading-[1.8] text-[#475569]">
                Укажите ширину, высоту и толщину кассеты, класс или маркировку старого фильтра и количество. Если данных не хватает, опишите оборудование — подскажем, что нужно уточнить.
              </p>
              <div className="mt-7 rounded-[20px] bg-white p-5 text-[14px] leading-[1.7] text-[#64748b]">
                Для большой рабочей поверхности посмотрите <Link href="/karmannye-filtry/" className="font-semibold text-[#149c94] underline underline-offset-4">карманные фильтры</Link>. Для промышленных систем пылеулавливания — <Link href="/filtracionnye-rukava/" className="font-semibold text-[#149c94] underline underline-offset-4">фильтровальные рукава</Link>.
              </div>
            </div>
            <div className="rounded-[24px] border border-[#e2e8f0] bg-white p-6 shadow-[0_18px_60px_rgba(15,35,65,0.08)] md:p-8">
              <ProductInquiryForm
                productName="кассетные фильтры"
                detailsLabel="Размеры и маркировка"
                detailsPlaceholder="Например: 592×592×48 мм, G4, 20 шт."
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
                  <summary className="cursor-pointer pr-8 text-[16px] font-semibold leading-[1.5] text-[#10233f] md:text-[17px]">
                    {item.question}
                  </summary>
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
