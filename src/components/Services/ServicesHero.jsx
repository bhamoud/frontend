import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './ServicesHero.module.css';

const ServicesHero = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroOverlay}></div>
      <div className={`container ${styles.heroContentContainer}`}>
        <h1 className={`${styles.heroTitle} font-prata`}>{t('ServicesPage.hero.title')}</h1>
        <p className={styles.heroSubtitle}>{t('ServicesPage.hero.subtitle')}</p>
      </div>
    </section>
  );
};

export default ServicesHero;
