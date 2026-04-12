"use client";

import { useMemo, useState } from "react";
import Navigation from "../components/Navigation";
import FloatingContacts from "../components/feature/FloatingContacts";

type GuideRow = {
  brand: string;
  model: string;
  slug: string;
  power: string;
  upper: string;
  lower: string;
  type: string;
};

const guideRows: GuideRow[] = [
  { brand: "КОНСАР", model: "УВП-1200", slug: "konsar-uvp-1200", power: "1,2 кВт", upper: "Размер уточняется", lower: "Размер уточняется", type: "УВП" },
  { brand: "КОНСАР", model: "УВП-2000", slug: "konsar-uvp-2000", power: "2,0 кВт", upper: "Размер уточняется", lower: "Размер уточняется", type: "УВП" },
  { brand: "КОНСАР", model: "УВП-2500", slug: "konsar-uvp-2500", power: "2,5 кВт", upper: "Размер уточняется", lower: "Размер уточняется", type: "УВП" },
  { brand: "CONSAR", model: "2000", slug: "consar-2000", power: "2,0 кВт", upper: "Размер уточняется", lower: "Размер уточняется", type: "УВП" },

  { brand: "JET", model: "DC-1200", slug: "jet-dc-1200", power: "1,2 кВт", upper: "Ø380 × 720 мм", lower: "Ø380 × 620 мм", type: "Однофазный" },
  { brand: "JET", model: "DC-1900A", slug: "jet-dc-1900a", power: "1,5 кВт", upper: "Ø450 × 900 мм", lower: "Ø450 × 820 мм", type: "Промышленный" },
  { brand: "JET", model: "DC-1100", slug: "jet-dc-1100", power: "1,1 кВт", upper: "Размер уточняется", lower: "Размер уточняется", type: "Стружкоотсос" },
  { brand: "JET", model: "DC-2300", slug: "jet-dc-2300", power: "2,3 кВт", upper: "Размер уточняется", lower: "Размер уточняется", type: "Стружкоотсос" },
  { brand: "JET", model: "DC-3000", slug: "jet-dc-3000", power: "3,0 кВт", upper: "Размер уточняется", lower: "Размер уточняется", type: "Стружкоотсос" },

  { brand: "PROMA", model: "OP-1500", slug: "proma-op-1500", power: "1,5 кВт", upper: "Размер уточняется", lower: "Размер уточняется", type: "Стружкоотсос" },
  { brand: "PROMA", model: "OP-2200", slug: "proma-op-2200", power: "2,2 кВт", upper: "Размер уточняется", lower: "Размер уточняется", type: "Стружкоотсос" },

  { brand: "Triod", model: "VC-15", slug: "triod-vc-15", power: "1,5 кВт", upper: "Размер уточняется", lower: "Размер уточняется", type: "Стружкоотсос" },

  { brand: "Кратон", model: "DC-01", slug: "kraton-dc-01", power: "Уточняйте", upper: "Размер уточняется", lower: "Размер уточняется", type: "Стружкоотсос" },
  { brand: "Кратон", model: "DC-02", slug: "kraton-dc-02", power: "Уточняйте", upper: "Размер уточняется", lower: "Размер уточняется", type: "Стружкоотсос" },
  { brand: "Кратон", model: "DC-03", slug: "kraton-dc-03", power: "Уточняйте", upper: "Размер уточняется", lower: "Размер уточняется", type: "Стружкоотсос" },

  { brand: "Энкор Корвет", model: "64", slug: "enkor-korvet-64", power: "Уточняйте", upper: "Размер уточняется", lower: "Размер уточняется", type: "Стружкоотсос" },
  { brand: "Энкор Корвет", model: "65", slug: "enkor-korvet-65", power: "Уточняйте", upper: "Размер уточняется", lower: "Размер уточняется", type: "Стружкоотсос" },
  { brand: "Энкор Корвет", model: "66", slug: "enkor-korvet-66", power: "Уточняйте", upper: "Размер уточняется", lower: "Размер уточняется", type: "Стружкоотсос" },
  { brand: "Энкор Корвет", model: "67", slug: "enkor-korvet-67", power: "Уточняйте", upper: "Размер уточняется", lower: "Размер уточняется", type: "Стружкоотсос" },

  { brand: "ПП", model: "2000", slug: "pp-2000", power: "2,0 кВт", upper: "Размер уточняется", lower: "Размер уточняется", type: "Пылеулавливающая установка" },

  { brand: "ROCKSTAR", model: "STS1120SB", slug: "rockstar-sts1120sb", power: "Уточняйте", upper: "Размер уточняется", lower: "Размер уточняется", type: "Стружкоотсос" },
  { brand: "ROCKSTAR", model: "STS1170SB", slug: "rockstar-sts1170sb", power: "Уточняйте", upper: "Размер уточняется", lower: "Размер уточняется", type: "Стружкоотсос" },
  { brand: "ROCKSTAR", model: "STS1500SB", slug: "rockstar-sts1500sb", power: "Уточняйте", upper: "Размер уточняется", lower: "Размер уточняется", type: "Стружкоотсос" },
  { brand: "ROCKSTAR", model: "STS655SB", slug: "rockstar-sts655sb", power: "Уточняйте", upper: "Размер уточняется", lower: "Размер уточняется", type: "Стружкоотсос" },
  { brand: "ROCKSTAR", model: "STS1161SB", slug: "rockstar-sts1161sb", power: "Уточняйте", upper: "Размер уточняется", lower: "Размер уточняется", type: "Стружкоотсос" },
  { brand: "ROCKSTAR", model: "STS1511SB", slug: "rockstar-sts1511sb", power: "Уточняйте", upper: "Размер уточняется", lower: "Размер уточняется", type: "Стружкоотсос" },
  { brand: "ROCKSTAR", model: "STS800SB", slug: "rockstar-sts800sb", power: "Уточняйте", upper: "Размер уточняется", lower: "Размер уточняется", type: "Стружкоотсос" },
  { brand: "ROCKSTAR", model: "STS1300SB", slug: "rockstar-sts1300sb", power: "Уточняйте", upper: "Размер уточняется", lower: "Размер уточняется", type: "Стружкоотсос" },
  { brand: "ROCKSTAR", model: "STS1600SB", slug: "rockstar-sts1600sb", power: "Уточняйте", upper: "Размер уточняется", lower: "Размер уточняется", type: "Стружкоотсос" },
  { brand: "ROCKSTAR", model: "STS980SB", slug: "rockstar-sts980sb", power: "Уточняйте", upper: "Размер уточняется", lower: "Размер уточняется", type: "Стружкоотсос" },
  { brand: "ROCKSTAR", model: "STS1020SB", slug: "rockstar-sts1020sb", power: "Уточняйте", upper: "Размер уточняется", lower: "Размер уточняется", type: "Стружкоотсос" },
  { brand: "ROCKSTAR", model: "STS1550SB", slug: "rockstar-sts1550sb", power: "Уточняйте", upper: "Размер уточняется", lower: "Размер уточняется", type: "Стружкоотсос" },
  { brand: "ROCKSTAR", model: "STS1200SB", slug: "rockstar-sts1200sb", power: "Уточняйте", upper: "Размер уточняется", lower: "Размер уточняется", type: "Стружкоотсос" },
  { brand: "ROCKSTAR", model: "STS1150SB", slug: "rockstar-sts1150sb", power: "Уточняйте", upper: "Размер уточняется", lower: "Размер уточняется", type: "Стружкоотсос" },
  { brand: "ROCKSTAR", model: "STS1460SB", slug: "rockstar-sts1460sb", power: "Уточняйте", upper: "Размер уточняется", lower: "Размер уточняется", type: "Стружкоотсос" },
  { brand: "ROCKSTAR", model: "STS1900SB", slug: "rockstar-sts1900sb", power: "Уточняйте", upper: "Размер уточняется", lower: "Размер уточняется", type: "Стружкоотсос" },
  { brand: "ROCKSTAR", model: "STS52-190SB", slug: "rockstar-sts52-190sb", power: "Уточняйте", upper: "Размер уточняется", lower: "Размер уточняется", type: "Стружкоотсос" },
  { brand: "ROCKSTAR", model: "STS53-116SB", slug: "rockstar-sts53-116sb", power: "Уточняйте", upper: "Размер уточняется", lower: "Размер уточняется", type: "Стружкоотсос" },
  { brand: "ROCKSTAR", model: "STS34-150SB", slug: "rockstar-sts34-150sb", power: "Уточняйте", upper: "Размер уточняется", lower: "Размер уточняется", type: "Стружкоотсос" },
  { brand: "ROCKSTAR", model: "STS42-132SB", slug: "rockstar-sts42-132sb", power: "Уточняйте", upper: "Размер уточняется", lower: "Размер уточняется", type: "Стружкоотсос" },
  { brand: "ROCKSTAR", model: "STS42-88SB", slug: "rockstar-sts42-88sb", power: "Уточняйте", upper: "Размер уточняется", lower: "Размер уточняется", type: "Стружкоотсос" },
  { brand: "ROCKSTAR", model: "STS63-100SB", slug: "rockstar-sts63-100sb", power: "Уточняйте", upper: "Размер уточняется", lower: "Размер уточняется", type: "Стружкоотсос" },
  { brand: "ROCKSTAR", model: "STS53-100SB", slug: "rockstar-sts53-100sb", power: "Уточняйте", upper: "Размер уточняется", lower: "Размер уточняется", type: "Стружкоотсос" },
  { brand: "ROCKSTAR", model: "STS47-80SB", slug: "rockstar-sts47-80sb", power: "Уточняйте", upper: "Размер уточняется", lower: "Размер уточняется", type: "Стружкоотсос" },

  { brand: "Накопитель", model: "УВП-1200", slug: "nakopitel-uvp-1200", power: "1,2 кВт", upper: "Размер уточняется", lower: "Размер уточняется", type: "Накопитель" },
  { brand: "Накопитель", model: "АЛВГ-М10.001.07.00-01", slug: "nakopitel-alvg-m10-001-07-00-01", power: "Уточняйте", upper: "Размер уточняется", lower: "Размер уточняется", type: "Накопитель" },
  { brand: "Накопитель", model: "АЛВГ-М.10.001.07.00-01", slug: "meshok-nakopitel-alvg-m-10-001-07-00-01", power: "Уточняйте", upper: "Размер уточняется", lower: "Размер уточняется", type: "Накопитель" },

  { brand: "Holzmann", model: "ABS 1080", slug: "holzmann-abs-1080", power: "1,08 кВт", upper: "Размер уточняется", lower: "Размер уточняется", type: "Стружкоотсос" },
  { brand: "Holzmann", model: "ABS 1500", slug: "holzmann-abs-1500", power: "1,5 кВт", upper: "Размер уточняется", lower: "Размер уточняется", type: "Стружкоотсос" },
  { brand: "Holzmann", model: "ABS 2200", slug: "holzmann-abs-2200", power: "2,2 кВт", upper: "Размер уточняется", lower: "Размер уточняется", type: "Стружкоотсос" },

  { brand: "Record Power", model: "DX1000", slug: "record-power-dx1000", power: "1,0 кВт", upper: "Размер уточняется", lower: "Размер уточняется", type: "Стружкоотсос" },
  { brand: "Record Power", model: "DX1500", slug: "record-power-dx1500", power: "1,5 кВт", upper: "Размер уточняется", lower: "Размер уточняется", type: "Стружкоотсос" },
  { brand: "Record Power", model: "CX2600", slug: "record-power-cx2600", power: "2,6 кВт", upper: "Размер уточняется", lower: "Размер уточняется", type: "Стружкоотсос" },

  { brand: "Felder", model: "AF 14", slug: "felder-af-14", power: "Уточняйте", upper: "Размер уточняется", lower: "Размер уточняется", type: "Стружкоотсос" },
  { brand: "Felder", model: "AF 16", slug: "felder-af-16", power: "Уточняйте", upper: "Размер уточняется", lower: "Размер уточняется", type: "Стружкоотсос" },

  { brand: "Sturm", model: "DC1010", slug: "sturm-dc1010", power: "1,0 кВт", upper: "Размер уточняется", lower: "Размер уточняется", type: "Стружкоотсос" },
  { brand: "Sturm", model: "DC1215", slug: "sturm-dc1215", power: "1,5 кВт", upper: "Размер уточняется", lower: "Размер уточняется", type: "Стружкоотсос" },

  { brand: "Einhell", model: "TE-VE 550/1", slug: "einhell-te-ve-550-1", power: "0,55 кВт", upper: "Размер уточняется", lower: "Размер уточняется", type: "Стружкоотсос" },
  { brand: "Einhell", model: "TE-VE 750", slug: "einhell-te-ve-750", power: "0,75 кВт", upper: "Размер уточняется", lower: "Размер уточняется", type: "Стружкоотсос" },

  { brand: "Metabo", model: "SPA 1200", slug: "metabo-spa-1200", power: "1,2 кВт", upper: "Размер уточняется", lower: "Размер уточняется", type: "Стружкоотсос" },
  { brand: "Metabo", model: "SPA 1700", slug: "metabo-spa-1700", power: "1,7 кВт", upper: "Размер уточняется", lower: "Размер уточняется", type: "Стружкоотсос" },
];

