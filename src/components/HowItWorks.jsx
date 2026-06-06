import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "Upload Face",
    description:
      "Select a photo from your gallery or capture a new image."
  },
  {
    number: "02",
    title: "AI Detection",
    description:
      "FaceHex automatically detects facial landmarks with AI."
  },
  {
    number: "03",
    title: "Smart Alignment",
    description:
      "Advanced algorithms align the face naturally."
  },
  {
    number: "04",
    title: "Realtime Swap",
    description:
      "Generate realistic face swaps in seconds."
  }
];

export default function HowItWorks() {
  return (
    <section className="howSection">

      <div className="sectionTitle">
        <span>HOW IT WORKS</span>
        <h2>Simple. Fast. Intelligent.</h2>
      </div>

      <div className="stepsGrid">

        {steps.map((step, index) => (

          <motion.div
            key={index}
            className="stepCard"
            initial={{
              opacity: 0,
              y: 50
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.15
            }}
          >

            <div className="stepNumber">
              {step.number}
            </div>

            <h3>{step.title}</h3>

            <p>{step.description}</p>

          </motion.div>

        ))}

      </div>

    </section>
  );
}