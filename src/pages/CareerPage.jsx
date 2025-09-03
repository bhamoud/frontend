// src/pages/CareerPage.jsx
import React from 'react';
import CareerHero from '../components/Career/CareerHero';
import CultureSection from '../components/Career/CultureSection';
import OfferingsSection from '../components/Career/OfferingsSection';
import VacanciesSection from '../components/Career/VacanciesSection';
import ApplySection from '../components/Career/ApplySection';

const CareerPage = () => {
  return (
    <>
      <CareerHero />
      <CultureSection />
      <OfferingsSection />
      <VacanciesSection />
      <ApplySection />
    </>
  );
};

export default CareerPage;