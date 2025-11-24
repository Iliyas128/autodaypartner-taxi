import { useLanguage } from '@/contexts/LanguageContext';
import { ru } from '@/locales/ru';
import { kk } from '@/locales/kk';

const translations = {
  ru,
  kk
};

export const useTranslation = () => {
  const { language } = useLanguage();
  return translations[language];
};
