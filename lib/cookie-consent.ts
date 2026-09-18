export const COOKIE_KEY = "filterflow_cookie_consent";
export const COOKIE_CONSENT_EVENT = "filterflow-cookie-consent";

export type CookieConsentValue = "accepted" | "declined";

export function getCookieConsent(): CookieConsentValue | null {
  if (typeof window === "undefined") return null;
  const value = window.localStorage.getItem(COOKIE_KEY);
  if (value === "accepted" || value === "declined") return value;
  return null;
}

export function setCookieConsent(value: CookieConsentValue) {
  window.localStorage.setItem(COOKIE_KEY, value);
  window.dispatchEvent(new Event(COOKIE_CONSENT_EVENT));
}
