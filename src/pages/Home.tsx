import Hero from '../components/Hero';
import FeaturedDesserts from '../components/FeaturedDesserts';
import AboutPreview from '../components/AboutPreview';
import TestimonialsPreview from '../components/TestimonialsPreview';
import FAQ from '../components/FAQ';
import HomeContactSection from '../components/HomeContactSection';
import EmotionalStorySection from '../components/EmotionalStorySection';
import StickyInstagramButton from '../components/StickyInstagramButton';

const Home = () => {
  return (
    <>
      <Hero />
      <AboutPreview />
      <FeaturedDesserts />
      <EmotionalStorySection />
      <TestimonialsPreview />
      <FAQ />
      <HomeContactSection />
      <StickyInstagramButton />
    </>
  );
};

export default Home;