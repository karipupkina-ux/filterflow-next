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
    title: "Скорость воздушного потока",
    text: "Стабильная скорость в магистрали не дает пыли оседать в воздуховодах и поддерживает равномерную загрузку фильтра.",
  },
  {
    title: "Герметичность системы",
    text: "Подсосы воздуха снижают разрежение и ухудшают отбор пыли у станка. Все соединения и патрубки должны быть плотно стянуты.",
  },
  {
    title: "Класс фильтрации",
    text: "Чем мельче и опаснее пыль, тем выше требования к ткани мешка и к площади фильтрующей поверхности.",
  },
  {
    title: "Сервис и регламент",
    text: "Своевременная очистка и замена мешков поддерживают производительность и снижают риск аварийных остановок.",
  },
];

const systemParts = [
  {
    title: "Заборная точка",
    text: "Кожухи, воронки и патрубки в зоне реза или шлифовки, где образуется пыль и стружка.",
  },
  {
    title: "Воздуховоды",
    text: "Сеть каналов, по которой поток переносит частицы к пылеуловителю.",
  },
  {
    title: "Пылеуловитель",
    text: "Циклон, мешочный фильтр или рукавная установка, где пыль отделяется от воздуха.",
  },
  {
    title: "Вентилятор",
    text: "Создает разрежение, задает направление движения и общую производительность системы.",
  },
];

const useCases = [
  {
    title: "Деревообработка",
    text: "Удаление стружки и древесной пыли от пил, фрезеров, рейсмусов и шлифовальных линий.",
  },
  {
    title: "Металлообработка",
    text: "Сбор абразивной пыли после шлифования, зачистки и термической резки.",
  },
  {
    title: "Пищевые и химические производства",
    text: "Локальный отсос мелкодисперсных фракций и поддержание санитарных требований.",
  },
];

const warningItems = [
  {
    title: "Неправильный расчет производительности",
    text: "Слишком слабая тяга не уносит пыль полностью, а избыточная нагрузка ускоряет износ мешков и вентилятора.",
  },
  {
    title: "Экономия на фильтрующем материале",
    text: "Дешевые ткани быстро теряют форму и пропускают пыль. Это приводит к частой замене и росту эксплуатационных затрат.",
  },
  {
    title: "Отсутствие обслуживания",
    text: "Без регулярной очистки и контроля перепада давления система теряет эффективность и может остановить производство.",
  },
];

const productLinks = [
  {
    title: "Мешки для аспирации",
    description: "Верхние и нижние мешки для стружкоотсосов и локальных систем.",
    href: "/meshki-dlya-aspiracii",
  },
  {
    title: "Верхние мешки для аспирации",
    description: "Фильтровальные мешки для тонкой очистки выходящего воздуха.",
    href: "/meshki-dlya-aspiracii",
  },
  {
    title: "Нижние мешки для аспирации",
    description: "Сборные мешки для стружки и пылевых отходов большого объема.",
    href: "/meshki-dlya-aspiracii",
  },
  {
    title: "Фильтровальные рукава",
    description: "Рукавные элементы для промышленных аспирационных установок.",
    href: "/filtracionnye-rukava",
  },
];

