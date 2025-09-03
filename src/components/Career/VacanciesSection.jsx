// src/components/Career/VacanciesSection.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './VacanciesSection.module.css';
import AnimateOnScroll from '../Utils/AnimateOnScroll';

const VacanciesSection = () => {
    const { t } = useTranslation();
    const vacancies = [
        { key: 'sr_accountant', image: 'https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=2070&auto=format&fit=crop' },
        { key: 'tax_advisor', image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop' },
        { key: 'jr_accountant', image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop' }
    ];

    return (
        <section className={styles.vacanciesSection}>
            <div className="container">
                <AnimateOnScroll>
                    <h2 className={`${styles.sectionTitle} font-prata`}>{t('CareerPage.vacancies.title')}</h2>
                </AnimateOnScroll>
                <div className={styles.list}>
                    {vacancies.map((vacancy, index) => (
                        <AnimateOnScroll key={vacancy.key} className={styles.vacancyItem}>
                            <div className={`${styles.vacancyCard} ${index % 2 !== 0 ? styles.reverse : ''}`}>
                                <div className={styles.textContainer}>
                                    <h3>{t(`CareerPage.vacancies.${vacancy.key}`)}</h3>
                                    <a href="#details" className={styles.vacancyLink}>{t('CareerPage.vacancies.view_button')}</a>
                                </div>
                                <div className={styles.imageContainer}>
                                    <img src={vacancy.image} alt={t(`CareerPage.vacancies.${vacancy.key}`)} />
                                </div>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VacanciesSection;