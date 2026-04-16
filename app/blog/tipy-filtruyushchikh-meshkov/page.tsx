import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navigation from "../../components/Navigation";
import { pageMetadata } from "@/lib/seo-metadata";

// Без «| FilterFlow» в конце: в корневом layout задан title.template — иначе бренд продублируется.
const PAGE_TITLE =
  "Типы и виды фильтрующих мешков для аспирации: верхние, нижние, циклоны и УВП";
const PAGE_DESCRIPTION =
  "Какие бывают фильтровальные мешки: виды для стружкоотсоса и опилок, узлы УВП и циклонов, тканевые и синтетические материалы. Фильтрация воздуха на производстве — обзор характеристик и материалов от FilterFlow.";

export const metadata: Metadata = pageMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/blog/tipy-filtruyushchikh-meshkov",
});

const appointmentCards = [
  {
    title: "Верхние фильтровальные мешки для аспирации",
    description:
      "Стоят в верхней зоне рукавного фильтра или камеры и удерживают мелкую пыль после сепарации — ключевой элемент фильтрации воздуха на производстве при аспирации станков и линий.",
    features: [
      "Плотная фильтровальная ткань",
      "Высокая степень очистки (до 99%)",
      "Устойчивость к истиранию",
      "Различные типы креплений",
    ],
    usage: [
      "Деревообрабатывающие станки",
      "Системы УВП",
      "Циклонные установки",
      "Промышленные аспираторы",
    ],
    href: "/verhnie-meshki",
    linkText: "Подробнее о верхних мешках",
  },
  {
    title: "Нижние мешки для аспирации опилок и стружки",
    description:
      "Приёмный объём под отходы после очистки: мешки для аспирации опилок и крупной стружки с усиленным дном и удобной выгрузкой.",
    features: [
      "Прочная износостойкая ткань",
      "Большой объём (50–200 литров)",
      "Усиленное дно и швы",
      "Удобная система выгрузки",
    ],
    usage: [
      "Стружкоотсосы",
      "Столярные станки",
      "Мобильные аспираторы",
      "Небольшие производства",
    ],
    href: "/nizhnie-meshki",
    linkText: "Подробнее о нижних мешках",
  },
  {
    title: "Тканевые фильтровальные мешки универсального типа",
    description:
      "Совмещают фильтрацию и сбор в одном расходнике: удобны в мастерских и небольших цехах с разной нагрузкой на аспирацию.",
    features: [
      "Средняя плотность ткани",
      "Хорошая фильтрация",
      "Достаточная прочность",
      "Доступная цена",
    ],
    usage: [
      "Домашние мастерские",
      "Небольшие цеха",
      "Учебные заведения",
      "Хобби-производства",
    ],
    href: "/meshki-dlya-aspiracii",
    linkText: "Подробнее о тканевых мешках",
  },
];

const specializedCards = [
  {
    title: "Мешки для циклонов",
    description:
      "Усиленные мешки для циклонов: высокая скорость частиц и ударная нагрузка требуют плотной ткани и надёжного крепления.",
    points: [
      "Усиленные швы и дно",
      "Плотная износостойкая ткань",
      "Специальные крепления",
      "Большой объём",
    ],
    href: "/meshki-dlya-ciklonov-i-uvp",
  },
  {
    title: "Мешки для аспирации опилок",
    description:
      "Под накопление древесных опилок и мелкой стружки: объём и ткань подбирают под реальный расход из циклона или бункера.",
    points: [
      "Большой объём (100–200 л)",
      "Легкая прочная ткань",
      "Удобная выгрузка",
      "Антистатические свойства",
    ],
    href: "/meshki-dlya-aspiracii",
  },
  {
    title: "Мешки для стружкоотсоса",
    description:
      "Виды мешков для стружкоотсоса под локальные зоны станка: компактная геометрия, простая смена и достаточная прочность ткани.",
    points: [
      "Компактные размеры",
      "Хорошая фильтрация",
      "Простая установка",
      "Доступная цена",
    ],
    href: "/meshki-dlya-struzhkootsosa",
  },
  {
    title: "Мешки для УВП",
    description:
      "Мешки для УВП и рукавных камер на крупных линиях: большая площадь фильтрации, режим продувки и требования к ресурсу при непрерывной аспирации на производстве.",
    points: [
      "Большая площадь фильтрации",
      "Высокая производительность",
      "Автоматическая регенерация",
      "Долгий срок службы",
    ],
    href: "/meshki-dlya-ciklonov-i-uvp",
  },
];

