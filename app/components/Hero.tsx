"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const transitionIn =
  "transition-[opacity,transform] duration-700 ease-out";

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 120);
    return () => clearTimeout(timer);
  }, []);

  const enter = visible
    ? "translate-y-0 opacity-100"
    : "translate-y-[30px] opacity-0";

  return (
    <section className="relative h-[760px] w-full overflow-hidden">
      <img
        src="/images/hero.png"
        alt="Мешки для аспирации и фильтровальные рукава FilterFlow"
        className="absolute inset-0 h-full w-full object-cover object-[center_72%]"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex h-full flex-col px-6 pb-12 pt-[120px]">
        <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center text-center">
          <h1
            className={`max-w-[1200px] text-[56px] font-bold leading-[1.05] text-white md:text-[74px] ${transitionIn} ${enter} delay-0`}
          >
            Мешки для аспирации и стружкоотсоса
            <br />
            Фильтровальные рукава
            <br />
            в наличии и под заказ
          </h1>

          <p
            className={`mt-6 max-w-[980px] text-[15px] leading-[1.5] text-white/90 md:text-[17px] ${transitionIn} ${enter} delay-[150ms]`}
          >
            Производим мешки для аспирационных установок и пылеулавливания
            (верхние и нижние), тканевые мешки для стружкоотсоса, в том числе для
            циклонов и УВП. Фильтрующие рукава и фильтры для аспирации любых
            размеров — напрямую от производителя. Индивидуальные размеры, быстрое
            изготовление, доставка по России и СНГ.
          </p>

          <div
            className={`mt-8 flex flex-wrap items-center justify-center gap-4 ${transitionIn} ${enter} delay-[300ms]`}
          >
            <a
              href="https://wa.me/79514992576"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-teal-500 px-6 py-3 text-base font-medium text-white transition hover:bg-teal-600"
            >
              Оформить заказ
            </a>

            <a
              href="#catalog"
              className="inline-flex items-center justify-center rounded-xl border border-white/35 bg-white/10 px-6 py-3 text-base font-medium text-white backdrop-blur-md transition hover:bg-white/18"
            >
              Каталог продукции
            </a>
          </div>
        </div>

        <div
          className={`flex justify-center pt-4 ${transitionIn} ${enter} delay-[450ms]`}
        >
          <a
            href="#catalog"
            className={`inline-flex text-white ${visible ? "animate-bounce" : ""}`}
            aria-label="Прокрутить к каталогу"
          >
            <svg
              className="h-9 w-9"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 5V19M12 19L6 13M12 19L18 13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}