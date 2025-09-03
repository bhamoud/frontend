import React from 'react';
import styles from './ServiceDetailHero.module.css';
import Wave from '../../Graphics/Wave'; // Pas het pad eventueel aan

const ServiceDetailHero = ({ breadcrumb, title, subtitle }) => {
  return (
    <section className={styles.heroSection}>
      <div className={`container ${styles.heroContentContainer}`}>
        {breadcrumb && <p className={styles.breadcrumb}>{breadcrumb}</p>}
        <h1 className={`${styles.heroTitle} font-prata`}>{title}</h1>
        <p className={styles.heroSubtitle}>{subtitle}</p>
      </div>
    </section>
  );
};

export default ServiceDetailHero;
