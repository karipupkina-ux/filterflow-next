"use client";

export default function TechnologySection() {
  return (
    <section className="w-full bg-white py-14 md:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        {/* Top label */}
        <p className="text-sm uppercase tracking-widest text-gray-400 mb-3">
          ТЕХНОЛОГИЯ ПРОИЗВОДСТВА
        </p>

        {/* Main title */}
        <h2 className="mb-8 text-[32px] font-bold leading-[1.12] tracking-tight text-[#1F2937] sm:text-4xl md:mb-10 md:text-6xl">
          Производство фильтровальных мешков и рукавов
        </h2>

        <div className="grid lg:grid-cols-[1.2fr_0.9fr] gap-12 items-start">

          {/* LEFT SIDE */}
          <div className="max-w-xl">

            <h3 className="text-xl font-semibold text-[#1F2937] mb-4">
              Современное оборудование для точного пошива
            </h3>

            <p className="mb-8 text-[15px] leading-relaxed text-gray-600 sm:mb-10 sm:text-base">
              Мы используем передовое швейное оборудование и современные технологии раскроя для производства фильтровальных мешков высочайшего качества. Автоматизированный раскрой ткани обеспечивает точность до миллиметра и минимальные отходы материала, что позволяет нам предлагать конкурентные цены без ущерба для качества.
            </p>

            <h3 className="text-xl font-semibold text-[#1F2937] mb-4">
              Подбор фильтровальных тканей под условия работы
            </h3>

            <p className="mb-8 text-[15px] leading-relaxed text-gray-600 sm:mb-10 sm:text-base">
              Материал подбираем по температуре, влажности, химической среде, типу пыли и способу регенерации. В ассортименте есть полиэстер, полипропилен, полиамид и специальные термо- и химически стойкие фильтровальные ткани; отдельные материалы доступны метражом.
            </p>

            <h3 className="text-xl font-semibold text-[#1F2937] mb-4">
              Многоступенчатый контроль качества
            </h3>

            <p className="mb-8 text-[15px] leading-relaxed text-gray-600 sm:mb-10 sm:text-base">
              Каждое изделие проходит многоступенчатый контроль качества на всех этапах производства: от входного контроля материалов до финальной проверки готового изделия. Мы проверяем прочность швов, герметичность соединений и соответствие размеров техническому заданию заказчика. Только после прохождения всех этапов контроля продукция отправляется клиенту.
            </p>

            <p className="text-[15px] leading-relaxed text-gray-600 sm:text-base">
              Собственное производство полного цикла позволяет нам контролировать каждый этап изготовления и гарантировать стабильное качество при любом объёме заказа — от единичных изделий до крупных партий для промышленных предприятий.
            </p>

          </div>

          {/* RIGHT SIDE - STATS */}
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 items-start">

            <div className="rounded-2xl border border-gray-200 bg-[#FAFAFA] p-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] sm:p-7">
              <div className="mb-2 text-3xl font-bold text-[#F97316] md:text-4xl">300+</div>
              <div className="mb-2 font-semibold text-[#111827]">Выполненных проектов</div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Успешно реализованных заказов для предприятий деревообработки, металлообработки и пищевой промышленности
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-[#FAFAFA] p-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] sm:p-7">
              <div className="mb-2 text-3xl font-bold text-[#F97316] md:text-4xl">5</div>
              <div className="mb-2 font-semibold text-[#111827]">Лет на рынке</div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Пять лет производим мешки для аспирации и фильтровальные рукава для промышленных предприятий по всей России
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-[#FAFAFA] p-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] sm:p-7">
              <div className="mb-2 text-3xl font-bold text-[#F97316] md:text-4xl">120+</div>
              <div className="mb-2 font-semibold text-[#111827]">Постоянных клиентов</div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Компании из разных отраслей регулярно заказывают у нас мешки для стружкоотсосов и систем аспирации
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-[#FAFAFA] p-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] sm:p-7">
              <div className="mb-2 text-3xl font-bold text-[#F97316] md:text-4xl">100%</div>
              <div className="mb-2 font-semibold text-[#111827]">Соблюдение сроков</div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Чёткое планирование производства и контроль на каждом этапе гарантируют своевременную поставку заказа
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
