"use client";

export default function AspirationHero() {
  return (
    <section className="relative w-full h-[420px] flex items-center">
      
      {/* ФОН */}
      <img
        src="https://static.readdy.ai/image/1fc75b7705226fa83728ef373a212f50/bfe6822e0e58d0dac14a91045d30d477.webp"
        alt="Мешки для аспирации"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* ЗАТЕМНЕНИЕ */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* КОНТЕНТ */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-white">
        
        {/* БЕЙДЖ */}
        <div className="inline-block mb-4 px-4 py-2 bg-teal-500/20 text-teal-300 rounded-full text-sm">
          Производство и поставка
        </div>

        {/* ЗАГОЛОВОК */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Мешки для аспирации
        </h1>

        {/* ОПИСАНИЕ */}
        <p className="max-w-xl text-lg text-gray-200 mb-6">
          Фильтровальные мешки для систем аспирации и стружкоотсосов.
          Производство по индивидуальным размерам, доставка по всей России.
        </p>

        {/* КНОПКИ */}
        <div className="flex gap-4 mb-6">
          <button className="bg-teal-500 hover:bg-teal-600 px-6 py-3 rounded-lg font-medium">
            Получить расчет
          </button>

          <button className="border border-white/50 px-6 py-3 rounded-lg hover:bg-white/10">
            Связаться с нами
          </button>
        </div>

        {/* ПРЕИМУЩЕСТВА */}
        <div className="flex gap-6 text-sm text-gray-300">
          <span>✔ Гарантия качества</span>
          <span>✔ Доставка по России</span>
          <span>✔ Индивидуальные размеры</span>
        </div>

      </div>
    </section>
  );
}