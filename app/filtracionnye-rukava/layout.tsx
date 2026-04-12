import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo-metadata";

export const metadata: Metadata = pageMetadata({
  title:
    "Фильтровальные рукава для аспирационных систем и УВП. Рукавные фильтры",
  description:
    "Пошив фильтровальных рукавов на заказ: рукавные фильтры для аспирации, полиэстер (PES), Nomex, стекловолокно; подбор под АБЗ и горячие газы. Промышленная фильтрация пылевых частиц, очистка промышленных газов. FilterFlow — доставка по России.",
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
