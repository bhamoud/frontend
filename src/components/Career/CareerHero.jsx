// src/components/Career/CareerHero.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './CareerHero.module.css';
import AnimateOnScroll from '../Utils/AnimateOnScroll';

const CareerHero = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.heroSection}>
      <div className="container">
        <div className={styles.heroContent}>
          <AnimateOnScroll className={styles.heroText}>
            <h1 className={`${styles.heroTitle} font-prata`}>{t('CareerPage.hero.title')}</h1>
            <p className={styles.heroSubtitle}>{t('CareerPage.hero.subtitle')}</p>
          </AnimateOnScroll>
          <div className={styles.heroImageContainer}>
            <img 
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop" 
              alt={t('CareerPage.hero.title')}
              className={styles.heroImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerHero;