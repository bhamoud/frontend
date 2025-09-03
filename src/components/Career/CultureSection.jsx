// src/components/Career/CultureSection.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './CultureSection.module.css';
import AnimateOnScroll from '../Utils/AnimateOnScroll';

const CultureSection = () => {
    const { t } = useTranslation();

    return (
        <section className={styles.cultureSection}>
            <div className="container">
                <div className={styles.cultureContent}>
                    <AnimateOnScroll animationClassName="animate-from-left" className={styles.imageWrapper}>
                         <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" alt={t('CareerPage.culture.title')} className={styles.cultureImage} />
                    </AnimateOnScroll>
                    <AnimateOnScroll animationClassName="animate-from-right" className={styles.textWrapper}>
                        <h2 className="font-prata">{t('CareerPage.culture.title')}</h2>
                        <p>{t('CareerPage.culture.text')}</p>
                    </AnimateOnScroll>
                </div>
            </div>
        </section>
    );
};

export default CultureSection;