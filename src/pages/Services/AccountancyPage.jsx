import React from 'react';
import { useTranslation } from 'react-i18next';

// Importeer de nieuwe, herbruikbare componenten
import ServiceDetailHero from '../../components/Services/Details/ServiceDetailHero';
import ServiceDetailSection from '../../components/Services/Details/ServiceDetailSection';

const AccountancyPage = () => {
  const { t } = useTranslation();

  // Data voor de inhoudssecties specifiek voor deze pagina
  const sections = [
    {
      key: 'accountancy',
      imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop'
    },
    {
      key: 'payroll',
      imageUrl: 'https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=2070&auto=format&fit=crop'
    },
    {
      key: 'support',
      imageUrl: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop'
    },
    {
      key: 'audit',
      imageUrl: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?q=80&w=2071&auto=format&fit=crop'
    }
  ];

  const pageKey = 'AccountancyServicePage'; // Sleutel voor i18n

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

export default AccountancyPage;
