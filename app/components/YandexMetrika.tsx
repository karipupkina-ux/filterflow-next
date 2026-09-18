"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { COOKIE_CONSENT_EVENT, getCookieConsent } from "@/lib/cookie-consent";

export default function YandexMetrika() {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const syncConsent = () => {
      setAllowed(getCookieConsent() === "accepted");
    };

    syncConsent();
    window.addEventListener(COOKIE_CONSENT_EVENT, syncConsent);
    return () => window.removeEventListener(COOKIE_CONSENT_EVENT, syncConsent);
  }, []);

  if (!allowed) return null;

  return (
    <Script id="yandex-metrika" strategy="lazyOnload">
      {`
        (function(m,e,t,r,i,k,a){
          m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();
          for (var j = 0; j < document.scripts.length; j++) {
            if (document.scripts[j].src === r) { return; }
          }
          k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a);
        })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

        ym(109113581, "init", {
          webvisor: true,
          clickmap: true,
          trackLinks: true,
          accurateTrackBounce: true
        });
      `}
    </Script>
  );
}
