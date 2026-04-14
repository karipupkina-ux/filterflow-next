import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo-metadata";
import Navigation from "../components/Navigation";
import FloatingContacts from "../components/feature/FloatingContacts";
import ContactForm from "./ContactForm";

export const metadata: Metadata = pageMetadata({
  title: "Контакты производителя FilterFlow — телефон и email",
  description:
    "Контакты FilterFlow: телефон +7 951 499-25-76, email filterflow@mail.ru. Производство мешков для аспирации и рукавов. Связь в мессенджерах, заявка на сайте.",
  path: "/kontakty",
});

const TEL_HREF = "tel:+79514992576";
const TEL_DISPLAY = "+7 951 499-25-76";
const MAIL_HREF = "mailto:filterflow@mail.ru";
const MAIL_DISPLAY = "filterflow@mail.ru";

function IconPhone() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="M6.6 3.6c.5-.1 1 .1 1.3.5l1.8 2.3c.3.4.4 1 .2 1.5l-.8 1.8c-.2.4-.1.9.2 1.2a12 12 0 0 0 4.4 4.4c.4.3.9.3 1.3.1l1.8-.8c.5-.2 1.1-.1 1.5.2l2.3 1.8c.4.3.6.8.5 1.3l-.3 2.2c-.1.6-.6 1.1-1.2 1.2-4.6.9-9.3-1.4-12.6-4.7S2.7 8.5 3.6 3.9c.1-.6.6-1.1 1.2-1.2z" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function IconClock() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v6l4 2" />
    </svg>
  );
}

function IconPin() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <path d="M12 21s7-4.9 7-11a7 7 0 1 0-14 0c0 6.1 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function IconTruck() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <path d="M1 16h15v-9H1zM16 11h3l3 3v2h-3" />
      <circle cx="6" cy="17" r="2" />
      <circle cx="18" cy="17" r="2" />
    </svg>
  );
}

