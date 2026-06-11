import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useProgress, useFBX } from '@react-three/drei';

const Loader = ({ onComplete }) => {
  const containerRef = useRef(null);
  const hexRef = useRef(null);
  const textRef = useRef(null);
  const progressBarRef = useRef(null);
  const progressTextRef = useRef(null);
  
  const { progress, total } = useProgress();
  const visualProgress = useRef({ val: 0 });
  const exitStarted = useRef(false);

  useEffect(() => {
    // 3D Gyro Initialization
    gsap.to(hexRef.current, {
      rotateZ: 180,
      duration: 2.5,
      ease: 'power2.inOut'
    });

    // Text reveal
    gsap.fromTo(textRef.current, 
      { opacity: 0, letterSpacing: '0px' },
      { opacity: 1, letterSpacing: '8px', duration: 1.5, ease: 'power3.out', delay: 0.5 }
    );
  }, []);

  const triggerExit = () => {
    exitStarted.current = true;
    
    const exitTl = gsap.timeline({ delay: 0.3, onComplete });
    
    // Cinematic Fly-through effect: Massive Zoom IN with motion blur!
    exitTl.to(containerRef.current, {
      scale: 20, // Huge scale to fly completely *through* the center
      opacity: 0,
      filter: 'blur(15px)', // Stylish motion blur as it rushes past the camera
      duration: 1.0,
      ease: 'power4.in' // Accelerates smoothly like a hyper-drive
    }, 0);
  };

  useEffect(() => {
    // Smoothly animate the local progress number towards the actual load progress
    gsap.to(visualProgress.current, {
      val: progress,
      duration: 1.2, 
      ease: 'power2.out',
      onUpdate: () => {
        const val = Math.floor(visualProgress.current.val);
        
        // Use direct DOM manipulation instead of React state for 60fps lag-free performance!
        if (progressBarRef.current) {
          progressBarRef.current.style.width = `${val}%`;
        }
        if (progressTextRef.current) {
          progressTextRef.current.innerText = `INITIALIZING ENGINE ${val}%`;
        }

        // Only exit when we have VISUALLY reached 100%
        if (val >= 100 && total > 0 && !exitStarted.current) {
          triggerExit();
        }
      }
    });
  }, [progress, total]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background overflow-hidden origin-center"
    >
      {/* 3D Hexagon Graphic */}
      <div className="relative w-32 h-32 mb-12" style={{ perspective: '800px' }}>
        <div 
          ref={hexRef}
          className="w-full h-full absolute top-0 left-0"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Outer Ring */}
          <div className="absolute inset-0" style={{ transform: 'rotateX(60deg)', transformStyle: 'preserve-3d' }}>
            <div className="w-full h-full border-[2px] border-white/20 rounded-full animate-[spin_4s_linear_infinite]"></div>
          </div>
          
          {/* Middle Ring */}
          <div className="absolute inset-4" style={{ transform: 'rotateY(60deg)', transformStyle: 'preserve-3d' }}>
            <div className="w-full h-full border-[2px] border-white/40 rounded-full animate-[spin_3s_linear_infinite_reverse]"></div>
          </div>
          
          {/* Inner Hexagons (Gyro Core) */}
          <div className="absolute inset-8" style={{ transform: 'translateZ(20px)', transformStyle: 'preserve-3d' }}>
            <div className="w-full h-full border-[3px] border-white/60 rounded-xl animate-[spin_5s_linear_infinite]"></div>
          </div>
          <div className="absolute inset-8" style={{ transform: 'translateZ(-20px)', transformStyle: 'preserve-3d' }}>
            <div className="w-full h-full border-[3px] border-white/90 rounded-xl animate-[spin_5s_linear_infinite_reverse]"></div>
          </div>
          
          {/* Core Particle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,1)] animate-pulse"></div>

          {/* Center Glow */}
          <div className="absolute inset-0 bg-white blur-2xl opacity-10"></div>
        </div>
      </div>

      {/* Loading Text */}
      <div className="flex flex-col items-center">
        <h2 ref={textRef} className="text-white font-display uppercase font-bold text-xl mb-4 tracking-widest">
          FaceHex AI
        </h2>
        
        {/* Progress Bar */}
        <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden relative">
          <div 
            ref={progressBarRef}
            className="absolute top-0 left-0 h-full bg-white transition-none"
            style={{ width: `0%` }}
          ></div>
        </div>
        
        <p ref={progressTextRef} className="text-gray-500 font-sans text-xs mt-4 uppercase tracking-widest">
          INITIALIZING ENGINE 0%
        </p>
      </div>
    </div>
  );
};

// Preload heavy models so useProgress tracks them globally from the start
useFBX.preload('/models/Waving.fbx');

export default Loader;
