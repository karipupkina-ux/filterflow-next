import Link from "next/link";

const works = [
  {
    title: "Мешки для стружкоотсоса",
    image: "/images/catalog/meshki-dlya-struzhkootsosa.webp",
    href: "/meshki-dlya-struzhkootsosa",
  },
  {
    title: "Фильтровальные рукава",
    image: "/images/catalog/filtracionnye-rukava.webp",
    href: "/filtracionnye-rukava",
  },
  {
    title: "Рукавные фильтры",
    image: "/images/catalog/rukavnye-filtry.webp",
    href: "/filtracionnye-rukava",
  },
  {
    title: "Нижние пылесборники",
    image: "/images/catalog/nizhnie-pylesborniki.webp",
    href: "/nizhnie-meshki",
  },
  {
    title: "Нестандартный мешок для фильтрации",
    image: "/images/catalog/nestandartnye-meshki.webp",
    href: "/nestandartnye-meshki-dlya-filtracii",
  },
  {
    title: "Фильтры по размерам",
    image: "/images/catalog/filtry-po-razmeram.webp",
    href: "/nestandartnye-meshki-dlya-filtracii",
  },
  {
    title: "Антистатические фильтры",
    image: "/images/catalog/antistaticheskie-filtry.webp",
    href: "/filtracionnye-rukava",
  },
  {
    title: "Мешки для УВП",
    image: "/images/catalog/meshki-dlya-uvp.webp",
    href: "/meshki-dlya-ciklonov-i-uvp",
  },
];

export default function OurWorksSection() {
  return (
    <section id="portfolio" className="bg-[#f8fafc] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <div className="mb-3 inline-flex rounded-full bg-[#fff3ed] px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#ff6b2c]">
              Портфолио
            </div>
            <h2 className="text-[30px] font-bold leading-tight text-[#0f172a] md:text-[42px]">
              Наши работы
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
          {works.map((work) => (
            <Link
              key={work.title}
              href={work.href}
              className="group relative overflow-hidden rounded-[18px] bg-slate-200 shadow-[0_10px_25px_rgba(15,23,42,0.08)]"
            >
              <div className="relative aspect-[1/0.72] overflow-hidden">
                <img
                  src={work.image}
                  alt={work.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>

              <div className="absolute inset-x-0 bottom-0 p-3 md:p-4">
                <h3 className="text-[13px] font-medium leading-5 text-[#12c8bd] md:text-[15px]">
                  {work.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-[15px] font-medium text-[#0aa79d] transition hover:text-[#087a73]"
          >
            Смотреть все проекты
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}