export default function KontaktyPage() {
  return (
    <>
      <Navigation />
      <FloatingContacts />

      <main className="bg-[#f8fafc] pt-[118px] md:pt-[124px]">
        <div className="mx-auto max-w-7xl px-4 pb-20 pt-6 sm:px-6 lg:px-8">
          <nav aria-label="Хлебные крошки" className="mb-7 text-[13px] text-[#64748b]">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="transition-colors hover:text-[#0f172a]">
                  Главная
                </Link>
              </li>
              <li aria-hidden="true" className="text-[#94a3b8]">
                ›
              </li>
              <li className="text-[#334155]">Контакты</li>
            </ol>
          </nav>

          {/* Hero */}
          <section className="mb-12 rounded-3xl bg-gradient-to-br from-[#effefc] via-white to-[#f0fdfa] p-8 shadow-[0_10px_28px_rgba(15,23,42,0.06)] sm:p-10 lg:p-12">
            <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl lg:text-[2.5rem]">
              Контакты FilterFlow
            </h1>
            <p className="mt-5 max-w-3xl text-[15px] leading-relaxed text-[#475569] sm:text-[17px]">
              Свяжитесь с нами удобным способом — мы всегда готовы ответить на ваши вопросы и помочь с выбором
              фильтровального оборудования. На этой странице собраны{" "}
              <strong className="font-semibold text-[#334155]">контакты производителя фильтровальных мешков</strong>
              : вы можете заказать фильтровальные мешки и рукава для аспирации или уточнить условия поставки.
            </p>
          </section>

          {/* Связаться с нами */}
          <section className="mb-14">
            <h2 className="mb-10 text-center text-2xl font-bold tracking-tight text-[#0f172a] sm:text-3xl lg:text-[2rem]">
              Связаться с нами
            </h2>

            <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 lg:items-start">
              <div className="space-y-10">
                <div>
                  <h3 className="mb-5 text-base font-bold text-[#0f172a] sm:text-lg">Телефон и email</h3>
                  <ul className="space-y-6">
                    <li className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#d7f6f3] text-[#0a8d85]">
                        <IconPhone />
                      </div>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wide text-[#64748b]">Телефон</p>
                        <a
                          href={TEL_HREF}
                          className="mt-0.5 inline-block text-base font-semibold text-[#0aa79d] transition hover:text-[#088f86]"
                        >
                          {TEL_DISPLAY}
                        </a>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#d7f6f3] text-[#0a8d85]">
                        <IconMail />
                      </div>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wide text-[#64748b]">Email</p>
                        <a
                          href={MAIL_HREF}
                          className="mt-0.5 inline-block text-base font-semibold text-[#0aa79d] transition hover:text-[#088f86] break-all"
                        >
                          {MAIL_DISPLAY}
                        </a>
                        <p className="mt-1 text-sm text-[#64748b]">Ответим в течение 24 часов</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 text-base font-bold text-[#0f172a] sm:text-lg">Мессенджеры</h3>
                  <p className="mb-4 text-sm text-[#64748b]">Напишите нам в удобном мессенджере</p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://wa.me/79514992576"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-[#e2e8f0] transition hover:scale-105 hover:shadow-lg"
                      aria-label="WhatsApp"
                    >
                      <img
                        src="/images/whatsapp.png"
                        alt=""
                        className="h-9 w-9 shrink-0 scale-[2] object-contain"
                      />
                    </a>
                    <a
                      href="https://t.me/Violetta0502"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-[#e2e8f0] transition hover:scale-105 hover:shadow-lg"
                      aria-label="Telegram"
                    >
                      <img
                        src="/images/telegram.png"
                        alt=""
                        className="h-9 w-9 shrink-0 scale-[2] object-contain"
                      />
                    </a>
                    <a
                      href="https://max.ru/u/f9LHodD0cOLehfNZxc-dfvXrRQQ-ApKrfczCjbhEa_va3lGdtndd7SgNP8U"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-md transition hover:scale-105 hover:shadow-lg"
                      aria-label="MAX"
                    >
                      <img src="/images/max.png" alt="" className="h-7 w-7 object-contain" />
                    </a>
                  </div>
                </div>
              </div>

              <ContactForm />
            </div>
          </section>

          {/* Режим работы и доставка */}
          <section className="mb-14 rounded-3xl bg-gradient-to-b from-[#effefc] to-[#e6faf7] px-6 py-10 shadow-[0_10px_28px_rgba(15,23,42,0.05)] sm:px-10 sm:py-12">
            <h2 className="mb-10 text-center text-xl font-bold text-[#0f172a] sm:text-2xl">
              Режим работы и доставка
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              <article className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white text-[#0aa79d] shadow-sm ring-1 ring-[#ccfbf1]">
                  <IconClock />
                </div>
                <h3 className="text-base font-bold text-[#0f172a]">Прием заявок</h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-[#475569]">
                  24 часа в сутки, 7 дней в неделю
                </p>
              </article>
              <article className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white text-[#0aa79d] shadow-sm ring-1 ring-[#ccfbf1]">
                  <IconPin />
                </div>
                <h3 className="text-base font-bold text-[#0f172a]">География работы</h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-[#475569]">
                  Работаем по всей России и странам СНГ
                </p>
              </article>
              <article className="flex flex-col items-center text-center sm:col-span-2 lg:col-span-1">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white text-[#0aa79d] shadow-sm ring-1 ring-[#ccfbf1]">
                  <IconTruck />
                </div>
                <h3 className="text-base font-bold text-[#0f172a]">Доставка</h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-[#475569]">
                  Доставка в любой регион транспортными компаниями
                </p>
              </article>
            </div>
          </section>

          {/* SEO / информация */}
          <section className="rounded-3xl bg-white p-6 shadow-[0_10px_28px_rgba(15,23,42,0.06)] sm:p-8 lg:p-10">
            <h2 className="text-2xl font-bold tracking-tight text-[#0f172a] sm:text-3xl">
              О компании FilterFlow — производитель фильтровальных мешков
            </h2>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-[#e2e8f0] bg-[#f8fafc] px-4 py-4 text-center">
                <p className="text-lg font-bold text-[#0aa79d]">от 1 шт.</p>
                <p className="mt-1 text-xs text-[#64748b]">минимальный заказ</p>
              </div>
              <div className="rounded-2xl border border-[#e2e8f0] bg-[#f8fafc] px-4 py-4 text-center">
                <p className="text-lg font-bold text-[#0aa79d]">1–3 дня</p>
                <p className="mt-1 text-xs text-[#64748b]">типовые позиции</p>
              </div>
              <div className="rounded-2xl border border-[#e2e8f0] bg-[#f8fafc] px-4 py-4 text-center sm:col-span-1">
                <p className="text-base font-bold leading-snug text-[#0aa79d] sm:text-lg">
                  Россия и страны СНГ
                </p>
                <p className="mt-1 text-xs text-[#64748b]">отправка ТК</p>
              </div>
            </div>

            <div className="mt-8 space-y-4 text-[15px] leading-relaxed text-[#334155] sm:text-[17px]">
              <p>
                <strong className="font-semibold text-[#0f172a]">FilterFlow</strong> — российское{" "}
                <strong className="font-semibold text-[#0f172a]">производство фильтровальных мешков</strong>{" "}
                и <strong className="font-semibold text-[#0f172a]">фильтровальных рукавов</strong> для систем
                аспирации и пылеулавливания. Изготавливаем{" "}
                <strong className="font-semibold text-[#0f172a]">мешки для аспирации</strong> и{" "}
                <strong className="font-semibold text-[#0f172a]">мешки для стружкоотсоса</strong> из
                полиэстера, полипропилена, иглопробивного войлока, а также из антистатических и термостойких
                тканей — по типовым и индивидуальным размерам.
              </p>
              <p>
                Если вам нужно <strong className="font-semibold text-[#0f172a]">купить фильтровальные мешки</strong>{" "}
                или <strong className="font-semibold text-[#0f172a]">заказать фильтровальные мешки</strong> на
                производство, начните с консультации: уточним материал, размеры и сроки.{" "}
                <strong className="font-semibold text-[#0f172a]">Контакты FilterFlow</strong> указаны на этой
                странице — выберите телефон, email или мессенджер.
              </p>
            </div>

            <div className="mt-10 rounded-2xl border border-[#e2e8f0] bg-[#f8fafc] p-6 sm:p-8">
              <h3 className="text-xl font-bold text-[#0f172a] sm:text-2xl">
                Как сделать заказ на фильтровальные мешки
              </h3>
              <ol className="mt-5 list-decimal space-y-3 pl-5 text-[15px] leading-relaxed text-[#334155] sm:text-[17px]">
                <li>
                  Свяжитесь с нами по телефону{" "}
                  <a href={TEL_HREF} className="font-semibold text-[#0aa79d] underline underline-offset-2 hover:text-[#088f86]">
                    {TEL_DISPLAY}
                  </a>{" "}
                  или напишите на{" "}
                  <a href={MAIL_HREF} className="font-semibold text-[#0aa79d] underline underline-offset-2 hover:text-[#088f86] break-all">
                    {MAIL_DISPLAY}
                  </a>
                  — опишите задачу и оборудование.
                </li>
                <li>
                  Пришлите размеры, фото ярлыка или чертёж: мы подберём материал и рассчитаем стоимость.
                </li>
                <li>
                  Согласуем комплектацию, сроки и способ отгрузки. Предоставляем все необходимые документы: при
                  отгрузке передаём <strong className="font-semibold text-[#0f172a]">договор, товарная накладная</strong>{" "}
                  и иные сопроводительные бумаги по договорённости.
                </li>
                <li>
                  После подтверждения запускаем изготовление и организуем доставку удобной транспортной
                  компанией.
                </li>
              </ol>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
