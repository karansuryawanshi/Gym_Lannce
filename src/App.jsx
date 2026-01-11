import React from "react";
import HeroVideo from "./assets/HeroVideo.mp4";
import Hero from "./components/Hero";
import Header from "./components/Header";
import About from "./components/About";
import { Programs } from "./components/Programs";
import PricingSection from "./components/PricingSection";
import TrainersSection from "./components/TrainersSection";
import SuccessStories from "./components/SuccessStories";
import GallerySection from "./components/GallerySection";
import CallToAction from "./components/CallToAction";
import ContactFreeTrialSection from "./components/ContactFreeTrialSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Hero videoSrc={HeroVideo} />
      <About />
      <Programs />
      <PricingSection />
      <TrainersSection />
      <SuccessStories />
      <GallerySection />
      <CallToAction />
      <ContactFreeTrialSection />
      <Footer />
    </>
  );
};

export default App;
