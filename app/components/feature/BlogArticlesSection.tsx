import Link from "next/link";

const articles = [
  {
    title: "Как выбрать мешок для аспирации",
    description:
      "Полное руководство по подбору фильтровального мешка: материалы, размеры, типы крепления",
    href: "/blog/kak-vybrat-meshok-aspiracii",
  },
  {
    title: "Как работает система аспирации",
    description:
      "Принцип работы систем пылеудаления и роль фильтровальных мешков в очистке воздуха",
    href: "/blog/kak-rabotaet-aspiraciya",
  },
  {
    title: "Когда менять фильтровальный мешок",
    description:
      "Признаки износа, средние сроки службы и советы по продлению ресурса фильтра",
    href: "/blog/kogda-menyat-filtr-meshok",
  },
  {
    title: "Типы фильтровальных мешков",
    description:
      "Полный обзор видов фильтров для аспирации: верхние, нижние, рукавные, для циклонов",
    href: "/blog/tipy-filtruyushchikh-meshkov",
  },
];

function ArticleIcon() {
  return (
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] border border-[#f7d9cc] bg-[#fff7f2] text-[#ff7a3d] transition-all duration-200 group-hover:border-[#ff7a3d] group-hover:bg-[#ff7a3d] group-hover:text-white">
      <svg
        className="h-[18px] w-[18px]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
      >
        <rect x="6" y="4" width="12" height="16" rx="2" />
        <path d="M9 8h6" strokeLinecap="round" />
        <path d="M9 12h6" strokeLinecap="round" />
        <path d="M9 16h4" strokeLinecap="round" />
      </svg>
    </div>
  );
}

export default function BlogArticlesSection() {
  return (
    <section className="bg-[#f8fafc] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 md:mb-12">
          <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-[#1f2937] md:text-[44px]">
            Полезные статьи о фильтрации и аспирации
          </h2>

          <p className="mt-3 text-[15px] leading-[1.7] text-slate-500 md:text-[17px]">
            Руководства, советы и обзоры от специалистов FilterFlow
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {articles.map((article) => (
            <Link
              key={article.href}
              href={article.href}
              className="group rounded-[18px] border border-[#edf1f5] bg-white px-5 py-5 transition-all duration-200 hover:border-[#ffd9c7] hover:shadow-[0_10px_30px_rgba(15,23,42,0.05)]"
            >
              <div className="flex items-start gap-4">
                <ArticleIcon />

                <div className="min-w-0">
                  <h3 className="text-[18px] font-semibold leading-[1.3] text-[#1f2937] transition-colors duration-200 group-hover:text-[#ff7a3d]">
                    {article.title}
                  </h3>

                  <p className="mt-2 text-[14px] leading-[1.7] text-slate-500 md:text-[15px]">
                    {article.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[15px] font-medium text-[#23b8ad] transition-colors duration-200 hover:text-[#169d92]"
          >
            Все статьи блога
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                d="M5 12h14M13 6l6 6-6 6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}