import React from 'react';
import styles from './StorySection.module.css';
import { useTranslation } from 'react-i18next';
import AnimateOnScroll from '../Utils/AnimateOnScroll'; // Zorg dat dit pad correct is

const StorySection = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.storySection}>
      <div className={`container ${styles.storyContainer}`}>
        <AnimateOnScroll animationClassName="animate-from-left">
          <div className={styles.storyImage}>
            <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2232&auto=format&fit=crop" alt="Team in overleg" />
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll animationClassName="animate-from-right">
          <div className={styles.storyText}>
            <h2 className="font-prata">{t("AboutPage.story.title")}</h2>
            <p>
              {t("AboutPage.story.paragraph1")}
            </p>
            <p>
              {t("AboutPage.story.paragraph2")}
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default StorySection;
