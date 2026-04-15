import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navigation from "../../components/Navigation";
import { pageMetadata } from "@/lib/seo-metadata";

export const metadata: Metadata = pageMetadata({
  title: "Как работает система аспирации и пылеудаления | FilterFlow",
  description:
    "Принцип работы аспирации на станках и линиях: воздушный поток, циклон, рукавный фильтр и мешки. Зачем нужны верхний и нижний мешки и рукавные фильтры.",
  path: "/blog/kak-rabotaet-aspiraciya",
});

const keyCriteria = [
  {
    title: "Захват пыли",
    text: "Загрязненный воздух всасывается через приемные патрубки у источника образования пыли.",
  },
  {
    title: "Транспортировка",
    text: "Воздух с частицами движется по воздуховодам к фильтрационной установке без потерь производительности.",
  },
  {
    title: "Фильтрация",
    text: "Поток проходит через фильтровальные мешки или рукава, где задерживаются твердые частицы.",
  },
  {
    title: "Очистка",
    text: "Очищенный воздух возвращается в помещение или выбрасывается наружу согласно проекту системы.",
  },
  {
    title: "Сбор отходов",
    text: "Отфильтрованная пыль и стружка накапливаются в нижнем мешке, контейнере или бункере.",
  },
];

const systemParts = [
  {
    title: "Заборная точка",
    text: "Локальные патрубки, воронки и кожухи, которые забирают пыль непосредственно в зоне обработки.",
  },
  {
    title: "Воздуховоды",
    text: "Система труб, по которой движется загрязненный воздух от станков к фильтрационному узлу.",
  },
  {
    title: "Фильтровальные мешки",
    text: "Основной элемент тонкой очистки воздуха. Задерживают мелкие частицы и обеспечивают чистый выход.",
  },
  {
    title: "Бункер для отходов",
    text: "Емкость для сбора отфильтрованной пыли и стружки. Упрощает выгрузку и обслуживание системы.",
  },
];

const useCases = [
  {
    title: "Локальная аспирация",
    text: "Устанавливается рядом с источником пыли и подходит для мастерских или небольших участков с 1-3 станками.",
    points: [
      "Простая установка и обслуживание",
      "Низкие затраты на оборудование",
      "Эффективный захват пыли у источника",
    ],
  },
  {
    title: "Централизованная аспирация",
    text: "Единая сеть воздуховодов для нескольких рабочих мест. Эффективна для крупных производственных площадок.",
    points: [
      "Высокая производительность",
      "Обслуживание множества станков",
      "Экономия пространства в цехе",
    ],
  },
  {
    title: "Циклонная система",
    text: "Использует центробежную силу для предварительного отделения крупных частиц и разгружает фильтры.",
    points: [
      "Эффективное отделение крупной стружки",
      "Увеличение срока службы фильтров",
      "Снижение частоты обслуживания",
    ],
  },
];

const filtrationSteps = [
  {
    title: "Поверхностная фильтрация",
    text: "Крупные частицы задерживаются на поверхности ткани, формируя первичный пылевой слой.",
  },
  {
    title: "Глубинная фильтрация",
    text: "Мелкие частицы проникают в структуру материала и задерживаются между волокнами.",
  },
  {
    title: "Регенерация фильтра",
    text: "Периодическая очистка мешка от накопившейся пыли поддерживает стабильную пропускную способность.",
  },
];

const efficiencyFactors = [
  {
    title: "Скорость воздуха",
    description:
      "Оптимальная скорость в воздуховодах 15-25 м/с позволяет уносить пыль без оседания.",
  },
  {
    title: "Площадь фильтрации",
    description:
      "Достаточная площадь мешков снижает перегрузку системы и продлевает ресурс фильтрующих элементов.",
  },
  {
    title: "Регулярное обслуживание",
    description:
      "Своевременная замена мешков и контроль герметичности поддерживают эффективность установки.",
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
    title: "Фильтровальные рукава",
    description: "Промышленные рукава для рукавных фильтров и установок УВП.",
    href: "/filtracionnye-rukava",
    icon: "sleeve",
  },
  {
    title: "Мешки для циклонов и УВП",
    description: "Специализированные мешки для пылеулавливающих установок.",
    href: "/meshki-dlya-aspiracii",
    icon: "cyclone",
  },
  {
    title: "Мешки для стружкоотсоса",
    description: "Мешки для деревообрабатывающих станков и локальной аспирации.",
    href: "/meshki-dlya-aspiracii",
    icon: "chips",
  },
  {
    title: "Верхние мешки для аспирации",
    description: "Фильтрационные мешки для чистого выхода воздуха.",
    href: "/meshki-dlya-aspiracii",
    icon: "top",
  },
  {
    title: "Нижние мешки для аспирации",
    description: "Сборные мешки для стружки и опилок.",
    href: "/meshki-dlya-aspiracii",
    icon: "bottom",
  },
];

