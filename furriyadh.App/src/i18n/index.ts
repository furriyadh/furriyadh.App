import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// الترجمات
import translationAR from './locales/ar.json';
import translationEN from './locales/en.json';

const resources = {
  ar: {
    translation: translationAR
  },
  en: {
    translation: translationEN
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ar', // اللغة الافتراضية
    fallbackLng: 'ar',
    interpolation: {
      escapeValue: false // لا داعي للهروب من HTML
    }
  });

export default i18n;
