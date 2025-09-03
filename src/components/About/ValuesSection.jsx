import React from 'react';
import styles from './ValuesSection.module.css';
import { useTranslation } from 'react-i18next';
import AnimateOnScroll from '../Utils/AnimateOnScroll'; // Zorg dat dit pad correct is

const ValuesSection = () => {
  const { t } = useTranslation();
  const valueKeys = ['value1', 'value2', 'value3', 'value4'];

  return (
    <section className={styles.valuesSection}>
      <div className="container">
        <AnimateOnScroll animationClassName="animate-on-scroll">
          <div className={styles.sectionHeader}>
            <h2 className="font-prata">{t("AboutPage.values.title")}</h2>
            <p>{t("AboutPage.values.subtitle")}</p>
          </div>
        </AnimateOnScroll>
        
        <div className={styles.valuesGrid}>
          {valueKeys.map((key, index) => (
            <AnimateOnScroll
              key={key}
              animationClassName={index % 2 === 0 ? 'animate-from-left' : 'animate-from-right'}
            >
              <div className={styles.valueCard}>
                <h3 className="font-prata">{t(`AboutPage.values.${key}_title`)}</h3>
                <p>{t(`AboutPage.values.${key}_desc`)}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;

