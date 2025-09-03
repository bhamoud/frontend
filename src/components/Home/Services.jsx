import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Services.module.css';
import AnimateOnScroll from '../Utils/AnimateOnScroll'; // Importeer het nieuwe component

const ServiceList = ({ items }) => {
  const { t } = useTranslation();
  return (
    <ul className={styles.serviceList}>
      {items.map((itemKey, index) => <li key={index}>{t(itemKey)}</li>)}
    </ul>
  );
};

const Services = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.servicesSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <AnimateOnScroll>
            <h2 className={`${styles.sectionTitle} font-prata`}>{t('HomePage.services.title')}</h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={150}>
            <p className={styles.sectionSubtitle}>
              {t('HomePage.services.subtitle')}
            </p>
          </AnimateOnScroll>
        </div>
        <div className={styles.servicesGrid}>
          <AnimateOnScroll delay={300}>
            <div className={styles.serviceCard}>
              <h3 className={`${styles.serviceTitle} font-prata`}>{t('HomePage.services.card1_title')}</h3>
              <p className={styles.serviceDescription}>{t('HomePage.services.card1_desc')}</p>
              <ServiceList items={['HomePage.services.card1_item1', 'HomePage.services.card1_item2', 'HomePage.services.card1_item3', 'HomePage.services.card1_item4']} />
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll delay={450}>
            <div className={styles.serviceCard}>
              <h3 className={`${styles.serviceTitle} font-prata`}>{t('HomePage.services.card2_title')}</h3>
              <p className={styles.serviceDescription}>{t('HomePage.services.card2_desc')}</p>
              <ServiceList items={['HomePage.services.card2_item1', 'HomePage.services.card2_item2', 'HomePage.services.card2_item3']} />
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll delay={600}>
            <div className={styles.serviceCard}>
              <h3 className={`${styles.serviceTitle} font-prata`}>{t('HomePage.services.card3_title')}</h3>
              <p className={styles.serviceDescription}>{t('HomePage.services.card3_desc')}</p>
              <ServiceList items={['HomePage.services.card3_item1', 'HomePage.services.card3_item2', 'HomePage.services.card3_item3']} />
            </div>
          </AnimateOnScroll>
          {/* Geef de grid-spanning class door aan de AnimateOnScroll wrapper */}
          <AnimateOnScroll delay={300} className={styles.serviceCardHighlightWrapper}>
            <div className={styles.serviceCardHighlight}>
              <h3 className={`${styles.serviceTitleHighlight} font-prata`}>{t('HomePage.services.card4_title')}</h3>
              <p className={styles.serviceDescriptionHighlight}>{t('HomePage.services.card4_desc')}</p>
              <a href="#online" className={styles.serviceLinkHighlight}>
                {t('HomePage.services.card4_link')}
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Services;
