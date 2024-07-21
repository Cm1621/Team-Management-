import React from "react";
import Navbar from '../Components/LandingPage/Navbar';
import HeroSection from '../Components/LandingPage/HeroSection';
import Feature from '../Components/LandingPage/Feature';
import AboutUs from "../Components/LandingPage/AboutUs";
import Princing from '../Components/LandingPage/Princing';
import Footer from '../Components/LandingPage/Footer';

function LandingPage() {
  return (
    <>
      <Navbar />
      <div id="hero-section">
        <HeroSection />
      </div>
      <div id="About">
        <AboutUs />
      </div>
      <div id="features">
        <Feature />
      </div>
      <div id="pricing">
        <Princing />
      </div>
      <Footer />
    </>
  );
}

export default LandingPage;
