import React from 'react';
import AboutRobot from './AboutRobot';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Left: 3D Waving Robot */}
        <div data-aos="fade-right" data-aos-duration="1500" className="relative h-[400px] w-full hidden md:flex items-center justify-center group">
          <AboutRobot />
        </div>

        {/* Right: Text Content */}
        <div data-aos="fade-left" data-aos-duration="1000">
          <span className="text-gray-400 uppercase tracking-widest text-sm font-semibold mb-4 block">FaceHex</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white leading-tight mb-8">
            Real-Time AI <br className="hidden md:block"/> Face Swap Engine
          </h2>
          <div className="space-y-6 text-gray-400 leading-relaxed font-sans">
            <p>
              FaceHex is an advanced real-time AI face-swapping platform engineered and developed by Guman Rajpurohit. 
            </p>
            <p>
              The application utilizes modern artificial intelligence, computer vision, and facial tracking technologies to deliver seamless identity transformation through a live camera experience.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
