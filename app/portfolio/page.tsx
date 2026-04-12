import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "../components/Navigation";
import FloatingContacts from "../components/feature/FloatingContacts";
import CookieBanner from "../components/feature/CookieBanner";
import { pageMetadata } from "@/lib/seo-metadata";

type PortfolioCategory = "all" | "wood" | "metal" | "food";

type ProjectCard = {
  title: string;
  category: PortfolioCategory;
  image: string;
  description: string;
};

export const metadata: Metadata = pageMetadata({
  title: "Портфолио FilterFlow — выполненные проекты и решения для аспирации",
  description:
    "Портфолио FilterFlow: реализованные проекты по изготовлению фильтровальных мешков, рукавов и решений для систем аспирации, циклонов и УВП.",
  path: "/portfolio",
});

const categories: { key: PortfolioCategory; label: string }[] = [
  { key: "all", label: "Все проекты" },
  { key: "wood", label: "Деревообработка" },
  { key: "metal", label: "Металлообработка" },
  { key: "food", label: "Пищевая промышленность" },
];

const projects: ProjectCard[] = [
  {
    title: "Мешки для стружкоотсоса",
    category: "wood",
    image: "/images/catalog/meshki-dlya-struzhkootsosa.webp",
    description:
      "Пошив фильтровальных мешков для деревообрабатывающих предприятий и цехов.",
  },
  {
    title: "Фильтровальные рукава",
    category: "metal",
    image: "/images/catalog/filtracionnye-rukava.webp",
    description:
      "Изготовление рукавов для систем промышленной фильтрации и аспирации.",
  },
  {
    title: "Рукавные фильтры",
    category: "metal",
    image: "/images/catalog/rukavnye-filtry.webp",
    description:
      "Решения для очистки воздуха и улавливания мелкодисперсной пыли.",
  },
  {
    title: "Нижние пылесборники",
    category: "wood",
    image: "/images/catalog/nizhnie-pylesborniki.webp",
    description:
      "Накопительные мешки и пылесборники для стружкоотсосов и аспирации.",
  },
  {
    title: "Нестандартный мешок для фильтрации",
    category: "food",
    image: "/images/catalog/nestandartnye-meshki.webp",
    description:
      "Индивидуальный пошив по размерам и параметрам заказчика.",
  },
  {
    title: "Фильтры по размерам",
    category: "food",
    image: "/images/catalog/filtry-po-razmeram.webp",
    description:
      "Подбор и изготовление фильтровальных изделий под конкретное оборудование.",
  },
  {
    title: "Антистатические фильтры",
    category: "metal",
    image: "/images/catalog/antistaticheskie-filtry.webp",
    description:
      "Фильтровальные элементы для сложных производственных условий.",
  },
  {
    title: "Мешки для УВП",
    category: "wood",
    image: "/images/catalog/meshki-dlya-uvp.webp",
    description:
      "Мешки и фильтровальные элементы для установок вентиляции и пылеулавливания.",
  },
];

function getFilteredProjects(category: PortfolioCategory) {
  if (category === "all") {
    return projects;
  }

  return projects.filter((project) => project.category === category);
}

type PortfolioPageProps = {
  searchParams?: Promise<{ category?: string }>;
};

export default async function PortfolioPage({
  searchParams,
}: PortfolioPageProps) {
  const resolvedSearchParams = (await searchParams) ?? {};
  const categoryParam = resolvedSearchParams.category;

  const activeCategory: PortfolioCategory =
    categoryParam === "wood" ||
    categoryParam === "metal" ||
    categoryParam === "food"
      ? categoryParam
      : "all";

  const filteredProjects = getFilteredProjects(activeCategory);

  return (
    <>
      <Navigation />
      <FloatingContacts />

      <main className="bg-[#f8fafc] pt-[118px] md:pt-[124px]">
        <section className="border-b border-slate-200 bg-[#eef7f6]">
          <div className="mx-auto max-w-7xl px-6 py-10 md:px-8 md:py-14">
            <div className="mb-6 text-[13px] text-slate-500">
              <Link href="/" className="transition hover:text-[#0aa79d]">
                Главная
              </Link>
              <span className="mx-2">›</span>
              <span className="text-slate-700">Портфолио</span>
            </div>

            <h1 className="max-w-3xl text-[40px] font-bold leading-[1.05] text-[#0f172a] md:text-[56px]">
              Наши проекты
            </h1>

            <p className="mt-5 max-w-3xl text-[16px] leading-8 text-[#475569] md:text-[18px]">
              Более 300 успешно реализованных проектов по изготовлению
              фильтровальных мешков, рукавов и решений для систем аспирации для
              предприятий различных отраслей по всей России и СНГ.
            </p>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto flex max-w-7xl flex-wrap gap-3 px-6 py-6 md:px-8">
            {categories.map((category) => {
              const isActive = activeCategory === category.key;

              return (
                <Link
                  key={category.key}
                  href={
                    category.key === "all"
                      ? "/portfolio"
                      : `/portfolio?category=${category.key}`
                  }
                  className={`rounded-[12px] px-5 py-3 text-[14px] font-medium transition ${
                    isActive
                      ? "bg-[#12c8bd] text-white shadow-sm"
                      : "bg-[#f1f5f9] text-[#334155] hover:bg-[#e2e8f0]"
                  }`}
                >
                  {category.label}
                </Link>
              );
            })}
          </div>
        </section>

        <section className="bg-[#f8fafc]">
          <div className="mx-auto max-w-7xl px-6 py-10 md:px-8 md:py-14">
            <h2 className="mb-10 text-[26px] font-bold text-[#0f172a] md:text-[38px]">
              Выполненные работы для промышленных предприятий
            </h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
              {filteredProjects.map((project) => (
                <article
                  key={project.title}
                  className="overflow-hidden rounded-[22px] border border-slate-200 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.10)]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition duration-500 hover:scale-[1.04]"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/55 to-transparent" />
                  </div>

                  <div className="p-5">
                    <h3 className="text-[20px] font-semibold leading-7 text-[#0f172a]">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-[14px] leading-7 text-[#475569]">
                      {project.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-14 rounded-[24px] bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.05)] md:p-8">
              <div className="grid gap-6 md:grid-cols-[1.3fr_auto] md:items-center">
                <div>
                  <h2 className="text-[24px] font-bold text-[#0f172a] md:text-[30px]">
                    Нужен похожий проект под ваше оборудование?
                  </h2>
                  <p className="mt-3 max-w-3xl text-[15px] leading-7 text-[#475569]">
                    Подберем материалы, размеры и конструкцию под вашу систему
                    аспирации, циклон, УВП или стружкоотсос. Работаем как со
                    стандартными, так и с нестандартными решениями.
                  </p>
                </div>

                <Link
                  href="/kontakty"
                  className="inline-flex items-center justify-center rounded-[14px] bg-[#12c8bd] px-6 py-3 text-[15px] font-semibold text-white transition hover:bg-[#0aa79d]"
                >
                  Получить расчёт
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <CookieBanner />
    </>
  );
}