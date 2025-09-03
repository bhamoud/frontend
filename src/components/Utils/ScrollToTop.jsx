import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  // Haal de huidige locatie (URL) op
  const { pathname } = useLocation();

  // Gebruik een useEffect hook die wordt uitgevoerd telkens als de 'pathname' verandert
  useEffect(() => {
    // Scroll het venster naar de absolute top (0, 0)
    window.scrollTo(0, 0);
  }, [pathname]); // De dependency array zorgt ervoor dat dit effect alleen draait bij een URL-wijziging

  // Dit component rendert zelf niets op het scherm
  return null;
};

export default ScrollToTop;
