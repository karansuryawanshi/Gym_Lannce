import { motion } from "framer-motion";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import clsx from "clsx";
import interior from "../assets/interior-1.png";
import equipment from "../assets/equipment-1.png";
import training from "../assets/training-1.png";
import group from "../assets/group-1.png";
import workout from "../assets/workout-1.png";
import yoga from "../assets/yoga-1.png";

const images = [
  {
    src: interior,
    alt: "Gym interior wide shot",
  },
  {
    src: equipment,
    alt: "Modern gym equipment",
  },
  {
    src: training,
    alt: "Personal training session",
  },
  {
    src: group,
    alt: "Group fitness class",
  },
  {
    src: workout,
    alt: "Members working out naturally",
  },
  {
    src: yoga,
    alt: "Yoga class in session",
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

const itemVariants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export default function GallerySection() {
  return (
    <section className="bg-[#0e0e0e] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-12"
        >
          <p className="text-orange-500 tracking-widest text-sm font-semibold mb-2">
            GALLERY
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Take a Look Inside{" "}
            <span className="bg-gradient-to-tl from-orange-700 via-orange-400 to-white bg-clip-text text-transparent">
              Our Gym
            </span>
          </h2>
          <p className="text-gray-400 max-w-xl">
            A space built for focus, motivation, and results.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <PhotoProvider>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={clsx(
              "grid gap-6",
              "grid-cols-1",
              "sm:grid-cols-2",
              "lg:grid-cols-3"
            )}
          >
            {images.map((image, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative overflow-hidden rounded-xl bg-[#1a1a1a] cursor-pointer"
              >
                <PhotoView src={image.src}>
                  <motion.img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                </PhotoView>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 hover:bg-black/30 transition duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>
        </PhotoProvider>

        {/* Trust Caption */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
          className="text-gray-500 text-sm mt-8"
        >
          Real moments from our gym — no filters, no fake setups.
        </motion.p>
      </div>
    </section>
  );
}
