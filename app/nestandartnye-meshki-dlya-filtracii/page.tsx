import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "../components/Navigation";
import FloatingContacts from "../components/feature/FloatingContacts";

export const metadata: Metadata = {
  title: "Нестандартные мешки для фильтрации",
  description:
    "Изготовление нестандартных фильтровальных мешков по чертежам и размерам заказчика. Производство под задачи аспирации, стружкоотсосов, УВП и циклонов.",
  alternates: {
    canonical: "https://www.filterflow.ru/nestandartnye-meshki-dlya-filtracii",
  },
  openGraph: {
    title: "Нестандартные мешки для фильтрации | FilterFlow",
    description:
      "Производство нестандартных фильтровальных мешков по индивидуальным размерам и чертежам заказчика.",
    url: "https://www.filterflow.ru/nestandartnye-meshki-dlya-filtracii",
    siteName: "FilterFlow",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/images/logo.png",
        width: 512,
        height: 512,
        alt: "FilterFlow",
      },
    ],
  },
};

const advantages = [
  {
    title: "Пошив по вашим чертежам",
    description:
      "Изготавливаем мешки по индивидуальным размерам, эскизам, образцам и техническим заданиям заказчика.",
  },
  {
    title: "Под любые задачи фильтрации",
    description:
      "Подбираем форму, материал, плотность ткани и тип крепления под конкретное оборудование и тип пыли.",
  },
  {
    title: "Прочные швы и контроль качества",
    description:
      "Проверяем размеры, качество швов, посадку, плотность материала и общее соответствие вашему заказу.",
  },
  {
    title: "Быстрые сроки изготовления",
    description:
      "Стандартный запуск в работу — от 3–5 рабочих дней. Сложные нестандартные изделия рассчитываем отдельно.",
  },
  {
    title: "Доставка по всей России",
    description:
      "Отправляем заказы транспортными компаниями по Москве, регионам России и в другие города.",
  },
  {
    title: "Цены напрямую от производителя",
    description:
      "Работаем без посредников, поэтому вы получаете изделия напрямую с производства по выгодной цене.",
  },
];

const applications = [
  "Системы аспирации в деревообработке",
  "Стружкоотсосы и циклоны",
  "Установки вентиляции и пылеулавливания",
  "Промышленные фильтровальные системы",
  "Сбор крупной стружки и опилок",
  "Фильтрация мелкодисперсной пыли",
];

const materials = [
  {
    title: "Полиэстер",
    text: "Универсальный износостойкий материал для большинства задач аспирации и пылеулавливания.",
  },
  {
    title: "Полипропилен",
    text: "Подходит для ряда специальных задач, обладает хорошей химической стойкостью.",
  },
  {
    title: "Иглопробивной материал",
    text: "Используется там, где важна высокая пылеёмкость и надёжная фильтрация.",
  },
  {
    title: "Тканевые решения под задачу",
    text: "Подбираем материал индивидуально под температуру, влажность, тип пыли и особенности установки.",
  },
];

const productionSteps = [
  "Получаем чертёж, размеры, фото или образец мешка",
  "Уточняем задачу, материал, способ крепления и особенности эксплуатации",
  "Согласовываем стоимость и сроки изготовления",
  "Запускаем заказ в производство",
  "Проверяем готовые изделия и отправляем заказчику",
];

const faqItems = [
  {
    question: "Можно ли заказать мешки по индивидуальным размерам?",
    answer:
      "Да, это основное направление данной страницы. Мы изготавливаем нестандартные фильтровальные мешки по размерам, чертежам, фото и образцам заказчика.",
  },
  {
    question: "Что нужно прислать для расчёта?",
    answer:
      "Лучше всего прислать размеры, фото старого мешка, тип оборудования, описание пыли и желаемое количество. Если есть чертёж — это идеально.",
  },
  {
    question: "Вы шьёте только один тип нестандартных мешков?",
    answer:
      "Нет. Мы изготавливаем разные формы и размеры: мешки для аспирации, циклонов, УВП, нестандартные накопительные и фильтровальные изделия.",
  },
  {
    question: "Можно ли изготовить пробную партию?",
    answer:
      "Да, в большинстве случаев можно начать с небольшой партии или единичного образца, чтобы проверить посадку и работу изделия.",
  },
  {
    question: "Какой срок изготовления?",
    answer:
      "Обычные заказы запускаем быстро. Срок зависит от сложности изделия, объёма и наличия выбранного материала.",
  },
  {
    question: "Доставляете ли вы по России?",
    answer:
      "Да, отправляем заказы транспортными компаниями по всей России.",
  },
];

