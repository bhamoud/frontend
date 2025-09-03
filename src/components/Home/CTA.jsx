// --- src/components/Home/CTA.js ---
import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './CTA.module.css';
import useScrollAnimation from '../../hooks/useScrollAnimation'; // Importeer de hook

const CTA = () => {
    const { t } = useTranslation();
    const [ref, isVisible] = useScrollAnimation({ threshold: 0.15 });

   return (
        <section 
            ref={ref}
            className={`${styles.ctaSection} animate-on-scroll ${isVisible ? 'is-visible' : ''}`}
        >
            <div className={`container ${styles.ctaContainer}`}>
                <h2 className={`${styles.ctaTitle} font-prata`}>{t('HomePage.cta.title')}</h2>
                <p className={styles.ctaSubtitle}>
                    {t('HomePage.cta.subtitle')}
                </p>
                <a href="#contact" className={styles.ctaButton}>
                    {t('HomePage.cta.button')}
                </a>
            </div>
        </section>
    );
};

export default CTA;
