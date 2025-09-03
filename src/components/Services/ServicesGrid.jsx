import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './ServicesGrid.module.css';
import ServiceCard from './ServiceCard';

const ServicesGrid = () => {
  const { t } = useTranslation();

  const services = [
    {
      key: 'accountancy',
      imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1911&auto=format&fit=crop"
    },
    {
      key: 'tax_legal',
      imageUrl: "https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=2070&auto=format&fit=crop"
    },
    {
      key: 'strategic',
      imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
    },
    {
      key: 'ict',
      imageUrl: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    // De section bevat nu een 'overflow-x: hidden' om scrollbars tijdens de animatie te voorkomen
    <section className={styles.servicesSection}>
      <div className="container">
        {/* De class is hernoemd van 'servicesGrid' naar 'servicesList' voor duidelijkheid */}
        <div className={styles.servicesList}>
          {/* We voegen 'index' toe aan de map-functie om te bepalen of een kaart links of rechts moet uitlijnen */}
          {services.map((service, index) => (
            <ServiceCard
              key={service.key}
              index={index} // Geef de index door als prop
              title={t(`ServicesPage.cards.${service.key}.title`)}
              description={t(`ServicesPage.cards.${service.key}.description`)}
              linkText={`${t(`ServicesPage.cards.${service.key}.link`)} →`}
              linkTo={`/diensten/${service.key.replace('_', '-')}`}
              imageUrl={service.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
