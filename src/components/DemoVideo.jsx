import React, { useRef, useEffect } from 'react';

const DemoVideo = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    let animationFrameId;
    const video = videoRef.current;

    const checkLoop = () => {
      if (video && video.duration) {
        // Snap back to the beginning just a tiny fraction of a second before it naturally ends
        // This bypasses the browser's built-in loop decoding stutter
        if (video.currentTime >= video.duration - 0.05) {
          video.currentTime = 0;
          // Ensure it keeps playing
          video.play().catch(() => {});
        }
      }
      animationFrameId = requestAnimationFrame(checkLoop);
    };

    if (video) {
      checkLoop();
    }

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative border-t border-white/5 overflow-hidden">
      
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-white/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      <div className="text-center mb-16" data-aos="fade-up">
        <span className="text-gray-400 uppercase tracking-widest text-sm font-semibold mb-4 block">Transformation In Motion</span>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white">Seamless Identity Synching</h2>
      </div>

      <div 
        data-aos="zoom-in" 
        data-aos-duration="1500" 
        className="relative max-w-4xl mx-auto rounded-[2rem] overflow-hidden glass-panel border border-white/10 p-2 shadow-2xl group"
      >
        <div className="relative w-full aspect-video rounded-[1.5rem] overflow-hidden bg-black flex items-center justify-center">
          
          {/* Glowing edges behind the video */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

          {/* Flipped Video */}
          <video
            ref={videoRef}
            src="/swap.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            disablePictureInPicture
            className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none z-10 opacity-90 scale-x-[-1]"
            style={{ filter: "brightness(1.1) contrast(1.1)" }}
          />

          {/* Overlay to absolutely prevent interacting with the video element */}
          <div className="absolute inset-0 z-20 pointer-events-auto bg-transparent"></div>
          
          {/* Before Badge - Sleek and subtle */}
          <div className="absolute top-3 md:top-8 left-3 md:left-8 z-30 px-3 md:px-5 py-1 md:py-2 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-500 hover:bg-black/60">
            <span className="text-[8px] md:text-xs font-bold text-gray-300 tracking-[0.2em] uppercase">Before</span>
          </div>
          
          {/* After Badge - Glowing and premium */}
          <div className="absolute top-3 md:top-8 right-3 md:right-8 z-30 flex items-center gap-1 md:gap-2 px-3 md:px-5 py-1 md:py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/50 shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] hover:bg-white/20">
            <span className="text-[8px] md:text-xs font-bold text-white tracking-[0.2em] uppercase drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">After</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>

          {/* Live AI Processing Badge - With pulsing recording dot */}
          <div className="absolute bottom-3 md:bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 md:gap-3 px-3 md:px-6 py-1.5 md:py-2.5 rounded-full bg-black/50 backdrop-blur-2xl border border-white/20 shadow-[0_10px_40px_rgba(0,0,0,0.8)] transition-transform duration-700 hover:scale-105 w-max">
            <span className="relative flex h-2 w-2 md:h-2.5 md:w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 md:h-2.5 md:w-2.5 bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)]"></span>
            </span>
            <span className="text-[7px] sm:text-[8px] md:text-xs font-bold text-white tracking-[0.15em] md:tracking-[0.25em] uppercase">Live AI Processing</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoVideo;

