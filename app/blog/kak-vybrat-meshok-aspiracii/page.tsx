import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "../../components/Navigation";
import { pageMetadata } from "@/lib/seo-metadata";

export const metadata: Metadata = pageMetadata({
  title:
    "Как выбрать мешок для аспирации: материалы, размеры и крепление | FilterFlow",
  description:
    "Как подобрать фильтровальный мешок под аспирацию: полиэстер и полипропилен, диаметр и высота, хомутовое и фланцевое крепление. Советы производителя FilterFlow.",
  path: "/blog/kak-vybrat-meshok-aspiracii",
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
            Как выбрать мешок для аспирации
          </h1>
          <div className="prose prose-slate mt-8 max-w-none space-y-4 text-[16px] leading-relaxed text-[#334155]">
            <p>
              Правильный фильтровальный мешок зависит от типа пыли, температуры
              воздуха и геометрии патрубка. Для древесной пыли чаще всего
              подходит полиэстер с нужной плотностью ткани; для влажных или
              химически активных сред — полипропилен или специальные составы.
            </p>
            <p>
              Укажите диаметр горловины, высоту мешка и схему крепления
              (хомут, кольцо, фланец). Если есть только модель станка или УВП —
              пришлите фото или чертёж: мы подберем размер и материал под вашу
              аспирационную систему.
            </p>
            <p>
              <Link href="/meshki-dlya-aspiracii" className="font-medium text-[#ff6b2c] hover:underline">
                Каталог мешков для аспирации FilterFlow
              </Link>
              — изготовление от одной штуки, доставка по России.
            </p>
          </div>
        </article>
      </main>
    </>
  );
}
