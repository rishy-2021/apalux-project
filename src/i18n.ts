import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./locales/en/translation.json";

declare module 'i18next' {
  interface CustomTypeOptions {
    returnNull: false;
  }
}

//Creating object with the variables of imported translation files
const resources = {
  en: {
    translation: translationEN,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    returnNull: false,
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;