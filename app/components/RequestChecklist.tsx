type RequestChecklistProps = {
  title?: string;
  intro?: string;
  items: string[];
  note?: string;
};

export default function RequestChecklist({
  title = "Что прислать для точного расчёта",
  intro = "Чем точнее исходные данные, тем быстрее можно подобрать исполнение и рассчитать стоимость без лишних уточнений.",
  items,
  note,
}: RequestChecklistProps) {
  return (
    <section className="bg-[#f8fafc] py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="rounded-[26px] border border-[#dbe7e5] bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.05)] sm:p-8 lg:p-10">
          <div className="max-w-3xl">
            <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#149c94]">
              Перед заявкой
            </p>
            <h2 className="mt-3 text-[30px] font-bold leading-[1.15] tracking-[-0.025em] text-[#10233f] md:text-[40px]">
              {title}
            </h2>
            <p className="mt-4 text-[15px] leading-[1.75] text-[#64748b] md:text-[16px]">
              {intro}
            </p>
          </div>

          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item, index) => (
              <div
                key={item}
                className="flex min-h-[74px] items-start gap-3 rounded-[18px] border border-[#e2e8f0] bg-[#f8fafc] p-4"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#dff6f2] text-[13px] font-bold text-[#118b84]">
                  {index + 1}
                </span>
                <span className="pt-0.5 text-[14px] leading-[1.55] text-[#334155] md:text-[15px]">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {note && (
            <p className="mt-6 rounded-[16px] bg-[#eefaf8] px-5 py-4 text-[14px] leading-[1.65] text-[#47615f]">
              {note}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
