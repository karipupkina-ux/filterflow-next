import Image from "next/image";

export default function AboutCompanyPreviewSection() {
    const stats = [
      { value: "Более 5 лет", label: "Опыт в промышленной фильтрации" },
      { value: "Специализация", label: "Аспирация и пылеулавливание" },
      { value: "Контроль", label: "Проверка изделий перед отгрузкой" },
      { value: "На связи", label: "Помогаем уточнить конструкцию до запуска" },
    ];
  
    return (
      <section className="bg-[#f8fafc] py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-start gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
            {/* Левая колонка — изображение */}
            <div className="lg:pt-16">
              <Image
                src="/images/logo_fj.webp"
                alt="FilterFlow"
                width={1024}
                height={1024}
                sizes="(max-width: 1023px) 100vw, 48vw"
                loading="lazy"
                decoding="async"
                fetchPriority="low"
                className="h-auto w-full rounded-[20px] object-cover shadow-[0_8px_24px_rgba(15,23,42,0.08)]"
              />
            </div>
  
            {/* Правая колонка — заголовок, текст, цифры, кнопка */}
            <div>
              <h2 className="text-[34px] font-bold leading-[1.08] tracking-[-0.02em] text-[#1f2937] md:text-[52px]">
                О компании FilterFlow
              </h2>
  
              <div className="mt-6 space-y-5 text-[16px] leading-[1.75] text-slate-600 md:text-[17px]">
                <p>
                  FilterFlow производит фильтровальные мешки и рукава для аспирации
                  и промышленного пылеулавливания, а также поставляет фильтровальные
                  ткани, каркасы, воздушные фильтры, фильтры для покрасочных камер,
                  гибкие воздуховоды и комплектующие.
                </p>
  
                <p>
                  Подбираем продукцию под оборудование и условия эксплуатации:
                  размеры, тип пыли, температуру, влажность и требования к очистке воздуха.
                  Работаем с предприятиями разных отраслей по всей России и СНГ.
                </p>
              </div>
  
              <div className="mt-8 grid grid-cols-2 gap-4">
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[16px] bg-white px-6 py-5 shadow-[0_8px_20px_rgba(15,23,42,0.06)] ring-1 ring-[#edf1f4]"
                  >
                    <div className="text-[19px] font-semibold leading-[1.2] tracking-[-0.015em] text-[#0f9f93] sm:text-[20px] md:text-[22px]">
                      {item.value}
                    </div>
                    <div className="mt-2 text-[14px] leading-[1.45] text-slate-500 md:text-[15px]">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
  
              <div className="mt-6">
                <a
                  href="/o-kompanii/"
                  className="inline-flex h-[48px] items-center justify-center gap-2 rounded-[12px] bg-[#23b8ad] px-6 text-[15px] font-medium text-white transition hover:bg-[#1ea79d]"
                >
                  Подробнее о компании
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14M13 6l6 6-6 6"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
