import React from 'react';
import Navbar from '../components/Navbar';
import StitchHero from '../components/StitchHero';
import RevealHero from '../components/RevealHero';
import About from '../components/About';
import HowItWorks from '../components/HowItWorks';
import Features from '../components/Features';
import Preview from '../components/Preview';
import Details from '../components/Details';
import Footer from '../components/Footer';
import DemoVideo from '../components/DemoVideo';

const Home = () => {
  return (
    <>
      <Navbar />
      <StitchHero />
      <About />
      <div className="hidden md:block">
        <RevealHero />
      </div>
      <DemoVideo />
      <HowItWorks />
      <Features />
      <Preview />
      <Details />
      <Footer />
    </>
  );
};

export default Home;
