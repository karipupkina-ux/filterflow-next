import type { Metadata } from "next";
import ClusterArticlePage from "../../components/ClusterArticlePage";
import { pageMetadata } from "@/lib/seo-metadata";

const PAGE_TITLE = "Лабиринтный фильтр Andreae: принцип работы и подбор";
const PAGE_DESCRIPTION = "Что такое картонный лабиринтный фильтр Andreae для покрасочной камеры, как он улавливает красочный туман и какие размеры нужны для заказа.";
const PAGE_PATH = "/blog/labirintnyj-filtr-andreae";

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
      image="/images/new-products/labyrinth-filter-andreae.webp"
      imageAlt="Картонный лабиринтный фильтр типа Andreae для покрасочной камеры"
      datePublished="2026-10-16"
      dateModified="2026-10-16"
      intro="Лабиринтный картонный фильтр применяют на вытяжке для улавливания лакокрасочного опыла. Его работа основана на многократном изменении направления потока: более тяжёлые частицы по инерции оседают внутри каналов."
      sections={[
  {
    "title": "Как работает лабиринтная конструкция",
    "paragraphs": [
      "Воздух проходит через систему смещённых отверстий и несколько раз меняет направление. Частицы красочного тумана из-за инерции сталкиваются со стенками фильтра и остаются внутри, а поток проходит дальше."
    ]
  },
  {
    "title": "Где применяется",
    "paragraphs": [
      "Такое решение используют в сухих окрасочных камерах и вытяжных секциях, рассчитанных на картонные фильтры. Совместимость зависит от конструкции конкретной камеры."
    ]
  },
  {
    "title": "Что нужно для заказа",
    "bullets": [
      "Ширина и высота секции",
      "Нужный формат: лист, гармошка или рулонное исполнение",
      "Фото установленного фильтра",
      "Модель камеры",
      "Количество"
    ]
  },
  {
    "title": "Когда менять",
    "paragraphs": [
      "Замена нужна по мере накопления красочного опыла и роста сопротивления. Ориентируются на фактическую загрузку и требования производителя камеры."
    ]
  }
]}
      productHref="/filtry-dlya-pokrasochnyh-kamer/"
      productLabel="Лабиринтные фильтры для покрасочных камер"
      productText="Поставляем картонные лабиринтные фильтры и помогаем подобрать исполнение по секции камеры."
      related={[
  {
    "title": "Потолочный фильтр для покрасочной камеры",
    "href": "/blog/potolochnyj-filtr-pokrasochnoj-kamery/",
    "text": "Подбор приточной ступени."
  },
  {
    "title": "Paint Stop: что это",
    "href": "/blog/chto-takoe-paint-stop/",
    "text": "Как работает стекловолоконный материал."
  },
  {
    "title": "Кокосовый фильтр для покрасочной камеры",
    "href": "/blog/kokosovyj-filtr-pokrasochnoj-kamery/",
    "text": "Где используется волокнистый фильтр."
  }
]}
    />
  );
}
