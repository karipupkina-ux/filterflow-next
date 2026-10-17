import EmailLink from "../EmailLink";

export default function ContactsSection() {
  return (
    <section id="contacts" className="bg-[#f6f7fb] py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-3 text-[42px] font-bold leading-[1.04] tracking-[-0.02em] text-[#0f172a] md:text-[54px]">
            Контакты
          </h2>

          <p className="mx-auto max-w-2xl text-[16px] leading-[1.6] text-[#667085]">
            Свяжитесь с нами удобным способом или перейдите к форме заказа выше на странице.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <a
            href="tel:+79514992576"
            className="group flex items-start gap-4 rounded-[24px] bg-white px-6 py-5 shadow-[0_8px_28px_rgba(15,23,42,0.05)] transition-all duration-200 hover:-translate-y-[1px] hover:shadow-[0_12px_34px_rgba(15,23,42,0.08)]"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#c9f0ea] text-[#11b3a6] transition-colors duration-200 group-hover:bg-[#b9ebe3]">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.89.33 1.76.63 2.59a2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6.09 6.09l1.49-1.24a2 2 0 0 1 2.11-.45c.83.3 1.7.51 2.59.63A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <div>
              <div className="mb-1 text-[15px] font-semibold text-[#0f172a]">Телефон</div>
              <div className="mb-1 text-[17px] font-medium text-[#11b3a6]">+7 951 499-25-76</div>
              <div className="text-[14px] leading-[1.55] text-[#667085]">Приём заявок по телефону</div>
            </div>
          </a>

          <EmailLink className="group flex items-start gap-4 rounded-[24px] bg-white px-6 py-5 shadow-[0_8px_28px_rgba(15,23,42,0.05)] transition-all duration-200 hover:-translate-y-[1px] hover:shadow-[0_12px_34px_rgba(15,23,42,0.08)]">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#c9f0ea] text-[#11b3a6] transition-colors duration-200 group-hover:bg-[#b9ebe3]">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" />
              </svg>
            </div>
            <div>
              <div className="mb-1 text-[15px] font-semibold text-[#0f172a]">Email</div>
              <div className="mb-1 text-[17px] font-medium text-[#11b3a6]">filterflow@mail.ru</div>
              <div className="text-[14px] leading-[1.55] text-[#667085]">Для заявок, чертежей и технических данных</div>
            </div>
          </EmailLink>

          <div className="rounded-[24px] bg-white px-6 py-5 shadow-[0_8px_28px_rgba(15,23,42,0.05)]">
            <div className="mb-4 flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#c9f0ea] text-[#11b3a6]">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <rect x="4" y="4" width="16" height="16" rx="3" />
                  <path d="M9 9h6v6H9z" />
                </svg>
              </div>
              <div>
                <div className="mb-1 text-[15px] font-semibold text-[#0f172a]">Мессенджеры</div>
                <div className="text-[14px] leading-[1.55] text-[#667085]">Пишите нам в удобный мессенджер</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://wa.me/79514992576"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center justify-center rounded-xl bg-[#25D366] px-4 text-[14px] font-medium text-white transition hover:brightness-95"
              >
                WhatsApp
              </a>
              <a
                href="https://t.me/Violetta0502"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center justify-center rounded-xl bg-[#229ED9] px-4 text-[14px] font-medium text-white transition hover:brightness-95"
              >
                Telegram
              </a>
              <a
                href="https://max.ru/u/f9LHodD0cOLehfNZxc-dfvXrRQQ-ApKrfczCjbhEa_va3lGdtndd7SgNP8U"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center justify-center rounded-xl bg-[#8b5cf6] px-4 text-[14px] font-medium text-white transition hover:brightness-95"
              >
                MAX
              </a>
            </div>
          </div>

          <div className="rounded-[24px] bg-white px-6 py-5 shadow-[0_8px_28px_rgba(15,23,42,0.05)]">
            <div className="text-[15px] font-semibold text-[#0f172a]">Нужен расчёт?</div>
            <p className="mt-2 text-[14px] leading-[1.65] text-[#667085]">
              В форме заказа можно указать тип продукции, размеры, количество и комментарий.
            </p>
            <a
              href="#order"
              className="mt-4 inline-flex h-11 items-center justify-center rounded-xl bg-[#11b3a6] px-5 text-[14px] font-semibold text-white transition hover:bg-[#0f9f93]"
            >
              Перейти к форме заказа
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
