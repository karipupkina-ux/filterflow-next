import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "../../components/Navigation";
import { pageMetadata } from "@/lib/seo-metadata";

export const metadata: Metadata = pageMetadata({
  title: "Как работает система аспирации и пылеудаления | FilterFlow",
  description:
    "Принцип работы аспирации на станках и линиях: воздушный поток, циклон, рукавный фильтр и мешки. Зачем нужны верхний и нижний мешки и рукавные фильтры.",
  path: "/blog/kak-rabotaet-aspiraciya",
});

export default function Page() {
  return (
    <>
      <Navigation />
      <main className="bg-[#f8fafc] pb-20 pt-[118px]">
        <article className="mx-auto max-w-3xl px-6">
          <Link
            href="/blog"
            className="text-[14px] font-medium text-[#0aa79d] hover:underline"
          >
            ← Все статьи
          </Link>
          <h1 className="mt-4 text-3xl font-bold leading-tight text-[#0f172a] md:text-4xl">
            Как работает система аспирации
          </h1>
          <div className="mt-8 space-y-4 text-[16px] leading-relaxed text-[#334155]">
            <p>
              Аспирация отсасывает воздух с зоны обработки, уносит пыль и
              стружку по воздуховоду. На пути стоят пылеуловители: циклон,
              рукавный фильтр или пара «верхний + нижний» мешок на
              стружкоотсосе. Верхний мешок удерживает мелкую пыль, нижний —
              крупную фракцию и объём отходов.
            </p>
            <p>
              Стабильная тяга и срок службы фильтров зависят от подбора ткани,
              герметичности крепления и своевременной замены элементов. Мы
              помогаем согласовать мешки и рукава с вашей схемой оборудования.
            </p>
            <p>
              <Link
                href="/filtracionnye-rukava"
                className="font-medium text-[#ff6b2c] hover:underline"
              >
                Фильтровальные рукава
              </Link>{" "}
              и{" "}
              <Link
                href="/meshki-dlya-aspiracii"
                className="font-medium text-[#ff6b2c] hover:underline"
              >
                мешки для аспирации
              </Link>{" "}
              — в каталоге FilterFlow.
            </p>
          </div>
        </article>
      </main>
    </>
  );
}
