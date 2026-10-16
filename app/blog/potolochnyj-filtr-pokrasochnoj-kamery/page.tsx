import type { Metadata } from "next";
import ClusterArticlePage from "../../components/ClusterArticlePage";
import { pageMetadata } from "@/lib/seo-metadata";

const PAGE_TITLE = "Потолочный фильтр для покрасочной камеры: как подобрать";
const PAGE_DESCRIPTION = "Как подобрать потолочный фильтр для покрасочной камеры: размеры, толщина, направление воздушного потока, класс фильтрации и замена материала.";
const PAGE_PATH = "/blog/potolochnyj-filtr-pokrasochnoj-kamery";

export const metadata: Metadata = pageMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: PAGE_PATH,
});

export default function Page() {
  return (
    <ClusterArticlePage
      title={PAGE_TITLE}
      description={PAGE_DESCRIPTION}
      path={PAGE_PATH}
      image="/images/new-products/ceiling-filter-f5.webp"
      imageAlt="Потолочный фильтрующий материал для покрасочной камеры"
      datePublished="2026-10-16"
      dateModified="2026-10-16"
      intro="Потолочный фильтр работает на притоке и помогает подавать в рабочую зону очищенный воздух. При замене важно сохранить не только размер полотна, но и характеристики материала, предусмотренные конструкцией камеры."
      sections={[
  {
    "title": "Где находится потолочный фильтр",
    "paragraphs": [
      "Он располагается в верхней приточной зоне камеры перед рабочим пространством. Конкретная схема зависит от модели окрасочно-сушильной камеры и состава приточной системы."
    ]
  },
  {
    "title": "Какие параметры нужны",
    "bullets": [
      "Ширина и длина полотна или секции",
      "Толщина материала",
      "Маркировка старого фильтра",
      "Модель камеры",
      "Направление воздушного потока, если указано производителем"
    ]
  },
  {
    "title": "Почему нельзя выбирать только по названию F5",
    "paragraphs": [
      "На старых материалах часто встречается маркировка F5 или M5, но для замены нужно учитывать и фактические характеристики полотна. Похожие по виду материалы могут давать разное сопротивление и эффективность."
    ]
  },
  {
    "title": "Когда менять",
    "paragraphs": [
      "Ориентируются на регламент камеры, состояние материала и изменение сопротивления/воздушного потока. Универсального срока для всех камер нет."
    ]
  }
]}
      productHref="/filtry-dlya-pokrasochnyh-kamer/"
      productLabel="Потолочные фильтры для покрасочных камер"
      productText="Подберём потолочный фильтрующий материал по размерам, маркировке и модели камеры."
      related={[
  {
    "title": "Какие фильтры нужны для покрасочной камеры",
    "href": "/blog/kakie-filtry-nuzhny-dlya-pokrasochnoj-kamery/",
    "text": "Общая схема фильтрации окрасочной камеры."
  },
  {
    "title": "Paint Stop: что это",
    "href": "/blog/chto-takoe-paint-stop/",
    "text": "Фильтр для вытяжной части камеры."
  },
  {
    "title": "Лабиринтный фильтр Andreae",
    "href": "/blog/labirintnyj-filtr-andreae/",
    "text": "Как работает картонный фильтр красочного тумана."
  }
]}
    />
  );
}
