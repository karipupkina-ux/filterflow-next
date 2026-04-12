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
      <section className="bg-[#f8f9fb] py-24">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
  
          {/* Заголовок */}
          <h2 className="text-[40px] md:text-[56px] font-bold text-[#0f172a] mb-4">
            Преимущества FilterFlow
          </h2>
  
          <p className="text-[18px] text-[#64748b] mb-16">
            Пошив фильтровальных рукавов и мешков на заказ — индивидуальные
            размеры, сроки и поставки по России
          </p>
  
          {/* Карточки */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {items.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 border border-[#e5e7eb] shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Иконка */}
                <div className="mb-6 flex justify-center">
                  <div className="flex h-[70px] w-[70px] items-center justify-center rounded-xl bg-[#d1f2ef]">
                    {item.icon}
                  </div>
                </div>
  
                {/* Заголовок */}
                <h3 className="text-[20px] font-semibold text-[#0f172a] mb-3">
                  {item.title}
                </h3>
  
                {/* Текст */}
                <p className="text-[15px] text-[#64748b] leading-[1.6]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }