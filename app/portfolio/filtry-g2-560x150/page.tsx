import type { Metadata } from "next";
import PortfolioCasePage from "../../components/PortfolioCasePage";
import { pageMetadata } from "@/lib/seo-metadata";

const PAGE_TITLE = "Фильтры G2 560×150 мм — пробный расчёт на 2 шт.";
const PAGE_DESCRIPTION = "Запрос FilterFlow: два пробных многоразовых фильтра G2 размером 560×150 мм из нетканого полиэстера 400 г/м² с креплением хомутом.";
const PAGE_PATH = "/portfolio/filtry-g2-560x150";

export const metadata: Metadata = pageMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: PAGE_PATH,
});

export default function Page() {
  return (
    <PortfolioCasePage
      title={PAGE_TITLE}
      subtitle="Для действующей установки требовались два пробных многоразовых фильтра размером 560×150 мм для строительной пыли. В исходных требованиях — класс G2, нетканый полиэстер 400 г/м² и крепление хомутом."
      path={PAGE_PATH}
      image="/images/nashi-raboti/filter_bag_white.webp"
      imageAlt="Пример фильтровального изделия из белого полиэстера"
      imageNote="Иллюстрация соответствующего типа изделия или материала из каталога FilterFlow; не фотография конкретного заказа."
      facts={[
  {
    "label": "Статус",
    "value": "запрос и расчёт пробной партии"
  },
  {
    "label": "Размер",
    "value": "560 × 150 мм"
  },
  {
    "label": "Количество",
    "value": "2 шт."
  },
  {
    "label": "Материал",
    "value": "нетканый полиэстер 400 г/м²"
  }
]}
      sections={[
  {
    "title": "Задача",
    "text": "Подготовить пробную партию для проверки посадки и работы фильтра на действующей установке со строительной пылью."
  },
  {
    "title": "Варианты исполнения",
    "text": "Обсуждались варианты с круглым и прямоугольным дном. Для расчёта также учитывалось крепление хомутом."
  },
  {
    "title": "Почему пробная партия полезна",
    "text": "Для нестандартной геометрии небольшая тестовая партия позволяет сначала проверить посадку и удобство обслуживания, а уже затем увеличивать количество."
  }
]}
      productHref="/nestandartnye-meshki-dlya-filtracii/"
      productLabel="Фильтры по размерам"
    />
  );
}
