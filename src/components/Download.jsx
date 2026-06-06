import { motion } from "motion/react";

export default function Download() {
  return (
    <section className="downloadSection">

      <motion.div
        className="downloadCard"
        initial={{
          opacity:0,
          y:60
        }}
        whileInView={{
          opacity:1,
          y:0
        }}
        viewport={{
          once:true
        }}
        transition={{
          duration:.8
        }}
      >

        <span>
          DOWNLOAD FACEHEX
        </span>

        <h2>
          Experience Realtime
          AI Face Swapping
        </h2>

        <p>
          Create realistic face swaps,
          live camera transformations,
          and seamless AI-powered results.
        </p>

        <div className="downloadButtons">

          <button className="googleBtn">
            Google Play
          </button>

          <button className="demoBtn">
            Watch Demo
          </button>

        </div>

      </motion.div>

    </section>
  );
}