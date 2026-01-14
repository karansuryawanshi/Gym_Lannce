import React from "react";

const Hero = ({ videoSrc, onVideoLoaded }) => {
  return (
    <section className="relative min-h-screen w-full bg-black text-white overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={videoSrc}
        onLoadedData={onVideoLoaded}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40 md:from-black/95 md:via-black/80 md:to-transparent" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col md:flex-row items-center min-h-screen">
        {/* LEFT CONTENT */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6 animate-fadeIn">
          {/* Headline */}
          <h1 className="font-extrabold leading-tight tracking-tight text-3xl sm:text-5xl lg:text-6xl xl:text-7xl">
            Transform Your Body in{" "}
            <span className="bg-gradient-to-tl from-orange-700 via-orange-400 to-white bg-clip-text text-transparent">
              90 Days
            </span>
          </h1>

          {/* Sub Text */}
          <p className="text-gray-300 max-w-xl mx-auto md:mx-0 text-base sm:text-lg">
            Build strength, burn fat, and gain unstoppable confidence with
            expert trainers, proven programs, and a motivating fitness
            community.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <button className="bg-neutral-400/50 hover:bg-neutral-400/40 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-neutral-400">
              Book Free Trial
            </button>

            <button className="border border-white/70 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/40">
              Join Now
            </button>
          </div>

          {/* TRUST SIGNAL */}
          <p className="text-sm text-gray-300/70 pt-2">
            ⭐ Trusted by 2,000+ members • Certified trainers • Proven results
          </p>
        </div>

        {/* EMPTY RIGHT TO SHOW VIDEO SPLIT */}
        <div className="hidden md:block w-1/2" />
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 text-sm flex flex-col items-center animate-bounce-slow">
        <span>↓ Explore Programs</span>
      </div>
      {/* Section Fade Divider */}
      <div className="absolute bottom-0 left-0 w-full h-24 md:h-32 bg-gradient-to-b from-transparent to-black pointer-events-none" />
    </section>
  );
};

export default Hero;
