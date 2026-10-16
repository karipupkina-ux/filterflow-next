import Image from "next/image";
import Link from "next/link";

type WorkItem = {
  title: string;
  image: string;
  width: number;
  height: number;
};

const works: WorkItem[] = [
  {
    title: "Мешки для аспирации",
    image: "/images/nashi-raboti/meshki-aspirac.webp",
    width: 1365,
    height: 2048,
  },
  {
    title: "Производство карманных фильтров",
    image: "/images/nashi-raboti/generated_image.webp",
    width: 1536,
    height: 1024,
  },
  {
    title: "Мешки для циклонов",
    image: "/images/nashi-raboti/meshki-ciklonov-uvp.webp",
    width: 1365,
    height: 2048,
  },
  {
    title: "Верхние мешки-фильтры",
    image: "/images/nashi-raboti/photo_1.webp",
    width: 1024,
    height: 1024,
  },
  {
    title: "Мешки для стружкоотсоса",
    image: "/images/nashi-raboti/industrial_filter_system.webp",
    width: 1536,
    height: 1024,
  },
  {
    title: "Фильтровальные рукава",
    image: "/images/nashi-raboti/filter_bag_white.webp",
    width: 1536,
    height: 1024,
  },
  {
    title: "Рукавные фильтры",
    image: "/images/nashi-raboti/filter_cage.webp",
    width: 1024,
    height: 1024,
  },
  {
    title: "Нижние пылесборники",
    image: "/images/nashi-raboti/image_webp_optimized.webp",
    width: 1365,
    height: 2048,
  },
];

export default function OurWorksSection() {
  return (
    <section className="bg-[#f8fafc] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center md:mb-12">
          <h2 className="text-[34px] font-bold leading-[1.08] tracking-[-0.02em] text-[#1f2937] md:text-[52px]">
            Наши работы
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-[16px] leading-[1.65] text-slate-500 md:text-[17px]">
            Примеры изготовленных фильтровальных изделий и решений для аспирации,
            пылеулавливания и промышленной вентиляции
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 xl:grid-cols-4">
          {works.map((item) => (
            <Link
              key={item.image}
              href="/portfolio/"
              className="group relative overflow-hidden rounded-[14px] bg-white text-left shadow-[0_6px_18px_rgba(15,23,42,0.08)]"
              aria-label={`Открыть портфолио: ${item.title}`}
            >
              <div className="relative h-[156px] bg-[#eef1f4] sm:h-[178px] lg:h-[192px]">
                <div className="absolute inset-0 flex items-center justify-center p-3 md:p-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={item.width}
                    height={item.height}
                    sizes="(max-width: 767px) 50vw, (max-width: 1279px) 33vw, 25vw"
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                    className="max-h-full max-w-full object-contain transition duration-500 group-hover:scale-[1.04]"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/38 to-black/0" />

                <div className="absolute inset-x-0 bottom-0 p-3">
                  <div className="text-[13px] font-medium leading-[1.35] text-[#22d3c5] md:text-[14px]">
                    {item.title}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/portfolio/"
            className="inline-flex h-[46px] items-center justify-center gap-2 rounded-xl bg-[#23b8ad] px-6 text-[15px] font-medium text-white transition hover:bg-[#1ea79d]"
          >
            Смотреть все работы и кейсы
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14M13 6l6 6-6 6"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
