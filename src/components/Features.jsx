import { motion } from "motion/react";

const features = [
  {
    icon: "⚡",
    title: "Realtime Face Swap",
    description:
      "Swap faces instantly with optimized AI processing."
  },
  {
    icon: "🎯",
    title: "AI Face Tracking",
    description:
      "Advanced facial landmark detection for accurate positioning."
  },
  {
    icon: "✨",
    title: "Natural Blending",
    description:
      "Skin tone matching and realistic edge blending."
  },
  {
    icon: "📷",
    title: "Live Camera Mode",
    description:
      "Preview face swaps directly from your camera."
  },
  {
    icon: "🚀",
    title: "Fast Performance",
    description:
      "Optimized AI engine for smooth realtime processing."
  },
  {
    icon: "🔒",
    title: "Privacy Focused",
    description:
      "Your images remain under your control and privacy."
  }
];

export default function Features() {
  return (
    <section className="featuresSection">

      <div className="sectionTitle">
        <span>FEATURES</span>
        <h2>Built For Realistic AI Face Swapping</h2>
      </div>

      <div className="featuresGrid">

        {features.map((feature, index) => (

          <motion.div
            key={index}
            className="featureCard"
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
              delay: index * 0.1
            }}
          >

            <div className="featureIcon">
              {feature.icon}
            </div>

            <h3>{feature.title}</h3>

            <p>{feature.description}</p>

          </motion.div>

        ))}

      </div>

    </section>
  );
}