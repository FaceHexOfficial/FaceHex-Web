import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';

// --- GLSL SHADERS ---

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform sampler2D uTexture1;
  uniform sampler2D uTexture2;
  uniform vec2 uMouse;
  uniform float uHoverState;
  uniform float uRevealAll;
  uniform float uPlaneAspect;
  
  uniform vec2 uTrailPos[80];
  uniform float uTrailAge[80];
  
  varying vec2 vUv;

  // High-performance pseudo-random noise for WebGL
  float random(vec2 st) {
      return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
  }

  // Distance to a line segment
  float sdSegment( vec2 p, vec2 a, vec2 b ) {
      vec2 pa = p-a, ba = b-a;
      float h = clamp( dot(pa,ba)/max(dot(ba,ba), 0.0001), 0.0, 1.0 );
      return length( pa - ba*h );
  }

  void main() {
    vec2 aspectVec = vec2(uPlaneAspect, 1.0);
    vec2 uvAspect = vUv * aspectVec;
    
    float finalMask = 0.0;
    
    // 1. Current cursor spotlight
    float dCursor = distance(uvAspect, uMouse * aspectVec);
    // Sharp, organic jagged edge (like torn paper or a burnt hole)
    float angle = atan(uvAspect.y - (uMouse.y * uPlaneAspect), uvAspect.x - uMouse.x);
    float cursorNoise = sin(angle * 30.0) * 0.01 + random(vUv * 25.0) * 0.02;
    
    float radius = 0.12; // Base brush size (Smaller as requested!)
    
    // Sharp edge transition
    float cursorMask = smoothstep(radius + cursorNoise, radius + cursorNoise - 0.015, dCursor);
    finalMask = max(finalMask, cursorMask);
    
    // 2. Trail segments (No blur! Hole shrinks dynamically)
    for(int i=0; i<79; i++) {
       float age1 = uTrailAge[i];
       float age2 = uTrailAge[i+1];
       if (age1 >= 1.0 && age2 >= 1.0) continue;
       
       vec2 p1 = uTrailPos[i] * aspectVec;
       vec2 p2 = uTrailPos[i+1] * aspectVec;
       
       if (distance(p1, p2) > 0.5) continue; 
       
       float d = sdSegment(uvAspect, p1, p2);
       float avgAge = (age1 + age2) * 0.5;
       
       // Shrink the hole size as it gets older
       float sizeMultiplier = 1.0 - avgAge;
       sizeMultiplier = pow(sizeMultiplier, 1.5); // Snaps closed faster at the end
       
       float trailRadius = (radius * 0.9) * sizeMultiplier;
       if (trailRadius <= 0.001) continue; // Hole is fully closed
       
       // Organic jagged edge along the trail
       float trailNoise = (sin((uvAspect.x + uvAspect.y) * 40.0) * 0.01 + random(vUv * 25.0) * 0.02) * sizeMultiplier;
       
       // The mask is always 1.0 solid, just physically smaller!
       float tMask = smoothstep(trailRadius + trailNoise, trailRadius + trailNoise - 0.015, d);
       finalMask = max(finalMask, tMask);
    }
    
    // Apply global hover state (when mouse completely leaves, the whole screen shrinks away)
    finalMask *= uHoverState;
    
    // Apply full-screen reveal state AFTER hover state (triggered by double-tap on mobile)
    vec2 center = vec2(0.5, 0.5);
    vec2 uvCenter = vUv - center;
    uvCenter.x *= uPlaneAspect;
    float distToCenter = length(uvCenter);
    float centerMask = 1.0 - smoothstep(max(0.0, uRevealAll - 0.05), max(0.001, uRevealAll), distToCenter);
    finalMask = max(finalMask, centerMask);
    
    vec4 tex1 = texture2D(uTexture1, vUv);
    vec4 tex2 = texture2D(uTexture2, vUv);
    
    // finalMask: 0.0 = original image, 1.0 = revealed image
    gl_FragColor = mix(tex1, tex2, finalMask);
  }