const brands = [
  "Все",
  "КОНСАР",
  "CONSAR",
  "JET",
  "PROMA",
  "Triod",
  "Кратон",
  "Энкор Корвет",
  "ПП",
  "ROCKSTAR",
  "Накопитель",
  "Holzmann",
  "Record Power",
  "Felder",
  "Sturm",
  "Einhell",
  "Metabo",
];

function getBrandBadgeClass(brand: string) {
  if (brand === "JET") return "bg-[#fde2e2] text-[#e24b4b]";
  if (brand === "PROMA") return "bg-[#fff1d8] text-[#d07a00]";
  if (brand === "КОНСАР" || brand === "CONSAR") return "bg-[#e8eefc] text-[#3d63dd]";
  if (brand === "Triod") return "bg-[#efe9ff] text-[#6f48d9]";
  if (brand === "Кратон") return "bg-[#ffe8d7] text-[#cf6b00]";
  if (brand === "Энкор Корвет") return "bg-[#dcf5df] text-[#24914d]";
  if (brand === "ПП") return "bg-[#e8f1de] text-[#598c2f]";
  if (brand === "ROCKSTAR") return "bg-[#fce7f3] text-[#c02675]";
  if (brand === "Накопитель") return "bg-[#e6f7f2] text-[#0f766e]";
  if (brand === "Holzmann") return "bg-[#dff5fb] text-[#1f88a7]";
  if (brand === "Record Power") return "bg-[#ece3ff] text-[#7a3ff2]";
  if (brand === "Felder") return "bg-[#fef3c7] text-[#b45309]";
  if (brand === "Sturm") return "bg-[#dcfce7] text-[#15803d]";
  if (brand === "Einhell") return "bg-[#fee2e2] text-[#b91c1c]";
  if (brand === "Metabo") return "bg-[#f3e8ff] text-[#7e22ce]";
  return "bg-slate-100 text-slate-700";
}

