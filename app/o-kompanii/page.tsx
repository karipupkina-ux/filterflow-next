import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navigation from "../components/Navigation";
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

  return (
    <>
      <Navigation />

      <main className="bg-[#f8fafc]">
        <div className="mx-auto max-w-7xl px-4 pb-20 pt-6 sm:px-6 lg:px-8">
          <nav aria-label="Хлебные крошки" className="mb-7 text-[13px] text-[#64748b]">
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/" className="transition-colors hover:text-[#0f172a]">
                  Главная
                </Link>
              </li>
              <li aria-hidden="true" className="text-[#94a3b8]">
                /
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
        </div>
      </main>
    </>
  );
}