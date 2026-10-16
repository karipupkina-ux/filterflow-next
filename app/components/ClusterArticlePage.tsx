import Image from "next/image";
import Link from "next/link";
import Navigation from "./Navigation";
import ArticleJsonLd from "./ArticleJsonLd";
import FloatingContacts from "./feature/FloatingContacts";

export type ClusterSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type ClusterRelated = {
  title: string;
  href: string;
  text: string;
};

type Props = {
  title: string;
  description: string;
  path: string;
  image: string;
  imageAlt: string;
  datePublished: string;
  dateModified: string;
  intro: string;
  sections: ClusterSection[];
  productHref: string;
  productLabel: string;
  productText: string;
  related: ClusterRelated[];
};

export default function ClusterArticlePage({
  title,
  description,
  path,
  image,
  imageAlt,
  datePublished,
  dateModified,
  intro,
  sections,
  productHref,
  productLabel,
  productText,
  related,
}: Props) {
  return (
    <>
      <ArticleJsonLd
        title={title}
        description={description}
        path={path}
        datePublished={datePublished}
        dateModified={dateModified}
      />
      <Navigation />
      <FloatingContacts />

      <main className="bg-[#f8fafc] pb-20 pt-[118px]">
        <article className="mx-auto max-w-6xl px-4 sm:px-6">
          <nav aria-label="Хлебные крошки" className="pt-5 text-[13px] text-[#64748b]">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link href="/#top" className="hover:text-[#0aa79d]">Главная</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/blog/" className="hover:text-[#0aa79d]">Статьи</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-[#334155]" aria-current="page">{title}</li>
            </ol>
          </nav>

          <header className="mt-6 grid items-center gap-7 rounded-[26px] bg-white p-6 shadow-[0_10px_28px_rgba(15,23,42,0.06)] sm:p-8 lg:grid-cols-[1.45fr_0.55fr] lg:gap-10">
            <div>
              <h1 className="max-w-4xl text-3xl font-bold leading-[1.1] tracking-[-0.03em] text-[#0f172a] sm:text-4xl lg:text-[48px]">
                {title}
              </h1>
              <p className="mt-5 max-w-3xl text-[16px] leading-[1.75] text-[#475569] sm:text-[17px]">
                {intro}
              </p>
            </div>

            <div className="relative mx-auto aspect-[4/3] w-full max-w-[360px] overflow-hidden rounded-[20px] border border-[#e2e8f0] bg-[#f8fafc]">
              <Image
                src={image}
                alt={imageAlt}
                fill
                sizes="(max-width: 1024px) 360px, 32vw"
                className="object-contain p-3"
                priority
              />
            </div>
          </header>

          <div className="mt-12 space-y-12">
            {sections.map((section) => (
              <section key={section.title} className="rounded-[24px] border border-[#e2e8f0] bg-white p-6 shadow-sm sm:p-8">
                <h2 className="text-[26px] font-bold leading-[1.2] tracking-[-0.02em] text-[#0f172a] sm:text-[32px]">
                  {section.title}
                </h2>
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph} className="mt-4 text-[16px] leading-[1.8] text-[#475569]">
                    {paragraph}
                  </p>
                ))}
                {section.bullets && (
                  <ul className="mt-5 space-y-3">
                    {section.bullets.map((item) => (
                      <li key={item} className="flex gap-3 text-[16px] leading-[1.7] text-[#334155]">
                        <span className="mt-[9px] h-2 w-2 shrink-0 rounded-full bg-[#0aa79d]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <section className="mt-12 rounded-[24px] bg-[#0f2341] p-7 text-white sm:p-9">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#38d5c7]">Подбор продукции</p>
            <h2 className="mt-3 text-[28px] font-bold leading-[1.2] sm:text-[36px]">{productLabel}</h2>
            <p className="mt-4 max-w-3xl text-[16px] leading-[1.75] text-white/80">{productText}</p>
            <Link
              href={productHref}
              className="mt-6 inline-flex h-[50px] items-center justify-center rounded-[14px] bg-[#28c4b7] px-6 text-[15px] font-semibold text-white transition hover:bg-[#20b4a8]"
            >
              Перейти к продукции →
            </Link>
          </section>

          <section className="mt-12">
            <h2 className="text-[28px] font-bold text-[#0f172a] sm:text-[34px]">Читайте также</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-[18px] border border-[#e2e8f0] bg-white p-5 transition hover:border-[#9fded7] hover:bg-[#f0fdfa]"
                >
                  <h3 className="text-[18px] font-semibold leading-[1.35] text-[#0f172a]">{item.title}</h3>
                  <p className="mt-2 text-[14px] leading-[1.6] text-[#64748b]">{item.text}</p>
                </Link>
              ))}
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