`;

// --- WEBGL MESH COMPONENT ---

const LiquidImageWarp = ({ image1, image2 }) => {
  const meshRef = useRef(null);
  const materialRef = useRef(null);
  const [tex1, tex2] = useTexture([image1, image2]);
  const { viewport } = useThree();
  
  // Track mouse UVs
  const mouse = useRef(new THREE.Vector2(0.5, 0.5));
  const hoverState = useRef({ value: 0 });
  const revealAllState = useRef({ value: 0 });

  // Trail state
  const TRAIL_LENGTH = 80;
  const trail = useRef(Array(TRAIL_LENGTH).fill(0).map(() => ({ x: 0.5, y: 0.5, age: 1.0 })));

  // Calculate object-fit: cover scaling
  const imgAspect = tex1.image ? (tex1.image.width / tex1.image.height) : 1;
  const viewportAspect = viewport.width / viewport.height;
  
  let scaleX, scaleY;
  if (viewportAspect > imgAspect) {
    scaleX = viewport.width;
    scaleY = viewport.width / imgAspect;
  } else {
    scaleX = viewport.height * imgAspect;
    scaleY = viewport.height;
  }

  const handlePointerMove = (e) => {
    if (e.uv) {
      // Very snappy mouse response for immediate erasing
      gsap.to(mouse.current, { x: e.uv.x, y: e.uv.y, duration: 0.1, ease: 'power2.out' });
      
      const lastPoint = trail.current[0];
      const dist = Math.hypot(lastPoint.x - e.uv.x, lastPoint.y - e.uv.y);
      
      // Only record a new node if mouse moved enough distance OR last node is fully dead
      // This creates a perfectly spaced skeleton for the line segments
      if (dist > 0.015 || lastPoint.age >= 1.0) {
         // Shift array forward manually for performance
         for(let i = TRAIL_LENGTH - 1; i > 0; i--) {
            trail.current[i].x = trail.current[i-1].x;
            trail.current[i].y = trail.current[i-1].y;
            trail.current[i].age = trail.current[i-1].age;
         }
         // Insert new
         trail.current[0] = { x: e.uv.x, y: e.uv.y, age: 0.0 };
      } else {
         // Otherwise just update the most recent node to keep it fully erased
         trail.current[0].x = e.uv.x;
         trail.current[0].y = e.uv.y;
         trail.current[0].age = 0.0;
      }
    }
  };

  const handlePointerEnter = () => { 
    gsap.killTweensOf(hoverState.current);
    gsap.to(hoverState.current, { value: 1, duration: 0.3, ease: 'power2.out' });
  };
  
  const handlePointerLeave = () => { 
    gsap.killTweensOf(hoverState.current);
    // Erase entire canvas slowly when mouse leaves
    gsap.to(hoverState.current, { value: 0, duration: 4.0, delay: 0.5, ease: 'power2.inOut' });
  };

  const handleDoubleClick = () => {
    // Only apply double-tap erase effect on mobile devices
    if (window.innerWidth < 768) {
      gsap.killTweensOf(revealAllState.current);
      
      // Animate from 0 to 1.5 (covers corners), wait 2 seconds, then animate back to 0
      gsap.to(revealAllState.current, {
        value: 1.5,
        duration: 2.0,
        ease: 'power2.inOut',
        yoyo: true,
        repeat: 1,
        repeatDelay: 2.0
      });
    }
  };

  const uniforms = useMemo(() => {
     const trailPos = [];
     const trailAge = [];
     for(let i=0; i<TRAIL_LENGTH; i++) {
        trailPos.push(new THREE.Vector2(0.5, 0.5));
        trailAge.push(1.0);
     }
     return {
        uTexture1: { value: tex1 },
        uTexture2: { value: tex2 },
        uMouse: { value: mouse.current },
        uHoverState: { value: 0 },
        uRevealAll: { value: 0 },
        uPlaneAspect: { value: scaleX / scaleY },
        uTrailPos: { value: trailPos },
        uTrailAge: { value: trailAge }
     };
  }, [tex1, tex2, scaleX, scaleY]);

  useFrame((state, delta) => {
    // Fade time: Very slow, takes almost 7 seconds to fully disappear
    const FADE_SPEED = 0.15; 
    
    // Update ages
    for(let i=0; i<TRAIL_LENGTH; i++) {
       trail.current[i].age += delta * FADE_SPEED;
       if (trail.current[i].age > 1.0) trail.current[i].age = 1.0;
    }
    
    if (materialRef.current && materialRef.current.uniforms) {
      materialRef.current.uniforms.uHoverState.value = hoverState.current.value;
      materialRef.current.uniforms.uRevealAll.value = revealAllState.current.value;
      materialRef.current.uniforms.uMouse.value = mouse.current;
      materialRef.current.uniforms.uPlaneAspect.value = scaleX / scaleY;
      
      // Update uniform arrays IN PLACE for maximum performance! (Prevents GC stuttering)
      const trailPosUniform = materialRef.current.uniforms.uTrailPos.value;
      const trailAgeUniform = materialRef.current.uniforms.uTrailAge.value;
      
      for(let i=0; i<TRAIL_LENGTH; i++) {
         trailPosUniform[i].x = trail.current[i].x;
         trailPosUniform[i].y = trail.current[i].y;
         trailAgeUniform[i] = trail.current[i].age;
      }
    }
  });

  return (
    <mesh 
      ref={meshRef} 
      scale={[scaleX, scaleY, 1]}
      onPointerMove={handlePointerMove}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onDoubleClick={handleDoubleClick}
    >
      <planeGeometry args={[1, 1, 64, 64]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent={true}
      />
    </mesh>
  );
};

// --- MOBILE SLIDER COMPONENT ---
const MobileSlider = ({ image1, image2 }) => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef(null);

  const handleMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    let clientX = e.clientX;
    if (e.touches && e.touches.length > 0) {
      clientX = e.touches[0].clientX;
    } else if (e.type === 'touchmove') {
      return; 
    }
    
    let x = clientX - rect.left;
    let pos = (x / rect.width) * 100;
    pos = Math.max(0, Math.min(100, pos));
    setSliderPos(pos);
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full overflow-hidden select-none touch-pan-y"
      onMouseMove={(e) => { if (e.buttons === 1) handleMove(e); }}
      onTouchMove={handleMove}
      onMouseDown={handleMove}
      onTouchStart={handleMove}
    >
      <img src={image2} className="absolute inset-0 w-full h-full object-cover pointer-events-none" alt="After" />
      
      <img 
        src={image1} 
        className="absolute inset-0 w-full h-full object-cover pointer-events-none" 
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        alt="Before"
      />

      <div 
        className="absolute top-0 bottom-0 w-[2px] bg-white cursor-ew-resize z-10 shadow-[0_0_10px_rgba(0,0,0,0.5)]"
        style={{ left: `calc(${sliderPos}%)` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white shadow-lg pointer-events-none">
           <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '-2px'}}>
             <path d="M15 18l-6-6 6-6"/>
           </svg>
           <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft: '-2px'}}>
             <path d="M9 18l6-6-6-6"/>
           </svg>
        </div>
      </div>
      
      <div className="absolute top-8 left-6 bg-black/60 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-xs font-bold z-10 shadow-md tracking-wider">BEFORE</div>
      <div className="absolute top-8 right-6 bg-black/60 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-xs font-bold z-10 shadow-md tracking-wider">AFTER</div>
    </div>
  );
};


// --- MAIN COMPONENT ---

const RevealHero = () => {
  // Use the public paths
  const image1 = '/image1.png';
  const image2 = '/image2.png';
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section 
      id="webgl-hero-container" 
      className="relative z-20 w-full h-[100vh] min-h-[100dvh] max-h-screen overflow-hidden bg-black flex items-center justify-center cursor-default"
      onPointerMove={() => { if (!hasInteracted) setHasInteracted(true); }}
      onTouchMove={() => { if (!hasInteracted) setHasInteracted(true); }}
    >
      
      {/* Background glow for depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-white/5 rounded-full blur-[150px] pointer-events-none z-0"></div>

      {/* Canvas / Mobile Slider */}
      <div className="absolute inset-0 z-10 w-full h-full">
        {isMobile ? (
          <MobileSlider image1={image1} image2={image2} />
        ) : (
          <Canvas 
            camera={{ position: [0, 0, 5], fov: 45 }} 
            gl={{ antialias: true, alpha: true }}
            dpr={[1, 2]}
          >
            <React.Suspense fallback={null}>
              <LiquidImageWarp image1={image1} image2={image2} />
            </React.Suspense>
          </Canvas>
        )}
      </div>

      {/* Top and Bottom Gradient Overlays to blend with website */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-transparent z-20 pointer-events-none opacity-80 h-32"></div>
      <div className="absolute inset-0 top-auto bg-gradient-to-t from-background via-transparent to-transparent z-20 pointer-events-none opacity-80 h-32"></div>

      {/* Interaction Hint Overlay */}
      <div 
        className={`absolute top-32 left-1/2 -translate-x-1/2 md:left-24 md:-translate-x-0 z-30 pointer-events-none flex flex-col items-center md:items-start mix-blend-normal text-white transition-opacity duration-1000 ${hasInteracted ? 'opacity-0' : 'opacity-100'}`}
      >
        <div className="w-8 h-8 rounded-full border border-white/40 flex items-center justify-center mb-3 animate-bounce shadow-[0_0_10px_rgba(255,255,255,0.2)]">
           <div className="w-1.5 h-1.5 bg-white rounded-full opacity-90 shadow-[0_0_5px_rgba(255,255,255,0.8)]"></div>
        </div>
        <p className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase opacity-90 text-center md:text-left drop-shadow-md">
           <span className="md:hidden">Drag to reveal</span>
           <span className="hidden md:inline">Scratch to reveal</span>
        </p>
      </div>

      {/* Optional: Minimalist cursor follower to emphasize the interaction point */}
      <div className="absolute inset-0 z-20 pointer-events-none mix-blend-difference opacity-50" id="custom-cursor">
      </div>

    </section>
  );
};

export default RevealHero;
