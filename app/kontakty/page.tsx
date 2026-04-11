import Navigation from "../components/Navigation";

export const metadata = {
  title: "Контакты FilterFlow",
  description: "Свяжитесь с нами: телефон, email, мессенджеры",
};

export default function KontaktyPage() {
  return (
    <>
      <Navigation />

      <main className="max-w-7xl mx-auto px-6 py-16">
        {/* Заголовок */}
        <h1 className="text-4xl font-bold mb-6">
          Контакты FilterFlow
        </h1>

        <p className="text-lg text-gray-600 mb-10">
          Свяжитесь с нами удобным способом
        </p>

        {/* Контакты */}
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold mb-4">Телефон</h2>
            <a href="tel:+79514992576" className="text-teal-600 text-lg">
              +7 951 499-25-76
            </a>

            <h2 className="text-2xl font-bold mt-8 mb-4">Email</h2>
            <a href="mailto:filterflow@mail.ru" className="text-teal-600 text-lg">
              filterflow@mail.ru
            </a>

            <h2 className="text-2xl font-bold mt-8 mb-4">Мессенджеры</h2>
            <p>WhatsApp / Telegram</p>
          </div>

          <div className="bg-gray-100 p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Форма (позже)</h2>
            <p>Здесь будет форма</p>
          </div>
        </div>
      </main>
    </>
  );
}