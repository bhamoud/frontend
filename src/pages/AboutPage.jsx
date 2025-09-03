import React from 'react';

// Importeer de nieuwe sectie-componenten
import HeroSection from '../components/About/HeroSection';
import StorySection from '../components/About/StorySection';
import BrandsSection from '../components/About/BrandsSection';
import TeamSection from '../components/About/TeamSection';
import ValuesSection from '../components/About/ValuesSection';

const AboutPage = () => {
  return (
    <>
      <HeroSection />
      <StorySection />
      <BrandsSection />
      <TeamSection />
      <ValuesSection />
    </>
  );
};

export default AboutPage;
