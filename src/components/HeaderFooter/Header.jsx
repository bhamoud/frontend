// --- src/components/HeaderFooter/Header.js ---
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Header.module.css';
import logo from '../../assets/logo-wit.png';
import { Link } from 'react-router-dom';

const Header = ({ isMenuOpen, toggleMenu }) => {
  // Haal de t (translate) functie en het i18n object op
  const { t, i18n } = useTranslation();
  const [isLangOpen, setIsLangOpen] = useState(false);

  // Functie om de taal te wijzigen
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsLangOpen(false); // Sluit de dropdown na keuze
  };
  
  const closeAllMenus = () => {
    if (isMenuOpen) {
      toggleMenu();
    }
    setIsLangOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerContent}>
          <a href="/" className={styles.logoLink}>
            <img src={logo} alt="Koeleman Logo" className={styles.logoImg} />
            <div className={styles.logoTextContainer}>
              <h2 className={styles.logoTitle}>Koeleman</h2>
              <h5 className={`${styles.logoSubtitle} font-prata`} >accountants & belastingadviseurs</h5>
            </div>
          </a>

          <nav className={styles.navDesktop}>
            <Link to="/about" className={styles.navLink}>{t('header.nav_group')}</Link>
            <Link to="/diensten" className={styles.navLink}>{t('header.nav_services')}</Link>
            <a href="#werkenbij" className={styles.navLink}>{t('header.nav_careers')}</a>
            <a href="#nieuws" className={styles.navLink}>{t('header.nav_news')}</a>
            <a href="#contact" className={styles.navLink}>{t('header.nav_contact')}</a>

            {/* Taal-selector */}
            <div className={styles.langSelector}>
              <button onClick={() => setIsLangOpen(!isLangOpen)} className={styles.langButton}>
                <span className="material-symbols-outlined">
                  language
                </span>
              </button>
              {isLangOpen && (
                <div className={styles.langDropdown}>
                  <button onClick={() => changeLanguage('nl')} className={styles.langItem}>{t('header.lang_nl', 'Nederlands')}</button>
                  <button onClick={() => changeLanguage('en')} className={styles.langItem}>{t('header.lang_en', 'English')}</button>
                  <button onClick={() => changeLanguage('ru')} className={styles.langItem}>{t('header.lang_ru', 'Русский')}</button>
                  <button onClick={() => changeLanguage('zh')} className={styles.langItem}>{t('header.lang_zh', '简体中文')}</button>
                </div>
              )}
            </div>
          </nav>

          <div className={styles.mobileMenuContainer}>
            <button onClick={toggleMenu} className={styles.mobileMenuButton}>
              <svg className={styles.menuIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <Link to="/about" className={styles.mobileNavLink} onClick={closeAllMenus}>{t('header.nav_group')}</Link>
          <Link to="/diensten" className={styles.mobileNavLink} onClick={closeAllMenus}>{t('header.nav_services')}</Link>
          <a href="#werkenbij" className={styles.mobileNavLink} onClick={closeAllMenus}>{t('header.nav_careers')}</a>
          <a href="#nieuws" className={styles.mobileNavLink} onClick={closeAllMenus}>{t('header.nav_news')}</a>
          <a href="#contact" className={styles.mobileNavLink} onClick={closeAllMenus}>{t('header.nav_contact')}</a>
          {/* Taal-selector */}
          <div className={styles.langSelector}>
            <button onClick={() => setIsLangOpen(!isLangOpen)} className={styles.langButton}>
              <span className="material-symbols-outlined">
                language
              </span>              </button>
            {isLangOpen && (
              <div className={styles.langDropdown}>
                <button onClick={() => changeLanguage('nl')} className={styles.langItem}>{t('header.lang_nl', 'Nederlands')}</button>
                <button onClick={() => changeLanguage('en')} className={styles.langItem}>{t('header.lang_en', 'English')}</button>
                <button onClick={() => changeLanguage('ru')} className={styles.langItem}>{t('header.lang_ru', 'Русский')}</button>
                <button onClick={() => changeLanguage('zh')} className={styles.langItem}>{t('header.lang_zh', '简体中文')}</button>
              </div>
            )}
          </div>
        </div>

      )}
    </header>
  );
};

export default Header;
