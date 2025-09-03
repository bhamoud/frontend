// --- src/components/HeaderFooter/Footer.js ---
import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Footer.module.css';
import logo from '../../assets/logo-wit.png';
import morisonLogo from '../../assets/morison-global-logo.png';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footerContainer}`}>
                <div className={styles.footerGrid}>
                    <div className={styles.footerBranding}>
                        <a href="/" className={styles.footerLogoLink}>
                            <img src={logo} alt="Koeleman Logo" className={styles.footerLogoImg} />
                            <div className={styles.footerLogoTextContainer}>
                                <h2 className={styles.footerLogoTitle}>Koeleman</h2>
                                <h5 className={`${styles.footerLogoSubtitle} font-prata`}>accountants & belastingadviseurs</h5>
                            </div>
                        </a>
                        <img src={morisonLogo} alt="Morison Global Logo" className={styles.morisonLogo} />
                    </div>
                    <div>
                        <h4 className={styles.footerHeading}>{t('footer.nav_title')}</h4>
                        <ul className={styles.footerLinkList}>
                            <li><a href="#groep" className={styles.footerLink}>{t('header.nav_group')}</a></li>
                            <li><a href="#diensten" className={styles.footerLink}>{t('header.nav_services')}</a></li>
                            <li><a href="#werkenbij" className={styles.footerLink}>{t('header.nav_careers')}</a></li>
                            <li><a href="#nieuws" className={styles.footerLink}>{t('header.nav_news')}</a></li>
                            <li><a href="#contact" className={styles.footerLink}>{t('header.nav_contact')}</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className={styles.footerHeading}>{t('footer.contact_title')}</h4>
                        <ul className={styles.footerLinkList}>
                            <li>Vreelandseweg 7, 1216 CG Hilversum</li>
                            <li>035-6244341</li>
                            <li>info@accountantskoeleman.com</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className={styles.footerHeading}>{t('footer.social_title')}</h4>
                        <div className={styles.socialLinks}>
                            <a href="#linkedin" className={styles.socialLink} aria-label="LinkedIn">
                                <svg className={styles.socialIcon} fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={styles.footerBottom}>
                    <p className={styles.slogan}>Inspire, Improve, Impact</p>
                    <p>&copy; {new Date().getFullYear()} Koeleman. {t('footer.copyright')}</p>
                    <div className={styles.footerLegalLinks}>
                        <a href="#privacy" className={styles.footerLink}>{t('footer.privacy')}</a>
                        <a href="#terms" className={styles.footerLink}>{t('footer.terms')}</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
