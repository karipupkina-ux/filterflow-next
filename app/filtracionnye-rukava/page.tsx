"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SeeAlsoLinks from "../components/SeeAlsoLinks";

export default function FiltracionnyeRukavaPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqItems = [
    {
      question: "Как часто нужно менять фильтровальные рукава?",
      answer:
        "Срок службы рукавов зависит от условий эксплуатации и составляет в среднем 1,5-3 года. Признаки необходимости замены: снижение производительности системы, повышенное сопротивление воздушному потоку, видимые повреждения ткани.",
    },
    {
      question: "Можно ли очищать рукава от пыли?",
      answer:
        "Да, большинство рукавов оснащены системой импульсной продувки сжатым воздухом. Это позволяет регулярно очищать их от накопившейся пыли и поддерживать высокую эффективность фильтрации.",
    },
    {
      question: "Какой материал выбрать для высоких температур?",
      answer:
        "Для температур до 200°C подойдёт Номекс, до 260°C — Тефлон (PTFE), для экстремальных условий до 280°C — стекловолокно. Мы поможем подобрать оптимальный вариант под ваши условия.",
    },
    {
      question: "Изготавливаете ли рукава нестандартных размеров?",
      answer:
        "Да, мы производим рукава любых диаметров (от 100 до 300 мм) и длин (от 1 до 8 метров) по вашим чертежам и размерам. Срок изготовления — 5-7 рабочих дней.",
    },
    {
      question: "Как рассчитать необходимое количество рукавов?",
      answer:
        "Количество рукавов зависит от объёма очищаемого воздуха и площади фильтрации. Предоставьте нам параметры вашей системы — мы бесплатно рассчитаем необходимое количество и подберём оптимальную конфигурацию.",
    },
  ];

  return (
    <main id="top" className="min-h-screen bg-[#f8fafc] text-slate-900">
      {/* Верхняя тонкая шапка */}
      <div className="bg-[#bdbdbd] text-white">
        <div className="mx-auto flex h-10 max-w-[1440px] items-center justify-end gap-6 px-6 text-[13px]">
          <a
            href="mailto:filterflow@mail.ru"
            className="transition-colors duration-200 hover:text-[#28c7bb]"
          >
            filterflow@mail.ru
          </a>

          <a
            href="tel:+79514992576"
            className="transition-colors duration-200 hover:text-[#28c7bb]"
          >
            +7 (951) 499-25-76
          </a>

          <a
            href="https://wa.me/79514992576"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-[#28c7bb]"
          >
            WhatsApp
          </a>

          <a
            href="https://t.me/Violetta0502"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-[#28c7bb]"
          >
            Telegram
          </a>

          <a
            href="#"
            className="transition-colors duration-200 hover:text-[#28c7bb]"
          >
            MAX
          </a>
        </div>
      </div>

      {/* Белая шапка */}
      <header className="border-b border-[#e9edf3] bg-white shadow-[0_2px_10px_rgba(15,23,42,0.03)]">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-4">
            <Image
              src="/images/logo.png"
              alt="FilterFlow"
              width={58}
              height={58}
              className="h-[58px] w-[58px] object-contain"
            />
            <span className="text-[26px] font-bold tracking-[-0.02em] text-[#11233f]">
              FilterFlow
            </span>
          </Link>

          <nav className="hidden items-center gap-12 text-[16px] font-medium text-[#334155] lg:flex">
            <Link
              href="/"
              className="transition-colors duration-200 hover:text-[#28c7bb]"
            >
              Главная
            </Link>

            {/* Продукция */}
            <div className="relative group">
              <button
                type="button"
                className="flex items-center gap-2 text-[#334155] transition-colors duration-200 hover:text-[#28c7bb] group-hover:text-[#28c7bb]"
              >
                <span>Продукция</span>
                <svg
                  className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180"
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

              <div className="absolute left-1/2 top-full z-30 h-4 w-[320px] -translate-x-1/2" />

              <div className="pointer-events-none invisible absolute left-1/2 top-full z-40 mt-3 w-[312px] -translate-x-1/2 rounded-[22px] bg-white p-4 opacity-0 shadow-[0_20px_60px_rgba(0,0,0,0.14)] transition-all duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100">
                <div className="space-y-1.5">
                  <Link
                    href="/meshki-dlya-aspiracii"
                    className="flex items-start gap-3 rounded-[14px] px-4 py-3 text-[15px] text-[#475569] transition-all duration-200 hover:bg-[#eefaf8] hover:text-[#28c7bb]"
                  >
                    <span className="mt-[7px] h-[6px] w-[6px] shrink-0 rounded-full bg-[#28c7bb]" />
                    <span className="leading-[1.4]">Мешки для аспирации</span>
                  </Link>

                  <Link
                    href="/filtracionnye-rukava"
                    className="flex items-start gap-3 rounded-[14px] bg-[#eefaf8] px-4 py-3 text-[15px] text-[#28c7bb]"
                  >
                    <span className="mt-[7px] h-[6px] w-[6px] shrink-0 rounded-full bg-[#28c7bb]" />
                    <span className="leading-[1.4]">Фильтровальные рукава</span>
                  </Link>

                  <Link
                    href="/meshki-dlya-struzhkootsosa"
                    className="flex items-start gap-3 rounded-[14px] px-4 py-3 text-[15px] text-[#475569] transition-all duration-200 hover:bg-[#eefaf8] hover:text-[#28c7bb]"
                  >
                    <span className="mt-[7px] h-[6px] w-[6px] shrink-0 rounded-full bg-[#28c7bb]" />
                    <span className="leading-[1.4]">Мешки для стружкоотсоса</span>
                  </Link>

                  <Link
                    href="/meshki-dlya-ciklonov-i-uvp"
                    className="flex items-start gap-3 rounded-[14px] px-4 py-3 text-[15px] text-[#475569] transition-all duration-200 hover:bg-[#eefaf8] hover:text-[#28c7bb]"
                  >
                    <span className="mt-[7px] h-[6px] w-[6px] shrink-0 rounded-full bg-[#28c7bb]" />
                    <span className="leading-[1.4]">Мешки для циклонов и УВП</span>
                  </Link>

                  <Link
                    href="/bystrosemnye-homyty"
                    className="flex items-start gap-3 rounded-[14px] px-4 py-3 text-[15px] text-[#475569] transition-all duration-200 hover:bg-[#eefaf8] hover:text-[#28c7bb]"
                  >
                    <span className="mt-[7px] h-[6px] w-[6px] shrink-0 rounded-full bg-[#28c7bb]" />
                    <span className="leading-[1.4]">Быстросъёмные хомуты</span>
                  </Link>

                  <Link
                    href="/nestandartnye-meshki-dlya-filtracii"
                    className="flex items-start gap-3 rounded-[14px] px-4 py-3 text-[15px] text-[#475569] transition-all duration-200 hover:bg-[#eefaf8] hover:text-[#28c7bb]"
                  >
                    <span className="mt-[7px] h-[6px] w-[6px] shrink-0 rounded-full bg-[#28c7bb]" />
                    <span className="leading-[1.4]">
                      Нестандартные мешки для фильтрации
                    </span>
                  </Link>
                </div>

                <Link
                  href="/#catalog"
                  className="mt-4 flex h-[50px] items-center justify-center rounded-[14px] bg-[#28c7bb] text-[16px] font-semibold text-white transition-colors duration-200 hover:bg-[#20b5aa]"
                >
                  Весь каталог
                  <span className="ml-2 text-[18px]">→</span>
                </Link>
              </div>
            </div>

            {/* Статьи */}
            <div className="relative group">
              <button
                type="button"
                className="flex items-center gap-2 text-[#334155] transition-colors duration-200 hover:text-[#28c7bb] group-hover:text-[#28c7bb]"
              >
                <span>Статьи</span>
                <svg
                  className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180"
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

              <div className="absolute left-1/2 top-full z-30 h-4 w-[340px] -translate-x-1/2" />

              <div className="pointer-events-none invisible absolute left-1/2 top-full z-40 mt-3 w-[340px] -translate-x-1/2 rounded-[22px] bg-white p-4 opacity-0 shadow-[0_20px_60px_rgba(0,0,0,0.14)] transition-all duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100">
                <div className="space-y-1.5">
                  <Link
                    href="/blog/kak-vybrat-meshok-aspiracii"
                    className="flex items-start gap-3 rounded-[14px] px-4 py-3 text-[15px] text-[#475569] transition-all duration-200 hover:bg-[#eefaf8] hover:text-[#28c7bb]"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="mt-[1px] h-[18px] w-[18px] shrink-0 text-[#28c7bb]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <rect x="5" y="4" width="14" height="16" rx="2" />
                      <path d="M8 8h8M8 12h8M8 16h5" />
                    </svg>
                    <span className="leading-[1.4]">
                      Как выбрать мешок для аспирации
                    </span>
                  </Link>

                  <Link
                    href="/blog/kak-rabotaet-aspiraciya"
                    className="flex items-start gap-3 rounded-[14px] px-4 py-3 text-[15px] text-[#475569] transition-all duration-200 hover:bg-[#eefaf8] hover:text-[#28c7bb]"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="mt-[1px] h-[18px] w-[18px] shrink-0 text-[#28c7bb]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <rect x="5" y="4" width="14" height="16" rx="2" />
                      <path d="M8 8h8M8 12h8M8 16h5" />
                    </svg>
                    <span className="leading-[1.4]">Как работает аспирация</span>
                  </Link>

                  <Link
                    href="/blog/kogda-menyat-filtr-meshok"
                    className="flex items-start gap-3 rounded-[14px] px-4 py-3 text-[15px] text-[#475569] transition-all duration-200 hover:bg-[#eefaf8] hover:text-[#28c7bb]"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="mt-[1px] h-[18px] w-[18px] shrink-0 text-[#28c7bb]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <rect x="5" y="4" width="14" height="16" rx="2" />
                      <path d="M8 8h8M8 12h8M8 16h5" />
                    </svg>
                    <span className="leading-[1.4]">
                      Когда менять фильтр-мешок
                    </span>
                  </Link>

                  <Link
                    href="/blog/tipy-filtruyushchikh-meshkov"
                    className="flex items-start gap-3 rounded-[14px] px-4 py-3 text-[15px] text-[#475569] transition-all duration-200 hover:bg-[#eefaf8] hover:text-[#28c7bb]"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="mt-[1px] h-[18px] w-[18px] shrink-0 text-[#28c7bb]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <rect x="5" y="4" width="14" height="16" rx="2" />
                      <path d="M8 8h8M8 12h8M8 16h5" />
                    </svg>
                    <span className="leading-[1.4]">
                      Типы фильтровальных мешков
                    </span>
                  </Link>
                </div>

                <Link
                  href="/blog"
                  className="mt-4 flex h-[50px] items-center justify-center rounded-[14px] bg-[#28c7bb] text-[16px] font-semibold text-white transition-colors duration-200 hover:bg-[#20b5aa]"
                >
                  Все статьи блога
                  <span className="ml-2 text-[18px]">→</span>
                </Link>
              </div>
            </div>

            <Link
              href="/portfolio"
              className="transition-colors duration-200 hover:text-[#28c7bb]"
            >
              Портфолио
            </Link>

            <Link
              href="/#about"
              className="transition-colors duration-200 hover:text-[#28c7bb]"
            >
              О компании
            </Link>

            <Link
              href="/kontakty"
              className="transition-colors duration-200 hover:text-[#28c7bb]"
            >
              Контакты
            </Link>
          </nav>

          <a
            href="https://wa.me/79514992576"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden h-[56px] items-center justify-center rounded-[18px] bg-[#28c7bb] px-10 text-[16px] font-semibold text-white transition-colors duration-200 hover:bg-[#20b5aa] lg:flex"
          >
            Получить расчёт
          </a>
        </div>

        <div className="mx-auto max-w-[1440px] px-6 pb-4">
          <div className="flex items-center gap-3 text-[14px]">
            <Link
              href="/"
              className="font-medium text-[#28c7bb] transition-colors duration-200 hover:text-[#1fa99e]"
            >
              Главная
            </Link>
            <span className="text-[#a0aec0]">›</span>
            <span className="text-[#475569]">Фильтровальные рукава</span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="relative min-h-[620px] bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(7,18,35,0.72) 0%, rgba(9,24,44,0.58) 32%, rgba(10,29,48,0.42) 55%, rgba(10,29,48,0.18) 100%), linear-gradient(180deg, rgba(4,12,24,0.34) 0%, rgba(4,12,24,0.16) 28%, rgba(4,12,24,0.18) 72%, rgba(4,12,24,0.42) 100%), url('/images/hero.png')",
          }}
        >
          <div className="mx-auto flex min-h-[620px] max-w-[1440px] items-start justify-center px-6 pb-12 pt-10 md:pt-14">
            <div className="flex w-full max-w-[980px] flex-col items-center text-center text-white">
              <div className="mb-5 inline-flex rounded-full bg-[#28c7bb]/35 px-7 py-3 text-[15px] font-semibold text-[#d8fffb] backdrop-blur-sm">
                Промышленная фильтрация
              </div>

              <h1 className="mb-5 text-[58px] font-bold leading-[1.02] tracking-[-0.03em] md:text-[66px]">
                Фильтровальные рукава для УВП и аспирации
              </h1>

              <p className="max-w-[980px] text-[20px] leading-[1.6] text-white/95">
                Производим фильтровальные рукава для УВП и
                аспирационных установок: удержание пылевых частиц и очистка
                промышленных газов. Пошив на заказ — высокая эффективность и
                долгий срок службы.
              </p>

              <div className="mt-9 flex flex-wrap items-center justify-center gap-5">
                <a
                  href="https://wa.me/79514992576"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-[64px] items-center justify-center gap-3 rounded-[20px] bg-[#28c7bb] px-10 text-[17px] font-semibold text-white transition-colors duration-200 hover:bg-[#20b5aa]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    className="h-[20px] w-[20px] shrink-0 fill-white"
                    aria-hidden="true"
                  >
                    <path d="M19.11 17.21c-.29-.14-1.69-.83-1.95-.92-.26-.1-.45-.14-.64.14-.19.29-.74.92-.9 1.11-.17.19-.33.22-.62.07-.29-.14-1.2-.44-2.29-1.41-.85-.76-1.42-1.69-1.59-1.98-.17-.29-.02-.45.12-.59.13-.13.29-.33.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.55-.88-2.12-.23-.55-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.36-.26.29-.98.95-.98 2.31 0 1.36 1 2.67 1.14 2.86.14.19 1.97 3 4.78 4.2.67.29 1.19.46 1.6.59.67.21 1.29.18 1.77.11.54-.08 1.69-.69 1.93-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.33Z" />
                    <path d="M16.01 3.2c-7.05 0-12.77 5.72-12.77 12.77 0 2.25.59 4.45 1.72 6.39L3.2 28.8l6.61-1.73a12.7 12.7 0 0 0 6.19 1.59h.01c7.05 0 12.78-5.72 12.78-12.77S23.06 3.2 16.01 3.2Zm0 23.31h-.01a10.5 10.5 0 0 1-5.35-1.47l-.38-.22-3.92 1.03 1.05-3.82-.25-.39a10.48 10.48 0 0 1-1.61-5.59c0-5.79 4.71-10.5 10.5-10.5 2.8 0 5.44 1.09 7.42 3.08a10.43 10.43 0 0 1 3.08 7.42c0 5.79-4.72 10.5-10.51 10.5Z" />
                  </svg>
                  Получить расчёт
                </a>

                <Link
                  href="/kontakty"
                  className="flex h-[64px] items-center justify-center gap-3 rounded-[20px] border border-white/35 bg-white/8 px-10 text-[17px] font-semibold text-white backdrop-blur-sm transition-colors duration-200 hover:bg-white/15"
                >
                  <span className="text-[22px]">☎</span>
                  Связаться с нами
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-[17px] text-white/95">
                <div className="flex items-center gap-2">
                  <span className="text-[#28c7bb]">☰</span>
                  <span>Высокая степень очистки</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[#28c7bb]">◌</span>
                  <span>Долгий срок службы</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[#28c7bb]">↬</span>
                  <span>Доставка по России</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Виды фильтровальных рукавов */}
      <section className="bg-[#f8fafc] py-16">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="mb-10 flex flex-col items-center text-center">
            <div className="mb-4 inline-flex rounded-full bg-[#e9f9f7] px-5 py-2 text-[13px] font-semibold text-[#28c7bb]">
              Ассортимент
            </div>

            <h2 className="text-[42px] font-bold leading-[1.08] tracking-[-0.03em] text-[#10233f] md:text-[46px]">
              Виды фильтровальных рукавов для промышленных систем
            </h2>

            <p className="mt-4 max-w-[720px] text-[16px] leading-[1.6] text-[#64748b]">
              Фильтрующие рукава и элементы для рукавных фильтров — под задачи
              аспирации, пылеулавливания и очистки воздуха
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <Link
              href="/meshki-dlya-aspiracii"
              className="group overflow-hidden rounded-[22px] border border-[#e7edf4] bg-white shadow-[0_8px_24px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(15,23,42,0.08)]"
            >
              <div className="flex h-[190px] items-center justify-center overflow-hidden rounded-t-[22px] bg-[#f8fafc] p-5">
                <Image
                  src="/images/products/rukavnie-filtri.webp"
                  alt="Полиэстеровые рукава"
                  width={420}
                  height={260}
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="p-5">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-[14px] bg-[#eefaf8] text-[#28c7bb]">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-[22px] w-[22px]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="6" y="4" width="12" height="16" rx="2" />
                    <path d="M9 8h6" />
                  </svg>
                </div>

                <h3 className="text-[18px] font-bold leading-[1.3] text-[#10233f] transition-colors duration-200 group-hover:text-[#28c7bb]">
                  Полиэстеровые рукава (PES)
                </h3>

                <p className="mt-3 text-[15px] leading-[1.65] text-[#64748b]">
                  Универсальные фильтрующие рукава для аспирационных систем с
                  температурой до 130&nbsp;°C.
                </p>

                <div className="mt-6 flex items-center gap-2 text-[15px] font-semibold text-[#28c7bb]">
                  <span>Подробнее</span>
                  <span>→</span>
                </div>
              </div>
            </Link>

            <Link
              href="/meshki-dlya-aspiracii"
              className="group overflow-hidden rounded-[22px] border border-[#e7edf4] bg-white shadow-[0_8px_24px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(15,23,42,0.08)]"
            >
              <div className="flex h-[190px] items-center justify-center overflow-hidden rounded-t-[22px] bg-[#f8fafc] p-5">
                <Image
                  src="/images/products/filter_closeup.webp"
                  alt="Тефлоновые рукава"
                  width={420}
                  height={260}
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="p-5">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-[14px] bg-[#eefaf8] text-[#28c7bb]">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-[22px] w-[22px]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 3c2.5 3 4 5.2 4 7.3A4 4 0 0 1 8 10.3C8 8.2 9.5 6 12 3Z" />
                    <path d="M9 14c0 1.7 1.3 3 3 3 2 0 3.5-1.4 3.5-3.3 0-1.3-.8-2.4-1.7-3.3" />
                  </svg>
                </div>

                <h3 className="text-[18px] font-bold leading-[1.3] text-[#10233f] transition-colors duration-200 group-hover:text-[#28c7bb]">
                  Тефлоновые рукава
                </h3>

                <p className="mt-3 text-[15px] leading-[1.65] text-[#64748b]">
                  Устойчивы к высоким температурам (до 260°C) и агрессивным
                  химическим веществам.
                </p>

                <div className="mt-6 flex items-center gap-2 text-[15px] font-semibold text-[#28c7bb]">
                  <span>Подробнее</span>
                  <span>→</span>
                </div>
              </div>
            </Link>

            <Link
              href="/meshki-dlya-ciklonov-i-uvp"
              className="group overflow-hidden rounded-[22px] border border-[#e7edf4] bg-white shadow-[0_8px_24px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(15,23,42,0.08)]"
            >
              <div className="flex h-[190px] items-center justify-center overflow-hidden rounded-t-[22px] bg-[#f8fafc] p-5">
                <Image
                  src="/images/products/filter_bag_white.webp"
                  alt="Рукава для УВП"
                  width={420}
                  height={260}
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="p-5">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-[14px] bg-[#eefaf8] text-[#28c7bb]">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-[22px] w-[22px]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 7h16" />
                    <path d="M7 12h10" />
                    <path d="M10 17h4" />
                  </svg>
                </div>

                <h3 className="text-[18px] font-bold leading-[1.3] text-[#10233f] transition-colors duration-200 group-hover:text-[#28c7bb]">
                  Рукава для УВП
                </h3>

                <p className="mt-3 text-[15px] leading-[1.65] text-[#64748b]">
                  Специализированные рукава для установок вентиляции и
                  пылеулавливания.
                </p>

                <div className="mt-6 flex items-center gap-2 text-[15px] font-semibold text-[#28c7bb]">
                  <span>Подробнее</span>
                  <span>→</span>
                </div>
              </div>
            </Link>

            <Link
              href="/meshki-dlya-ciklonnykh-filtrov"
              className="group overflow-hidden rounded-[22px] border border-[#e7edf4] bg-white shadow-[0_8px_24px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(15,23,42,0.08)]"
            >
              <div className="flex h-[190px] items-center justify-center overflow-hidden rounded-t-[22px] bg-[#f8fafc] p-5">
                <Image
                  src="/images/products/meshok_uvp_cyclones.webp"
                  alt="Рукава для циклонов"
                  width={420}
                  height={260}
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="p-5">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-[14px] bg-[#eefaf8] text-[#28c7bb]">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-[22px] w-[22px]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M8 7h3V4" />
                    <path d="M16 17h-3v3" />
                    <path d="M16 7h-3V4" />
                    <path d="M8 17h3v3" />
                    <path d="M7 8a5 5 0 0 0 0 8" />
                    <path d="M17 8a5 5 0 0 1 0 8" />
                  </svg>
                </div>

                <h3 className="text-[18px] font-bold leading-[1.3] text-[#10233f] transition-colors duration-200 group-hover:text-[#28c7bb]">
                  Рукава для циклонов
                </h3>

                <p className="mt-3 text-[15px] leading-[1.65] text-[#64748b]">
                  Прочные рукава для циклонных систем очистки воздуха от пыли.
                </p>

                <div className="mt-6 flex items-center gap-2 text-[15px] font-semibold text-[#28c7bb]">
                  <span>Подробнее</span>
                  <span>→</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="bg-[#f8fafc] py-16 md:py-20">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="mb-10 flex flex-col items-center text-center md:mb-12">
            <div className="mb-4 inline-flex rounded-full bg-[#eef7f5] px-6 py-2 text-[13px] font-semibold text-[#28c7bb]">
              Почему выбирают нас
            </div>

            <h2 className="text-[42px] font-bold leading-[1.08] tracking-[-0.03em] text-[#10233f] md:text-[50px]">
              Преимущества рукавных фильтров FilterFlow
            </h2>

            <p className="mt-4 max-w-[840px] text-[16px] leading-[1.65] text-[#64748b] md:text-[17px]">
              Надёжность и эффективность фильтровальных материалов на реальных
              производствах
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <div className="rounded-[24px] border border-[#edf2f7] bg-white p-7 shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
              <div className="mb-6 flex h-[52px] w-[52px] items-center justify-center rounded-[16px] bg-[#eef7f5] text-[#28c7bb]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-[24px] w-[24px]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 7h16" />
                  <path d="M7 12h10" />
                  <path d="M10 17h4" />
                </svg>
              </div>
              <h3 className="text-[18px] font-bold leading-[1.35] text-[#10233f]">
                Высокая эффективность
              </h3>
              <p className="mt-4 text-[15px] leading-[1.75] text-[#64748b]">
                Степень фильтрации до 99,9% — задерживают даже мельчайшие
                частицы пыли размером от 0,3 микрон.
              </p>
            </div>

            <div className="rounded-[24px] border border-[#edf2f7] bg-white p-7 shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
              <div className="mb-6 flex h-[52px] w-[52px] items-center justify-center rounded-[16px] bg-[#eef7f5] text-[#28c7bb]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-[24px] w-[24px]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" />
                </svg>
              </div>
              <h3 className="text-[18px] font-bold leading-[1.35] text-[#10233f]">
                Долгий срок службы
              </h3>
              <p className="mt-4 text-[15px] leading-[1.75] text-[#64748b]">
                Качественные материалы и прочные швы обеспечивают работу
                рукавов до 2-3 лет без замены.
              </p>
            </div>

            <div className="rounded-[24px] border border-[#edf2f7] bg-white p-7 shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
              <div className="mb-6 flex h-[52px] w-[52px] items-center justify-center rounded-[16px] bg-[#eef7f5] text-[#28c7bb]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-[24px] w-[24px]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 3c2.5 3 4 5.2 4 7.3A4 4 0 0 1 8 10.3C8 8.2 9.5 6 12 3Z" />
                  <path d="M9 14c0 1.7 1.3 3 3 3 2 0 3.5-1.4 3.5-3.3 0-1.3-.8-2.4-1.7-3.3" />
                </svg>
              </div>
              <h3 className="text-[18px] font-bold leading-[1.35] text-[#10233f]">
                Термостойкость
              </h3>
              <p className="mt-4 text-[15px] leading-[1.75] text-[#64748b]">
                Выдерживают температуры от 90°C до 260°C в зависимости от типа
                материала.
              </p>
            </div>

            <div className="rounded-[24px] border border-[#edf2f7] bg-white p-7 shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
              <div className="mb-6 flex h-[52px] w-[52px] items-center justify-center rounded-[16px] bg-[#eef7f5] text-[#28c7bb]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-[24px] w-[24px]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 3c3 3.2 5 5.8 5 8.7A5 5 0 0 1 7 11.7C7 8.8 9 6.2 12 3Z" />
                </svg>
              </div>
              <h3 className="text-[18px] font-bold leading-[1.35] text-[#10233f]">
                Химическая стойкость
              </h3>
              <p className="mt-4 text-[15px] leading-[1.75] text-[#64748b]">
                Устойчивы к воздействию кислот, щелочей и других агрессивных
                веществ.
              </p>
            </div>

            <div className="rounded-[24px] border border-[#edf2f7] bg-white p-7 shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
              <div className="mb-6 flex h-[52px] w-[52px] items-center justify-center rounded-[16px] bg-[#eef7f5] text-[#28c7bb]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-[24px] w-[24px]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 7l3 3" />
                  <path d="M7 14l3 3" />
                  <path d="M17 7l-4 4" />
                  <path d="M11 13l-4 4" />
                </svg>
              </div>
              <h3 className="text-[18px] font-bold leading-[1.35] text-[#10233f]">
                Простая установка
              </h3>
              <p className="mt-4 text-[15px] leading-[1.75] text-[#64748b]">
                Быстрая замена рукавов без специального инструмента — экономия
                времени на обслуживании.
              </p>
            </div>

            <div className="rounded-[24px] border border-[#edf2f7] bg-white p-7 shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
              <div className="mb-6 flex h-[52px] w-[52px] items-center justify-center rounded-[16px] bg-[#eef7f5] text-[#28c7bb]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-[24px] w-[24px]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 20l8-8" />
                  <path d="M14 10l6-6" />
                  <path d="M13 5l6 6" />
                </svg>
              </div>
              <h3 className="text-[18px] font-bold leading-[1.35] text-[#10233f]">
                Индивидуальные размеры
              </h3>
              <p className="mt-4 text-[15px] leading-[1.75] text-[#64748b]">
                Изготавливаем рукава любых диаметров и длин под конкретное
                оборудование.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Сферы применения */}
      <section className="bg-[#f8fafc] py-16 md:py-20">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="mb-10 flex flex-col items-center text-center md:mb-12">
            <div className="mb-4 inline-flex rounded-full bg-[#eef7f5] px-6 py-2 text-[13px] font-semibold text-[#28c7bb]">
              Применение
            </div>

            <h2 className="text-[42px] font-bold leading-[1.08] tracking-[-0.03em] text-[#10233f] md:text-[50px]">
              Сферы применения фильтровальных рукавов
            </h2>

            <p className="mt-4 max-w-[840px] text-[16px] leading-[1.65] text-[#64748b] md:text-[17px]">
              Рукава для промышленных систем аспирации и фильтры для очистки
              промышленных газов — в разных отраслях
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <div className="group rounded-[24px] border border-[#edf2f7] bg-white p-7 shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition-all duration-300 hover:border-[#99ece4] hover:shadow-[0_14px_34px_rgba(15,23,42,0.06)]">
              <div className="mb-6 flex h-[52px] w-[52px] items-center justify-center rounded-[16px] border border-[#eef2f7] bg-[#f8fafc] text-[#28c7bb]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-[24px] w-[24px]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 20h16" />
                  <path d="M6 20V9" />
                  <path d="M12 20V4" />
                  <path d="M18 20v-7" />
                </svg>
              </div>

              <h3 className="text-[18px] font-bold leading-[1.35] text-[#10233f]">
                Цементные заводы
              </h3>

              <p className="mt-4 text-[15px] leading-[1.75] text-[#64748b]">
                Очистка воздуха от цементной пыли в производственных цехах.
              </p>
            </div>

            <div className="group rounded-[24px] border border-[#edf2f7] bg-white p-7 shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition-all duration-300 hover:border-[#99ece4] hover:shadow-[0_14px_34px_rgba(15,23,42,0.06)]">
              <div className="mb-6 flex h-[52px] w-[52px] items-center justify-center rounded-[16px] border border-[#eef2f7] bg-[#f8fafc] text-[#28c7bb]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-[24px] w-[24px]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 4v16" />
                  <path d="M7 4h10" />
                  <path d="M9 8h6" />
                </svg>
              </div>

              <h3 className="text-[18px] font-bold leading-[1.35] text-[#10233f]">
                Деревообработка
              </h3>

              <p className="mt-4 text-[15px] leading-[1.75] text-[#64748b]">
                Фильтрация древесной пыли и опилок на мебельных производствах.
              </p>
            </div>

            <div className="group rounded-[24px] border border-[#edf2f7] bg-white p-7 shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition-all duration-300 hover:border-[#99ece4] hover:shadow-[0_14px_34px_rgba(15,23,42,0.06)]">
              <div className="mb-6 flex h-[52px] w-[52px] items-center justify-center rounded-[16px] border border-[#eef2f7] bg-[#f8fafc] text-[#28c7bb]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-[24px] w-[24px]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 3h6" />
                  <path d="M10 3v5l-4 8a3 3 0 0 0 2.7 4.5h6.6A3 3 0 0 0 18 16l-4-8V3" />
                  <path d="M8.5 14h7" />
                </svg>
              </div>

              <h3 className="text-[18px] font-bold leading-[1.35] text-[#10233f]">
                Химическая промышленность
              </h3>

              <p className="mt-4 text-[15px] leading-[1.75] text-[#64748b]">
                Улавливание химических паров и порошкообразных веществ.
              </p>
            </div>

            <div className="group rounded-[24px] border border-[#edf2f7] bg-white p-7 shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition-all duration-300 hover:border-[#99ece4] hover:shadow-[0_14px_34px_rgba(15,23,42,0.06)]">
              <div className="mb-6 flex h-[52px] w-[52px] items-center justify-center rounded-[16px] border border-[#eef2f7] bg-[#f8fafc] text-[#28c7bb]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-[24px] w-[24px]"
                  fill="currentColor"
                >
                  <path d="M12 3c-2.5 3.1-4 5.4-4 7.8A4.1 4.1 0 0 0 12.1 15 4.3 4.3 0 0 0 16 10.7C16 8.3 14.6 6.1 12 3Z" />
                </svg>
              </div>

              <h3 className="text-[18px] font-bold leading-[1.35] text-[#10233f]">
                Металлургия
              </h3>

              <p className="mt-4 text-[15px] leading-[1.75] text-[#64748b]">
                Очистка от металлической пыли и высокотемпературных газов.
              </p>
            </div>

            <div className="group rounded-[24px] border border-[#edf2f7] bg-white p-7 shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition-all duration-300 hover:border-[#99ece4] hover:shadow-[0_14px_34px_rgba(15,23,42,0.06)]">
              <div className="mb-6 flex h-[52px] w-[52px] items-center justify-center rounded-[16px] border border-[#eef2f7] bg-[#f8fafc] text-[#28c7bb]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-[24px] w-[24px]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 20V10" />
                  <path d="M7 5h10" />
                  <path d="M9 10c0-2.2 1.3-4 3-4s3 1.8 3 4" />
                  <path d="M8 20h8" />
                </svg>
              </div>

              <h3 className="text-[18px] font-bold leading-[1.35] text-[#10233f]">
                Пищевая промышленность
              </h3>

              <p className="mt-4 text-[15px] leading-[1.75] text-[#64748b]">
                Фильтрация мучной пыли, сахарной пудры и других пищевых частиц.
              </p>
            </div>

            <div className="group rounded-[24px] border border-[#edf2f7] bg-white p-7 shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition-all duration-300 hover:border-[#99ece4] hover:shadow-[0_14px_34px_rgba(15,23,42,0.06)]">
              <div className="mb-6 flex h-[52px] w-[52px] items-center justify-center rounded-[16px] border border-[#eef2f7] bg-[#f8fafc] text-[#28c7bb]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-[24px] w-[24px]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M8 7h3V4" />
                  <path d="M16 17h-3v3" />
                  <path d="M16 7h-3V4" />
                  <path d="M8 17h3v3" />
                  <path d="M7 8a5 5 0 0 0 0 8" />
                  <path d="M17 8a5 5 0 0 1 0 8" />
                </svg>
              </div>

              <h3 className="text-[18px] font-bold leading-[1.35] text-[#10233f]">
                Переработка отходов
              </h3>

              <p className="mt-4 text-[15px] leading-[1.75] text-[#64748b]">
                Очистка воздуха на мусороперерабатывающих предприятиях.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Материалы */}
      <section className="bg-[#f8fafc] py-16 md:py-20">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="mb-10 flex flex-col items-center text-center md:mb-12">
            <div className="mb-4 inline-flex rounded-full bg-[#eef7f5] px-6 py-2 text-[13px] font-semibold text-[#28c7bb]">
              Материалы
            </div>

            <h2 className="text-[42px] font-bold leading-[1.08] tracking-[-0.03em] text-[#10233f] md:text-[50px]">
              Фильтровальные материалы для рукавов
            </h2>

            <p className="mt-4 max-w-[820px] text-[16px] leading-[1.65] text-[#64748b] md:text-[17px]">
              Nomex, полиэстер (PES), стекловолоконные и другие ткани — под
              температуру, пыль и агрессивную среду
            </p>
          </div>

          <div className="overflow-hidden rounded-[24px] border border-[#e9edf3] bg-white shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-white">
                    <th className="border-b border-[#eef2f7] px-6 py-6 text-left text-[15px] font-bold text-[#10233f]">
                      Материал
                    </th>
                    <th className="border-b border-[#eef2f7] px-6 py-6 text-left text-[15px] font-bold text-[#10233f]">
                      Степень фильтрации
                    </th>
                    <th className="border-b border-[#eef2f7] px-6 py-6 text-left text-[15px] font-bold text-[#10233f]">
                      Температура
                    </th>
                    <th className="border-b border-[#eef2f7] px-6 py-6 text-left text-[15px] font-bold text-[#10233f]">
                      Применение
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {[
                    ["Полиэстер (PES)", "99,5%", "До 130°C", "Универсальное применение"],
                    ["Полипропилен (PP)", "99,2%", "До 90°C", "Химическая стойкость"],
                    ["Тефлон (PTFE)", "99,9%", "До 260°C", "Высокие температуры"],
                    ["Номекс (Nomex)", "99,7%", "До 200°C", "Металлургия"],
                    ["Стекловолокно", "99,8%", "До 280°C", "Стекловолоконные фильтры, экстремальные условия"],
                    ["Смесовая ткань", "99,6%", "До 150°C", "Промышленные установки"],
                  ].map((row, index) => (
                    <tr
                      key={index}
                      className="transition-colors duration-200 hover:bg-[#fcfefe]"
                    >
                      <td className="border-b border-[#eef2f7] px-6 py-6 text-[15px] font-medium text-[#10233f]">
                        {row[0]}
                      </td>
                      <td className="border-b border-[#eef2f7] px-6 py-6 text-[15px] text-[#64748b]">
                        {row[1]}
                      </td>
                      <td className="border-b border-[#eef2f7] px-6 py-6 text-[15px] text-[#64748b]">
                        {row[2]}
                      </td>
                      <td className="border-b border-[#eef2f7] px-6 py-6 text-[15px] text-[#64748b]">
                        {row[3]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-10 rounded-[24px] border border-[#b8efe8] bg-[#eefaf8] px-7 py-7">
            <div className="flex items-start gap-4">
              <div className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-[12px] bg-[#28c7bb] text-white">
                <svg
                  viewBox="0 0 24 24"
                  className="h-[22px] w-[22px]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 10v6" />
                  <path d="M12 7h.01" />
                </svg>
              </div>

              <div>
                <h3 className="text-[18px] font-bold leading-[1.35] text-[#10233f]">
                  Помощь в выборе материала
                </h3>

                <p className="mt-3 max-w-[1080px] text-[15px] leading-[1.85] text-[#4f647d]">
                  Подберём фильтровальные рукава Nomex, PES или стекловолокно с
                  учётом температуры газов и абразива — в том числе для
                  асфальтобетонных заводов (АБЗ) и линий с повышенной нагрузкой.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f8fafc] py-16 md:py-20">
        <div className="mx-auto max-w-[980px] px-6">
          <div className="mb-10 flex flex-col items-center text-center md:mb-12">
            <div className="mb-4 inline-flex rounded-full bg-[#eef7f5] px-6 py-2 text-[13px] font-semibold text-[#28c7bb]">
              Вопросы и ответы
            </div>

            <h2 className="text-[42px] font-bold leading-[1.08] tracking-[-0.03em] text-[#10233f] md:text-[50px]">
              Вопросы о фильтровальных рукавах и рукавных фильтрах
            </h2>

            <p className="mt-4 max-w-[760px] text-[16px] leading-[1.65] text-[#64748b] md:text-[17px]">
              Материалы, срок службы и изготовление фильтровальных рукавов на
              заказ
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={item.question}
                  className={`overflow-hidden rounded-[20px] border transition-all duration-300 ${
                    isOpen
                      ? "border-[#7be1d6] bg-[#eefaf8] shadow-[0_12px_28px_rgba(40,199,187,0.10)]"
                      : "border-[#edf2f7] bg-white shadow-[0_6px_16px_rgba(15,23,42,0.03)]"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-6 px-7 py-6 text-left"
                  >
                    <span className="text-[18px] font-bold leading-[1.4] text-[#10233f]">
                      {item.question}
                    </span>

                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        isOpen
                          ? "bg-[#28c7bb] text-white"
                          : "bg-[#f3f8f8] text-[#28c7bb]"
                      }`}
                    >
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className={`h-5 w-5 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.168l3.71-3.938a.75.75 0 1 1 1.08 1.04l-4.25 4.51a.75.75 0 0 1-1.08 0l-4.25-4.51a.75.75 0 0 1 .02-1.06Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-7 pb-6 text-[15px] leading-[1.85] text-[#4f647d]">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-10 flex flex-col items-center text-center">
            <p className="text-[16px] text-[#64748b]">
              Не нашли ответ на свой вопрос?
            </p>

            <a
              href="https://wa.me/79514992576"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex h-[56px] items-center justify-center gap-3 rounded-[18px] bg-[#28c7bb] px-10 text-[18px] font-semibold text-white transition-colors duration-200 hover:bg-[#20b5aa]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="h-[20px] w-[20px] shrink-0 fill-white"
                aria-hidden="true"
              >
                <path d="M19.11 17.21c-.29-.14-1.69-.83-1.95-.92-.26-.1-.45-.14-.64.14-.19.29-.74.92-.9 1.11-.17.19-.33.22-.62.07-.29-.14-1.2-.44-2.29-1.41-.85-.76-1.42-1.69-1.59-1.98-.17-.29-.02-.45.12-.59.13-.13.29-.33.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.55-.88-2.12-.23-.55-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.36-.26.29-.98.95-.98 2.31 0 1.36 1 2.67 1.14 2.86.14.19 1.97 3 4.78 4.2.67.29 1.19.46 1.6.59.67.21 1.29.18 1.77.11.54-.08 1.69-.69 1.93-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.33Z" />
                <path d="M16.01 3.2c-7.05 0-12.77 5.72-12.77 12.77 0 2.25.59 4.45 1.72 6.39L3.2 28.8l6.61-1.73a12.7 12.7 0 0 0 6.19 1.59h.01c7.05 0 12.78-5.72 12.78-12.77S23.06 3.2 16.01 3.2Zm0 23.31h-.01a10.5 10.5 0 0 1-5.35-1.47l-.38-.22-3.92 1.03 1.05-3.82-.25-.39a10.48 10.48 0 0 1-1.61-5.59c0-5.79 4.71-10.5 10.5-10.5 2.8 0 5.44 1.09 7.42 3.08a10.43 10.43 0 0 1 3.08 7.42c0 5.79-4.72 10.5-10.51 10.5Z" />
              </svg>
              Задать вопрос специалисту
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f8fafc] py-16 md:py-20">
        <div className="mx-auto max-w-[1440px] px-0">
          <div className="w-full bg-[linear-gradient(135deg,#27c7bb_0%,#1aa99f_100%)] px-6 py-16 text-white md:px-10 md:py-20">
            <div className="mx-auto max-w-[980px] text-center">
              <h2 className="text-[42px] font-bold leading-[1.08] tracking-[-0.03em] md:text-[56px]">
                Фильтровальные рукава на заказ
              </h2>

              <p className="mx-auto mt-6 max-w-[880px] text-[20px] leading-[1.65] text-white/95 md:text-[22px]">
                Расчёт количества рукавов для рукавных фильтров и подбор
                фильтровальных материалов — бесплатная консультация
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 md:flex-row">
                <a
                  href="https://wa.me/79514992576"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-[64px] min-w-[280px] items-center justify-center gap-3 rounded-[18px] bg-white px-8 text-[18px] font-semibold text-[#138e87] shadow-[0_12px_24px_rgba(0,0,0,0.12)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#f6fffe]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    className="h-[22px] w-[22px] shrink-0 fill-current"
                    aria-hidden="true"
                  >
                    <path d="M19.11 17.21c-.29-.14-1.69-.83-1.95-.92-.26-.1-.45-.14-.64.14-.19.29-.74.92-.9 1.11-.17.19-.33.22-.62.07-.29-.14-1.2-.44-2.29-1.41-.85-.76-1.42-1.69-1.59-1.98-.17-.29-.02-.45.12-.59.13-.13.29-.33.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.55-.88-2.12-.23-.55-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.36-.26.29-.98.95-.98 2.31 0 1.36 1 2.67 1.14 2.86.14.19 1.97 3 4.78 4.2.67.29 1.19.46 1.6.59.67.21 1.29.18 1.77.11.54-.08 1.69-.69 1.93-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.33Z" />
                    <path d="M16.01 3.2c-7.05 0-12.77 5.72-12.77 12.77 0 2.25.59 4.45 1.72 6.39L3.2 28.8l6.61-1.73a12.7 12.7 0 0 0 6.19 1.59h.01c7.05 0 12.78-5.72 12.78-12.77S23.06 3.2 16.01 3.2Zm0 23.31h-.01a10.5 10.5 0 0 1-5.35-1.47l-.38-.22-3.92 1.03 1.05-3.82-.25-.39a10.48 10.48 0 0 1-1.61-5.59c0-5.79 4.71-10.5 10.5-10.5 2.8 0 5.44 1.09 7.42 3.08a10.43 10.43 0 0 1 3.08 7.42c0 5.79-4.72 10.5-10.51 10.5Z" />
                  </svg>
                  Написать в WhatsApp
                </a>

                <a
                  href="tel:+79514992576"
                  className="inline-flex h-[64px] min-w-[280px] items-center justify-center gap-3 rounded-[18px] bg-[#137e78] px-8 text-[18px] font-semibold text-white shadow-[0_12px_24px_rgba(0,0,0,0.12)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#106f69]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-[22px] w-[22px] shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6.27 6.27l1.27-1.28a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92z" />
                  </svg>
                  +7 (951) 499-25-76
                </a>
              </div>

              <div className="mt-14 grid gap-10 text-center md:grid-cols-3 md:gap-6">
                <div className="flex flex-col items-center">
                  <div className="flex h-[54px] w-[54px] items-center justify-center rounded-[16px] bg-white/18 text-white backdrop-blur-sm">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-[24px] w-[24px]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7v5l3 2" />
                    </svg>
                  </div>
                  <p className="mt-4 text-[16px] font-semibold text-white">
                    Изготовление от 1 дня
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <div className="flex h-[54px] w-[54px] items-center justify-center rounded-[16px] bg-white/18 text-white backdrop-blur-sm">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-[24px] w-[24px]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="3" y="7" width="13" height="10" rx="2" />
                      <path d="M16 10h3l2 2v5h-5Z" />
                      <circle cx="8.5" cy="17.5" r="1.5" />
                      <circle cx="18.5" cy="17.5" r="1.5" />
                    </svg>
                  </div>
                  <p className="mt-4 text-[16px] font-semibold text-white">
                    Доставка по России
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <div className="flex h-[54px] w-[54px] items-center justify-center rounded-[16px] bg-white/18 text-white backdrop-blur-sm">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-[24px] w-[24px]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4Z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <p className="mt-4 text-[16px] font-semibold text-white">
                    Долгий срок службы
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Похожие продукты */}
      <section className="bg-[#f8fafc] py-16 md:py-20">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="mb-10 flex flex-col items-center text-center md:mb-12">
            <div className="mb-4 inline-flex rounded-full bg-[#eef7f5] px-6 py-2 text-[13px] font-semibold text-[#28c7bb]">
              Похожие продукты
            </div>

            <h2 className="text-[42px] font-bold leading-[1.08] tracking-[-0.03em] text-[#10233f] md:text-[50px]">
              Вам также может понадобиться
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <Link
              href="/meshki-dlya-aspiracii"
              className="group rounded-[24px] border border-[#edf2f7] bg-white p-7 shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#bcefe9] hover:shadow-[0_16px_36px_rgba(15,23,42,0.08)]"
            >
              <div className="mb-6 flex h-[52px] w-[52px] items-center justify-center rounded-[16px] bg-[#eef7f5] text-[#28c7bb]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-[24px] w-[24px]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="6" y="4" width="12" height="16" rx="2" />
                  <path d="M9 8h6" />
                </svg>
              </div>

              <h3 className="text-[18px] font-bold leading-[1.35] text-[#10233f] transition-colors duration-200 group-hover:text-[#28c7bb]">
                Мешки для аспирации
              </h3>

              <p className="mt-4 text-[15px] leading-[1.75] text-[#64748b]">
                Фильтровальные мешки для систем аспирации
              </p>

              <div className="mt-6 flex items-center gap-2 text-[16px] font-semibold text-[#28c7bb]">
                <span>Подробнее</span>
                <span>→</span>
              </div>
            </Link>

            <Link
              href="/meshki-dlya-struzhkootsosa"
              className="group rounded-[24px] border border-[#edf2f7] bg-white p-7 shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#bcefe9] hover:shadow-[0_16px_36px_rgba(15,23,42,0.08)]"
            >
              <div className="mb-6 flex h-[52px] w-[52px] items-center justify-center rounded-[16px] bg-[#eef7f5] text-[#28c7bb]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-[24px] w-[24px]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 4v16" />
                  <path d="M7 4h10" />
                  <path d="M9 8h6" />
                </svg>
              </div>

              <h3 className="text-[18px] font-bold leading-[1.35] text-[#10233f] transition-colors duration-200 group-hover:text-[#28c7bb]">
                Мешки для стружкоотсоса
              </h3>

              <p className="mt-4 text-[15px] leading-[1.75] text-[#64748b]">
                Мешки для деревообрабатывающих станков
              </p>

              <div className="mt-6 flex items-center gap-2 text-[16px] font-semibold text-[#28c7bb]">
                <span>Подробнее</span>
                <span>→</span>
              </div>
            </Link>

            <Link
              href="/meshki-dlya-ciklonov-i-uvp"
              className="group rounded-[24px] border border-[#edf2f7] bg-white p-7 shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#bcefe9] hover:shadow-[0_16px_36px_rgba(15,23,42,0.08)]"
            >
              <div className="mb-6 flex h-[52px] w-[52px] items-center justify-center rounded-[16px] bg-[#eef7f5] text-[#28c7bb]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-[24px] w-[24px]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 7h16" />
                  <path d="M7 12h10" />
                  <path d="M10 17h4" />
                </svg>
              </div>

              <h3 className="text-[18px] font-bold leading-[1.35] text-[#10233f] transition-colors duration-200 group-hover:text-[#28c7bb]">
                Мешки для УВП
              </h3>

              <p className="mt-4 text-[15px] leading-[1.75] text-[#64748b]">
                Для пылеулавливающих установок
              </p>

              <div className="mt-6 flex items-center gap-2 text-[16px] font-semibold text-[#28c7bb]">
                <span>Подробнее</span>
                <span>→</span>
              </div>
            </Link>

            <Link
              href="/meshki-dlya-ciklonnykh-filtrov"
              className="group rounded-[24px] border border-[#edf2f7] bg-white p-7 shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#bcefe9] hover:shadow-[0_16px_36px_rgba(15,23,42,0.08)]"
            >
              <div className="mb-6 flex h-[52px] w-[52px] items-center justify-center rounded-[16px] bg-[#eef7f5] text-[#28c7bb]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-[24px] w-[24px]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M8 7h3V4" />
                  <path d="M16 17h-3v3" />
                  <path d="M16 7h-3V4" />
                  <path d="M8 17h3v3" />
                  <path d="M7 8a5 5 0 0 0 0 8" />
                  <path d="M17 8a5 5 0 0 1 0 8" />
                </svg>
              </div>

              <h3 className="text-[18px] font-bold leading-[1.35] text-[#10233f] transition-colors duration-200 group-hover:text-[#28c7bb]">
                Мешки для циклонов
              </h3>

              <p className="mt-4 text-[15px] leading-[1.75] text-[#64748b]">
                Для циклонных систем очистки воздуха
              </p>

              <div className="mt-6 flex items-center gap-2 text-[16px] font-semibold text-[#28c7bb]">
                <span>Подробнее</span>
                <span>→</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Полезные статьи */}
      <section className="bg-[#f8fafc] py-16 md:py-20">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <div className="mb-4 inline-flex rounded-full bg-[#fff1e8] px-6 py-2 text-[13px] font-semibold text-[#ff7a2f]">
                Читайте в блоге
              </div>

              <h2 className="max-w-[900px] text-[42px] font-bold leading-[1.1] tracking-[-0.03em] text-[#10233f] md:text-[50px]">
                Полезные статьи о фильтровальных рукавах
              </h2>
            </div>

            <Link
              href="/blog"
              className="hidden items-center gap-2 text-[18px] font-semibold text-[#28c7bb] transition-colors duration-200 hover:text-[#1fa99e] md:flex"
            >
              <span>Все статьи</span>
              <span>→</span>
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <Link
              href="/blog/tipy-filtruyushchikh-meshkov"
              className="group rounded-[24px] border border-[#edf2f7] bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition-all duration-300 hover:border-[#ffd6bf] hover:bg-[#fff8f3] hover:shadow-[0_16px_36px_rgba(15,23,42,0.08)]"
            >
              <div className="mb-5 flex h-[40px] w-[40px] items-center justify-center rounded-[12px] border border-[#ffe1cf] bg-white text-[#ff7a2f]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-[18px] w-[18px]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="6" y="4" width="12" height="16" rx="2" />
                  <path d="M9 8h6M9 12h6M9 16h4" />
                </svg>
              </div>

              <h3 className="text-[17px] font-bold leading-[1.4] text-[#10233f] transition-colors duration-200 group-hover:text-[#ff7a2f]">
                Типы фильтровальных мешков
              </h3>

              <p className="mt-4 text-[15px] leading-[1.7] text-[#64748b]">
                Обзор всех видов рукавных фильтров и мешков для аспирации
              </p>
            </Link>

            <Link
              href="/blog/kak-rabotaet-aspiraciya"
              className="group rounded-[24px] border border-[#edf2f7] bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition-all duration-300 hover:border-[#ffd6bf] hover:bg-[#fff8f3] hover:shadow-[0_16px_36px_rgba(15,23,42,0.08)]"
            >
              <div className="mb-5 flex h-[40px] w-[40px] items-center justify-center rounded-[12px] border border-[#ffe1cf] bg-[#ff7a2f] text-white">
                <svg
                  viewBox="0 0 24 24"
                  className="h-[18px] w-[18px]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="6" y="4" width="12" height="16" rx="2" />
                  <path d="M9 8h6M9 12h6M9 16h4" />
                </svg>
              </div>

              <h3 className="text-[17px] font-bold leading-[1.4] text-[#10233f] transition-colors duration-200 group-hover:text-[#ff7a2f]">
                Как работает система аспирации
              </h3>

              <p className="mt-4 text-[15px] leading-[1.7] text-[#64748b]">
                Принцип работы системы очистки воздуха и роль рукавных фильтров
              </p>
            </Link>

            <Link
              href="/blog/kak-vybrat-meshok-aspiracii"
              className="group rounded-[24px] border border-[#edf2f7] bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition-all duration-300 hover:border-[#ffd6bf] hover:bg-[#fff8f3] hover:shadow-[0_16px_36px_rgba(15,23,42,0.08)]"
            >
              <div className="mb-5 flex h-[40px] w-[40px] items-center justify-center rounded-[12px] border border-[#ffe1cf] bg-white text-[#ff7a2f]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-[18px] w-[18px]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="6" y="4" width="12" height="16" rx="2" />
                  <path d="M9 8h6M9 12h6M9 16h4" />
                </svg>
              </div>

              <h3 className="text-[17px] font-bold leading-[1.4] text-[#10233f] transition-colors duration-200 group-hover:text-[#ff7a2f]">
                Как выбрать мешок для аспирации
              </h3>

              <p className="mt-4 text-[15px] leading-[1.7] text-[#64748b]">
                Руководство по подбору фильтровального мешка: материалы и размеры
              </p>
            </Link>

            <Link
              href="/blog/kogda-menyat-filtr-meshok"
              className="group rounded-[24px] border border-[#edf2f7] bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition-all duration-300 hover:border-[#ffd6bf] hover:bg-[#fff8f3] hover:shadow-[0_16px_36px_rgba(15,23,42,0.08)]"
            >
              <div className="mb-5 flex h-[40px] w-[40px] items-center justify-center rounded-[12px] border border-[#ffe1cf] bg-white text-[#ff7a2f]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-[18px] w-[18px]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="6" y="4" width="12" height="16" rx="2" />
                  <path d="M9 8h6M9 12h6M9 16h4" />
                </svg>
              </div>

              <h3 className="text-[17px] font-bold leading-[1.4] text-[#10233f] transition-colors duration-200 group-hover:text-[#ff7a2f]">
                Когда менять фильтровальный мешок
              </h3>

              <p className="mt-4 text-[15px] leading-[1.7] text-[#64748b]">
                Признаки износа фильтра и сроки плановой замены
              </p>
            </Link>
          </div>

          <div className="mt-8 flex justify-end md:hidden">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[17px] font-semibold text-[#28c7bb] transition-colors duration-200 hover:text-[#1fa99e]"
            >
              <span>Все статьи</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Новый текстовый блок */}
      <section className="bg-[#f8fafc] py-16 md:py-20">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="max-w-[1180px]">
            <h2 className="max-w-[1040px] text-[42px] font-bold leading-[1.14] tracking-[-0.03em] text-[#10233f] md:text-[58px]">
              Фильтровальные рукава — производство и применение
            </h2>

            <div className="mt-8 space-y-6 text-[15px] leading-[1.9] text-[#334155] md:text-[16px]">
              <p>
                <strong className="font-bold text-[#10233f]">
                  Фильтровальные рукава
                </strong>{" "}
                — цилиндрические элементы для рукавных фильтров: они удерживают
                пыль и аэрозоли, участвуют в очистке промышленных газов и
                воздуха на аспирационных линиях. Это базовая деталь систем
                пылеулавливания на деревообработке, в металлургии, химии и
                пищевой отрасли.
              </p>

              <p>
                Компания FilterFlow производит фильтровальные рукава диаметром
                от 100 до 300 мм и длиной от 1 до 8 метров из высококачественных
                материалов: <strong className="font-bold text-[#10233f]">полиэстер</strong>,{" "}
                <strong className="font-bold text-[#10233f]">полипропилен</strong>,{" "}
                <strong className="font-bold text-[#10233f]">Номекс</strong>,{" "}
                <strong className="font-bold text-[#10233f]">Тефлон (PTFE)</strong> и{" "}
                <strong className="font-bold text-[#10233f]">стекловолокно</strong>.
                Каждый рукав изготавливается с учётом условий эксплуатации —
                температурного режима, типа пыли, влажности и химической
                агрессивности среды.
              </p>

              <div>
                <p className="mb-4">Правильный выбор фильтровального рукава зависит от:</p>

                <ul className="space-y-3 pl-6 text-[#334155]">
                  <li className="list-disc">
                    Типа и концентрации пыли (древесная, металлическая,
                    химическая, пищевая)
                  </li>
                  <li className="list-disc">
                    Рабочей температуры газового потока (от +20°C до +280°C)
                  </li>
                  <li className="list-disc">
                    Наличия влаги и химически активных веществ
                  </li>
                  <li className="list-disc">
                    Конструкции рукавного фильтра и способа регенерации
                  </li>
                  <li className="list-disc">
                    Требуемой степени очистки воздуха
                  </li>
                </ul>
              </div>

              <p>
                Мы изготавливаем{" "}
                <strong className="font-bold text-[#10233f]">
                  фильтровальные рукава по индивидуальным размерам
                </strong>{" "}
                с быстрым расчётом стоимости и доставкой по всей России. Все
                изделия проходят контроль качества и соответствуют промышленным
                стандартам.
              </p>
            </div>
          </div>

          <div className="mt-12 rounded-[28px] bg-[#f1f3f5] px-6 py-8 md:px-10 md:py-10">
            <h3 className="max-w-[980px] text-[34px] font-bold leading-[1.15] tracking-[-0.03em] text-[#10233f] md:text-[42px]">
              Как выбрать фильтровальный рукав под вашу систему
            </h3>

            <div className="mt-7 space-y-6 text-[15px] leading-[1.9] text-[#334155] md:text-[16px]">
              <p>
                Выбор материала фильтровального рукава напрямую влияет на
                эффективность очистки воздуха и срок службы оборудования. Для
                стандартных условий при температуре до 130°C и нейтральной пыли
                оптимален <strong className="font-bold text-[#10233f]">полиэстер</strong>.
                При повышенной влажности или химически активной среде
                рекомендуется <strong className="font-bold text-[#10233f]">полипропилен</strong>.
                Для высокотемпературных процессов (до 200°C) применяется{" "}
                <strong className="font-bold text-[#10233f]">Номекс</strong>, а
                для экстремальных условий (до 260–280°C) —{" "}
                <strong className="font-bold text-[#10233f]">
                  Тефлон или стекловолокно
                </strong>.
              </p>

              <div className="space-y-5">
                {[
                  "Диаметр и длина рукава — определяются конструкцией фильтра и требуемой площадью фильтрации",
                  "Тип крепления — верхнее, нижнее, фланцевое или хомутовое соединение",
                  "Способ регенерации — импульсная продувка, механическое встряхивание или обратная продувка",
                  "Антистатические свойства — обязательны при работе с взрывоопасной пылью",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-4">
                    <span className="mt-[3px] flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-[#20b7aa] text-white">
                      <svg
                        viewBox="0 0 20 20"
                        className="h-[12px] w-[12px]"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.2 7.26a1 1 0 0 1-1.428-.006L3.29 9.09a1 1 0 1 1 1.42-1.408l4.08 4.12 6.49-6.506a1 1 0 0 1 1.414-.006Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <p className="text-[15px] leading-[1.8] text-[#334155] md:text-[16px]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <p>
                Если параметры вашей системы неизвестны — отправьте нам модель
                оборудования или фотографию, и наши специалисты бесплатно
                подберут подходящий рукав.
              </p>
            </div>
          </div>

          <div className="mt-14">
            <h3 className="max-w-[980px] text-[38px] font-bold leading-[1.12] tracking-[-0.03em] text-[#10233f] md:text-[56px]">
              Где применяют фильтрующие рукава
            </h3>

            <div className="mt-7 space-y-6 text-[15px] leading-[1.9] text-[#334155] md:text-[16px]">
              <p>
                Изготавливаем{" "}
                <strong className="font-bold text-[#10233f]">
                  рукава для рукавных фильтров
                </strong>{" "}
                и узлов на циклонах и линиях аспирации — в том числе с
                импульсной продувкой и антистатикой для взрывоопасных пылей.
                Термостойкие варианты (Nomex, стекловолокно) подходят для
                металлургии и горячих газов; для АБЗ и смежных процессов
                подбираем состав с учётом температуры и абразива.
              </p>

              <p>
                Мы выполняем заказы и осуществляем доставку по всей России:
                Москва, Санкт-Петербург, Екатеринбург, Новосибирск, Казань,
                Краснодар и другие города. Минимальный заказ — от 1 штуки. Срок
                изготовления — от 5 рабочих дней.
              </p>
            </div>

            <div className="mt-10 flex justify-center">
              <a
                href="mailto:filterflow@mail.ru"
                className="inline-flex h-[62px] items-center justify-center gap-3 rounded-full bg-[#149f95] px-9 text-[17px] font-semibold text-white transition-colors duration-200 hover:bg-[#118d84]"
              >
                Заказать фильтровальные рукава
                <span className="text-[22px] leading-none">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <SeeAlsoLinks excludeHref="/filtracionnye-rukava" />

      {/* Плавающие контакты */}
      <div className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-4 xl:flex">
        <a
          href="mailto:filterflow@mail.ru"
          className="flex h-[56px] w-[56px] items-center justify-center rounded-full bg-white text-[#ff7a2f] shadow-[0_10px_30px_rgba(15,23,42,0.12)] transition-transform duration-200 hover:scale-105"
        >
          <span className="text-[28px]">✉</span>
        </a>

        <a
          href="tel:+79514992576"
          className="flex h-[56px] w-[56px] items-center justify-center rounded-full bg-white text-[#1f1f1f] shadow-[0_10px_30px_rgba(15,23,42,0.12)] transition-transform duration-200 hover:scale-105"
        >
          <span className="text-[28px]">☎</span>
        </a>

        <a
          href="https://wa.me/79514992576"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-[56px] w-[56px] items-center justify-center rounded-full bg-white shadow-[0_10px_30px_rgba(15,23,42,0.12)] transition-transform duration-200 hover:scale-105"
        >
          <Image
            src="/images/whatsapp.png"
            alt="WhatsApp"
            width={44}
            height={44}
            className="h-[44px] w-[44px] object-contain"
          />
        </a>

        <a
          href="https://t.me/Violetta0502"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-[56px] w-[56px] items-center justify-center rounded-full bg-white shadow-[0_10px_30px_rgba(15,23,42,0.12)] transition-transform duration-200 hover:scale-105"
        >
          <Image
            src="/images/telegram.png"
            alt="Telegram"
            width={44}
            height={44}
            className="h-[44px] w-[44px] object-contain"
          />
        </a>

        <a
          href="#"
          className="flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[linear-gradient(135deg,#6d4dff_0%,#c23fff_100%)] shadow-[0_10px_30px_rgba(15,23,42,0.16)] transition-transform duration-200 hover:scale-105"
        >
          <Image
            src="/images/max.png"
            alt="MAX"
            width={30}
            height={30}
            className="h-[30px] w-[30px] object-contain"
          />
        </a>
      </div>

      <a
        href="#top"
        className="fixed bottom-8 right-8 z-40 flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[#28c7bb] text-white shadow-[0_10px_30px_rgba(40,199,187,0.35)] transition-colors duration-200 hover:bg-[#20b5aa]"
      >
        ↑
      </a>
    </main>
  );
}