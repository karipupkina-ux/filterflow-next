"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { sendApplicationEmail } from "@/lib/send-email-client";
import Navigation from "../components/Navigation";
import SeeAlsoLinks from "../components/SeeAlsoLinks";
import FloatingContacts from "../components/feature/FloatingContacts";
import EmailLink from "../components/EmailLink";

export default function Page() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [task, setTask] = useState("");
  const [quantity, setQuantity] = useState("");
  const [extraInfo, setExtraInfo] = useState("");
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name.trim() || !phone.trim() || !email.trim() || !task.trim()) {
      alert("Пожалуйста, заполните все обязательные поля со звёздочкой.");
      return;
    }

    if (!consent) {
      alert(
        "Пожалуйста, подтвердите согласие на обработку персональных данных."
      );
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      const message = [
        "Заявка: нестандартные мешки для фильтрации",
        "",
        "Описание оборудования / задачи:",
        task.trim(),
        "",
        "Количество (шт):",
        quantity.trim() || "—",
        "",
        "Дополнительная информация:",
        extraInfo.trim() || "—",
      ].join("\n");
      await sendApplicationEmail({
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        message,
      });
      setName("");
      setPhone("");
      setEmail("");
      setTask("");
      setQuantity("");
      setExtraInfo("");
      setConsent(false);
      setSubmitStatus("success");
    } catch (err) {
      console.error("nestandartnye form:", err);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navigation />
      <FloatingContacts />

      <main className="bg-[#f6f7f7]">
        <section className="mx-auto max-w-[1280px] px-4 pb-10 pt-[105px] sm:px-6 sm:pb-12 sm:pt-[116px]">
          <div className="mb-6 rounded-lg bg-[#eef0f0] px-4 py-3 sm:mb-8 sm:px-6 sm:py-4">
            <div className="flex items-center gap-2 text-[14px]">
              <Link
                href="/"
                className="font-medium text-[#149c8d] transition hover:underline"
              >
                Главная
              </Link>
              <span className="text-gray-400">›</span>
              <span className="text-gray-600">
                Нестандартные мешки для фильтрации
              </span>
            </div>
          </div>

          <div className="grid items-center gap-7 sm:gap-10 lg:grid-cols-2">
            <div>
              <h1 className="mb-4 text-[26px] font-semibold leading-[1.16] text-[#0f172a] sm:mb-6 sm:text-[32px] lg:text-[40px]">
                Нестандартные мешки
                <br />
                для фильтрации по
                <br />
                чертежам заказчика
              </h1>

              <p className="mb-6 max-w-[620px] text-[15px] leading-[1.65] text-[#5b677a] sm:mb-8 sm:text-[16px] sm:leading-[1.7]">
                Изготавливаем нестандартные фильтровальные мешки под заказ — по
                индивидуальным чертежам и размерам, под ваш узел фильтрации.
                Любые формы, конфигурации и материалы; консультация и расчёт до
                запуска в пошив.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                <a
                  href="#order-form"
                  className="flex h-11 items-center justify-center rounded-lg bg-[#149c8d] px-6 text-[15px] font-medium text-white transition hover:bg-[#11897d] sm:h-auto sm:py-3"
                >
                  Заказать расчёт
                  <span className="ml-2">→</span>
                </a>

                <a
                  href="tel:+79514992576"
                  className="flex h-11 items-center justify-center rounded-lg border border-[#149c8d] px-6 text-[15px] font-medium text-[#149c8d] transition hover:bg-[#f0fbf9] sm:h-auto sm:py-3"
                >
                  +7 (951) 499-25-76
                </a>
              </div>
            </div>

            <div className="flex justify-end">
              <div className="w-full max-w-[520px] overflow-hidden rounded-[20px]">
                <Image
                  src="/images/catalog/filter_bags_table.webp"
                  alt="Нестандартные фильтровальные мешки, пошив по размерам"
                  width={800}
                  height={900}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-[#ececec] bg-[#f6f7f7] py-[86px]">
          <div className="mx-auto max-w-[1080px] px-6">
            <h2 className="mx-auto mb-10 max-w-[980px] text-center text-[30px] font-semibold leading-[1.2] text-[#0f172a] sm:text-[36px] lg:text-[42px]">
              Индивидуальное производство нестандартных
              <br className="hidden sm:block" />
              фильтровальных мешков
            </h2>

            <div className="mx-auto max-w-[980px] space-y-8 text-[16px] leading-[1.75] text-[#475569] sm:text-[17px]">
              <p>
                <span className="font-semibold text-[#0f172a]">
                  Нестандартные мешки для фильтрации
                </span>{" "}
                — это решение для уникального оборудования, которое требует
                индивидуального подхода. Мы изготавливаем фильтровальные мешки
                любых форм и конфигураций по вашим чертежам, эскизам или
                образцам.
              </p>

              <p>
                Наше производство оснащено современным оборудованием,
                позволяющим реализовать самые сложные технические решения. Мы
                работаем с различными материалами и можем изготовить мешки с
                любыми конструктивными особенностями — шьём под ваш узел и режим
                работы, а не подбираем «типовой» размер с полки.
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-[#ececec] bg-[#f6f7f7] py-[80px] md:py-[96px]">
          <div className="mx-auto max-w-[1280px] px-6">
            <h2 className="mx-auto mb-4 max-w-[1020px] text-center text-[28px] font-semibold leading-[1.2] text-[#0f172a] sm:text-[34px] lg:text-[40px]">
              Фильтрационные решения: пошив и мешки по индивидуальным размерам
            </h2>
            <p className="mx-auto mb-12 max-w-[880px] text-center text-[16px] leading-[1.65] text-[#5b677a] sm:text-[17px]">
              Нестандартные фильтровальные мешки делаем под заказ: согласуем
              конструкцию, подберём ткань и уложимся в сроки — от срочных партий
              до серий. Первая консультация по ТЗ и чертежам бесплатна.
            </p>

            <div className="mx-auto grid max-w-[1180px] gap-8 lg:grid-cols-3">
              <div className="rounded-[22px] border border-[#e2e8f0] bg-white px-8 py-8 shadow-[0_6px_20px_rgba(15,23,42,0.05)]">
                <h3 className="mb-4 text-[20px] font-semibold leading-[1.3] text-[#0f172a]">
                  Индивидуальное производство
                </h3>
                <p className="text-[15px] leading-[1.72] text-[#475569] sm:text-[16px]">
                  Пошив фильтровальных мешков ведём по вашим чертежам, эскизам или
                  образцу: учитываем крепление, патрубки и нагрузку на швы. На своём
                  участке выдерживаем повторяемость — размеры и швы стабильны от
                  партии к партии.
                </p>
              </div>

              <div className="rounded-[22px] border border-[#e2e8f0] bg-white px-8 py-8 shadow-[0_6px_20px_rgba(15,23,42,0.05)]">
                <h3 className="mb-4 text-[20px] font-semibold leading-[1.3] text-[#0f172a]">
                  Подбор материалов
                </h3>
                <p className="text-[15px] leading-[1.72] text-[#475569] sm:text-[16px]">
                  Подбираем полиэстер, полипропилен, антистатик или термостойкие
                  ткани под температуру, тип пыли и агрессивность среды — чтобы
                  нестандартные фильтровальные мешки служили долго и стабильно
                  держали степень очистки.
                </p>
              </div>

              <div className="rounded-[22px] border border-[#e2e8f0] bg-white px-8 py-8 shadow-[0_6px_20px_rgba(15,23,42,0.05)]">
                <h3 className="mb-4 text-[20px] font-semibold leading-[1.3] text-[#0f172a]">
                  Расчёт размеров
                </h3>
                <p className="text-[15px] leading-[1.72] text-[#475569] sm:text-[16px]">
                  Рассчитываем габариты мешка по месту установки: диаметр
                  горловины, длину, форму и допуски на усадку. Мешки по
                  индивидуальным размерам согласуем до запуска в раскрой — меньше
                  риска ошибки на объекте.
                </p>
              </div>
            </div>

            <p className="mx-auto mt-10 max-w-[880px] text-center text-[15px] leading-[1.65] text-[#64748b] sm:text-[16px]">
              Нужен расчёт или образец? Напишите в форме ниже — ответим в
              рабочее время и предложим быстрые сроки изготовления под ваш объём.
            </p>
          </div>
        </section>

        <section className="bg-[#f6f7f7] pb-[90px]">
          <div className="mx-auto max-w-[1280px] px-6">
            <h2 className="mb-12 text-center text-[28px] font-semibold leading-[1.2] text-[#0f172a] sm:text-[34px] lg:text-[40px]">
              Возможности производства нестандартных мешков
            </h2>

            <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
              <div className="rounded-[22px] bg-white px-9 py-9 shadow-[0_8px_24px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(15,23,42,0.12)]">
                <div className="mb-7 flex h-[72px] w-[72px] items-center justify-center rounded-[18px] bg-[#18b3a4]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-9 w-9 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 21l3.75-.75L18 9 15 6 3.75 17.25 3 21z" />
                    <path d="M14 7l3 3" />
                    <path d="M12 20h9" />
                  </svg>
                </div>

                <h3 className="mb-5 text-[22px] font-semibold leading-[1.25] text-[#0f172a]">
                  Любые размеры и формы
                </h3>

                <p className="text-[16px] leading-[1.72] text-[#475569]">
                  Изготавливаем мешки любых размеров и конфигураций по вашим
                  чертежам, эскизам или образцам.
                </p>
              </div>

              <div className="rounded-[22px] bg-white px-9 py-9 shadow-[0_8px_24px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(15,23,42,0.12)]">
                <div className="mb-7 flex h-[72px] w-[72px] items-center justify-center rounded-[18px] bg-[#18b3a4]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-9 w-9 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 3a9 9 0 1 0 9 9" />
                    <path d="M12 3a9 9 0 0 1 9 9" opacity="0.4" />
                    <circle cx="12" cy="12" r="2.5" />
                    <path d="M12 5.5v1.5" />
                    <path d="M5.5 12H7" />
                    <path d="M17 12h1.5" />
                    <path d="M8.2 8.2l1 1" />
                  </svg>
                </div>

                <h3 className="mb-5 text-[22px] font-semibold leading-[1.25] text-[#0f172a]">
                  Широкий выбор материалов
                </h3>

                <p className="text-[16px] leading-[1.72] text-[#475569]">
                  Полиэстер, полипропилен, антистатические и термостойкие ткани
                  для любых условий эксплуатации.
                </p>
              </div>

              <div className="rounded-[22px] bg-white px-9 py-9 shadow-[0_8px_24px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(15,23,42,0.12)]">
                <div className="mb-7 flex h-[72px] w-[72px] items-center justify-center rounded-[18px] bg-[#18b3a4]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-9 w-9 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14.7 6.3a1 1 0 0 1 1.4 0l1.6 1.6a1 1 0 0 1 0 1.4l-6.9 6.9-3 1 1-3 6.9-6.9z" />
                    <path d="M6 6l12 12" />
                  </svg>
                </div>

                <h3 className="mb-5 text-[22px] font-semibold leading-[1.25] text-[#0f172a]">
                  Сложные конструкции
                </h3>

                <p className="text-[16px] leading-[1.72] text-[#475569]">
                  Реализуем любые технические решения: несколько патрубков,
                  клапаны, усиленные зоны.
                </p>
              </div>

              <div className="rounded-[22px] bg-white px-9 py-9 shadow-[0_8px_24px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(15,23,42,0.12)]">
                <div className="mb-7 flex h-[72px] w-[72px] items-center justify-center rounded-[18px] bg-[#18b3a4]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-9 w-9 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="8" />
                    <path d="M12 8v5l3 2" />
                  </svg>
                </div>

                <h3 className="mb-5 text-[22px] font-semibold leading-[1.25] text-[#0f172a]">
                  Быстрое производство
                </h3>

                <p className="text-[16px] leading-[1.72] text-[#475569]">
                  Срок изготовления от одного дня в зависимости от сложности и
                  объёма заказа.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f6f7f7] pb-[96px]">
          <div className="mx-auto max-w-[1280px] px-6">
            <h2 className="mb-12 text-center text-[28px] font-semibold leading-[1.2] text-[#0f172a] sm:text-[34px] lg:text-[40px]">
              Применение нестандартных мешков для фильтрации
            </h2>

            <div className="grid gap-8 lg:grid-cols-3">
              <div className="rounded-[24px] border border-[#cdeeea] bg-[#eef7f6] px-9 py-9 transition duration-300 hover:-translate-y-1 hover:border-[#18b3a4]">
                <div className="mb-7 flex h-[64px] w-[64px] items-center justify-center rounded-[18px] bg-[#109e92]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.01A1.65 1.65 0 0 0 10 3.09V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h.01a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.01a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                  </svg>
                </div>

                <h3 className="mb-5 text-[21px] font-semibold leading-[1.3] text-[#0f172a]">
                  Мешки для нестандартного оборудования
                </h3>

                <p className="text-[16px] leading-[1.72] text-[#475569]">
                  Фильтры для уникальных систем аспирации, пылеудаления и
                  вентиляции с особыми требованиями к конфигурации.
                </p>
              </div>

              <div className="rounded-[24px] border border-[#f3d8bf] bg-[#f8f3ec] px-9 py-9 transition duration-300 hover:-translate-y-1 hover:border-[#f97316]">
                <div className="mb-7 flex h-[64px] w-[64px] items-center justify-center rounded-[18px] bg-[#f97316]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M3 12h18" />
                    <path d="M12 3a15.3 15.3 0 0 1 4 9 15.3 15.3 0 0 1-4 9 15.3 15.3 0 0 1-4-9 15.3 15.3 0 0 1 4-9z" />
                  </svg>
                </div>

                <h3 className="mb-5 text-[21px] font-semibold leading-[1.3] text-[#0f172a]">
                  Замена импортных фильтров российскими аналогами
                </h3>

                <p className="text-[16px] leading-[1.72] text-[#475569]">
                  Изготовление российских аналогов импортных фильтров с
                  сохранением всех технических характеристик.
                </p>
              </div>

              <div className="rounded-[24px] border border-[#cdeeea] bg-[#eef7f6] px-9 py-9 transition duration-300 hover:-translate-y-1 hover:border-[#18b3a4]">
                <div className="mb-7 flex h-[64px] w-[64px] items-center justify-center rounded-[18px] bg-[#109e92]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 18h6" />
                    <path d="M10 22h4" />
                    <path d="M12 2a7 7 0 0 0-4 12.74V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.26A7 7 0 0 0 12 2z" />
                  </svg>
                </div>

                <h3 className="mb-5 text-[21px] font-semibold leading-[1.3] text-[#0f172a]">
                  Мешки для уникальных промышленных систем
                </h3>

                <p className="text-[16px] leading-[1.72] text-[#475569]">
                  Разработка и производство фильтровальных решений для
                  специализированных промышленных процессов.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f6f7f7] pb-[96px]">
          <div className="mx-auto max-w-[1280px] px-6">
            <h2 className="mx-auto mb-12 max-w-[1120px] text-center text-[28px] font-semibold leading-[1.2] text-[#0f172a] sm:text-[34px] lg:text-[40px]">
              Материалы и конструкция нестандартных фильтровальных
              <br className="hidden sm:block" />
              мешков
            </h2>

            <div className="mx-auto grid max-w-[1120px] gap-8 lg:grid-cols-2">
              <div className="rounded-[24px] bg-white px-10 py-9 shadow-[0_8px_24px_rgba(15,23,42,0.08)]">
                <div className="mb-7 flex items-start gap-4">
                  <div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center text-[#109e92]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="5" y="5" width="14" height="14" rx="1.5" />
                      <path d="M5 9h14" opacity="0.35" />
                      <path d="M9 5v14" opacity="0.35" />
                      <circle cx="5" cy="5" r="1.5" fill="currentColor" stroke="none" />
                      <circle cx="19" cy="5" r="1.5" fill="currentColor" stroke="none" />
                      <circle cx="5" cy="19" r="1.5" fill="currentColor" stroke="none" />
                      <circle cx="19" cy="19" r="1.5" fill="currentColor" stroke="none" />
                    </svg>
                  </div>

                  <h3 className="text-[24px] font-semibold leading-[1.28] text-[#0f172a]">
                    Формы нестандартных мешков
                  </h3>
                </div>

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="mt-[2px] flex h-6 w-6 shrink-0 items-center justify-center text-[#109e92]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                        <circle cx="12" cy="12" r="9" />
                        <path d="M10.4 15.4 7.8 12.8l-1.2 1.2 3.8 3.8 7-7-1.2-1.2z" fill="white" />
                      </svg>
                    </div>
                    <p className="text-[16px] leading-[1.65] text-[#475569]">
                      Прямоугольные с различными размерами сторон
                    </p>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="mt-[2px] flex h-6 w-6 shrink-0 items-center justify-center text-[#109e92]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                        <circle cx="12" cy="12" r="9" />
                        <path d="M10.4 15.4 7.8 12.8l-1.2 1.2 3.8 3.8 7-7-1.2-1.2z" fill="white" />
                      </svg>
                    </div>
                    <p className="text-[16px] leading-[1.65] text-[#475569]">
                      Конические с переменным диаметром
                    </p>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="mt-[2px] flex h-6 w-6 shrink-0 items-center justify-center text-[#109e92]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                        <circle cx="12" cy="12" r="9" />
                        <path d="M10.4 15.4 7.8 12.8l-1.2 1.2 3.8 3.8 7-7-1.2-1.2z" fill="white" />
                      </svg>
                    </div>
                    <p className="text-[16px] leading-[1.65] text-[#475569]">
                      Цилиндрические нестандартных размеров
                    </p>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="mt-[2px] flex h-6 w-6 shrink-0 items-center justify-center text-[#109e92]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                        <circle cx="12" cy="12" r="9" />
                        <path d="M10.4 15.4 7.8 12.8l-1.2 1.2 3.8 3.8 7-7-1.2-1.2z" fill="white" />
                      </svg>
                    </div>
                    <p className="text-[16px] leading-[1.65] text-[#475569]">
                      Комбинированные конфигурации
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[24px] bg-white px-10 py-9 shadow-[0_8px_24px_rgba(15,23,42,0.08)]">
                <div className="mb-7 flex items-start gap-4">
                  <div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center text-[#f97316]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M14.7 6.3a1 1 0 0 1 1.4 0l1.6 1.6a1 1 0 0 1 0 1.4l-6.9 6.9-3 1 1-3 6.9-6.9z" />
                      <path d="M6 6l12 12" />
                    </svg>
                  </div>

                  <h3 className="text-[24px] font-semibold leading-[1.28] text-[#0f172a]">
                    Конструктивные элементы
                    <br />
                    мешков под заказ
                  </h3>
                </div>

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="mt-[2px] flex h-6 w-6 shrink-0 items-center justify-center text-[#f97316]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                        <circle cx="12" cy="12" r="9" />
                        <path d="M10.4 15.4 7.8 12.8l-1.2 1.2 3.8 3.8 7-7-1.2-1.2z" fill="white" />
                      </svg>
                    </div>
                    <p className="text-[16px] leading-[1.65] text-[#475569]">
                      Несколько входных/выходных патрубков
                    </p>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="mt-[2px] flex h-6 w-6 shrink-0 items-center justify-center text-[#f97316]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                        <circle cx="12" cy="12" r="9" />
                        <path d="M10.4 15.4 7.8 12.8l-1.2 1.2 3.8 3.8 7-7-1.2-1.2z" fill="white" />
                      </svg>
                    </div>
                    <p className="text-[16px] leading-[1.65] text-[#475569]">
                      Клапаны и заслонки различных типов
                    </p>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="mt-[2px] flex h-6 w-6 shrink-0 items-center justify-center text-[#f97316]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                        <circle cx="12" cy="12" r="9" />
                        <path d="M10.4 15.4 7.8 12.8l-1.2 1.2 3.8 3.8 7-7-1.2-1.2z" fill="white" />
                      </svg>
                    </div>
                    <p className="text-[16px] leading-[1.65] text-[#475569]">
                      Усиленные зоны и дополнительные швы
                    </p>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="mt-[2px] flex h-6 w-6 shrink-0 items-center justify-center text-[#f97316]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                        <circle cx="12" cy="12" r="9" />
                        <path d="M10.4 15.4 7.8 12.8l-1.2 1.2 3.8 3.8 7-7-1.2-1.2z" fill="white" />
                      </svg>
                    </div>
                    <p className="text-[16px] leading-[1.65] text-[#475569]">
                      Специальные системы крепления
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f6f7f7] pb-[110px]">
          <div className="mx-auto max-w-[1280px] px-6">
            <div className="mx-auto max-w-[1120px] rounded-[24px] bg-gradient-to-r from-[#15998f] to-[#177e78] px-9 py-10 shadow-[0_12px_30px_rgba(21,153,143,0.18)] md:px-12 md:py-11">
              <h2 className="mb-5 text-[28px] font-semibold leading-[1.2] text-white sm:text-[32px] lg:text-[34px]">
                Материалы для нестандартных фильтровальных мешков
              </h2>

              <p className="mb-8 max-w-[980px] text-[16px] leading-[1.65] text-white/95 sm:text-[17px]">
                Используем полиэстер, полипропилен, антистатические и
                термостойкие ткани. Подбираем материал в зависимости от условий
                эксплуатации, типа пыли и температурного режима.
              </p>

              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-[18px] bg-white/10 px-5 py-5 backdrop-blur-[1px]">
                  <div className="mb-2 text-[34px] font-semibold leading-none text-white sm:text-[38px]">
                    -40°C до +150°C
                  </div>
                  <p className="text-[15px] leading-[1.45] text-white/85">
                    Диапазон температур
                  </p>
                </div>

                <div className="rounded-[18px] bg-white/10 px-5 py-5 backdrop-blur-[1px]">
                  <div className="mb-2 text-[34px] font-semibold leading-none text-white sm:text-[38px]">
                    99.9%
                  </div>
                  <p className="text-[15px] leading-[1.45] text-white/85">
                    Эффективность фильтрации
                  </p>
                </div>

                <div className="rounded-[18px] bg-white/10 px-5 py-5 backdrop-blur-[1px]">
                  <div className="mb-2 text-[34px] font-semibold leading-none text-white sm:text-[38px]">
                    От 1 дня
                  </div>
                  <p className="text-[15px] leading-[1.45] text-white/85">
                    Срок изготовления
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f6f7f7] pb-[110px]">
          <div className="mx-auto max-w-[1280px] px-6">
            <h2 className="mx-auto mb-4 max-w-[1200px] text-center text-[28px] font-semibold leading-[1.2] text-[#0f172a] sm:text-[34px] lg:text-[40px]">
              Как заказать нестандартные мешки для фильтрации
            </h2>

            <p className="mx-auto mb-14 max-w-[860px] text-center text-[17px] leading-[1.6] text-[#5b677a] sm:text-[18px]">
              От первого обращения до получения готовой продукции — простой и
              прозрачный процесс
            </p>

            <div className="grid gap-8 xl:grid-cols-4">
              <div className="relative rounded-[24px] border border-[#cfeeea] bg-[#eef7f6] px-9 pb-9 pt-8">
                <div className="mb-5 text-[72px] font-semibold leading-none text-[#b7dfda]">
                  01
                </div>

                <div className="mb-7 flex h-[62px] w-[62px] items-center justify-center rounded-[18px] bg-[#18b3a4]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <path d="M14 2v6h6" />
                    <path d="M8 13h8" />
                    <path d="M8 17h6" />
                  </svg>
                </div>

                <h3 className="mb-5 text-[21px] font-semibold leading-[1.3] text-[#0f172a]">
                  Отправка чертежей
                </h3>

                <p className="text-[16px] leading-[1.75] text-[#475569]">
                  Отправьте нам чертежи, эскизы или образцы мешков.
                </p>

                <div className="absolute -right-[16px] top-1/2 hidden -translate-y-1/2 xl:block">
                  <span className="text-[52px] leading-none text-[#55e0d0]">
                    →
                  </span>
                </div>
              </div>

              <div className="relative rounded-[24px] border border-[#cfeeea] bg-[#eef7f6] px-9 pb-9 pt-8">
                <div className="mb-5 text-[72px] font-semibold leading-none text-[#b7dfda]">
                  02
                </div>

                <div className="mb-7 flex h-[62px] w-[62px] items-center justify-center rounded-[18px] bg-[#18b3a4]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="3" width="16" height="18" rx="2" />
                    <path d="M8 7h8" />
                    <path d="M8 11h2" />
                    <path d="M12 11h4" />
                    <path d="M8 15h8" />
                    <path d="M8 19h8" />
                  </svg>
                </div>

                <h3 className="mb-5 text-[21px] font-semibold leading-[1.3] text-[#0f172a]">
                  Расчёт стоимости
                </h3>

                <p className="text-[16px] leading-[1.75] text-[#475569]">
                  Рассчитываем стоимость и сроки производства. Согласовываем
                  материалы и конструкцию.
                </p>

                <div className="absolute -right-[16px] top-1/2 hidden -translate-y-1/2 xl:block">
                  <span className="text-[52px] leading-none text-[#55e0d0]">
                    →
                  </span>
                </div>
              </div>

              <div className="relative rounded-[24px] border border-[#cfeeea] bg-[#eef7f6] px-9 pb-9 pt-8">
                <div className="mb-5 text-[72px] font-semibold leading-none text-[#b7dfda]">
                  03
                </div>

                <div className="mb-7 flex h-[62px] w-[62px] items-center justify-center rounded-[18px] bg-[#18b3a4]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.7 6.3a1 1 0 0 1 1.4 0l1.6 1.6a1 1 0 0 1 0 1.4l-6.9 6.9-3 1 1-3 6.9-6.9z" />
                    <path d="M6 6l12 12" />
                  </svg>
                </div>

                <h3 className="mb-5 text-[21px] font-semibold leading-[1.3] text-[#0f172a]">
                  Производство
                </h3>

                <p className="text-[16px] leading-[1.75] text-[#475569]">
                  Изготавливаем мешки на современном оборудовании с контролем
                  качества на каждом этапе.
                </p>

                <div className="absolute -right-[16px] top-1/2 hidden -translate-y-1/2 xl:block">
                  <span className="text-[52px] leading-none text-[#55e0d0]">
                    →
                  </span>
                </div>
              </div>

              <div className="rounded-[24px] border border-[#cfeeea] bg-[#eef7f6] px-9 pb-9 pt-8">
                <div className="mb-5 text-[72px] font-semibold leading-none text-[#b7dfda]">
                  04
                </div>

                <div className="mb-7 flex h-[62px] w-[62px] items-center justify-center rounded-[18px] bg-[#18b3a4]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="1" y="7" width="15" height="10" rx="2" />
                    <path d="M16 10h3l3 3v4h-6z" />
                    <circle cx="5.5" cy="18.5" r="1.5" />
                    <circle cx="18.5" cy="18.5" r="1.5" />
                  </svg>
                </div>

                <h3 className="mb-5 text-[21px] font-semibold leading-[1.3] text-[#0f172a]">
                  Доставка
                </h3>

                <p className="text-[16px] leading-[1.75] text-[#475569]">
                  Доставляем готовую продукцию по всей России.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f6f7f7] pb-[110px]">
          <div className="mx-auto max-w-[1280px] px-6">
            <h2 className="mx-auto mb-4 max-w-[1220px] text-center text-[28px] font-semibold leading-[1.2] text-[#0f172a] sm:text-[34px] lg:text-[40px]">
              Примеры нестандартных фильтровальных мешков
            </h2>

            <p className="mx-auto mb-14 max-w-[860px] text-center text-[17px] leading-[1.6] text-[#5b677a] sm:text-[18px]">
              Примеры нестандартных фильтровальных мешков, изготовленных по
              индивидуальным заказам
            </p>

            <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
              <div className="group rounded-[22px] bg-white p-5 shadow-[0_8px_24px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(15,23,42,0.12)]">
                <div className="overflow-hidden rounded-[18px] bg-[#f3f4f6]">
                  <Image
                    src="/images/catalog/nestandartnye-meshki.webp"
                    alt="Пример нестандартного фильтровального мешка 1"
                    width={500}
                    height={500}
                    className="h-[220px] w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                  />
                </div>
              </div>

              <div className="group rounded-[22px] bg-white p-5 shadow-[0_8px_24px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(15,23,42,0.12)]">
                <div className="overflow-hidden rounded-[18px] bg-[#f3f4f6]">
                  <Image
                    src="/images/catalog/converted.webp"
                    alt="Пример нестандартного фильтровального мешка 2"
                    width={500}
                    height={500}
                    className="h-[220px] w-full object-contain bg-[#f3f4f6] p-3 transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              </div>

              <div className="group rounded-[22px] bg-white p-5 shadow-[0_8px_24px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(15,23,42,0.12)]">
                <div className="overflow-hidden rounded-[18px] bg-[#f3f4f6]">
                  <Image
                    src="/images/catalog/converted_image.webp"
                    alt="Пример нестандартного фильтровального мешка 3"
                    width={500}
                    height={500}
                    className="h-[220px] w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                  />
                </div>
              </div>

              <div className="group rounded-[22px] bg-white p-5 shadow-[0_8px_24px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(15,23,42,0.12)]">
                <div className="overflow-hidden rounded-[18px] bg-[#f3f4f6]">
                  <Image
                    src="/images/catalog/converted_imag5e.webp"
                    alt="Пример нестандартного фильтровального мешка 4"
                    width={500}
                    height={500}
                    className="h-[220px] w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f6f7f7] pb-[90px]">
          <div className="mx-auto max-w-[1280px] px-6">
            <div className="mx-auto max-w-[1360px]">
              <h2 className="mb-8 max-w-[1180px] text-[26px] font-semibold leading-[1.16] text-[#0f172a] sm:text-[32px] lg:text-[40px]">
                Нестандартные мешки для фильтрации — производство по
                индивидуальным чертежам
              </h2>

              <div className="max-w-[1380px] space-y-7 text-[16px] leading-[1.7] text-[#334155] sm:text-[17px]">
                <p>
                  <span className="font-semibold text-[#1e293b]">
                    Нестандартные мешки для фильтрации
                  </span>{" "}
                  — это решение для уникального промышленного оборудования,
                  которое требует индивидуального подхода. Мы изготавливаем
                  фильтровальные мешки любых форм и конфигураций по вашим
                  чертежам, эскизам или образцам для замены импортных аналогов и
                  оснащения нестандартных систем аспирации.
                </p>

                <p>
                  Наше производство оснащено современным оборудованием,
                  позволяющим реализовать самые сложные технические решения. Мы
                  работаем с различными материалами:{" "}
                  <span className="font-semibold text-[#1e293b]">
                    полиэстер, полипропилен, антистатические и термостойкие
                    ткани
                  </span>
                  , устойчивые к износу, влаге и агрессивным средам.
                </p>

                <p>
                  Под заказ изготавливаем{" "}
                  <span className="font-semibold text-[#1e293b]">
                    прямоугольные, конические и цилиндрические мешки
                    нестандартных размеров, мешки с несколькими патрубками,
                    фильтры сложных конфигураций
                  </span>
                  . Ткань подбираем из{" "}
                  <span className="font-semibold text-[#1e293b]">
                    полиэстера, полипропилена, антистатических и термостойких
                    материалов
                  </span>
                  — с упором на срок службы и требуемую степень очистки воздуха.
                </p>

                <p>
                  Мы выполняем{" "}
                  <span className="font-semibold text-[#1e293b]">
                    индивидуальное производство фильтров
                  </span>{" "}
                  и доставку по всей России: Москва, Санкт-Петербург,
                  Екатеринбург, Казань и другие города.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f6f7f7] pb-[90px]">
          <div className="mx-auto max-w-[1280px] px-6">
            <div className="mx-auto max-w-[1360px] rounded-[28px] bg-[#f1f3f4] px-8 py-10 sm:px-10 lg:px-14 lg:py-14">
              <h2 className="mb-8 max-w-[1180px] text-[26px] font-semibold leading-[1.16] text-[#0f172a] sm:text-[32px] lg:text-[40px]">
                Что подготовить для расчёта заказа
              </h2>

              <p className="mb-8 max-w-[1320px] text-[16px] leading-[1.7] text-[#334155] sm:text-[17px]">
                Для заказа нестандартных фильтровальных мешков необходимо
                предоставить чертёж, образец или эскиз мешка, указать размеры,
                тип пыли и условия эксплуатации. Наши специалисты помогут
                подобрать материал и согласовать конструкцию.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-[3px] flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1fb5aa] text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <p className="text-[16px] leading-[1.65] text-[#334155] sm:text-[17px]">
                    <span className="font-semibold text-[#1e293b]">
                      Предоставьте чертёж, образец или эскиз
                    </span>{" "}
                    — мы работаем с любой технической документацией
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-[3px] flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1fb5aa] text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <p className="text-[16px] leading-[1.65] text-[#334155] sm:text-[17px]">
                    <span className="font-semibold text-[#1e293b]">
                      Укажите размеры
                    </span>{" "}
                    — диаметр, длина, форму мешка и тип крепления
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-[3px] flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1fb5aa] text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <p className="text-[16px] leading-[1.65] text-[#334155] sm:text-[17px]">
                    <span className="font-semibold text-[#1e293b]">
                      Опишите тип пыли и условия эксплуатации
                    </span>{" "}
                    — температура, влажность, агрессивные среды
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-[3px] flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1fb5aa] text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <p className="text-[16px] leading-[1.65] text-[#334155] sm:text-[17px]">
                    <span className="font-semibold text-[#1e293b]">
                      Выберите материал
                    </span>{" "}
                    — полиэстер, полипропилен, антистатика или термостойкая
                    ткань
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-[3px] flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1fb5aa] text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <p className="text-[16px] leading-[1.65] text-[#334155] sm:text-[17px]">
                    <span className="font-semibold text-[#1e293b]">
                      Согласуйте конструкцию
                    </span>{" "}
                    — наши специалисты помогут оптимизировать решение
                  </p>
                </div>
              </div>

              <p className="mt-10 max-w-[1320px] text-[16px] leading-[1.7] text-[#334155] sm:text-[17px]">
                Если у вас нет чертежей, наш специалист может выехать на объект
                для замеров или помочь разработать техническое решение на основе
                фотографий и описания оборудования.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#f6f7f7] pb-[110px]">
          <div className="mx-auto max-w-[1280px] px-6">
            <div className="mx-auto max-w-[1360px]">
              <h2 className="mb-8 max-w-[1180px] text-[26px] font-semibold leading-[1.16] text-[#0f172a] sm:text-[32px] lg:text-[40px]">
                Индивидуальное производство фильтровальных мешков на заказ
              </h2>

              <div className="max-w-[1380px] space-y-7 text-[16px] leading-[1.7] text-[#334155] sm:text-[17px]">
                <p>
                  Наши{" "}
                  <span className="font-semibold text-[#1e293b]">
                    нестандартные фильтровальные мешки на заказ
                  </span>{" "}
                  подходят для{" "}
                  <span className="font-semibold text-[#1e293b]">
                    замены импортных фильтров
                  </span>
                  , оснащения уникального оборудования и модернизации
                  существующих систем. Мы изготавливаем{" "}
                  <span className="font-semibold text-[#1e293b]">
                    мешки по чертежам, фильтры сложных конфигураций
                  </span>
                  , а также{" "}
                  <span className="font-semibold text-[#1e293b]">
                    мешки для промышленных систем очистки воздуха
                  </span>
                  .
                </p>

                <p>
                  Повторные заказы ведём по согласованным лекалам и эталонам —
                  следующая партия выходит быстрее, без сюрпризов на монтаже.
                  Нужна замена импортного фильтра: пришлите фото, маркировку или
                  чертёж — подберём материал и конструкцию под вашу задачу.
                </p>

                <p>
                  Отправляем по России транспортными компаниями; города и сроки
                  согласуем после расчёта объёма и упаковки.
                </p>
              </div>

              <div className="mt-12 flex justify-center">
                <a
                  href="#order-form"
                  className="inline-flex items-center justify-center rounded-full bg-[#19b5a5] px-10 py-4 text-[18px] font-medium text-white transition hover:bg-[#149c8d]"
                >
                  Заказать расчёт
                  <span className="ml-3 text-[22px] leading-none">→</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="order-form" className="bg-[#f6f7f7] pb-[110px] scroll-mt-[120px]">
          <div className="mx-auto max-w-[1280px] px-6">
            <h2 className="mx-auto mb-3 max-w-[760px] text-center text-[28px] font-semibold leading-[1.15] text-[#0f172a] sm:text-[34px] lg:text-[40px]">
              Заказать нестандартные мешки для
              <br className="hidden sm:block" />
              фильтрации
            </h2>

            <p className="mx-auto mb-10 max-w-[760px] text-center text-[16px] leading-[1.55] text-[#5b677a]">
              Заполните форму, и мы свяжемся с вами для обсуждения деталей
              заказа
            </p>

            <div className="mx-auto max-w-[930px] rounded-[22px] bg-[#f7f8f9] px-7 py-7 shadow-[0_8px_26px_rgba(15,23,42,0.08)] sm:px-8 sm:py-8 lg:px-9 lg:py-9">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-[14px] font-semibold text-[#1e293b]"
                    >
                      Ваше имя <span className="text-[#ef4444]">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Иван Иванов"
                      className="h-[50px] w-full rounded-[14px] border border-[#d6dbe3] bg-white px-4 text-[15px] text-[#0f172a] outline-none transition placeholder:text-[#9aa4b2] focus:border-[#19b5a5]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-[14px] font-semibold text-[#1e293b]"
                    >
                      Телефон <span className="text-[#ef4444]">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+7 (___) ___-__-__"
                      className="h-[50px] w-full rounded-[14px] border border-[#d6dbe3] bg-white px-4 text-[15px] text-[#0f172a] outline-none transition placeholder:text-[#9aa4b2] focus:border-[#19b5a5]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-[14px] font-semibold text-[#1e293b]"
                  >
                    Email <span className="text-[#ef4444]">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@mail.ru"
                    className="h-[50px] w-full rounded-[14px] border border-[#d6dbe3] bg-white px-4 text-[15px] text-[#0f172a] outline-none transition placeholder:text-[#9aa4b2] focus:border-[#19b5a5]"
                  />
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between gap-4">
                    <label
                      htmlFor="task"
                      className="block text-[14px] font-semibold text-[#1e293b]"
                    >
                      Описание оборудования/задачи{" "}
                      <span className="text-[#ef4444]">*</span>
                    </label>
                    <span className="text-[12px] text-[#7c8797]">
                      {task.length}/500 символов
                    </span>
                  </div>
                  <textarea
                    id="task"
                    value={task}
                    onChange={(e) => setTask(e.target.value.slice(0, 500))}
                    placeholder="Опишите ваше оборудование и требования к фильтровальным мешкам"
                    className="min-h-[110px] w-full rounded-[14px] border border-[#d6dbe3] bg-white px-4 py-3 text-[15px] text-[#0f172a] outline-none transition placeholder:text-[#9aa4b2] focus:border-[#19b5a5]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="quantity"
                    className="mb-2 block text-[14px] font-semibold text-[#1e293b]"
                  >
                    Количество (шт)
                  </label>
                  <input
                    id="quantity"
                    type="text"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    placeholder="Укажите необходимое количество"
                    className="h-[50px] w-full rounded-[14px] border border-[#d6dbe3] bg-white px-4 text-[15px] text-[#0f172a] outline-none transition placeholder:text-[#9aa4b2] focus:border-[#19b5a5]"
                  />
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between gap-4">
                    <label
                      htmlFor="extraInfo"
                      className="block text-[14px] font-semibold text-[#1e293b]"
                    >
                      Дополнительная информация
                    </label>
                    <span className="text-[12px] text-[#7c8797]">
                      {extraInfo.length}/500 символов
                    </span>
                  </div>
                  <textarea
                    id="extraInfo"
                    value={extraInfo}
                    onChange={(e) => setExtraInfo(e.target.value.slice(0, 500))}
                    placeholder="Укажите размеры, приложите ссылку на чертежи или любую другую важную информацию"
                    className="min-h-[100px] w-full rounded-[14px] border border-[#d6dbe3] bg-white px-4 py-3 text-[15px] text-[#0f172a] outline-none transition placeholder:text-[#9aa4b2] focus:border-[#19b5a5]"
                  />
                </div>

                <label className="flex cursor-pointer items-start gap-3">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-0.5 h-5 w-5 rounded border border-[#aab4c2] accent-[#149c8d]"
                  />
                  <span className="text-[14px] leading-[1.55] text-[#334155]">
                    Даю согласие на обработку персональных данных и соглашаюсь с{" "}
                    <Link
                      href="/politika-konfidencialnosti"
                      className="text-[#149c8d] underline underline-offset-2 hover:text-[#11897d]"
                    >
                      политикой конфиденциальности
                    </Link>
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex h-[56px] w-full items-center justify-center rounded-[16px] bg-[#148f88] px-6 text-[17px] font-semibold text-white transition hover:bg-[#117c76] disabled:cursor-not-allowed disabled:bg-[#94a3b8]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-3 h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M21.7 2.3a1 1 0 0 0-1.04-.22L2.66 9.08a1 1 0 0 0 .08 1.88l7.04 2.35 2.35 7.04a1 1 0 0 0 .9.68h.06a1 1 0 0 0 .92-.58l7-18a1 1 0 0 0-.3-1.15ZM11.3 12.7l-5.2-1.73 11.13-4.33-5.93 6.06Zm1.73 5.2-1.73-5.2 6.06-5.93-4.33 11.13Z" />
                  </svg>
                  {isSubmitting ? "Отправка..." : "Отправить заявку"}
                </button>
                {submitStatus === "success" && (
                  <p className="text-center text-sm font-medium text-[#148f88]">
                    Заявка успешно отправлена
                  </p>
                )}
                {submitStatus === "error" && (
                  <p className="text-center text-sm font-medium text-red-600">
                    Не удалось отправить заявку. Попробуйте позже.
                  </p>
                )}
              </form>
            </div>
          </div>
        </section>

        <section className="w-full bg-gradient-to-r from-[#1aa39a] to-[#177d77] py-[72px]">
          <div className="mx-auto max-w-[1100px] px-6 text-center">
            <h2 className="mx-auto mb-6 max-w-[760px] text-[28px] font-semibold leading-[1.18] text-white sm:text-[34px] lg:text-[40px]">
              Нужны нестандартные фильтровальные
              <br className="hidden sm:block" />
              мешки?
            </h2>

            <p className="mx-auto mb-10 max-w-[860px] text-[16px] leading-[1.7] text-white/95 sm:text-[17px]">
              Свяжитесь с нами для консультации. Наши специалисты помогут
              подобрать оптимальное решение для вашего оборудования и рассчитают
              стоимость изготовления.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="tel:+79514992576"
                className="inline-flex w-full items-center justify-center rounded-[18px] bg-white px-6 py-3.5 text-[15px] font-semibold text-[#118f87] shadow-[0_10px_24px_rgba(15,23,42,0.12)] transition hover:-translate-y-0.5 hover:bg-[#f7fffd] sm:w-auto sm:min-w-[250px] sm:px-7 sm:py-4 sm:text-[16px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-3 h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M6.62 10.79a15.054 15.054 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.07 21 3 13.93 3 5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.19 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2Z" />
                </svg>
                +7 (951) 499-25-76
              </a>

              <EmailLink className="inline-flex w-full items-center justify-center rounded-[18px] border border-white/35 bg-transparent px-6 py-3.5 text-[15px] font-semibold text-white transition hover:bg-white/8 sm:w-auto sm:min-w-[250px] sm:px-7 sm:py-4 sm:text-[16px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-3 h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 3.24-7.09 4.73a1.5 1.5 0 0 1-1.66 0L4 7.24V6l7.8 5.2a.5.5 0 0 0 .4 0L20 6v1.24Z" />
                </svg>
                filterflow@mail.ru
              </EmailLink>
            </div>
          </div>
        </section>

        <SeeAlsoLinks />
      </main>
    </>
  );
}