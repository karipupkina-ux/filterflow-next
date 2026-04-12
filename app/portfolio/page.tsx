import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "../components/Navigation";
import { pageMetadata } from "@/lib/seo-metadata";

export const metadata: Metadata = pageMetadata({
  title: "Портфолио FilterFlow — примеры фильтровальных мешков и рукавов",
  description:
    "Реализованные проекты FilterFlow: мешки для аспирации, рукавные фильтры, решения для циклонов и УВП.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <Navigation />

      <main className="mx-auto max-w-4xl px-6 py-16">

        <h1 className="mb-6 text-3xl font-bold text-[#0f172a] md:text-4xl">
          Портфолио FilterFlow
        </h1>

        <p className="mb-6 text-[15px] leading-relaxed text-[#475569]">
          В данном разделе представлены примеры выполненных заказов по производству фильтровальных мешков и рукавов для систем аспирации и пылеулавливания.
        </p>

        <h2 className="mb-3 text-[20px] font-semibold text-[#0f172a]">
          Что мы делаем
        </h2>

        <ul className="mb-6 list-disc pl-5 text-[15px] text-[#475569] space-y-2">
          <li>Пошив мешков для аспирации</li>
          <li>Изготовление мешков для стружкоотсосов</li>
          <li>Фильтровальные рукава</li>
          <li>Нестандартные решения под оборудование</li>
        </ul>

        <p className="mb-8 text-[15px] text-[#475569]">
          Раздел находится в процессе наполнения. Для получения примеров под вашу задачу — свяжитесь с нами.
        </p>

        <div className="rounded-2xl bg-[#f1f5f9] p-6 text-center">
          <p className="mb-4 text-[15px] text-[#334155]">
            Нужны примеры или расчет под ваше оборудование?
          </p>

          <Link
            href="/kontakty"
            className="inline-flex items-center justify-center rounded-xl bg-[#0aa79d] px-6 py-3 text-[15px] font-semibold text-white hover:bg-[#089189]"
          >
            Запросить примеры
          </Link>
        </div>

      </main>
    </>
  );
}