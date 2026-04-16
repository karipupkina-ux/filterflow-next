import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navigation from "../../components/Navigation";
import { pageMetadata } from "@/lib/seo-metadata";

// Без «| FilterFlow» в конце: в корневом layout задан title.template — иначе бренд продублируется.
const PAGE_TITLE =
  "Когда менять фильтр-мешок и мешок для аспирации: признаки износа и срок службы";
const PAGE_DESCRIPTION =
  "Как часто менять фильтр-мешок на производстве: признаки износа, рост перепада, пыль в цеху, повреждения ткани. Замена мешка для стружкоотсоса и УВП, обслуживание аспирации и фильтрация воздуха — практика от FilterFlow.";

export const metadata: Metadata = pageMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/blog/kogda-menyat-filtr-meshok",
});

const replaceSigns = [
  {
    title: "Снижение производительности",
    text: "Если аспирация на производстве хуже улавливает пыль и стружку, чаще всего растёт сопротивление фильтр-мешка: поры забиты, падает расход, вентилятор работает с повышенной нагрузкой.",
    icon: "down",
  },
  {
    title: "Пыль в помещении",
    text: "Пыль в цеху при включённой системе — сигнал проверить целостность фильтровального мешка и герметичность посадки в хомуте или на фланце.",
    icon: "dust",
  },
  {
    title: "Повышенный шум",
    text: "Смена тона работы вентилятора часто совпадает с ростом перепада на забитом фильтре: сопротивление магистрали растёт, двигатель упирается в нагрузку.",
    icon: "sound",
  },
  {
    title: "Видимые повреждения",
    text: "Разрывы, истирание, микропроколы и расходящиеся швы — прямой признак износа фильтр-мешка; ткань перестаёт удерживать частицы, страдает фильтрация воздуха на производстве.",
    icon: "damage",
  },
];

const serviceLife = [
  {
    period: "6-12 мес",
    title: "Интенсивная эксплуатация",
    text: "Производства с непрерывным циклом работы, большим объёмом пыли и агрессивными условиями среды.",
  },
  {
    period: "12-18 мес",
    title: "Средняя эксплуатация",
    text: "Стандартный режим работы с регулярными перерывами и умеренной нагрузкой на фильтрующую систему.",
  },
  {
    period: "18-24 мес",
    title: "Легкая эксплуатация",
    text: "Небольшие объёмы работ, периодическое использование и аккуратное соблюдение регламента обслуживания.",
  },
];

const factors = [
  "Качество и плотность фильтровального материала",
  "Тип и объём пыли: от мелкой древесины до абразивных фракций",
  "Интенсивность аспирации на производстве и режим простоев",
  "Регулярность очистки и планового обслуживания установки",
  "Температура и влажность на входе в фильтр",
  "Соответствие мешка задаче: мешки для УВП, стружкоотсоса или рукавного фильтра",
];

const lifetimeCards = [
  {
    title: "Регулярная очистка",
    text: "Периодически очищайте мешок от накопленной пыли. Используйте встряхивание, импульсную продувку или мягкое механическое выбивание.",
    points: [
      "Встряхивание мешка для систем с ручной очисткой",
      "Импульсная продувка для автоматических установок",
      "Аккуратная механическая очистка без повреждения ткани",
    ],
    icon: "clean",
  },
  {
    title: "Регулярный осмотр",
    text: "Проводите визуальный контроль минимум 1 раз в месяц, чтобы заранее выявлять износ и предотвращать аварийные остановки.",
    points: [
      "Проверяйте целостность ткани и швов",
      "Осматривайте зоны крепления на износ",
      "Контролируйте степень загрязнения мешка",
      "Проверяйте герметичность соединений",
    ],
    icon: "inspect",
  },
  {
    title: "Правильная эксплуатация",
    text: "Соблюдайте рабочие параметры системы аспирации и не превышайте проектную нагрузку оборудования.",
    points: [
      "Не перегружайте вентилятор и магистраль",
      "Своевременно опорожняйте нижний мешок",
      "Исключайте попадание крупных твердых предметов",
      "Следите за температурным режимом",
    ],
    icon: "settings",
  },
  {
    title: "Использование предфильтров",
    text: "Циклон или предварительный фильтр перед основным мешком снижает запыленность на входе и заметно продлевает срок службы ткани.",
    points: [],
    icon: "shield",
  },
];

