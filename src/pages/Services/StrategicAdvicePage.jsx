import React from 'react';
import { useTranslation } from 'react-i18next';

// Importeer de herbruikbare componenten
import ServiceDetailHero from '../../components/Services/Details/ServiceDetailHero';
import ServiceDetailSection from '../../components/Services/Details/ServiceDetailSection';

const StrategicAdvicePage = () => {
  const { t } = useTranslation();

  // Data voor de inhoudssecties specifiek voor deze pagina
  const sections = [
    {
      key: 'transfers',
      imageUrl: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop'
    },
    {
      key: 'financing',
      imageUrl: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=2070&auto=format&fit=crop'
    },
    {
      key: 'estate',
      imageUrl: 'https://images.unsplash.com/photo-1561414927-6d86591d0c4f?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  const pageKey = 'StrategicServicePage'; // Sleutel voor i18n

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

export default StrategicAdvicePage;
