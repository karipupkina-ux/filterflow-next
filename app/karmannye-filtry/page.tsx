import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navigation from "../components/Navigation";
import ProductInquiryForm from "../components/ProductInquiryForm";
import FloatingContacts from "../components/feature/FloatingContacts";
import { pageMetadata, SITE_URL } from "@/lib/seo-metadata";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Карманные фильтры для вентиляции — изготовление на заказ",
    description:
      "Карманные воздушные фильтры для вентиляции. Изготовление от 1 шт. по размерам заказчика: рамка, глубина и количество карманов, подбор по маркировке и ТЗ.",
    path: "/karmannye-filtry",
    openGraphTitle: "Карманные фильтры для вентиляции | FilterFlow",
  }),
  keywords: [
    "карманные фильтры",
    "карманный фильтр",
    "карманные фильтры для вентиляции",
    "фильтр карманный воздушный",
    "ФВК",
    "фильтр G3",
    "фильтр G4",
    "фильтр F5",
    "фильтр F7",
    "фильтр F8",
    "фильтр F9",
  ],
};

const parameters = [
  ["A", "ширина рамки"],
  ["B", "высота рамки"],
  ["C", "глубина карманов"],
  ["Количество карманов", "шт."],
  ["Толщина рамки", "мм"],
  ["Класс фильтрации", "по маркировке или ТЗ"],
] as const;

const faq = [
  {
    question: "Какие размеры нужны для изготовления карманного фильтра?",
    answer:
      "Нужны ширина и высота рамки, глубина карманов, количество карманов и толщина рамки. Если параметры неизвестны, можно прислать фото старого фильтра и его маркировку.",
  },
  {
    question: "Можно ли изготовить карманный фильтр нестандартного размера?",
    answer:
      "Да. Карманные фильтры можно изготовить по индивидуальным размерам под посадочное место конкретной вентиляционной установки.",
  },
  {
    question: "Что делать, если на старом фильтре указано G3, G4, F7 или F9?",
    answer:
      "Укажите эту маркировку в заявке и приложите фото фильтра. Для точного подбора учитываются конструкция, материал и требования оборудования.",
  },
  {
    question: "Чем карманный фильтр отличается от кассетного?",
    answer:
      "Карманный фильтр имеет несколько глубоких карманов и большую рабочую поверхность, а кассетный выполнен в более компактной рамочной конструкции. Выбор зависит от посадочного места и параметров вентиляционной установки.",
  },
] as const;

