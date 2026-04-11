"use client";

import { useEffect, useState } from "react";

const COOKIE_KEY = "filterflow_cookie_consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(COOKIE_KEY);
    if (!saved) {
      setVisible(true);
    }
  }, []);

  function acceptCookies() {
    window.localStorage.setItem(COOKIE_KEY, "accepted");
    setVisible(false);
  }

  function declineCookies() {
    window.localStorage.setItem(COOKIE_KEY, "declined");
    setVisible(false);
  }

  function moreInfo() {
    window.location.href = "/politika-konfidencialnosti";
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 z-[100] w-[calc(100%-24px)] max-w-[1320px] -translate-x-1/2 rounded-[22px] border border-[#f1e6dd] bg-white/95 px-5 py-4 shadow-[0_10px_35px_rgba(15,23,42,0.10)] backdrop-blur md:bottom-5 md:px-6 md:py-5">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-6">
        <div className="flex items-start gap-4">
          <div className="mt-1 h-5 w-5 rounded-full bg-[#f7d8cc] shrink-0" />

          <div className="max-w-[760px]">
            <div className="mb-1 text-[15px] font-semibold leading-[1.35] text-[#1f2937]">
              Мы используем файлы cookie
            </div>

            <p className="text-[13px] leading-[1.6] text-[#6b7280] md:text-[14px]">
              Мы используем файлы cookie для улучшения работы сайта, анализа
              трафика и персонализации контента. Продолжая пользоваться сайтом,
              вы соглашаетесь с использованием файлов cookie.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 md:justify-end">
          <button
            type="button"
            onClick={moreInfo}
            className="inline-flex h-10 items-center justify-center rounded-[10px] border border-[#e5e7eb] bg-white px-4 text-[13px] font-medium text-[#4b5563] transition hover:bg-[#f9fafb]"
          >
            Подробнее
          </button>

          <button
            type="button"
            onClick={declineCookies}
            className="inline-flex h-10 items-center justify-center rounded-[10px] border border-[#e5e7eb] bg-white px-4 text-[13px] font-medium text-[#4b5563] transition hover:bg-[#f9fafb]"
          >
            Отклонить
          </button>

          <button
            type="button"
            onClick={acceptCookies}
            className="inline-flex h-10 items-center justify-center rounded-[10px] bg-[#ff7a3d] px-5 text-[13px] font-semibold text-white transition hover:bg-[#f26d2f]"
          >
            Принять
          </button>
        </div>
      </div>
    </div>
  );
}