const relatedArticles = [
  {
    title: "Как выбрать мешок для аспирации",
    description: "Материалы, размеры и крепления для разных задач.",
    href: "/blog/kak-vybrat-meshok-aspiracii",
    icon: "article",
  },
  {
    title: "Когда менять фильтровальный мешок",
    description: "Основные признаки износа и рекомендации по замене.",
    href: "/blog/kogda-menyat-filtr-meshok",
    icon: "article",
  },
  {
    title: "Типы фильтрующих мешков",
    description: "Сравнение конструкций и вариантов для разных условий.",
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
              <li className="text-[#0f172a]">
                Как работает система аспирации
              </li>
            </ol>
          </nav>

          <h1 className="mt-6 max-w-4xl text-3xl font-bold leading-tight text-[#0f172a] md:text-5xl">
            Как работает система аспирации
          </h1>
          <p className="mt-4 max-w-4xl text-base leading-relaxed text-[#475569] md:text-xl">
            Подробное объяснение принципа работы системы пылеудаления и
            фильтрации воздуха.
          </p>

          <div className="relative mt-8 overflow-hidden rounded-2xl">
            <Image
              src="/images/products/optimized_image_2 (2).webp"
              alt="Принцип работы системы аспирации"
              width={1600}
              height={900}
              className="h-auto w-full object-cover"
              priority
            />
          </div>

          <section className="mt-12">
            <h2 className="text-3xl font-bold text-[#0f172a] md:text-4xl">
              Основной принцип работы
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#334155] md:text-lg">
              Система аспирации удаляет пыль, стружку и другие загрязнения из
              воздуха производственных помещений. Принцип работы основан на
              создании разрежения, которое засасывает загрязненный поток через
              воздуховоды к фильтровальной установке.
            </p>
            <div className="mt-6 rounded-2xl border-l-4 border-[#0aa79d] bg-[#e8f6f5] p-5 md:p-6">
              <h3 className="text-2xl font-semibold text-[#0f172a]">
                Основные этапы работы:
              </h3>
              <ul className="mt-5 space-y-4">
                {keyCriteria.map((item, index) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0d9b92] text-sm font-bold text-white">
                      {index + 1}
                    </span>
                    <p className="text-[#334155]">
                      <span className="font-semibold text-[#0f172a]">
                        {item.title}
                      </span>{" "}
                      - {item.text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-bold text-[#0f172a] md:text-4xl">
              Основные элементы системы аспирации
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {systemParts.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-[#dbe3ea] bg-[#f8fafc] p-5"
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
              Процесс фильтрации
            </h2>
            <div className="mt-6 rounded-xl border border-[#dbe3ea] bg-[#f1f5f9] p-5 md:p-6">
              <h3 className="text-3xl font-semibold text-[#0f172a]">
                Как работает фильтровальный мешок
              </h3>
              <ul className="mt-5 space-y-5">
                {filtrationSteps.map((item, index) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0d9b92] text-sm font-bold text-white">
                      {index + 1}
                    </span>
                    <div>
                      <h4 className="text-2xl font-semibold text-[#0f172a]">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-[#475569]">{item.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="mt-8">
            <div className="rounded-xl bg-[#0d9b92] p-5 text-white md:p-6">
              <h3 className="text-2xl font-semibold">Важно знать</h3>
              <p className="mt-3 text-white/95">
                Эффективность фильтрации зависит от правильного подбора материала
                мешка, скорости воздушного потока и своевременного обслуживания
                системы. Перегруженный пылью мешок снижает производительность и
                может привести к повреждению оборудования.
              </p>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-bold text-[#0f172a] md:text-4xl">
              Типы систем аспирации
            </h2>
            <div className="mt-6 space-y-4">
              {useCases.map((item) => (
                <div
                  key={item.title}
                  className="border-l-4 border-[#0aa79d] pl-4"
                >
                  <h3 className="text-2xl font-semibold text-[#0f172a]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[#475569]">{item.text}</p>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-[#334155]">
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-bold text-[#0f172a] md:text-4xl">
              Факторы эффективности системы
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {efficiencyFactors.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-[#dbe3ea] bg-[#f1f5f9] p-5"
                >
                  <div className="mb-3 h-8 w-8 rounded-md bg-[#0d9b92]" />
                  <h3 className="text-2xl font-semibold text-[#0f172a]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[#475569]">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-bold text-[#0f172a] md:text-4xl">
              Рекомендуемые товары
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
                    {item.icon === "chips" && (
                      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
                        <path d="M5 7h14" />
                        <path d="M7 12h10" />
                        <path d="M9 17h6" />
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
              Читайте также
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
