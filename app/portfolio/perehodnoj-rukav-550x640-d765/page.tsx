import type { Metadata } from "next";
import PortfolioCasePage from "../../components/PortfolioCasePage";
import { pageMetadata } from "@/lib/seo-metadata";

const PAGE_TITLE = "Переходной рукав 550×640 → Ø765 мм по чертежу";
const PAGE_DESCRIPTION = "Нестандартная конструкция FilterFlow: переход от прямоугольного сечения 550×640 мм к круглому Ø765 мм, длина 1140 мм, юбка 40 мм с двух сторон.";
const PAGE_PATH = "/portfolio/perehodnoj-rukav-550x640-d765";

export const metadata: Metadata = pageMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: PAGE_PATH,
});

export default function Page() {
  return (
    <PortfolioCasePage
      title={PAGE_TITLE}
      subtitle="Для нестандартного соединения была согласована конструкция переходного тканевого рукава: прямоугольное сечение с одной стороны и круглое с другой. Такой элемент изготавливается только по фактической геометрии узла."
      path={PAGE_PATH}
      image="/images/nashi-raboti/nestandartnye-meshki.webp"
      imageAlt="Пример нестандартного фильтровального изделия по размерам"
      imageNote="Иллюстрация соответствующего типа изделия или материала из каталога FilterFlow; не фотография конкретного заказа."
      facts={[
  {
    "label": "Статус",
    "value": "согласованный чертёж и конструкция"
  },
  {
    "label": "Прямоугольная сторона",
    "value": "550 × 640 мм"
  },
  {
    "label": "Круглая сторона",
    "value": "Ø765 мм"
  },
  {
    "label": "Длина",
    "value": "1140 мм; юбки по 40 мм"
  }
]}
      sections={[
  {
    "title": "Задача",
    "text": "Соединить два узла разной геометрии одним гибким изделием, сохранив заданные присоединительные размеры."
  },
  {
    "title": "Конструкция",
    "text": "Переход построен от прямоугольного сечения 550×640 мм к круглому Ø765 мм. По обоим концам предусмотрены юбки по 40 мм для крепления."
  },
  {
    "title": "Почему нужен чертёж",
    "text": "Для таких изделий важно заранее зафиксировать ориентацию, длину, размеры обоих сечений и способ крепления. Стандартного типоразмера для подобного перехода нет."
  }
]}
      productHref="/nestandartnye-meshki-dlya-filtracii/"
      productLabel="Нестандартные изделия"
    />
  );
}
