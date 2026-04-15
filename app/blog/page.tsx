import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navigation from "../components/Navigation";
import FloatingContacts from "../components/feature/FloatingContacts";
import { pageMetadata } from "@/lib/seo-metadata";

const posts = [
  {
    href: "/blog/kak-vybrat-meshok-aspiracii",
    image: "/images/products/optimized_image (4).webp",
    category: "Руководство по выбору",
    readTime: "8 мин",
    title: "Как выбрать мешок для аспирации",
    excerpt: "Полное руководство по выбору фильтровального мешка: материалы, размеры, типы креплений и критерии для разных задач.",
    date: "15 марта 2026",
  },
  {
    href: "/blog/kak-rabotaet-aspiraciya",
    image: "/images/products/optimized_image_2 (2).webp",
    category: "Технические знания",
    readTime: "7 мин",
    title: "Как работает система аспирации",
    excerpt: "Подробное объяснение принципа работы систем пылеудаления и фильтрации воздуха на производстве.",
    date: "10 марта 2026",
  },
  {
    href: "/blog/kogda-menyat-filtr-meshok",
    image: "/images/products/clean_no_text.webp.webp",
    category: "Обслуживание",
    readTime: "6 мин",
    title: "Когда менять фильтровальный мешок",
    excerpt: "Признаки износа, средние сроки службы, пошаговая процедура замены и советы по продлению ресурса фильтра.",
    date: "5 марта 2026",
  },
  {
    href: "/blog/tipy-filtruyushchikh-meshkov",
    image: "/images/products/optimized_image2.webp",
    category: "Обзор продукции",
    readTime: "10 мин",
    title: "Типы фильтровальных мешков",
    excerpt: "Полный обзор видов фильтровальных мешков и рукавов: классификация по назначению, материалу и типу системы.",
    date: "1 марта 2026",
  },
] as const;

const popularTopics = [
  {
    href: "/meshki-dlya-aspiracii",
    title: "Мешки для аспирации",
    text: "Верхние и нижние фильтровальные мешки",
  },
  {
    href: "/filtracionnye-rukava",
    title: "Фильтровальные рукава",
    text: "Рукавные фильтры для промышленности",
  },
  {
    href: "/meshki-dlya-struzhkootsosa",
    title: "Стружкоотсосы",
    text: "Мешки для деревообрабатывающих станков",
  },
  {
    href: "/meshki-dlya-ciklonov-i-uvp",
    title: "Циклоны и УВП",
    text: "Мешки для промышленных систем",
  },
] as const;

export const metadata: Metadata = pageMetadata({
  title: "Блог — статьи об аспирации, фильтрации и мешках | FilterFlow",
  description:
    "Статьи FilterFlow: подбор мешков для аспирации, принцип работы систем пылеудаления, сроки замены фильтров и обзор типов фильтровальных мешков.",
  path: "/blog",
  openGraphTitle: "Блог FilterFlow — аспирация и фильтрация",
});

export default function BlogIndexPage() {
  return (
    <>
      <Navigation />
      <FloatingContacts />

      <main className="bg-[#f8fafc] pt-[118px] md:pt-[124px]">
        <div className="mx-auto max-w-7xl px-4 pb-20 pt-6 sm:px-6 lg:px-8">
          <nav aria-label="Хлебные крошки" className="mb-7 text-[13px] text-[#64748b]">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="transition-colors hover:text-[#0f172a]">
                  Главная
                </Link>
              </li>
              <li aria-hidden="true" className="text-[#94a3b8]">
                ›
              </li>
              <li className="text-[#334155]">Статьи</li>
            </ol>
          </nav>

          <section className="rounded-3xl bg-gradient-to-br from-[#effefc] via-white to-[#f0fdfa] p-8 shadow-[0_10px_28px_rgba(15,23,42,0.06)] sm:p-10 lg:p-12">
            <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl lg:text-[2.75rem]">
              Статьи о фильтрации и аспирации
            </h1>
            <p className="mt-5 max-w-3xl text-[15px] leading-relaxed text-[#475569] sm:text-[17px]">
              Полезные материалы о выборе, эксплуатации и обслуживании фильтровальных мешков и систем
              пылеудаления. Здесь собраны статьи о фильтрации и статьи об аспирации для производственных
              предприятий.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="sr-only">Список статей</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {posts.map((post) => (
                <article key={post.href}>
                  <Link
                    href={post.href}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0aa79d]/40 hover:shadow-[0_14px_34px_rgba(10,167,157,0.16)]"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                      />
                    </div>

                    <div className="flex flex-1 flex-col p-5 sm:p-6">
                      <div className="flex flex-wrap items-center gap-3 text-[13px] text-[#64748b]">
                        <span className="rounded-full bg-[#ecfeff] px-2.5 py-1 font-medium text-[#0a8d85]">
                          {post.category}
                        </span>
                        <span>{post.readTime}</span>
                      </div>

                      <h3 className="mt-4 text-xl font-semibold leading-snug text-[#0f172a] transition-colors duration-300 group-hover:text-[#0a8d85]">
                        {post.title}
                      </h3>
                      <p className="mt-3 text-[15px] leading-relaxed text-[#475569]">{post.excerpt}</p>

                      <div className="mt-6 flex items-center justify-between gap-3 text-[14px]">
                        <span className="text-[#94a3b8]">{post.date}</span>
                        <span className="font-medium text-[#0aa79d] transition-colors duration-300 group-hover:text-[#087e77]">
                          Читать →
                        </span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-14">
            <h2 className="text-center text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl">
              Популярные темы
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {popularTopics.map((topic) => (
                <Link
                  key={topic.href}
                  href={topic.href}
                  className="group rounded-2xl border border-[#e2e8f0] bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0aa79d]/40 hover:bg-[#f0fdfa] hover:shadow-[0_12px_28px_rgba(10,167,157,0.12)]"
                >
                  <h3 className="text-lg font-semibold text-[#0f172a] transition-colors duration-300 group-hover:text-[#0a8d85]">
                    {topic.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-[#64748b]">{topic.text}</p>
                </Link>
              ))}
            </div>
          </section>

          <section className="mt-16 rounded-3xl bg-[#0f1f3b] px-6 py-12 text-white shadow-[0_16px_40px_rgba(15,31,59,0.28)] sm:px-10 sm:py-14">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Нужна консультация по подбору фильтра?
              </h2>
              <p className="mt-4 text-[16px] leading-relaxed text-[#c9d7ee] sm:text-[18px]">
                Наши специалисты помогут выбрать оптимальный вариант для вашего оборудования
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                <a
                  href="https://wa.me/79514992576"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-[#16d9c7] px-7 py-3.5 text-[15px] font-semibold text-[#08312d] transition-colors hover:bg-[#0fc8b7] sm:w-auto"
                >
                  Написать в WhatsApp
                </a>
                <Link
                  href="/kontakty"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-white/12 px-7 py-3.5 text-[15px] font-semibold text-white ring-1 ring-white/20 transition-colors hover:bg-white/20 sm:w-auto"
                >
                  Связаться с нами
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
