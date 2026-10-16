import type { Metadata } from "next";
import ClusterArticlePage from "../../components/ClusterArticlePage";
import { pageMetadata } from "@/lib/seo-metadata";

const PAGE_TITLE = "Кокосовый фильтр для покрасочной камеры: где применяется";
const PAGE_DESCRIPTION = "Кокосово-волокнистый фильтр для покрасочной камеры: назначение, применение в совместимых камерах с водяной завесой, размеры и условия подбора.";
const PAGE_PATH = "/blog/kokosovyj-filtr-pokrasochnoj-kamery";

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
      image="/images/new-products/coconut-fibre-paint-filter.webp"
      imageAlt="Кокосово-волокнистый фильтр для покрасочной камеры"
      datePublished="2026-10-16"
      dateModified="2026-10-16"
      intro="Кокосово-волокнистые фильтрующие материалы встречаются в отдельных покрасочных системах, в том числе как сухая ступень после водяного отделения красочного тумана. Применение нужно сверять с конструкцией конкретной камеры."
      sections={[
  {
    "title": "Для чего используется",
    "paragraphs": [
      "Материал служит дополнительной ступенью улавливания загрязнений в системах, где такое исполнение предусмотрено производителем. Он не является универсальной заменой Paint Stop, потолочного или лабиринтного фильтра."
    ]
  },
  {
    "title": "Почему важна конструкция камеры",
    "paragraphs": [
      "В разных окрасочных системах воздушный поток и схема очистки устроены по-разному. Поэтому перед заменой нужно понимать, где именно установлен кокосовый материал и какую функцию он выполняет."
    ]
  },
  {
    "title": "Какие данные прислать",
    "bullets": [
      "Фото установленного материала",
      "Размер секции",
      "Толщина слоя",
      "Модель камеры",
      "Расположение относительно водяной завесы и вытяжки"
    ]
  },
  {
    "title": "Можно ли заменить другим материалом",
    "paragraphs": [
      "Только после проверки сопротивления, назначения ступени и рекомендаций производителя оборудования. Визуально похожий материал не гарантирует одинаковую работу системы."
    ]
  }
]}
      productHref="/filtry-dlya-pokrasochnyh-kamer/"
      productLabel="Кокосовые и другие фильтры для покрасочных камер"
      productText="Подберём фильтрующий материал по размерам, фотографии и модели камеры."
      related={[
  {
    "title": "Какие фильтры нужны для покрасочной камеры",
    "href": "/blog/kakie-filtry-nuzhny-dlya-pokrasochnoj-kamery/",
    "text": "Общая схема фильтров в камере."
  },
  {
    "title": "Лабиринтный фильтр Andreae",
    "href": "/blog/labirintnyj-filtr-andreae/",
    "text": "Картонная ступень для красочного тумана."
  },
  {
    "title": "Paint Stop: что это",
    "href": "/blog/chto-takoe-paint-stop/",
    "text": "Стекловолоконный фильтр вытяжки."
  }
]}
    />
  );
}
