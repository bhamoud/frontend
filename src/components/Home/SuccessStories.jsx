import React from 'react';
import { useTranslation } from 'react-i18next';
import Wave from '../Graphics/Wave';
import styles from './SuccessStories.module.css';
import AnimateOnScroll from '../Utils/AnimateOnScroll';

const StoryCard = ({ image, titleKey, textKey }) => {
    const { t } = useTranslation();
    return (
        <div className={styles.storyCard}>
            <img src={image} alt={t(titleKey)} className={styles.storyImage} />
            <div className={styles.storyContent}>
                <h3 className={`${styles.storyTitle} font-prata`}>{t(titleKey)}</h3>
                <p className={styles.storyDescription}>{t(textKey)}</p>
            </div>
        </div>
    );
};

const SuccessStories = () => {
    const { t } = useTranslation();
    return (
        <section className={styles.storiesSection}>
            <div className={styles.waveUpWrapper}>
                <Wave color="#F9FAFB" direction="up" />
            </div>
            <div className={`container ${styles.storiesContainer}`}>
                <div className={styles.sectionHeader}>
                    <AnimateOnScroll>
                        <h2 className={`${styles.sectionTitle} font-prata`}>{t('HomePage.stories.title')}</h2>
                    </AnimateOnScroll>
                    <AnimateOnScroll delay={150}>
                        <p className={styles.sectionSubtitle}>
                            {t('HomePage.stories.subtitle')}
                        </p>
                    </AnimateOnScroll>
                </div>
                <div className={styles.storiesGrid}>
                    <AnimateOnScroll delay={300}>
                        <StoryCard 
                            image="https://placehold.co/600x400/193269/ebe6db?text=Groei"
                            titleKey="HomePage.stories.story1_title"
                            textKey="HomePage.stories.story1_desc"
                        />
                    </AnimateOnScroll>
                    <AnimateOnScroll delay={450}>
                        <StoryCard 
                            image="https://placehold.co/600x400/9e8a5e/ffffff?text=Besparing"
                            titleKey="HomePage.stories.story2_title"
                            textKey="HomePage.stories.story2_desc"
                        />
                    </AnimateOnScroll>
                    <AnimateOnScroll delay={600}>
                        <StoryCard 
                            image="https://placehold.co/600x400/ECE6DB/193269?text=Inzicht"
                            titleKey="HomePage.stories.story3_title"
                            textKey="HomePage.stories.story3_desc"
                        />
                    </AnimateOnScroll>
                </div>
            </div>
            <Wave color="#ECE6DB" direction="down" mirrored={false}/>
        </section>
    );
};

export default SuccessStories;

