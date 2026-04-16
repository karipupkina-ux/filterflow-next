"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type MenuKey = "products" | "articles" | null;

const productLinks = [
  { href: "/meshki-dlya-aspiracii", label: "Мешки для аспирации" },
  { href: "/filtracionnye-rukava", label: "Фильтрационные рукава" },
  { href: "/meshki-dlya-struzhkootsosa", label: "Мешки для стружкоотсоса" },
  { href: "/meshki-dlya-ciklonov-i-uvp", label: "Мешки для циклонов и УВП" },
  { href: "/bystrosemnye-homyty", label: "Быстросъёмные хомуты" },
  {
    href: "/nestandartnye-meshki-dlya-filtracii",
    label: "Нестандартные мешки для фильтрации",
  },
];

const articleLinks = [
  {
    href: "/blog/kak-vybrat-meshok-aspiracii",
    label: "Как выбрать мешок для аспирации",
  },
  {
    href: "/blog/kak-rabotaet-aspiraciya",
    label: "Как работает аспирация",
  },
  {
    href: "/blog/kogda-menyat-filtr-meshok",
    label: "Когда менять фильтр-мешок",
  },
  {
    href: "/blog/tipy-filtruyushchikh-meshkov",
    label: "Типы фильтровальных мешков",
  },
];

