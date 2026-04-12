import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "../components/Navigation";
import { pageMetadata } from "@/lib/seo-metadata";

export const metadata: Metadata = pageMetadata({
  title: "Портфолио FilterFlow — примеры фильтровальных мешков и рукавов",
  description:
    "Реализованные проекты FilterFlow: мешки для аспирации, рукавные фильтры, решения для циклонов и УВП. Производство под заказ, доставка по России.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <Navigation />
      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="mb-6 text-3xl font-bold text-[#0f172a] md:text-4xl">
          Портфолио
        </h1>
        <p className="mb-4 text-[16px] leading-relaxed text-[#475569]">
          Здесь будет галерея выполненных работ: фильтровальные мешки,
          рукава и узлы под аспирацию. Раздел обновляется — пока вы можете
          посмотреть каталог продукции и примеры на главной странице.
        </p>
        <p className="mb-8 text-[16px] leading-relaxed text-[#475569]">
          Нужны фото или референсы под ваш тип оборудования — напишите нам в{" "}
          <Link href="/kontakty" className="font-medium text-[#0aa79d] hover:underline">
            контакты
          </Link>
          .
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-xl bg-[#ff6b2c] px-6 py-3 text-[15px] font-semibold text-white transition hover:bg-[#e85e24]"
        >
          На главную
        </Link>
      </main>
    </>
  );
}
