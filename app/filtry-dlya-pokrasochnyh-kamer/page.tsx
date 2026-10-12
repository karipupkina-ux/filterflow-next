import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navigation from "../components/Navigation";
import ProductInquiryForm from "../components/ProductInquiryForm";
import SeeAlsoLinks from "../components/SeeAlsoLinks";
import FloatingContacts from "../components/feature/FloatingContacts";
import { pageMetadata, SITE_URL } from "@/lib/seo-metadata";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Фильтры для покрасочных камер — потолочные, напольные, лабиринтные",
    description:
      "Фильтры для покрасочных и окрасочно-сушильных камер: потолочные F5, напольные Paint Stop, картонные лабиринтные и кокосово-волокнистые. Подбор по размеру и модели камеры.",
    path: "/filtry-dlya-pokrasochnyh-kamer",
    openGraphTitle: "Фильтры для покрасочных камер | FilterFlow",
  }),
  keywords: [
    "фильтры для покрасочных камер",
    "фильтры для окрасочных камер",
    "фильтр окрасочно сушильной камеры",
    "напольный фильтр Paint Stop",
    "потолочный фильтр F5",
    "картонный лабиринтный фильтр",
    "фильтр Andreae",
    "кокосовый фильтр покрасочной камеры",
  ],
};

const faq = [
  {
    question: "Чем отличаются потолочные и напольные фильтры?",
    answer:
      "Потолочный фильтр очищает приточный воздух перед рабочей зоной и помогает уменьшить количество пыли на окрашиваемой поверхности. Напольный Paint Stop работает на вытяжной стороне и задерживает красочный туман и частицы ЛКМ.",
  },
  {
    question: "Для чего нужен картонный лабиринтный фильтр?",
    answer:
      "Лабиринтный фильтр улавливает красочный опыл за счёт инерционного осаждения: воздух многократно меняет направление, а более тяжёлые частицы сталкиваются со стенками каналов и остаются внутри.",
  },
  {
    question: "Что означает Paint Stop?",
    answer:
      "Paint Stop — распространённое название стекловолоконного рулонного материала для улавливания лакокрасочного аэрозоля на вытяжке покрасочной камеры.",
  },
  {
    question: "Где применяют кокосово-волокнистый фильтр?",
    answer:
      "Такой материал применяют в совместимых покрасочных камерах с водяной завесой как сухую ступень после водяного отделения основной массы красочного тумана. Точную совместимость проверяют по модели оборудования.",
  },
] as const;

const rows = [
  ["Потолочный", "очистка приточного воздуха", "полиэфирный материал; в старых спецификациях часто встречается F5/M5"],
  ["Напольный Paint Stop", "улавливание красочного тумана", "объёмный стекловолоконный материал"],
  ["Картонный лабиринтный", "первичное улавливание опыла ЛКМ", "складчатый картонный фильтр типа Andreae"],
  ["Кокосово-волокнистый", "сухая ступень в совместимых водяных камерах", "волокнистый материал для систем с водяной завесой"],
] as const;

