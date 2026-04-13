import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navigation from "../components/Navigation";
import FloatingContacts from "../components/feature/FloatingContacts";
import { pageMetadata } from "@/lib/seo-metadata";

export const metadata: Metadata = pageMetadata({
  title: "О компании FilterFlow — производство мешков для аспирации и рукавов",
  description:
    "FilterFlow — производитель фильтровальных мешков и рукавов для аспирации, циклонов и УВП. Пошив на заказ, подбор материалов, доставка по России.",
  path: "/o-kompanii",
});

export default function OKompaniiPage() {
  const advantages = [
    {
      title: "Современное оборудование",
      text: "Профессиональные швейные машины и раскройное оборудование.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M4 7h6l2 3h8v7H4z" />
          <path d="M7 7V4m10 6v-2" />
        </svg>
      ),
    },
    {
      title: "Контроль качества",
      text: "Проверка каждого изделия перед отправкой клиенту.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 3l7 3v5c0 4.2-2.7 8-7 10-4.3-2-7-5.8-7-10V6z" />
          <path d="m9.5 12.5 1.9 1.9 3.6-3.6" />
        </svg>
      ),
    },
    {
      title: "Индивидуальные размеры",
      text: "Изготовление по чертежам и образцам заказчика.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M7 4v16M17 4v16M7 8h5M12 16h5" />
          <rect x="5" y="3" width="14" height="18" rx="2" />
        </svg>
      ),
    },
    {
      title: "Быстрое производство",
      text: "Сроки изготовления от 3 до 10 рабочих дней.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="8" />
          <path d="M12 8v5l3 2" />
        </svg>
      ),
    },
  ];
  const stats = [
    {
      value: "300+",
      title: "Выполненных проектов",
      text: "Успешно реализованных заказов для предприятий различных отраслей.",
    },
    {
      value: "5",
      title: "Лет на рынке",
      text: "Опыт производства фильтровальной продукции с 2020 года.",
    },
    {
      value: "120+",
      title: "Постоянных клиентов",
      text: "Предприятия, которые регулярно заказывают нашу продукцию.",
    },
    {
      value: "100%",
      title: "Соблюдение сроков",
      text: "Гарантируем изготовление и доставку точно в срок.",
    },
  ];
  const industries = [
    {
      title: "Деревообработка",
      text: "Мешки для аспирации деревообрабатывающих станков, циклонов и стружкоотсосов. Работаем с мебельными фабриками, лесопилками и столярными цехами.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M5 5h14M12 5v14" />
          <path d="M8 9h8" />
        </svg>
      ),
    },
    {
      title: "Металлообработка",
      text: "Фильтровальные рукава для систем удаления металлической стружки и пыли. Сотрудничаем с машиностроительными и металлообрабатывающими заводами.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 4v2M12 18v2M4 12h2M18 12h2M6.3 6.3l1.4 1.4M16.3 16.3l1.4 1.4M17.7 6.3l-1.4 1.4M7.7 16.3l-1.4 1.4" />
        </svg>
      ),
    },
    {
      title: "Другие отрасли",
      text: "Пищевая промышленность, химическое производство, строительство. Изготавливаем фильтры для любых систем пылеудаления и аспирации.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M6 4h12v16H6z" />
          <path d="M9 8h6M9 12h6M9 16h4" />
        </svg>
      ),
    },
  ];
  const productionBenefits = [
    {
      title: "Индивидуальный подход",
      text: "Изготавливаем фильтры по вашим чертежам, образцам или фотографиям. Консультируем по выбору материалов и конструкции.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="8" r="3" />
          <path d="M6 19c0-2.8 2.7-5 6-5m0 0 2 2 4-4" />
        </svg>
      ),
    },
    {
      title: "Соблюдение сроков",
      text: "Гарантируем изготовление в оговоренные сроки. Работаем по договору с четкими обязательствами и прозрачным графиком.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="4" y="5" width="16" height="15" rx="2" />
          <path d="M8 3v4M16 3v4M8 11h8M12 14v3" />
        </svg>
      ),
    },
    {
      title: "Гарантия качества",
      text: "Используем только проверенные материалы и контролируем качество каждого изделия перед отправкой клиенту.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 3l7 3v5c0 4.2-2.7 8-7 10-4.3-2-7-5.8-7-10V6z" />
          <path d="m9.5 12.5 1.9 1.9 3.6-3.6" />
        </svg>
      ),
    },
    {
      title: "Цены производителя",
      text: "Работаем без посредников, поэтому вы получаете продукцию напрямую от производителя по выгодным условиям.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M5 7h8l6 6-6 6-8-8z" />
          <circle cx="10" cy="10" r="1.2" />
        </svg>
      ),
    },
    {
      title: "Доставка по России и СНГ",
      text: "Отправляем заказы транспортными компаниями в любой регион. Помогаем выбрать оптимальный способ доставки.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M3 7h11v8H3zM14 10h4l3 3v2h-7z" />
          <circle cx="7" cy="17" r="1.5" />
          <circle cx="17" cy="17" r="1.5" />
        </svg>
      ),
    },
    {
      title: "Техническая поддержка",
      text: "Консультируем по эксплуатации, замене и обслуживанию фильтров. Подбираем оптимальное решение под вашу систему.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M5 12a7 7 0 1 1 14 0v5a2 2 0 0 1-2 2h-2v-5h4" />
          <path d="M5 14h4v5H7a2 2 0 0 1-2-2z" />
        </svg>
      ),
    },
  ];
  const achievements = [
    {
      title: "География поставок",
      text: "Работаем с предприятиями по всей России - от Калининграда до Владивостока. Отправляем продукцию в страны СНГ: Казахстан, Беларусь, Узбекистан, Киргизию.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 21s7-4.8 7-10a7 7 0 1 0-14 0c0 5.2 7 10 7 10z" />
          <circle cx="12" cy="11" r="2.5" />
        </svg>
      ),
    },
    {
      title: "Повторные заказы",
      text: "Более 85% наших клиентов делают повторные заказы. Это подтверждает высокое качество продукции и надежность сотрудничества с FilterFlow.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M8 7H4v4M16 17h4v-4" />
          <path d="M4 11a8 8 0 0 0 13 3M20 13a8 8 0 0 0-13-3" />
        </svg>
      ),
    },
    {
      title: "Ассортимент продукции",
      text: "Производим более 50 типоразмеров фильтровальных мешков и рукавов. Изготавливаем нестандартные изделия по индивидуальным чертежам заказчика.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 3 4 7l8 4 8-4-8-4zM4 12l8 4 8-4M4 17l8 4 8-4" />
        </svg>
      ),
    },
    {
      title: "Положительные отзывы",
      text: "Клиенты отмечают высокое качество пошива, точное соблюдение размеров, долгий срок службы фильтров и оперативность выполнения заказов.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M9 11V6a3 3 0 0 1 3-3l1 4h5v4l-2 8H8V11zM4 11h4v8H4z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <Navigation />
      <FloatingContacts />

      <main className="bg-[#f8fafc] pt-[118px] md:pt-[124px]">
        <div className="mx-auto max-w-7xl px-4 pb-20 pt-6 sm:px-6 lg:px-8">
          <nav aria-label="Хлебные крошки" className="mb-7 text-[13px] text-[#64748b]">
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/" className="transition-colors hover:text-[#0f172a]">
                  Главная
                </Link>
              </li>
              <li aria-hidden="true" className="text-[#94a3b8]">
                ›
              </li>
              <li className="text-[#334155]">О компании</li>
            </ol>
          </nav>

          <section className="mb-14 rounded-3xl bg-white p-8 shadow-[0_10px_28px_rgba(15,23,42,0.06)] sm:p-10 lg:p-12">
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-[#0f172a] sm:text-5xl">
              О компании FilterFlow
            </h1>
            <p className="mt-6 max-w-3xl text-[17px] leading-relaxed text-[#334155]">
              Мы - производитель фильтровальных мешков и рукавов для систем аспирации и пылеулавливания.
              Работаем с промышленными предприятиями по всей России и СНГ, обеспечивая стабильное качество,
              понятные сроки и технически точное изготовление фильтровальных мешков на заказ.
            </p>
          </section>

          <section className="rounded-3xl bg-white p-6 shadow-[0_10px_28px_rgba(15,23,42,0.06)] sm:p-8 lg:p-10">
            <div className="grid items-start gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12">
              <div>
                <h2 className="max-w-xl text-4xl font-bold leading-[1.05] text-[#0f172a] sm:text-5xl">
                  Производство фильтровальных мешков и рукавов
                </h2>
                <p className="mt-4 text-2xl font-semibold text-[#0aa79d] sm:text-[30px]">
                  Собственное производство полного цикла
                </p>
                <div className="mt-6 space-y-4 text-[17px] leading-relaxed text-[#334155]">
                  <p>
                    FilterFlow располагает собственным производственным цехом, оснащенным оборудованием для
                    раскроя, пошива и контроля качества. Мы производим фильтровальные рукава и мешки для
                    аспирации серийно и по индивидуальным параметрам.
                  </p>
                  <p>
                    Производство полного цикла позволяет контролировать каждый этап - от подбора материала
                    до финальной проверки перед отправкой. Благодаря этому клиенты получают стабильный
                    результат и прогнозируемый срок службы продукции.
                  </p>
                  <p>
                    Выполняем изготовление фильтровальных мешков на заказ для различных отраслей: дерево- и
                    металлообработки, цементного и пищевого производства, а также других промышленных
                    процессов, где важна эффективная пылеочистка.
                  </p>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {advantages.map((item) => (
                    <article
                      key={item.title}
                      className="rounded-2xl border border-[#e2e8f0] bg-[#f8fafc] p-4"
                    >
                      <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-[#d7f6f3] text-[#0a8d85]">
                        {item.icon}
                      </div>
                      <h3 className="text-base font-semibold text-[#0f172a]">{item.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-[#475569]">{item.text}</p>
                    </article>
                  ))}
                </div>
              </div>

              <div className="lg:sticky lg:top-28">
                <div className="overflow-hidden rounded-3xl">
                  <Image
                    src="/images/catalog/converted_image4.webp"
                    alt="Производство фильтровальных мешков и рукавов FilterFlow"
                    width={900}
                    height={1200}
                    className="h-full w-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="mt-14">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-[#0f172a] sm:text-5xl">Опыт работы</h2>
              <p className="mx-auto mt-4 max-w-3xl text-[20px] leading-relaxed text-[#475569]">
                За годы работы мы накопили обширный опыт в производстве фильтровальной продукции и построили
                долгосрочные отношения с клиентами по всей России и СНГ.
              </p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl bg-white p-6 text-center shadow-[0_8px_18px_rgba(15,23,42,0.08)]"
                >
                  <p className="text-[52px] font-bold leading-none text-[#0aa79d]">{item.value}</p>
                  <h3 className="mt-3 text-[24px] font-semibold text-[#0f172a]">{item.title}</h3>
                  <p className="mt-2 text-[16px] leading-relaxed text-[#64748b]">{item.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-12 rounded-3xl bg-white p-6 shadow-[0_10px_28px_rgba(15,23,42,0.06)] sm:p-8 lg:p-10">
            <h2 className="text-[40px] font-bold text-[#0aa79d]">Работа с различными отраслями</h2>
            <div className="mt-7 grid gap-5 lg:grid-cols-3">
              {industries.map((item) => (
                <article key={item.title} className="rounded-2xl border border-[#e2e8f0] bg-[#f8fafc] p-5">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#d7f6f3] text-[#0a8d85]">
                    {item.icon}
                  </div>
                  <h3 className="text-[28px] font-semibold text-[#0f172a]">{item.title}</h3>
                  <p className="mt-2 text-[17px] leading-relaxed text-[#475569]">{item.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-14">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-[#0f172a] sm:text-5xl">Преимущества производства</h2>
              <p className="mx-auto mt-4 max-w-3xl text-[20px] leading-relaxed text-[#475569]">
                Почему предприятия выбирают FilterFlow для производства фильтровальных мешков и рукавов.
              </p>
            </div>
            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {productionBenefits.map((item) => (
                <article key={item.title} className="rounded-2xl border border-[#e2e8f0] bg-white p-6">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#d7f6f3] text-[#0a8d85]">
                    {item.icon}
                  </div>
                  <h3 className="text-[28px] font-semibold text-[#0f172a]">{item.title}</h3>
                  <p className="mt-2 text-[17px] leading-relaxed text-[#475569]">{item.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-14">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-[#0f172a] sm:text-5xl">Наши достижения</h2>
              <p className="mx-auto mt-4 max-w-3xl text-[20px] leading-relaxed text-[#475569]">
                Результаты работы FilterFlow за годы присутствия на рынке фильтровальной продукции.
              </p>
            </div>

            <div className="mt-8 grid items-start gap-6 rounded-3xl bg-white p-5 shadow-[0_10px_28px_rgba(15,23,42,0.06)] md:p-8 lg:grid-cols-[1fr_1.1fr]">
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src="/images/catalog/conver55ted_image.webp"
                  alt="Достижения компании FilterFlow"
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="space-y-5">
                {achievements.map((item) => (
                  <article key={item.title} className="flex items-start gap-4">
                    <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#d7f6f3] text-[#0a8d85]">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-[32px] font-semibold leading-tight text-[#0f172a]">{item.title}</h3>
                      <p className="mt-1 text-[17px] leading-relaxed text-[#475569]">{item.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section
            id="kontakty-filterflow"
            className="mt-14 overflow-hidden rounded-3xl bg-gradient-to-b from-[#0ea5a2] to-[#0e8f8d] px-6 py-12 text-white sm:px-10 sm:py-14"
          >
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-4xl font-bold sm:text-5xl">Готовы начать сотрудничество?</h2>
              <p className="mx-auto mt-5 max-w-3xl text-[20px] leading-relaxed text-white/90">
                Свяжитесь с нами для консультации по выбору фильтровальной продукции. Рассчитаем стоимость,
                подберем оптимальное решение и изготовим мешки точно в срок.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="#kontakty-filterflow-details"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-7 py-3 text-base font-semibold text-[#0e8f8d] transition hover:bg-[#f1f5f9]"
                >
                  Связаться с нами
                </a>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center rounded-xl border border-white/30 px-7 py-3 text-base font-semibold text-white transition hover:bg-white/10"
                >
                  Посмотреть портфолио
                </Link>
              </div>
            </div>

            <div id="kontakty-filterflow-details" className="mx-auto mt-10 max-w-5xl border-t border-white/20 pt-8">
              <div className="grid gap-6 text-center md:grid-cols-3">
                <div>
                  <a
                    href="tel:+79514992576"
                    className="text-4xl font-bold tracking-tight text-white transition hover:text-[#d7f6f3]"
                  >
                    +7 951 499-25-76
                  </a>
                  <p className="mt-2 text-[18px] text-white/80">Звоните в любое время</p>
                </div>
                <div>
                  <a
                    href="mailto:filterflow@mail.ru"
                    className="text-4xl font-bold tracking-tight text-white transition hover:text-[#d7f6f3]"
                  >
                    filterflow@mail.ru
                  </a>
                  <p className="mt-2 text-[18px] text-white/80">Пишите на почту</p>
                </div>
                <div>
                  <p className="text-4xl font-bold tracking-tight text-white">от 1 дня</p>
                  <p className="mt-2 text-[18px] text-white/80">Срок изготовления</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}