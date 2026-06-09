import React from 'react';

const featureList = [
  { icon: "⚡", title: "Realtime Face Swap", desc: "Swap faces instantly with optimized AI processing." },
  { icon: "🎯", title: "AI Face Tracking", desc: "Advanced facial landmark detection for accurate positioning." },
  { icon: "✨", title: "Natural Blending", desc: "Skin tone matching and realistic edge blending." },
  { icon: "📷", title: "Live Camera Mode", desc: "Preview face swaps directly from your camera." },
  { icon: "🚀", title: "Fast Performance", desc: "Optimized AI engine for smooth realtime processing." },
  { icon: "🔒", title: "Privacy Focused", desc: "Your images remain under your control and privacy." }
];

const Features = () => {
  return (
    <section id="features" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5">
      <div className="text-center mb-16" data-aos="fade-up">
        <span className="text-gray-400 uppercase tracking-widest text-sm font-semibold mb-4 block">Features</span>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white">Built For Realistic <br className="hidden md:block"/> AI Face Swapping</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featureList.map((feat, i) => (
          <div 
            key={i} 
            data-aos="fade-up" 
            data-aos-delay={i * 50}
            className="p-8 rounded-2xl bg-surface border border-white/5 hover:border-white/20 transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
              {feat.icon}
            </div>
            <h3 className="text-lg font-bold text-white mb-2">{feat.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{feat.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