export default function PaintBoothFiltersPage() {
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
            name: "Фильтры для покрасочных камер",
            item: SITE_URL + "/filtry-dlya-pokrasochnyh-kamer/",
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />

        <section className="relative overflow-hidden bg-[#0f2341] pt-[112px] text-white sm:pt-[102px]">
          <div className="absolute inset-0 opacity-20 [background:radial-gradient(circle_at_78%_20%,#2dd4bf_0,transparent_34%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-9 px-5 pb-12 pt-6 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-14">
            <div>
              <div className="mb-4 flex gap-2 text-[13px] text-white/70"><Link href="/">Главная</Link><span>/</span><span>Фильтры для покрасочных камер</span></div>
              <h1 className="text-[34px] font-bold leading-[1.08] tracking-[-0.03em] sm:text-[44px] md:text-[58px]">Фильтры для покрасочных камер</h1>
              <p className="mt-4 max-w-[760px] text-[16px] leading-[1.75] text-white/80 md:text-[18px]">
                Фильтрующие материалы для покрасочных и окрасочно-сушильных камер: картонные лабиринтные, напольные Paint Stop, потолочные фильтры и кокосово-волокнистые элементы для совместимых водяных кабин.
              </p>
              <div className="mt-5 flex flex-wrap gap-2.5 text-[13px] font-medium">
                {["Лабиринтные", "Напольные Paint Stop", "Потолочные F5", "Кокосово-волокнистые"].map((item)=><span key={item} className="rounded-full border border-white/20 bg-white/10 px-4 py-2.5">{item}</span>)}
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a href="#zakaz" className="inline-flex h-[56px] items-center justify-center rounded-[15px] bg-[#22bdb0] px-7 font-semibold">Подобрать фильтр</a>
                <a href="#vidy" className="inline-flex h-[56px] items-center justify-center rounded-[15px] border border-white/25 px-7 font-semibold">Смотреть виды</a>
              </div>
            </div>
            <div className="relative aspect-[750/563] overflow-hidden rounded-[28px] border border-white/10 bg-[#d8dadd] shadow-[0_30px_80px_rgba(0,0,0,0.28)]">
              <Image src="/images/new-products/paint-booth-filters-hero.webp" alt="Фильтры для покрасочных и окрасочных камер" fill priority sizes="(max-width:1023px) 92vw,48vw" className="object-cover object-center" />
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-16">
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#149c94]">Приток и вытяжка</p>
              <h2 className="mt-3 text-[32px] font-bold leading-[1.12] text-[#10233f] md:text-[48px]">Разные фильтры — разные задачи</h2>
              <div className="mt-6 space-y-5 text-[16px] leading-[1.8] text-[#475569]">
                <p>На притоке важно уменьшить количество пыли, которая может попасть на свежеокрашенную поверхность. На вытяжке требуется улавливать красочный туман — аэрозоль из частиц краски, лака и грунта.</p>
                <p>Поэтому потолочный фильтр, Paint Stop и картонный лабиринтный фильтр нельзя считать взаимозаменяемыми: они работают в разных зонах и подбираются по схеме движения воздуха и размерам фильтрующей секции.</p>
                <p>Для общеобменной вентиляции также могут применяться <Link href="/karmannye-filtry/" className="font-semibold text-[#149c94] underline underline-offset-4">карманные</Link> и <Link href="/kassetnye-filtry/" className="font-semibold text-[#149c94] underline underline-offset-4">кассетные фильтры</Link>.</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-[20px] border border-[#dfe6ec] bg-white">
              {rows.map(([type,task,material],index)=><div key={type} className={`grid gap-2 px-5 py-5 md:grid-cols-[0.72fr_1fr_1.3fr] md:gap-5 ${index ? "border-t border-[#edf1f4]" : ""}`}><span className="font-semibold text-[#10233f]">{type}</span><span className="text-[14px] text-[#475569]">{task}</span><span className="text-[14px] text-[#64748b]">{material}</span></div>)}
            </div>
          </div>
        </section>

        <section id="vidy" className="bg-[#f8fafc] py-14 md:py-20">
          <div className="mx-auto max-w-7xl space-y-8 px-5 sm:px-6">
            <div><p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#149c94]">Ассортимент</p><h2 className="mt-3 max-w-[950px] text-[32px] font-bold leading-[1.12] text-[#10233f] md:text-[48px]">Основные виды фильтров для окрасочных камер</h2></div>

            <article className="rounded-[24px] border border-[#e2e8f0] bg-white p-6 shadow-sm md:p-8">
              <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
                <div className="grid grid-cols-2 gap-3">
                  <Image src="/images/new-products/labyrinth-filter-andreae.webp" alt="Картонный лабиринтный фильтр типа Andreae" width={900} height={900} className="aspect-square w-full rounded-[18px] object-cover" />
                  <Image src="/images/new-products/labyrinth-filter-andreae-side.webp" alt="Гофрированный картонный фильтр для покрасочной камеры" width={900} height={900} className="aspect-square w-full rounded-[18px] object-cover" />
                  <Image src="/images/new-products/labyrinth-filter-detail.webp" alt="Структура лабиринтного фильтра для красочного тумана" width={429} height={450} className="col-span-2 h-[230px] w-full rounded-[18px] object-cover" />
                </div>
                <div><p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#149c94]">Картонный фильтр</p><h3 className="mt-2 text-[28px] font-bold text-[#10233f] md:text-[36px]">Лабиринтный фильтр</h3><div className="mt-5 space-y-4 text-[15px] leading-[1.75] text-[#475569]"><p>Складчатая конструкция заставляет воздух многократно менять направление. Частицы красочного опыла по инерции сталкиваются со стенками каналов и остаются внутри фильтра.</p><p>Его также ищут как «Andreae», «картонный гармошечный фильтр» и «фильтр для красочного тумана». Применяется в сухих покрасочных постах и камерах.</p><p className="text-[14px] text-[#64748b]">Огнестойкость, влагостойкость и допустимая температура зависят от конкретной марки материала и подтверждаются паспортом.</p></div></div>
              </div>
            </article>

            <article className="rounded-[24px] border border-[#e2e8f0] bg-white p-6 shadow-sm md:p-8">
              <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                <div><p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#149c94]">Вытяжная ступень</p><h3 className="mt-2 text-[28px] font-bold text-[#10233f] md:text-[36px]">Напольный фильтр Paint Stop</h3><div className="mt-5 space-y-4 text-[15px] leading-[1.75] text-[#475569]"><p>Paint Stop — объёмный стекловолоконный материал для улавливания красочного тумана. Чаще его размещают под решётчатым полом, но в системах с другой схемой движения воздуха он может стоять в стеновой или вытяжной секции.</p><p>По мере загрязнения сопротивление воздушному потоку растёт, поэтому замену лучше планировать по состоянию фильтра и перепаду давления, а не по универсальному числу часов.</p></div></div>
                <div className="grid grid-cols-2 gap-3"><Image src="/images/new-products/floor-filter-paint-stop.webp" alt="Напольный фильтр Paint Stop" width={900} height={900} className="aspect-square w-full rounded-[18px] object-cover" /><Image src="/images/new-products/floor-filter-paint-stop-detail.webp" alt="Структура фильтра Paint Stop" width={900} height={900} className="aspect-square w-full rounded-[18px] object-cover" /></div>
              </div>
            </article>

            <article className="rounded-[24px] border border-[#e2e8f0] bg-white p-6 shadow-sm md:p-8">
              <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
                <div className="grid gap-3 sm:grid-cols-2"><Image src="/images/new-products/ceiling-filter-roll.webp" alt="Потолочный фильтр в рулоне" width={1600} height={877} className="h-full w-full rounded-[18px] object-cover" /><Image src="/images/new-products/ceiling-filter-f5.webp" alt="Потолочный фильтр F5" width={700} height={700} className="h-full w-full rounded-[18px] object-cover" /><Image src="/images/new-products/ceiling-filter-pads.webp" alt="Потолочные фильтрующие маты" width={900} height={600} className="sm:col-span-2 h-[220px] w-full rounded-[18px] object-cover" /></div>
                <div><p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#149c94]">Приточный воздух</p><h3 className="mt-2 text-[28px] font-bold text-[#10233f] md:text-[36px]">Потолочный фильтр</h3><div className="mt-5 space-y-4 text-[15px] leading-[1.75] text-[#475569]"><p>Потолочный фильтр устанавливают на притоке перед рабочей зоной. Он задерживает пыль и волокнистые частицы из подаваемого воздуха, снижая риск дефектов на свежеокрашенной поверхности.</p><p>В старых спецификациях часто встречается запрос «потолочный фильтр F5». При замене важно сверять также материал, толщину, плотность и требования производителя камеры.</p></div></div>
              </div>
            </article>

            <article className="rounded-[24px] border border-[#e2e8f0] bg-white p-6 shadow-sm md:p-8">
              <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                <div><p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#149c94]">Водяные камеры</p><h3 className="mt-2 text-[28px] font-bold text-[#10233f] md:text-[36px]">Кокосово-волокнистый фильтр</h3><div className="mt-5 space-y-4 text-[15px] leading-[1.75] text-[#475569]"><p>Кокосово-волокнистый материал применяют в некоторых покрасочных камерах с водяной завесой как сухую ступень после водяного отделения основной массы красочного тумана.</p><p>При замене важно проверить размеры и требования конкретной модели камеры. Возможность промывки и повторного применения зависит от исполнения материала и должна подтверждаться его паспортом.</p></div></div>
                <Image src="/images/new-products/coconut-fibre-paint-filter.webp" alt="Кокосово-волокнистый фильтр для покрасочной камеры" width={800} height={800} className="w-full rounded-[22px] object-cover" />
              </div>
            </article>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-6"><h2 className="text-[32px] font-bold text-[#10233f] md:text-[48px]">Что прислать для подбора</h2><div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{["модель и производитель камеры","место установки: потолок, пол, стенка или водяная ступень","ширина, длина, толщина и количество","фото старого фильтра и маркировка","тип ЛКМ и интенсивность окраски","нужен рулон, мат или готовая заготовка"].map((item)=><div key={item} className="rounded-[18px] border border-[#e2e8f0] bg-[#f8fafc] p-5 text-[15px] leading-[1.65] text-[#475569]"><span className="mr-2 font-bold text-[#149c94]">✓</span>{item}</div>)}</div></div>
        </section>

        <section id="zakaz" className="bg-[#f8fafc] py-14 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.88fr_1.12fr] lg:gap-14">
            <div><p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#149c94]">Подбор и расчёт</p><h2 className="mt-3 text-[32px] font-bold leading-[1.12] text-[#10233f] md:text-[48px]">Подобрать фильтр для покрасочной камеры</h2><p className="mt-5 text-[16px] leading-[1.8] text-[#475569]">Укажите вид фильтра, размеры, модель камеры и количество. Если тип неизвестен, опишите место установки или старую маркировку.</p></div>
            <div className="rounded-[24px] border border-[#e2e8f0] bg-white p-6 shadow-[0_18px_60px_rgba(15,35,65,0.08)] md:p-8"><ProductInquiryForm productName="фильтры для покрасочных камер" detailsLabel="Тип фильтра и размеры" detailsPlaceholder="Например: Paint Stop, 1 × 20 м; камера — модель ..." /></div>
          </div>
        </section>

        <section className="py-14 md:py-20"><div className="mx-auto max-w-5xl px-5 sm:px-6"><h2 className="text-center text-[32px] font-bold text-[#10233f] md:text-[46px]">Частые вопросы о фильтрах окрасочных камер</h2><div className="mt-9 grid gap-4">{faq.map((item)=><details key={item.question} className="rounded-[20px] border border-[#e2e8f0] bg-white p-5"><summary className="cursor-pointer list-none text-[17px] font-semibold text-[#10233f]">{item.question}</summary><p className="mt-4 text-[15px] leading-[1.75] text-[#64748b]">{item.answer}</p></details>)}</div></div></section>

        <SeeAlsoLinks excludeHref="/filtry-dlya-pokrasochnyh-kamer/" />
        <FloatingContacts />
      </main>
    </>
  );
}
