// src/components/Career/ApplySection.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './ApplySection.module.css';
import AnimateOnScroll from '../Utils/AnimateOnScroll';

const ApplySection = () => {
  const { t } = useTranslation();

  return (
    <AnimateOnScroll>
      <section className={styles.applySection}>
        <div className={`container ${styles.applyContainer}`}>
          <h2 className="font-prata">{t('CareerPage.apply.title')}</h2>
          <p>{t('CareerPage.apply.text')}</p>
          <a href="mailto:info@accountantskoeleman.com" className={styles.applyButton}>
            {t('CareerPage.apply.button')}
          </a>
        </div>
      </section>
    </AnimateOnScroll>
  );
};

export default ApplySection;