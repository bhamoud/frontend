import React from 'react';
import { useTranslation } from 'react-i18next';

// Importeer de herbruikbare componenten
import ServiceDetailHero from '../../components/Services/Details/ServiceDetailHero';
import ServiceDetailSection from '../../components/Services/Details/ServiceDetailSection';

const TaxLegalPage = () => {
  const { t } = useTranslation();

  // Data voor de inhoudssecties specifiek voor deze pagina
  const sections = [
    {
      key: 'tax',
      imageUrl: 'https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=2070&auto=format&fit=crop'
    },
    {
      key: 'legal',
      imageUrl: 'https://images.unsplash.com/photo-1590004845575-cc18b13d1d0a?q=80&w=1974&auto=format&fit=crop'
    },
    {
      key: 'privacy',
      imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  const pageKey = 'TaxLegalServicePage'; // Sleutel voor i18n

  return (
    <>
      <ServiceDetailHero
        breadcrumb={`${t('header.nav_services')} / ${t(`${pageKey}.hero.title`)}`}
        title={t(`${pageKey}.hero.title`)}
        subtitle={t(`${pageKey}.hero.subtitle`)}
      />

      <main>
        <div className="container">
          {sections.map((section, index) => (
            <ServiceDetailSection
              key={section.key}
              title={t(`${pageKey}.${section.key}.title`)}
              text={t(`${pageKey}.${section.key}.text`)}
              imageUrl={section.imageUrl}
              reverse={index % 2 !== 0} // Wissel de layout om en om
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default TaxLegalPage;
