import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "../components/Navigation";
import FloatingContacts from "../components/feature/FloatingContacts";
import CookieBanner from "../components/feature/CookieBanner";
import { pageMetadata } from "@/lib/seo-metadata";
import PortfolioPageBlocks from "./PortfolioPageBlocks";

export const metadata: Metadata = pageMetadata({
  title:
    "Портфолио фильтровальных мешков FilterFlow — выполненные проекты аспирации",
  description:
    "Портфолио FilterFlow: выполненные проекты — фильтровальные мешки и рукава на заказ, мешки для аспирации, стружкоотсоса, циклонов и УВП, рукавные фильтры и нестандартные решения. Изготовление под промышленные системы пылеулавливания.",
  path: "/portfolio",
});

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
              Портфолио FilterFlow — выполненные проекты аспирации
            </h1>

            <p className="mt-4 max-w-3xl text-[15px] leading-8 text-[#475569] md:text-[17px]">
              Более 300 реализованных проектов для промышленной аспирации и
              пылеулавливания. Изготавливаем на заказ мешки для стружкоотсоса и
              циклонов, мешки для УВП, верхние мешки-фильтры, нижние
              пылесборники, рукавные фильтры и нестандартные решения для
              предприятий по всей России и СНГ.
            </p>
          </div>
        </section>

        <PortfolioPageBlocks />
      </main>

      <CookieBanner />
    </>
  );
}