"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import Navigation from "../components/Navigation";
import SeeAlsoLinks from "../components/SeeAlsoLinks";
import FloatingContacts from "../components/feature/FloatingContacts";

type GuideRow = {
  brand: string;
  model: string;
  power: string;
  upper: string;
  lower: string;
  type: string;
};

type CatalogCard = {
  title: string;
  description: string;
  href: string;
  icon: string;
};

type ArticleCard = {
  title: string;
  description: string;
  href: string;
};

const guideRows: GuideRow[] = [
  { brand: "JET", model: "DC-1100VX-CK", power: "1,1 кВт", upper: "Ø330 × 620 мм", lower: "Ø330 × 520 мм", type: "Однофазный" },
  { brand: "JET", model: "DC-1200VX", power: "1,2 кВт", upper: "Ø380 × 720 мм", lower: "Ø380 × 620 мм", type: "Однофазный" },
  { brand: "JET", model: "DC-1900A", power: "1,5 кВт", upper: "Ø450 × 900 мм", lower: "Ø450 × 820 мм", type: "Промышленный" },
  { brand: "JET", model: "DC-2400B", power: "2,4 кВт", upper: "Ø510 × 980 мм", lower: "Ø510 × 900 мм", type: "Промышленный" },
  { brand: "JET", model: "DC-1200", power: "1,2 кВт", upper: "Размер уточняется", lower: "Подбор по модели", type: "Уточняйте" },
  { brand: "JET", model: "DC-1100", power: "1,1 кВт", upper: "Размер уточняется", lower: "Подбор по модели", type: "Уточняйте" },
  { brand: "JET", model: "DC-2300", power: "2,3 кВт", upper: "Размер уточняется", lower: "Подбор по модели", type: "Уточняйте" },
  { brand: "JET", model: "DC-3000", power: "3,0 кВт", upper: "Размер уточняется", lower: "Подбор по модели", type: "Уточняйте" },

  { brand: "PROMA", model: "DO-600S", power: "0,6 кВт", upper: "Ø260 × 480 мм", lower: "Ø260 × 440 мм", type: "Бытовой" },
  { brand: "PROMA", model: "DO-1200", power: "1,2 кВт", upper: "Ø330 × 620 мм", lower: "Ø330 × 540 мм", type: "Полупрофессиональный" },
  { brand: "PROMA", model: "DO-2000", power: "2,0 кВт", upper: "Ø400 × 760 мм", lower: "Ø400 × 680 мм", type: "Профессиональный" },
  { brand: "PROMA", model: "OP-1500", power: "1,5 кВт", upper: "Размер уточняется", lower: "Подбор по модели", type: "Уточняйте" },
  { brand: "PROMA", model: "OP-2200", power: "2,2 кВт", upper: "Размер уточняется", lower: "Подбор по модели", type: "Уточняйте" },

  { brand: "Корвет", model: "371", power: "1,1 кВт", upper: "Ø330 × 620 мм", lower: "Ø330 × 520 мм", type: "Однофазный" },
  { brand: "Корвет", model: "374", power: "2,2 кВт", upper: "Ø450 × 880 мм", lower: "Ø450 × 800 мм", type: "Трёхфазный" },
  { brand: "Энкор Корвет", model: "64", power: "Уточняйте", upper: "Размер уточняется", lower: "Подбор по модели", type: "Уточняйте" },
  { brand: "Энкор Корвет", model: "65", power: "Уточняйте", upper: "Размер уточняется", lower: "Подбор по модели", type: "Уточняйте" },
  { brand: "Энкор Корвет", model: "66", power: "Уточняйте", upper: "Размер уточняется", lower: "Подбор по модели", type: "Уточняйте" },
  { brand: "Энкор Корвет", model: "67", power: "Уточняйте", upper: "Размер уточняется", lower: "Подбор по модели", type: "Уточняйте" },

  { brand: "Holzmann", model: "ABS 1400", power: "1,4 кВт", upper: "Ø300 × 560 мм", lower: "Ø300 × 480 мм", type: "Бытовой" },
  { brand: "Holzmann", model: "ABS 2300", power: "2,3 кВт", upper: "Ø400 × 760 мм", lower: "Ø400 × 680 мм", type: "Полупромышленный" },
  { brand: "Holzmann", model: "ABS 3200", power: "3,2 кВт", upper: "Ø450 × 860 мм", lower: "Ø450 × 780 мм", type: "Промышленный" },
  { brand: "Holzmann", model: "ABS 1080", power: "1,08 кВт", upper: "Размер уточняется", lower: "Подбор по модели", type: "Уточняйте" },
  { brand: "Holzmann", model: "ABS 1500", power: "1,5 кВт", upper: "Размер уточняется", lower: "Подбор по модели", type: "Уточняйте" },
  { brand: "Holzmann", model: "ABS 2200", power: "2,2 кВт", upper: "Размер уточняется", lower: "Подбор по модели", type: "Уточняйте" },

  { brand: "Record Power", model: "CX2500", power: "2,5 кВт", upper: "Ø450 × 860 мм", lower: "Ø450 × 760 мм", type: "Профессиональный" },
  { brand: "Record Power", model: "CX3000", power: "3,0 кВт", upper: "Ø510 × 960 мм", lower: "Ø510 × 880 мм", type: "Профессиональный" },
  { brand: "Record Power", model: "DX1000", power: "1,0 кВт", upper: "Размер уточняется", lower: "Подбор по модели", type: "Уточняйте" },
  { brand: "Record Power", model: "DX1500", power: "1,5 кВт", upper: "Размер уточняется", lower: "Подбор по модели", type: "Уточняйте" },
  { brand: "Record Power", model: "CX2600", power: "2,6 кВт", upper: "Размер уточняется", lower: "Подбор по модели", type: "Уточняйте" },

  { brand: "Powermatic", model: "PM1900TX", power: "1,5 кВт", upper: "Ø500 × 960 мм", lower: "Ø500 × 880 мм", type: "Профессиональный" },
  { brand: "Powermatic", model: "PM1300TX", power: "1,3 кВт", upper: "Ø380 × 740 мм", lower: "Ø380 × 640 мм", type: "Профессиональный" },

  { brand: "Makita", model: "P-36343 (450 л)", power: "1,0 кВт", upper: "Ø340 × 660 мм", lower: "Ø340 × 560 мм", type: "Полупрофессиональный" },
  { brand: "Makita", model: "191Z16-2 (36 л)", power: "0,8 кВт", upper: "Ø220 × 420 мм", lower: "Ø220 × 360 мм", type: "Бытовой" },

  { brand: "Bosch", model: "GAS 35 H AFC", power: "1,4 кВт", upper: "Ø280 × 520 мм", lower: "Ø280 × 460 мм", type: "Полупрофессиональный" },
  { brand: "Bosch", model: "GAS 55 M AFC", power: "1,8 кВт", upper: "Ø330 × 620 мм", lower: "Ø330 × 540 мм", type: "Полупрофессиональный" },

  { brand: "КОНСАР", model: "УВП-1200", power: "1,2 кВт", upper: "Размер уточняется", lower: "Подбор по модели", type: "УВП" },
  { brand: "КОНСАР", model: "УВП-2000", power: "2,0 кВт", upper: "Размер уточняется", lower: "Подбор по модели", type: "УВП" },
  { brand: "КОНСАР", model: "УВП-2500", power: "2,5 кВт", upper: "Размер уточняется", lower: "Подбор по модели", type: "УВП" },
  { brand: "CONSAR", model: "2000", power: "2,0 кВт", upper: "Размер уточняется", lower: "Подбор по модели", type: "УВП" },

  { brand: "Triod", model: "VC-15", power: "1,5 кВт", upper: "Размер уточняется", lower: "Подбор по модели", type: "Стружкоотсос" },

  { brand: "Кратон", model: "DC-01", power: "Уточняйте", upper: "Размер уточняется", lower: "Подбор по модели", type: "Стружкоотсос" },
  { brand: "Кратон", model: "DC-02", power: "Уточняйте", upper: "Размер уточняется", lower: "Подбор по модели", type: "Стружкоотсос" },
  { brand: "Кратон", model: "DC-03", power: "Уточняйте", upper: "Размер уточняется", lower: "Подбор по модели", type: "Стружкоотсос" },

  { brand: "ПП", model: "2000", power: "2,0 кВт", upper: "Размер уточняется", lower: "Подбор по модели", type: "Пылеулавливающая установка" },

  { brand: "ROCKSTAR", model: "STS1010PE", power: "Уточняйте", upper: "Размер уточняется", lower: "Подбор по модели", type: "Стружкоотсос" },
  { brand: "ROCKSTAR", model: "STS1011PE", power: "Уточняйте", upper: "Размер уточняется", lower: "Подбор по модели", type: "Стружкоотсос" },
  { brand: "ROCKSTAR", model: "STS53-116PE", power: "Уточняйте", upper: "Размер уточняется", lower: "Подбор по модели", type: "Стружкоотсос" },

  { brand: "Фильтр УВП", model: "АЛВГ-Ф11.001.00.00 (УВП-1200)", power: "1,2 кВт", upper: "Размер уточняется", lower: "Подбор по модели", type: "Фильтр" },
  { brand: "Фильтр УВП", model: "АЛВГ-Ф11.001.00.00-04 (УВП-2000/3000/5000/7000)", power: "2,0–7,0 кВт", upper: "Размер уточняется", lower: "Подбор по модели", type: "Фильтр" },

  { brand: "Felder", model: "AF 14", power: "Уточняйте", upper: "Размер уточняется", lower: "Подбор по модели", type: "Стружкоотсос" },
  { brand: "Felder", model: "AF 16", power: "Уточняйте", upper: "Размер уточняется", lower: "Подбор по модели", type: "Стружкоотсос" },

  { brand: "Sturm", model: "DC1010", power: "1,0 кВт", upper: "Размер уточняется", lower: "Подбор по модели", type: "Бытовой" },
  { brand: "Sturm", model: "DC1215", power: "1,5 кВт", upper: "Размер уточняется", lower: "Подбор по модели", type: "Полупрофессиональный" },

  { brand: "Einhell", model: "TE-VE 550/1", power: "0,55 кВт", upper: "Размер уточняется", lower: "Подбор по модели", type: "Бытовой" },
  { brand: "Einhell", model: "TE-VE 750", power: "0,75 кВт", upper: "Размер уточняется", lower: "Подбор по модели", type: "Бытовой" },

  { brand: "Metabo", model: "SPA 1200", power: "1,2 кВт", upper: "Размер уточняется", lower: "Подбор по модели", type: "Стружкоотсос" },
  { brand: "Metabo", model: "SPA 1700", power: "1,7 кВт", upper: "Размер уточняется", lower: "Подбор по модели", type: "Стружкоотсос" },
];

