// TrainersSection.jsx
import { motion } from "framer-motion";
import trainer1 from "../assets/trainer_1.png";
import trainer2 from "../assets/trainer_2.png";
import trainer3 from "../assets/trainer_3.png";
import trainer4 from "../assets/trainer_4.png";

const trainers = [
  {
    name: "Rahul Mehta",
    specialization: "Strength & Fat Loss Coach",
    experience: "8+ Years Experience",
    certifications: ["ACE Certified", "NASM CPT"],
    image: trainer1,
  },
  {
    name: "Ananya Sharma",
    specialization: "Functional & Mobility Trainer",
    experience: "6+ Years Experience",
    certifications: ["NASM CPT", "FMS Level 1"],
    image: trainer3,
  },
  {
    name: "Vikram Desai",
    specialization: "Body Recomposition Coach",
    experience: "10+ Years Experience",
    certifications: ["ACE Certified", "ISSA"],
    image: trainer2,
  },
  {
    name: "Neha Kapoor",
    specialization: "Weight Loss & Nutrition Coach",
    experience: "7+ Years Experience",
    certifications: ["NASM CPT", "Precision Nutrition"],
    image: trainer4,
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

export default function TrainersSection() {
  return (
    <section className="bg-[#0e0e0e] py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-7xl mx-auto text-center"
      >
        {/* Section Header */}
        <p className="text-sm tracking-widest text-orange-500 mb-3">
          OUR TRAINERS
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Meet the Experts Who Guide{" "}
          <span className="bg-gradient-to-tl from-orange-700 via-orange-400 to-white bg-clip-text text-transparent">
            {" "}
            Your Transformation
          </span>
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-14">
          Certified. Experienced. Committed to your success.
        </p>

        {/* Trainers Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {trainers.map((trainer, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="bg-[#161616] rounded-xl overflow-hidden shadow-md border border-white/5 group transition-all"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Content */}
              <div className="p-6 text-left">
                <h3 className="text-lg font-semibold text-white mb-1">
                  {trainer.name}
                </h3>
                <p className="text-sm text-orange-500 mb-3">
                  {trainer.specialization}
                </p>

                <p className="text-sm text-gray-400 mb-2">
                  {trainer.experience}
                </p>

                <ul className="text-sm text-gray-400 space-y-1">
                  {trainer.certifications.map((cert, i) => (
                    <li key={i}>• {cert}</li>
                  ))}
                </ul>

                {/* Accent underline */}
                <div className="h-[2px] w-0 bg-orange-500 mt-5 transition-all duration-300 group-hover:w-12" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Line */}
        <p className="text-gray-500 text-sm mt-12">
          All trainers are background-verified and certified professionals.
        </p>
      </motion.div>
    </section>
  );
}
