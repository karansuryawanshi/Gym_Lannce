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
import Loader from "./components/Loader";
import { useState, useEffect } from "react";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    // If page already loaded (fast refresh case)
    if (document.readyState === "complete") {
      setIsLoading(false);
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <>
      <Loader isLoading={isLoading} />
      <div className={isLoading ? "pointer-events-none" : ""}>
        <Header />
        <Hero videoSrc={HeroVideo} onVideoLoaded={() => setIsLoading(false)} />
        <About />
        <Programs />
        <PricingSection />
        <TrainersSection />
        <SuccessStories />
        <GallerySection />
        <CallToAction />
        <ContactFreeTrialSection />
        <Footer />
      </div>
    </>
  );
};

export default App;
