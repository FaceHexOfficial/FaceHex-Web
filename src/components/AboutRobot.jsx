import React, { useRef, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { useFBX, useAnimations, Environment, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

const WavingMesh = () => {
  const group = useRef();
  const wavingFBX = useFBX('/models/Waving.fbx');
  
  const [animations] = useState(() => {
    const combined = [];
    if (wavingFBX.animations && wavingFBX.animations.length > 0) {
      const waveAnim = wavingFBX.animations[0].clone();
      waveAnim.name = 'Wave';
      combined.push(waveAnim);
    }
    return combined;
  });
  
  const { actions } = useAnimations(animations, group);

  // Apply high visibility aesthetic
  useEffect(() => {
    wavingFBX.traverse((child) => {
      if (child.isMesh) {
        child.material = new THREE.MeshStandardMaterial({
          color: 0xcccccc, // Bright silver
          roughness: 0.1,  // Very shiny
          metalness: 1.0,  // Full metal
          envMapIntensity: 2 // Strong reflections
        });
        // Disabling shadows for performance
        child.castShadow = false;
        child.receiveShadow = false;
      }
    });
  }, [wavingFBX]);

  useEffect(() => {
    if (actions['Wave']) actions['Wave'].reset().play();
  }, [actions]);

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 1, 5]} fov={45} />
      <group ref={group} dispose={null} position={[0, -2, 0]}>
        <primitive object={wavingFBX} scale={0.02} />
      </group>
    </>
  );
};

const AboutRobot = () => {
  return (
    <div className="absolute inset-0 z-10 pointer-events-none hidden md:block">
      {/* Lower dpr for performance, disabled shadows */}
      <Canvas dpr={[1, 1.5]} gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}>
        <React.Suspense fallback={null}>
          <ambientLight intensity={1.0} />
          <spotLight position={[5, 10, 5]} angle={0.3} penumbra={1} intensity={2} />
          <WavingMesh />
          <Environment preset="city" />
        </React.Suspense>
      </Canvas>
    </div>
  );
};

export default AboutRobot;
