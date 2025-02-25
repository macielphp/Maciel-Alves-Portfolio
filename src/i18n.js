import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en.json';
import ptTranslation from './locales/pt.json';
import esTranslation from './locales/es.json';  
import frTranslation from './locales/fr.json';

const gistUrl = 'https://gist.githubusercontent.com/macielphp/d17682882ed9b54e077fedaf2e4ea059/raw/79a499e77b55791bba301313e0aa8848e6a5a253/gistfile1.txt';

const loadTranslations = async (language) => {
  try {
    const response = await fetch(gistUrl);
    const text = await response.text();
    const data = JSON.parse(text);
    return data[language] 
  } catch (error) {
    console.error('Erro ao carregar traduções do Gist:', error);
    return null;
  }
};

i18n.use(initReactI18next).init({
    resources: {
      en: { translation: enTranslation },
      pt: { translation: ptTranslation },
      es: { translation: esTranslation },
      fr: { translation: frTranslation },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    }
  });

i18n.on('languageChanged', async (lng) => {
  const gistTranslations = await loadTranslations(lng);
  if (gistTranslations) {
    i18n.addResourceBundle(lng, 'translation', gistTranslations, true, true);
  }
});

export default i18n;