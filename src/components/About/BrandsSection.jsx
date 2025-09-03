import React from 'react';
import styles from './BrandsSection.module.css';
import Wave from '../Graphics/Wave';
import { useTranslation } from 'react-i18next';
import AnimateOnScroll from '../Utils/AnimateOnScroll'; // Zorg dat dit pad klopt

const BrandsSection = () => {
  const { t } = useTranslation();
  // Array of brand keys for easier mapping
  const brandKeys = ['brand1', 'brand2', 'brand3', 'brand4', 'brand5', 'brand6', 'brand7', 'brand8', 'brand9'];

  return (
    <section className={styles.brandsSection}>
      <Wave color="#F9FAFB" direction="up" />
      <div className="container">
        <AnimateOnScroll animationClassName="animate-on-scroll">
          <div className={styles.sectionHeader}>
            <h2 className="font-prata">{t("AboutPage.brands.title")}</h2>
            <p>{t("AboutPage.brands.subtitle")}</p>
          </div>
        </AnimateOnScroll>
        <div className={styles.brandsGrid}>
          {brandKeys.map((key, index) => (
            <AnimateOnScroll
              key={key}
              // De wrapper krijgt nu de grid-kolom styling
              className={styles.brandCardWrapper}
              animationClassName={index % 2 === 0 ? 'animate-from-left' : 'animate-from-right'}
            >
              <div className={styles.brandCard}>{t(`AboutPage.brands.${key}`)}</div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
      <Wave color="#ECE6DB" direction="down" mirrored={false} />
    </section>
  );
};

export default BrandsSection;

