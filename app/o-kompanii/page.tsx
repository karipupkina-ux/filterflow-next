import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "../components/Navigation";
import { pageMetadata } from "@/lib/seo-metadata";

export const metadata: Metadata = pageMetadata({
  title: "О компании FilterFlow — производство мешков для аспирации и рукавов",
  description:
    "FilterFlow — производитель фильтровальных мешков и рукавов для аспирации, циклонов и УВП. Пошив на заказ, подбор материалов, доставка по России.",
  path: "/o-kompanii",
});

export default function OKompaniiPage() {
  return (
    <>
      <Navigation />
      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="mb-6 text-3xl font-bold text-[#0f172a] md:text-4xl">
          О компании
        </h1>
        <p className="mb-4 text-[16px] leading-relaxed text-[#475569]">
          FilterFlow занимается производством фильтровальных мешков и рукавов
          для систем аспирации и пылеулавливания: стружкоотсосы, УВП, циклоны,
          рукавные фильтры. Изготавливаем по размерам заказчика, от одной штуки
          до серий.
        </p>
        <p className="mb-8 text-[16px] leading-relaxed text-[#475569]">
          Подробная информация о производстве и условиях сотрудничества — на
          главной странице и в разделе{" "}
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
