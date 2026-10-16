import type { Metadata } from "next";
import ClusterArticlePage from "../../components/ClusterArticlePage";
import { pageMetadata } from "@/lib/seo-metadata";

const PAGE_TITLE = "Как подобрать хомут для аспирационного шланга";
const PAGE_DESCRIPTION = "Как выбрать хомут для гибкого аспирационного шланга: наружный диаметр, диапазон зажима, тип замка, материал и способ соединения.";
const PAGE_PATH = "/blog/kak-podobrat-homut-dlya-aspiracionnogo-shlanga";

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
      image="/images/new-products/clamps-light-graphite.webp"
      imageAlt="Металлические хомуты для гибких воздуховодов и аспирационных шлангов"
      datePublished="2026-10-16"
      dateModified="2026-10-16"
      intro="Хомут подбирают не только по условному диаметру шланга. Важно знать наружный диаметр на патрубке, толщину стенки, конструкцию спирали и то, нужно ли соединение регулярно снимать."
      sections={[
  {
    "title": "Какой размер измерять",
    "paragraphs": [
      "Для выбора хомута нужен наружный диаметр шланга уже в месте установки на патрубок. Номинальный внутренний диаметр шланга и нужный диапазон хомута — не всегда одно и то же."
    ]
  },
  {
    "title": "Червячный или быстросъёмный",
    "paragraphs": [
      "Червячный хомут удобен для постоянного соединения и плавной регулировки. Быстросъёмное исполнение полезно там, где узел нужно регулярно открывать для обслуживания или смены оборудования."
    ]
  },
  {
    "title": "Что учитывать кроме диаметра",
    "bullets": [
      "Толщину и жёсткость стенки шланга",
      "Наличие армирующей спирали",
      "Материал патрубка",
      "Влажность и коррозионность среды",
      "Нужно ли частое снятие соединения"
    ]
  },
  {
    "title": "Как избежать повреждения шланга",
    "paragraphs": [
      "Хомут должен фиксировать соединение без локального пережатия и прорезания материала. Для мягких или тонкостенных шлангов особенно важно правильно подобрать ширину ленты и усилие затяжки."
    ]
  }
]}
      productHref="/bystrosemnye-homyty/"
      productLabel="Хомуты для аспирации и воздуховодов"
      productText="Подберём стяжной, червячный или быстросъёмный хомут под фактический диаметр соединения."
      related={[
  {
    "title": "ПВХ или PUR воздуховод",
    "href": "/blog/pvh-ili-pur-vozduhovod/",
    "text": "Как выбрать материал гибкого шланга."
  },
  {
    "title": "Как подобрать диаметр воздуховода",
    "href": "/blog/kak-podobrat-diametr-vozduhovoda-aspiracii/",
    "text": "Подбор проходного сечения системы."
  },
  {
    "title": "Как работает система аспирации",
    "href": "/blog/kak-rabotaet-aspiraciya/",
    "text": "Где воздуховоды и крепления находятся в системе."
  }
]}
    />
  );
}
