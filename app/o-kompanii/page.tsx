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

      <main className="mx-auto max-w-4xl px-6 py-16">

        <h1 className="mb-6 text-3xl font-bold text-[#0f172a] md:text-4xl">
          О компании FilterFlow
        </h1>

        <p className="mb-6 text-[15px] leading-relaxed text-[#475569]">
          FilterFlow — производственная компания, специализирующаяся на изготовлении фильтровальных мешков и рукавов для систем аспирации и пылеулавливания.
        </p>

        <h2 className="mb-3 text-[20px] font-semibold text-[#0f172a]">
          Что мы производим
        </h2>

        <p className="mb-6 text-[15px] leading-relaxed text-[#475569]">
          Мы изготавливаем мешки для аспирации, стружкоотсосов, циклонов и УВП, а также фильтровальные рукава для рукавных фильтров. Производство осуществляется как по стандартным размерам, так и по индивидуальным параметрам заказчика.
        </p>

        <h2 className="mb-3 text-[20px] font-semibold text-[#0f172a]">
          Где применяются
        </h2>

        <ul className="mb-6 list-disc pl-5 text-[15px] text-[#475569] space-y-2">
          <li>Деревообработка и мебельное производство</li>
          <li>Металлообработка</li>
          <li>Строительство</li>
          <li>Промышленные предприятия</li>
        </ul>

        <h2 className="mb-3 text-[20px] font-semibold text-[#0f172a]">
          Преимущества работы с нами
        </h2>

        <ul className="mb-8 list-disc pl-5 text-[15px] text-[#475569] space-y-2">
          <li>Собственное производство</li>
          <li>Изготовление под любые размеры</li>
          <li>Подбор фильтрующих материалов</li>
          <li>Быстрые сроки изготовления</li>
          <li>Доставка по России и СНГ</li>
        </ul>

        <div className="rounded-2xl bg-[#f1f5f9] p-6 text-center">
          <p className="mb-4 text-[15px] text-[#334155]">
            Нужна консультация или подбор мешков под ваше оборудование?
          </p>

          <Link
            href="/kontakty"
            className="inline-flex items-center justify-center rounded-xl bg-[#0aa79d] px-6 py-3 text-[15px] font-semibold text-white hover:bg-[#089189]"
          >
            Связаться с нами
          </Link>
        </div>

      </main>
    </>
  );
}