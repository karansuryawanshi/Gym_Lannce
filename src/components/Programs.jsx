import { motion } from "framer-motion";
import WeightTraining from "../assets/weight_training.png";
import zumba from "../assets/zumba.png";
import personalTraining from "../assets/personal_training.png";
import fatLoss from "../assets/fat_loss.png";
import crossFit from "../assets/cross_fit.png";

const programs = [
  {
    title: "Weight Training",
    desc: "Build strength, muscle, and confidence",
    image: WeightTraining,
  },
  {
    title: "Personal Training",
    desc: "Personalized coaching for faster results",
    image: zumba,
  },
  {
    title: "CrossFit",
    desc: "High-intensity training to push your limits",
    image: personalTraining,
  },
  {
    title: "Zumba / Yoga",
    desc: "Improve flexibility, balance, and energy",
    image: fatLoss,
  },
  {
    title: "Fat Loss Programs",
    desc: "Burn fat with structured, proven routines",
    image: crossFit,
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const card = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const Programs = () => {
  return (
    <section className="bg-[#0e0e0e] text-white py-20 md:py-28">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-14"
        >
          <p className="text-sm tracking-widest text-orange-500 mb-3">
            OUR PROGRAMS
          </p>
          <h2 className="font-extrabold text-2xl sm:text-3xl lg:text-5xl leading-tight mb-4">
            Training Programs Designed for{" "}
            <span className="bg-gradient-to-tl from-orange-700 via-orange-400 to-white bg-clip-text text-transparent">
              Real Results
            </span>
          </h2>
          <p className="text-gray-400">
            Whether your goal is strength, fat loss, or flexibility — we have a
            program built for you.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {programs.map((p, i) => (
            <motion.div
              key={i}
              variants={card}
              whileHover={{ y: -6 }}
              className="relative h-[360px] rounded-2xl overflow-hidden group"
            >
              {/* Background Image */}
              <img
                src={p.image}
                alt={p.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 " />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-end ">
                <div className="bg-gradient-to-t from-black/90 via-black/70 to-blac p-6 ">
                  <h3 className="text-xl font-semibold mb-1">{p.title}</h3>
                  <p className="text-gray-300 mb-4">{p.desc}</p>

                  <button className="w-full md:w-fit px-6 py-3 rounded-lg border border-orange-500 text-orange-500 font-medium transition-all duration-300 hover:bg-orange-500 hover:text-black">
                    Start Free Trial
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
