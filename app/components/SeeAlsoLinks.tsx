"use client";

import Link from "next/link";

const LINKS = [
  {
    href: "/verhnie-meshki",
    label: "Верхние мешки для стружкоотсоса",
  },
  {
    href: "/nizhnie-meshki",
    label: "Нижние мешки для стружкоотсоса",
  },
  {
    href: "/meshki-dlya-aspiracii",
    label: "Мешки для аспирации",
  },
  {
    href: "/meshki-dlya-ciklonov-i-uvp",
    label: "Мешки для УВП и циклонов",
  },
  {
    href: "/filtracionnye-rukava",
    label: "Фильтровальные рукава",
  },
] as const;

type SeeAlsoLinksProps = {
  /** Скрыть ссылку на текущую страницу (если она есть в списке). */
  excludeHref?: string;
  className?: string;
};

export default function SeeAlsoLinks({
  excludeHref,
  className,
}: SeeAlsoLinksProps) {
  const items = LINKS.filter((l) => l.href !== excludeHref);

  return (
    <section
      className={
        className ?? "bg-[#f8fafc] pb-16 pt-2 md:pb-20"
      }
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-[24px] border border-[#d9dee7] bg-[#f8f9fb] px-8 py-8 shadow-sm md:px-10 md:py-10">
          <h2 className="mb-6 text-[22px] font-bold leading-tight text-[#0f2341] md:text-[26px]">
            Смотрите также
          </h2>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10">
            {items.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-[15px] font-medium text-[#ff6b2c] transition hover:text-[#e4571a] hover:underline md:text-[16px]"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
