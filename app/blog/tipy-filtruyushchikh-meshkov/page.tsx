import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "../../components/Navigation";
import { pageMetadata } from "@/lib/seo-metadata";

export const metadata: Metadata = pageMetadata({
  title:
    "Типы фильтровальных мешков: верхние, нижние, для циклонов и УВП | FilterFlow",
  description:
    "Обзор типов фильтровальных мешков для аспирации: верхний и нижний мешок, рукавные фильтры, решения для циклонов и УВП. Как не перепутать назначение.",
  path: "/blog/tipy-filtruyushchikh-meshkov",
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
            Типы фильтровальных мешков
          </h1>
          <div className="mt-8 space-y-4 text-[16px] leading-relaxed text-[#334155]">
            <p>
              <strong className="text-[#0f172a]">Верхний мешок</strong> — тонкая
              фильтрация, удержание мелкой пыли.{" "}
              <strong className="text-[#0f172a]">Нижний</strong> — накопитель
              крупной стружки и опилок. На циклонах и УВП используют мешки под
              конкретную посадку и объём; на рукавных фильтрах — рукава с
              регенерацией.
            </p>
            <p>
              Путать тип нельзя: от этого зависит и ткань, и крепление. Мы шьём
              под размеры вашего оборудования и подбираем материал по пыли и
              температуре.
            </p>
            <p>
              <Link href="/verhnie-meshki" className="font-medium text-[#ff6b2c] hover:underline">
                Верхние мешки
              </Link>
              ,{" "}
              <Link href="/nizhnie-meshki" className="font-medium text-[#ff6b2c] hover:underline">
                нижние мешки
              </Link>
              ,{" "}
              <Link
                href="/meshki-dlya-ciklonov-i-uvp"
                className="font-medium text-[#ff6b2c] hover:underline"
              >
                мешки для циклонов и УВП
              </Link>
              .
            </p>
          </div>
        </article>
      </main>
    </>
  );
}
