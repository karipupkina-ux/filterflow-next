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
          Производство и подбор решений для промышленной фильтрации
        </h2>

        <div className="grid lg:grid-cols-[1.2fr_0.9fr] gap-12 items-start">

          {/* LEFT SIDE */}
          <div className="max-w-xl">

            <h3 className="text-xl font-semibold text-[#1F2937] mb-4">
              Современное оборудование для точного пошива
            </h3>

            <p className="mb-8 text-[15px] leading-relaxed text-gray-600 sm:mb-10 sm:text-base">
              Для пошива используем оборудование, рассчитанное на работу с техническими тканями. Раскрой выполняется по размерам и лекалам изделия с учётом конструкции, припусков и способа крепления, чтобы готовый мешок или рукав соответствовал заданным параметрам.
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
              Перед отгрузкой проверяем соответствие изделия заданным размерам, конструкции, швам и комплектности. Для нестандартных заказов дополнительно сверяем исполнение с техническим заданием, чертежом или образцом.
            </p>

            <p className="text-[15px] leading-relaxed text-gray-600 sm:text-base">
              Для задач промышленной фильтрации подбираем решение комплексно: материал,
              конструкцию фильтрующего элемента, способ крепления и совместимые
              комплектующие. Это позволяет работать как с единичными изделиями, так и с
              серийными заказами для предприятий.
            </p>

          </div>

          {/* RIGHT SIDE - STATS */}
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 items-start">

            <div className="rounded-2xl border border-gray-200 bg-[#FAFAFA] p-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] sm:p-7">
              <div className="mb-2 text-[24px] font-semibold tracking-[-0.02em] text-[#F97316] md:text-[28px]">От 1 шт.</div>
              <div className="mb-2 font-semibold text-[#111827]">Единичные и серийные заказы</div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Изготавливаем фильтровальные мешки и рукава как единично, так и партиями.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-[#FAFAFA] p-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] sm:p-7">
              <div className="mb-2 text-[24px] font-semibold tracking-[-0.02em] text-[#F97316] md:text-[28px]">По ТЗ</div>
              <div className="mb-2 font-semibold text-[#111827]">Подбор под оборудование</div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Работаем по размерам, чертежу, модели оборудования, фотографии или образцу.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-[#FAFAFA] p-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] sm:p-7">
              <div className="mb-2 text-[24px] font-semibold tracking-[-0.02em] text-[#F97316] md:text-[28px]">РФ + СНГ</div>
              <div className="mb-2 font-semibold text-[#111827]">Отправка заказов</div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Организуем отправку готовой продукции транспортными компаниями.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-[#FAFAFA] p-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] sm:p-7">
              <div className="mb-2 text-[24px] font-semibold tracking-[-0.02em] text-[#F97316] md:text-[28px]">Под задачу</div>
              <div className="mb-2 font-semibold text-[#111827]">Фильтры и комплектующие</div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Подбираем ткани, каркасы, воздушные фильтры, воздуховоды и крепёж под задачу.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
