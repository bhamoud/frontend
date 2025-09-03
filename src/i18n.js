// --- src/i18n.js ---
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';

i18n
  .use(HttpApi) // Laadt vertalingen van je server (uit de /public map)
  .use(initReactI18next) // Koppelt i18n aan React
  .init({
    // De standaardtaal
    fallbackLng: 'nl',
    debug: true, // Zet op 'false' in productie

    // Opties voor react-i18next
    react: {
      // AANGEPAST: Zet Suspense aan. Dit is de belangrijkste wijziging.
      useSuspense: true, 
    },
    
    // Opties voor de backend
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // Pad naar je JSON-bestanden
    },
  });

export default i18n;