export default function PocketFiltersPage() {
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
            name: "Карманные фильтры",
            item: `${SITE_URL}/karmannye-filtry/`,
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
                <span>Карманные фильтры</span>
              </div>

              <h1 className="max-w-[760px] text-[34px] font-bold leading-[1.08] tracking-[-0.03em] sm:text-[44px] md:text-[58px]">
                Карманные фильтры для вентиляции и очистки воздуха
              </h1>
              <p className="mt-4 max-w-[760px] text-[16px] leading-[1.75] text-white/80 md:text-[18px]">
                Изготавливаем карманные воздушные фильтры по стандартным и индивидуальным размерам. Подбираем конструкцию рамки, глубину и количество карманов под посадочное место и требования вентиляционной установки.
              </p>

              <div className="mt-5 flex flex-wrap gap-2.5 text-[13px] font-medium text-white/90">
                {[
                  "По размерам заказчика",
                  "От 1 штуки",
                  "Для систем вентиляции",
                  "Помощь с подбором",
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
                <a href="#konstrukciya" className="inline-flex h-[56px] items-center justify-center rounded-[15px] border border-white/25 px-7 text-[16px] font-semibold text-white transition hover:bg-white/10">
                  Какие размеры нужны
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[610px]">
              <div className="absolute -inset-4 rounded-[34px] bg-[#2dd4bf]/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#d8dadd] shadow-[0_30px_80px_rgba(0,0,0,0.28)]">
                <Image
                  src="/images/new-products/pocket-filter-clean.webp"
                  alt="Карманный воздушный фильтр для системы вентиляции"
                  width={1586}
                  height={992}
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
                <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#149c94]">Воздушная фильтрация</p>
                <h2 className="mt-3 text-[32px] font-bold leading-[1.12] tracking-[-0.025em] text-[#10233f] md:text-[48px]">
                  Что такое карманный фильтр
                </h2>
                <div className="mt-6 space-y-5 text-[16px] leading-[1.8] text-[#475569]">
                  <p>
                    Карманный фильтр состоит из жёсткой рамки и нескольких карманов из фильтрующего материала. Такая конструкция увеличивает рабочую поверхность фильтрации при относительно компактном установочном сечении.
                  </p>
                  <p>
                    Фильтры применяют в приточной и вытяжной вентиляции, вентиляционных установках и многоступенчатых системах очистки воздуха. Исполнение выбирают по посадочным размерам, требуемой степени очистки и параметрам воздушного потока.
                  </p>
                  <p>
                    Если точное обозначение неизвестно, достаточно прислать фото, маркировку и основные размеры старого фильтра — поможем определить параметры для изготовления замены.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Image src="/images/new-products/five-pocket-filter.webp" alt="Карманный фильтр с пятью фильтрующими карманами" width={1254} height={1254} sizes="(max-width: 1023px) 45vw, 23vw" className="h-full w-full rounded-[22px] bg-[#f4f5f6] object-cover" />
                <Image src="/images/new-products/multi-pocket-filter.webp" alt="Многокарманный фильтр для вентиляционной установки" width={1254} height={1254} sizes="(max-width: 1023px) 45vw, 23vw" className="h-full w-full rounded-[22px] bg-[#f4f5f6] object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section id="konstrukciya" className="bg-[#f8fafc] py-14 md:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-6">
            <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-16">
              <div className="overflow-hidden rounded-[24px] border border-[#e2e8f0] bg-white p-3 shadow-sm">
                <Image src="/images/new-products/filter-dimensions.webp" alt="Схема размеров карманного фильтра: ширина A, высота B и глубина C" width={1450} height={1085} sizes="(max-width: 1023px) 92vw, 52vw" className="h-auto w-full rounded-[18px] object-contain" />
              </div>
              <div>
                <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#149c94]">Параметры заказа</p>
                <h2 className="mt-3 text-[32px] font-bold leading-[1.12] tracking-[-0.025em] text-[#10233f] md:text-[48px]">
                  Какие размеры нужны
                </h2>
                <p className="mt-5 text-[16px] leading-[1.8] text-[#475569]">
                  Для расчёта желательно указать габариты рамки, глубину карманов и их количество. Если изделие нестандартное, приложите фото старого фильтра и места установки.
                </p>
                <div className="mt-7 overflow-hidden rounded-[18px] border border-[#dfe6ec] bg-white">
                  {parameters.map(([name, value], index) => (
                    <div key={name} className={`grid grid-cols-[1fr_1.15fr] gap-4 px-5 py-4 text-[14px] md:text-[15px] ${index ? "border-t border-[#edf1f4]" : ""}`}>
                      <span className="font-semibold text-[#1e293b]">{name}</span>
                      <span className="text-[#64748b]">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-6">
            <div className="max-w-[950px]">
              <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#149c94]">Классы фильтрации</p>
              <h2 className="mt-3 text-[32px] font-bold leading-[1.12] tracking-[-0.025em] text-[#10233f] md:text-[48px]">
                G3, G4, M5, M6, F7, F8, F9 и современная классификация
              </h2>
              <div className="mt-6 space-y-5 text-[16px] leading-[1.8] text-[#475569]">
                <p>
                  В паспортах старого оборудования и запросах на замену до сих пор часто встречаются обозначения G3, G4, M5, M6, F7, F8 и F9. При заказе можно указать класс, который написан на установленном фильтре, и приложить фото маркировки.
                </p>
                <p>
                  Для воздушных фильтров общей вентиляции также применяется классификация по эффективности относительно частиц PM. Поэтому точный подбор нового изделия выполняют по требованиям оборудования и характеристикам конкретного фильтрующего материала, а не по упрощённой таблице соответствий.
                </p>
              </div>
            </div>

            <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["G3–G4", "обозначения грубой фильтрации, встречающиеся в старой документации"],
                ["M5–M6", "обозначения средней ступени фильтрации в прежних системах"],
                ["F7–F9", "обозначения более тонкой очистки в старых спецификациях"],
                ["ISO 16890", "современный подход к классификации фильтров общей вентиляции по PM"],
              ].map(([title, text]) => (
                <div key={title} className="rounded-[20px] border border-[#e2e8f0] bg-white p-5 shadow-sm">
                  <div className="text-[21px] font-bold text-[#10233f]">{title}</div>
                  <p className="mt-2 text-[14px] leading-[1.65] text-[#64748b]">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f8fafc] py-14 md:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              <div className="rounded-[24px] border border-[#e2e8f0] bg-white p-7 md:p-9">
                <h2 className="text-[28px] font-bold tracking-[-0.02em] text-[#10233f] md:text-[36px]">Где применяются</h2>
                <div className="mt-6 grid gap-3 text-[15px] leading-[1.65] text-[#475569]">
                  {[
                    "приточные и вытяжные вентиляционные установки",
                    "системы кондиционирования и обработки воздуха",
                    "производственные и коммерческие помещения",
                    "многоступенчатые системы фильтрации воздуха",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#22bdb0]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[24px] border border-[#cfe8e5] bg-[#eefaf8] p-7 md:p-9">
                <h2 className="text-[28px] font-bold tracking-[-0.02em] text-[#10233f] md:text-[36px]">Карманный или кассетный?</h2>
                <p className="mt-5 text-[15px] leading-[1.75] text-[#475569]">
                  Карманные фильтры дают большую рабочую поверхность, но требуют места по глубине. Если установка рассчитана на компактный рамочный элемент, посмотрите кассетные фильтры.
                </p>
                <Link href="/kassetnye-filtry/" className="mt-7 inline-flex items-center gap-2 font-semibold text-[#149c94] transition hover:text-[#118b84]">
                  Кассетные фильтры для вентиляции <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="zakaz" className="py-14 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-start lg:gap-14">
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#149c94]">Изготовление под заказ</p>
              <h2 className="mt-3 text-[32px] font-bold leading-[1.12] tracking-[-0.025em] text-[#10233f] md:text-[48px]">
                Рассчитать карманный фильтр
              </h2>
              <p className="mt-5 text-[16px] leading-[1.8] text-[#475569]">
                Пришлите размеры рамки, глубину и количество карманов, класс фильтрации и необходимое количество изделий. Если данных нет — укажите модель оборудования или приложите описание старого фильтра в комментарии.
              </p>
              <div className="mt-7 rounded-[20px] bg-[#f8fafc] p-5 text-[14px] leading-[1.7] text-[#64748b]">
                Нужна другая конструкция? Посмотрите также <Link href="/kassetnye-filtry/" className="font-semibold text-[#149c94] underline underline-offset-4">кассетные фильтры</Link> и <Link href="/filtracionnye-rukava/" className="font-semibold text-[#149c94] underline underline-offset-4">фильтровальные рукава</Link>.
              </div>
            </div>
            <div className="rounded-[24px] border border-[#e2e8f0] bg-white p-6 shadow-[0_18px_60px_rgba(15,35,65,0.08)] md:p-8">
              <ProductInquiryForm
                productName="карманные фильтры"
                detailsLabel="Размеры и класс фильтрации"
                detailsPlaceholder="Например: 592×592, глубина 600 мм, 6 карманов, G4"
              />
            </div>
          </div>
        </section>

        <section className="bg-[#f8fafc] py-14 md:py-20">
          <div className="mx-auto max-w-5xl px-5 sm:px-6">
            <h2 className="text-center text-[32px] font-bold tracking-[-0.025em] text-[#10233f] md:text-[48px]">Частые вопросы</h2>
            <div className="mt-9 space-y-4">
              {faq.map((item) => (
                <details key={item.question} className="group rounded-[18px] border border-[#e2e8f0] bg-white px-5 py-4 open:shadow-sm md:px-6">
                  <summary className="cursor-pointer list-none pr-8 text-[16px] font-semibold leading-[1.5] text-[#10233f] marker:hidden md:text-[17px]">
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
