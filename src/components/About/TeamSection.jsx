import React from 'react';
import styles from './TeamSection.module.css';
import Wave from '../Graphics/Wave';
import { useTranslation } from 'react-i18next';
import AnimateOnScroll from '../Utils/AnimateOnScroll'; // Zorg dat dit pad correct is

const TeamSection = () => {
  const { t } = useTranslation();
  const teamMembers = [
    { name: 'Edo de Jong', role: 'Directie', image: 'https://placehold.co/400x400/193269/FFFFFF?text=Edo' },
    { name: 'Shirly Zhang', role: 'Senior Accountant', image: 'https://placehold.co/400x400/193269/FFFFFF?text=Shirly' },
    { name: 'Fred Snelderwaard', role: 'Directie', image: 'https://placehold.co/400x400/193269/FFFFFF?text=Fred' },
    { name: 'Shantie Kanhai', role: 'Hr manager', image: 'https://placehold.co/400x400/193269/FFFFFF?text=Shantie' },
  ];

  return (
    <section className={styles.teamSection}>
      <div className={"container"}>
        <AnimateOnScroll animationClassName="animate-on-scroll">
          <div className={styles.sectionHeader}>
            <h2 className="font-prata">{t("AboutPage.team.title")}</h2>
            <p>{t("AboutPage.team.subtitle")}</p>
          </div>
        </AnimateOnScroll>
        <div className={styles.teamGrid}>
          {teamMembers.map((member, index) => (
            <AnimateOnScroll
              key={index}
              animationClassName={index % 2 === 0 ? 'animate-from-left' : 'animate-from-right'}
            >
              <div className={styles.teamCard}>
                <img src={member.image} alt={member.name} className={styles.teamImage} />
                <h3 className="font-prata">{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
      <Wave color="#ECE6DB" direction="down" mirrored={false} />
    </section>
  );
};

export default TeamSection;

