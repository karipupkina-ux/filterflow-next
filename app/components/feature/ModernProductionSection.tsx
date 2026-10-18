import Image from "next/image";

export default function ModernProductionSection() {
    const items = [
      {
        title: "Точный раскрой по размерам",
        description:
          "Раскрой выполняется по заданным размерам и лекалам с учётом конструкции изделия и способа крепления. Это помогает обеспечить точную посадку мешка или рукава на оборудование заказчика.",
      },
      {
        title: "Промышленные швейные машины",
        description:
          "Специализированное оборудование для работы с техническими тканями различной плотности. Используем двойной и тройной шов для максимальной прочности и герметичности соединений.",
      },
      {
        title: "Контроль качества",
        description:
          "Многоступенчатая проверка помогает контролировать качество на этапах производства. Проверяем прочность швов, точность размеров и соответствие техническому заданию перед отправкой.",
      },
      {
        title: "Финальная проверка заказа",
        description:
          "Перед отгрузкой проверяем соответствие изделия заданным размерам, конструкции и комплектности. Для нестандартных заказов дополнительно сверяем исполнение с техническим заданием или образцом.",
      },
    ];
  
    return (
      <section className="bg-[#f8fafc] py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
  
          {/* ЗАГОЛОВОК */}
          <p className="text-[13px] uppercase tracking-[0.15em] text-gray-400 mb-3">
            НАШИ ТЕХНОЛОГИИ
          </p>
  
          <h2 className="text-[32px] md:text-[42px] font-bold leading-[1.1] text-[#1f2937] mb-6 max-w-3xl">
            Производство фильтровальных мешков и рукавов под оборудование заказчика
          </h2>
  
          {/* ТЕКСТ */}
          <div className="max-w-3xl text-[15px] md:text-[16px] text-gray-600 leading-[1.7] space-y-4 mb-10">
            <p>
              Производственная часть FilterFlow включает раскрой и пошив{" "}
              <b>мешков для аспирации</b>, мешков для стружкоотсосов, циклонов и УВП,
              а также <b>фильтровальных рукавов</b>. Для комплексных задач дополнительно
              подбираем ткани, каркасы, воздушные фильтры, воздуховоды и крепёж.
            </p>
  
            <p>
              Срок изготовления зависит от типа изделия, материала, объёма и сложности
              заказа. Работаем с предприятиями деревообработки, металлообработки,
              пищевой и химической промышленности по всей России и странам СНГ.
            </p>
          </div>
  
          {/* НИЖНИЙ БЛОК: ФОТО + СПИСОК */}
          <div className="grid lg:grid-cols-2 gap-10 items-start">
  
            {/* ФОТО */}
            <div>
              <Image
                src="/images/catalog/nashi-tehnol.webp"
                alt="Производство"
                width={1200}
                height={800}
                sizes="(max-width: 1023px) 100vw, 50vw"
                loading="lazy"
                decoding="async"
                fetchPriority="low"
                className="h-auto w-full rounded-2xl object-cover"
              />
            </div>
  
            {/* СПИСОК */}
            <div className="space-y-6">
              {items.map((item, index) => (
                <div key={index} className="flex gap-4">
  
                  {/* ОРАНЖЕВАЯ ИКОНКА */}
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fff1e8] text-[#ff6b2c] text-xl">
                    ✓
                  </div>
  
                  {/* ТЕКСТ */}
                  <div>
                    <h3 className="text-[16px] font-semibold text-[#1f2937] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-[14px] text-gray-600 leading-[1.6]">
                      {item.description}
                    </p>
                  </div>
  
                </div>
              ))}
            </div>
  
          </div>
        </div>
      </section>
    );
  }
