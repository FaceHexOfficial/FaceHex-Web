import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useMemo, useRef, useState, useEffect } from "react";

function ParticleUniverse() {
  const ref = useRef();

  const positions = useMemo(() => {
    const p = [];

    for (let i = 0; i < 25000; i++) {
      const radius = 20 + Math.random() * 15;

      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      p.push(
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.sin(phi) * Math.sin(theta),
        radius * Math.cos(phi)
      );
    }

    return new Float32Array(p);
  }, []);

  useFrame(() => {
    if (!ref.current) return;

    ref.current.rotation.y += 0.00015;
    ref.current.rotation.x += 0.00005;
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        color="#d7ebff"
        size={0.03}
        transparent
        depthWrite={false}
        sizeAttenuation
      />
    </Points>
  );
}

function EnergyRing({ radius, speed }) {
  const ref = useRef();

  const positions = useMemo(() => {
    const p = [];

    for (let i = 0; i < 7000; i++) {
      const angle = (i / 7000) * Math.PI * 2;

      const r =
        radius +
        (Math.random() - 0.5) * 0.15;

      p.push(
        Math.cos(angle) * r,
        Math.sin(angle) * r,
        (Math.random() - 0.5) * 0.08
      );
    }

    return new Float32Array(p);
  }, [radius]);

  useFrame(() => {
    if (!ref.current) return;

    ref.current.rotation.z += speed;
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        color="#6fb2ff"
        size={0.05}
        transparent
        depthWrite={false}
        sizeAttenuation
      />
    </Points>
  );
}

function FloatingEnergy() {
  const ref = useRef();

  const positions = useMemo(() => {
    const p = [];

    for (let i = 0; i < 2500; i++) {
      p.push(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 2
      );
    }

    return new Float32Array(p);
  }, []);

  useFrame(({ clock }) => {
    if (!ref.current) return;

    ref.current.rotation.z =
      Math.sin(clock.elapsedTime * 0.4) * 0.25;
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        color="#9dd0ff"
        size={0.03}
        transparent
        depthWrite={false}
        sizeAttenuation
      />
    </Points>
  );
}

function EnergyCore() {
  const ref = useRef();

  useFrame(({ clock }) => {
    if (!ref.current) return;

    const pulse =
      1 + Math.sin(clock.elapsedTime * 2.5) * 0.08;

    ref.current.scale.set(
      pulse,
      pulse,
      pulse
    );
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1.5, 64, 64]} />

      <meshBasicMaterial
        color="#6fb2ff"
        transparent
        opacity={0.18}
      />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={2} />

      <pointLight
        position={[0, 0, 5]}
        intensity={100}
        color="#6fb2ff"
      />

      <ParticleUniverse />

      <FloatingEnergy />

      <EnergyRing
        radius={3.2}
        speed={0.002}
      />

      <EnergyRing
        radius={2.8}
        speed={-0.0015}
      />

      <EnergyRing
        radius={2.4}
        speed={0.003}
      />

      <EnergyCore />
    </>
  );
}

export default function Loader3D() {
  const [progress, setProgress] =
    useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }

        return prev + 1;
      });
    }, 35);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="loaderContainer">

      <Canvas
        camera={{
          position: [0, 0, 15],
          fov: 50,
        }}
      >
        <Scene />
      </Canvas>

      <div className="loaderUI">

        <div className="percent">
          {progress}%
        </div>

      </div>

    </div>
  );
}