const relatedArticles = [
  {
    title: "Как выбрать мешок для аспирации",
    description: "Материалы, размеры и крепления для разных задач.",
    href: "/blog/kak-vybrat-meshok-aspiracii",
  },
  {
    title: "Когда менять фильтровальный мешок",
    description: "Основные признаки износа и рекомендации по замене.",
    href: "/blog/kogda-menyat-filtr-meshok",
  },
  {
    title: "Типы фильтрующих мешков",
    description: "Сравнение конструкций и вариантов для разных условий.",
    href: "/blog/tipy-filtruyushchikh-meshkov",
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
              <li className="text-[#0f172a]">Как работает аспирация</li>
            </ol>
          </nav>

          <h1 className="mt-6 max-w-4xl text-3xl font-bold leading-tight text-[#0f172a] md:text-5xl">
            Как работает система аспирации
          </h1>
          <p className="mt-4 max-w-4xl text-base leading-relaxed text-[#475569] md:text-xl">
            Простое объяснение принципа работы аспирации: как пыль и стружка
            удаляются из рабочей зоны, какие элементы отвечают за фильтрацию и
            как поддерживать стабильную эффективность системы.
          </p>

          <div className="relative mt-8 overflow-hidden rounded-2xl">
            <Image
              src="/images/filter-bags-optimized.webp"
              alt="Система аспирации на производстве"
              width={1600}
              height={900}
              className="h-auto w-full object-cover"
              priority
            />
          </div>

          <section className="mt-12">
            <h2 className="text-3xl font-bold text-[#0f172a] md:text-4xl">
              Что такое аспирация
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#334155] md:text-lg">
              Система аспирации - это инженерный комплекс, который удаляет пыль,
              стружку и мелкие частицы из зоны обработки. Ее задача не только в
              поддержании чистоты, но и в защите оборудования, здоровья
              сотрудников и соблюдении требований промышленной безопасности.
            </p>
            <p className="mt-3 text-base leading-relaxed text-[#334155] md:text-lg">
              В отличие от обычной вентиляции, аспирация работает локально:
              захватывает загрязнения непосредственно у источника образования и
              направляет их в систему фильтрации до возврата воздуха в помещение
              или выброса наружу.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-bold text-[#0f172a] md:text-4xl">
              Как работает система аспирации
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#334155] md:text-lg">
              Вентилятор создает разрежение в воздуховоде, благодаря которому
              пыльный поток втягивается из рабочей зоны. Далее смесь воздуха и
              частиц проходит через пылеуловители, где основная масса отходов
              отделяется и оседает в сборных элементах.
            </p>
            <p className="mt-3 text-base leading-relaxed text-[#334155] md:text-lg">
              На следующем этапе воздух проходит тонкую фильтрацию. Эту роль
              выполняют фильтрационные мешки или рукава, которые удерживают
              остаточную пыль. После очистки воздух возвращается в цех или
              выводится наружу в зависимости от проекта.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {keyCriteria.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-[#dbe3ea] bg-[#edf6f6] p-5"
                >
                  <h3 className="text-xl font-semibold text-[#0f172a]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[#475569]">{item.text}</p>
                </div>
              ))}
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
                  className="rounded-2xl border border-[#e2e8f0] bg-white p-5 shadow-sm"
                >
                  <h3 className="text-xl font-semibold text-[#0f172a]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[#475569]">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-bold text-[#0f172a] md:text-4xl">
              Как движется воздух и пыль в системе
            </h2>
            <div className="mt-6 rounded-2xl border border-[#dbe3ea] bg-white p-6">
              <ol className="space-y-4 text-[#334155]">
                <li>
                  1. Воздух с пылью захватывается в зоне станка через локальный
                  патрубок или защитный кожух.
                </li>
                <li>
                  2. Поток проходит по воздуховодам к пылеуловителю с
                  минимальными потерями давления.
                </li>
                <li>
                  3. Крупные частицы отделяются в циклоне или оседают в нижнем
                  мешке.
                </li>
                <li>
                  4. Мелкая фракция задерживается в верхних мешках или
                  фильтрационных рукавах.
                </li>
                <li>
                  5. Очищенный воздух выводится обратно в рабочее пространство
                  или наружу.
                </li>
              </ol>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-bold text-[#0f172a] md:text-4xl">
              Роль фильтрационных мешков
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#334155] md:text-lg">
              Фильтрационные мешки - ключевой элемент в финальной очистке
              воздуха. Верхние мешки задерживают мелкодисперсные частицы, а
              нижние служат для накопления и удобной утилизации пыли и стружки.
            </p>
            <p className="mt-3 text-base leading-relaxed text-[#334155] md:text-lg">
              Материал мешка подбирается с учетом температуры, влажности,
              абразивности и химического состава пыли. Правильная ткань и точный
              размер напрямую влияют на ресурс фильтра и стабильность тяги.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-bold text-[#0f172a] md:text-4xl">
              Где применяются системы аспирации
            </h2>
            <div className="mt-6 space-y-4">
              {useCases.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border-l-4 border-[#0aa79d] bg-white p-5 shadow-sm"
                >
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
              Частые ошибки в эксплуатации
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

          <section className="mt-12">
            <h2 className="text-3xl font-bold text-[#0f172a] md:text-4xl">
              Когда нужна замена мешков
            </h2>
            <div className="mt-6 rounded-2xl border border-[#dbe3ea] bg-[#f1f5f9] p-6">
              <p className="text-base leading-relaxed text-[#334155] md:text-lg">
                Плановая замена требуется при заметной потере тяги, росте
                перепада давления, механическом износе швов и появлении пылевого
                следа после фильтрации. В среднем ресурс зависит от режима
                работы, типа пыли и корректности обслуживания.
              </p>
              <p className="mt-3 text-base leading-relaxed text-[#334155] md:text-lg">
                Чтобы избежать простоев, фиксируйте интервалы сервиса и держите
                комплект совместимых мешков в запасе.
              </p>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-bold text-[#0f172a] md:text-4xl">
              Рекомендации по подбору решений
            </h2>
            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-[#dbe3ea] bg-white p-5">
                <h3 className="text-2xl font-semibold text-[#0f172a]">
                  Для столярных и мебельных цехов
                </h3>
                <p className="mt-2 text-[#475569]">
                  Для стабильной фильтрации древесной пыли используйте
                  полиэстеровые мешки класса M. Для высокой загрузки выбирайте
                  усиленные нижние мешки с прочным швом.
                </p>
              </div>
              <div className="rounded-2xl border border-[#dbe3ea] bg-white p-5">
                <h3 className="text-2xl font-semibold text-[#0f172a]">
                  Для промышленных установок УВП
                </h3>
                <p className="mt-2 text-[#475569]">
                  Подбирайте фильтрационные рукава по температуре, химической
                  стойкости и площади фильтрации. Обязательно учитывайте режим
                  регенерации и фактический расход воздуха.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-12 rounded-2xl bg-[#0d9b92] p-6 text-white md:p-8">
            <h2 className="text-3xl font-bold md:text-4xl">
              Нужна помощь в подборе?
            </h2>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-white/90 md:text-lg">
              Подскажем, какие мешки и рукава подойдут под вашу аспирационную
              систему, нагрузку и тип пыли. Подберем размеры и материал без
              лишних затрат на эксперименты.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/kontakty"
                className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-[#0d9b92] transition hover:bg-[#e6fffd]"
              >
                Связаться с нами
              </Link>
              <Link
                href="/meshki-dlya-aspiracii"
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
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {productLinks.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="rounded-xl border border-[#e2e8f0] bg-white p-5 transition hover:border-[#0aa79d] hover:shadow-sm"
                >
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
                  className="rounded-xl border border-[#e2e8f0] bg-[#f8fafc] p-5 transition hover:border-[#0aa79d]"
                >
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
