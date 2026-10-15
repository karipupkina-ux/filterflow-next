import type { Metadata } from "next";
import ClusterArticlePage from "../../components/ClusterArticlePage";
import { pageMetadata } from "@/lib/seo-metadata";

const PAGE_TITLE = "Paint Stop: что это и где используется";
const PAGE_DESCRIPTION = "Что такое Paint Stop, как работает стекловолоконный напольный фильтр для покрасочной камеры, где его устанавливают и когда менять.";
const PAGE_PATH = "/blog/chto-takoe-paint-stop";

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
      image="/images/new-products/floor-filter-paint-stop.webp"
      imageAlt="Напольный фильтр Paint Stop для покрасочной камеры"
      datePublished="2026-10-15"
      dateModified="2026-10-15"
      intro="Paint Stop — распространённый фильтрующий материал для вытяжной части покрасочных камер. Он улавливает частицы красочного тумана до того, как они попадут в воздуховоды и вентилятор."
      sections={[
  {
    "title": "Как работает Paint Stop",
    "paragraphs": [
      "Материал имеет объёмную структуру из стекловолокна. Частицы краски оседают внутри по мере прохождения воздушного потока, а не только на поверхности. За счёт этого фильтр способен накапливать значительное количество опыла."
    ]
  },
  {
    "title": "Где его устанавливают",
    "paragraphs": [
      "Чаще всего Paint Stop располагают в полу, стене или другой вытяжной секции покрасочной камеры. Точная схема зависит от конструкции камеры и направления движения воздуха."
    ]
  },
  {
    "title": "Как понять, что фильтр пора менять",
    "bullets": [
      "Заметно выросло сопротивление вытяжки",
      "Снизилась скорость воздушного потока",
      "Материал сильно насыщен краской",
      "Появились загрязнения на последующих элементах системы",
      "Наступил срок обслуживания по регламенту камеры"
    ]
  },
  {
    "title": "Почему нельзя ориентироваться только на цвет",
    "paragraphs": [
      "Внешний вид не всегда показывает реальную загрузку материала. Решение о замене лучше принимать по сопротивлению, состоянию системы и регламенту оборудования."
    ]
  }
]}
      productHref="/filtry-dlya-pokrasochnyh-kamer/"
      productLabel="Напольные фильтры Paint Stop"
      productText="Подберём рулонный материал или нарезку по размерам вашей покрасочной камеры."
      related={[
  {
    "title": "Какие фильтры нужны для покрасочной камеры",
    "href": "/blog/kakie-filtry-nuzhny-dlya-pokrasochnoj-kamery/",
    "text": "Полная схема фильтрации окрасочной камеры."
  },
  {
    "title": "Карманный или кассетный фильтр",
    "href": "/blog/karmannyj-ili-kassetnyj-filtr/",
    "text": "Как отличаются воздушные фильтры для вентиляции."
  },
  {
    "title": "Как выбрать фильтровальную ткань",
    "href": "/blog/kak-vybrat-filtrovalnuyu-tkan/",
    "text": "Как подбирают материал по условиям эксплуатации."
  }
]}
    />
  );
}
