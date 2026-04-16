"use client";

import Link from "next/link";
import { useState } from "react";
import {
  sendApplicationEmail,
  SEND_EMAIL_USER_ERROR,
} from "@/lib/send-email-client";
import Navigation from "../components/Navigation";
import SeeAlsoLinks from "../components/SeeAlsoLinks";
import FloatingContacts from "../components/feature/FloatingContacts";

function AdvantageIcon({ type }: { type: string }) {
  const common = "h-8 w-8 stroke-[1.8] text-[#f56600]";

  switch (type) {
    case "shield":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <path
            d="M12 3 18 5v6c0 4.5-2.8 7.3-6 8.8C8.8 18.3 6 15.5 6 11V5l6-2Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m9.5 11.5 1.6 1.6 3.4-3.6"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "flame":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <path
            d="M12.2 3.5c.8 2.4-.7 3.8-1.9 5.1-1.2 1.3-2.2 2.5-2.2 4.4A4 4 0 0 0 12 17a4 4 0 0 0 4-4c0-2.2-1.4-3.7-2.6-5-.9-1-1.7-1.9-1.2-4.5Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.8 14.8A1.8 1.8 0 0 0 12.5 16a1.8 1.8 0 0 0 1.7-1.2c.4-1-.3-1.7-.9-2.4-.5-.5-.9-1-.8-1.9-.8.7-2.1 1.8-2.1 3.3Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "clock":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <circle cx="12" cy="12" r="8" stroke="currentColor" />
          <path
            d="M12 8v4l2.5 1.5"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "tools":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <path d="m14 6 4 4" stroke="currentColor" strokeLinecap="round" />
          <path d="m5 19 6.5-6.5" stroke="currentColor" strokeLinecap="round" />
          <path
            d="M7 6a3 3 0 0 0 3.7 3.7L6.2 14.2A3 3 0 1 1 9.8 17.8l4.5-4.5A3 3 0 1 0 18 10"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "ruler":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <path
            d="m5 16 8.5-8.5 5 5L10 21H5v-5Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="m12 7 5 5" stroke="currentColor" strokeLinecap="round" />
          <path d="m9.5 14.5 1.5 1.5" stroke="currentColor" strokeLinecap="round" />
          <path d="m12.5 11.5 1.5 1.5" stroke="currentColor" strokeLinecap="round" />
        </svg>
      );
    case "truck":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <path
            d="M3 6h11v9H3V6Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 9h3l3 3v3h-6V9Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="8" cy="17" r="1.6" stroke="currentColor" />
          <circle cx="17" cy="17" r="1.6" stroke="currentColor" />
        </svg>
      );
    default:
      return null;
  }
}

function IndustryIcon({ type }: { type: string }) {
  const common = "h-8 w-8 stroke-[1.8] text-[#f56600]";

  switch (type) {
    case "wood":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <path d="M12 5v14" stroke="currentColor" strokeLinecap="round" />
          <path d="M7 7h10" stroke="currentColor" strokeLinecap="round" />
          <path d="M9 7v3" stroke="currentColor" strokeLinecap="round" />
          <path d="M15 7v3" stroke="currentColor" strokeLinecap="round" />
        </svg>
      );
    case "metal":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <circle cx="12" cy="12" r="3" stroke="currentColor" />
          <path
            d="M12 4v2.2M12 17.8V20M4 12h2.2M17.8 12H20M6.4 6.4l1.6 1.6M16 16l1.6 1.6M17.6 6.4 16 8M8 16l-1.6 1.6"
            stroke="currentColor"
            strokeLinecap="round"
          />
        </svg>
      );
    case "chem":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <path
            d="M10 4h4M11 4v5l-4 7a2 2 0 0 0 1.7 3h6.6A2 2 0 0 0 17 16l-4-7V4"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "food":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <path d="M7 4v7" stroke="currentColor" strokeLinecap="round" />
          <path d="M10 4v7" stroke="currentColor" strokeLinecap="round" />
          <path d="M7 8h3" stroke="currentColor" strokeLinecap="round" />
          <path d="M16 4c1.5 2 1.5 4.7 0 8v8" stroke="currentColor" strokeLinecap="round" />
          <path d="M8.5 11v9" stroke="currentColor" strokeLinecap="round" />
        </svg>
      );
    case "cement":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <path
            d="M6 20V9l4-3 4 3v11"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 20V6h3l1 2v12"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M8.5 13h3M8.5 16h3" stroke="currentColor" strokeLinecap="round" />
        </svg>
      );
    case "textile":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <path
            d="M8 4c.2 1.6-.6 2.7-2 3.5l2.5 2.5h7L18 7.5C16.6 6.7 15.8 5.6 16 4"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.5 10 8 20h8l-.5-10"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      return null;
  }
}

function InfoIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7 stroke-[1.8] text-white">
      <circle cx="12" cy="12" r="8" stroke="currentColor" />
      <path d="M12 10v5" stroke="currentColor" strokeLinecap="round" />
      <path d="M12 7.2h.01" stroke="currentColor" strokeLinecap="round" />
    </svg>
  );
}

function ArticleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 stroke-[1.8]">
      <rect x="5" y="4.5" width="14" height="15" rx="2" stroke="currentColor" />
      <path d="M9 9h6M9 12h6M9 15h4" stroke="currentColor" strokeLinecap="round" />
    </svg>
  );
}

