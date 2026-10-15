import type { Metadata } from "next";
import ClusterArticlePage from "../../components/ClusterArticlePage";
import { pageMetadata } from "@/lib/seo-metadata";

const PAGE_TITLE = "Какие фильтры нужны для покрасочной камеры";
const PAGE_DESCRIPTION = "Какие фильтры используют в покрасочной камере: потолочные, напольные Paint Stop, лабиринтные и кокосовые. Схема работы и подбор.";
const PAGE_PATH = "/blog/kakie-filtry-nuzhny-dlya-pokrasochnoj-kamery";

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
      image="/images/new-products/paint-booth-filters-hero.webp"
      imageAlt="Фильтры для покрасочной и окрасочно-сушильной камеры"
      datePublished="2026-10-15"
      dateModified="2026-10-15"
      intro="В покрасочной камере фильтры стоят на разных участках воздушного потока и решают разные задачи: очищают приток, удерживают красочный туман и защищают вытяжное оборудование. Поэтому один универсальный фильтр заменить всю систему не может."
      sections={[
  {
    "title": "Приточная ступень",
    "paragraphs": [
      "На притоке фильтры задерживают внешнюю пыль и помогают подавать в рабочую зону более чистый воздух. В финишной ступени часто применяют потолочные фильтрующие материалы, рассчитанные на равномерную подачу воздуха."
    ]
  },
  {
    "title": "Напольный фильтр Paint Stop",
    "paragraphs": [
      "Paint Stop работает на вытяжной стороне и удерживает частицы лакокрасочного тумана. Его задача — снизить нагрузку на каналы, вентилятор и последующие ступени очистки."
    ]
  },
  {
    "title": "Лабиринтные фильтры",
    "paragraphs": [
      "Картонные лабиринтные фильтры используют для улавливания красочного опыла за счёт многократного изменения направления воздушного потока. Они особенно полезны там, где образуется значительное количество лакокрасочного аэрозоля."
    ]
  },
  {
    "title": "Как выбрать комплект фильтров",
    "bullets": [
      "Уточнить схему движения воздуха",
      "Снять размеры фильтровальных секций",
      "Определить тип ЛКМ и режим окраски",
      "Проверить паспорт камеры и требования производителя",
      "Не заменять ступени фильтрации без проверки сопротивления системы"
    ]
  }
]}
      productHref="/filtry-dlya-pokrasochnyh-kamer/"
      productLabel="Фильтры для покрасочных камер"
      productText="Поставляем потолочные, напольные Paint Stop, лабиринтные и кокосово-волокнистые фильтры по размерам камеры."
      related={[
  {
    "title": "Что такое Paint Stop",
    "href": "/blog/chto-takoe-paint-stop/",
    "text": "Как работает напольный стекловолоконный фильтр."
  },
  {
    "title": "Карманный или кассетный фильтр",
    "href": "/blog/karmannyj-ili-kassetnyj-filtr/",
    "text": "Сравнение вентиляционных фильтров."
  },
  {
    "title": "Когда нужна антистатическая ткань",
    "href": "/blog/kogda-nuzhna-antistaticheskaya-tkan/",
    "text": "Отдельно о процессах с риском накопления статического заряда."
  }
]}
    />
  );
}