export default function NizhnieMeshkiPage() {
  const [activeBrand, setActiveBrand] = useState("Все");
  const [query, setQuery] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [equipment, setEquipment] = useState("");

  const faqItems = [
    {
      question: "Какой объём нижнего накопительного мешка выбрать для стружкоотсоса?",
      answer:
        "Объём нижнего мешка для сбора стружки зависит от интенсивности работы и типа аспирационной установки. Для домашней мастерской чаще хватает 50–100 л, для небольшого производства — 100–200 л, для мощных систем аспирации — 200–300 л. Чем больше объём, тем реже нужно опорожнять мешок-накопитель.",
    },
    {
      question: "Как часто менять нижний мешок для аспирации опилок и стружки?",
      answer:
        "Нижний мешок для аспирации опилок не требует частой замены: при аккуратной эксплуатации он служит около 2–3 лет. Опустошать накопитель нужно по мере заполнения (при активной работе иногда раз в неделю). Менять мешок имеет смысл при износе ткани или повреждении швов — это не фильтровальный расходник, как верхний слой.",
    },
    {
      question: "Можно ли стирать нижний мешок для стружкоотсоса (тканевый)?",
      answer:
        "Да: тканевые мешки для стружкоотсоса из полиэстера и полипропилена можно стирать в тёплой воде с мягким средством. После стирки мешок нужно полностью высушить перед установкой на патрубок — так дольше сохраняется герметичность и внешний вид.",
    },
    {
      question: "Чем нижний мешок отличается от верхнего фильтра для аспирации?",
      answer:
        "Нижний мешок для стружкоотсоса — это прежде всего мешок-накопитель: он собирает крупную стружку и опилки и не заменяет фильтры для аспирации. Верхний фильтровальный мешок удерживает мелкую пыль в потоке воздуха. Вместе они обеспечивают нормальную работу пылеулавливания.",
    },
    {
      question: "Как установить нижний мешок на стружкоотсос или УВП?",
      answer:
        "Схема зависит от крепления: на хомут — надевают мешок на патрубок и затягивают хомут; кольцевое — кольцо в горловине фиксируют на патрубке; на резинке — натягивают по нижнему патрубку. Важна плотная посадка без зазоров, иначе стружка будет просыпаться мимо накопителя.",
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
        row.lower.toLowerCase().includes(q) ||
        row.type.toLowerCase().includes(q);

      return brandMatch && queryMatch;
    });
  }, [activeBrand, query]);

  const mailHref = useMemo(() => {
    const subject = "Заявка на нижний мешок для аспирации";
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

      <main className="min-h-screen bg-[#f8fafc]">
        <section className="pt-[118px] pb-16">
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
              <span className="font-medium text-slate-900">Нижние мешки</span>
            </div>

            <h1 className="mb-8 text-[34px] font-bold leading-[1.08] text-[#0f172a] md:text-[42px]">
              Нижние мешки для аспирации и стружкоотсосов
            </h1>

            <div className="grid items-start gap-10 lg:grid-cols-[1.02fr_0.98fr]">
              <div className="max-w-[520px] overflow-hidden rounded-[24px] bg-[#eef2f5]">
                <img
                  src="/images/catalog/nizhnie-meshki%20dlya%20aspiracii.webp"
                  alt="Нижний накопительный мешок для стружкоотсоса и системы аспирации"
                  className="h-auto w-full object-contain"
                />
              </div>

              <div>
                <p className="text-[18px] leading-8 text-[#334155]">
                  <strong className="text-[#0f172a]">Нижние мешки для аспирации</strong> — это
                  накопительные мешки для систем аспирации: их ставят в нижней части стружкоотсоса или
                  аспирационной установки, чтобы собирать опилки и стружку после верхних фильтров.
                  Такой мешок для сбора стружки удобно опорожнять и менять, не снижая эффективность
                  пылеулавливания.
                </p>

                <h2 className="mt-10 mb-6 text-[28px] font-bold leading-tight text-[#0f172a] md:text-[32px]">
                  Преимущества нижнего накопительного мешка для стружкоотсоса
                </h2>

                <ul className="space-y-4">
                  {[
                    "Большой объем для сбора отходов",
                    "Прочные швы и усиленное дно",
                    "Удобная система крепления",
                    "Легкая замена и очистка",
                    "Изготовление под любые размеры",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-4">
                      <span className="mt-[5px] flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#ff7a2f] text-[12px] font-bold text-white">
                        ✓
                      </span>
                      <span className="text-[16px] leading-7 text-[#0f172a]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="mb-10 text-[26px] font-bold text-[#0f172a] md:text-[30px]">
              Типы нижних мешков для аспирации и пылеулавливания
            </h2>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-[20px] border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
                <h3 className="mb-3 text-[18px] font-semibold text-[#0f172a]">
                  Стандартные тканевые мешки
                </h3>
                <p className="text-[15px] leading-7 text-[#475569]">
                  Универсальный вариант для большинства стружкоотсосов и линейки УВП: объём обычно от
                  50 до 200 литров.
                </p>
              </div>

              <div className="rounded-[20px] border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
                <h3 className="mb-3 text-[18px] font-semibold text-[#0f172a]">
                  Усиленные мешки для аспирации
                </h3>
                <p className="text-[15px] leading-7 text-[#475569]">
                  Для интенсивной работы и тяжёлой стружки: двойные швы и усиленное дно накопительного
                  мешка.
                </p>
              </div>

              <div className="rounded-[20px] border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
                <h3 className="mb-3 text-[18px] font-semibold text-[#0f172a]">
                  Прозрачные мешки-накопители
                </h3>
                <p className="text-[15px] leading-7 text-[#475569]">
                  Удобно контролировать заполнение мешка для опилок и крупной пыли без снятия с
                  патрубка.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f5f3ee] pb-20 pt-4">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-9 text-center">
              <div className="mb-4 inline-flex rounded-full bg-[#f8e2c6] px-5 py-2 text-[13px] font-semibold uppercase tracking-wide text-[#d86512]">
                Справочник размеров
              </div>

              <h2 className="mx-auto mb-4 max-w-5xl text-[30px] font-bold leading-[1.15] text-[#0f172a] md:text-[44px]">
                Размеры нижнего мешка для стружкоотсосов и аспирационных установок
              </h2>

              <p className="mx-auto max-w-4xl text-[16px] leading-8 text-[#475569] md:text-[17px]">
                Ниже — ориентиры по нижнему накопительному мешку для JET (в таблице — ряды DC-1100,
                DC-1200; у модификаций вроде DC-1100VX / DC-1200VX ориентируйтесь на строку базовой
                модели и при необходимости уточните размер по замеру), PROMA OP-1500 и OP-2200, «Энкор
                Корвет» 64–67, КОНСАР УВП-1200/2000, CONSAR 2000, ROCKSTAR, Triod, Holzmann, Record
                Power, Felder, Sturm, Metabo, Einhell, Кратон и других позиций каталога. Найдите строку
                с вашей моделью или напишите нам — подберём размер по фото или чертежу.
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
                  placeholder="Поиск: JET, PROMA, Корвет, УВП, ROCKSTAR…"
                  className="h-[48px] w-full rounded-full border border-slate-200 bg-white px-5 text-[15px] text-[#334155] outline-none transition placeholder:text-slate-400 focus:border-[#ff6b2c]"
                />
              </div>
            </div>

            <div className="overflow-hidden rounded-[22px] border border-slate-200 bg-white shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[1120px] border-collapse">
                  <caption className="sr-only">
                    Справочник: нижний мешок для стружкоотсоса и аспирации по брендам JET, PROMA,
                    Энкор Корвет, КОНСАР, CONSAR, ROCKSTAR, Triod, Holzmann, Record Power, Felder,
                    Sturm, Einhell, Metabo, Кратон; мешок-накопитель для УВП и отдельных накопителей
                  </caption>
                  <thead>
                    <tr className="bg-[#16233b] text-white">
                      <th className="px-4 py-4 text-left text-[15px] font-semibold">Бренд</th>
                      <th className="px-4 py-4 text-left text-[15px] font-semibold">Модель</th>
                      <th className="px-4 py-4 text-left text-[15px] font-semibold">Мощность</th>
                      <th className="px-4 py-4 text-left text-[15px] font-semibold">Верхний мешок</th>
                      <th className="bg-[#ff6b2c] px-4 py-4 text-left text-[15px] font-semibold">Нижний мешок</th>
                      <th className="px-4 py-4 text-left text-[15px] font-semibold">Тип</th>
                    </tr>
                  </thead>

                  <tbody>
                    {filteredRows.map((row, index) => (
                      <tr
                        id={`model-${row.slug}`}
                        key={`${row.brand}-${row.model}-${index}`}
                        className="border-b border-slate-200 last:border-b-0 hover:bg-slate-50"
                      >
                        <td className="px-4 py-4 align-middle">
                          <span className={`inline-flex rounded-full px-3 py-1 text-[13px] font-semibold ${getBrandBadgeClass(row.brand)}`}>
                            {row.brand}
                          </span>
                        </td>

                        <td className="px-4 py-4 text-[15px] font-medium text-[#0f172a]">
                          <a
                            href={`#model-${row.slug}`}
                            className="transition hover:text-[#ff6b2c] hover:underline"
                          >
                            {row.model}
                          </a>
                        </td>

                        <td className="px-4 py-4 text-[15px] text-[#475569]">{row.power}</td>

                        <td className="px-4 py-4 text-[15px] text-[#475569]">
                          {row.upper}
                        </td>

                        <td className="px-4 py-4 text-[15px] font-semibold text-[#0f172a]">
                          <span className="mr-2 text-[#ff6b2c]">●</span>
                          {row.lower}
                        </td>

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

            <p className="mt-6 max-w-4xl text-[15px] leading-7 text-[#475569] md:text-[16px]">
              Нижний слой — накопитель: он работает в паре с верхним фильтровальным мешком (мелкая пыль
              задерживается сверху, крупная фракция оседает снизу). Нужны именно верхние фильтровальные
              мешки — см. блок «Смотрите также» ниже.
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

        <section className="bg-white pb-20">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="mb-10 text-[30px] font-bold leading-tight text-[#0f2341] md:text-[44px]">
              Области применения нижних мешков для пылеулавливания
            </h2>

            <div className="rounded-[24px] bg-[#f4f6f8] px-8 py-10 md:px-10 md:py-12">
              <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
                <div>
                  <h3 className="mb-6 text-[22px] font-bold text-[#0f2341] md:text-[24px]">
                    Деревообработка
                  </h3>

                  <ul className="space-y-5">
                    <li className="flex items-start gap-4">
                      <span className="mt-[9px] h-0 w-0 shrink-0 border-y-[5px] border-y-transparent border-l-[6px] border-l-[#ff7a2f]" />
                      <span className="text-[16px] leading-7 text-[#334155] md:text-[17px]">
                        Сбор опилок и стружки
                      </span>
                    </li>

                    <li className="flex items-start gap-4">
                      <span className="mt-[9px] h-0 w-0 shrink-0 border-y-[5px] border-y-transparent border-l-[6px] border-l-[#ff7a2f]" />
                      <span className="text-[16px] leading-7 text-[#334155] md:text-[17px]">
                        Столярные мастерские
                      </span>
                    </li>

                    <li className="flex items-start gap-4">
                      <span className="mt-[9px] h-0 w-0 shrink-0 border-y-[5px] border-y-transparent border-l-[6px] border-l-[#ff7a2f]" />
                      <span className="text-[16px] leading-7 text-[#334155] md:text-[17px]">
                        Мебельные фабрики
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-6 text-[22px] font-bold text-[#0f2341] md:text-[24px]">
                    Промышленность
                  </h3>

                  <ul className="space-y-5">
                    <li className="flex items-start gap-4">
                      <span className="mt-[9px] h-0 w-0 shrink-0 border-y-[5px] border-y-transparent border-l-[6px] border-l-[#ff7a2f]" />
                      <span className="text-[16px] leading-7 text-[#334155] md:text-[17px]">
                        Металлическая стружка
                      </span>
                    </li>

                    <li className="flex items-start gap-4">
                      <span className="mt-[9px] h-0 w-0 shrink-0 border-y-[5px] border-y-transparent border-l-[6px] border-l-[#ff7a2f]" />
                      <span className="text-[16px] leading-7 text-[#334155] md:text-[17px]">
                        Пластиковые отходы
                      </span>
                    </li>

                    <li className="flex items-start gap-4">
                      <span className="mt-[9px] h-0 w-0 shrink-0 border-y-[5px] border-y-transparent border-l-[6px] border-l-[#ff7a2f]" />
                      <span className="text-[16px] leading-7 text-[#334155] md:text-[17px]">
                        Текстильная пыль
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12">
              <h2 className="text-[30px] font-bold leading-tight text-[#0f2341] md:text-[44px]">
                Часто задаваемые вопросы о нижних мешках для аспирации
              </h2>
            </div>

            <div className="space-y-5">
              {faqItems.map((item, index) => {
                const isOpen = openFaq === index;

                return (
                  <div
                    key={item.question}
                    className={`overflow-hidden rounded-[20px] border shadow-sm transition-all duration-300 ${
                      isOpen
                        ? "border-[#d9cfc0] bg-[#f4ede3]"
                        : "border-[#e5e7eb] bg-white"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-5 px-6 py-7 text-left md:px-7"
                    >
                      <span className="text-[18px] font-bold leading-[1.35] text-[#0f172a] md:text-[20px]">
                        {item.question}
                      </span>

                      <span
                        className={`shrink-0 text-[28px] font-light leading-none text-[#ff6b2c] transition-transform duration-300 ${
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
                        <div className="px-6 pb-7 md:px-7">
                          <p className="max-w-[1250px] text-[16px] leading-8 text-[#475569] md:text-[17px]">
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

        <section className="bg-white pb-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="rounded-[24px] border border-[#d9dee7] bg-[#f8f9fb] px-8 py-8 shadow-sm md:px-10 md:py-10">
              <h2 className="mb-8 text-[24px] font-bold leading-tight text-[#0f2341] md:text-[28px]">
                Смотрите также: верхние и другие мешки
              </h2>

              <div className="grid grid-cols-1 gap-y-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
                <a
                  href="/verhnie-meshki"
                  className="text-[16px] font-medium text-[#ff6b2c] transition hover:text-[#e4571a] hover:underline"
                >
                  → Верхние мешки для аспирации
                </a>

                <a
                  href="/meshki-dlya-opilok"
                  className="text-[16px] font-medium text-[#ff6b2c] transition hover:text-[#e4571a] hover:underline"
                >
                  → Мешки для опилок
                </a>

                <a
                  href="/meshki-dlya-struzhkootsosa"
                  className="text-[16px] font-medium text-[#ff6b2c] transition hover:text-[#e4571a] hover:underline"
                >
                  → Мешки для стружкоотсоса
                </a>

                <a
                  href="/meshki-dlya-ciklonov-i-uvp"
                  className="text-[16px] font-medium text-[#ff6b2c] transition hover:text-[#e4571a] hover:underline"
                >
                  → Мешки для циклонов
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white pb-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-[1280px]">
              <h2 className="text-[24px] font-bold leading-[1.18] text-[#0f2341] md:text-[42px]">
                Нижний мешок для стружкоотсоса и аспирации: назначение
              </h2>

              <div className="mt-6 space-y-5 text-[15px] leading-8 text-[#334155] md:text-[16px]">
                <p>
                  <strong className="font-semibold text-[#0f2341]">Нижний мешок для аспирации</strong> — накопитель в нижней части стружкоотсоса, в установке УВП или под циклоном: собирает крупную стружку и опилки после верхней ступени фильтрации. Его задача — объём отходов, а не тонкая очистка выброса.
                </p>

                <p>
                  По сравнению с верхним фильтровальным мешком нижний не «лечит» мелкую пыль — важны
                  прочность ткани, швы и удобное опорожнение, чтобы мешок для сбора стружки служил
                  долго в мастерской или на производстве.
                </p>

                <div className="pt-1">
                  <p className="mb-4 text-[15px] leading-8 text-[#334155] md:text-[16px]">
                    На что смотреть при выборе нижнего накопительного мешка:
                  </p>

                  <ul className="space-y-4">
                    <li className="flex items-start gap-4">
                      <span className="mt-[6px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#ff6b2c] text-[11px] font-bold text-white">
                        ✓
                      </span>
                      <span>
                        <strong className="font-semibold text-[#0f2341]">Объём</strong> — от 50 до 300 литров в зависимости от модели оборудования
                      </span>
                    </li>

                    <li className="flex items-start gap-4">
                      <span className="mt-[6px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#ff6b2c] text-[11px] font-bold text-white">
                        ✓
                      </span>
                      <span>
                        <strong className="font-semibold text-[#0f2341]">Прочность ткани</strong> — плотная ткань с усиленными швами и двойным дном
                      </span>
                    </li>

                    <li className="flex items-start gap-4">
                      <span className="mt-[6px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#ff6b2c] text-[11px] font-bold text-white">
                        ✓
                      </span>
                      <span>
                        <strong className="font-semibold text-[#0f2341]">Тип крепления</strong> — хомутовое, кольцевое или на резинке для быстрой замены
                      </span>
                    </li>

                    <li className="flex items-start gap-4">
                      <span className="mt-[6px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#ff6b2c] text-[11px] font-bold text-white">
                        ✓
                      </span>
                      <span>
                        <strong className="font-semibold text-[#0f2341]">Материал</strong> — полиэстер, полипропилен или плотная нетканая ткань
                      </span>
                    </li>

                    <li className="flex items-start gap-4">
                      <span className="mt-[6px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#ff6b2c] text-[11px] font-bold text-white">
                        ✓
                      </span>
                      <span>
                        <strong className="font-semibold text-[#0f2341]">Система опустошения</strong> — молния, завязки или клапан для удобной выгрузки
                      </span>
                    </li>
                  </ul>
                </div>

                <p>
                  Шьём нижние мешки под ваши размеры — от одной штуки, срок от 3 рабочих дней. Нужен
                  мешок для опилок на нестандартный патрубок или оборудование другого бренда — пришлите
                  фото узла крепления, поможем с замером.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white pb-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="rounded-[28px] bg-[#f4f6f8] px-8 py-10 md:px-10 md:py-12">
              <div className="max-w-[1240px]">
                <h2 className="text-[23px] font-bold leading-[1.18] text-[#0f2341] md:text-[40px]">
                  Как подобрать нижний накопительный мешок для стружкоотсоса и УВП
                </h2>

                <div className="mt-6 space-y-5 text-[15px] leading-8 text-[#334155] md:text-[16px]">
                  <p>
                    Чтобы не ошибиться с посадкой, укажите модель из таблицы (JET, PROMA, «Корвет»,
                    КОНСАР УВП-1200 / УВП-2000 и т.д.) либо пришлите диаметр горловины и высоту. Нижний
                    мешок должен плотно сидеть на патрубке — иначе стружка будет просыпаться мимо
                    накопителя.
                  </p>

                  <ul className="space-y-4">
                    <li className="flex items-start gap-4">
                      <span className="mt-[6px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#ff6b2c] text-[11px] font-bold text-white">
                        ✓
                      </span>
                      <span>
                        <strong className="font-semibold text-[#0f2341]">Диаметр горловины</strong> — должен точно совпадать с диаметром нижнего патрубка стружкоотсоса
                      </span>
                    </li>

                    <li className="flex items-start gap-4">
                      <span className="mt-[6px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#ff6b2c] text-[11px] font-bold text-white">
                        ✓
                      </span>
                      <span>
                        <strong className="font-semibold text-[#0f2341]">Высота мешка</strong> — определяет объём накопления и частоту замены
                      </span>
                    </li>

                    <li className="flex items-start gap-4">
                      <span className="mt-[6px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#ff6b2c] text-[11px] font-bold text-white">
                        ✓
                      </span>
                      <span>
                        <strong className="font-semibold text-[#0f2341]">Тип отходов</strong> — для крупной стружки нужна более плотная ткань, для мелких опилок — достаточно стандартной
                      </span>
                    </li>

                    <li className="flex items-start gap-4">
                      <span className="mt-[6px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#ff6b2c] text-[11px] font-bold text-white">
                        ✓
                      </span>
                      <span>
                        <strong className="font-semibold text-[#0f2341]">Частота замены</strong> — при интенсивной работе выбирайте мешки большего объёма
                      </span>
                    </li>
                  </ul>

                  <p>
                    Не уверены в замере — пришлите фото узла крепления или напишите марку станка: мы
                    подберём нижний мешок для аспирационной установки и подскажем, как отличить
                    накопительный мешок от фильтровального по конструкции.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white pb-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-[1280px]">
              <h2 className="text-[24px] font-bold leading-[1.18] text-[#0f2341] md:text-[42px]">
                Купить мешки для аспирации и стружкоотсоса у производителя
              </h2>

              <div className="mt-6 space-y-5 text-[15px] leading-8 text-[#334155] md:text-[16px]">
                <p>
                  FilterFlow производит мешки для систем аспирации и аспирационных установок — в том
                  числе накопительные мешки для стружкоотсосов, варианты под УВП и циклоны, пошив по
                  вашим размерам. Верхние фильтровальные мешки заказывают отдельно, если нужен полный
                  комплект к нижнему накопителю.
                </p>

                <p>
                  Доставляем заказы по всей России: Москва, Санкт-Петербург, Екатеринбург, Новосибирск, Казань, Краснодар и другие города. Работаем с юридическими и физическими лицами, предоставляем все необходимые документы.
                </p>
              </div>

              <div className="mt-9 flex justify-center">
                <a
                  href="https://wa.me/79514992576"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 rounded-full bg-[#ff6b2c] px-8 py-4 text-[17px] font-semibold text-white transition hover:bg-[#f25a18]"
                >
                  <span>Заказать нижние мешки для аспирации</span>
                  <span className="text-[20px] leading-none">→</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#ff6428] py-18 md:py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-9 text-center">
              <h2 className="mb-3 text-[24px] font-bold leading-[1.15] text-white md:text-[34px]">
                Заказать нижний мешок для стружкоотсоса и аспирации
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
                      placeholder="Например: JET DC-1100, диаметр горловины 215 мм"
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
                    <div className="text-[17px] font-bold">+7 (951) 499-25-76</div>
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
                    <div className="text-[17px] font-bold">Написать в WhatsApp</div>
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
                    <div className="text-[17px] font-bold">filterflow@mail.ru</div>
                    <div className="text-[13px] text-white/78">Пришлите размеры или фото оборудования</div>
                  </div>
                </a>

                <div className="rounded-[20px] border border-white/20 bg-[rgba(255,255,255,0.16)] p-5 text-white">
                  <h3 className="mb-3 flex items-center gap-3 text-[18px] font-bold">
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
      </main>

      <FloatingContacts />
    </>
  );
}