import type { Metadata } from "next";
import ClusterArticlePage from "../../components/ClusterArticlePage";
import { pageMetadata } from "@/lib/seo-metadata";

const PAGE_TITLE = "Как подобрать кассетный фильтр для вентиляции";
const PAGE_DESCRIPTION = "Как подобрать кассетный воздушный фильтр: ширина, высота, толщина рамки, материал, маркировка, класс фильтрации и посадочное место.";
const PAGE_PATH = "/blog/kak-podobrat-kassetnyj-filtr";

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
      image="/images/new-products/cassette-filters-pair.webp"
      imageAlt="Кассетные воздушные фильтры в жёсткой рамке"
      datePublished="2026-10-16"
      dateModified="2026-10-16"
      intro="Кассетный фильтр подбирают прежде всего по посадочному месту и требованиям вентиляционной установки. Внешне похожие кассеты могут отличаться толщиной, материалом, складчатостью и рабочими характеристиками."
      sections={[
  {
    "title": "Основные размеры",
    "bullets": [
      "Ширина рамки",
      "Высота рамки",
      "Толщина фильтра",
      "Толщина и материал рамки",
      "Направление установки, если оно задано"
    ]
  },
  {
    "title": "Какие данные кроме размеров нужны",
    "paragraphs": [
      "Для замены полезно передать маркировку старой кассеты, назначение установки и требования по эффективности. Одного размера недостаточно, если в одной рамке могут использоваться разные фильтрующие материалы."
    ]
  },
  {
    "title": "Почему нельзя увеличивать толщину без проверки",
    "paragraphs": [
      "Более глубокая кассета может физически не войти в секцию или мешать соседним элементам. Любое изменение конструкции лучше сверять с доступным монтажным пространством."
    ]
  },
  {
    "title": "Что делать при нестандартном размере",
    "paragraphs": [
      "Если штатный типоразмер не подходит, кассету можно изготовить по фактической ширине, высоте и толщине посадочного места. Фото направляющих помогает исключить ошибку в размере рамки."
    ]
  }
]}
      productHref="/kassetnye-filtry/"
      productLabel="Кассетные воздушные фильтры"
      productText="Изготавливаем стандартные и нестандартные кассетные фильтры по размерам и требованиям оборудования."
      related={[
  {
    "title": "Что означают G4, M5, F7 и F9",
    "href": "/blog/klassy-g4-m5-f7-f9/",
    "text": "Как работать со старой маркировкой."
  },
  {
    "title": "Как определить размер карманного фильтра",
    "href": "/blog/kak-opredelit-razmer-karmannogo-filtra/",
    "text": "Размеры для карманной конструкции."
  },
  {
    "title": "Карманный или кассетный фильтр",
    "href": "/blog/karmannyj-ili-kassetnyj-filtr/",
    "text": "Сравнение двух типов фильтров."
  }
]}
    />
  );
}
