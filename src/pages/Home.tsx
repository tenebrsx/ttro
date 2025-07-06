import React from 'react';
import Hero from '../components/Hero';
import FeaturedDesserts from '../components/FeaturedDesserts';
import AboutPreview from '../components/AboutPreview';
import TestimonialsPreview from '../components/TestimonialsPreview';
import FAQ from '../components/FAQ';
import HomeContactSection from '../components/HomeContactSection';

const Home = () => {
  return (
    <>
      <Hero />
      <AboutPreview />
      <FeaturedDesserts />
      <TestimonialsPreview />
      <FAQ />
      <HomeContactSection />
    </>
  );
};

export default Home;