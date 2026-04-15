import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navigation from "../../components/Navigation";
import { pageMetadata } from "@/lib/seo-metadata";

export const metadata: Metadata = pageMetadata({
  title:
    "Как выбрать мешок для аспирации: материалы, размеры и крепление | FilterFlow",
  description:
    "Как подобрать фильтровальный мешок под аспирацию: полиэстер и полипропилен, диаметр и высота, хомутовое и фланцевое крепление. Советы производителя FilterFlow.",
  path: "/blog/kak-vybrat-meshok-aspiracii",
});

const criteriaCards = [
  {
    title: "Размеры мешка",
    text: "Точные размеры должны соответствовать параметрам вашей системы аспирации. Измерьте диаметр и высоту текущего мешка перед заказом.",
  },
  {
    title: "Материал ткани",
    text: "Полиэстер подходит для большинства задач, полипропилен - для влажных условий, а хлопок - для мелкодисперсной пыли.",
  },
  {
    title: "Тип крепления",
    text: "Используются хомуты, металлические кольца и фланцы. Важно выбрать тип, совместимый с конкретной моделью оборудования.",
  },
  {
    title: "Класс фильтрации",
    text: "Для стандартной деревообработки обычно выбирают класс M, а для более тонкой очистки воздуха - класс H.",
  },
];

const bagTypes = [
  {
    title: "Верхние мешки",
    text: "Верхние мешки устанавливаются в верхней части установки и выполняют функцию тонкой фильтрации. Они задерживают мелкую пыль и обеспечивают чистый выход воздуха.",
    href: "/meshki-dlya-aspiracii",
    cta: "Подробнее о верхних мешках",
  },
  {
    title: "Нижние мешки",
    text: "Нижние мешки предназначены для сбора стружки и опилок. Обычно имеют увеличенный объем и усиленную конструкцию для удобной выгрузки отходов.",
    href: "/meshki-dlya-aspiracii",
    cta: "Подробнее о нижних мешках",
  },
  {
    title: "Тканевые мешки",
    text: "Тканевые мешки универсальны и подходят для различных систем аспирации. Их выбирают по плотности ткани, ресурсу и условиям эксплуатации.",
    href: "/meshki-dlya-aspiracii",
    cta: "Подробнее о тканевых мешках",
  },
];

const materialItems = [
  {
    title: "Полиэстер",
    text: "Применение: универсальный материал для большинства систем аспирации в деревообработке. Преимущества: хорошая фильтрация, устойчивость к истиранию, доступная цена. Температура: до 130°C.",
  },
  {
    title: "Полипропилен",
    text: "Применение: влажные условия и химически активные среды. Преимущества: устойчив к влаге и химикатам, не гниет. Температура: до 90°C.",
  },
  {
    title: "Хлопок",
    text: "Применение: мелкодисперсная пыль и высокие требования к чистоте воздуха. Преимущества: хорошая фильтрация мелких частиц и экологичность. Температура: до 100°C.",
  },
  {
    title: "Номекс (Nomex)",
    text: "Применение: высокотемпературные процессы и промышленная фильтрация. Преимущества: термостойкость, долговечность, химическая стойкость. Температура: до 200°C.",
  },
];

const recommendationCards = [
  {
    title: "Деревообрабатывающие станки",
    text: "Для столярных мастерских и деревообрабатывающих линий рекомендуются полиэстеровые мешки класса M с плотностью ткани 400-500 г/м².",
    note: "Рекомендуемые продукты: верхние мешки из полиэстера, нижние мешки усиленные",
  },
  {
    title: "Промышленные УВП",
    text: "Для установок вентиляции и пылеудаления на крупных производствах выбирайте рукавные фильтры увеличенной площади с учетом температуры процесса.",
    note: "Рекомендуемые продукты: фильтрационные рукава, мешки для УВП",
  },
  {
    title: "Циклонные установки",
    text: "Для циклонов важна повышенная прочность мешка и устойчивость к истиранию, так как частицы движутся с высокой скоростью.",
    note: "Рекомендуемые продукты: мешки для циклонов и УВП, усиленные тканевые мешки",
  },
];

const warningItems = [
  {
    title: "Неправильный размер",
    text: "Мешок неподходящего размера не будет герметично прилегать к системе, что приводит к утечкам пыли и снижению эффективности фильтрации.",
  },
  {
    title: "Экономия на качестве",
    text: "Дешевые мешки из некачественных материалов быстрее изнашиваются и требуют частой замены, увеличивая общие расходы.",
  },
  {
    title: "Игнорирование условий эксплуатации",
    text: "Без учета температуры, влажности и типа пыли можно выбрать неподходящий материал, который быстро потеряет рабочие свойства.",
  },
];

