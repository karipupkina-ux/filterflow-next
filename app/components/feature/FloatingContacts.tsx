import Link from "next/link";

export default function FloatingContacts() {
  return (
    <>
      <div className="fixed right-5 top-1/2 z-50 flex -translate-y-1/2 flex-col gap-3">
        
        {/* Почта */}
        <Link
          href="/kontakty"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md transition hover:scale-110"
          aria-label="Написать через форму на странице контактов"
        >
          <img src="/images/email.png" alt="Почта" className="h-20 w-20 object-contain" />
        </Link>

        {/* Телефон */}
        <a
          href="tel:+79514992576"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md transition hover:scale-110"
        >
          <img src="/images/phone.png" alt="Телефон" className="h-20 w-20 object-contain" />
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/79514992576"
          target="_blank"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md transition hover:scale-110"
        >
          <img src="/images/whatsapp.png" alt="WhatsApp" className="h-20 w-20 object-contain" />
        </a>

        {/* Telegram */}
        <a
          href="https://t.me/Violetta0502"
          target="_blank"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md transition hover:scale-110"
        >
          <img src="/images/telegram.png" alt="Telegram" className="h-20 w-20 object-contain"/>
        </a>

        {/* MAX */}
        <a
          href="https://max.ru/u/f9LHodD0cOLehfNZxc-dfvXrRQQ-ApKrfczCjbhEa_va3lGdtndd7SgNP8U"
          target="_blank"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-md transition hover:scale-110"
        >
          <img src="/images/max.png" alt="MAX" className="h-6 w-6 object-contain" />
        </a>
      </div>

      {/* Кнопка вверх */}
      <a
        href="#top"
        className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#28c4b7] text-white shadow-lg transition hover:bg-[#20b4a8]"
      >
        ↑
      </a>
    </>
  );
}