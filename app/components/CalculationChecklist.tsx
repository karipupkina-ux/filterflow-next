import Link from "next/link";

type Item = {
  title: string;
  text: string;
};

type Props = {
  eyebrow?: string;
  title?: string;
  intro: string;
  items: Item[];
  href: string;
  buttonLabel?: string;
};

export default function CalculationChecklist({
  eyebrow = "Для точного расчёта",
  title = "Что нужно прислать для расчёта заказа",
  intro,
  items,
  href,
  buttonLabel = "Отправить параметры",
}: Props) {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="rounded-[26px] border border-[#dfe8ec] bg-[#f8fbfb] p-6 shadow-[0_10px_30px_rgba(15,23,42,0.05)] sm:p-8 md:p-10">
          <div className="max-w-3xl">
            <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#149c94]">
              {eyebrow}
            </p>
            <h2 className="mt-3 text-[30px] font-bold leading-[1.15] tracking-[-0.025em] text-[#10233f] md:text-[42px]">
              {title}
            </h2>
            <p className="mt-4 text-[15px] leading-[1.75] text-[#526174] md:text-[16px]">
              {intro}
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {items.map((item, index) => (
              <div
                key={item.title}
                className="flex gap-4 rounded-[18px] border border-[#e4eaee] bg-white p-5"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#dff6f2] text-[13px] font-bold text-[#118d84]">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-[16px] font-semibold leading-[1.35] text-[#10233f]">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-[14px] leading-[1.6] text-[#64748b]">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href={href}
              className="inline-flex min-h-[50px] items-center justify-center rounded-[14px] bg-[#149c94] px-7 text-[15px] font-semibold text-white transition hover:bg-[#118b84]"
            >
              {buttonLabel}
              <span className="ml-2 text-[18px] leading-none">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
