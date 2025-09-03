import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './ServiceCard.module.css';
// Importeer de CSS met de animatieklassen
import '../../styles/alternating-animations.css';

const ServiceCard = ({ title, description, linkText, linkTo, imageUrl, index }) => {
  // Re-implementation of useScrollAnimation hook to resolve dependency error
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the element is intersecting the viewport, set isVisible to true
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stop observing the element once it's visible to prevent re-triggering
          observer.unobserve(entry.target);
        }
      },
      {
        // The animation will trigger when 65% of the element is visible
        threshold: 0.3,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    // Cleanup function to unobserve the element when the component unmounts
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  // Bepaal de uitlijning en animatieklasse op basis van de index (even of oneven)
  const isLeft = index % 2 === 0;
  const animationClass = isLeft ? 'animate-from-left' : 'animate-from-right';
  const alignmentClass = isLeft ? styles.alignLeft : styles.alignRight;

  return (
    // Deze wrapper div zorgt voor de positionering (links/rechts) en de animatie
    <div
      ref={ref}
      className={`
        ${styles.cardWrapper} 
        ${alignmentClass} 
        ${animationClass} 
        ${isVisible ? 'is-visible' : ''}
      `}
    >
      {/* The gradient element now gets its own 'isVisible' class directly */}
      <div 
        className={`${styles.gradientElement} ${isVisible ? styles.isVisible : ''}`}
      ></div>

      <Link to={linkTo} className={styles.card}>
        <div className={styles.cardImage} style={{ backgroundImage: `url(${imageUrl})` }}></div>
        <div className={styles.cardContent}>
          <h3 className="font-prata">{title}</h3>
          <p>{description}</p>
          <span className={styles.cardLink}>{linkText}</span>
        </div>
      </Link>
    </div>
  );
};

export default ServiceCard;

