import React, { useRef, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { useFBX, useAnimations, Environment, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollingMesh = () => {
  const groupDown = useRef();
  const groupUp = useRef();
  const [currentDir, setCurrentDir] = useState('down');
  const currentDirRef = useRef('down');
  
  const climbDownFBX = useFBX('/models/Climbing_Down_Wall.fbx');
  const climbUpFBX = useFBX('/models/Climbing_Up_Wall.fbx');
  
  const animsDown = useAnimations(climbDownFBX.animations, groupDown);
  const animsUp = useAnimations(climbUpFBX.animations, groupUp);

  useEffect(() => {
    const applyMaterial = (child) => {
      if (child.isMesh) {
        child.material = new THREE.MeshStandardMaterial({
          color: 0xcccccc, roughness: 0.1, metalness: 1.0, envMapIntensity: 2
        });
        child.castShadow = false; child.receiveShadow = false;
      }
    };
    climbDownFBX.traverse(applyMaterial);
    climbUpFBX.traverse(applyMaterial);
  }, [climbDownFBX, climbUpFBX]);

  useEffect(() => {
    // STRIP ROOT MOTION: Mixamo climbing animations often move the character downwards physically.
    // By deleting the Hips position track, we force the animation to be 100% "In-Place" so it stays perfectly centered!
    const stripRootMotion = (clip) => {
      if (!clip) return;
      clip.tracks = clip.tracks.filter(track => !track.name.includes('Hips.position') && !track.name.includes('mixamorigHips.position'));
    };
    if (climbDownFBX.animations.length > 0) stripRootMotion(climbDownFBX.animations[0]);
    if (climbUpFBX.animations.length > 0) stripRootMotion(climbUpFBX.animations[0]);

    const actionDown = animsDown.actions[climbDownFBX.animations[0]?.name];
    const actionUp = animsUp.actions[climbUpFBX.animations[0]?.name];

    // Guarantee native infinite loop
    if (actionDown) {
      actionDown.reset();
      actionDown.setLoop(THREE.LoopRepeat, Infinity);
      actionDown.clampWhenFinished = false;
      actionDown.play();
      actionDown.timeScale = 0; // Frozen initially
    }
    
    if (actionUp) {
      actionUp.reset();
      actionUp.setLoop(THREE.LoopRepeat, Infinity);
      actionUp.clampWhenFinished = false;
      actionUp.play();
      actionUp.timeScale = 0; // Frozen initially
    }

    const trigger = ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        const velocity = Math.abs(self.getVelocity());
        // Smoother speed calculation: lower max speed and more reasonable baseline
        const targetSpeed = Math.min(Math.max(velocity / 200, 1.0), 3.5);
        
        const dir = self.direction === 1 ? 'down' : 'up';
        
        // Only swap direction if there's actual intentional scrolling to prevent jitter
        if (currentDirRef.current !== dir && velocity > 20) {
          currentDirRef.current = dir;
          setCurrentDir(dir);
        }

        // Extremely smooth acceleration
        if (actionDown) gsap.to(actionDown, { timeScale: targetSpeed, duration: 0.6, ease: 'power2.out', overwrite: true });
        if (actionUp) gsap.to(actionUp, { timeScale: targetSpeed, duration: 0.6, ease: 'power2.out', overwrite: true });

        clearTimeout(window.scrollTimeout);
        window.scrollTimeout = setTimeout(() => {
           // Gracefully coast to a halt over 1.2 seconds instead of stopping instantly
           if (actionDown) gsap.to(actionDown, { timeScale: 0, duration: 1.2, ease: 'power2.out', overwrite: true });
           if (actionUp) gsap.to(actionUp, { timeScale: 0, duration: 1.2, ease: 'power2.out', overwrite: true });
        }, 100);
      }
    });

    return () => {
      trigger.kill();
      clearTimeout(window.scrollTimeout);
    };
  }, [animsDown.actions, animsUp.actions, climbDownFBX, climbUpFBX]);

  // I have raised the robots significantly (-1.0 instead of -3.0) and stripped root motion!
  // Move to the left side by changing X from 3 to -3
  const downPosition = [-3, -1.0, 0];
  const upPosition = [-3, -1.0, 0];

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 1, 6]} fov={45} />
      
      <group ref={groupDown} position={downPosition} rotation={[0, Math.PI, 0]} visible={currentDir === 'down'}>
        <primitive object={climbDownFBX} scale={0.012} />
      </group>
      
      <group ref={groupUp} position={upPosition} rotation={[0, Math.PI, 0]} visible={currentDir === 'up'}>
        <primitive object={climbUpFBX} scale={0.012} />
      </group>
    </>
  );
};

const ScrollingRobot = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let animationFrameId;

    const checkVisibility = () => {
      if (!containerRef.current) return;
      
      const howItWorks = document.getElementById('how-it-works');
      const footer = document.querySelector('footer');
      
      if (howItWorks && footer) {
        const howItWorksTop = howItWorks.getBoundingClientRect().top;
        const footerTop = footer.getBoundingClientRect().top;
        const vh = window.innerHeight;

        // Visible ONLY if the top of HowItWorks has entered the screen from the bottom
        // AND the footer hasn't completely scrolled off the top of the screen (meaning it stays visible all the way to the absolute bottom)
        if (howItWorksTop <= vh && footerTop >= 0) {
          containerRef.current.style.display = 'block';
          containerRef.current.style.opacity = '1';
        } else {
          containerRef.current.style.display = 'none';
          containerRef.current.style.opacity = '0';
        }
      } else {
        containerRef.current.style.display = 'none';
      }

      animationFrameId = requestAnimationFrame(checkVisibility);
    };

    // Start checking immediately
    checkVisibility();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 z-10 pointer-events-none hidden md:block" style={{ display: 'none', opacity: 0 }}>
      <Canvas style={{ pointerEvents: 'none' }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}>
        <React.Suspense fallback={null}>
          <ambientLight intensity={1.0} />
          <spotLight position={[5, 10, 5]} angle={0.3} penumbra={1} intensity={2} />
          <ScrollingMesh />
          <Environment preset="city" />
        </React.Suspense>
      </Canvas>
    </div>
  );
};

export default ScrollingRobot;