function FaqChevron({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={`h-6 w-6 text-[#f56600] transition-transform duration-300 ${
        isOpen ? "rotate-180" : ""
      }`}
    >
      <path
        d="m6 9 6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function MeshkiDlyaCiklonovIUVPPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [equipment, setEquipment] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isSubmittingLead, setIsSubmittingLead] = useState(false);
  const [leadStatus, setLeadStatus] = useState<"success" | "error" | null>(
    null
  );

  const faqItems = [
    {
      question: "Чем отличаются мешки для циклонов от мешков для УВП?",
      answer:
        "У циклона мешок стоит после сепарации крупной фракции и удерживает мелкую пыль; важны посадка на рукав и работа в вашем режиме потока. У УВП — большие расходы и рукавные фильтры, часто с регенерацией. Габариты подбирают по паспорту или замеру; для типовых линий КОНСАР и CONSAR смотрите соответствие размеров в карточке выше или пришлите фото узла.",
    },
    {
      question: "Как часто нужно менять фильтровальные мешки?",
      answer:
        "Срок службы зависит от интенсивности работы, типа пыли и материала мешка. В среднем мешки служат от 1 до 5 лет. Рекомендуется проверять состояние мешков каждые 6 месяцев и менять при снижении эффективности фильтрации или видимых повреждениях.",
    },
    {
      question: "Можно ли заказать мешки нестандартных размеров?",
      answer:
        "Да, мы изготавливаем фильтровальные мешки по индивидуальным размерам под конкретное оборудование. Для расчёта стоимости пришлите нам чертёж или размеры вашего оборудования.",
    },
    {
      question: "Какой материал лучше выбрать для деревообработки?",
      answer:
        "Для деревообрабатывающих производств оптимально подходит полиэстер. Он обеспечивает высокую степень фильтрации древесной пыли, выдерживает температуру до 150°C и имеет хороший срок службы 2-3 года.",
    },
    {
      question: "Как происходит доставка?",
      answer:
        "Доставка осуществляется по всей России транспортными компаниями (СДЭК, ПЭК, Деловые Линии). Стоимость доставки рассчитывается индивидуально в зависимости от региона и объёма заказа. Возможен самовывоз со склада.",
    },
  ];

  async function sendQuickLead() {
    if (!phone.trim() || !email.trim()) {
      return;
    }
    setIsSubmittingLead(true);
    setLeadStatus(null);
    try {
      await sendApplicationEmail({
        name: name.trim() || "—",
        email: email.trim(),
        phone: phone.trim(),
        message: [
          "Заявка: мешки для УВП и циклонов",
          "",
          "Модель оборудования / размеры мешка:",
          equipment.trim() || "—",
        ].join("\n"),
      });
      setLeadStatus("success");
      setName("");
      setPhone("");
      setEmail("");
      setEquipment("");
    } catch (e) {
      console.error("meshki-dlya-ciklonov lead:", e);
      setLeadStatus("error");
    } finally {
      setIsSubmittingLead(false);
    }
  }

  return (
    <>
      <Navigation />

      <section className="bg-[#f5f3ee] pt-[86px] pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-start gap-10 lg:grid-cols-[1fr_0.95fr]">
            <div className="pt-8 lg:pt-10">
              <div className="mb-7 flex flex-wrap items-center gap-2 text-[14px]">
                <a href="/" className="text-teal-600 transition hover:text-teal-700 hover:underline">
                  Главная
                </a>
                <span className="text-slate-400">›</span>
                <a
                  href="/meshki-dlya-aspiracii"
                  className="text-teal-600 transition hover:text-teal-700 hover:underline"
                >
                  Мешки для аспирации
                </a>
                <span className="text-slate-400">›</span>
                <span className="font-medium text-slate-900">
                  Мешки для УВП и циклонов
                </span>
              </div>

              <h1 className="mb-7 text-[34px] font-bold leading-[1.05] text-[#0f172a] md:text-[56px]">
                Мешки для циклонов
                <br />
                и УВП
              </h1>

              <p className="max-w-[620px] text-[18px] leading-8 text-[#475569] md:text-[19px]">
                Производим фильтровальные мешки под циклонные и рукавные узлы, линии УВП и общие
                системы пылеулавливания в цеху: задерживаем пылевые частицы в потоке и снижаем
                запылённость воздуха. Шьём под ваши размеры и режим — от типовой установки до
                отдельного циклона.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="https://wa.me/79514992576?text=Здравствуйте!%20Хочу%20заказать%20мешки%20для%20УВП%20и%20циклонов"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-[56px] items-center justify-center rounded-xl bg-[#f56600] px-8 text-[18px] font-semibold text-white transition hover:bg-[#de5b00]"
                >
                  Заказать расчёт
                </a>

                <a
                  href="#vidy-filtrovalnyh-meshkov"
                  className="inline-flex h-[56px] items-center justify-center rounded-xl border-2 border-[#f56600] px-8 text-[18px] font-semibold text-[#f56600] transition hover:bg-[#f56600] hover:text-white"
                >
                  Виды мешков
                </a>
              </div>
            </div>

            <div className="flex items-start justify-center">
              <div className="w-full max-w-[640px] overflow-hidden rounded-[22px] bg-[#efedf2]">
                <img
                  src="/images/catalog/meshki-ciklonov-uvp.webp"
                  alt="Мешки для циклонов и УВП, фильтры для аспирационных установок"
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="vidy-filtrovalnyh-meshkov" className="bg-[#f8fafc] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-[30px] font-bold leading-tight text-[#0f172a] md:text-[44px]">
              Типы мешков для циклонов, УВП и аспирации
            </h2>
            <p className="mx-auto max-w-4xl text-[16px] leading-8 text-[#475569] md:text-[17px]">
              Фильтры для очистки воздуха от пыли — под циклоны, рукавные фильтры и
              аспирационные установки с высокой запылённостью
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-[22px] border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-8 flex justify-center">
                <img
                  src="/images/catalog/meshki-dlya-ciklonov.webp"
                  alt="Мешки для циклонов"
                  className="h-[206px] w-auto object-contain"
                />
              </div>
              <h3 className="mb-4 text-[22px] font-bold text-[#0f172a] md:text-[24px]">
                Мешки для циклонов
              </h3>
              <p className="mb-7 text-[16px] leading-8 text-[#475569]">
                После сепарации крупной фракции мешок удерживает мелкую пыль на линии
                пылеулавливания — важны посадка на рукав и устойчивость к потоку воздуха.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-4">
                  <span className="mt-[8px] text-[18px] font-semibold leading-none text-[#ff6b2c]">✓</span>
                  <span className="text-[16px] leading-7 text-[#334155]">Эффективность до 99%</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-[8px] text-[18px] font-semibold leading-none text-[#ff6b2c]">✓</span>
                  <span className="text-[16px] leading-7 text-[#334155]">Термостойкость до 150°C</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-[8px] text-[18px] font-semibold leading-none text-[#ff6b2c]">✓</span>
                  <span className="text-[16px] leading-7 text-[#334155]">Долгий срок службы</span>
                </li>
              </ul>
            </div>

            <div className="rounded-[22px] border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-8 flex justify-center">
                <img
                  src="/images/catalog/meshki-ciklonov-uvp.webp"
                  alt="Мешки для УВП"
                  className="h-[206px] w-auto object-contain"
                />
              </div>
              <h3 className="mb-4 text-[22px] font-bold text-[#0f172a] md:text-[24px]">
                Мешки для УВП и аспирационных установок
              </h3>
              <p className="mb-7 text-[16px] leading-8 text-[#475569]">
                Рукавные и фильтровальные мешки для УВП на большие объёмы воздуха — в том числе
                под типовые линейки вроде КОНСАР УВП-1200, УВП-2000 и CONSAR 2000, если совпадают
                посадочные размеры; точный размер подбираем по замеру или чертежу.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-4">
                  <span className="mt-[8px] text-[18px] font-semibold leading-none text-[#ff6b2c]">✓</span>
                  <span className="text-[16px] leading-7 text-[#334155]">Высокая пропускная способность</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-[8px] text-[18px] font-semibold leading-none text-[#ff6b2c]">✓</span>
                  <span className="text-[16px] leading-7 text-[#334155]">Устойчивость к нагрузкам</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-[8px] text-[18px] font-semibold leading-none text-[#ff6b2c]">✓</span>
                  <span className="text-[16px] leading-7 text-[#334155]">Простая замена</span>
                </li>
              </ul>
            </div>

            <div className="rounded-[22px] border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-8 flex justify-center">
                <img
                  src="/images/catalog/rukavnie-filtri.webp"
                  alt="Рукавные фильтры"
                  className="h-[206px] w-auto object-contain"
                />
              </div>
              <h3 className="mb-4 text-[22px] font-bold text-[#0f172a] md:text-[24px]">
                Рукавные фильтры
              </h3>
              <p className="mb-7 text-[16px] leading-8 text-[#475569]">
                Промышленные рукавные фильтры для систем очистки воздуха
                на производствах с высокой запылённостью.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-4">
                  <span className="mt-[8px] text-[18px] font-semibold leading-none text-[#ff6b2c]">✓</span>
                  <span className="text-[16px] leading-7 text-[#334155]">Максимальная фильтрация</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-[8px] text-[18px] font-semibold leading-none text-[#ff6b2c]">✓</span>
                  <span className="text-[16px] leading-7 text-[#334155]">Различные диаметры</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-[8px] text-[18px] font-semibold leading-none text-[#ff6b2c]">✓</span>
                  <span className="text-[16px] leading-7 text-[#334155]">Индивидуальные размеры</span>
                </li>
              </ul>
            </div>

            <div className="rounded-[22px] border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-8 flex justify-center">
                <img
                  src="/images/catalog/kartridgnie-filtri.webp"
                  alt="Картриджные фильтры"
                  className="h-[206px] w-auto object-contain"
                />
              </div>
              <h3 className="mb-4 text-[22px] font-bold text-[#0f172a] md:text-[24px]">
                Картриджные фильтры
              </h3>
              <p className="mb-7 text-[16px] leading-8 text-[#475569]">
                Компактные картриджные фильтры для эффективной очистки
                воздуха в ограниченном пространстве.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-4">
                  <span className="mt-[8px] text-[18px] font-semibold leading-none text-[#ff6b2c]">✓</span>
                  <span className="text-[16px] leading-7 text-[#334155]">Компактный размер</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-[8px] text-[18px] font-semibold leading-none text-[#ff6b2c]">✓</span>
                  <span className="text-[16px] leading-7 text-[#334155]">Высокая эффективность</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-[8px] text-[18px] font-semibold leading-none text-[#ff6b2c]">✓</span>
                  <span className="text-[16px] leading-7 text-[#334155]">Легкая установка</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f1eb] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-[30px] font-bold leading-tight text-[#0f172a] md:text-[44px]">
              Преимущества фильтров для циклонов и УВП
            </h2>
            <p className="mx-auto max-w-3xl text-[16px] leading-8 text-[#475569] md:text-[17px]">
              Надёжные фильтровальные мешки для систем аспирации и пылеулавливания на производстве
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            <div className="rounded-[22px] border border-[#ece7de] bg-white p-8 shadow-sm">
              <div className="mb-8 flex h-[62px] w-[62px] items-center justify-center rounded-[14px] bg-[#fbedd9]">
                <AdvantageIcon type="shield" />
              </div>
              <h3 className="mb-4 text-[22px] font-bold leading-tight text-[#0f172a]">
                Высокая эффективность
              </h3>
              <p className="text-[16px] leading-8 text-[#475569]">
                Степень очистки воздуха до 99,9% от пыли и мелких частиц
              </p>
            </div>

            <div className="rounded-[22px] border border-[#ece7de] bg-white p-8 shadow-sm">
              <div className="mb-8 flex h-[62px] w-[62px] items-center justify-center rounded-[14px] bg-[#fbedd9]">
                <AdvantageIcon type="flame" />
              </div>
              <h3 className="mb-4 text-[22px] font-bold leading-tight text-[#0f172a]">
                Термостойкость
              </h3>
              <p className="text-[16px] leading-8 text-[#475569]">
                Выдерживают температуру до 200°C без потери свойств
              </p>
            </div>

            <div className="rounded-[22px] border border-[#ece7de] bg-white p-8 shadow-sm">
              <div className="mb-8 flex h-[62px] w-[62px] items-center justify-center rounded-[14px] bg-[#fbedd9]">
                <AdvantageIcon type="clock" />
              </div>
              <h3 className="mb-4 text-[22px] font-bold leading-tight text-[#0f172a]">
                Долгий срок службы
              </h3>
              <p className="text-[16px] leading-8 text-[#475569]">
                Служат от 2 до 5 лет в зависимости от условий эксплуатации
              </p>
            </div>

            <div className="rounded-[22px] border border-[#ece7de] bg-white p-8 shadow-sm">
              <div className="mb-8 flex h-[62px] w-[62px] items-center justify-center rounded-[14px] bg-[#fbedd9]">
                <AdvantageIcon type="tools" />
              </div>
              <h3 className="mb-4 text-[22px] font-bold leading-tight text-[#0f172a]">
                Простая замена
              </h3>
              <p className="text-[16px] leading-8 text-[#475569]">
                Быстрая установка и замена без специального оборудования
              </p>
            </div>

            <div className="rounded-[22px] border border-[#ece7de] bg-white p-8 shadow-sm">
              <div className="mb-8 flex h-[62px] w-[62px] items-center justify-center rounded-[14px] bg-[#fbedd9]">
                <AdvantageIcon type="ruler" />
              </div>
              <h3 className="mb-4 text-[22px] font-bold leading-tight text-[#0f172a]">
                Индивидуальные размеры
              </h3>
              <p className="text-[16px] leading-8 text-[#475569]">
                Изготовление под конкретные параметры вашего оборудования
              </p>
            </div>

            <div className="rounded-[22px] border border-[#ece7de] bg-white p-8 shadow-sm">
              <div className="mb-8 flex h-[62px] w-[62px] items-center justify-center rounded-[14px] bg-[#fbedd9]">
                <AdvantageIcon type="truck" />
              </div>
              <h3 className="mb-4 text-[22px] font-bold leading-tight text-[#0f172a]">
                Доставка по России
              </h3>
              <p className="text-[16px] leading-8 text-[#475569]">
                Отправка в любой регион удобной транспортной компанией
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8fafc] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-[30px] font-bold leading-tight text-[#0f172a] md:text-[44px]">
              Где применяют мешки для пылеулавливания
            </h2>
            <p className="mx-auto max-w-4xl text-[16px] leading-8 text-[#475569] md:text-[17px]">
              Промышленная фильтрация воздуха на циклонах, УВП и общих линиях аспирации
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            <div className="rounded-[22px] border border-[#e7e5e4] bg-[#f9fafb] p-8 shadow-sm transition duration-300 hover:border-[#f56600]">
              <div className="mb-8 flex h-[62px] w-[62px] items-center justify-center rounded-[14px] bg-[#fbedd9]">
                <IndustryIcon type="wood" />
              </div>
              <h3 className="mb-4 text-[22px] font-bold leading-tight text-[#0f172a]">
                Деревообрабатывающие производства
              </h3>
              <p className="text-[16px] leading-8 text-[#475569]">
                Очистка воздуха от древесной пыли и стружки на мебельных фабриках и столярных цехах
              </p>
            </div>

            <div className="rounded-[22px] border border-[#e7e5e4] bg-[#f9fafb] p-8 shadow-sm transition duration-300 hover:border-[#f56600]">
              <div className="mb-8 flex h-[62px] w-[62px] items-center justify-center rounded-[14px] bg-[#fbedd9]">
                <IndustryIcon type="metal" />
              </div>
              <h3 className="mb-4 text-[22px] font-bold leading-tight text-[#0f172a]">
                Металлообработка
              </h3>
              <p className="text-[16px] leading-8 text-[#475569]">
                Улавливание металлической пыли и стружки при шлифовке, резке и сверлении
              </p>
            </div>

            <div className="rounded-[22px] border border-[#e7e5e4] bg-[#f9fafb] p-8 shadow-sm transition duration-300 hover:border-[#f56600]">
              <div className="mb-8 flex h-[62px] w-[62px] items-center justify-center rounded-[14px] bg-[#fbedd9]">
                <IndustryIcon type="chem" />
              </div>
              <h3 className="mb-4 text-[22px] font-bold leading-tight text-[#0f172a]">
                Химическая промышленность
              </h3>
              <p className="text-[16px] leading-8 text-[#475569]">
                Фильтрация воздуха от химических частиц и порошков на производствах
              </p>
            </div>

            <div className="rounded-[22px] border border-[#e7e5e4] bg-[#f9fafb] p-8 shadow-sm transition duration-300 hover:border-[#f56600]">
              <div className="mb-8 flex h-[62px] w-[62px] items-center justify-center rounded-[14px] bg-[#fbedd9]">
                <IndustryIcon type="food" />
              </div>
              <h3 className="mb-4 text-[22px] font-bold leading-tight text-[#0f172a]">
                Пищевая промышленность
              </h3>
              <p className="text-[16px] leading-8 text-[#475569]">
                Очистка воздуха от мучной пыли, крахмала и других пищевых частиц
              </p>
            </div>

            <div className="rounded-[22px] border border-[#e7e5e4] bg-[#f9fafb] p-8 shadow-sm transition duration-300 hover:border-[#f56600]">
              <div className="mb-8 flex h-[62px] w-[62px] items-center justify-center rounded-[14px] bg-[#fbedd9]">
                <IndustryIcon type="cement" />
              </div>
              <h3 className="mb-4 text-[22px] font-bold leading-tight text-[#0f172a]">
                Цементные заводы
              </h3>
              <p className="text-[16px] leading-8 text-[#475569]">
                Улавливание цементной пыли и минеральных частиц в производственных цехах
              </p>
            </div>

            <div className="rounded-[22px] border border-[#e7e5e4] bg-[#f9fafb] p-8 shadow-sm transition duration-300 hover:border-[#f56600]">
              <div className="mb-8 flex h-[62px] w-[62px] items-center justify-center rounded-[14px] bg-[#fbedd9]">
                <IndustryIcon type="textile" />
              </div>
              <h3 className="mb-4 text-[22px] font-bold leading-tight text-[#0f172a]">
                Текстильная промышленность
              </h3>
              <p className="text-[16px] leading-8 text-[#475569]">
                Фильтрация воздуха от текстильных волокон и пыли на швейных производствах
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8fafc] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <h2 className="mb-4 text-[30px] font-bold leading-tight text-[#0f172a] md:text-[44px]">
              Материалы фильтров для аспирации и циклонов
            </h2>
            <p className="mx-auto max-w-4xl text-[16px] leading-8 text-[#475569] md:text-[17px]">
              Подбор ткани под температуру, абразив и требуемую фильтрацию пылевых частиц
            </p>
          </div>

          <div className="overflow-hidden rounded-[20px] border border-slate-200 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[980px] border-collapse">
                <caption className="sr-only">
                  Сравнение материалов фильтровальных мешков для циклонов, УВП и аспирационных
                  установок: температура, эффективность удержания пыли, срок службы
                </caption>
                <thead>
                  <tr className="bg-[#f56600] text-white">
                    <th className="px-6 py-5 text-left text-[16px] font-semibold">Материал</th>
                    <th className="px-6 py-5 text-left text-[16px] font-semibold">Температура</th>
                    <th className="px-6 py-5 text-left text-[16px] font-semibold">Эффективность</th>
                    <th className="px-6 py-5 text-left text-[16px] font-semibold">Применение</th>
                    <th className="px-6 py-5 text-left text-[16px] font-semibold">Срок службы</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-b border-slate-200 bg-white">
                    <td className="px-6 py-5 text-[16px] font-medium text-[#0f172a]">Полиэстер</td>
                    <td className="px-6 py-5 text-[16px] text-[#475569]">До 150°C</td>
                    <td className="px-6 py-5 text-[16px] text-[#475569]">99%</td>
                    <td className="px-6 py-5 text-[16px] text-[#475569]">Деревообработка, металлообработка</td>
                    <td className="px-6 py-5 text-[16px] text-[#475569]">2-3 года</td>
                  </tr>

                  <tr className="border-b border-slate-200 bg-[#fafafa]">
                    <td className="px-6 py-5 text-[16px] font-medium text-[#0f172a]">Полипропилен</td>
                    <td className="px-6 py-5 text-[16px] text-[#475569]">До 90°C</td>
                    <td className="px-6 py-5 text-[16px] text-[#475569]">98%</td>
                    <td className="px-6 py-5 text-[16px] text-[#475569]">Пищевая промышленность</td>
                    <td className="px-6 py-5 text-[16px] text-[#475569]">1-2 года</td>
                  </tr>

                  <tr className="border-b border-slate-200 bg-white">
                    <td className="px-6 py-5 text-[16px] font-medium text-[#0f172a]">Номекс</td>
                    <td className="px-6 py-5 text-[16px] text-[#475569]">До 200°C</td>
                    <td className="px-6 py-5 text-[16px] text-[#475569]">99,9%</td>
                    <td className="px-6 py-5 text-[16px] text-[#475569]">Химическая промышленность</td>
                    <td className="px-6 py-5 text-[16px] text-[#475569]">4-5 лет</td>
                  </tr>

                  <tr className="border-b border-slate-200 bg-[#fafafa]">
                    <td className="px-6 py-5 text-[16px] font-medium text-[#0f172a]">Стекловолокно</td>
                    <td className="px-6 py-5 text-[16px] text-[#475569]">До 260°C</td>
                    <td className="px-6 py-5 text-[16px] text-[#475569]">99,9%</td>
                    <td className="px-6 py-5 text-[16px] text-[#475569]">Цементные заводы</td>
                    <td className="px-6 py-5 text-[16px] text-[#475569]">3-4 года</td>
                  </tr>

                  <tr className="bg-white">
                    <td className="px-6 py-5 text-[16px] font-medium text-[#0f172a]">ПТФЭ (Тефлон)</td>
                    <td className="px-6 py-5 text-[16px] text-[#475569]">До 260°C</td>
                    <td className="px-6 py-5 text-[16px] text-[#475569]">99,99%</td>
                    <td className="px-6 py-5 text-[16px] text-[#475569]">Агрессивные среды</td>
                    <td className="px-6 py-5 text-[16px] text-[#475569]">5+ лет</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-12 rounded-[22px] border border-[#efd1ad] bg-[#f8efe4] px-8 py-8 shadow-sm">
            <div className="flex items-start gap-6">
              <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[14px] bg-[#f56600]">
                <InfoIcon />
              </div>

              <div>
                <h3 className="mb-3 text-[22px] font-bold leading-tight text-[#0f172a]">
                  Подбор материала
                </h3>
                <p className="max-w-[1120px] text-[16px] leading-8 text-[#334155]">
                  Наши специалисты помогут подобрать оптимальный материал фильтровального
                  мешка в зависимости от типа пыли, температуры, влажности и других
                  условий эксплуатации. Свяжитесь с нами для консультации.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#ff6428] py-18 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-9 text-center">
            <h2 className="mb-3 text-[24px] font-bold leading-[1.15] text-white md:text-[34px]">
              Купить мешки для циклонов и УВП — расчёт стоимости
            </h2>
            <p className="mx-auto max-w-3xl text-[14px] leading-7 text-white/90 md:text-[15px]">
              Подберём фильтры для аспирации под вашу установку и рассчитаем стоимость
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.02fr_1fr] lg:gap-6">
            <div className="rounded-[22px] bg-[#f8f8f8] p-7 shadow-[0_16px_40px_rgba(0,0,0,0.10)] md:p-8">
              <h3 className="mb-6 text-[19px] font-bold text-[#0f172a]">
                Быстрая заявка
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="mb-2 block text-[14px] font-medium text-[#334155]">
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Иван Иванов"
                    className="h-[50px] w-full rounded-[12px] border border-slate-200 bg-white px-4 text-[15px] text-[#0f172a] outline-none transition placeholder:text-slate-400 focus:border-[#ff6428]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[14px] font-medium text-[#334155]">
                    Телефон <span className="text-[#ff6428]">*</span>
                  </label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+7 (___) ___-__-__"
                    className="h-[50px] w-full rounded-[12px] border border-slate-200 bg-white px-4 text-[15px] text-[#0f172a] outline-none transition placeholder:text-slate-400 focus:border-[#ff6428]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[14px] font-medium text-[#334155]">
                    Email <span className="text-[#ff6428]">*</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@mail.ru"
                    className="h-[50px] w-full rounded-[12px] border border-slate-200 bg-white px-4 text-[15px] text-[#0f172a] outline-none transition placeholder:text-slate-400 focus:border-[#ff6428]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[14px] font-medium text-[#334155]">
                    Модель оборудования / размеры мешка
                  </label>
                  <textarea
                    value={equipment}
                    onChange={(e) => setEquipment(e.target.value)}
                    placeholder="Например: КОНСАР УВП-1200, CONSAR 2000, циклон — диаметр патрубка и м³/ч"
                    rows={4}
                    className="w-full rounded-[12px] border border-slate-200 bg-white px-4 py-4 text-[15px] leading-7 text-[#0f172a] outline-none transition placeholder:text-slate-400 focus:border-[#ff6428]"
                  />
                </div>

                <button
                  type="button"
                  onClick={sendQuickLead}
                  disabled={isSubmittingLead}
                  className="flex h-[52px] w-full items-center justify-center rounded-[12px] bg-[#ff6b2c] text-[17px] font-semibold text-white transition hover:bg-[#f25b1a] disabled:cursor-not-allowed disabled:bg-slate-400"
                >
                  {isSubmittingLead ? "Отправка..." : "Отправить заявку"}
                </button>
                {leadStatus === "success" && (
                  <p className="text-center text-sm font-medium text-emerald-700">
                    Заявка успешно отправлена
                  </p>
                )}
                {leadStatus === "error" && (
                  <p className="text-center text-sm font-medium text-red-600">
                    {SEND_EMAIL_USER_ERROR}
                  </p>
                )}

                <p className="text-center text-[12px] leading-6 text-slate-400">
                  Нажимая кнопку, вы соглашаетесь с{" "}
                  <a href="/politika-konfidencialnosti" className="underline hover:text-slate-500">
                    политикой конфиденциальности
                  </a>
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <a
                href="tel:+79514992576"
                className="flex items-center gap-4 rounded-[20px] border border-white/20 bg-[rgba(255,255,255,0.16)] p-5 text-white transition hover:bg-[rgba(255,255,255,0.21)]"
              >
                <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[16px] bg-white text-[24px] text-[#ff6428]">
                  ☎
                </div>
                <div>
                  <div className="text-[13px] text-white/78">Позвонить</div>
                  <div className="text-[17px] font-semibold">+7 (951) 499-25-76</div>
                  <div className="text-[13px] text-white/78">Пн–Пт 9:00-18:00 МСК</div>
                </div>
              </a>

              <a
                href="https://wa.me/79514992576"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-[20px] border border-white/20 bg-[rgba(255,255,255,0.16)] p-5 text-white transition hover:bg-[rgba(255,255,255,0.21)]"
              >
                <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[16px] bg-white">
                  <img
                    src="/images/whatsapp.png"
                    alt="WhatsApp"
                    className="h-[50px] w-[50px] object-contain"
                  />
                </div>
                <div>
                  <div className="text-[13px] text-white/78">WhatsApp</div>
                  <div className="text-[17px] font-semibold">Написать в WhatsApp</div>
                  <div className="text-[13px] text-white/78">
                    Ответим быстро — обычно за 15 минут
                  </div>
                </div>
              </a>

              <Link
                href="/kontakty"
                className="flex items-center gap-4 rounded-[20px] border border-white/20 bg-[rgba(255,255,255,0.16)] p-5 text-white transition hover:bg-[rgba(255,255,255,0.21)]"
              >
                <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[16px] bg-white text-[24px] text-[#ff6428]">
                  ✉
                </div>
                <div>
                  <div className="text-[13px] text-white/78">Email</div>
                  <div className="text-[17px] font-semibold">filterflow@mail.ru</div>
                  <div className="text-[13px] text-white/78">
                    Пришлите размеры или фото оборудования
                  </div>
                </div>
              </Link>

              <div className="rounded-[20px] border border-white/20 bg-[rgba(255,255,255,0.16)] p-5 text-white">
                <h3 className="mb-3 flex items-center gap-3 text-[18px] font-semibold">
                  <span className="text-[17px]">ⓘ</span>
                  Что указать в заявке
                </h3>

                <ul className="space-y-2.5 text-[14px] leading-7 text-white/95">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-[12px]">◎</span>
                    <span>Тип оборудования (УВП, циклон, рукавный фильтр)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-[12px]">◎</span>
                    <span>Размеры мешка или параметры посадки</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-[12px]">◎</span>
                    <span>Температуру, тип пыли и нужное количество штук</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8fafc] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-[30px] font-bold leading-tight text-[#0f172a] md:text-[44px]">
              Похожие продукты
            </h2>
            <p className="mx-auto max-w-3xl text-[16px] leading-8 text-[#475569] md:text-[17px]">
              Другие решения для фильтрации воздуха
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/meshki-dlya-aspiracii"
              className="group rounded-[22px] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#f56600] hover:shadow-md"
            >
              <div className="mb-6 flex justify-center">
                <img
                  src="/images/catalog/meshki-aspiracii.webp"
                  alt="Мешки для аспирации"
                  className="h-[180px] w-auto object-contain transition duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="mb-3 text-[22px] font-bold text-[#0f172a]">
                Мешки для аспирации
              </h3>
              <p className="mb-5 text-[16px] leading-7 text-[#475569]">
                Фильтровальные мешки для систем аспирации
              </p>
              <span className="inline-flex items-center gap-2 font-medium text-[#f56600]">
                Подробнее <span>→</span>
              </span>
            </Link>

            <Link
              href="/filtracionnye-rukava"
              className="group rounded-[22px] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#f56600] hover:shadow-md"
            >
              <div className="mb-6 flex justify-center">
                <img
                  src="/images/catalog/filtracionalnye-rukava.webp"
                  alt="Фильтровальные рукава"
                  className="h-[180px] w-auto object-contain transition duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="mb-3 text-[22px] font-bold text-[#0f172a]">
                Фильтровальные рукава
              </h3>
              <p className="mb-5 text-[16px] leading-7 text-[#475569]">
                Промышленные рукава для очистки воздуха
              </p>
              <span className="inline-flex items-center gap-2 font-medium text-[#f56600]">
                Подробнее <span>→</span>
              </span>
            </Link>

            <Link
              href="/meshki-dlya-struzhkootsosa"
              className="group rounded-[22px] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#f56600] hover:shadow-md"
            >
              <div className="mb-6 flex justify-center">
                <img
                  src="/images/catalog/meshki-struzhkootsosa.webp"
                  alt="Мешки для стружкоотсоса"
                  className="h-[180px] w-auto object-contain transition duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="mb-3 text-[22px] font-bold text-[#0f172a]">
                Мешки для стружкоотсоса
              </h3>
              <p className="mb-5 text-[16px] leading-7 text-[#475569]">
                Мешки для деревообрабатывающего оборудования
              </p>
              <span className="inline-flex items-center gap-2 font-medium text-[#f56600]">
                Подробнее <span>→</span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#f8fafc] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="mb-4 inline-flex rounded-full bg-[#f8efe4] px-5 py-2 text-[14px] font-semibold text-[#f56600]">
                Читайте в блоге
              </div>
              <h2 className="max-w-[980px] text-[30px] font-bold leading-tight text-[#0f172a] md:text-[44px]">
                Полезные статьи о мешках для циклонов и УВП
              </h2>
            </div>

            <a
              href="/blog"
              className="inline-flex items-center gap-2 text-[16px] font-medium text-teal-600 transition hover:text-teal-700"
            >
              Все статьи
              <span className="text-[20px] leading-none">→</span>
            </a>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            <a
              href="/blog/kak-rabotaet-aspiraciya"
              className="group rounded-[20px] border border-[#e5e7eb] bg-white p-6 transition duration-300 hover:border-[#f2c18f] hover:bg-[#fdf7f0]"
            >
              <div className="mb-5 flex h-[40px] w-[40px] items-center justify-center rounded-[10px] border border-[#e5e7eb] text-[#f56600] transition group-hover:border-[#f56600] group-hover:bg-[#f56600] group-hover:text-white">
                <ArticleIcon />
              </div>
              <h3 className="mb-3 text-[18px] font-semibold leading-8 text-[#0f172a] transition group-hover:text-[#f56600]">
                Как работает система аспирации
              </h3>
              <p className="text-[15px] leading-7 text-[#64748b]">
                Принцип работы систем пылеудаления, циклонов и УВП
              </p>
            </a>

            <a
              href="/blog/tipy-filtruyushchikh-meshkov"
              className="group rounded-[20px] border border-[#e5e7eb] bg-white p-6 transition duration-300 hover:border-[#f2c18f] hover:bg-[#fdf7f0]"
            >
              <div className="mb-5 flex h-[40px] w-[40px] items-center justify-center rounded-[10px] border border-[#e5e7eb] text-[#f56600] transition group-hover:border-[#f56600] group-hover:bg-[#f56600] group-hover:text-white">
                <ArticleIcon />
              </div>
              <h3 className="mb-3 text-[18px] font-semibold leading-8 text-[#0f172a] transition group-hover:text-[#f56600]">
                Типы фильтровальных мешков
              </h3>
              <p className="text-[15px] leading-7 text-[#64748b]">
                Полный обзор видов фильтров для циклонов и пылеулавливающих установок
              </p>
            </a>

            <a
              href="/blog/kak-vybrat-meshok-aspiracii"
              className="group rounded-[20px] border border-[#e5e7eb] bg-white p-6 transition duration-300 hover:border-[#f2c18f] hover:bg-[#fdf7f0]"
            >
              <div className="mb-5 flex h-[40px] w-[40px] items-center justify-center rounded-[10px] border border-[#e5e7eb] text-[#f56600] transition group-hover:border-[#f56600] group-hover:bg-[#f56600] group-hover:text-white">
                <ArticleIcon />
              </div>
              <h3 className="mb-3 text-[18px] font-semibold leading-8 text-[#0f172a] transition group-hover:text-[#f56600]">
                Как выбрать мешок для аспирации
              </h3>
              <p className="text-[15px] leading-7 text-[#64748b]">
                Руководство по подбору фильтров для промышленных систем
              </p>
            </a>

            <a
              href="/blog/kogda-menyat-filtr-meshok"
              className="group rounded-[20px] border border-[#e5e7eb] bg-white p-6 transition duration-300 hover:border-[#f2c18f] hover:bg-[#fdf7f0]"
            >
              <div className="mb-5 flex h-[40px] w-[40px] items-center justify-center rounded-[10px] border border-[#e5e7eb] text-[#f56600] transition group-hover:border-[#f56600] group-hover:bg-[#f56600] group-hover:text-white">
                <ArticleIcon />
              </div>
              <h3 className="mb-3 text-[18px] font-semibold leading-8 text-[#0f172a] transition group-hover:text-[#f56600]">
                Когда менять фильтровальный мешок
              </h3>
              <p className="text-[15px] leading-7 text-[#64748b]">
                Сроки замены и признаки износа промышленных фильтров
              </p>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#f8fafc] py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-[30px] font-bold leading-tight text-[#0f172a] md:text-[44px]">
              Вопросы о мешках для циклонов и УВП
            </h2>
            <p className="mx-auto max-w-3xl text-[16px] leading-8 text-[#475569] md:text-[17px]">
              Подбор, срок службы и заказ фильтров для аспирации
            </p>
          </div>

          <div className="space-y-5">
            {faqItems.map((item, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={item.question}
                  className={`overflow-hidden rounded-[18px] border transition duration-300 ${
                    isOpen
                      ? "border-[#ead8bf] bg-[#f8efe4]"
                      : "border-[#e5e7eb] bg-white"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-6 px-9 py-8 text-left"
                  >
                    <span className="text-[18px] font-semibold leading-8 text-[#0f172a] md:text-[19px]">
                      {item.question}
                    </span>
                    <span className="shrink-0">
                      <FaqChevron isOpen={isOpen} />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-9 pb-8">
                      <p className="max-w-[900px] text-[16px] leading-8 text-[#475569]">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-[1180px]">
            <h2 className="mb-8 text-[30px] font-bold leading-tight text-[#0f172a] md:text-[44px]">
              Мешки для циклонов и УВП в системах аспирации
            </h2>

            <div className="space-y-7 text-[16px] leading-8 text-[#334155] md:text-[17px]">
              <p>
                <strong className="font-semibold text-[#0f172a]">
                  Мешки для УВП и циклонов
                </strong>{" "}
                — фильтровальные элементы для аспирационных установок и линий
                пылеулавливания: помогают очищать воздух от пыли и аэрозолей на
                деревообработке, в металлообработке, на пищевых и химических объектах.
                Это часть промышленной фильтрации, а не бытовой вентиляции.
              </p>

              <p>
                У мешков для УВП обычно большая фильтрующая площадь под высокий расход; мешки для
                циклонов должны выдерживать условия после сепарации и работу в общей системе
                аспирации. Конкретные размеры зависят от патрубка и камеры — их сверяют по паспорту
                или замеру.
              </p>

              <div>
                <p className="mb-4">
                  Основные характеристики при выборе мешков для УВП и циклонов:
                </p>

                <ul className="space-y-2.5">
                  <li className="flex items-start gap-4">
                    <span className="mt-[7px] text-[18px] font-semibold leading-none text-[#ff6b2c]">•</span>
                    <span>
                      <strong className="font-semibold text-[#0f172a]">Объём воздушного потока</strong> — определяет необходимую площадь фильтрации и количество мешков
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="mt-[7px] text-[18px] font-semibold leading-none text-[#ff6b2c]">•</span>
                    <span>
                      <strong className="font-semibold text-[#0f172a]">Концентрация пыли</strong> — влияет на выбор материала и частоту замены
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="mt-[7px] text-[18px] font-semibold leading-none text-[#ff6b2c]">•</span>
                    <span>
                      <strong className="font-semibold text-[#0f172a]">Температура газового потока</strong> — от +20°C до +150°C для стандартных материалов
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="mt-[7px] text-[18px] font-semibold leading-none text-[#ff6b2c]">•</span>
                    <span>
                      <strong className="font-semibold text-[#0f172a]">Тип пыли</strong> — древесная, металлическая, химическая или пищевая
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="mt-[7px] text-[18px] font-semibold leading-none text-[#ff6b2c]">•</span>
                    <span>
                      <strong className="font-semibold text-[#0f172a]">Способ регенерации</strong> — встряхивание, обратная продувка или импульсная очистка
                    </span>
                  </li>
                </ul>
              </div>

              <p>
                Мы производим мешки для УВП и циклонов по индивидуальным размерам с
                расчётом стоимости и доставкой по всей России. Минимальный заказ — от 1
                штуки. Срок изготовления — от 3 рабочих дней.
              </p>

              <div>
                <h3 className="mb-4 text-[24px] font-bold leading-tight text-[#0f172a] md:text-[32px]">
                  Как подобрать мешки для УВП и циклонов
                </h3>

                <p className="mb-4">
                  Для подбора мешков для УВП необходимо знать модель установки или её
                  технические параметры: диаметр патрубка, высоту камеры, объём
                  воздушного потока (м³/ч) и тип улавливаемой пыли. Если параметры
                  неизвестны — пришлите фотографию или паспорт оборудования, и наши
                  специалисты бесплатно подберут подходящий вариант.
                </p>

                <ul className="space-y-2.5">
                  <li className="flex items-start gap-4">
                    <span className="mt-[7px] text-[18px] font-semibold leading-none text-[#ff6b2c]">•</span>
                    <span>Для деревообработки — полиэстеровые мешки, степень фильтрации 99,5%, температура до 130°C</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="mt-[7px] text-[18px] font-semibold leading-none text-[#ff6b2c]">•</span>
                    <span>Для металлообработки — антистатические мешки, устойчивые к металлической пыли и искрам</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="mt-[7px] text-[18px] font-semibold leading-none text-[#ff6b2c]">•</span>
                    <span>Для химических производств — полипропиленовые мешки с высокой химической стойкостью</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="mt-[7px] text-[18px] font-semibold leading-none text-[#ff6b2c]">•</span>
                    <span>Для пищевой промышленности — сертифицированные материалы, допущенные к контакту с пищевыми продуктами</span>
                  </li>
                </ul>

                <p className="mt-4">
                  Срок службы мешков для УВП при правильном подборе материала составляет
                  от 1 до 5 лет. Регулярная очистка и своевременная замена обеспечивают
                  стабильную работу системы и снижают затраты на обслуживание.
                </p>
              </div>

              <div>
                <h3 className="mb-4 text-[24px] font-bold leading-tight text-[#0f172a] md:text-[32px]">
                  Купить мешки для систем аспирации у производителя
                </h3>

                <p className="mb-4">
                  FilterFlow шьёт фильтровальные мешки для циклонов и УВП, рукавные решения под
                  аспирационные установки и нестандартные задачи по чертежу. Заказ от одной штуки
                  или партии — уточним размеры и сроки изготовления.
                </p>

                <p>
                  Доставляем заказы по всей России: Москва, Санкт-Петербург,
                  Екатеринбург, Новосибирск, Казань, Краснодар, Ростов-на-Дону и другие
                  города. Работаем с юридическими и физическими лицами, предоставляем все
                  необходимые документы.
                </p>
              </div>

              <div className="flex justify-center pt-3">
                <a
                  href="https://wa.me/79514992576?text=Здравствуйте!%20Хочу%20заказать%20мешки%20для%20УВП%20и%20циклонов"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-[58px] items-center justify-center gap-3 rounded-full bg-[#ff6b2c] px-9 text-[17px] font-semibold text-white transition hover:bg-[#f25b1a]"
                >
                  <span>Заказать мешки для УВП и циклонов</span>
                  <ArrowRightIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SeeAlsoLinks excludeHref="/meshki-dlya-ciklonov-i-uvp" />
      <FloatingContacts />
    </>
  );
}