import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "../components/Navigation";
import BreadcrumbJsonLd from "../components/BreadcrumbJsonLd";
import FloatingContacts from "../components/feature/FloatingContacts";
import { pageMetadata } from "@/lib/seo-metadata";
import PortfolioPageBlocks from "./PortfolioPageBlocks";

export const metadata: Metadata = pageMetadata({
  title: "Портфолио фильтровальных мешков и рукавов",
  description:
    "Кейсы FilterFlow: выполненные заказы, технические подборы и нестандартные фильтровальные изделия для аспирации, рукавных фильтров и промышленной вентиляции.",
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
      <BreadcrumbJsonLd currentName="Портфолио" currentPath="/portfolio/" />
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
              Портфолио FilterFlow: реальные кейсы подбора и изготовления
            </h1>

            <p className="mt-4 max-w-3xl text-[15px] leading-8 text-[#475569] md:text-[17px]">
              В портфолио собраны реальные задачи из работы FilterFlow:
              выполненные заказы, технические подборы, нестандартные изделия по
              размерам и чертежам, а также примеры продукции для аспирации,
              рукавной фильтрации и промышленной вентиляции.
            </p>

            <h2 className="mt-6 max-w-3xl text-[20px] font-semibold leading-[1.3] text-[#0f172a] md:text-[26px]">
              Кейсы по аспирации, фильтровальным изделиям и нестандартным задачам
            </h2>
            <h3 className="mt-3 max-w-3xl text-[16px] font-semibold leading-[1.45] text-[#334155] md:text-[18px]">
              Для каждого кейса указываем фактический статус: выполненный заказ,
              технический подбор, расчёт или согласованная конструкция
            </h3>
          </div>
        </section>

        <PortfolioPageBlocks />
      </main>
    </>
  );
}
