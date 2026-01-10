import { motion } from "framer-motion";

const programs = [
  {
    title: "Weight Training",
    desc: "Build strength, muscle, and confidence",
  },
  {
    title: "Personal Training",
    desc: "Personalized coaching for faster results",
  },
  {
    title: "CrossFit",
    desc: "High-intensity training to push your limits",
  },
  {
    title: "Zumba / Yoga",
    desc: "Improve flexibility, balance, and energy",
  },
  {
    title: "Fat Loss Programs",
    desc: "Burn fat with structured, proven routines",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const Programs = () => {
  return (
    <section id="programs" className="bg-[#0e0e0e] text-white py-20 md:py-28">
      <div className="container mx-auto px-6">
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-2xl mb-14"
        >
          <p className="text-sm tracking-widest text-orange-500 mb-3">
            OUR PROGRAMS
          </p>

          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            Training Programs Designed for Real Results
          </h2>

          <p className="text-gray-400">
            Whether your goal is strength, fat loss, or flexibility — we have a
            program built for you.
          </p>
        </motion.div>

        {/* PROGRAMS GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {programs.map((program, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className="group rounded-2xl bg-[#151515] border border-white/5 p-8 transition-shadow duration-300 hover:shadow-[0_0_0_1px_rgba(249,249,249,0.9)]"
            >
              <h3 className="text-xl font-semibold mb-2">{program.title}</h3>

              <p className="text-gray-400 mb-6">{program.desc}</p>

              <button className="w-full sm:w-auto px-6 py-3 rounded-lg border border-white text-white font-medium transition-all duration-300 group-hover:bg-white group-hover:text-black">
                Start Free Trial
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
