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
    <section id="catalog" className="bg-[#f8f9fb] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-4 text-center text-2xl font-bold text-[#0f172a] md:text-3xl">
          Каталог продукции
        </h2>

        <p className="mx-auto mb-16 max-w-4xl text-center text-[15px] leading-relaxed text-[#475569] md:text-[16px]">
          Промышленная фильтрация пылевых частиц и аэрозолей: фильтровальные
          материалы, рукавные фильтры и мешки под аспирационную систему и задачи
          пылеулавливания
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {products.map((item) => (
            <Link key={item.title} href={item.link} className="group block">
              <article className="relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <div className="relative flex h-[300px] items-center justify-center overflow-hidden bg-[#f3f4f6] px-10 py-10">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="max-h-[220px] w-auto max-w-full object-contain transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/12 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                </div>

                <div className="p-7">
                  <h3 className="mb-4 text-[22px] font-bold text-[#0f172a] transition-colors duration-300 group-hover:text-teal-500">
                    {item.title}
                  </h3>

                  <p className="mb-6 text-[16px] leading-7 text-[#475569]">
                    {item.description}
                  </p>

                  <span className="inline-flex items-center gap-2 text-[18px] font-medium text-teal-600 transition-all duration-300 group-hover:gap-4">
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