const brands = [
  "Все",
  "JET",
  "PROMA",
  "Корвет",
  "Holzmann",
  "Record Power",
  "Powermatic",
  "Makita",
  "Bosch",
  "КОНСАР",
  "CONSAR",
  "Triod",
  "Кратон",
  "Энкор Корвет",
  "ПП",
  "ROCKSTAR",
  "Фильтр УВП",
  "Felder",
  "Sturm",
  "Einhell",
  "Metabo",
];

const catalogCards: CatalogCard[] = [
  {
    title: "Мешки для аспирации",
    description: "Верхние и нижние фильтровальные мешки для систем пылеудаления",
    href: "/meshki-dlya-aspiracii",
    icon: "bag",
  },
  {
    title: "Фильтрационные рукава",
    description: "Промышленные рукава для рукавных фильтров и УВП",
    href: "/filtracionnye-rukava",
    icon: "funnel",
  },
  {
    title: "Мешки для стружкоотсоса",
    description: "Мешки для деревообрабатывающих станков",
    href: "/meshki-dlya-struzhkootsosa",
    icon: "tube",
  },
  {
    title: "Мешки для циклонов и УВП",
    description: "Для пылеулавливающих установок и циклонных систем",
    href: "/meshki-dlya-ciklonov-i-uvp",
    icon: "air",
  },
  {
    title: "Быстросъёмные хомуты",
    description: "Металлические хомуты для крепления фильтровальных мешков",
    href: "/bystrosemnye-homyty",
    icon: "clamp",
  },
  {
    title: "Верхние мешки для аспирации",
    description: "Фильтровальные мешки для очистки воздуха",
    href: "/verhnie-meshki",
    icon: "circle-up",
  },
  {
    title: "Нижние мешки для аспирации",
    description: "Сборные мешки для стружки и опилок",
    href: "/nizhnie-meshki",
    icon: "circle-down",
  },
  {
    title: "Тканевые мешки для аспирации",
    description: "Универсальные тканевые фильтровальные мешки",
    href: "/tkanevye-meshki",
    icon: "fabric",
  },
  {
    title: "Мешки для опилок",
    description: "Для сбора древесных опилок и мелкой стружки",
    href: "/meshki-dlya-opilok",
    icon: "leaf",
  },
  {
    title: "Мешки для циклона",
    description: "Усиленные мешки для циклонных установок",
    href: "/meshki-dlya-ciklonov-i-uvp",
    icon: "cycle",
  },
  {
    title: "Нестандартные мешки",
    description: "Изготовление по чертежам и индивидуальным размерам",
    href: "/nestandartnye-meshki-dlya-filtracii",
    icon: "x",
  },
  {
    title: "Пошив фильтр-мешков",
    description: "Услуги пошива фильтровальных мешков под заказ",
    href: "/nestandartnye-meshki-dlya-filtracii",
    icon: "scissors",
  },
];

