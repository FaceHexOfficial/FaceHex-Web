import { motion } from "motion/react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useRef } from "react";

function FaceCore() {
  const ref = useRef();

  useFrame(() => {
    if (!ref.current) return;

    ref.current.rotation.y += 0.003;
  });

  return (
    <Float speed={2}>
      <mesh ref={ref}>
        <sphereGeometry args={[1.4, 64, 64]} />
        <meshStandardMaterial
          color="#67a8ff"
          wireframe
        />
      </mesh>
    </Float>
  );
}

function HeroScene() {
  return (
    <>
      <ambientLight intensity={2} />

      <pointLight
        position={[5, 5, 5]}
        intensity={40}
        color="#67a8ff"
      />

      <FaceCore />
    </>
  );
}

export default function Hero() {
  return (
    <section className="heroSection">

      <div className="heroLeft">

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
        >

          <h1>FACEHEX</h1>

          <h2>
            Realtime AI Face Swap Engine
          </h2>

          <p>
            Advanced AI face alignment,
            natural skin blending,
            realtime processing and
            seamless face swapping.
          </p>

          <div className="heroButtons">

            <button className="primaryBtn">
              Download App
            </button>

            <button className="secondaryBtn">
              Watch Demo
            </button>

          </div>

        </motion.div>

      </div>

      <div className="heroRight">

        <Canvas
          camera={{
            position: [0, 0, 5],
          }}
        >
          <HeroScene />
        </Canvas>

      </div>

    </section>
  );
}