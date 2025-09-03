// --- src/pages/HomePage.jsx ---
import React from 'react';
import Hero from '../components/Home/Hero';
import Services from '../components/Home/Services';
import SuccessStories from '../components/Home/SuccessStories';
import CTA from '../components/Home/CTA';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Services />
      <SuccessStories />
      <CTA />
    </>
  );
};

export default HomePage;
