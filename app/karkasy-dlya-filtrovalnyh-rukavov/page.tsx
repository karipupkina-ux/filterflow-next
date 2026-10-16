import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navigation from "../components/Navigation";
import ServiceJsonLd from "../components/ServiceJsonLd";
import ProductInquiryForm from "../components/ProductInquiryForm";
import SeeAlsoLinks from "../components/SeeAlsoLinks";
import ProductGuides from "../components/ProductGuides";
import RequestChecklist from "../components/RequestChecklist";
import FloatingContacts from "../components/feature/FloatingContacts";
import { pageMetadata, SITE_URL } from "@/lib/seo-metadata";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Каркасы для фильтровальных рукавов — круглые и плоские",
    description:
      "Металлические каркасы для фильтровальных рукавов и рукавных фильтров: круглые, плоские, цельные и секционные. Изготовление по чертежу, образцу или ТЗ.",
    path: "/karkasy-dlya-filtrovalnyh-rukavov",
    openGraphTitle: "Каркасы для фильтровальных рукавов | FilterFlow",
  }),
  keywords: [
    "каркасы для фильтровальных рукавов",
    "каркасы рукавных фильтров",
    "каркас фильтровального рукава",
    "каркас рукавного фильтра",
    "проволочный каркас фильтра",
    "круглый каркас фильтра",
    "плоский каркас фильтра",
    "filter cage",
  ],
};

const faq = [
  {
    question: "Какие бывают каркасы для фильтровальных рукавов?",
    answer:
      "Наиболее распространены круглые и плоские каркасы. По длине они могут быть цельными или секционными. Форму, соединение, материал и верхнее исполнение подбирают под конструкцию рукавного фильтра и фильтровального рукава.",
  },
  {
    question: "Можно ли изготовить каркас по старому образцу?",
    answer:
      "Да. Для расчёта можно прислать чертёж, эскиз, фотографии и размеры существующего каркаса. Для нестандартного изделия особенно важны длина, диаметр или ширина, верхняя и нижняя части и количество секций.",
  },
  {
    question: "Когда нужен каркас из нержавеющей стали?",
    answer:
      "Нержавеющую сталь рассматривают для влажной, коррозионной или химически активной среды. Окончательный материал выбирают по температуре, составу газов, типу пыли и требованиям оборудования.",
  },
  {
    question: "Для чего нужна труба Вентури?",
    answer:
      "В системах с импульсной регенерацией Вентури помогает организовать поток сжатого воздуха в зоне горловины рукава. Наличие, форма и размеры должны соответствовать конструкции фильтра.",
  },
] as const;

const orderParams = [
  ["Форма", "круглая, плоская или по образцу"],
  ["Габариты", "длина + диаметр / ширина и высота"],
  ["Проволока", "диаметр и число продольных прутков"],
  ["Поперечные элементы", "количество и шаг колец / перемычек"],
  ["Материал", "углеродистая или нержавеющая сталь"],
  ["Поверхность", "без покрытия, грунт, окраска или цинкование"],
  ["Комплектация", "Вентури и соединение секций — при необходимости"],
] as const;

