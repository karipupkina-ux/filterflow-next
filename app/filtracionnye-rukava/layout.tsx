import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo-metadata";

export const metadata: Metadata = pageMetadata({
  title: "Фильтровальные рукава для аспирации на заказ",
  description:
    "Пошив фильтровальных рукавов по размерам заказчика. Подбор ткани под температуру, тип пыли и условия работы оборудования, доставка по России.",
  path: "/filtracionnye-rukava",
  openGraphTitle:
    "Фильтровальные рукава для аспирационных систем и УВП. Рукавные фильтры | FilterFlow",
});

export default function FiltracionnyeRukavaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
