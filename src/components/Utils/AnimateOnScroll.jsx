import React from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation'; // Zorg dat het pad correct is

/**
 * Een wrapper-component dat zijn kinderen animeert wanneer ze in beeld komen.
 * @param {object} props
 * @param {React.ReactNode} props.children De elementen om te animeren.
 * @param {number} [props.delay=0] De vertraging in milliseconden voor de animatie.
 * @param {string} [props.className=''] Extra CSS-klassen voor de wrapper.
 */
const AnimateOnScroll = ({ children, delay = 0, className = '' }) => {
  // We gebruiken onze bestaande hook, maar nu per element.
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  const style = {
    transitionDelay: `${delay}ms`,
  };

  // Combineer eventuele doorgegeven classNames met de animatieklassen.
  const combinedClassName = `${className} animate-on-scroll ${isVisible ? 'is-visible' : ''}`.trim();

  return (
    <div ref={ref} style={style} className={combinedClassName}>
      {children}
    </div>
  );
};

export default AnimateOnScroll;