export default function FilterCagesPage() {
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
            name: "Каркасы для фильтровальных рукавов",
            item: SITE_URL + "/karkasy-dlya-filtrovalnyh-rukavov/",
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
      <ServiceJsonLd
        name="Каркасы для фильтровальных рукавов"
        description="Подбор и изготовление каркасов для фильтровальных рукавов по размерам, чертежу или техническому заданию."
        path="/karkasy-dlya-filtrovalnyh-rukavov/"
        serviceType="Подбор и изготовление каркасов для фильтровальных рукавов"
      />
      <main id="top" className="bg-white">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />

        <section className="relative overflow-hidden bg-[#0f2341] pt-[112px] text-white sm:pt-[102px]">
          <div className="absolute inset-0 opacity-20 [background:radial-gradient(circle_at_78%_20%,#2dd4bf_0,transparent_34%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-9 px-5 pb-12 pt-6 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-14">
            <div>
              <div className="mb-4 flex gap-2 text-[13px] text-white/70"><Link href="/">Главная</Link><span>/</span><span>Каркасы для фильтровальных рукавов</span></div>
              <h1 className="text-[34px] font-bold leading-[1.08] tracking-[-0.03em] sm:text-[44px] md:text-[58px]">Каркасы для фильтровальных рукавов</h1>
              <p className="mt-4 max-w-[760px] text-[16px] leading-[1.75] text-white/80 md:text-[18px]">
                Металлические проволочные каркасы для рукавных фильтров: круглые и плоские, цельные и секционные. Изготовление по чертежу, образцу или ТЗ с подбором материала, покрытия и комплектующих.
              </p>
              <div className="mt-5 flex flex-wrap gap-2.5 text-[13px] font-medium">
                {["Круглые и плоские", "По ТЗ и образцу", "Сталь / нержавеющая сталь", "Вентури и секции"].map((item) => <span key={item} className="rounded-full border border-white/20 bg-white/10 px-4 py-2.5">{item}</span>)}
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a href="#zakaz" className="inline-flex h-[56px] items-center justify-center rounded-[15px] bg-[#22bdb0] px-7 font-semibold">Рассчитать каркас</a>
                <a href="#vidy" className="inline-flex h-[56px] items-center justify-center rounded-[15px] border border-white/25 px-7 font-semibold">Смотреть виды</a>
              </div>
            </div>
            <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[#d8dadd] shadow-[0_30px_80px_rgba(0,0,0,0.28)]">
              <Image src="/images/new-products/filter-cages-round.webp" alt="Металлические каркасы для фильтровальных рукавов" width={1000} height={567} priority sizes="(max-width:1023px) 92vw,48vw" className="h-auto w-full object-cover" />
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#149c94]">Опора фильтровального рукава</p>
              <h2 className="mt-3 text-[32px] font-bold leading-[1.12] text-[#10233f] md:text-[48px]">Зачем нужен каркас рукавного фильтра</h2>
              <div className="mt-6 space-y-5 text-[16px] leading-[1.8] text-[#475569]">
                <p>Каркас устанавливается внутрь фильтровального рукава и поддерживает его форму при работе и регенерации. Правильная геометрия помогает избежать заломов и лишнего трения ткани о металл.</p>
                <p>Конструкция должна соответствовать посадке рукава, способу крепления и системе очистки. Для импульсных фильтров дополнительно учитывают верхнюю часть, Вентури и способ соединения секций.</p>
                <p>Каркас и <Link href="/filtracionnye-rukava/" className="font-semibold text-[#149c94] underline underline-offset-4">фильтровальный рукав</Link> лучше подбирать как совместимую пару.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Image src="/images/new-products/filter-cage-stainless.webp" alt="Каркас фильтровального рукава из металла" width={900} height={674} className="h-full w-full rounded-[22px] object-cover" />
              <Image src="/images/new-products/filter-cages-with-sleeves.webp" alt="Фильтровальные рукава с металлическими каркасами" width={900} height={587} className="h-full w-full rounded-[22px] object-cover" />
            </div>
          </div>
        </section>

        <section id="vidy" className="bg-[#f8fafc] py-14 md:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-6">
            <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#149c94]">Виды каркасов</p>
            <h2 className="mt-3 max-w-[900px] text-[32px] font-bold leading-[1.12] text-[#10233f] md:text-[48px]">Круглые и плоские каркасы для рукавных фильтров</h2>
            <div className="mt-9 grid gap-7 lg:grid-cols-2">
              <article className="overflow-hidden rounded-[24px] border border-[#e2e8f0] bg-white shadow-sm">
                <Image src="/images/new-products/round-filter-cage.webp" alt="Круглый проволочный каркас фильтровального рукава" width={900} height={900} className="aspect-[4/3] w-full object-cover" />
                <div className="p-7"><h3 className="text-[28px] font-bold text-[#10233f]">Круглый каркас фильтра</h3><p className="mt-4 text-[15px] leading-[1.75] text-[#475569]">Используется с цилиндрическими рукавами. При подборе важны наружный диаметр, длина, число продольных прутков, шаг опорных колец и конструкция горловины. Для длинных элементов возможно секционное исполнение.</p></div>
              </article>
              <article className="overflow-hidden rounded-[24px] border border-[#e2e8f0] bg-white shadow-sm">
                <div className="grid grid-cols-2 gap-2 bg-[#eef0f1] p-2">
                  <Image src="/images/new-products/flat-filter-cage-front.webp" alt="Плоский каркас фильтровального рукава" width={700} height={700} className="aspect-square w-full rounded-[18px] object-cover" />
                  <Image src="/images/new-products/flat-filter-cage.webp" alt="Плоский металлический каркас рукавного фильтра" width={800} height={800} className="aspect-square w-full rounded-[18px] object-cover" />
                </div>
                <div className="p-7"><h3 className="text-[28px] font-bold text-[#10233f]">Плоский каркас фильтра</h3><p className="mt-4 text-[15px] leading-[1.75] text-[#475569]">Применяется с плоскими и конвертными фильтровальными элементами. Геометрия подбирается по ширине, высоте, длине и посадочному узлу, чтобы ткань не схлопывалась и не испытывала локальных перегибов.</p></div>
              </article>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
            <div className="grid gap-4 sm:grid-cols-2">
              <Image src="/images/new-products/filter-cage-venturi.webp" alt="Каркас рукавного фильтра с верхним элементом" width={850} height={630} className="h-full w-full rounded-[22px] object-cover" />
              <Image src="/images/new-products/filter-cage-components.webp" alt="Комплектующие и Вентури для каркасов фильтровальных рукавов" width={1200} height={610} className="h-full w-full rounded-[22px] object-cover" />
            </div>
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#149c94]">Материал и исполнение</p>
              <h2 className="mt-3 text-[32px] font-bold leading-[1.12] text-[#10233f] md:text-[48px]">Сталь, покрытия и комплектующие</h2>
              <div className="mt-6 space-y-5 text-[16px] leading-[1.8] text-[#475569]">
                <p>Материал выбирают по температуре, влажности и коррозионной активности среды. Для стандартных условий применяют стальные конструкции, для более агрессивной среды — подходящую нержавеющую сталь.</p>
                <p>Поверхность может быть без дополнительной обработки либо с защитным покрытием. Грунтование, окраску или цинкование согласуют по ТЗ. Для импульсной регенерации возможна комплектация Вентури и соединительными элементами секций.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f8fafc] py-14 md:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <div><p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#149c94]">Данные для расчёта</p><h2 className="mt-3 text-[32px] font-bold leading-[1.12] text-[#10233f] md:text-[48px]">Что указать при заказе</h2><p className="mt-5 text-[16px] leading-[1.8] text-[#475569]">Если чертежа нет, приложите фото старого каркаса рядом с рулеткой и отдельно снимите верхнюю и нижнюю части.</p></div>
            <div className="overflow-hidden rounded-[20px] border border-[#dfe6ec] bg-white">
              {orderParams.map(([name,value],index)=><div key={name} className={`grid grid-cols-[0.8fr_1.2fr] gap-4 px-5 py-4 text-[14px] md:text-[15px] ${index ? "border-t border-[#edf1f4]" : ""}`}><span className="font-semibold text-[#1e293b]">{name}</span><span className="text-[#64748b]">{value}</span></div>)}
            </div>
          </div>
        </section>

        <RequestChecklist
          title="Что прислать для расчёта каркаса"
          items={[
            "Форма каркаса: круглая, плоская или фото старого образца",
            "Длина и наружный диаметр либо ширина и высота",
            "Количество продольных прутков и диаметр проволоки",
            "Шаг и количество поперечных колец или перемычек",
            "Фото верхней и нижней части каркаса",
            "Нужен ли Вентури и секционное соединение",
            "Материал или требования к коррозионной стойкости",
            "Количество каркасов",
          ]}
          note="Если точные размеры неизвестны, пришлите несколько фото каркаса с рулеткой, маркировку фильтра и модель оборудования — подскажем, какие размеры нужно снять."
        />

        <section id="zakaz" className="py-14 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.88fr_1.12fr] lg:gap-14">
            <div><p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#149c94]">Изготовление под заказ</p><h2 className="mt-3 text-[32px] font-bold leading-[1.12] text-[#10233f] md:text-[48px]">Рассчитать каркас фильтровального рукава</h2><p className="mt-5 text-[16px] leading-[1.8] text-[#475569]">Укажите тип каркаса, размеры, материал и количество. Если есть чертёж или фото образца, сообщите об этом в комментарии.</p></div>
            <div className="rounded-[24px] border border-[#e2e8f0] bg-white p-6 shadow-[0_18px_60px_rgba(15,35,65,0.08)] md:p-8"><ProductInquiryForm productName="каркасы для фильтровальных рукавов" detailsLabel="Тип и размеры каркаса" detailsPlaceholder="Например: круглый, Ø150 × 3000 мм, 20 шт." /></div>
          </div>
        </section>

        <section className="bg-[#f8fafc] py-14 md:py-20"><div className="mx-auto max-w-5xl px-5 sm:px-6"><h2 className="text-center text-[32px] font-bold text-[#10233f] md:text-[46px]">Частые вопросы о каркасах</h2><div className="mt-9 grid gap-4">{faq.map((item)=><details key={item.question} className="rounded-[20px] border border-[#e2e8f0] bg-white p-5"><summary className="cursor-pointer list-none text-[17px] font-semibold text-[#10233f]">{item.question}</summary><p className="mt-4 text-[15px] leading-[1.75] text-[#64748b]">{item.answer}</p></details>)}</div></div></section>

        <ProductGuides items={[
          {
            title: "Как подобрать каркас для фильтровального рукава",
            href: "/blog/kak-podobrat-karkas-filtrovalnogo-rukava/",
            text: "Диаметр, длина, количество прутков, материал и посадочные элементы.",
          },
          {
            title: "Для чего нужна труба Вентури в рукавном фильтре",
            href: "/blog/dlya-chego-nuzhna-truba-venturi/",
            text: "Как Вентури связан с импульсной продувкой и когда он нужен.",
          },
        ]} />
        <SeeAlsoLinks excludeHref="/karkasy-dlya-filtrovalnyh-rukavov/" />
        <FloatingContacts />
      </main>
    </>
  );
}
