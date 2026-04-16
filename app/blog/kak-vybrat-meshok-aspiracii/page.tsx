import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navigation from "../../components/Navigation";
import { pageMetadata } from "@/lib/seo-metadata";

// Без «| FilterFlow» в конце: в корневом layout задан title.template — иначе бренд продублируется.
const PAGE_TITLE =
  "Как выбрать мешок для аспирации и стружкоотсоса: материалы, размеры и крепление";
const PAGE_DESCRIPTION =
  "Подбор фильтровального мешка для аспирации, стружкоотсоса и УВП: типы мешков, ткань, размеры и крепление. Как выбрать мешок для опилок, стружки и фильтрации воздуха на производстве — рекомендации FilterFlow.";

export const metadata: Metadata = pageMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/blog/kak-vybrat-meshok-aspiracii",
});

const criteriaCards = [
  {
    title: "Размеры мешка под вашу установку",
    text: "Диаметр, длина и посадочное место должны совпадать с фильтром или бункером стружкоотсоса. Перед заказом снимите фактические размеры действующего мешка или опоры — так вы избежите перекосов и пылеутечек.",
  },
  {
    title: "Материал ткани и режим работы",
    text: "Полиэстер закрывает большинство задач в деревообработке, полипропилен уместен при повышенной влажности, хлопок — когда важна тонкая фильтрация мелкой пыли. Температуру и химию среды учитывают отдельно.",
  },
  {
    title: "Тип крепления",
    text: "Хомуты, кольца и фланцы должны совпадать с конструкцией вашего фильтра или циклона. Несовпадение крепления чаще всего приводит к срыву мешка и падению эффективности аспирации.",
  },
  {
    title: "Класс фильтрации",
    text: "Для типовой стружки и опилок в мастерских обычно достаточно класса M; класс H выбирают, когда нужна более глубокая очистка выброса и жёсткие требования к воздуху в цехе.",
  },
];

const bagTypes = [
  {
    title: "Верхние мешки для тонкой фильтрации",
    text: "Стоят в верхней зоне рукавного фильтра или камеры и удерживают мелкую пыль после сепарации. От их качества зависит, насколько чистым будет воздух на выходе и насколько стабильно отработает вентилятор.",
    href: "/meshki-dlya-aspiracii",
    cta: "Подробнее о верхних мешках",
  },
  {
    title: "Нижние мешки для сбора стружки и опилок",
    text: "Работают как мешок для сбора стружки и опилок: больший объём, усиленный шов и посадка под выпуск бункера. Удобны там, где важна быстрая выгрузка без остановки линии.",
    href: "/meshki-dlya-aspiracii",
    cta: "Подробнее о нижних мешках",
  },
  {
    title: "Тканевые мешки для аспирации",
    text: "Универсальный вариант для разных узлов: подбирают по плотности, пропускной способности и стойкости к истиранию. Такие мешки для стружкоотсоса и рукавных фильтров легко адаптировать под нестандартные размеры.",
    href: "/meshki-dlya-aspiracii",
    cta: "Подробнее о тканевых мешках",
  },
];

const materialItems = [
  {
    title: "Полиэстер",
    text: "Универсальная ткань для мешков аспирации в столярных и мебельных цехах: баланс цены, ресурса и эффективности удержания стружки и мелкой пыли. Типичный температурный предел — до 130 °C.",
  },
  {
    title: "Полипропилен",
    text: "Выбирают при повышенной влажности, конденсате или контакте с агрессивными средами: материал не гниёт и стабильно держит форму мешка. Температурный предел — до 90 °C.",
  },
  {
    title: "Хлопок",
    text: "Подходит, когда важна тонкая фильтрация и мягкая работа с мелкодисперсной пылью; часто используют там, где к фильтрации воздуха на производстве предъявляют повышенные требования. Температурный предел — до 100 °C.",
  },
  {
    title: "Номекс (Nomex)",
    text: "Для горячих газов и промышленных процессов: сохраняет прочность при температурах, недоступных для стандартных синтетик. Температурный предел — до 200 °C.",
  },
];

const recommendationCards = [
  {
    title: "Деревообрабатывающие станки",
    text: "В мастерской для опилок и мелкой стружки обычно берут полиэстер класса M с плотностью ткани 400–500 г/м²: ткань выдерживает нагрузку без быстрого забивания приёмного мешка.",
    note: "Рекомендуемые продукты: верхние мешки из полиэстера, нижние мешки усиленные",
  },
  {
    title: "Промышленные УВП",
    text: "На крупных линиях мешки для УВП и рукавные фильтры подбирают по площади, скорости фильтрации и температуре газа — иначе растёт перепад давления и падает производительность установки вентиляции и пылеудаления.",
    note: "Рекомендуемые продукты: фильтрационные рукава, мешки для УВП",
  },
  {
    title: "Циклонные установки",
    text: "Узел после циклона испытывает ударную нагрузку частиц, поэтому мешки для циклонов делают более плотными, с усиленным креплением и запасом по истиранию.",
    note: "Рекомендуемые продукты: мешки для циклонов и УВП, усиленные тканевые мешки",
  },
];

