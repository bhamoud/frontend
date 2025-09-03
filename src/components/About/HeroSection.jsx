import React from 'react';
import styles from './HeroSection.module.css';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroOverlay}></div>
      <div className={`container ${styles.heroContentContainer}`}>
        <h1 className={`${styles.heroTitle} font-prata`}>{t("AboutPage.hero.title")}</h1>
        <p className={styles.heroSubtitle}>{t("AboutPage.hero.subtitle")}</p>
      </div>
    </section>
  );
};

export default HeroSection;
