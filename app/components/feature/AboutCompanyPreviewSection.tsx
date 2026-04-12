export default function AboutCompanyPreviewSection() {
    const stats = [
      { value: "300+", label: "Выполненных проектов" },
      { value: "5", label: "Лет на рынке" },
      { value: "120+", label: "Постоянных клиентов" },
      { value: "100%", label: "Соблюдение сроков" },
    ];
  
    return (
      <section className="bg-[#f8fafc] py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-start gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
            {/* Левая колонка — изображение */}
            <div className="lg:pt-16">
              <img
                src="/images/logo_fj.webp"
                alt="FilterFlow"
                className="w-full rounded-[20px] object-cover shadow-[0_8px_24px_rgba(15,23,42,0.08)]"
              />
            </div>
  
            {/* Правая колонка — заголовок, текст, цифры, кнопка */}
            <div>
              <h2 className="text-[34px] font-bold leading-[1.08] tracking-[-0.02em] text-[#1f2937] md:text-[52px]">
                О компании FilterFlow
              </h2>
  
              <div className="mt-6 space-y-5 text-[16px] leading-[1.75] text-slate-600 md:text-[17px]">
                <p>
                  Мы специализируемся на производстве фильтровальных мешков и
                  рукавов для систем аспирации, промышленной фильтрации и
                  пылеудаления. Собственное производство позволяет контролировать
                  качество на каждом этапе и изготавливать продукцию по
                  индивидуальным размерам.
                </p>
  
                <p>
                  Работаем с деревообрабатывающими, металлообрабатывающими и
                  другими промышленными предприятиями по всей России и СНГ.
                  Используем только проверенные материалы и гарантируем соблюдение
                  сроков изготовления.
                </p>
              </div>
  
              <div className="mt-8 grid grid-cols-2 gap-4">
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[16px] bg-white px-6 py-5 shadow-[0_8px_20px_rgba(15,23,42,0.06)] ring-1 ring-[#edf1f4]"
                  >
                    <div className="text-[24px] font-bold text-[#0f9f93] md:text-[26px]">
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
                  href="#o-kompanii"
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