const warningItems = [
  {
    title: "Неправильный размер",
    text: "Зазоры и перекосы дают пылеутечки: воздух обходит фильтровальный мешок, а система аспирации визуально «работает», но реально не очищает поток.",
  },
  {
    title: "Экономия на качестве",
    text: "Слишком дешёвая ткань быстрее продавливается и рвётся на креплении; в итоге вы чаще останавливаете линию и пересчитываете бюджет на расходники.",
  },
  {
    title: "Игнорирование условий эксплуатации",
    text: "Температура, влажность, абразивность и наличие масляного тумана меняют поведение ткани. Без этого контекста легко ошибиться в выборе мешка для стружкоотсоса или рукавного фильтра.",
  },
];

const productLinks = [
  {
    title: "Мешки для аспирации",
    description: "Верхние и нижние мешки для систем пылеудаления и фильтрации воздуха в цехе.",
    href: "/meshki-dlya-aspiracii",
    icon: "bag",
  },
  {
    title: "Верхние мешки для аспирации",
    description: "Тонкая ступень очистки после сепарации — на выходе камеры или рукавного фильтра.",
    href: "/meshki-dlya-aspiracii",
    icon: "top",
  },
  {
    title: "Нижние мешки для аспирации",
    description: "Приёмный объём под стружку и опилки: усиленный шов и посадка под выпуск бункера.",
    href: "/meshki-dlya-aspiracii",
    icon: "bottom",
  },
  {
    title: "Тканевые мешки для аспирации",
    description: "Подбор по ткани и размеру под ваш стружкоотсос или рукавный фильтр.",
    href: "/meshki-dlya-aspiracii",
    icon: "fabric",
  },
  {
    title: "Фильтрационные рукава",
    description: "Рукава для рукавных фильтров и мешки для УВП на промышленных линиях.",
    href: "/filtracionnye-rukava",
    icon: "sleeve",
  },
  {
    title: "Мешки для циклонов и УВП",
    description: "Усиленные решения для узлов высокой нагрузки после циклона.",
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
          <nav
            className="text-sm text-[#64748b]"
            aria-label="Хлебные крошки"
          >
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-[#0aa79d]">
                  Главная
                </Link>
              </li>
              <li aria-hidden="true">›</li>
              <li>
                <Link href="/blog" className="hover:text-[#0aa79d]">
                  Статьи FilterFlow
                </Link>
              </li>
              <li aria-hidden="true">›</li>
              <li className="text-[#0f172a]" aria-current="page">
                Как выбрать мешок для аспирации
              </li>
            </ol>
          </nav>

          <h1 className="mt-6 max-w-4xl text-3xl font-bold leading-tight text-[#0f172a] md:text-5xl">
            Как выбрать мешок для аспирации и стружкоотсоса
          </h1>
          <p className="mt-4 max-w-4xl text-base leading-relaxed text-[#475569] md:text-xl">
            Разбираем, как подобрать фильтровальный мешок под стружкоотсос, УВП или
            циклон: какие конструкции встречаются чаще всего, из какой ткани их
            заказывают и на что смотреть, чтобы в цеху был стабильно чистый воздух и
            меньше внезапных остановок линии.
          </p>

          <div className="relative mt-8 overflow-hidden rounded-2xl">
            <Image
              src="/images/filter-bags-optimized.webp"
              alt="Тканевые и фильтровальные мешки для аспирации, стружкоотсоса и сбора опилок"
              width={1600}
              height={900}
              className="h-auto w-full object-cover"
              priority
            />
          </div>

          <section className="mt-12">
            <h2 className="text-3xl font-bold text-[#0f172a] md:text-4xl">
              Критерии подбора мешка для аспирации
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#334155] md:text-lg">
              От геометрии и ткани зависит, насколько ровно работает вентилятор, как
              быстро растёт перепад на фильтре и насколько чистый воздух в цехе.
              Ниже — короткий чек-лист от посадки до класса фильтрации.
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
              Какие бывают мешки для аспирации: основные типы
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#334155] md:text-lg">
              Условно делят по месту в установке и задаче: тонкая очистка на выходе,
              сбор крупной фракции внизу либо универсальные тканевые рукава под
              нестандартные размеры.
            </p>
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
              Фильтровальный мешок: какую ткань выбрать
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#334155] md:text-lg">
              Материал — главный ответ на вопрос, как подобрать мешок для
              стружкоотсоса или рукавного фильтра так, чтобы он прожил весь
              межсервисный интервал и не «просел» по давлению за пару недель.
            </p>
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
              Как подобрать мешок для стружкоотсоса, УВП и циклона
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
              Частые ошибки при выборе мешка для аспирации
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
            <h2 className="text-3xl font-bold md:text-4xl">
              Подбор мешка для аспирации с инженерами FilterFlow
            </h2>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-white/95 md:text-lg">
              Пришлите фото крепления, эскиз или маркировку фильтра — мы сверим
              размеры и материал и предложим мешки для стружкоотсоса, рукавного
              фильтра или узла после циклона под вашу нагрузку.
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
              Мешки для аспирации и стружкоотсоса в каталоге
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
              Ещё статьи FilterFlow по аспирации
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