const productLinks = [
  {
    title: "Мешки для аспирации",
    description: "Верхние и нижние фильтровальные мешки для систем пылеудаления.",
    href: "/meshki-dlya-aspiracii",
    icon: "bag",
  },
  {
    title: "Верхние мешки для аспирации",
    description: "Фильтрационные мешки для очистки воздуха на выходе.",
    href: "/meshki-dlya-aspiracii",
    icon: "top",
  },
  {
    title: "Нижние мешки для аспирации",
    description: "Сборные мешки для стружки и опилок.",
    href: "/meshki-dlya-aspiracii",
    icon: "bottom",
  },
  {
    title: "Тканевые мешки для аспирации",
    description: "Универсальные тканевые мешки для разных систем.",
    href: "/meshki-dlya-aspiracii",
    icon: "fabric",
  },
  {
    title: "Фильтрационные рукава",
    description: "Промышленные рукава для рукавных фильтров и УВП.",
    href: "/filtracionnye-rukava",
    icon: "sleeve",
  },
  {
    title: "Мешки для циклонов и УВП",
    description: "Специализированные мешки для пылеулавливающих установок.",
    href: "/meshki-dlya-aspiracii",
    icon: "cyclone",
  },
];

const relatedArticles = [
  {
    title: "Как работает система аспирации",
    description: "Принцип работы систем пылеудаления.",
    href: "/blog/kak-rabotaet-aspiraciya",
    icon: "article",
  },
  {
    title: "Когда менять фильтровальный мешок",
    description: "Признаки износа и сроки замены.",
    href: "/blog/kogda-menyat-filtr-meshok",
    icon: "article",
  },
  {
    title: "Типы фильтровальных мешков",
    description: "Обзор вариантов для разных задач.",
    href: "/blog/tipy-filtruyushchikh-meshkov",
    icon: "article",
  },
];

