import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { useState } from "react";

export default function ContactFreeTrialSection() {
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isValid, isSubmitting },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    setSuccess(false);

    // 🔁 Dummy submission simulation
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Dummy Submitted Data:", data);
        setSuccess(true);
        reset();
        resolve();
      }, 1200);
    });
  };

  const requiredFieldsFilled =
    watch("name") && watch("phone") && watch("email") && watch("program");

  return (
    <section className="bg-[#0e0e0e] py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-7xl mx-auto"
      >
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Book Your Free{" "}
            <span className="bg-gradient-to-tl from-orange-700 via-orange-400 to-white bg-clip-text text-transparent">
              Trial Session
            </span>
          </h2>
          <p className="text-gray-400 mt-3 max-w-xl mx-auto">
            No payment required. No spam. Our trainers will guide you
            personally.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {success ? (
            <div className="flex flex-col justify-center mb-6 rounded-xl text-3xl font-semibold text-center bg-neutral-500/10 border border-neutral-500/30 p-4 text-white">
              <span className="bg-gradient-to-tl from-orange-700 via-orange-400 to-white bg-clip-text text-transparent">
                Session booked successfully!{" "}
              </span>{" "}
              Our trainer will contact you shortly.
            </div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-[#141414] rounded-2xl p-8 space-y-6"
            >
              {/* Name */}
              <div>
                <label className="text-sm text-gray-300">Full Name *</label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="Enter your full name"
                  className="mt-2 w-full rounded-lg bg-[#f5f5f5] px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">Name is required</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="text-sm text-gray-300">Phone Number *</label>
                <input
                  type="tel"
                  {...register("phone", { required: true })}
                  placeholder="Enter your phone number"
                  className="mt-2 w-full rounded-lg bg-[#f5f5f5] px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">
                    Phone number is required
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="text-sm text-gray-300">Email Address *</label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Enter your email"
                  className="mt-2 w-full rounded-lg bg-[#f5f5f5] px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">Email is required</p>
                )}
              </div>

              {/* Program */}
              <div>
                <label className="text-sm text-gray-300">
                  Preferred Program *
                </label>
                <select
                  {...register("program", { required: true })}
                  className="mt-2 w-full rounded-lg bg-[#f5f5f5] px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="">Select a program</option>
                  <option>Weight Training</option>
                  <option>Fat Loss</option>
                  <option>Personal Training</option>
                  <option>CrossFit</option>
                  <option>Zumba / Cardio</option>
                </select>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={!requiredFieldsFilled || isSubmitting || !isValid}
                className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                  requiredFieldsFilled
                    ? "bg-orange-500 hover:bg-orange-600 text-black"
                    : "bg-gray-600 text-gray-300 cursor-not-allowed"
                }`}
              >
                {isSubmitting ? "Booking..." : "Book Free Trial"}
              </button>
            </form>
          )}

          {/* LEFT — FORM */}

          {/* RIGHT — CONTACT + MAP */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="bg-[#141414] rounded-2xl p-8 space-y-4">
              <h3 className="text-xl font-semibold text-white">
                Prefer Instant Contact?
              </h3>

              {/* Phone */}
              <a
                href="tel:+919999999999"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition"
              >
                <FaPhoneAlt />
                +91 99999 99999
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919999999999?text=Hi,%20I’d%20like%20to%20book%20a%20free%20gym%20trial."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-green-500 hover:text-green-400 transition"
              >
                <FaWhatsapp size={20} />
                WhatsApp Us Instantly
              </a>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-[#222]">
              <iframe
                title="Gym Location"
                src="https://www.google.com/maps?q=Pune&output=embed"
                className="w-full h-64 border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
