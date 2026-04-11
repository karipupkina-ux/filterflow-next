"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const productLinks = [
    { href: "/meshki-dlya-aspiracii", label: "Мешки для аспирации" },
    { href: "/filtracionnye-rukava", label: "Фильтровальные рукава" },
    { href: "/meshki-dlya-struzhkootsosa", label: "Мешки для стружкоотсоса" },
    { href: "/meshki-dlya-ciklonov-i-uvp", label: "Мешки для циклонов" },
    { href: "/verhnie-meshki", label: "Верхние мешки" },
    { href: "/nizhnie-meshki", label: "Нижние мешки" },
    { href: "/tkanevye-meshki", label: "Тканевые мешки" },
    { href: "/meshki-dlya-opilok", label: "Мешки для опилок" },
  ];

  const extraProductLinks = [
    { href: "/bystrosemnye-homyty", label: "Быстросъёмные хомуты" },
    { href: "/nestandartnye-meshki-dlya-filtracii", label: "Нестандартные мешки" },
    { href: "/meshki-dlya-ciklonov-i-uvp", label: "Мешки для циклона" },
    { href: "/nestandartnye-meshki-dlya-filtracii", label: "Пошив фильтр-мешков" },
    { href: "/nestandartnye-meshki-dlya-filtracii", label: "Производство мешков" },
  ];

  const articleLinks = [
    { href: "/blog", label: "Все статьи блога" },
    { href: "/blog/kak-vybrat-meshok-aspiracii", label: "Как выбрать мешок для аспирации" },
    { href: "/blog/kak-rabotaet-aspiraciya", label: "Как работает аспирация" },
    { href: "/blog/kogda-menyat-filtr-meshok", label: "Когда менять фильтр-мешок" },
    { href: "/blog/tipy-filtruyushchikh-meshkov", label: "Типы фильтровальных мешков" },
  ];

  const companyLinks = [
    { href: "/o-kompanii", label: "О компании" },
    { href: "/portfolio", label: "Портфолио" },
    { href: "/kontakty", label: "Контакты" },
    { href: "/sitemap.xml", label: "Карта сайта" },
  ];

  return (
    <footer className="bg-[#0E274B] text-white">
      <div className="mx-auto max-w-[1360px] px-6 pt-14 sm:px-8 md:pt-16 lg:px-10">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-[320px_1fr_1fr_1fr] md:gap-x-14 lg:grid-cols-[360px_1fr_1fr_1fr]">
          <div className="max-w-[320px]">
            <Link href="/" className="inline-flex items-center gap-4">
              <Image
                src="/images/logo.png"
                alt="FilterFlow"
                width={64}
                height={64}
                className="h-[64px] w-[64px] rounded-[14px] object-cover"
              />
              <span className="text-[30px] font-semibold tracking-[-0.02em] text-white">
                FilterFlow
              </span>
            </Link>

            <p className="mt-8 max-w-[295px] text-[16px] leading-[1.65] text-white/82">
              Российский производитель фильтровальных мешков и рукавов для систем
              аспирации, стружкоотсосов и промышленных систем очистки воздуха с 2020 года.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <a
                href="https://wa.me/79514992576"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-[48px] w-[48px] items-center justify-center rounded-[12px] bg-[#25D366] transition duration-200 hover:-translate-y-0.5"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M19.05 4.91A9.82 9.82 0 0 0 12.03 2C6.61 2 2.2 6.4 2.2 11.82c0 1.74.46 3.44 1.34 4.94L2 22l5.38-1.5a9.8 9.8 0 0 0 4.65 1.18h.01c5.42 0 9.83-4.4 9.83-9.82 0-2.62-1.02-5.08-2.82-6.95Z"
                    stroke="white"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.52 7.8c-.2-.45-.4-.46-.58-.47h-.5c-.17 0-.45.06-.68.32-.23.26-.89.87-.89 2.12 0 1.26.91 2.47 1.04 2.64.13.17 1.77 2.83 4.38 3.85 2.17.85 2.62.68 3.09.64.47-.04 1.53-.62 1.75-1.22.21-.6.21-1.12.15-1.23-.06-.11-.21-.17-.45-.3-.23-.13-1.38-.68-1.59-.75-.21-.08-.36-.11-.51.12-.15.23-.59.75-.72.9-.13.15-.26.17-.49.06-.23-.11-.98-.36-1.87-1.15-.69-.61-1.15-1.37-1.28-1.6-.13-.23-.01-.35.1-.47.1-.1.23-.26.34-.39.11-.13.15-.23.23-.38.08-.15.04-.28-.02-.4-.06-.11-.54-1.36-.75-1.86Z"
                    fill="white"
                  />
                </svg>
              </a>

              <a
                href="https://t.me/Violetta0502"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="flex h-[48px] w-[48px] items-center justify-center rounded-[12px] bg-[#35A8EB] transition duration-200 hover:-translate-y-0.5"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M21.5 4.5 18.3 19.6c-.24 1.06-.87 1.32-1.77.82l-4.9-3.61-2.36 2.27c-.26.26-.48.48-.98.48l.35-5 9.1-8.23c.4-.35-.08-.55-.61-.2l-11.25 7.08-4.84-1.51c-1.05-.33-1.07-1.05.22-1.55L19.6 3.2c.89-.33 1.67.2 1.9 1.3Z"
                    fill="white"
                  />
                </svg>
              </a>

              <a
                href="https://max.ru/u/f9LHodD0cOLehfNZxc-dfvXrRQQ-ApKrfczCjbhEa_va3lGdtndd7SgNP8U"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="MAX"
                className="flex h-[48px] w-[48px] items-center justify-center rounded-[12px] bg-gradient-to-br from-[#7B61FF] to-[#B53CFF] text-[12px] font-semibold uppercase tracking-[0.08em] text-white transition duration-200 hover:-translate-y-0.5"
              >
                MAX
              </a>
            </div>

            <div className="mt-8 space-y-4">
              <a
                href="tel:+79514992576"
                className="group flex items-center gap-3 text-[15px] text-white/88 transition-colors duration-200 hover:text-[#22C7BB]"
              >
                <span className="flex h-[28px] w-[28px] items-center justify-center text-[#22C7BB]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M21 16.92v2.5a1.5 1.5 0 0 1-1.64 1.5 17.84 17.84 0 0 1-7.78-2.77 17.58 17.58 0 0 1-5.4-5.4A17.84 17.84 0 0 1 3.4 4.97 1.5 1.5 0 0 1 4.89 3.33h2.5a1.5 1.5 0 0 1 1.5 1.29c.12.9.33 1.79.62 2.65a1.5 1.5 0 0 1-.34 1.55l-1.06 1.06a14 14 0 0 0 5.83 5.83L15 14.65a1.5 1.5 0 0 1 1.55-.34c.86.29 1.75.5 2.65.62A1.5 1.5 0 0 1 21 16.92Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span>+7 (951) 499-25-76</span>
              </a>

              <a
                href="mailto:filterflow@mail.ru"
                className="group flex items-center gap-3 text-[15px] text-white/88 transition-colors duration-200 hover:text-[#22C7BB]"
              >
                <span className="flex h-[28px] w-[28px] items-center justify-center text-[#22C7BB]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M4 6h16a2 2 0 0 1 2 2v.2l-10 6.25L2 8.2V8a2 2 0 0 1 2-2Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 8.2V16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.2"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span>filterflow@mail.ru</span>
              </a>

              <div className="flex items-center gap-3 text-[15px] text-white/88">
                <span className="flex h-[28px] w-[28px] items-center justify-center text-[#22C7BB]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
                    <path
                      d="M12 7.5v4.8l3.1 1.9"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span>Приём заявок 24/7</span>
              </div>
            </div>
          </div>

          <div className="md:pl-2 lg:pl-4">
            <h3 className="text-[18px] font-semibold uppercase tracking-[0.03em] text-white">
              ПРОДУКЦИЯ
            </h3>

            <ul className="mt-7 space-y-4">
              {productLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[15px] leading-[1.45] text-white/82 transition-colors duration-200 hover:text-[#22C7BB]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:pl-2 lg:pl-4">
            <h3 className="text-[18px] font-semibold uppercase tracking-[0.03em] text-white">
              ЕЩЁ ПРОДУКТЫ
            </h3>

            <ul className="mt-7 space-y-4">
              {extraProductLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[15px] leading-[1.45] text-white/82 transition-colors duration-200 hover:text-[#22C7BB]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="mt-11 text-[18px] font-semibold uppercase tracking-[0.03em] text-white">
              КОМПАНИЯ
            </h3>

            <ul className="mt-7 space-y-4">
              {companyLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[15px] leading-[1.45] text-white/82 transition-colors duration-200 hover:text-[#22C7BB]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:pl-2 lg:pl-4">
            <h3 className="text-[18px] font-semibold uppercase tracking-[0.03em] text-white">
              СТАТЬИ
            </h3>

            <ul className="mt-7 space-y-4">
              {articleLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[15px] leading-[1.45] text-white/82 transition-colors duration-200 hover:text-[#22C7BB]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-7">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex h-[22px] w-[22px] items-center justify-center text-[#22C7BB]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M20 21a8 8 0 1 0-16 0"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="1.8" />
                </svg>
              </span>

              <div>
                <div className="text-[17px] font-medium leading-none text-white">
                  Лукьянова В.А.
                </div>
                <div className="mt-2 text-[15px] leading-[1.4] text-white/50">
                  Самозанятая (НПД) · г. Москва, Россия
                </div>
              </div>
            </div>

            <a
              href="mailto:filterflow@mail.ru"
              className="group inline-flex items-center gap-3 text-[17px] text-white/82 transition-colors duration-200 hover:text-[#22C7BB]"
            >
              <span className="text-[#22C7BB]">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 6h16a2 2 0 0 1 2 2v.2l-10 6.25L2 8.2V8a2 2 0 0 1 2-2Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 8.2V16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.2"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span>filterflow@mail.ru</span>
            </a>
          </div>
        </div>

        <div className="mt-7 border-t border-white/10 py-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="text-[14px] text-white/42">
              © {new Date().getFullYear()} FilterFlow. Все права защищены.
            </div>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
              <Link
                href="/"
                className="text-[14px] text-white/42 transition-colors duration-200 hover:text-[#22C7BB]"
              >
                Главная
              </Link>
              <Link
                href="/o-kompanii"
                className="text-[14px] text-white/42 transition-colors duration-200 hover:text-[#22C7BB]"
              >
                О компании
              </Link>
              <Link
                href="/kontakty"
                className="text-[14px] text-white/42 transition-colors duration-200 hover:text-[#22C7BB]"
              >
                Контакты
              </Link>
              <Link
                href="/politika-konfidencialnosti"
                className="text-[14px] text-white/42 transition-colors duration-200 hover:text-[#22C7BB]"
              >
                Политика конфиденциальности
              </Link>
              <Link
                href="/sitemap.xml"
                className="text-[14px] text-white/42 transition-colors duration-200 hover:text-[#22C7BB]"
              >
                Карта сайта
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}