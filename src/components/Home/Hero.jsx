import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Hero.module.css';
import useScrollAnimation from '../../hooks/useScrollAnimation'; // Importeer de hook

const Hero = () => {
  const { t } = useTranslation();
  // Gebruik de hook. De 'threshold' bepaalt hoeveel van het element zichtbaar moet zijn.
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.15 });

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroOverlay}></div>
      <div className={`container ${styles.heroContentContainer}`}>
        {/* Voeg de ref en de CSS-klassen toe */}
        <div 
          ref={ref} 
          className={`${styles.heroTextContent} animate-on-scroll ${isVisible ? 'is-visible' : ''}`}
        >
          <h1 className={`${styles.heroTitle} font-prata`}>
            {t('HomePage.hero.title')}
          </h1>
          <p className={styles.heroSubtitle}>
            {t('HomePage.hero.subtitle')}
          </p>
          <a href="#consult" className={styles.heroCtaButton}>
            {t('HomePage.hero.cta_button')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
