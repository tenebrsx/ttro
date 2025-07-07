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
import SEO from "../components/SEO";

const Home = () => {
  return (
    <PageTransition>
      <SEO
        title="Cucinanostrard - Postres Artesanales que Abrazan el Alma"
        description="Descubre los postres más exquisitos de Santo Domingo. Tartas personalizadas, macarons franceses, cupcakes únicos y dulces artesanales hechos con amor. Pedidos fáciles por WhatsApp."
        keywords={[
          "postres artesanales Santo Domingo",
          "tartas personalizadas",
          "macarons franceses",
          "cupcakes artesanales",
          "repostería dominicana",
          "dulces gourmet",
          "pedidos WhatsApp",
          "postres para eventos",
          "galletas decoradas",
          "desserts República Dominicana",
        ]}
        url="/"
        type="website"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "https://cucinanostrard.com",
          name: "Cucinanostrard",
          description:
            "Postres artesanales y repostería gourmet en Santo Domingo, República Dominicana. Especialistas en tartas personalizadas, macarons franceses y dulces únicos.",
          url: "https://cucinanostrard.com",
          telephone: "+1-809-XXX-XXXX",
          priceRange: "$$",
          image: "https://cucinanostrard.com/images/hero-desserts.jpg",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Santo Domingo",
            addressCountry: "DO",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: "18.4861",
            longitude: "-69.9312",
          },
          openingHours: ["Mo-Fr 09:00-18:00", "Sa 09:00-15:00"],
          servesCuisine: "Desserts",
          paymentAccepted: "WhatsApp Orders",
          hasMenu: "https://cucinanostrard.com/menu",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "127",
          },
        }}
      />
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
