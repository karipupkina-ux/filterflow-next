import Link from "next/link";

export type ProductGuideLink = {
  title: string;
  href: string;
  text: string;
};

export default function ProductGuides({ items }: { items: ProductGuideLink[] }) {
  return (
    <section className="bg-white py-14 md:py-18">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#0aa79d]">Полезные материалы</p>
          <h2 className="mt-3 text-[30px] font-bold tracking-[-0.025em] text-[#10233f] md:text-[42px]">
            Статьи по подбору и эксплуатации
          </h2>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-[20px] border border-[#e2e8f0] bg-[#f8fafc] p-6 transition hover:border-[#9fded7] hover:bg-[#eefaf8]"
            >
              <h3 className="text-[18px] font-semibold leading-[1.35] text-[#10233f] group-hover:text-[#0a8d85]">
                {item.title}
              </h3>
              <p className="mt-2 text-[14px] leading-[1.65] text-[#64748b]">{item.text}</p>
              <span className="mt-4 inline-flex text-[14px] font-medium text-[#0aa79d]">Читать →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
