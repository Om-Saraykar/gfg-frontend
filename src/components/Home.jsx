import React from 'react';
import HeroSection from './HeroSection';
import WorkshopFeatures from './WorkshopFeatures';
import AboutPyHack from './AboutMyPack';
import FAQ from './FAQ';
import Footer from './Footer';

const Home = ({ isDarkMode }) => {
  return (
    <>
      <div className="flex flex-col items-center min-h-screen sm:p-4 gap-[200px]">
        <HeroSection />
        <WorkshopFeatures />
        <AboutPyHack />
        <FAQ />
      </div>
      <Footer />
    </>
  );
};

export default Home;