const replacementSteps = [
  {
    title: "Отключите систему",
    text: "Полностью отключите аспирацию и дождитесь остановки вентилятора. Перед работами снимите питание с оборудования.",
  },
  {
    title: "Снимите старый мешок",
    text: "Ослабьте крепление (хомут, резинку или кольцо) и аккуратно демонтируйте мешок, избегая рассеивания пыли.",
  },
  {
    title: "Очистите место установки",
    text: "Удалите остатки пыли с посадочного узла и проверьте состояние крепежа. При необходимости замените изношенные элементы.",
  },
  {
    title: "Установите новый мешок",
    text: "Наденьте мешок на патрубок, выровняйте посадку и плотно зафиксируйте. Убедитесь в герметичности соединения.",
  },
  {
    title: "Проверьте работу",
    text: "Включите систему и убедитесь в отсутствии утечек пыли, нормальной тяге и стабильной работе вентилятора.",
  },
];

const commonErrors = [
  {
    title: "Использование поврежденного мешка",
    text: "Работа с разрывами или «просевшей» тканью ухудшает фильтрацию воздуха в цеху и вынуждает вентилятор тянуть с повышенным перепадом.",
  },
  {
    title: "Неправильный размер мешка",
    text: "Неверная геометрия даёт зазоры и срыв по креплению: падает эффективность аспирации, ускоряется износ уплотнений.",
  },
  {
    title: "Отсутствие регулярной очистки",
    text: "Забитый фильтр-мешок держит высокий перепад, гонит вентилятор на пределе и сокращает ресурс всей линии пылеудаления.",
  },
  {
    title: "Игнорирование признаков износа",
    text: "Откладывать замену фильтр-мешка при явных симптомах рискованно: чаще ловят аварийную остановку и простой производства.",
  },
];

const productLinks = [
  {
    title: "Мешки для аспирации",
    description: "Верхние и нижние фильтровальные мешки для замены в работающей системе.",
    href: "/meshki-dlya-aspiracii",
    icon: "bag",
  },
  {
    title: "Мешки для стружкоотсоса",
    description: "Расходники под замену мешка для стружкоотсоса и станочные линии.",
    href: "/meshki-dlya-struzhkootsosa",
    icon: "chips",
  },
  {
    title: "Фильтрационные рукава",
    description: "Рукава для рукавных фильтров и крупных узлов пылеудаления.",
    href: "/filtracionnye-rukava",
    icon: "sleeve",
  },
  {
    title: "Мешки для циклонов и УВП",
    description: "Мешки для УВП и узлов после циклона с повышенной механической нагрузкой.",
    href: "/meshki-dlya-aspiracii",
    icon: "cyclone",
  },
  {
    title: "Быстросъёмные хомуты",
    description: "Металлические хомуты для надёжного крепления.",
    href: "/meshki-dlya-aspiracii",
    icon: "clamp",
  },
  {
    title: "Нестандартные мешки",
    description: "Изготовление по чертежам и индивидуальным размерам.",
    href: "/meshki-dlya-aspiracii",
    icon: "custom",
  },
];

