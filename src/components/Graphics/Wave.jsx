// --- src/components/Shared/Wave.js ---
import React from 'react';
import styles from './Wave.module.css';

const Wave = ({ color, direction = 'up', mirrored = false }) => {
  // Het standaard "recept" voor de golf (dal-vorm)
  const pathDefault = "M1440,88.3C1212.5,134.8,1052.3,21.3,840,8.3C627.7,-4.7,432.5,73.3,0,120V0h1440V88.3z";
  
  // Het nieuwe, 180 graden gedraaide "recept" (piek-vorm)
  const pathDown = "M0,31.7C217.5,-14.8,377.7,103.7,590,116.7C802.3,129.7,997.5,51.7,1440,0H0V31.7z";

  return (
    <div className={`${styles.wave} ${direction === 'down' ? styles.waveDown : ''} ${mirrored ? styles.mirrored : ''}`}>
      <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        {/* Kiest het juiste "recept" op basis van de direction prop */}
        <path d={direction === 'down' ? pathDown : pathDefault} fill={color} />
      </svg>
    </div>
  );
};

export default Wave;
