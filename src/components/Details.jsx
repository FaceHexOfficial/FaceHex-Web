import React from 'react';

const Details = () => {
  return (
    <section id="details" className="py-32 px-6 md:px-12 max-w-7xl mx-auto text-left relative z-10">
      
      {/* 3D Header */}
      <div data-aos="fade-up" className="text-center mb-24 perspective-1000">
        <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 transform transition-transform duration-700 hover:rotate-x-12 hover:scale-105">
          FaceHex Engine
        </h1>
        <h2 className="text-xl md:text-2xl font-light text-gray-400 max-w-3xl mx-auto">
          Reimagining Real-Time Identity Transformation Through Artificial Intelligence. Engineered by <span className="text-white font-semibold">Guman Rajpurohit</span>.
        </h2>
      </div>

      {/* 3D Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
        
        {/* Card 1: Vision */}
        <div data-aos="fade-up" data-aos-delay="100" className="group relative bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 transform hover:-translate-y-4 hover:rotate-y-6 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <h3 className="text-2xl font-display font-bold text-white mb-4">The Vision</h3>
          <p className="text-gray-400 leading-relaxed relative z-10">
            Create a real-time AI experience that feels natural, instant, and accessible to everyone. Unlike traditional cloud-based rendering, FaceHex operates on a continuous live camera stream, allowing facial transformations to adapt dynamically to user expressions and head orientation in real time.
          </p>
        </div>

        {/* Card 2: Core Capabilities */}
        <div data-aos="fade-up" data-aos-delay="200" className="group relative bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 transform hover:-translate-y-4 hover:rotate-y-0 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <h3 className="text-2xl font-display font-bold text-white mb-4">Core Capabilities</h3>
          <ul className="space-y-3 text-gray-400 relative z-10">
            <li className="flex items-start gap-3"><span className="text-white">●</span> Continuous Face Detection</li>
            <li className="flex items-start gap-3"><span className="text-white">●</span> Dynamic Landmark Tracking</li>
            <li className="flex items-start gap-3"><span className="text-white">●</span> Live Geometry Alignment</li>
            <li className="flex items-start gap-3"><span className="text-white">●</span> High-Fidelity Blending</li>
          </ul>
        </div>

        {/* Card 3: Architecture */}
        <div data-aos="fade-up" data-aos-delay="300" className="group relative bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 transform hover:-translate-y-4 hover:-rotate-y-6 shadow-2xl md:col-span-2 lg:col-span-1">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <h3 className="text-2xl font-display font-bold text-white mb-4">Architecture</h3>
          <p className="text-gray-400 leading-relaxed relative z-10">
            Built on a multi-layer pipeline prioritizing low latency. The Computer Vision layer extracts landmarks instantly, feeding into the AI Processing layer for identity mapping. Finally, the Rendering layer executes edge refinement and boundary optimization to deliver seamless 60FPS integration.
          </p>
        </div>

      </div>

    </section>
  );
};

export default Details;