const relatedArticles = [
  {
    title: "Как выбрать мешок для аспирации",
    description: "Подбор фильтровального мешка под вашу установку.",
    href: "/blog/kak-vybrat-meshok-aspiracii",
  },
  {
    title: "Как работает система аспирации",
    description: "База для обслуживания аспирации и графика осмотров.",
    href: "/blog/kak-rabotaet-aspiraciya",
  },
  {
    title: "Типы фильтровальных мешков",
    description: "Сравнение конструкций до плановой замены расходника.",
    href: "/blog/tipy-filtruyushchikh-meshkov",
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
                Когда менять фильтр-мешок
              </li>
            </ol>
          </nav>

          <h1 className="mt-6 max-w-4xl text-3xl font-bold leading-tight text-[#0f172a] md:text-5xl">
            Когда менять фильтр-мешок и мешок для аспирации
          </h1>
          <p className="mt-4 max-w-4xl text-base leading-relaxed text-[#475569] md:text-xl">
            Разбираем признаки износа фильтр-мешка, ориентиры по сроку службы и
            типичные ошибки при эксплуатации. Статья будет полезна, если вы
            обслуживаете аспирацию на производстве, планируете замену мешка на
            стружкоотсосе или рукавном фильтре УВП и хотите реже ловить простои из-за
            забитого или повреждённого элемента фильтрации.
          </p>

          <div className="relative mt-8 overflow-hidden rounded-2xl">
            <Image
              src="/images/products/clean_no_text.webp.webp"
              alt="Сравнение нового и изношенного фильтр-мешка для аспирации и пылеудаления"
              width={1600}
              height={900}
              className="h-auto w-full object-cover"
              priority
            />
          </div>

          <section className="mt-12">
            <h2 className="text-3xl font-bold text-[#0f172a] md:text-4xl">
              Признаки износа фильтр-мешка: когда пора менять
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#334155] md:text-lg">
              Замена фильтр-мешка обычно назревает не «по календарю», а по
              сочетанию перепада, качества воздуха в цеху и внешнего осмотра ткани.
              Ниже — типичные симптомы, по которым инженеры и эксплуатация принимают
              решение о смене расходника.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {replaceSigns.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-[#efc8ce] bg-[#fff4f6] p-5"
                >
                  <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-md bg-[#df3030] text-white">
                    {item.icon === "down" && (
                      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
                        <path d="M12 4v12" />
                        <path d="m7 11 5 5 5-5" />
                      </svg>
                    )}
                    {item.icon === "dust" && (
                      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
                        <path d="M4 8h16" />
                        <path d="M4 12h12" />
                        <path d="M4 16h8" />
                      </svg>
                    )}
                    {item.icon === "sound" && (
                      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
                        <path d="M5 10h4l5-4v12l-5-4H5z" />
                        <path d="M17 9a4 4 0 0 1 0 6" />
                      </svg>
                    )}
                    {item.icon === "damage" && (
                      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
                        <path d="m6 6 12 12" />
                        <path d="m18 6-12 12" />
                      </svg>
                    )}
                  </div>
                  <h3 className="text-2xl font-semibold text-[#0f172a]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[#475569]">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl border-l-4 border-[#d7b21e] bg-[#fffbe8] p-5">
              <h3 className="text-xl font-semibold text-[#5f4a00]">
                Плановая замена вместо аварийной
              </h3>
              <p className="mt-2 text-[#6a5508]">
                Не дожидайтесь полного выхода мешка из строя: график осмотров и
                своевременная замена фильтровального мешка дешевле простоя линии и
                ремонта вентилятора при длительной работе на высоком перепаде.
              </p>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-bold text-[#0f172a] md:text-4xl">
              Как часто менять фильтр-мешок: ориентиры по сроку службы
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#334155] md:text-lg">
              Точный интервал зависит от пыли, температуры и регламента обслуживания
              аспирации. Цифры ниже — ориентир для планирования закупки; они не
              заменяют паспорт и инструкцию завода-изготовителя вашего фильтра.
            </p>
            <div className="mt-6 rounded-xl border border-[#dbe3ea] bg-[#f1f5f9] p-6">
              <div className="space-y-5">
                {serviceLife.map((item) => (
                  <div key={item.period} className="flex items-start gap-4">
                    <span className="mt-0.5 inline-flex shrink-0 rounded-lg bg-[#0d9b92] px-3 py-1 text-sm font-bold text-white">
                      {item.period}
                    </span>
                    <div>
                      <h3 className="text-2xl font-semibold text-[#0f172a]">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-[#475569]">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-xl border border-[#cde7e4] bg-[#eaf8f6] p-5">
              <h3 className="text-2xl font-semibold text-[#0f172a]">
                Что сокращает или продлевает срок службы фильтр-мешка
              </h3>
              <ul className="mt-4 space-y-2">
                {factors.map((factor) => (
                  <li key={factor} className="flex items-start gap-2 text-[#334155]">
                    <span className="mt-1 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#0d9b92] text-white">
                      <svg viewBox="0 0 24 24" className="h-3 w-3 fill-none stroke-current stroke-3">
                        <path d="m5 12 4 4 10-10" />
                      </svg>
                    </span>
                    {factor}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-bold text-[#0f172a] md:text-4xl">
              Как продлить срок службы фильтровального мешка
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#334155] md:text-lg">
              Грамотное обслуживание аспирации снижает износ фильтр-мешка и держит
              стабильную фильтрацию воздуха на производстве без лишних остановок на
              внеплановую замену.
            </p>
            <div className="mt-6 space-y-4">
              {lifetimeCards.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-[#dbe3ea] bg-white p-5"
                >
                  <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-md border border-[#8cd1cb] bg-[#ebfbf8] text-[#0d9b92]">
                    {item.icon === "clean" && (
                      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
                        <path d="M4 12a8 8 0 1 0 2-5.3" />
                        <path d="M4 4v5h5" />
                      </svg>
                    )}
                    {item.icon === "inspect" && (
                      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
                        <circle cx="11" cy="11" r="6" />
                        <path d="m20 20-4-4" />
                      </svg>
                    )}
                    {item.icon === "settings" && (
                      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
                        <circle cx="12" cy="12" r="3" />
                        <path d="M19.4 15a1 1 0 0 0 .2 1.1l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1 1 0 0 0-1.1-.2 1 1 0 0 0-.6.9V20a2 2 0 1 1-4 0v-.2a1 1 0 0 0-.6-.9 1 1 0 0 0-1.1.2l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1 1 0 0 0 .2-1.1 1 1 0 0 0-.9-.6H4a2 2 0 1 1 0-4h.2a1 1 0 0 0 .9-.6 1 1 0 0 0-.2-1.1l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1 1 0 0 0 1.1.2h.1a1 1 0 0 0 .6-.9V4a2 2 0 1 1 4 0v.2a1 1 0 0 0 .6.9 1 1 0 0 0 1.1-.2l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1 1 0 0 0-.2 1.1v.1a1 1 0 0 0 .9.6H20a2 2 0 1 1 0 4h-.2a1 1 0 0 0-.9.6z" />
                      </svg>
                    )}
                    {item.icon === "shield" && (
                      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
                        <path d="M12 3 5 6v6c0 5 3.5 8 7 9 3.5-1 7-4 7-9V6z" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                    )}
                  </div>
                  <h3 className="text-2xl font-semibold text-[#0f172a]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[#475569]">{item.text}</p>
                  {item.points.length > 0 && (
                    <ul className="mt-3 list-disc space-y-1 pl-5 text-[#334155]">
                      {item.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-bold text-[#0f172a] md:text-4xl">
              Замена фильтр-мешка: пошаговая процедура
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#334155] md:text-lg">
              Алгоритм подходит и для мешка на стружкоотсосе, и для элемента на
              рукавном фильтре: перед работами сверьтесь с паспортом узла и правилами
              охраны труда на вашем производстве.
            </p>
            <div className="mt-6 rounded-xl border border-[#dbe3ea] bg-[#f1f5f9] p-6">
              <ol className="space-y-5">
                {replacementSteps.map((item, index) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0d9b92] text-sm font-bold text-white">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="text-2xl font-semibold text-[#0f172a]">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-[#475569]">{item.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-bold text-[#0f172a] md:text-4xl">
              Ошибки при замене фильтр-мешка и эксплуатации
            </h2>
            <div className="mt-6 space-y-3">
              {commonErrors.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border-l-4 border-[#dc4c4c] bg-[#fff1f2] p-4"
                >
                  <h3 className="text-xl font-semibold text-[#7f1d1d]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[#7f1d1d]">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-12 rounded-2xl bg-[#0d9b92] p-6 text-white md:p-8">
            <h2 className="text-3xl font-bold md:text-4xl">
              Мешки для аспирации и УВП от FilterFlow
            </h2>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-white/95 md:text-lg">
              Поставляем фильтровальные мешки с предсказуемым ресурсом под вашу
              пыль и режим. Поможем с подбором замены для стружкоотсоса, рукавного
              фильтра или узла на линии — чтобы реже останавливать производство из-за
              изношенного фильтр-мешка.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/portfolio"
                className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-[#0d9b92] transition hover:bg-[#e7fffd]"
              >
                Каталог мешков
              </Link>
              <Link
                href="/kontakty"
                className="rounded-lg bg-[#0b7f77] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#096b65]"
              >
                Получить консультацию
              </Link>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-bold text-[#0f172a] md:text-4xl">
              Мешки для аспирации и пылеудаления в каталоге
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
                    {item.icon === "chips" && (
                      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
                        <path d="M5 7h14" />
                        <path d="M7 12h10" />
                        <path d="M9 17h6" />
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
                    {item.icon === "clamp" && (
                      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
                        <path d="M6 12h7" />
                        <path d="M13 8h4v8h-4" />
                        <path d="M7 8h2v8H7z" />
                      </svg>
                    )}
                    {item.icon === "custom" && (
                      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
                        <path d="m6 6 12 12" />
                        <path d="m18 6-12 12" />
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
              Ещё статьи FilterFlow про фильтровальные мешки
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
