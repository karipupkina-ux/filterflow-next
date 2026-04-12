import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "../../components/Navigation";
import { pageMetadata } from "@/lib/seo-metadata";

export const metadata: Metadata = pageMetadata({
  title: "Когда менять фильтровальный мешок: признаки износа | FilterFlow",
  description:
    "Признаки износа фильтровального мешка: рост перепада давления, пыль на выходе, повреждения ткани. Как продлить срок службы и когда заказывать замену.",
  path: "/blog/kogda-menyat-filtr-meshok",
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
            Когда менять фильтровальный мешок
          </h1>
          <div className="mt-8 space-y-4 text-[16px] leading-relaxed text-[#334155]">
            <p>
              Замена нужна при росте сопротивления фильтра (вентилятор
              «тяжелеет»), видимой пыли на чистой стороне, разрывах швов или
              жёсткой отбивании ткани после регенерации. Срок службы зависит от
              абразива пыли, температуры и режима продувки.
            </p>
            <p>
              Регулярная проверка креплений и своевременная замена дешевле
              простоя линии и износа вентилятора. Подберём аналог или улучшенный
              материал под ваши условия.
            </p>
            <p>
              Заказать мешки:{" "}
              <Link href="/kontakty" className="font-medium text-[#ff6b2c] hover:underline">
                контакты FilterFlow
              </Link>
              .
            </p>
          </div>
        </article>
      </main>
    </>
  );
}
