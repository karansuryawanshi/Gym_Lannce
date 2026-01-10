import React from "react";
import HeroVideo from "./assets/HeroVideo.mp4";
import Hero from "./components/Hero";
import Header from "./components/Header";
import About from "./components/About";
import { Programs } from "./components/Programs";
import PricingSection from "./components/PricingSection";

const App = () => {
  return (
    <>
      <Header />
      <Hero videoSrc={HeroVideo} />
      <About />
      <Programs />
      <PricingSection />
    </>
  );
};

export default App;
