import type { Metadata } from "next";
import PortfolioCasePage from "../../components/PortfolioCasePage";
import { pageMetadata } from "@/lib/seo-metadata";

const PAGE_TITLE = "Аналог Donaldson 1A31392319 1.5M — подбор на 50 шт.";
const PAGE_DESCRIPTION = "Технический подбор аналога Donaldson ART 1A31392319 1.5M на 50 шт.: геометрия, материал Dura-Life и параметры, которые нужно подтвердить перед изготовлением.";
const PAGE_PATH = "/portfolio/donaldson-1a31392319-analog";

export const metadata: Metadata = pageMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: PAGE_PATH,
});

export default function Page() {
  return (
    <PortfolioCasePage
      title={PAGE_TITLE}
      subtitle="Заказчик запросил коммерческое предложение на 50 аналогов Donaldson ART 1A31392319 1.5M. По каталожным данным удалось определить базовую геометрию и материал оригинала, но эквивалентность российского материала требует подтверждения по условиям эксплуатации."
      path={PAGE_PATH}
      image="/images/nashi-raboti/filter_sleeves_hero.webp"
      imageAlt="Пример фильтровальных рукавов для промышленной фильтрации"
      imageNote="Иллюстрация соответствующего типа изделия или материала из каталога FilterFlow; не фотография конкретного заказа."
      facts={[
  {
    "label": "Статус",
    "value": "технический подбор аналога"
  },
  {
    "label": "Количество",
    "value": "50 шт."
  },
  {
    "label": "Референс",
    "value": "Donaldson ART 1A31392319"
  },
  {
    "label": "Длина оригинала",
    "value": "около 1,5 м"
  }
]}
      sections={[
  {
    "title": "Что определили",
    "text": "Для артикула рассматривалась плоская фильтрующая конструкция примерно 495×1506 мм в разложенном виде. В оригинале указан материал Dura-Life около 320 г/м² и толщиной около 1,6 мм."
  },
  {
    "title": "Ближайший аналог",
    "text": "В качестве близкого варианта обсуждался полиэстер около 360 г/м², но полную эквивалентность нельзя подтверждать только по плотности: важны воздухопроницаемость, структура, обработка и условия процесса."
  },
  {
    "title": "Что нужно подтвердить",
    "text": "Перед изготовлением нужны фото оригинала и каркаса, посадочная часть, модель установки, температура, влажность, тип пыли и требования по антистатике."
  }
]}
      productHref="/filtracionnye-rukava/"
      productLabel="Фильтровальные рукава"
    />
  );
}
