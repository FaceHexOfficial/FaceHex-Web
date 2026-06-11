import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import AOS from 'aos';

const NotFound = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: 'ease-out-cubic'
    });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center relative overflow-hidden px-6">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="z-10 text-center" data-aos="zoom-in">
        <h1 className="text-8xl md:text-9xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 mb-4 drop-shadow-2xl">
          404
        </h1>
        <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto mb-8"></div>
        
        <h2 className="text-2xl md:text-3xl font-sans text-white mb-6 tracking-wide">
          Page Not Found
        </h2>
        <p className="text-gray-400 max-w-md mx-auto mb-12 text-sm md:text-base leading-relaxed">
          The coordinate you are looking for does not exist in this dimension. The page may have been moved, deleted, or never existed at all.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-full transition-all duration-300 font-semibold w-full sm:w-auto justify-center"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
          
          <Link 
            to="/" 
            className="flex items-center gap-2 px-8 py-3 bg-white hover:bg-gray-200 text-black rounded-full transition-all duration-300 font-semibold w-full sm:w-auto justify-center"
          >
            <Home size={18} />
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
