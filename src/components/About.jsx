import { motion } from "motion/react";

export default function About() {
  return (
    <section className="aboutSection">

      <div className="sectionTitle">
        <span>ABOUT FACEHEX</span>
        <h2>AI Powered Face Swapping Technology</h2>
      </div>

      <motion.div
        className="aboutCard"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p>
          FaceHex is a next-generation AI face swap application designed
          to create realistic, seamless, and high-quality face
          transformations in real time.
        </p>

        <p>
          Using advanced facial landmark detection, intelligent face
          alignment, skin tone matching, and blending technology,
          FaceHex delivers natural results across photos and live camera
          experiences.
        </p>

        <p>
          Built for creators, content makers, and AI enthusiasts,
          FaceHex focuses on speed, realism, and privacy.
        </p>
      </motion.div>

    </section>
  );
}