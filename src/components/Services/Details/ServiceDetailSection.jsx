import React from 'react';
import styles from './ServiceDetailSection.module.css';

const ServiceDetailSection = ({ title, text, imageUrl, reverse = false }) => {
  return (
    <section className={`${styles.contentSection} ${reverse ? styles.reverse : ''}`}>
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt={title} />
      </div>
      <div className={styles.textContainer}>
        <h2 className="font-prata">{title}</h2>
        <p>{text}</p>
      </div>
    </section>
  );
};

export default ServiceDetailSection;
