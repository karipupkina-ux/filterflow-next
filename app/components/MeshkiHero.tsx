export default function MeshkiHero() {
    return (
      <section className="relative w-full h-[420px] md:h-[520px] overflow-hidden">
  
        {/* ФОН */}
        <img
          src="/images/hero.png"
          alt="Мешки для аспирации"
          className="absolute inset-0 w-full h-full object-cover"
        />
  
        {/* ТЁМНЫЙ ГРАДИЕНТ СЛЕВА */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
  
        {/* КОНТЕНТ */}
        <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-6">
  
          <div className="max-w-xl text-white">
  
            {/* БЕЙДЖ */}
            <div className="inline-block bg-teal-500/90 text-white text-sm px-4 py-1 rounded-full mb-4">
              Производство и поставка
            </div>
  
            {/* ЗАГОЛОВОК */}
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Мешки для аспирации
            </h1>
  
            {/* ПОДЗАГОЛОВОК */}
            <p className="text-gray-200 mb-6">
              Фильтровальные мешки для систем аспирации и стружкоотсосов.
              Производство по индивидуальным размерам, доставка по всей России.
            </p>
  
            {/* КНОПКИ */}
            <div className="flex flex-wrap gap-4 mb-6">
  
              <a
                href="/kontakty"
                className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold"
              >
                Получить расчёт
              </a>
  
              <a
                href="/kontakty"
                className="border border-white/40 hover:bg-white/10 px-6 py-3 rounded-lg"
              >
                Связаться с нами
              </a>
  
            </div>
  
            {/* ПРЕИМУЩЕСТВА */}
            <div className="flex flex-wrap gap-6 text-sm text-gray-200">
  
              <span>✔ Гарантия качества</span>
              <span>✔ Доставка по России</span>
              <span>✔ Индивидуальные размеры</span>
  
            </div>
  
          </div>
        </div>
      </section>
    );
  }