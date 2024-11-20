import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./translation/en.json";
import ru from "./translation/ru.json";

const resources = {
    en: {
        translation: en,
    },
    ru: {
        translation: ru,
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: "ru",
    fallbackLng: "en",
});

export default i18n;
