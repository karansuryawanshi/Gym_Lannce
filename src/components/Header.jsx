import React, { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
      ${
        isScrolled
          ? "bg-black/90 backdrop-blur-md shadow-lg"
          : "bg-transparent shadow-none"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <div
          className="text-2xl font-extrabold text-white cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          FITZONE
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8 text-white">
          <a href="#home" className="hover:text-orange-400 transition">
            Home
          </a>
          <a href="#programs" className="hover:text-orange-400 transition">
            Programs
          </a>
          <a href="#pricing" className="hover:text-orange-400 transition">
            Pricing
          </a>
          <a href="#trainers" className="hover:text-orange-400 transition">
            Trainers
          </a>
          <a href="#contact" className="hover:text-orange-400 transition">
            Contact
          </a>

          {/* Header CTA */}
          <button className="border border-white px-5 py-2 rounded-full hover:bg-white hover:text-black transition">
            Free Trial
          </button>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 text-white px-6 py-6 space-y-6 absolute top-full left-0 w-full min-h-[80vh]">
          <a
            onClick={() => setMenuOpen(false)}
            href="#home"
            className="block text-xl"
          >
            Home
          </a>
          <a
            onClick={() => setMenuOpen(false)}
            href="#programs"
            className="block text-xl"
          >
            Programs
          </a>
          <a
            onClick={() => setMenuOpen(false)}
            href="#pricing"
            className="block text-xl"
          >
            Pricing
          </a>
          <a
            onClick={() => setMenuOpen(false)}
            href="#trainers"
            className="block text-xl"
          >
            Trainers
          </a>
          <a
            onClick={() => setMenuOpen(false)}
            href="#contact"
            className="block text-xl"
          >
            Contact
          </a>

          <button className="border border-white w-full py-3 rounded-full hover:bg-white hover:text-black transition">
            Free Trial
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
