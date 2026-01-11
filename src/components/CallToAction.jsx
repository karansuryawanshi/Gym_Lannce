import { motion } from "framer-motion";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function CallToAction({
  headline = "Ready to Start Your Fitness Journey?",
  subHeadline = "Book a free trial or talk to our trainers today — no pressure, just results.",
  onPrimaryClick,
  onCallClick,
  onWhatsappClick,
}) {
  return (
    <section className="bg-[#0b0b0b] py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-4xl mx-auto text-center"
      >
        {/* Headline */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
          {headline}
        </h2>

        {/* Sub-headline */}
        {subHeadline && (
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">{subHeadline}</p>
        )}

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Primary CTA */}
          <button
            onClick={onPrimaryClick}
            className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 hover:scale-105 focus:outline-none w-full sm:w-auto"
          >
            Book Free Trial
          </button>

          {/* Secondary CTAs */}
          <button
            onClick={onCallClick}
            className="flex items-center justify-center gap-2 border border-gray-600 hover:border-white text-white px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
          >
            <FaPhoneAlt className="text-sm" />
            Call Now
          </button>

          <button
            onClick={onWhatsappClick}
            className="flex items-center justify-center gap-2 border border-gray-600 hover:border-green-500 text-white px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
          >
            <FaWhatsapp className="text-green-500 text-lg" />
            WhatsApp Us
          </button>
        </div>
      </motion.div>
    </section>
  );
}