const materials = [
  {
    title: "Полиэстер (синтетические фильтровальные мешки)",
    pros: [
      "Отличная фильтрация мелкой пыли",
      "Устойчивость к истиранию",
      "Хорошее соотношение цена/качество",
      "Широкий диапазон применения",
    ],
    use: "Деревообработка, металлообработка, пищевая промышленность, фармацевтика. Температура до 130°C.",
  },
  {
    title: "Полипропилен (синтетика)",
    pros: [
      "Устойчивость к влаге",
      "Химическая стойкость",
      "Не гниет и не плесневеет",
      "Легкий вес",
    ],
    use: "Влажные условия, химическая промышленность, пищевое производство. Температура до 90°C.",
  },
  {
    title: "Хлопок (тканевые фильтровальные мешки)",
    pros: [
      "Отличная фильтрация мелких частиц",
      "Экологичность",
      "Антистатические свойства",
      "Натуральный материал",
    ],
    use: "Пищевая промышленность, фармацевтика, производства с высокими требованиями к чистоте. Температура до 100°C.",
  },
  {
    title: "Номекс (Nomex)",
    pros: [
      "Высокая термостойкость",
      "Химическая стойкость",
      "Долгий срок службы",
      "Стабильность размеров",
    ],
    use: "Высокотемпературные процессы, асфальтобетонные заводы, цементная промышленность, металлургия. Температура до 200°C.",
  },
];

const recommendedProducts = [
  {
    title: "Мешки для аспирации",
    text: "Все виды фильтровальных мешков для пылеудаления в цехе",
    href: "/meshki-dlya-aspiracii",
    icon: "bag",
  },
  {
    title: "Верхние мешки для аспирации",
    text: "Фильтровальные мешки для очистки воздуха",
    href: "/verhnie-meshki",
    icon: "top",
  },
  {
    title: "Нижние мешки для аспирации",
    text: "Накопительные мешки для стружки и опилок",
    href: "/nizhnie-meshki",
    icon: "bottom",
  },
  {
    title: "Мешки для стружкоотсоса",
    text: "Расходники под станки и локальную аспирацию",
    href: "/meshki-dlya-struzhkootsosa",
    icon: "chips",
  },
  {
    title: "Фильтрационные рукава",
    text: "Промышленные рукавные фильтры",
    href: "/filtracionnye-rukava",
    icon: "sleeve",
  },
  {
    title: "Мешки для циклонов и УВП",
    text: "Узлы с высокой нагрузкой после циклона и на УВП",
    href: "/meshki-dlya-ciklonov-i-uvp",
    icon: "cyclone",
  },
];

const relatedArticles = [
  {
    title: "Как выбрать мешок для аспирации",
    text: "Подбор типа и материала под вашу установку",
    href: "/blog/kak-vybrat-meshok-aspiracii",
  },
  {
    title: "Как работает система аспирации",
    text: "База для понимания узлов и расходников",
    href: "/blog/kak-rabotaet-aspiraciya",
  },
  {
    title: "Когда менять фильтровальный мешок",
    text: "Срок службы и признаки износа фильтр-мешка",
    href: "/blog/kogda-menyat-filtr-meshok",
  },
];

function CircleIcon({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/20 text-white">
      {children}
    </span>
  );
}

