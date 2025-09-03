import { useEffect, useRef, useState } from 'react';

const useScrollAnimation = (options) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // We triggeren de animatie alleen als het element voor een bepaald percentage in beeld is
      if (entry.isIntersecting) {
        setIsVisible(true);
        // Stop met observeren nadat de animatie is geactiveerd
        observer.unobserve(entry.target);
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    // Cleanup-functie om de observer te ontkoppelen als het component unmount
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return [ref, isVisible];
};

export default useScrollAnimation;
