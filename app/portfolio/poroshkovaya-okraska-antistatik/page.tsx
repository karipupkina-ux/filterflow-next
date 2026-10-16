import type { Metadata } from "next";
import PortfolioCasePage from "../../../components/PortfolioCasePage";
import { pageMetadata } from "@/lib/seo-metadata";

const PAGE_TITLE = "Порошковая окраска: обычный PES 500 или антистатик";
const PAGE_DESCRIPTION = "Технический разбор FilterFlow: нужна ли антистатическая фильтровальная ткань для аспирации порошковой краски и почему обычный PES 500 нельзя назначать без проверки.";
const PAGE_PATH = "/portfolio/poroshkovaya-okraska-antistatik";

export const metadata: Metadata = pageMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: PAGE_PATH,
});

export default function Page() {
  return (
    <PortfolioCasePage
      title={PAGE_TITLE}
      subtitle="Клиенту требовался фильтровальный мешок для аспирации порошковой краски. Основной вопрос — подойдёт ли обычный PES 500 или необходимо антистатическое исполнение."
      path={PAGE_PATH}
      image="/images/filter-fabrics/полиэстер антистатик с пропиткой масловодооталкивмбшей.webp"
      imageAlt="Антистатическая полиэстеровая фильтровальная ткань"
      imageNote="Иллюстрация соответствующего типа изделия или материала из каталога FilterFlow; не фотография конкретного заказа."
      facts={[
  {
    "label": "Статус",
    "value": "техническая консультация"
  },
  {
    "label": "Процесс",
    "value": "аспирация порошковой краски"
  },
  {
    "label": "Сравнение",
    "value": "PES 500 / антистатический PES"
  },
  {
    "label": "Ключевой фактор",
    "value": "риск накопления статического заряда"
  }
]}
      sections={[
  {
    "title": "Задача",
    "text": "Определить, допустим ли обычный полиэстер или процесс требует материала с антистатическими свойствами."
  },
  {
    "title": "Рекомендация",
    "text": "При отсутствии подтверждённых данных о безопасности пыли обычный PES 500 не стоит назначать автоматически. Для порошковой окраски безопаснее рассматривать антистатический полиэстер и сверять требования оборудования."
  },
  {
    "title": "Что ещё важно",
    "text": "Антистатическая ткань — только часть системы. Необходимо учитывать заземление мешка, каркаса и корпуса, характеристики порошка, температуру и требования промышленной безопасности."
  }
]}
      productHref="/filtrovalnye-tkani/"
      productLabel="Фильтровальные ткани"
    />
  );
}
