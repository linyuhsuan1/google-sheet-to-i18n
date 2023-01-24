import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import zh from '../language/zh-TW.json';
import en from '../language/en-US.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en
    },
    zh: {
      translation: zh
    }
  },
  fallbackLng: 'zh',
  lng: 'zh',
  interpolation: {
    escapeValue: false // not needed for react!!
  }
});

export default i18n;
