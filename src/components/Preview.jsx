import React from 'react';
import { ArrowRight } from 'lucide-react';

const Preview = () => {
  return (
    <section id="preview" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5 text-center">
      <div data-aos="fade-up">
        <span className="text-gray-400 uppercase tracking-widest text-sm font-semibold mb-4 block">Application Preview</span>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-16">Designed For The Future</h2>
      </div>

      <div data-aos="zoom-in" data-aos-duration="1000" className="relative w-full max-w-4xl mx-auto rounded-3xl overflow-hidden glass-panel border border-white/10 p-2 md:p-4 shadow-2xl">
        <div className="bg-black rounded-2xl overflow-hidden relative aspect-[4/5] sm:aspect-square md:aspect-video flex flex-col md:flex-row">
          <div className="flex-1 bg-surface flex items-center justify-center p-4 md:p-8 relative overflow-hidden">
            <span className="absolute top-4 left-4 z-10 text-[10px] md:text-xs font-bold text-white/80 tracking-widest bg-black/50 px-2 py-1 rounded backdrop-blur-md">BEFORE</span>
            <img src="/girl1.png" alt="Before" 
                 className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 pointer-events-none select-none" 
                 onContextMenu={(e) => e.preventDefault()}
                 onDragStart={(e) => e.preventDefault()}
                 onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} />
            <div className="hidden text-white/20 font-display font-bold text-4xl relative z-10">ORIGINAL</div>
          </div>
          <div className="w-full h-1 md:w-1 md:h-full bg-white/10 flex items-center justify-center relative z-20">
            <div className="w-8 h-8 rounded-full bg-white absolute flex items-center justify-center text-black shadow-[0_0_15px_rgba(255,255,255,0.5)]">
              <ArrowRight size={16} className="rotate-90 md:rotate-0" />
            </div>
          </div>
          <div className="flex-1 bg-surface flex items-center justify-center p-4 md:p-8 relative overflow-hidden">
            <span className="absolute top-4 right-4 z-10 text-[10px] md:text-xs font-bold text-white tracking-widest bg-black/50 px-2 py-1 rounded backdrop-blur-md">AFTER</span>
            <img src="/girl2.png" alt="After" 
                 className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none" 
                 onContextMenu={(e) => e.preventDefault()}
                 onDragStart={(e) => e.preventDefault()}
                 onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} />
            <div className="hidden text-white font-display font-bold text-4xl relative z-10">FACEHEX</div>
          </div>
        </div>
      </div>

      <div className="mt-32" data-aos="fade-up">
        <span className="text-gray-400 uppercase tracking-widest text-sm font-semibold mb-4 block">Download FaceHex</span>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">Experience Realtime AI Face Swapping</h2>
        <p className="text-gray-400 mb-10 max-w-xl mx-auto">Create realistic face swaps, live camera transformations, and seamless AI-powered results.</p>
        <button className="flex items-center justify-center mx-auto px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors duration-300 transform hover:scale-105 active:scale-95 text-lg shadow-xl">
          Download Now
        </button>
      </div>
    </section>
  );
};

export default Preview;
