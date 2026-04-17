import Link from "next/link";

const products = [
  {
    title: "Мешки для аспирации",
    description:
      "Верхние и нижние мешки для систем аспирации деревообрабатывающих станков. Изготовление по индивидуальным размерам.",
    image: "/images/catalog/meshki-aspiracii.webp",
    link: "/meshki-dlya-aspiracii",
  },
  {
    title: "Фильтровальные рукава",
    description:
      "Рукавные фильтры для промышленных систем очистки воздуха. Полиэстер, антистатические и термостойкие материалы.",
    image: "/images/catalog/filtracionalnye-rukava.webp",
    link: "/filtracionnye-rukava",
  },
  {
    title: "Мешки для стружкоотсоса",
    description:
      "Прочные тканевые мешки для циклонов и УВП. Устойчивы к истиранию, различные типы креплений.",
    image: "/images/catalog/meshki-struzhkootsosa.webp",
    link: "/meshki-dlya-struzhkootsosa",
  },
  {
    title: "Мешки для циклонов и УВП",
    description:
      "Специализированные мешки для циклонных установок и установок вентиляции и пылеудаления. Надёжная фильтрация и долгий срок службы.",
    image: "/images/catalog/meshki-ciklonov-uvp.webp",
    link: "/meshki-dlya-ciklonov-i-uvp",
  },
  {
    title: "Быстросъёмные хомуты",
    description:
      "Металлические хомуты для быстрого крепления фильтровальных мешков. Нержавеющая сталь, различные диаметры.",
    image: "/images/catalog/bystrosemnye-homuty.webp",
    link: "/bystrosemnye-homyty",
  },
  {
    title: "Нестандартные мешки для фильтрации",
    description:
      "Изготовление фильтровальных мешков по индивидуальным чертежам и размерам.",
    image: "/images/catalog/nestandartnye-meshki.webp",
    link: "/nestandartnye-meshki-dlya-filtracii",
  },
];

export default function Products() {
  return (
    <section id="catalog" className="bg-[#f8f9fb] py-14 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="mb-4 text-center text-[30px] font-bold text-[#0f172a] md:text-[44px] lg:text-[56px]">
          Каталог продукции
        </h2>

        <p className="mx-auto mb-10 max-w-4xl text-center text-[14px] leading-relaxed text-[#475569] md:mb-14 md:text-[16px]">
          Промышленная фильтрация пылевых частиц и аэрозолей: фильтровальные
          материалы, рукавные фильтры и мешки под аспирационную систему и задачи
          пылеулавливания
        </p>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 xl:grid-cols-3">
          {products.map((item) => (
            <Link key={item.title} href={item.link} className="group block">
              <article className="relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <div className="relative flex h-[220px] items-center justify-center overflow-hidden bg-[#f3f4f6] px-7 py-7 sm:h-[260px] sm:px-9 sm:py-9 md:h-[280px]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="max-h-[180px] w-auto max-w-full object-contain transition-transform duration-700 ease-out group-hover:scale-110 sm:max-h-[220px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/12 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                </div>

                <div className="p-5 sm:p-6 md:p-7">
                  <h3 className="mb-3 text-[20px] font-bold text-[#0f172a] transition-colors duration-300 group-hover:text-teal-500 md:mb-4 md:text-[22px]">
                    {item.title}
                  </h3>

                  <p className="mb-4 text-[15px] leading-6 text-[#475569] md:mb-6 md:text-[16px] md:leading-7">
                    {item.description}
                  </p>

                  <span className="inline-flex items-center gap-2 text-[16px] font-medium text-teal-600 transition-all duration-300 group-hover:gap-3 md:text-[18px] md:group-hover:gap-4">
                    Подробнее →
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}