const articleCards: ArticleCard[] = [
  {
    title: "Как выбрать мешок для аспирации",
    description:
      "Полное руководство по подбору фильтровального мешка: материалы, размеры, типы крепления",
    href: "/blog/kak-vybrat-meshok-aspiracii",
  },
  {
    title: "Как работает система аспирации",
    description:
      "Принцип работы систем пылеудаления и роль фильтровальных мешков в очистке воздуха",
    href: "/blog/kak-rabotaet-aspiraciya",
  },
  {
    title: "Когда менять фильтровальный мешок",
    description:
      "Признаки износа, средние сроки службы и советы по продлению ресурса фильтра",
    href: "/blog/kogda-menyat-filtr-meshok",
  },
  {
    title: "Типы фильтровальных мешков",
    description:
      "Полный обзор видов фильтров для аспирации: верхние, нижние, рукавные, для циклонов",
    href: "/blog/tipy-filtruyushchikh-meshkov",
  },
];

function getBrandBadgeClass(brand: string) {
  if (brand === "JET") return "bg-[#fde2e2] text-[#e24b4b]";
  if (brand === "PROMA") return "bg-[#fff1d8] text-[#d07a00]";
  if (brand === "Корвет" || brand === "Энкор Корвет") return "bg-[#dcf5df] text-[#24914d]";
  if (brand === "Holzmann") return "bg-[#dff5fb] text-[#1f88a7]";
  if (brand === "Record Power") return "bg-[#ece3ff] text-[#7a3ff2]";
  if (brand === "Powermatic") return "bg-[#ffe7d9] text-[#ea6d1b]";
  if (brand === "Makita") return "bg-[#dbf5ee] text-[#0f8f78]";
  if (brand === "Bosch") return "bg-[#ffe1e6] text-[#da3d66]";
  if (brand === "КОНСАР" || brand === "CONSAR") return "bg-[#e8eefc] text-[#3d63dd]";
  if (brand === "Triod") return "bg-[#efe9ff] text-[#6f48d9]";
  if (brand === "Кратон") return "bg-[#ffe8d7] text-[#cf6b00]";
  if (brand === "ПП") return "bg-[#e8f1de] text-[#598c2f]";
  if (brand === "ROCKSTAR") return "bg-[#fce7f3] text-[#c02675]";
  if (brand === "Фильтр УВП") return "bg-[#e6f7f2] text-[#0f766e]";
  if (brand === "Felder") return "bg-[#fef3c7] text-[#b45309]";
  if (brand === "Sturm") return "bg-[#dcfce7] text-[#15803d]";
  if (brand === "Einhell") return "bg-[#fee2e2] text-[#b91c1c]";
  if (brand === "Metabo") return "bg-[#f3e8ff] text-[#7e22ce]";
  return "bg-slate-100 text-slate-700";
}

function CatalogMiniIcon({ icon }: { icon: string }) {
  const common = "h-[15px] w-[15px] stroke-[1.9]";

  switch (icon) {
    case "bag":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <path d="M8 9V7a4 4 0 1 1 8 0v2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 9h12v9a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "funnel":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <path d="M4 5h16l-6 7v5l-4 2v-7L4 5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "tube":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <path d="M8 4h8v5l-2 2v7a2 2 0 0 1-4 0v-7L8 9V4Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "air":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <path d="M5 8h14" stroke="currentColor" strokeLinecap="round" />
          <path d="M7 12h10" stroke="currentColor" strokeLinecap="round" />
          <path d="M9 16h6" stroke="currentColor" strokeLinecap="round" />
        </svg>
      );
    case "clamp":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <path d="M8 8a6 6 0 1 1 0 8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4 10h8" stroke="currentColor" strokeLinecap="round" />
          <path d="M4 14h8" stroke="currentColor" strokeLinecap="round" />
        </svg>
      );
    case "circle-up":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <circle cx="12" cy="12" r="8" stroke="currentColor" />
          <path d="m12 15 3-3-3-3-3 3 3 3Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "circle-down":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <circle cx="12" cy="12" r="8" stroke="currentColor" />
          <path d="m12 9-3 3 3 3 3-3-3-3Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "fabric":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <path d="M6 7c2-1 4-1 6 0s4 1 6 0v10c-2 1-4 1-6 0s-4-1-6 0V7Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "leaf":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <path d="M18 6c-6 0-10 4-10 10 6 0 10-4 10-10Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 16c1-3 3-5 6-6" stroke="currentColor" strokeLinecap="round" />
        </svg>
      );
    case "cycle":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <path d="M8 7h4l-2 3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 17H8l2-3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7 10 5 12l2 2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
          <path d="m17 14 2-2-2-2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "x":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <path d="m7 7 10 10M17 7 7 17" stroke="currentColor" strokeLinecap="round" />
        </svg>
      );
    case "scissors":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <circle cx="6" cy="7" r="2.2" stroke="currentColor" />
          <circle cx="6" cy="17" r="2.2" stroke="currentColor" />
          <path d="M8 8.5 18 4M8 15.5 18 20M8 9.5l6 5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <circle cx="12" cy="12" r="7" stroke="currentColor" />
        </svg>
      );
  }
}

function ArticleMiniIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-[15px] w-[15px] stroke-[1.9]">
      <rect x="6" y="4" width="12" height="16" rx="2" stroke="currentColor" />
      <path d="M9 9h6M9 13h6M9 17h4" stroke="currentColor" strokeLinecap="round" />
    </svg>
  );
}

