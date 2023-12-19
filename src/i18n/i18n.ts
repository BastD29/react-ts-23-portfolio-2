import translationEN from "../locales/en";
import i18n, { Resource } from "i18next";
import { initReactI18next } from "react-i18next";

const resources: Resource = {
  en: {
    translation: translationEN,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
