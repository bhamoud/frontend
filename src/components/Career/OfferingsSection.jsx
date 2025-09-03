// src/components/Career/OfferingsSection.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './OfferingsSection.module.css';
import AnimateOnScroll from '../Utils/AnimateOnScroll';

const OfferingsSection = () => {
  const { t } = useTranslation();
  const offerings = ['offering1', 'offering2', 'offering3', 'offering4'];

  return (
    <section className={styles.offeringsSection}>
      <div className="container">
        <AnimateOnScroll>
          <h2 className={`${styles.sectionTitle} font-prata`}>{t('CareerPage.offerings.title')}</h2>
        </AnimateOnScroll>
        <div className={styles.grid}>
          {offerings.map((item, index) => (
            <AnimateOnScroll key={item} delay={150 * (index + 1)}>
              <div className={styles.card}>
                <h3>{t(`CareerPage.offerings.${item}.title`)}</h3>
                <p>{t(`CareerPage.offerings.${item}.text`)}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferingsSection;