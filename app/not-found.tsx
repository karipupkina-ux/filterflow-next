import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Страница не найдена",
  description: "Запрашиваемая страница отсутствует на сайте FilterFlow.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center bg-[#f8fafc] px-6 py-24 text-center">
      <p className="text-[14px] font-medium uppercase tracking-wide text-[#64748b]">
        Ошибка 404
      </p>
      <h1 className="mt-2 text-2xl font-bold text-[#0f172a] md:text-3xl">
        Страница не найдена
      </h1>
      <p className="mt-4 max-w-md text-[16px] leading-relaxed text-[#475569]">
        Проверьте адрес или перейдите на главную страницу каталога.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center rounded-xl bg-[#ff6b2c] px-8 py-3 text-[16px] font-semibold text-white transition hover:bg-[#e85e24]"
      >
        На главную
      </Link>
    </div>
  );
}
