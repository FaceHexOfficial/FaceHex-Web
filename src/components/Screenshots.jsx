import { motion } from "motion/react";

export default function Screenshots() {
  return (
    <section className="screenshotsSection">

      <div className="sectionTitle">
        <span>APPLICATION PREVIEW</span>
        <h2>Designed For The Future</h2>
      </div>

      <div className="phoneWrapper">

        <motion.div
          className="phoneMockup"
          animate={{
            y: [0, -12, 0]
          }}
          transition={{
            repeat: Infinity,
            duration: 4
          }}
        >

          <div className="phoneTop" />

          <div className="appScreen">

            <div className="screenHeader">
              FACEHEX
            </div>

            <div className="facePreview">

              <div className="faceCircle before">
                BEFORE
              </div>

              <div className="arrow">
                →
              </div>

              <div className="faceCircle after">
                AFTER
              </div>

            </div>

            <div className="scanBar" />

            <div className="screenButtons">

              <button>
                Camera
              </button>

              <button>
                Gallery
              </button>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}