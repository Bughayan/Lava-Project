import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translationArm from "../languages/arm/translation.json";
import translationUsa from "../languages/usa/translation.json";
import translationRus from "../languages/rus/translation.json";

const resources = {
  usa: { translation: translationUsa },
  arm: { translation: translationArm },
  rus: { translation: translationRus },
};

export const languages = Object.keys(resources);

export const removeLngPrefix = (pathname) => {
  for (let lang of languages) {
    if (pathname.startsWith(`/${lang}/`) || pathname === `/${lang}`) {
      return pathname.replace(`/${lang}`, '');
    }
  }
  return pathname;
};

export const getLngFromUrl = (pathname) => {
  for (let lang of languages) {
    if (pathname.startsWith(`/${lang}/`) || pathname === `/${lang}`) {
      return lang;
    }
  }
  return null;
};

const lng = getLngFromUrl(window.location.pathname) || "arm";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "arm",
    resources,
    detection: { caches: ["cookie"] },
    lng,
  });

export default i18n;