import Image from "next/image";
import Link from "next/link";
import Navigation from "./Navigation";
import BreadcrumbJsonLd from "./BreadcrumbJsonLd";
import FloatingContacts from "./feature/FloatingContacts";

type Fact = { label: string; value: string };
type Section = { title: string; text: string };

type Props = {
  title: string;
  subtitle: string;
  path: string;
  image: string;
  imageAlt: string;
  imageNote?: string;
  facts: Fact[];
  sections: Section[];
  productHref: string;
  productLabel: string;
};

export default function PortfolioCasePage({
  title,
  subtitle,
  path,
  image,
  imageAlt,
  imageNote,
  facts,
  sections,
  productHref,
  productLabel,
}: Props) {
  return (
    <>
      <Navigation />
      <BreadcrumbJsonLd
        currentName={title}
        currentPath={path}
        parentName="Портфолио"
        parentPath="/portfolio/"
      />
      <FloatingContacts />
      <main className="bg-[#f8fafc] pb-20 pt-[118px] md:pt-[124px]">
        <article className="mx-auto max-w-6xl px-4 sm:px-6">
          <nav aria-label="Хлебные крошки" className="pt-5 text-[13px] text-[#64748b]">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link href="/#top" className="hover:text-[#0aa79d]">Главная</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/portfolio/" className="hover:text-[#0aa79d]">Портфолио</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-[#334155]" aria-current="page">{title}</li>
            </ol>
          </nav>

          <header className="mt-6 rounded-[28px] bg-white p-7 shadow-[0_10px_30px_rgba(15,23,42,0.06)] sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0aa79d]">
              Кейс подбора FilterFlow
            </p>
            <h1 className="mt-3 max-w-5xl text-[34px] font-bold leading-[1.08] tracking-[-0.03em] text-[#0f172a] sm:text-[48px] lg:text-[56px]">
              {title}
            </h1>
            <p className="mt-5 max-w-4xl text-[16px] leading-[1.8] text-[#475569] sm:text-[18px]">
              {subtitle}
            </p>
          </header>

          <section className="mt-8 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="overflow-hidden rounded-[24px] bg-white p-4 shadow-[0_10px_28px_rgba(15,23,42,0.06)]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[18px] bg-[#eef1f4]">
                <Image src={image} alt={imageAlt} fill sizes="(max-width: 1024px) 100vw, 55vw" className="object-contain p-4" priority />
              </div>
              {imageNote && (
                <p className="px-2 pb-1 pt-4 text-[13px] leading-[1.6] text-[#64748b]">{imageNote}</p>
              )}
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {facts.map((fact) => (
                <div key={fact.label} className="rounded-[22px] border border-[#e2e8f0] bg-white p-6">
                  <p className="text-sm font-medium text-[#0aa79d]">{fact.label}</p>
                  <p className="mt-2 text-[18px] font-semibold leading-[1.45] text-[#0f172a]">{fact.value}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-10 grid gap-5 md:grid-cols-3">
            {sections.map((section) => (
              <article key={section.title} className="rounded-[22px] bg-white p-6 shadow-sm">
                <h2 className="text-[21px] font-semibold text-[#0f172a]">{section.title}</h2>
                <p className="mt-3 text-[15px] leading-[1.75] text-[#475569]">{section.text}</p>
              </article>
            ))}
          </section>

          <section className="mt-10 rounded-[24px] bg-[#0f2341] p-7 text-white sm:p-9">
            <h2 className="text-[28px] font-bold sm:text-[34px]">Есть похожая задача?</h2>
            <p className="mt-4 max-w-3xl text-[16px] leading-[1.75] text-white/80">
              Пришлите модель оборудования, размеры, фотографию, чертёж или маркировку.
              Подберём конструкцию и уточним, какие параметры нужно подтвердить до изготовления.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href={productHref} className="rounded-[13px] bg-[#28c4b7] px-6 py-3 text-[15px] font-semibold text-white hover:bg-[#20b4a8]">
                {productLabel}
              </Link>
              <Link href="/kontakty/" className="rounded-[13px] border border-white/25 px-6 py-3 text-[15px] font-semibold text-white hover:bg-white/10">
                Отправить запрос
              </Link>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