export default function VerhnieMeshkiPage() {
  const [activeBrand, setActiveBrand] = useState("Все");
  const [query, setQuery] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [equipment, setEquipment] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqItems = [
    {
      question: "Чем верхний фильтровальный мешок отличается от нижнего?",
      answer:
        "Верхний мешок для стружкоотсоса стоит в верхней части установки и работает как фильтр для аспирации: задерживает пыль и мелкие частицы в воздушном потоке. Нижний мешок чаще выполняет роль накопителя для крупной стружки и опилок. В паре они дают нормальное пылеулавливание на станке.",
    },
    {
      question: "Как часто обслуживать верхний мешок-фильтр?",
      answer:
        "Зависит от нагрузки: при интенсивной работе проверяйте засорение и натяжение мешка чаще. Если падает тяга или слышен «свист» на выходе — пора прочистить или заменить фильтровальный мешок для аспирации.",
    },
    {
      question: "Можно ли стирать тканевый верхний мешок?",
      answer:
        "Часто да: полиэстеровые фильтровальные мешки можно стирать в тёплой воде с мягким средством, затем тщательно высушить. Не используйте агрессивную химию — она разрушает волокно и снижает эффективность фильтра для стружкоотсоса.",
    },
    {
      question: "Какой срок службы верхнего мешка для аспирации?",
      answer:
        "При аккуратной эксплуатации и своевременной очистке верхний мешок обычно служит около 2–3 лет. На срок влияют пыль древесины, влажность и режим работы оборудования.",
    },
    {
      question: "Можно ли заказать нестандартный размер верхнего мешка?",
      answer:
        "Да: шьём фильтровальные мешки по вашим размерам — пришлите диаметр горловины, высоту и тип крепления или фото установки. Так можно подобрать мешок под редкую модель или замену без чертежа завода.",
    },
  ];

  const filteredRows = useMemo(() => {
    const q = query.trim().toLowerCase();

    return guideRows.filter((row) => {
      const brandMatch = activeBrand === "Все" || row.brand === activeBrand;
      const queryMatch =
        q.length === 0 ||
        row.brand.toLowerCase().includes(q) ||
        row.model.toLowerCase().includes(q) ||
        row.upper.toLowerCase().includes(q) ||
        row.type.toLowerCase().includes(q);

      return brandMatch && queryMatch;
    });
  }, [activeBrand, query]);

  const mailHref = useMemo(() => {
    const subject = "Заявка на верхний мешок для аспирации";
    const body = [
      `Имя: ${name || "-"}`,
      `Телефон: ${phone || "-"}`,
      `Модель оборудования / размеры мешка: ${equipment || "-"}`,
    ].join("\n");

    return `mailto:filterflow@mail.ru?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [name, phone, equipment]);

  return (
    <>
      <Navigation />

      <section className="bg-[#f5f3ee] pt-[118px] pb-16">
        <div className="mx-auto max-w-7xl px-6">
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
            <span className="font-medium text-slate-900">Верхние мешки для аспирации</span>
          </div>

          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h1 className="mb-5 text-[34px] font-bold leading-[1.08] text-[#0f172a] md:text-[42px]">
                Верхние фильтровальные мешки для стружкоотсоса и аспирации
              </h1>

              <p className="mb-7 max-w-[640px] text-[17px] leading-8 text-[#475569]">
                Тканевые фильтровальные мешки для аспирационных установок: верхний мешок-фильтр
                очищает воздух от пыли и мелких опилок в потоке, снижая выброс частиц в цеху. Подойдут
                для систем аспирации на деревообрабатывающем оборудовании и в комплекте с УВП — размеры
                подбираем по модели или замеру.
              </p>

              <div className="flex flex-wrap gap-3.5">
                <a
                  href="https://wa.me/79514992576"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-5 py-3 text-[15px] font-medium text-white transition hover:bg-orange-600"
                >
                  Заказать расчёт
                </a>

                <a
                  href="#features"
                  className="inline-flex items-center justify-center rounded-xl border border-orange-500 px-5 py-3 text-[15px] font-medium text-orange-500 transition hover:bg-orange-500 hover:text-white"
                >
                  Особенности
                </a>
              </div>
            </div>

            <div className="flex h-[360px] w-full items-center justify-center overflow-hidden rounded-2xl bg-[#f3f4f6]">
              <img
                src="/images/products/verhniy-meshok.webp"
                alt="Верхний фильтровальный мешок для стружкоотсоса и аспирации"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="bg-[#f8fafc] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-[30px] font-bold leading-tight text-[#0f172a] md:text-[44px]">
              Особенности верхних фильтровальных мешков
            </h2>
            <p className="mx-auto max-w-2xl text-[16px] leading-7 text-[#475569] md:text-[17px]">
              Фильтры для стружкоотсоса в верхнем узле — для эффективного пылеулавливания
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            <div className="rounded-[22px] border border-orange-300 bg-white p-6 transition hover:shadow-lg">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-[22px] text-orange-500">≡</div>
              <h3 className="mb-3 text-[18px] font-semibold leading-snug text-[#0f172a]">
                Фильтрация воздуха на выходе
              </h3>
              <p className="text-[15px] leading-8 text-[#475569]">
                Верхний мешок для аспирации задерживает пыль и мелкие частицы в воздушном потоке,
                помогая соблюдать чистоту воздуха в мастерской и снижать нагрузку на узел пылеудаления.
              </p>
            </div>

            <div className="rounded-[22px] border border-orange-300 bg-white p-6 transition hover:shadow-lg">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-[22px] text-orange-500">🛡</div>
              <h3 className="mb-3 text-[18px] font-semibold leading-snug text-[#0f172a]">
                Тканевые мешки для стружкоотсоса
              </h3>
              <p className="text-[15px] leading-8 text-[#475569]">
                Износостойкий полиэстер выдерживает интенсивную работу фильтра для стружкоотсоса и
                регулярную очистку.
              </p>
            </div>

            <div className="rounded-[22px] border border-orange-300 bg-white p-6 transition hover:shadow-lg">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-[22px] text-orange-500">🔥</div>
              <h3 className="mb-3 text-[18px] font-semibold leading-snug text-[#0f172a]">Термостойкость</h3>
              <p className="text-[15px] leading-8 text-[#475569]">
                Выдерживает температуру до 150°C без потери фильтрующих свойств и
                прочности.
              </p>
            </div>

            <div className="rounded-[22px] border border-orange-300 bg-white p-6 transition hover:shadow-lg">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-[22px] text-orange-500">🛠</div>
              <h3 className="mb-3 text-[18px] font-semibold leading-snug text-[#0f172a]">Простая установка</h3>
              <p className="text-[15px] leading-8 text-[#475569]">
                Быстрое крепление на оборудование с помощью стандартных хомутов или
                стяжек.
              </p>
            </div>

            <div className="rounded-[22px] border border-orange-300 bg-white p-6 transition hover:shadow-lg">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-[22px] text-orange-500">📏</div>
              <h3 className="mb-3 text-[18px] font-semibold leading-snug text-[#0f172a]">Индивидуальные размеры</h3>
              <p className="text-[15px] leading-8 text-[#475569]">
                Изготавливаем мешки под конкретные параметры вашего оборудования.
              </p>
            </div>

            <div className="rounded-[22px] border border-orange-300 bg-white p-6 transition hover:shadow-lg">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-[22px] text-orange-500">♻</div>
              <h3 className="mb-3 text-[18px] font-semibold leading-snug text-[#0f172a]">Легкая очистка</h3>
              <p className="text-[15px] leading-8 text-[#475569]">
                Простое удаление накопленной стружки и пыли для повторного использования.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f3ee] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-11 text-center">
            <h2 className="mb-3 text-[30px] font-bold leading-tight text-[#0f172a] md:text-[44px]">
              Технические характеристики
            </h2>
            <p className="text-[16px] leading-7 text-[#475569] md:text-[17px]">
              Ориентиры для верхнего фильтра аспирации и мешка-фильтра для стружкоотсоса
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="rounded-[24px] border border-[#ece7de] bg-white p-7 shadow-sm">
              <h3 className="mb-7 text-[20px] font-bold text-[#0f172a] md:text-[22px]">
                Материал и конструкция
              </h3>

              <div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-200 py-4">
                  <span className="text-[16px] text-[#475569]">Материал</span>
                  <span className="text-right text-[16px] font-semibold text-[#0f172a]">Полиэстер</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-200 py-4">
                  <span className="text-[16px] text-[#475569]">Плотность ткани</span>
                  <span className="text-right text-[16px] font-semibold text-[#0f172a]">500-600 г/м²</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-200 py-4">
                  <span className="text-[16px] text-[#475569]">Тип крепления</span>
                  <span className="text-right text-[16px] font-semibold text-[#0f172a]">Хомут/стяжка</span>
                </div>
                <div className="flex items-center justify-between gap-6 py-4">
                  <span className="text-[16px] text-[#475569]">Форма</span>
                  <span className="text-right text-[16px] font-semibold text-[#0f172a]">Цилиндрическая</span>
                </div>
              </div>
            </div>

            <div className="rounded-[24px] border border-[#ece7de] bg-white p-7 shadow-sm">
              <h3 className="mb-7 text-[20px] font-bold text-[#0f172a] md:text-[22px]">
                Эксплуатационные параметры
              </h3>

              <div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-200 py-4">
                  <span className="text-[16px] text-[#475569]">Температура</span>
                  <span className="text-right text-[16px] font-semibold text-[#0f172a]">До 150°C</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-200 py-4">
                  <span className="text-[16px] text-[#475569]">Эффективность</span>
                  <span className="text-right text-[16px] font-semibold text-[#0f172a]">95-98%</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-200 py-4">
                  <span className="text-[16px] text-[#475569]">Срок службы</span>
                  <span className="text-right text-[16px] font-semibold text-[#0f172a]">2-3 года</span>
                </div>
                <div className="flex items-center justify-between gap-6 py-4">
                  <span className="text-[16px] text-[#475569]">Размер частиц</span>
                  <span className="text-right text-[16px] font-semibold text-[#0f172a]">&gt; 50 мкм</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f3ee] pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="overflow-hidden rounded-[24px] border border-[#ece7de] bg-white shadow-sm">
            <div className="px-7 pb-5 pt-7">
              <h2 className="text-[20px] font-bold text-[#0f172a] md:text-[22px]">
                Стандартные размеры верхних мешков
              </h2>
            </div>

            <div className="px-7 pb-7">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[760px] border-separate border-spacing-0">
                  <caption className="sr-only">
                    Типовые габариты цилиндрического верхнего фильтровального мешка для аспирации
                  </caption>
                  <thead>
                    <tr className="bg-[#f56600] text-white">
                      <th className="px-5 py-4 text-left text-[16px] font-semibold">Диаметр (мм)</th>
                      <th className="px-5 py-4 text-left text-[16px] font-semibold">Длина (мм)</th>
                      <th className="px-5 py-4 text-left text-[16px] font-semibold">Объём (л)</th>
                      <th className="px-5 py-4 text-left text-[16px] font-semibold">Применение</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-200">
                      <td className="px-5 py-4 text-[16px] text-[#334155]">300</td>
                      <td className="px-5 py-4 text-[16px] text-[#334155]">600</td>
                      <td className="px-5 py-4 text-[16px] text-[#334155]">42</td>
                      <td className="px-5 py-4 text-[16px] text-[#334155]">Бытовые станки</td>
                    </tr>
                    <tr className="border-b border-slate-200">
                      <td className="px-5 py-4 text-[16px] text-[#334155]">400</td>
                      <td className="px-5 py-4 text-[16px] text-[#334155]">800</td>
                      <td className="px-5 py-4 text-[16px] text-[#334155]">100</td>
                      <td className="px-5 py-4 text-[16px] text-[#334155]">Полупромышленные</td>
                    </tr>
                    <tr className="border-b border-slate-200">
                      <td className="px-5 py-4 text-[16px] text-[#334155]">500</td>
                      <td className="px-5 py-4 text-[16px] text-[#334155]">1000</td>
                      <td className="px-5 py-4 text-[16px] text-[#334155]">196</td>
                      <td className="px-5 py-4 text-[16px] text-[#334155]">Промышленные цеха</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4 text-[16px] text-[#334155]">600</td>
                      <td className="px-5 py-4 text-[16px] text-[#334155]">1200</td>
                      <td className="px-5 py-4 text-[16px] text-[#334155]">339</td>
                      <td className="px-5 py-4 text-[16px] text-[#334155]">Крупные производства</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f3ee] pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-9 text-center">
            <div className="mb-4 inline-flex rounded-full bg-[#f8e2c6] px-5 py-2 text-[13px] font-semibold uppercase tracking-wide text-[#d86512]">
              Справочник размеров
            </div>

            <h2 className="mx-auto mb-4 max-w-5xl text-[30px] font-bold leading-[1.15] text-[#0f172a] md:text-[44px]">
              Размеры верхнего фильтровального мешка для стружкоотсосов и аспирации
            </h2>

            <p className="mx-auto max-w-4xl text-[16px] leading-8 text-[#475569] md:text-[17px]">
              В колонке «Верхний мешок» — ориентиры по размеру фильтра для JET (в справочнике — в т.ч.
              DC-1100VX-CK и DC-1200VX), PROMA OP-1500 и OP-2200, «Энкор Корвет» 64–67, КОНСАР УВП-1200 /
              УВП-2000, CONSAR 2000, Makita, Bosch, Powermatic, ROCKSTAR, Triod, Holzmann, Record Power,
              Felder, Sturm, Einhell, Metabo, Кратон и др. Нет строки с вашей моделью — пришлите фото
              или напишите, подберём по замеру.
            </p>
          </div>

          <div className="mb-5 flex flex-wrap items-center gap-3">
            {brands.map((brand) => (
              <button
                key={brand}
                type="button"
                onClick={() => setActiveBrand(brand)}
                className={`rounded-full px-4 py-2.5 text-[14px] font-medium transition ${
                  activeBrand === brand
                    ? "bg-[#ff6b2c] text-white"
                    : "bg-[#eef1f6] text-[#475569] hover:bg-[#e5e7eb]"
                }`}
              >
                {brand}
              </button>
            ))}

            <div className="ml-auto w-full md:w-[260px]">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Поиск: JET, PROMA, Корвет, УВП, Makita…"
                className="h-[48px] w-full rounded-full border border-slate-200 bg-white px-5 text-[15px] text-[#334155] outline-none transition placeholder:text-slate-400 focus:border-[#ff6b2c]"
              />
            </div>
          </div>

          <div className="overflow-hidden rounded-[22px] border border-slate-200 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[1120px] border-collapse">
                <caption className="sr-only">
                  Справочник: верхний фильтровальный мешок для аспирации по брендам JET, PROMA,
                  Энкор Корвет, КОНСАР, CONSAR, Makita, Bosch, Powermatic, ROCKSTAR, Triod, Holzmann,
                  Record Power, Felder, Sturm, Einhell, Metabo, Кратон; мешок-фильтр для УВП и установок
                  пылеулавливания
                </caption>
                <thead>
                  <tr className="bg-[#16233b] text-white">
                    <th className="px-4 py-4 text-left text-[15px] font-semibold">Бренд</th>
                    <th className="px-4 py-4 text-left text-[15px] font-semibold">Модель</th>
                    <th className="px-4 py-4 text-left text-[15px] font-semibold">Мощность</th>
                    <th className="bg-[#ff6b2c] px-4 py-4 text-left text-[15px] font-semibold">Верхний мешок</th>
                    <th className="px-4 py-4 text-left text-[15px] font-semibold">Нижний мешок</th>
                    <th className="px-4 py-4 text-left text-[15px] font-semibold">Тип</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredRows.map((row, index) => (
                    <tr
                      key={`${row.brand}-${row.model}-${index}`}
                      className="border-b border-slate-200 last:border-b-0 hover:bg-slate-50"
                    >
                      <td className="px-4 py-4 align-middle">
                        <span
                          className={`inline-flex rounded-full px-3 py-1 text-[13px] font-semibold ${getBrandBadgeClass(
                            row.brand
                          )}`}
                        >
                          {row.brand}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-[15px] font-medium text-[#0f172a]">{row.model}</td>
                      <td className="px-4 py-4 text-[15px] text-[#475569]">{row.power}</td>
                      <td className="px-4 py-4 text-[15px] font-semibold text-[#0f172a]">
                        <span className="mr-2 text-[#ff6b2c]">●</span>
                        {row.upper}
                      </td>
                      <td className="px-4 py-4 text-[15px] text-[#475569]">{row.lower}</td>
                      <td className="px-4 py-4 text-[15px] text-[#475569]">{row.type}</td>
                    </tr>
                  ))}

                  {filteredRows.length === 0 && (
                    <tr>
                      <td colSpan={6} className="px-6 py-10 text-center text-[16px] text-[#475569]">
                        По вашему запросу ничего не найдено. Напишите нам в WhatsApp — подберём размер по модели или фото.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          <p className="mx-auto mt-6 max-w-4xl text-[15px] leading-7 text-[#475569] md:text-[16px]">
            Нижний слой в той же установке обычно собирает крупную стружку; для комплекта см.{" "}
            <Link
              href="/nizhnie-meshki"
              className="font-semibold text-[#ff6b2c] underline-offset-2 hover:underline"
            >
              нижние мешки для стружкоотсоса
            </Link>
            .
          </p>

          <div className="mt-7 grid grid-cols-1 gap-5 lg:grid-cols-2">
            <div className="rounded-[18px] bg-[#f7efe4] px-5 py-4 text-[#475569]">
              <p className="text-[15px] leading-7">
                <span className="mr-2 text-[#ff6b2c]">ⓘ</span>
                Размеры в таблице — <strong>типовые</strong>. Из-за производственных
                различий у конкретного экземпляра оборудования размеры могут отличаться
                на ±5–10 мм. Перед заказом рекомендуем замерить старый мешок или патрубок.
              </p>
            </div>

            <div className="rounded-[18px] bg-[#e8f5ec] px-5 py-4 text-[#475569]">
              <p className="text-[15px] leading-7">
                <span className="mr-2 text-[#14a44d]">?</span>
                Не нашли свою модель?{" "}
                <a
                  href="https://wa.me/79514992576"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#ff6b2c] hover:underline"
                >
                  Напишите нам в WhatsApp
                </a>{" "}
                — подберём размер по модели или фото за несколько минут.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f3ee] pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-11 text-center">
            <h2 className="mb-3 text-[30px] font-bold leading-tight text-[#0f172a] md:text-[44px]">
              Где нужны верхние мешки для пылеулавливания
            </h2>

            <p className="mx-auto max-w-4xl text-[16px] leading-7 text-[#475569] md:text-[17px]">
              Фильтровальные мешки для аспирации опилок и пыли — на станках и линиях с подключением к
              стружкоотсосу или общей аспирации
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-[22px] border border-slate-200 bg-white px-7 py-8 text-center shadow-sm">
              <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#f8e2c6] text-[24px] text-[#f56600]">⊤</div>
              <h3 className="mb-4 text-[18px] font-bold leading-[1.25] text-[#0f172a]">
                Деревообрабатывающие станки
              </h3>
              <p className="text-[15px] leading-8 text-[#475569]">
                Фрезерные, токарные и шлифовальные станки по дереву
              </p>
            </div>

            <div className="rounded-[22px] border border-slate-200 bg-white px-7 py-8 text-center shadow-sm">
              <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#f8e2c6] text-[24px] text-[#f56600]">⚒</div>
              <h3 className="mb-4 text-[18px] font-bold leading-[1.25] text-[#0f172a]">
                Столярные мастерские
              </h3>
              <p className="text-[15px] leading-8 text-[#475569]">
                Циркулярные пилы, рейсмусы, фуганки
              </p>
            </div>

            <div className="rounded-[22px] border border-slate-200 bg-white px-7 py-8 text-center shadow-sm">
              <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#f8e2c6] text-[24px] text-[#f56600]">⌂</div>
              <h3 className="mb-4 text-[18px] font-bold leading-[1.25] text-[#0f172a]">
                Мебельные производства
              </h3>
              <p className="text-[15px] leading-8 text-[#475569]">
                Линии раскроя, кромкования и сверления
              </p>
            </div>

            <div className="rounded-[22px] border border-slate-200 bg-white px-7 py-8 text-center shadow-sm">
              <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#f8e2c6] text-[24px] text-[#f56600]">⚙</div>
              <h3 className="mb-4 text-[18px] font-bold leading-[1.25] text-[#0f172a]">
                ЧПУ станки
              </h3>
              <p className="text-[15px] leading-8 text-[#475569]">
                Фрезерные и гравировальные станки с ЧПУ
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="zakaz-verhnih-meshkov" className="bg-[#ff6428] py-18 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-9 text-center">
            <h2 className="mb-3 text-[24px] font-bold leading-[1.15] text-white md:text-[34px]">
              Заказать верхний фильтровальный мешок для стружкоотсоса
            </h2>

            <p className="mx-auto max-w-3xl text-[14px] leading-7 text-white/90 md:text-[15px]">
              Оставьте заявку — подберём размер, рассчитаем стоимость и ответим в течение 30 минут
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
                    Модель оборудования / размеры мешка
                  </label>
                  <textarea
                    value={equipment}
                    onChange={(e) => setEquipment(e.target.value)}
                    placeholder="Например: JET DC-1200VX, диаметр горловины по мешку 380 мм"
                    rows={4}
                    className="w-full rounded-[12px] border border-slate-200 bg-white px-4 py-4 text-[15px] leading-7 text-[#0f172a] outline-none transition placeholder:text-slate-400 focus:border-[#ff6428]"
                  />
                </div>

                <a
                  href={mailHref}
                  className="flex h-[52px] w-full items-center justify-center rounded-[12px] bg-[#ff6b2c] text-[17px] font-semibold text-white transition hover:bg-[#f25b1a]"
                >
                  Отправить заявку
                </a>

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

              <a
                href="mailto:filterflow@mail.ru"
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
              </a>

              <div className="rounded-[20px] border border-white/20 bg-[rgba(255,255,255,0.16)] p-5 text-white">
                <h3 className="mb-3 flex items-center gap-3 text-[18px] font-semibold">
                  <span className="text-[17px]">ⓘ</span>
                  Что указать в заявке
                </h3>

                <ul className="space-y-2.5 text-[14px] leading-7 text-white/95">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-[12px]">◎</span>
                    <span>Модель стружкоотсоса или размеры</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-[12px]">◎</span>
                    <span>Желаемый материал (полиэстер / полипропилен)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-[12px]">◎</span>
                    <span>Нужное количество штук</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-10">
          <div className="text-center">
            <h2 className="text-[30px] font-bold leading-tight text-[#0f2341] md:text-[44px]">
              Похожие продукты
            </h2>

            <p className="mt-3 text-[16px] leading-7 text-[#5b6b82] md:text-[17px]">
              Другие решения для систем аспирации
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
            <Link
              href="/nizhnie-meshki"
              className="group overflow-hidden rounded-[22px] border border-[#d9dee7] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#f4a261] hover:bg-gradient-to-br hover:from-[#fff8f2] hover:via-[#ffffff] hover:to-[#f6fbfa] hover:shadow-[0_18px_50px_rgba(15,35,65,0.08)]"
            >
              <div className="flex h-[240px] items-center justify-center overflow-hidden bg-[#f7f8fa] px-8 py-7">
                <img
                  src="/images/catalog/nizhnie-meshki.webp"
                  alt="Нижний мешок для аспирации"
                  className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>

              <div className="p-7">
                <h3 className="text-[18px] font-bold leading-[1.3] text-[#0f2341] transition-colors duration-300 group-hover:text-[#f97316]">
                  Нижний мешок для аспирации
                </h3>

                <p className="mt-3 text-[15px] leading-7 text-[#5b6b82]">
                  Накопитель для крупной стружки и опилок под стружкоотсосом
                </p>

                <div className="mt-6 inline-flex items-center gap-3 text-[15px] font-medium text-[#0aa79d] transition-colors duration-300 group-hover:text-[#f97316]">
                  <span>Подробнее</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </Link>

            <Link
              href="/tkanevye-meshki"
              className="group overflow-hidden rounded-[22px] border border-[#d9dee7] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#f4a261] hover:bg-gradient-to-br hover:from-[#fff8f2] hover:via-[#ffffff] hover:to-[#f6fbfa] hover:shadow-[0_18px_50px_rgba(15,35,65,0.08)]"
            >
              <div className="flex h-[240px] items-center justify-center overflow-hidden bg-[#f7f8fa] px-8 py-7">
                <img
                  src="/images/catalog/tkanevye-meshki.webp"
                  alt="Тканевые мешки для аспирации"
                  className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>

              <div className="p-7">
                <h3 className="text-[18px] font-bold leading-[1.3] text-[#0f2341] transition-colors duration-300 group-hover:text-[#f97316]">
                  Тканевые мешки для аспирации
                </h3>

                <p className="mt-3 text-[15px] leading-7 text-[#5b6b82]">
                  Профессиональные тканевые фильтры
                </p>

                <div className="mt-6 inline-flex items-center gap-3 text-[15px] font-medium text-[#0aa79d] transition-colors duration-300 group-hover:text-[#f97316]">
                  <span>Подробнее</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </Link>

            <Link
              href="/meshki-dlya-struzhkootsosa"
              className="group overflow-hidden rounded-[22px] border border-[#d9dee7] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#f4a261] hover:bg-gradient-to-br hover:from-[#fff8f2] hover:via-[#ffffff] hover:to-[#f6fbfa] hover:shadow-[0_18px_50px_rgba(15,35,65,0.08)]"
            >
              <div className="flex h-[240px] items-center justify-center overflow-hidden bg-[#f7f8fa] px-8 py-7">
                <img
                  src="/images/catalog/meshki-struzhkootsosa.webp"
                  alt="Мешки для стружкоотсоса"
                  className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>

              <div className="p-7">
                <h3 className="text-[18px] font-bold leading-[1.3] text-[#0f2341] transition-colors duration-300 group-hover:text-[#f97316]">
                  Мешки для стружкоотсоса
                </h3>

                <p className="mt-3 text-[15px] leading-7 text-[#5b6b82]">
                  Для деревообрабатывающего оборудования
                </p>

                <div className="mt-6 inline-flex items-center gap-3 text-[15px] font-medium text-[#0aa79d] transition-colors duration-300 group-hover:text-[#f97316]">
                  <span>Подробнее</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#f8fafc] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-[28px] font-bold leading-tight text-[#0f172a] md:text-[42px]">
              Вопросы о верхних фильтровальных мешках для аспирации
            </h2>

            <p className="mx-auto max-w-3xl text-[15px] leading-7 text-[#475569] md:text-[16px]">
              Подбор, уход и отличие от нижнего накопительного мешка
            </p>
          </div>

          <div className="mx-auto max-w-[880px] space-y-4">
            {faqItems.map((item, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={item.question}
                  className={`overflow-hidden rounded-[16px] border transition-all duration-300 ${
                    isOpen
                      ? "border-[#d9cfc0] bg-[#f4ede3]"
                      : "border-[#e5e7eb] bg-white hover:bg-[#f4ede3]"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-5 px-7 py-5 text-left"
                  >
                    <span className="text-[17px] font-bold leading-[1.35] text-[#0f172a] md:text-[18px]">
                      {item.question}
                    </span>

                    <span
                      className={`shrink-0 text-[20px] font-light text-[#f97316] transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      ˅
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-[#d9cfc0] px-7 py-5">
                        <p className="max-w-[760px] text-[15px] leading-8 text-[#475569]">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-10">
          <div className="space-y-14">
            <div>
              <h2 className="max-w-[980px] text-[28px] font-bold leading-[1.15] text-[#0f2341] md:text-[42px]">
                Верхние мешки для аспирации и фильтровальные рукава — производство FilterFlow
              </h2>

              <div className="mt-7 max-w-[1180px] space-y-5 text-[15px] leading-8 text-[#42526b] md:text-[16px]">
                <p>
                  На этой странице — прежде всего верхний фильтр аспирации: тканевые фильтровальные
                  мешки для стружкоотсосов и установок пылеулавливания. В общем каталоге у нас также
                  рукава и мешки для циклонов и линий с высокой запылённостью — подбираем материал и
                  размер под вашу задачу.
                </p>

                <p>
                  Изготавливаем мешки для систем аспирации разного диаметра и высоты, с нужным
                  креплением под патрубок. Основные материалы:
                  <strong className="font-semibold text-[#0f2341]">
                    {" "}
                    полиэстер, полипропилен, иглопробивный фильтровальный материал
                  </strong>
                  — с упором на износостойкость при работе с опилками и древесной пылью.
                </p>

                <div className="pt-1">
                  <p className="mb-3 text-[15px] leading-8 text-[#42526b] md:text-[16px]">
                    Выбор мешка зависит от:
                  </p>

                  <ul className="space-y-3">
                    <li className="flex items-start gap-4">
                      <span className="mt-[7px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#ff6b2c] text-[11px] font-bold text-white">✓</span>
                      <span>Типа оборудования (стружкоотсос, УВП, циклон)</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="mt-[7px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#ff6b2c] text-[11px] font-bold text-white">✓</span>
                      <span>Типа пыли и ее концентрации</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="mt-[7px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#ff6b2c] text-[11px] font-bold text-white">✓</span>
                      <span>Условий эксплуатации (температура, влажность, агрессивные среды)</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="mt-[7px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#ff6b2c] text-[11px] font-bold text-white">✓</span>
                      <span>Необходимого срока службы</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-[24px] bg-[#f6f8fb] px-7 py-9 md:px-10 md:py-10">
              <h2 className="max-w-[1080px] text-[26px] font-bold leading-[1.15] text-[#0f2341] md:text-[38px]">
                Как подобрать верхний фильтровальный мешок для стружкоотсоса
              </h2>

              <div className="mt-7 max-w-[1180px] space-y-5 text-[15px] leading-8 text-[#42526b] md:text-[16px]">
                <p>
                  Для фильтров аспирации важны посадка на патрубок и соответствие ткани типу пыли.
                  Ориентируйтесь на:
                </p>

                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <span className="mt-[7px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#ff6b2c] text-[11px] font-bold text-white">✓</span>
                    <span>
                      <strong className="font-semibold text-[#0f2341]">Диаметр и высоту мешка</strong>
                      {" "}— стандартные и нестандартные размеры доступны под заказ
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="mt-[7px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#ff6b2c] text-[11px] font-bold text-white">✓</span>
                    <span>
                      <strong className="font-semibold text-[#0f2341]">Тип крепления</strong>
                      {" "}— кольцевое, хомутовое или фланцевое соединение
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="mt-[7px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#ff6b2c] text-[11px] font-bold text-white">✓</span>
                    <span>
                      <strong className="font-semibold text-[#0f2341]">Материал фильтра</strong>
                      {" "}— полиэстер, полипропилен или иглопробивной фильтр в зависимости от типа пыли и условий работы
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="mt-[7px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#ff6b2c] text-[11px] font-bold text-white">✓</span>
                    <span>
                      <strong className="font-semibold text-[#0f2341]">Тип пыли</strong>
                      {" "}— древесная, металлическая, пищевая или химическая
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="mt-[7px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#ff6b2c] text-[11px] font-bold text-white">✓</span>
                    <span>
                      <strong className="font-semibold text-[#0f2341]">Срок службы</strong>
                      {" "}— при высокой нагрузке лучше выбирать износостойкие материалы
                    </span>
                  </li>
                </ul>

                <p>
                  Для деревообработки чаще берут полиэстеровые фильтровальные мешки; для влажной среды
                  смотрят на полипропилен. Не знаете размер — пришлите марку станка (из таблицы выше
                  или иную) или фото узла крепления, подскажем по верхнему мешку.
                </p>
              </div>
            </div>

            <div className="border-t border-[#e7ebf0] pt-12">
              <h2 className="max-w-[1080px] text-[26px] font-bold leading-[1.15] text-[#0f2341] md:text-[38px]">
                Купить фильтровальные мешки для аспирации и стружкоотсосов
              </h2>

              <div className="mt-7 max-w-[1180px] space-y-5 text-[15px] leading-8 text-[#42526b] md:text-[16px]">
                <p>
                  В ассортименте — мешки для аспирационных установок и отдельно верхние и нижние мешки
                  для стружкоотсоса, фильтровальные рукава для УВП и циклонов. Материалы подбираем под
                  древесную пыль, опилки и типичные условия мастерской или цеха.
                </p>

                <p>
                  Работаем с деревообработкой, столярными производствами и смежными задачами; изделия
                  шьём из полиэстера, полипропилена и иглопробивного полотна с упором на ресурс и
                  стабильную степень очистки воздуха.
                </p>

                <p>
                  Доставляем заказы по России: Москва, Санкт-Петербург, Екатеринбург, Казань и другие
                  города — уточняйте сроки при оформлении.
                </p>
              </div>

              <div className="mt-8 flex justify-center">
                <a
                  href="#zakaz-verhnih-meshkov"
                  className="inline-flex items-center gap-3 rounded-full bg-[#ff6b2c] px-7 py-3.5 text-[16px] font-semibold text-white transition hover:bg-[#f25a18]"
                >
                  <span>Заказать верхние мешки для аспирации</span>
                  <span className="text-[20px] leading-none">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-18 md:py-20">
        <div className="mx-auto max-w-[1240px] px-6 sm:px-8 lg:px-10">
          <div className="mb-6">
            <h2 className="text-[26px] font-bold leading-tight text-[#0f2341] md:text-[38px]">
              Каталог фильтровальных мешков и рукавов
            </h2>

            <p className="mt-2 text-[15px] leading-7 text-[#63748b] md:text-[16px]">
              Вся продукция FilterFlow — производство под заказ, доставка по России
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {catalogCards.map((card) => (
              <a
                key={card.title}
                href={card.href}
                className="group rounded-[18px] border border-[#e6ebf0] bg-white px-4 py-4 transition-all duration-300 hover:border-[#9de1d8] hover:bg-[#eef9f6]"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-[10px] border border-[#dbe4ea] bg-white text-[#21b5a6] transition-all duration-300 group-hover:border-[#21b5a6] group-hover:bg-[#21b5a6] group-hover:text-white">
                    <CatalogMiniIcon icon={card.icon} />
                  </div>

                  <div className="min-w-0 pt-[1px]">
                    <h3 className="text-[14px] font-bold leading-[1.3] text-[#0f2341] md:text-[15px]">
                      {card.title}
                    </h3>

                    <p className="mt-1 text-[13px] leading-[1.45] text-[#6b7b91] md:text-[13.5px]">
                      {card.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white pt-2 pb-20">
        <div className="mx-auto max-w-[1240px] px-6 sm:px-8 lg:px-10">
          <div className="border-t border-[#e8edf3] pt-10">
            <div className="mb-6">
              <h2 className="text-[26px] font-bold leading-tight text-[#0f2341] md:text-[36px]">
                Полезные статьи о фильтрации и аспирации
              </h2>

              <p className="mt-2 text-[15px] leading-7 text-[#63748b] md:text-[16px]">
                Руководства, советы и обзоры от специалистов FilterFlow
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {articleCards.map((article) => (
                <a
                  key={article.title}
                  href={article.href}
                  className="group rounded-[16px] border border-[#e6ebf0] bg-white px-4 py-4 transition-all duration-300 hover:border-[#ffd0bf] hover:bg-[#fffaf7]"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-[10px] border border-[#ffd8c8] bg-[#fff4ef] text-[#ff7a45] transition-all duration-300 group-hover:border-[#ff7a45] group-hover:bg-[#ff7a45] group-hover:text-white">
                      <ArticleMiniIcon />
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-[15px] font-bold leading-[1.35] text-[#0f2341]">
                        {article.title}
                      </h3>

                      <p className="mt-1 text-[13px] leading-[1.55] text-[#6b7b91]">
                        {article.description}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-7 flex justify-center">
              <a
                href="/blog"
                className="inline-flex items-center gap-3 text-[15px] font-medium text-[#0aa79d] transition hover:text-[#0b8d84]"
              >
                <span>Все статьи блога</span>
                <span className="text-[18px]">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <SeeAlsoLinks excludeHref="/verhnie-meshki" />
      <FloatingContacts />
    </>
  );
}