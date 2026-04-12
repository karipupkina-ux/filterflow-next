import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "../components/Navigation";
import { pageMetadata } from "@/lib/seo-metadata";

const posts = [
  {
    href: "/blog/kak-vybrat-meshok-aspiracii",
    title: "Как выбрать мешок для аспирации",
    excerpt:
      "Материалы, размеры, тип крепления и подбор под модель оборудования.",
  },
  {
    href: "/blog/kak-rabotaet-aspiraciya",
    title: "Как работает система аспирации",
    excerpt:
      "Принцип пылеудаления, роль фильтровальных мешков и рукавных фильтров.",
  },
  {
    href: "/blog/kogda-menyat-filtr-meshok",
    title: "Когда менять фильтровальный мешок",
    excerpt:
      "Признаки износа, сроки службы и влияние на производительность линии.",
  },
  {
    href: "/blog/tipy-filtruyushchikh-meshkov",
    title: "Типы фильтровальных мешков",
    excerpt:
      "Верхние, нижние, рукавные решения и мешки для циклонов и УВП.",
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
      <main className="bg-[#f8fafc] pb-20 pt-[118px]">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-3xl font-bold leading-tight text-[#0f172a] md:text-4xl">
            Полезные статьи
          </h1>
          <p className="mt-4 text-[16px] leading-relaxed text-[#475569]">
            Материалы о подборе фильтровальных мешков, рукавных фильтров и
            обслуживании аспирационных систем на производстве и в мастерских.
          </p>

          <ul className="mt-10 space-y-4">
            {posts.map((post) => (
              <li key={post.href}>
                <Link
                  href={post.href}
                  className="block rounded-2xl border border-[#e2e8f0] bg-white p-6 shadow-sm transition hover:border-[#ff6b2c]/40 hover:shadow-md"
                >
                  <h2 className="text-lg font-semibold text-[#0f172a] md:text-xl">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-[15px] leading-relaxed text-[#64748b]">
                    {post.excerpt}
                  </p>
                  <span className="mt-3 inline-block text-[15px] font-medium text-[#ff6b2c]">
                    Читать →
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <p className="mt-10 text-center">
            <Link
              href="/"
              className="text-[15px] font-medium text-[#0aa79d] hover:underline"
            >
              ← На главную
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}
