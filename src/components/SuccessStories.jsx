import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import clsx from "clsx";
import before_transformation1 from "../assets/beforeTransformation_1.png";
import after_transformation_1 from "../assets/afterTransformation_1.png";
import before_transformation_2 from "../assets/beforeTransformation_2.png";
import after_transformation_2 from "../assets/afterTransformation_2.png";
import before_transformation_3 from "../assets/beforeTransformation_3.png";
import after_transformation_3 from "../assets/afterTransformation_3.png";

const testimonials = [
  {
    name: "Rohit Verma",
    program: "Fat Loss Program",
    beforeImg: before_transformation1,
    afterImg: after_transformation_1,
    quote:
      "I lost 14 kg in 4 months and feel stronger than ever. The coaches kept me accountable throughout.",
  },
  {
    name: "Anjali Mehta",
    program: "Strength & Toning",
    beforeImg: before_transformation_2,
    afterImg: after_transformation_2,
    quote:
      "I gained confidence along with strength. Training here changed my mindset and my body.",
  },
  {
    name: "Amit Kulkarni",
    program: "Body Recomposition",
    beforeImg: before_transformation_3,
    afterImg: after_transformation_3,
    quote:
      "The transformation feels real because the guidance was real. Best decision I made for myself.",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function SuccessStories() {
  return (
    <section className="bg-[#0b0b0b] py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-7xl mx-auto text-center mb-16"
      >
        <p className="text-orange-500 tracking-widest text-sm font-semibold mb-3">
          SUCCESS STORIES
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Real People.{" "}
          <span className="bg-gradient-to-tl from-orange-700 via-orange-400 to-white bg-clip-text text-transparent">
            {" "}
            Real Transformations.
          </span>
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          See how our members transformed their bodies and confidence.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      >
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="bg-[#161616] rounded-2xl p-6 border border-white/5 shadow-lg"
          >
            {/* Before / After */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {[
                { img: t.beforeImg, label: "Before" },
                { img: t.afterImg, label: "After" },
              ].map((item, i) => (
                <div key={i} className="relative overflow-hidden rounded-xl">
                  <img
                    src={item.img}
                    alt={item.label}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <span className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Name & Program */}
            <h3 className="text-lg font-semibold text-white">{t.name}</h3>
            <p className="text-sm text-gray-400 mb-3">{t.program}</p>

            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar key={i} className="text-orange-500 text-sm" />
              ))}
            </div>

            {/* Quote */}
            <p className="text-gray-300 text-sm leading-relaxed">“{t.quote}”</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Trust Line & CTA */}
      <div className="text-center mt-16">
        <p className="text-gray-500 text-sm mb-6">
          Results may vary based on consistency and effort.
        </p>
        <button className="px-8 py-3 rounded-full bg-orange-500 text-black font-semibold hover:bg-orange-400 transition">
          Start Your Transformation
        </button>
      </div>
    </section>
  );
}