function SectionTitle({
  badge,
  title,
  text,
}: {
  badge: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="mb-10 text-center md:mb-12">
      <div className="mb-3 inline-flex rounded-full bg-[#eafaf6] px-4 py-1 text-[13px] font-medium text-teal-600">
        {badge}
      </div>

      <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
        {title}
      </h2>

      {text ? (
        <p className="mx-auto max-w-3xl text-[15px] leading-7 text-slate-500 md:text-[16px]">
          {text}
        </p>
      ) : null}
    </div>
  );
}

export default function NestandartnyeMeshkiPage() {
  return (
    <>
      <Navigation />
      <FloatingContacts />

      <main className="bg-[#f6f7f7]">
        {/* HERO */}
        <section className="mx-auto max-w-[1280px] px-6 pt-6 pb-12">
          <div className="mb-8 rounded-lg bg-[#eef0f0] px-6 py-4">
            <div className="flex items-center gap-2 text-[14px]">
              <Link
                href="/"
                className="font-medium text-[#149c8d] transition hover:underline"
              >
                Главная
              </Link>
              <span className="text-gray-400">›</span>
              <span className="text-gray-600">
                Нестандартные мешки для фильтрации
              </span>
            </div>
          </div>

          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h1 className="mb-6 text-[28px] font-semibold leading-[1.2] text-[#0f172a] sm:text-[34px] lg:text-[40px]">
                Нестандартные мешки
                <br />
                для фильтрации по
                <br />
                чертежам заказчика
              </h1>

              <p className="mb-8 max-w-[620px] text-[16px] leading-[1.7] text-[#5b677a]">
                Изготавливаем фильтровальные мешки по индивидуальным чертежам,
                размерам и техническим требованиям заказчика. Подбираем материал,
                форму, способ крепления и конфигурацию под конкретную задачу и
                оборудование.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:filterflow@mail.ru?subject=Заявка%20на%20нестандартные%20мешки%20для%20фильтрации"
                  className="inline-flex items-center justify-center rounded-xl bg-[#22b8ad] px-6 py-3 text-[16px] font-semibold text-white transition hover:bg-[#18a398]"
                >
                  Отправить заявку
                </a>

                <a
                  href="https://wa.me/79514992576"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl border border-[#22b8ad] px-6 py-3 text-[16px] font-semibold text-[#22b8ad] transition hover:bg-[#eafaf6]"
                >
                  Написать в WhatsApp
                </a>
              </div>
            </div>

            <div className="flex justify-end">
              <div className="w-full max-w-[560px] overflow-hidden rounded-[20px] bg-white shadow-sm">
                <img
                  src="/images/catalog/filter_bags_table.webp"
                  alt="Нестандартные мешки для фильтрации"
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ТЕКСТОВЫЙ БЛОК */}
        <section className="bg-white py-14 md:py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="rounded-[24px] border border-[#e8edf2] bg-[#fbfcfc] p-8 md:p-10">
              <h2 className="mb-5 text-[28px] font-semibold text-slate-900 md:text-[34px]">
                Нестандартные фильтровальные мешки — производство под ваши задачи
              </h2>

              <div className="space-y-5 text-[16px] leading-8 text-slate-600">
                <p>
                  Если стандартные решения не подходят по форме, высоте, диаметру,
                  способу крепления или условиям эксплуатации, мы изготавливаем
                  нестандартные мешки для фильтрации по чертежам, эскизам, образцам
                  и фото заказчика.
                </p>

                <p>
                  Такие изделия востребованы для систем аспирации, стружкоотсосов,
                  циклонов, УВП и различных промышленных фильтровальных установок,
                  где требуется точное соответствие размерам оборудования.
                </p>

                <p>
                  Мы подбираем не только геометрию изделия, но и материал,
                  плотность, конструкцию шва, вариант крепления и другие параметры,
                  чтобы мешок работал долго и эффективно именно в ваших условиях.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ПРЕИМУЩЕСТВА */}
        <section className="bg-[#f8fafc] py-14 md:py-16">
          <div className="mx-auto max-w-7xl px-6">
            <SectionTitle
              badge="Преимущества"
              title="Почему заказывают у нас нестандартные мешки"
              text="Работаем с нестандартными размерами и понимаем, насколько важна точность для правильной посадки изделия."
            />

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
              {advantages.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[22px] border border-[#edf1f5] bg-white px-7 py-7 shadow-[0_4px_14px_rgba(15,23,42,0.04)] transition hover:-translate-y-[2px] hover:shadow-[0_8px_20px_rgba(15,23,42,0.07)]"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eefaf7]">
                    <svg
                      className="h-5 w-5 text-teal-500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12l5 5L20 7"
                      />
                    </svg>
                  </div>

                  <h3 className="mb-3 text-[18px] font-semibold leading-[1.35] text-slate-900 md:text-[19px]">
                    {item.title}
                  </h3>

                  <p className="text-[15px] leading-8 text-slate-500">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ГДЕ ПРИМЕНЯЮТСЯ */}
        <section className="bg-white py-14 md:py-16">
          <div className="mx-auto max-w-7xl px-6">
            <SectionTitle
              badge="Применение"
              title="Где используются нестандартные мешки для фильтрации"
              text="Индивидуальные изделия особенно важны там, где стандартные размеры не подходят или нужна нестандартная форма."
            />

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
              {applications.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-[18px] border border-[#e8edf2] bg-[#fbfcfc] px-5 py-5"
                >
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#eafaf6]">
                    <svg
                      className="h-4 w-4 text-teal-500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12l4 4L19 6"
                      />
                    </svg>
                  </div>

                  <p className="text-[16px] leading-7 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* МАТЕРИАЛЫ */}
        <section className="bg-[#f8fafc] py-14 md:py-16">
          <div className="mx-auto max-w-7xl px-6">
            <SectionTitle
              badge="Материалы"
              title="Подбираем материал под условия эксплуатации"
              text="Материал нестандартного мешка зависит от типа пыли, нагрузки, температуры и требований к степени фильтрации."
            />

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
              {materials.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[22px] border border-[#e9eef3] bg-white px-6 py-6 shadow-[0_4px_14px_rgba(15,23,42,0.04)]"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#eefaf7]">
                    <svg
                      className="h-5 w-5 text-teal-500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4l8 4-8 4-8-4 8-4z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 12l8 4 8-4"
                      />
                    </svg>
                  </div>

                  <h3 className="mb-3 text-[18px] font-semibold leading-[1.35] text-slate-900">
                    {item.title}
                  </h3>

                  <p className="text-[15px] leading-8 text-slate-500">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* КАК МЫ РАБОТАЕМ */}
        <section className="bg-white py-14 md:py-16">
          <div className="mx-auto max-w-7xl px-6">
            <SectionTitle
              badge="Процесс"
              title="Как оформляется заказ"
              text="Процесс простой и понятный — нам важно быстро понять вашу задачу и дать точный расчёт."
            />

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-5">
              {productionSteps.map((item, index) => (
                <article
                  key={item}
                  className="rounded-[22px] border border-[#e8edf2] bg-[#fbfcfc] px-5 py-6"
                >
                  <div className="mb-4 text-[28px] font-bold text-teal-500">
                    {index + 1}
                  </div>
                  <p className="text-[15px] leading-7 text-slate-700">{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#129d95] py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-10 rounded-[28px] bg-[#16a79f] px-8 py-10 text-white shadow-[0_10px_30px_rgba(18,157,149,0.25)] md:px-10 lg:grid-cols-[1.15fr_0.85fr]">
              <div>
                <div className="mb-3 inline-flex rounded-full bg-white/15 px-4 py-1 text-[13px] font-medium text-white">
                  Заказать расчёт
                </div>

                <h2 className="mb-5 text-[30px] font-semibold leading-[1.2] md:text-[40px]">
                  Нужны нестандартные мешки для фильтрации?
                </h2>

                <p className="max-w-[720px] text-[16px] leading-8 text-white/90">
                  Пришлите размеры, чертёж, фото или описание задачи. Мы поможем
                  подобрать материал, рассчитаем стоимость и сроки изготовления.
                </p>
              </div>

              <div className="rounded-[24px] bg-white p-6 text-slate-900">
                <div className="space-y-4">
                  <a
                    href="mailto:filterflow@mail.ru?subject=Расчёт%20нестандартных%20мешков"
                    className="flex h-[56px] w-full items-center justify-center rounded-xl bg-[#ff6b2c] px-5 text-[16px] font-semibold text-white transition hover:bg-[#f15e20]"
                  >
                    Отправить заявку на почту
                  </a>

                  <a
                    href="https://wa.me/79514992576"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-[56px] w-full items-center justify-center rounded-xl border border-[#d9e2ea] px-5 text-[16px] font-semibold text-slate-800 transition hover:bg-[#f8fafc]"
                  >
                    Написать в WhatsApp
                  </a>

                  <a
                    href="tel:+79514992576"
                    className="flex h-[56px] w-full items-center justify-center rounded-xl border border-[#d9e2ea] px-5 text-[16px] font-semibold text-slate-800 transition hover:bg-[#f8fafc]"
                  >
                    Позвонить: +7 (951) 499-25-76
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ПОХОЖИЕ ПРОДУКТЫ */}
        <section className="bg-[#f8fafc] py-14 md:py-16">
          <div className="mx-auto max-w-7xl px-6">
            <SectionTitle
              badge="Каталог"
              title="Похожие категории продукции"
              text="Если вам нужны не только нестандартные мешки, посмотрите и другие разделы каталога."
            />

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
              {[
                {
                  title: "Мешки для аспирации",
                  text: "Стандартные и индивидуальные решения для систем аспирации.",
                  link: "/meshki-dlya-aspiracii",
                },
                {
                  title: "Фильтровальные рукава",
                  text: "Рукавные решения для промышленных систем очистки воздуха.",
                  link: "/filtracionnye-rukava",
                },
                {
                  title: "Мешки для стружкоотсоса",
                  text: "Для деревообрабатывающих станков и стружкоотсосов.",
                  link: "/meshki-dlya-struzhkootsosa",
                },
                {
                  title: "Мешки для циклонов и УВП",
                  text: "Изделия для пылеулавливающих установок и циклонных систем.",
                  link: "/meshki-dlya-ciklonov-i-uvp",
                },
              ].map((item) => (
                <Link
                  key={item.title}
                  href={item.link}
                  className="group rounded-[22px] border border-[#e9eef3] bg-white px-6 py-6 shadow-[0_4px_14px_rgba(15,23,42,0.04)] transition hover:-translate-y-[2px] hover:shadow-[0_8px_20px_rgba(15,23,42,0.08)]"
                >
                  <h3 className="mb-3 text-[18px] font-semibold leading-[1.35] text-slate-900 transition group-hover:text-teal-600">
                    {item.title}
                  </h3>
                  <p className="mb-4 text-[15px] leading-8 text-slate-500">
                    {item.text}
                  </p>
                  <span className="text-[15px] font-semibold text-teal-600">
                    Подробнее →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white py-14 md:py-16">
          <div className="mx-auto max-w-5xl px-6">
            <SectionTitle
              badge="FAQ"
              title="Часто задаваемые вопросы"
              text="Собрали ответы на частые вопросы по нестандартным фильтровальным мешкам."
            />

            <div className="space-y-4">
              {faqItems.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-[20px] border border-[#e8edf2] bg-[#fbfcfc] px-6 py-5"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                    <span className="text-left text-[18px] font-semibold leading-[1.4] text-slate-900">
                      {item.question}
                    </span>

                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#eafaf6] text-teal-600 transition group-open:bg-[#22b8ad] group-open:text-white">
                      +
                    </span>
                  </summary>

                  <div className="pt-4 text-[16px] leading-8 text-slate-600">
                    {item.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* SEO-БЛОК */}
        <section className="bg-[#f8fafc] py-14 md:py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="rounded-[24px] border border-[#e8edf2] bg-white p-8 md:p-10">
              <h2 className="mb-6 text-[28px] font-semibold text-slate-900 md:text-[34px]">
                Нестандартные мешки для фильтрации — что важно при заказе
              </h2>

              <div className="space-y-5 text-[16px] leading-8 text-slate-600">
                <p>
                  При заказе нестандартных фильтровальных мешков важно учитывать
                  не только размеры изделия, но и условия его эксплуатации:
                  температуру воздуха, тип и фракцию пыли, влажность, интенсивность
                  работы оборудования и способ крепления.
                </p>

                <p>
                  Для систем аспирации и стружкоотсосов особенно важно, чтобы мешок
                  точно подходил по диаметру, высоте и конструкции крепления.
                  Неправильно подобранное изделие может быстро изнашиваться,
                  пропускать пыль или плохо садиться на оборудование.
                </p>

                <p>
                  Мы рекомендуем заранее подготовить размеры, фото старого мешка
                  или чертёж. Это позволяет быстрее рассчитать стоимость и
                  изготовить изделие без лишних уточнений.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}