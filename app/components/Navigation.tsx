"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import EmailLink from "./EmailLink";

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<MenuKey>(null);
  const [isContactsOpen, setIsContactsOpen] = useState(false);
  const contactsMenuRef = useRef<HTMLDivElement | null>(null);

  const isHome = pathname === "/";

  const textColor = isHome ? "text-white" : "text-[#0f172a]";
  const hoverColor = "hover:text-[#28c4b7]";
  const topBarClass = isHome
    ? "border-b border-white/10 bg-black/25 backdrop-blur-md"
    : "border-b border-[#e8edf3] bg-[#bdbdbd]";
  const headerBgClass = isHome ? "bg-transparent" : "bg-white shadow-sm";

  const menuLinkClass = `text-[15px] font-medium transition-colors duration-200 ${textColor} ${hoverColor}`;
  const mobileMenuLinkClass =
    "block rounded-xl px-4 py-3 text-[15px] font-medium text-[#0f172a] transition hover:bg-[#eefaf8] hover:text-[#28c4b7]";
  const contactsItemClass =
    "flex min-h-[44px] items-center gap-2.5 rounded-lg px-2.5 py-2 text-[14px] leading-[1.2] text-[#0f172a] transition hover:bg-[#eefaf8] hover:text-[#22bdb0] active:bg-[#e2f7f3]";
  const contactsIconWrapClass =
    "flex h-8 w-8 shrink-0 items-center justify-center";
  const contactsTextClass = "leading-[1.2]";

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    const previousBodyOverflow = body.style.overflow;
    const previousHtmlOverflow = html.style.overflow;
    const previousBodyPaddingRight = body.style.paddingRight;

    if (isMobileMenuOpen) {
      const scrollbarCompensation =
        window.innerWidth - html.clientWidth;

      body.style.overflow = "hidden";
      html.style.overflow = "hidden";

      // Prevent layout shift when scrollbar disappears.
      if (scrollbarCompensation > 0) {
        body.style.paddingRight = `${scrollbarCompensation}px`;
      }
    } else {
      body.style.overflow = "";
      html.style.overflow = "";
      body.style.paddingRight = "";
    }

    return () => {
      body.style.overflow = previousBodyOverflow;
      html.style.overflow = previousHtmlOverflow;
      body.style.paddingRight = previousBodyPaddingRight;
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
        setMobileSubmenu(null);
        setIsContactsOpen(false);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  function toggleMobileSubmenu(key: Exclude<MenuKey, null>) {
    setMobileSubmenu((prev) => (prev === key ? null : key));
  }

  function closeMobileMenu() {
    setIsMobileMenuOpen(false);
    setMobileSubmenu(null);
  }

  useEffect(() => {
    function onPointerDown(event: MouseEvent) {
      if (!isContactsOpen) return;
      if (!contactsMenuRef.current) return;
      if (!contactsMenuRef.current.contains(event.target as Node)) {
        setIsContactsOpen(false);
      }
    }

    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, [isContactsOpen]);

  return (
    <header
      className="fixed left-0 top-0 z-50 w-full"
      onMouseLeave={() => setOpenMenu(null)}
    >
      {/* Верхняя полоска */}
      <div className={topBarClass}>
        <div className="mx-auto flex h-8 max-w-[1440px] items-center justify-between gap-2 px-4 text-[12px] text-white sm:h-10 sm:justify-end sm:gap-6 sm:px-6 sm:text-[13px]">
          <a
            href="tel:+79514992576"
            className="font-medium transition-colors duration-200 hover:text-[#28c4b7] sm:hidden"
          >
            +7 951 499-25-76
          </a>

          <a
            href="/kontakty"
            className="transition-colors duration-200 hover:text-[#28c4b7] sm:hidden"
          >
            Email
          </a>

          <EmailLink className="hidden transition-colors duration-200 hover:text-[#28c4b7] sm:inline">
            filterflow@mail.ru
          </EmailLink>

          <a
            href="tel:+79514992576"
            className="hidden transition-colors duration-200 hover:text-[#28c4b7] sm:inline"
          >
            +7 (951) 499-25-76
          </a>

          <a
            href="https://wa.me/79514992576"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden transition-colors duration-200 hover:text-[#28c4b7] sm:inline"
          >
            WhatsApp
          </a>

          <a
            href="https://t.me/Violetta0502"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden transition-colors duration-200 hover:text-[#28c4b7] md:inline"
          >
            Telegram
          </a>

          <a
            href="https://max.ru/u/f9LHodD0cOLehfNZxc-dfvXrRQQ-ApKrfczCjbhEa_va3lGdtndd7SgNP8U"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden transition-colors duration-200 hover:text-[#28c4b7] md:inline"
          >
            MAX
          </a>
        </div>
      </div>

      {/* Основная шапка */}
      <div className={headerBgClass}>
        <div className="mx-auto flex h-[66px] max-w-[1440px] items-center justify-between px-4 sm:h-[78px] sm:px-6">
          {/* Лого */}
          <Link href="/" className="flex items-center gap-3 sm:gap-4">
            <img
              src="/favicon.ico"
              alt="FilterFlow"
              className="h-10 w-10 rounded-[10px] sm:h-14 sm:w-14 sm:rounded-[14px]"
            />
            <span className={`text-[21px] font-semibold sm:text-[26px] ${textColor}`}>
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
            className="hidden h-[46px] items-center justify-center rounded-[14px] bg-[#28c4b7] px-7 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-[#20b4a8] sm:inline-flex"
          >
            Получить расчёт
          </a>

          <div className="flex items-center gap-2 lg:hidden">
            <div ref={contactsMenuRef} className="relative">
              <button
                type="button"
                aria-expanded={isContactsOpen}
                aria-label={isContactsOpen ? "Скрыть контакты" : "Показать контакты"}
                className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-[#dbe4ea] bg-white px-2.5 text-[12px] font-medium text-[#0f172a] shadow-sm transition hover:border-[#28c4b7] hover:text-[#28c4b7] active:bg-[#eefaf8]"
                onClick={() => {
                  setIsContactsOpen((prev) => !prev);
                  setIsMobileMenuOpen(false);
                  setMobileSubmenu(null);
                }}
              >
                Контакты
                <span className={`text-[10px] transition ${isContactsOpen ? "rotate-180" : ""}`}>⌄</span>
              </button>

              <div
                className={`absolute right-0 top-full z-[65] mt-2 w-[196px] overflow-hidden rounded-xl border border-[#e5edf3] bg-white p-1.5 shadow-[0_14px_30px_rgba(15,23,42,0.16)] transition-all duration-200 ${
                  isContactsOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"
                }`}
              >
                <a
                  href="https://wa.me/79514992576"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={contactsItemClass}
                  onClick={() => setIsContactsOpen(false)}
                >
                  <span className={contactsIconWrapClass}>
                    <img src="/images/whatsapp.png" alt="" className="h-8 w-8 object-contain" />
                  </span>
                  <span className={contactsTextClass}>WhatsApp</span>
                </a>
                <a
                  href="https://t.me/Violetta0502"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={contactsItemClass}
                  onClick={() => setIsContactsOpen(false)}
                >
                  <span className={contactsIconWrapClass}>
                    <img src="/images/telegram.png" alt="" className="h-8 w-8 object-contain" />
                  </span>
                  <span className={contactsTextClass}>Telegram</span>
                </a>
                <a
                  href="https://max.ru/u/f9LHodD0cOLehfNZxc-dfvXrRQQ-ApKrfczCjbhEa_va3lGdtndd7SgNP8U"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={contactsItemClass}
                  onClick={() => setIsContactsOpen(false)}
                >
                  <span className={contactsIconWrapClass}>
                    <img src="/images/max.png" alt="" className="h-[20px] w-[20px] object-contain" />
                  </span>
                  <span className={contactsTextClass}>MAX</span>
                </a>
                <a
                  href="tel:+79514992576"
                  className={contactsItemClass}
                  onClick={() => setIsContactsOpen(false)}
                >
                  <span className={contactsIconWrapClass}>
                    <img src="/images/phone.png" alt="" className="h-7 w-7 object-contain" />
                  </span>
                  <span className={contactsTextClass}>Позвонить</span>
                </a>
                <Link
                  href="/kontakty"
                  className={contactsItemClass}
                  onClick={() => setIsContactsOpen(false)}
                >
                  <span className={contactsIconWrapClass}>
                    <img src="/images/email.png" alt="" className="h-[20px] w-[20px] object-contain" />
                  </span>
                  <span className={contactsTextClass}>Email</span>
                </Link>
              </div>
            </div>

            <button
              type="button"
              aria-label={isMobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
              aria-expanded={isMobileMenuOpen}
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-[#dbe4ea] bg-white text-[#0f172a] shadow-sm transition hover:border-[#28c4b7] hover:text-[#28c4b7] active:bg-[#eefaf8]"
              onClick={() => {
                const next = !isMobileMenuOpen;
                setIsMobileMenuOpen(next);
                if (next) setIsContactsOpen(false);
                if (!next) setMobileSubmenu(null);
              }}
            >
              {isMobileMenuOpen ? (
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
                </svg>
              ) : (
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-[70] bg-[#0f172a]/45 backdrop-blur-[1px] lg:hidden"
          onClick={closeMobileMenu}
          aria-hidden
        >
          <div
            className="ml-auto flex h-full w-[min(92vw,380px)] flex-col border-l border-[#dbe4ea] bg-white shadow-[0_20px_50px_rgba(15,23,42,0.22)] transition-transform duration-200"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#e8edf3] px-4 py-4">
              <span className="text-[17px] font-semibold text-[#0f172a]">Меню</span>
              <button
                type="button"
                onClick={closeMobileMenu}
                aria-label="Закрыть меню"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#dbe4ea] text-[#0f172a] transition hover:border-[#28c4b7] hover:text-[#28c4b7]"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-4">
              <div className="space-y-2">
                <Link href="/" className={mobileMenuLinkClass} onClick={closeMobileMenu}>
                Главная
              </Link>

              <div className="rounded-xl border border-[#e8edf3]">
                <button
                  type="button"
                  className="flex w-full items-center justify-between px-4 py-3 text-left text-[15px] font-medium text-[#0f172a]"
                  onClick={() => toggleMobileSubmenu("products")}
                >
                  Продукция
                  <span className={`transition ${mobileSubmenu === "products" ? "rotate-180" : ""}`}>⌄</span>
                </button>
                {mobileSubmenu === "products" && (
                  <div className="space-y-1 border-t border-[#e8edf3] p-2">
                    {productLinks.map((item) => (
                      <Link key={item.href} href={item.href} className={mobileMenuLinkClass} onClick={closeMobileMenu}>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div className="rounded-xl border border-[#e8edf3]">
                <button
                  type="button"
                  className="flex w-full items-center justify-between px-4 py-3 text-left text-[15px] font-medium text-[#0f172a]"
                  onClick={() => toggleMobileSubmenu("articles")}
                >
                  Статьи
                  <span className={`transition ${mobileSubmenu === "articles" ? "rotate-180" : ""}`}>⌄</span>
                </button>
                {mobileSubmenu === "articles" && (
                  <div className="space-y-1 border-t border-[#e8edf3] p-2">
                    {articleLinks.map((item) => (
                      <Link key={item.href} href={item.href} className={mobileMenuLinkClass} onClick={closeMobileMenu}>
                        {item.label}
                      </Link>
                    ))}
                    <Link href="/blog" className={mobileMenuLinkClass} onClick={closeMobileMenu}>
                      Все статьи блога
                    </Link>
                  </div>
                )}
              </div>

              <Link href="/portfolio" className={mobileMenuLinkClass} onClick={closeMobileMenu}>
                Портфолио
              </Link>
              <Link href="/o-kompanii" className={mobileMenuLinkClass} onClick={closeMobileMenu}>
                О компании
              </Link>
              <Link href="/kontakty" className={mobileMenuLinkClass} onClick={closeMobileMenu}>
                Контакты
              </Link>
            </div>
            </div>
            <div className="border-t border-[#e8edf3] px-4 py-4">
              <a
                href="https://wa.me/79514992576"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-full items-center justify-center rounded-xl bg-[#28c4b7] text-[15px] font-semibold text-white transition hover:bg-[#20b4a8]"
              >
                Получить расчёт
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}