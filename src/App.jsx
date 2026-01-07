import React from "react";
import HeroVideo from "./assets/HeroVideo.mp4";
import Hero from "./components/Hero";
import Header from "./components/Header";
import About from "./components/About";

const App = () => {
  return (
    <>
      <Header />
      <Hero videoSrc={HeroVideo} />
      <About></About>
    </>
  );
};

export default App;
