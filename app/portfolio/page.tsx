import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "../components/Navigation";
import FloatingContacts from "../components/feature/FloatingContacts";
import CookieBanner from "../components/feature/CookieBanner";
import { pageMetadata } from "@/lib/seo-metadata";
import PortfolioPageBlocks from "./PortfolioPageBlocks";

export const metadata: Metadata = pageMetadata({
  title:
    "Портфолио FilterFlow — выполненные проекты аспирации и фильтровальных мешков на заказ",
  description:
    "Портфолио FilterFlow: выполненные проекты аспирации для промышленных предприятий. Изготовление фильтровальных мешков и рукавов на заказ, решения для стружкоотсоса, циклонов, УВП и рукавных фильтров под задачи пылеулавливания.",
  path: "/portfolio",
});

metadata.keywords = [
  "портфолио FilterFlow",
  "портфолио фильтровальных мешков",
  "выполненные проекты аспирации",
  "выполненные работы для промышленных предприятий",
  "примеры выполненных работ",
  "реализованные проекты FilterFlow",
  "производство фильтровальных мешков",
  "изготовление фильтровальных рукавов",
  "фильтровальные мешки на заказ",
  "фильтровальные рукава на заказ",
  "мешки для аспирации",
  "мешки для стружкоотсоса",
  "мешки для циклонов",
  "мешки для УВП",
  "рукавные фильтры",
  "антистатические фильтры",
  "фильтры по размерам",
  "решения для пылеулавливания",
];

export default function PortfolioPage() {
  return (
    <>
      <Navigation />
      <FloatingContacts />

      <main className="bg-[#f8fafc] pt-[118px] md:pt-[124px]">
        <section className="border-b border-slate-200 bg-[#f8fafc]">
          <div className="mx-auto max-w-7xl px-6 py-10 md:px-8 md:py-12">
            <div className="mb-5 text-[13px] text-slate-500">
              <Link href="/" className="transition hover:text-[#0aa79d]">
                Главная
              </Link>
              <span className="mx-2">›</span>
              <span className="text-slate-700">Портфолио</span>
            </div>

            <h1 className="max-w-4xl text-[36px] font-bold leading-[1.05] text-[#0f172a] md:text-[56px]">
              Портфолио FilterFlow: выполненные проекты аспирации и фильтровальных
              мешков на заказ
            </h1>

            <p className="mt-4 max-w-3xl text-[15px] leading-8 text-[#475569] md:text-[17px]">
              Более 300 реализованных проектов для промышленной аспирации и
              пылеулавливания. В портфолио собраны примеры выполненных работ:
              мешки для стружкоотсоса, циклонов и УВП, фильтровальные рукава на
              заказ, верхние мешки-фильтры, нижние пылесборники и нестандартные
              решения под конкретные условия производства.
            </p>

            <h2 className="mt-6 max-w-3xl text-[20px] font-semibold leading-[1.3] text-[#0f172a] md:text-[26px]">
              Какие проекты и решения представлены в портфолио фильтровальных
              мешков
            </h2>
            <h3 className="mt-3 max-w-3xl text-[16px] font-semibold leading-[1.45] text-[#334155] md:text-[18px]">
              Выполненные работы для деревообработки, металлообработки и пищевых
              производств с индивидуальным подбором фильтров по размерам
            </h3>
          </div>
        </section>

        <PortfolioPageBlocks />
      </main>

      <CookieBanner />
    </>
  );
}