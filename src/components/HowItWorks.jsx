import React from 'react';

const steps = [
  {
    num: "01",
    title: "Upload Face",
    desc: "Select a photo from your gallery or capture a new image."
  },
  {
    num: "02",
    title: "AI Detection",
    desc: "FaceHex automatically detects facial landmarks with AI."
  },
  {
    num: "03",
    title: "Smart Alignment",
    desc: "Advanced algorithms align the face naturally."
  },
  {
    num: "04",
    title: "Realtime Swap",
    desc: "Generate realistic face swaps in seconds."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5">
      <div className="text-center mb-16" data-aos="fade-up">
        <span className="text-gray-400 uppercase tracking-widest text-sm font-semibold mb-4 block">How It Works</span>
        <h2 id="simple-fast-text" className="text-3xl md:text-5xl font-display font-bold text-white">Simple. Fast. Intelligent.</h2>
      </div>

      <div id="how-it-works-grid" className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {steps.map((step, i) => (
          <div 
            key={i} 
            data-aos="fade-up" 
            data-aos-delay={i * 100}
            className="p-8 rounded-2xl glass-panel hover:bg-white/10 transition-colors duration-300 group"
          >
            <div className="text-5xl font-display font-bold text-white/20 group-hover:text-white transition-colors duration-300 mb-6">
              {step.num}
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
