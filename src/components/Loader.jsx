import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useProgress, useFBX } from '@react-three/drei';

const Loader = ({ onComplete }) => {
  const containerRef = useRef(null);
  const hexRef = useRef(null);
  const textRef = useRef(null);
  const { progress, total } = useProgress();
  const [localProgress, setLocalProgress] = useState(0);
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

  useEffect(() => {
    // Smoothly animate the local progress number towards the actual load progress
    // This prevents the "laggy" chunky jumps from 0 to 33 to 100
    gsap.to(visualProgress.current, {
      val: progress,
      duration: 1.2, // Gives it a buttery smooth catch-up time
      ease: 'power2.out',
      onUpdate: () => {
        setLocalProgress(Math.floor(visualProgress.current.val));
      }
    });
  }, [progress]);

  useEffect(() => {
    // Only exit when we have VISUALLY reached 100%
    if (localProgress >= 100 && total > 0 && !exitStarted.current) {
      exitStarted.current = true;
      
      const exitTl = gsap.timeline({ delay: 0.3, onComplete });
      
      // 1. Zoom the text towards the camera and fade out
      exitTl.to(textRef.current.parentNode, {
        opacity: 0,
        scale: 2,
        duration: 0.6,
        ease: 'power2.in'
      }, 0);

      // 2. Dramatically zoom the 3D gyro towards the camera
      exitTl.to(hexRef.current, {
        scale: 15,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.in'
      }, 0.1);

      // 3. Zoom the full-screen background container to give that immersive "fly-through" effect
      exitTl.to(containerRef.current, {
        scale: 3,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.inOut'
      }, 0.3);
    }
  }, [localProgress, total, onComplete]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background overflow-hidden"
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
            className="absolute top-0 left-0 h-full bg-white transition-all duration-100 ease-linear"
            style={{ width: `${localProgress}%` }}
          ></div>
        </div>
        
        <p className="text-gray-500 font-sans text-xs mt-4 uppercase tracking-widest">
          Initializing Engine {localProgress}%
        </p>
      </div>
    </div>
  );
};

// Preload heavy models so useProgress tracks them globally from the start
useFBX.preload('/models/Waving.fbx');
useFBX.preload('/models/Climbing_Up_Wall.fbx');
useFBX.preload('/models/Climbing_Down_Wall.fbx');

export default Loader;