export default function Page() {
  return (
    <>
      <Navigation />
      <main className="bg-[#f8fafc] pb-20 pt-[118px]">
        <article className="mx-auto max-w-6xl px-4 sm:px-6">
          <nav className="text-sm text-[#64748b]">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-[#0aa79d]">
                  Главная
                </Link>
              </li>
              <li>›</li>
              <li>
                <Link href="/blog" className="hover:text-[#0aa79d]">
                  Статьи
                </Link>
              </li>
              <li>›</li>
              <li className="text-[#0f172a]">Как выбрать мешок для аспирации</li>
            </ol>
          </nav>

          <h1 className="mt-6 max-w-4xl text-3xl font-bold leading-tight text-[#0f172a] md:text-5xl">
            Как выбрать мешок для аспирации
          </h1>
          <p className="mt-4 max-w-4xl text-base leading-relaxed text-[#475569] md:text-xl">
            Полное руководство по выбору фильтровального мешка для систем
            аспирации и стружкоотсосов.
          </p>

          <div className="relative mt-8 overflow-hidden rounded-2xl">
            <Image
              src="/images/filter-bags-optimized.webp"
              alt="Как выбрать мешок для аспирации"
              width={1600}
              height={900}
              className="h-auto w-full object-cover"
              priority
            />
          </div>

          <section className="mt-12">
            <h2 className="text-3xl font-bold text-[#0f172a] md:text-4xl">
              Основные критерии выбора
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#334155] md:text-lg">
              Выбор правильного мешка для аспирации критичен для стабильной
              работы системы пылеудаления. От качества фильтровального материала
              и точности посадки зависит чистота воздуха, производительность и
              срок службы оборудования.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {criteriaCards.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-[#dbe3ea] bg-[#eaf6f5] p-5"
                >
                  <div className="mb-4 h-10 w-10 rounded-lg bg-[#0d9b92]" />
                  <h3 className="text-2xl font-semibold text-[#0f172a]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[#475569]">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-bold text-[#0f172a] md:text-4xl">
              Типы фильтровальных мешков
            </h2>
            <div className="mt-6 space-y-4">
              {bagTypes.map((item) => (
                <div key={item.title} className="border-l-4 border-[#0aa79d] pl-4">
                  <h3 className="text-2xl font-semibold text-[#0f172a]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[#475569]">{item.text}</p>
                  <Link
                    href={item.href}
                    className="mt-2 inline-flex items-center text-sm font-semibold text-[#0d9b92] hover:text-[#0b7f77]"
                  >
                    {item.cta} →
                  </Link>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-bold text-[#0f172a] md:text-4xl">
              Материалы фильтровальных тканей
            </h2>
            <div className="mt-6 rounded-xl border border-[#dbe3ea] bg-[#f1f5f9] p-6">
              <div className="space-y-6">
                {materialItems.map((item) => (
                  <div key={item.title}>
                    <h3 className="text-2xl font-semibold text-[#0f172a]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[#475569]">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-bold text-[#0f172a] md:text-4xl">
              Рекомендации по выбору для разных задач
            </h2>
            <div className="mt-6 space-y-4">
              {recommendationCards.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-[#dbe3ea] bg-white p-5"
                >
                  <div className="mb-3 h-8 w-8 rounded-md bg-[#0d9b92]" />
                  <h3 className="text-2xl font-semibold text-[#0f172a]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[#475569]">{item.text}</p>
                  <p className="mt-3 text-sm font-semibold text-[#334155]">
                    {item.note}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-bold text-[#0f172a] md:text-4xl">
              Частые ошибки при выборе
            </h2>
            <div className="mt-6 space-y-4">
              {warningItems.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border-l-4 border-[#dc4c4c] bg-[#fff1f2] p-5"
                >
                  <h3 className="text-2xl font-semibold text-[#7f1d1d]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[#7f1d1d]">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-12 rounded-2xl bg-[#0d9b92] p-6 text-white md:p-8">
            <h2 className="text-3xl font-bold md:text-4xl">Нужна помощь в выборе?</h2>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-white/95 md:text-lg">
              Наши специалисты помогут подобрать оптимальный фильтровальный
              мешок под вашу систему аспирации, условия эксплуатации и фактическую
              нагрузку производства.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/kontakty"
                className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-[#0d9b92] transition hover:bg-[#e7fffd]"
              >
                Связаться с нами
              </Link>
              <Link
                href="/portfolio"
                className="rounded-lg bg-[#0b7f77] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#096b65]"
              >
                Каталог мешков
              </Link>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-bold text-[#0f172a] md:text-4xl">
              Рекомендуемые продукты
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {productLinks.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group rounded-xl border border-[#e2e8f0] bg-[#f8fafc] p-5 transition hover:border-[#0aa79d] hover:bg-[#ebfbf8]"
                >
                  <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-md border border-[#dbe3ea] bg-white text-[#0d9b92] transition group-hover:border-[#0aa79d] group-hover:bg-[#ddf7f2]">
                    {item.icon === "bag" && (
                      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
                        <path d="M7 9h10v10a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9Z" />
                        <path d="M9 9V7a3 3 0 0 1 6 0v2" />
                      </svg>
                    )}
                    {item.icon === "top" && (
                      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
                        <path d="M12 4v16" />
                        <path d="m7 9 5-5 5 5" />
                      </svg>
                    )}
                    {item.icon === "bottom" && (
                      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
                        <path d="M12 4v16" />
                        <path d="m17 15-5 5-5-5" />
                      </svg>
                    )}
                    {item.icon === "fabric" && (
                      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
                        <path d="M4 7h16" />
                        <path d="M4 12h16" />
                        <path d="M4 17h16" />
                      </svg>
                    )}
                    {item.icon === "sleeve" && (
                      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
                        <path d="m6 4 3 16h6l3-16H6Z" />
                      </svg>
                    )}
                    {item.icon === "cyclone" && (
                      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
                        <path d="M4 7h16" />
                        <path d="M7 12h10" />
                        <path d="M10 17h4" />
                      </svg>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-[#0f172a]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[#475569]">{item.description}</p>
                </Link>
              ))}
            </div>
          </section>

          <section className="mt-12 pb-8">
            <h2 className="text-3xl font-bold text-[#0f172a] md:text-4xl">
              Полезные статьи
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {relatedArticles.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group rounded-xl border border-[#e2e8f0] bg-[#f8fafc] p-5 transition hover:border-[#0aa79d] hover:bg-[#ebfbf8]"
                >
                  <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-md border border-[#dbe3ea] bg-white text-[#0d9b92] transition group-hover:border-[#0aa79d] group-hover:bg-[#ddf7f2]">
                    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
                      <path d="M7 4h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
                      <path d="M9 9h6" />
                      <path d="M9 13h6" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-[#0f172a]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[#64748b]">{item.description}</p>
                </Link>
              ))}
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