function MiniIcon() {
  return (
    <span className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-[#b6ece8] bg-[#effbfa] text-[#12988f]">
      <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none">
        <path
          d="M4 10h12M10 4v12"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

export default function Page() {
  return (
    <>
      <Navigation />
      <main className="bg-[#f6f8fa] pb-20 pt-[118px]">
        <article className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
          <nav
            className="mb-5 text-sm text-[#6b7280]"
            aria-label="Хлебные крошки"
          >
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="transition-colors hover:text-[#0f9f96]">
                  Главная
                </Link>
              </li>
              <li aria-hidden="true">→</li>
              <li>
                <Link href="/blog" className="transition-colors hover:text-[#0f9f96]">
                  Статьи FilterFlow
                </Link>
              </li>
              <li aria-hidden="true">→</li>
              <li className="text-[#111827]" aria-current="page">
                Типы фильтрующих мешков
              </li>
            </ol>
          </nav>

          <h1 className="text-4xl font-bold leading-tight text-[#0f172a] sm:text-5xl">
            Типы и виды фильтрующих мешков для аспирации
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-[#4b5563]">
            Разбираем, какие бывают фильтровальные мешки по назначению и ткани:
            верхние и нижние, рукава для УВП, мешки для циклонов и стружкоотсоса,
            тканевые и синтетические решения. Статья поможет сориентироваться в
            классификации и характеристиках расходников для фильтрации воздуха на
            производстве без лишней теории.
          </p>

          <div className="relative mt-8 overflow-hidden rounded-2xl border border-[#d8e2e8] bg-white">
            <Image
              src="/images/products/optimized_image2.webp"
              alt="Виды фильтровальных мешков для аспирации, стружкоотсоса и промышленной пылеустановки"
              width={1200}
              height={600}
              className="h-auto w-full object-cover"
              priority
            />
          </div>

          <section className="mt-14">
            <h2 className="text-4xl font-bold leading-tight text-[#0f172a]">
              Мешки для аспирации: виды по назначению
            </h2>
            <p className="mt-4 max-w-3xl text-[17px] leading-relaxed text-[#4b5563]">
              Первая ось классификации — место в установке и задача: тонкая очистка на
              выходе, приём стружки и опилок внизу или универсальный тканевый мешок для
              небольшой аспирации на производстве и в мастерской.
            </p>
            <div className="mt-6 space-y-5">
              {appointmentCards.map((card) => (
                <div
                  key={card.title}
                  className="overflow-hidden rounded-xl border border-[#b7e7e3] bg-white shadow-[0_1px_0_rgba(15,23,42,0.04)]"
                >
                  <div className="flex items-center gap-3 bg-[#0f9f96] px-4 py-4 text-white sm:px-5">
                    <CircleIcon>
                      <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none">
                        <path
                          d="M10 4v12M4 10h12"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                        />
                      </svg>
                    </CircleIcon>
                    <h3 className="text-2xl font-bold leading-tight">{card.title}</h3>
                  </div>
                  <div className="space-y-5 px-4 py-5 sm:px-5">
                    <p className="text-[17px] leading-relaxed text-[#334155]">
                      {card.description}
                    </p>
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <h4 className="mb-2 text-xl font-bold text-[#111827]">
                          Характеристики:
                        </h4>
                        <ul className="space-y-1.5 text-[16px] text-[#374151]">
                          {card.features.map((item) => (
                            <li key={item} className="flex gap-2">
                              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#0f9f96]" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="mb-2 text-xl font-bold text-[#111827]">
                          Применение:
                        </h4>
                        <ul className="space-y-1.5 text-[16px] text-[#374151]">
                          {card.usage.map((item) => (
                            <li key={item} className="flex gap-2">
                              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#0f9f96]" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <Link
                      href={card.href}
                      className="inline-flex items-center gap-2 font-semibold text-[#0f9f96] transition-colors hover:text-[#0a857d]"
                    >
                      {card.linkText}
                      <span aria-hidden>→</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-14">
            <h2 className="text-4xl font-bold leading-tight text-[#0f172a]">
              Рукавные фильтры и мешки для УВП
            </h2>
            <div className="mt-5 rounded-xl bg-[#f2f6f8] px-5 py-6 text-[17px] leading-relaxed text-[#334155]">
              Рукавные фильтры — длинные цилиндрические элементы в камере рукавного
              фильтра: на УВП и централизованных линиях они дают большую площадь
              улавливания при относительно компактном габарите узла.
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "Размеры",
                  text: "Диаметр: 100-300 мм\nДлина: 1-10 метров\nПлощадь: 0,3-9 м²",
                },
                {
                  title: "Температура",
                  text: "Полиэстер: до 130°C\nНомекс: до 200°C\nСтекловолокно: до 260°C",
                },
                {
                  title: "Очистка",
                  text: "Импульсная продувка\nМеханическое встряхивание\nОбратный поток воздуха",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="rounded-xl border border-[#e5eaef] bg-white px-5 py-5"
                >
                  <MiniIcon />
                  <h3 className="mt-3 text-2xl font-bold text-[#111827]">{card.title}</h3>
                  <p className="mt-2 whitespace-pre-line text-[16px] leading-relaxed text-[#4b5563]">
                    {card.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl border-l-4 border-[#0f9f96] bg-[#ecf8f7] px-5 py-5">
              <h3 className="text-2xl font-bold text-[#0f172a]">
                Виды рукавных фильтров и характеристики посадки
              </h3>
              <div className="mt-3 space-y-3 text-[#334155]">
                <div>
                  <h4 className="text-xl font-semibold text-[#111827]">
                    С металлическим каркасом
                  </h4>
                  <p className="mt-1 text-[16px] leading-relaxed">
                    Рукав натягивается на жесткий каркас из проволоки и
                    обеспечивает стабильную форму при равномерном распределении
                    воздушного потока.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-[#111827]">Бескаркасные</h4>
                  <p className="mt-1 text-[16px] leading-relaxed">
                    Изготавливаются из более плотной ткани, держат форму
                    самостоятельно, проще в установке и регулярном обслуживании.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-[#111827]">
                    С пружинным каркасом
                  </h4>
                  <p className="mt-1 text-[16px] leading-relaxed">
                    Каркас из пружинной проволоки даёт гибкость и устойчивость к
                    деформации, подходит для систем с переменным давлением.
                  </p>
                </div>
              </div>
            </div>

            <Link
              href="/filtracionnye-rukava"
              className="mt-6 inline-flex items-center rounded-lg bg-[#0f9f96] px-6 py-3 text-[16px] font-semibold text-white transition-all hover:bg-[#0b847d]"
            >
              Подробнее о рукавных фильтрах <span className="ml-2">→</span>
            </Link>
          </section>

          <section className="mt-14">
            <h2 className="text-4xl font-bold leading-tight text-[#0f172a]">
              Мешки для циклонов, УВП, стружкоотсоса и опилок
            </h2>
            <p className="mt-4 max-w-3xl text-[17px] leading-relaxed text-[#4b5563]">
              Отдельная группа — под конкретный узел и пылевую нагрузку: от приёмного
              мешка после циклона до компактного варианта на стружкоотсосе.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {specializedCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-xl border border-[#dde5ea] bg-white px-5 py-5"
                >
                  <div className="flex items-center gap-3">
                    <MiniIcon />
                    <h3 className="text-3xl font-bold leading-tight text-[#111827]">
                      {card.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-[16px] leading-relaxed text-[#4b5563]">
                    {card.description}
                  </p>
                  <ul className="mt-3 space-y-1.5 text-[16px] text-[#374151]">
                    {card.points.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#0f9f96]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={card.href}
                    className="mt-4 inline-flex items-center gap-2 font-semibold text-[#0f9f96] transition-colors hover:text-[#0a857d]"
                  >
                    Подробнее <span aria-hidden>→</span>
                  </Link>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-14">
            <h2 className="text-4xl font-bold leading-tight text-[#0f172a]">
              Тканевые и синтетические фильтровальные мешки: материалы
            </h2>
            <p className="mt-4 max-w-3xl text-[17px] leading-relaxed text-[#4b5563]">
              Характеристики фильтровальных мешков в первую очередь задаёт ткань:
              синтетика (полиэстер, полипропилен) или натуральные тканевые решения,
              плюс номекс для горячих газов. Ниже — ориентиры для подбора под температуру
              и среду.
            </p>
            <div className="mt-6 space-y-4">
              {materials.map((material) => (
                <div
                  key={material.title}
                  className="rounded-xl bg-[#f3f5f7] px-5 py-5 sm:px-6"
                >
                  <h3 className="text-3xl font-bold text-[#111827]">{material.title}</h3>
                  <div className="mt-4 grid gap-5 md:grid-cols-2">
                    <div>
                      <h4 className="mb-2 text-xl font-bold text-[#111827]">Преимущества:</h4>
                      <ul className="space-y-1.5 text-[16px] text-[#374151]">
                        {material.pros.map((item) => (
                          <li key={item} className="flex gap-2">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#0f9f96]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-2 text-xl font-bold text-[#111827]">Применение:</h4>
                      <p className="text-[16px] leading-relaxed text-[#374151]">{material.use}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-14">
            <h2 className="text-4xl font-bold leading-tight text-[#0f172a]">
              Как выбрать тип фильтрующего мешка под задачу
            </h2>
            <div className="mt-6 rounded-xl border-l-4 border-[#0f9f96] bg-[#eaf7f5] px-5 py-6 sm:px-6">
              <h3 className="text-2xl font-bold text-[#111827]">
                Критерии подбора по системе, пыли и режиму
              </h3>
              <ol className="mt-4 space-y-4">
                {[
                  {
                    title: "Тип системы аспирации",
                    text: "Локальная зона станка — компактные мешки для стружкоотсоса; централизованная линия — рукава и мешки для УВП; после циклона — усиленные фильтровальные мешки.",
                  },
                  {
                    title: "Характер пыли",
                    text: "Мелкая пыль требует плотной ткани, крупная стружка — прочных материалов, влажная среда — полипропилена.",
                  },
                  {
                    title: "Условия эксплуатации",
                    text: "Температура, влажность и химическая агрессивность среды определяют выбор материала фильтра.",
                  },
                  {
                    title: "Интенсивность использования",
                    text: "Для непрерывной нагрузки выбирайте более долговечные материалы, для периодической работы подходят стандартные варианты.",
                  },
                  {
                    title: "Бюджет",
                    text: "Учитывайте не только стоимость покупки, но и ресурс мешка: более дорогой фильтр часто выгоднее в долгой эксплуатации.",
                  },
                ].map((item, idx) => (
                  <li key={item.title} className="flex gap-3">
                    <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0f9f96] text-sm font-bold text-white">
                      {idx + 1}
                    </span>
                    <div>
                      <h4 className="text-xl font-semibold text-[#111827]">{item.title}</h4>
                      <p className="mt-1 text-[16px] leading-relaxed text-[#334155]">
                        {item.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section className="mt-14 rounded-2xl bg-[#0f9f96] px-6 py-8 text-white sm:px-8 sm:py-10">
            <h2 className="text-4xl font-bold leading-tight">
              Подбор фильтровальных мешков с инженерами FilterFlow
            </h2>
            <p className="mt-4 max-w-3xl text-[17px] leading-relaxed text-[#d9fffc]">
              Сопоставим конструкцию и ткань с вашей пылью, температурой и посадочным
              узлом — от мастерской до промышленной линии. Поставляем серийные и
              нестандартные изделия по чертежу или фото крепления.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/#contacts"
                className="inline-flex items-center rounded-lg bg-white px-6 py-3 text-[16px] font-semibold text-[#0f9f96] transition-all hover:bg-[#e7fbf9]"
              >
                Получить консультацию <span className="ml-2">→</span>
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center rounded-lg border border-[#0b6f69] bg-[#0b7f78] px-6 py-3 text-[16px] font-semibold text-white transition-all hover:bg-[#096c66]"
              >
                Каталог продукции <span className="ml-2">→</span>
              </Link>
            </div>
          </section>

          <section className="mt-14">
            <h2 className="text-4xl font-bold leading-tight text-[#0f172a]">
              Каталог: фильтровальные мешки для аспирации
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {recommendedProducts.map((card) => (
                <Link
                  key={card.title}
                  href={card.href}
                  className="group rounded-xl border border-[#e3e8ec] bg-[#f8fafb] px-5 py-4 transition-all duration-300 hover:border-[#90ddd7] hover:bg-[#edf9f8] hover:shadow-[0_8px_20px_rgba(15,159,150,0.12)]"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-md border border-[#dbe3ea] bg-white text-[#12988f] transition group-hover:border-[#91dfd9] group-hover:bg-[#e8f7f5]">
                      {card.icon === "bag" && (
                        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-none stroke-current stroke-2">
                          <path d="M7 9h10v10a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9Z" />
                          <path d="M9 9V7a3 3 0 0 1 6 0v2" />
                        </svg>
                      )}
                      {card.icon === "top" && (
                        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-none stroke-current stroke-2">
                          <path d="M12 6v12" />
                          <path d="m8 10 4-4 4 4" />
                        </svg>
                      )}
                      {card.icon === "bottom" && (
                        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-none stroke-current stroke-2">
                          <path d="M12 6v12" />
                          <path d="m8 14 4 4 4-4" />
                        </svg>
                      )}
                      {card.icon === "chips" && (
                        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-none stroke-current stroke-2">
                          <path d="M5 7h14" />
                          <path d="M7 12h10" />
                          <path d="M9 17h6" />
                        </svg>
                      )}
                      {card.icon === "sleeve" && (
                        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-none stroke-current stroke-2">
                          <path d="m6 4 3 16h6l3-16H6Z" />
                        </svg>
                      )}
                      {card.icon === "cyclone" && (
                        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-none stroke-current stroke-2">
                          <path d="M4 7h16" />
                          <path d="M7 12h10" />
                          <path d="M10 17h4" />
                        </svg>
                      )}
                    </span>
                    <h3 className="text-lg font-semibold leading-tight text-[#111827] transition-colors group-hover:text-[#0f7f77]">
                      {card.title}
                    </h3>
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#6b7280]">{card.text}</p>
                </Link>
              ))}
            </div>
          </section>

          <section className="mt-14 pb-2">
            <h2 className="text-4xl font-bold leading-tight text-[#0f172a]">
              Статьи FilterFlow о фильтровальных мешках
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {relatedArticles.map((article) => (
                <Link
                  key={article.title}
                  href={article.href}
                  className="group rounded-xl border border-[#e3e8ec] bg-white px-5 py-5 transition-all duration-300 hover:border-[#7fd8d1] hover:bg-[#eefaf8] hover:shadow-[0_8px_20px_rgba(15,159,150,0.12)]"
                >
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-md border border-[#dbe3ea] bg-white text-[#12988f] transition group-hover:border-[#91dfd9] group-hover:bg-[#e8f7f5]">
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-none stroke-current stroke-2">
                      <path d="M7 4h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
                      <path d="M9 9h6" />
                      <path d="M9 13h6" />
                    </svg>
                  </span>
                  <h3 className="mt-3 text-2xl font-semibold leading-tight text-[#111827] transition-colors group-hover:text-[#0f7f77]">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#6b7280]">{article.text}</p>
                </Link>
              ))}
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
