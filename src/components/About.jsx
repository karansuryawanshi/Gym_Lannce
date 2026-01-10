import ImageA from "../assets/Image_A.png";

import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const imageVariant = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// export const About = () => {
//   return (
//     <section className="bg-black text-white py-20 md:py-28">
//       <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
//         {/* LEFT CONTENT */}
//         <motion.div
//           variants={container}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.3 }}
//           className="space-y-6"
//         >
//           {/* Section Label */}
//           <motion.p
//             variants={item}
//             className="uppercase tracking-wider text-sm text-gray-400/70"
//           >
//             About Fitzone
//           </motion.p>

//           {/* Heading */}
//           <motion.h2
//             variants={item}
//             className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight"
//           >
//             More Than a Gym. <br />A Lifestyle.
//           </motion.h2>

//           {/* Description */}
//           <motion.p variants={item} className="text-gray-300 max-w-xl">
//             We help real people build strength, confidence, and consistency
//             through expert coaching, proven programs, and a supportive fitness
//             environment designed for long-term results — not quick fixes.
//           </motion.p>

//           {/* Feature Highlights */}
//           <motion.div
//             variants={item}
//             className="grid grid-cols-2 gap-4 pt-4 max-w-md"
//           >
//             {[
//               "Certified Trainers",
//               "Personalized Programs",
//               "Modern Equipment",
//               "Supportive Community",
//             ].map((feature, i) => (
//               <motion.div
//                 key={i}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 transition={{ duration: 0.45, ease: "easeOut", delay: i * 0.1 }}
//                 viewport={{ once: true }}
//                 className="bg-neutral-800/60 border border-neutral-700 rounded-lg px-4 py-3 text-sm font-medium"
//               >
//                 {feature}
//               </motion.div>
//             ))}
//           </motion.div>

//           {/* Optional Soft CTA */}
//           <motion.div variants={item}>
//             <button className="mt-6 border border-white/30 text-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition font-medium">
//               Learn More About Us
//             </button>
//           </motion.div>
//         </motion.div>

//         {/* RIGHT MEDIA */}
//         <motion.div
//           variants={imageVariant}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.3 }}
//           className="rounded-2xl overflow-hidden shadow-2xl bg-neutral-800"
//         >
//           {/* Replace img with video if you want */}
//           <img
//             src={ImageA}
//             autoPlay
//             loop
//             muted
//             playsInline
//             className="w-full h-full object-cover"
//           />
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// // export default About;

// import React from "react";

export const About = () => {
  return (
    <section id="about" className="bg-black text-white py-16 sm:py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl grid md:grid-cols-2 gap-10 md:gap-12 items-center">
        {/* LEFT — IMAGE */}
        <div className="relative group">
          <img
            src={ImageA}
            alt="Gym training"
            className="rounded-2xl w-full h-[260px] sm:h-[340px] md:h-[420px] object-cover opacity-90"
          />
        </div>

        {/* RIGHT — CONTENT */}
        <div className="space-y-5 sm:space-y-6">
          <p className="text-orange-500 font-semibold tracking-wider uppercase text-sm sm:text-base">
            About Us
          </p>

          <h2 className="font-extrabold text-2xl sm:text-3xl lg:text-5xl leading-tight">
            Real Coaches. Real Programs. Real Results.
          </h2>

          <p className="text-gray-300 max-w-xl text-sm sm:text-base">
            We help real people build strength, confidence, and consistency
            through expert coaching, proven programs, and a supportive fitness
            environment designed for long-term results — so you don’t just get
            fit, you stay fit.
          </p>

          {/* FEATURES GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-2 sm:pt-4 max-w-lg">
            {[
              "Certified Trainers",
              "Personalized Programs",
              "Modern Equipment",
              "Supportive Community",
            ].map((feature, i) => (
              <motion.div
                key={i}
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                  delay: i * 0.08,
                }}
                viewport={{ once: true }}
                className="bg-neutral-500/10 border duration-300 hover:bg-neutral-500/20 border-neutral-400/20 rounded-lg px-4 py-3 text-sm sm:text-base font-medium"
              >
                {feature}
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="pt-2 sm:pt-4">
            <button className="border border-white px-6 sm:px-8 py-3 rounded-lg hover:bg-white hover:text-black transition font-semibold text-sm sm:text-base">
              Learn More About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
