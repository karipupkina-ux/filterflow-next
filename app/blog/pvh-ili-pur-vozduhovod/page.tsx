import type { Metadata } from "next";
import ClusterArticlePage from "../../components/ClusterArticlePage";
import { pageMetadata } from "@/lib/seo-metadata";

const PAGE_TITLE = "ПВХ или PUR воздуховод для аспирации: что выбрать";
const PAGE_DESCRIPTION = "Сравнение ПВХ и PUR гибких воздуховодов для аспирации: износ, гибкость, абразивность стружки, условия эксплуатации и подбор шланга.";
const PAGE_PATH = "/blog/pvh-ili-pur-vozduhovod";

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
      image="/images/new-products/flexible-hoses.webp"
      imageAlt="Гибкие ПВХ и полиуретановые воздуховоды для аспирации"
      datePublished="2026-10-16"
      dateModified="2026-10-16"
      intro="ПВХ и полиуретановые воздуховоды внешне могут быть похожи, но по-разному ведут себя при абразивной нагрузке, изгибах и длительной транспортировке стружки. Выбор зависит от того, что именно движется по трассе и как эксплуатируется система."
      sections={[
  {
    "title": "Когда рассматривают ПВХ",
    "paragraphs": [
      "ПВХ-воздуховоды часто используют для вентиляции и менее абразивных задач аспирации. Конкретная пригодность зависит от толщины стенки, армирования и характеристик конкретной модели."
    ]
  },
  {
    "title": "Когда рассматривают PUR",
    "paragraphs": [
      "Полиуретановые шланги часто выбирают при более выраженной абразивной нагрузке, например при транспортировке стружки и частиц, которые интенсивно изнашивают стенку. Но ресурс всё равно зависит от скорости потока и режима работы."
    ]
  },
  {
    "title": "Какие параметры сравнить",
    "bullets": [
      "Диаметр",
      "Толщина стенки",
      "Радиус изгиба",
      "Стойкость к истиранию",
      "Рабочая температура",
      "Требования к антистатике",
      "Тип транспортируемого материала"
    ]
  },
  {
    "title": "Что важнее материала",
    "paragraphs": [
      "Даже хороший шланг будет работать плохо при неверном диаметре, большом количестве резких поворотов или чрезмерной длине. Материал выбирают вместе с геометрией трассы."
    ]
  }
]}
      productHref="/vozduhovody-dlya-aspiracii/"
      productLabel="Гибкие воздуховоды для аспирации"
      productText="Подберём материал, диаметр и исполнение шланга под пыль, стружку, длину трассы и условия работы."
      related={[
  {
    "title": "Как подобрать диаметр воздуховода",
    "href": "/blog/kak-podobrat-diametr-vozduhovoda-aspiracii/",
    "text": "Почему диаметр влияет на скорость и сопротивление."
  },
  {
    "title": "Как подобрать хомут для аспирационного шланга",
    "href": "/blog/kak-podobrat-homut-dlya-aspiracionnogo-shlanga/",
    "text": "Крепление гибкого воздуховода к патрубку."
  },
  {
    "title": "Как работает система аспирации",
    "href": "/blog/kak-rabotaet-aspiraciya/",
    "text": "Принцип работы всей системы."
  }
]}
    />
  );
}
