export default function Advantages() {
    const items = [
      {
        title: "Индивидуальный подход",
        text: "Изготовление фильтров по вашим размерам и требованиям",
        icon: (
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
            <path d="M12 6v6l4 2" stroke="#0f766e" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        ),
      },
      {
        title: "Быстрое производство",
        text: "Соблюдаем сроки изготовления и оперативно отгружаем заказы",
        icon: (
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="9" stroke="#0f766e" strokeWidth="2"/>
            <path d="M12 7v5l3 2" stroke="#0f766e" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        ),
      },
      {
        title: "Гарантия качества",
        text: "Используем проверенные материалы и контролируем каждый этап",
        icon: (
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
            <path d="M12 3l7 4v5c0 5-3.5 7-7 9-3.5-2-7-4-7-9V7l7-4z" stroke="#0f766e" strokeWidth="2"/>
          </svg>
        ),
      },
      {
        title: "Доставка по России",
        text: "Работаем со всеми регионами России и странами СНГ",
        icon: (
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
            <rect x="3" y="7" width="13" height="10" stroke="#0f766e" strokeWidth="2"/>
            <path d="M16 10h3l2 3v4h-5z" stroke="#0f766e" strokeWidth="2"/>
          </svg>
        ),
      },
    ];
  
    return (
      <section className="bg-[#f8f9fb] py-14 md:py-20 lg:py-24">
        <div className="mx-auto max-w-[1200px] px-4 text-center sm:px-6">
  
          {/* Заголовок */}
          <h2 className="mb-4 text-[30px] font-bold text-[#0f172a] md:text-[44px] lg:text-[56px]">
            Преимущества FilterFlow
          </h2>
  
          <p className="mb-10 text-[15px] leading-[1.6] text-[#64748b] md:mb-14 md:text-[18px]">
            Пошив фильтровальных рукавов и мешков на заказ — индивидуальные
            размеры, сроки и поставки по России
          </p>
  
          {/* Карточки */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 xl:grid-cols-4 xl:gap-7">
            {items.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border border-[#e5e7eb] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:p-7"
              >
                {/* Иконка */}
                <div className="mb-6 flex justify-center">
                  <div className="flex h-[58px] w-[58px] items-center justify-center rounded-xl bg-[#d1f2ef] md:h-[70px] md:w-[70px]">
                    {item.icon}
                  </div>
                </div>
  
                {/* Заголовок */}
                <h3 className="mb-2 text-[18px] font-semibold text-[#0f172a] md:mb-3 md:text-[20px]">
                  {item.title}
                </h3>
  
                {/* Текст */}
                <p className="text-[14px] leading-[1.6] text-[#64748b] md:text-[15px]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }