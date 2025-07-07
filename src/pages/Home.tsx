import React from "react";
import Hero from "../components/Hero";
import FeaturedDesserts from "../components/FeaturedDesserts";
import AboutPreview from "../components/AboutPreview";
import TestimonialsPreview from "../components/TestimonialsPreview";
import FAQ from "../components/FAQ";
import HomeContactSection from "../components/HomeContactSection";
import EmotionalStorySection from "../components/EmotionalStorySection";
import InstagramCarousel from "../components/InstagramCarousel";
import PageTransition from "../components/PageTransition";

const Home = () => {
  return (
    <PageTransition>
      <Hero />
      <AboutPreview />
      <FeaturedDesserts />
      <EmotionalStorySection />
      <TestimonialsPreview />
      <InstagramCarousel />
      <FAQ />
      <HomeContactSection />
    </PageTransition>
  );
};

export default Home;
