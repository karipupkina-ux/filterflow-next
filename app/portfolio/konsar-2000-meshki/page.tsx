import type { Metadata } from "next";
import PortfolioCasePage from "../../../components/PortfolioCasePage";
import { pageMetadata } from "@/lib/seo-metadata";

const PAGE_TITLE = "Мешки для КОНСАР-2000 — выполненный заказ";
const PAGE_DESCRIPTION = "Выполненный заказ FilterFlow: комплект для КОНСАР-2000 высотой 1000 мм — два нижних накопительных мешка и один верхний фильтровальный мешок без петель, с уплотнением под хомут.";
const PAGE_PATH = "/portfolio/konsar-2000-meshki";

export const metadata: Metadata = pageMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: PAGE_PATH,
});

export default function Page() {
  return (
    <PortfolioCasePage
      title={PAGE_TITLE}
      subtitle="Для установки КОНСАР-2000 изготовили комплект из двух нижних накопительных мешков и одного верхнего фильтровального мешка. Верхний мешок выполнили без петель, с уплотнением в зоне посадки под штатный хомут. Заказ был изготовлен и поставлен заказчику."
      path={PAGE_PATH}
      image="/images/nashi-raboti/meshki-struzhkootsosa.webp"
      imageAlt="Пример мешков для аспирационной установки"
      imageNote="Иллюстрация соответствующего типа изделия или материала из каталога FilterFlow; не фотография конкретного заказа."
      facts={[
  {
    "label": "Статус",
    "value": "выполненный и поставленный заказ"
  },
  {
    "label": "Оборудование",
    "value": "КОНСАР-2000"
  },
  {
    "label": "Высота",
    "value": "1000 мм"
  },
  {
    "label": "Комплектация",
    "value": "2 нижних + 1 верхний мешок"
  }
]}
      sections={[
  {
    "title": "Задача",
    "text": "Изготовить комплект мешков под существующую установку КОНСАР-2000 с сохранением фактической высоты и конструкции крепления заказчика."
  },
  {
    "title": "Что изготовили",
    "text": "Два нижних накопительных мешка и один верхний фильтровальный мешок без петель. В верхней части предусмотрено уплотнение для посадки под штатное хомутовое крепление."
  },
  {
    "title": "Результат",
    "text": "Комплект изготовлен по согласованным параметрам и поставлен заказчику. Для повторного заказа посадочный диаметр лучше подтверждать по фактическому патрубку или старому мешку."
  }
]}
      productHref="/meshki-dlya-struzhkootsosa/"
      productLabel="Мешки для стружкоотсосов"
    />
  );
}
