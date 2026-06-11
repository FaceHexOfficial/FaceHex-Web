import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const StitchHero = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const isMobile = window.innerWidth < 768;

    // Configure frames
    const frameCount = 121;
    // Assuming the frames folder was copied to public/frames/
    const currentFrame = index => `/frames/frame_${index.toString().padStart(3, '0')}.jpg`;
    const images = [];
    let loadedFrames = 0;
    const imageObj = { frame: 0 };

    // Canvas Sizing
    canvas.width = 1920;
    canvas.height = 1080;

    // Preload Images
    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.push(img);
      img.onload = () => {
        loadedFrames++;
        if (loadedFrames === 1) {
          renderFrame(0);
        }
      };
    }

    function renderFrame(index) {
      if (images[index] && images[index].complete) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        
        const imgWidth = images[index].width;
        const imgHeight = images[index].height;
        const canvasRatio = canvas.width / canvas.height;
        const imgRatio = imgWidth / imgHeight;
        let drawWidth, drawHeight, offsetX, offsetY;

        if (canvasRatio > imgRatio) {
          drawWidth = canvas.width;
          drawHeight = canvas.width / imgRatio;
          offsetX = 0;
          offsetY = (canvas.height - drawHeight) / 2;
        } else {
          drawWidth = canvas.height * imgRatio;
          drawHeight = canvas.height;
          offsetX = (canvas.width - drawWidth) / 2;
          offsetY = 0;
        }

        // Add a slight grayscale/contrast filter for the premium B&W look
        context.filter = 'grayscale(100%) contrast(1.2) brightness(0.8)';
        context.drawImage(images[index], offsetX, offsetY, drawWidth, drawHeight);
      }
    }

    let animationFrameId;

    let autoFrame = 0;
    let direction = 1;
    // Ping-pong loop for all devices to act like a 360 looping video
    const interval = setInterval(() => {
      autoFrame += direction;
      if (autoFrame >= frameCount - 1 || autoFrame <= 0) direction *= -1;
      renderFrame(autoFrame);
    }, 33); // ~30fps
    
    return () => clearInterval(interval);
  }, []);

// Text animation removed as text was moved
  return (
    <section ref={containerRef} className="relative w-full h-[100dvh] md:h-screen overflow-hidden bg-background">
      {/* Zero-Lag Image Sequence Canvas */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none mix-blend-lighten">
        <canvas ref={canvasRef} className="w-full h-full object-cover object-[65%_center] md:object-center pointer-events-none opacity-60"></canvas>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none"></div>

      {/* Restored Text Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center md:items-start pl-4 md:pl-24 z-20 pointer-events-none w-full max-w-7xl mx-auto">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-black text-white md:text-black tracking-[tightest] uppercase leading-none mb-6 mix-blend-overlay opacity-90 text-center md:text-left" style={{ letterSpacing: '-0.05em' }}>
          FaceHex
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="w-12 h-[2px] bg-white md:bg-black opacity-50 mb-2 md:mb-0"></div>
          <p className="text-sm md:text-xl font-sans text-white md:text-black font-bold tracking-[0.3em] uppercase opacity-80 mix-blend-overlay text-center md:text-left">
            Real-Time AI Face Swap Engine
          </p>
        </div>
      </div>
    </section>
  );
};

export default StitchHero;
