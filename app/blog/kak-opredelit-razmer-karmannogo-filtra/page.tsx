import type { Metadata } from "next";
import ClusterArticlePage from "../../components/ClusterArticlePage";
import { pageMetadata } from "@/lib/seo-metadata";

const PAGE_TITLE = "Как определить размер карманного фильтра";
const PAGE_DESCRIPTION = "Как правильно снять размеры карманного фильтра: ширина, высота рамки, длина карманов, количество карманов и толщина рамки.";
const PAGE_PATH = "/blog/kak-opredelit-razmer-karmannogo-filtra";

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
      image="/images/new-products/five-pocket-filter.webp"
      imageAlt="Карманный фильтр с несколькими фильтрующими карманами"
      datePublished="2026-10-16"
      dateModified="2026-10-16"
      intro="Для изготовления карманного фильтра мало знать только ширину и высоту. В заявке лучше зафиксировать рамку, длину карманов, их количество и маркировку старого фильтра — тогда новый фильтр будет совместим с посадочным местом."
      sections={[
  {
    "title": "Какие размеры снять",
    "bullets": [
      "Ширина рамки",
      "Высота рамки",
      "Толщина рамки",
      "Длина карманов",
      "Количество карманов",
      "При наличии — расстояние между разделителями"
    ]
  },
  {
    "title": "Как не перепутать ширину и высоту",
    "paragraphs": [
      "Если установка допускает монтаж только в одном положении, ориентация имеет значение. Полезно сфотографировать фильтр так, как он установлен, и подписать размеры прямо на фото."
    ]
  },
  {
    "title": "Почему важна длина карманов",
    "paragraphs": [
      "Длина влияет на рабочую площадь и на то, поместится ли фильтр в секции. Слишком длинные карманы могут упираться в корпус, слишком короткие — отличаться по рабочей площади от штатного исполнения."
    ]
  },
  {
    "title": "Если маркировка стерлась",
    "paragraphs": [
      "Можно снять фактические размеры и прислать фото старого фильтра и посадочного места. Для замены также полезно знать назначение установки и предыдущий класс фильтрации."
    ]
  }
]}
      productHref="/karmannye-filtry/"
      productLabel="Карманные фильтры по размерам"
      productText="Изготавливаем карманные фильтры по фактическим размерам, фотографии, маркировке или ТЗ."
      related={[
  {
    "title": "Что означают G4, M5, F7 и F9",
    "href": "/blog/klassy-g4-m5-f7-f9/",
    "text": "Как читать старую маркировку воздушных фильтров."
  },
  {
    "title": "Карманный или кассетный фильтр",
    "href": "/blog/karmannyj-ili-kassetnyj-filtr/",
    "text": "Чем отличаются две распространённые конструкции."
  },
  {
    "title": "Как подобрать кассетный фильтр",
    "href": "/blog/kak-podobrat-kassetnyj-filtr/",
    "text": "Что измерить у кассетного фильтра."
  }
]}
    />
  );
}