export default function Navigation() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<MenuKey>(null);

  const isHome = pathname === "/";

  const textColor = isHome ? "text-white" : "text-[#0f172a]";
  const hoverColor = "hover:text-[#28c4b7]";
  const topBarClass = isHome
    ? "border-b border-white/10 bg-black/25 backdrop-blur-md"
    : "border-b border-[#e8edf3] bg-[#bdbdbd]";
  const headerBgClass = isHome ? "bg-transparent" : "bg-white shadow-sm";

  const menuLinkClass = `text-[15px] font-medium transition-colors duration-200 ${textColor} ${hoverColor}`;

  return (
    <header
      className="fixed left-0 top-0 z-50 w-full"
      onMouseLeave={() => setOpenMenu(null)}
    >
      {/* Верхняя полоска */}
      <div className={topBarClass}>
        <div className="mx-auto flex h-10 max-w-[1440px] items-center justify-end gap-6 px-6 text-[13px] text-white">
          <Link
            href="/kontakty"
            className="transition-colors duration-200 hover:text-[#28c4b7]"
          >
            filterflow@mail.ru
          </Link>

          <a
            href="tel:+79514992576"
            className="transition-colors duration-200 hover:text-[#28c4b7]"
          >
            +7 (951) 499-25-76
          </a>

          <a
            href="https://wa.me/79514992576"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-[#28c4b7]"
          >
            WhatsApp
          </a>

          <a
            href="https://t.me/Violetta0502"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-[#28c4b7]"
          >
            Telegram
          </a>

          <a
            href="https://max.ru/u/f9LHodD0cOLehfNZxc-dfvXrRQQ-ApKrfczCjbhEa_va3lGdtndd7SgNP8U"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-[#28c4b7]"
          >
            MAX
          </a>
        </div>
      </div>

      {/* Основная шапка */}
      <div className={headerBgClass}>
        <div className="mx-auto flex h-[78px] max-w-[1440px] items-center justify-between px-6">
          {/* Лого */}
          <Link href="/" className="flex items-center gap-4">
            <img
              src="/favicon.ico"
              alt="FilterFlow"
              className="h-14 w-14 rounded-[14px]"
            />
            <span className={`text-[26px] font-semibold ${textColor}`}>
              FilterFlow
            </span>
          </Link>

          {/* Меню */}
          <nav className="hidden items-center gap-10 lg:flex">
            <Link href="/" className={menuLinkClass}>
              Главная
            </Link>

            {/* Продукция */}
            <div
              className="relative"
              onMouseEnter={() => setOpenMenu("products")}
            >
              <button
                type="button"
                className={`flex items-center gap-2 text-[15px] font-medium transition-colors duration-200 ${textColor} hover:text-[#28c4b7] ${
                  openMenu === "products" ? "text-[#28c4b7]" : ""
                }`}
                aria-expanded={openMenu === "products"}
                aria-haspopup="true"
              >
                <span>Продукция</span>
                <svg
                  className={`h-4 w-4 transition-transform duration-200 ${
                    openMenu === "products" ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.168l3.71-3.938a.75.75 0 1 1 1.08 1.04l-4.25 4.51a.75.75 0 0 1-1.08 0l-4.25-4.51a.75.75 0 0 1 .02-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {/* Мостик между кнопкой и меню */}
              {openMenu === "products" && (
                <div className="absolute left-1/2 top-full z-30 h-4 w-[320px] -translate-x-1/2" />
              )}

              <div
                className={`absolute left-1/2 top-full z-40 mt-3 w-[320px] -translate-x-1/2 rounded-[22px] bg-white p-4 shadow-[0_20px_60px_rgba(0,0,0,0.14)] transition-all duration-200 ${
                  openMenu === "products"
                    ? "visible opacity-100 pointer-events-auto"
                    : "invisible opacity-0 pointer-events-none"
                }`}
                onMouseEnter={() => setOpenMenu("products")}
              >
                <div className="space-y-1.5">
                  {productLinks.map((item) => {
                    const isActive = pathname === item.href;

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`flex items-start gap-3 rounded-[14px] px-4 py-3 text-[15px] transition-all duration-200 ${
                          isActive
                            ? "bg-[#eefaf8] text-[#28c4b7]"
                            : "text-[#475569] hover:bg-[#eefaf8] hover:text-[#28c4b7]"
                        }`}
                        onClick={() => setOpenMenu(null)}
                      >
                        <svg
                          viewBox="0 0 20 20"
                          className="mt-[1px] h-[18px] w-[18px] shrink-0 text-[#28c4b7]"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <circle cx="10" cy="10" r="3" />
                        </svg>

                        <span className="leading-[1.4]">{item.label}</span>
                      </Link>
                    );
                  })}
                </div>

                <Link
                  href="/#catalog"
                  className="mt-4 flex h-[50px] items-center justify-center rounded-[14px] bg-[#28c4b7] text-[16px] font-semibold text-white transition-colors duration-200 hover:bg-[#20b4a8]"
                  onClick={() => setOpenMenu(null)}
                >
                  Весь каталог
                  <span className="ml-2 text-[18px]">→</span>
                </Link>
              </div>
            </div>

            {/* Статьи */}
            <div
              className="relative"
              onMouseEnter={() => setOpenMenu("articles")}
            >
              <button
                type="button"
                className={`flex items-center gap-2 text-[15px] font-medium transition-colors duration-200 ${textColor} hover:text-[#28c4b7] ${
                  openMenu === "articles" ? "text-[#28c4b7]" : ""
                }`}
                aria-expanded={openMenu === "articles"}
                aria-haspopup="true"
              >
                <span>Статьи</span>
                <svg
                  className={`h-4 w-4 transition-transform duration-200 ${
                    openMenu === "articles" ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.168l3.71-3.938a.75.75 0 1 1 1.08 1.04l-4.25 4.51a.75.75 0 0 1-1.08 0l-4.25-4.51a.75.75 0 0 1 .02-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {/* Мостик между кнопкой и меню */}
              {openMenu === "articles" && (
                <div className="absolute left-1/2 top-full z-30 h-4 w-[340px] -translate-x-1/2" />
              )}

              <div
                className={`absolute left-1/2 top-full z-40 mt-3 w-[340px] -translate-x-1/2 rounded-[22px] bg-white p-4 shadow-[0_20px_60px_rgba(0,0,0,0.14)] transition-all duration-200 ${
                  openMenu === "articles"
                    ? "visible opacity-100 pointer-events-auto"
                    : "invisible opacity-0 pointer-events-none"
                }`}
                onMouseEnter={() => setOpenMenu("articles")}
              >
                <div className="space-y-1.5">
                  {articleLinks.map((item) => {
                    const isActive = pathname === item.href;

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`flex items-start gap-3 rounded-[14px] px-4 py-3 text-[15px] transition-all duration-200 ${
                          isActive
                            ? "bg-[#eefaf8] text-[#28c4b7]"
                            : "text-[#475569] hover:bg-[#eefaf8] hover:text-[#28c4b7]"
                        }`}
                        onClick={() => setOpenMenu(null)}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          className="mt-[1px] h-[18px] w-[18px] shrink-0 text-[#28c4b7]"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <rect x="5" y="4" width="14" height="16" rx="2" />
                          <path d="M8 8h8M8 12h8M8 16h5" />
                        </svg>

                        <span className="leading-[1.4]">{item.label}</span>
                      </Link>
                    );
                  })}
                </div>

                <Link
                  href="/blog"
                  className="mt-4 flex h-[50px] items-center justify-center rounded-[14px] bg-[#28c4b7] text-[16px] font-semibold text-white transition-colors duration-200 hover:bg-[#20b4a8]"
                  onClick={() => setOpenMenu(null)}
                >
                  Все статьи блога
                  <span className="ml-2 text-[18px]">→</span>
                </Link>
              </div>
            </div>

            <Link href="/portfolio" className={menuLinkClass}>
              Портфолио
            </Link>

            <Link href="/o-kompanii" className={menuLinkClass}>
              О компании
            </Link>

            <Link href="/kontakty" className={menuLinkClass}>
              Контакты
            </Link>
          </nav>

          {/* Кнопка */}
          <a
            href="https://wa.me/79514992576"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-[48px] items-center justify-center rounded-[14px] bg-[#28c4b7] px-8 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-[#20b4a8]"
          >
            Получить расчёт
          </a>
        </div>
      </div>
    </header>
  );
}