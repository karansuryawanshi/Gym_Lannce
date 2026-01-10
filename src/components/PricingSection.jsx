import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheck } from "react-icons/fa";
import clsx from "clsx";

const plans = {
  monthly: [
    {
      name: "Basic",
      price: "₹1,999",
      desc: "Ideal for beginners getting started",
      features: [
        "Full gym access",
        "Locker facility",
        "Basic progress tracking",
      ],
      popular: false,
    },
    {
      name: "Pro",
      price: "₹2,999",
      desc: "Best for serious transformation",
      features: [
        "Full gym access",
        "Unlimited group classes",
        "2 Personal training sessions",
        "Diet guidance",
        "Advanced progress tracking",
      ],
      popular: true,
    },
    {
      name: "Premium",
      price: "₹4,999",
      desc: "Elite coaching & complete support",
      features: [
        "All Pro features",
        "Unlimited personal training",
        "Custom meal plans",
        "Weekly body analysis",
        "Priority support",
      ],
      popular: false,
    },
  ],
  quarterly: [
    {
      name: "Basic",
      price: "₹5,499",
      desc: "Save more with quarterly access",
      features: [
        "Full gym access",
        "Locker facility",
        "Basic progress tracking",
      ],
      popular: false,
    },
    {
      name: "Pro",
      price: "₹7,999",
      desc: "Maximum value for consistency",
      features: [
        "Full gym access",
        "Unlimited group classes",
        "Personal training sessions",
        "Diet guidance",
        "Advanced progress tracking",
      ],
      popular: true,
    },
    {
      name: "Premium",
      price: "₹13,499",
      desc: "Best long-term transformation plan",
      features: [
        "All Pro features",
        "Unlimited personal training",
        "Custom meal plans",
        "Weekly body analysis",
        "Priority support",
      ],
      popular: false,
    },
  ],
  yearly: [
    {
      name: "Basic",
      price: "₹19,999",
      desc: "Lowest cost per month",
      features: [
        "Full gym access",
        "Locker facility",
        "Basic progress tracking",
      ],
      popular: false,
    },
    {
      name: "Pro",
      price: "₹29,999",
      desc: "Most chosen yearly plan",
      features: [
        "Full gym access",
        "Unlimited group classes",
        "Personal training sessions",
        "Diet guidance",
        "Advanced progress tracking",
      ],
      popular: true,
    },
    {
      name: "Premium",
      price: "₹49,999",
      desc: "All-inclusive elite experience",
      features: [
        "All Pro features",
        "Unlimited personal training",
        "Custom meal plans",
        "Weekly body analysis",
        "Priority support",
      ],
      popular: false,
    },
  ],
};

export default function PricingSection() {
  const [billing, setBilling] = useState("monthly");

  return (
    <section className="bg-[#0b0b0b] text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <p className="text-orange-500 tracking-widest text-sm font-semibold mb-3">
            PRICING PLANS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Choose the Plan That Fits Your Goals
          </h2>
          <p className="text-gray-400">
            Simple pricing. No hidden fees. Cancel anytime.
          </p>
        </motion.div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-16">
          <div className="bg-[#151515] rounded-full p-1 flex gap-1">
            {["monthly", "quarterly", "yearly"].map((type) => (
              <button
                key={type}
                onClick={() => setBilling(type)}
                className={clsx(
                  "px-6 py-2 rounded-full text-sm font-medium transition",
                  billing === type
                    ? "bg-orange-500 text-black"
                    : "text-gray-400 hover:text-white"
                )}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={billing}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {plans[billing].map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: plan.popular ? 0.3 : index * 0.15,
                }}
                whileHover={{ y: -6 }}
                className={clsx(
                  "relative bg-[#141414] rounded-2xl p-8 border transition",
                  plan.popular
                    ? "border-orange-500 scale-[1.04]"
                    : "border-white/10"
                )}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-black text-xs font-bold px-4 py-1 rounded-full">
                    MOST POPULAR
                  </span>
                )}

                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-4">{plan.desc}</p>

                <div className="text-4xl font-bold mb-6">
                  {plan.price}
                  <span className="text-sm text-gray-400 font-normal">
                    {" "}
                    / {billing}
                  </span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-gray-300"
                    >
                      <FaCheck className="text-orange-500 text-sm" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  className={clsx(
                    "w-full py-3 rounded-xl font-semibold transition",
                    plan.popular
                      ? "bg-orange-500 text-black hover:bg-orange-400"
                      : "bg-white/10 hover:bg-white/20"
                  )}
                >
                  Choose Plan
                </button>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Trust Note */}
        <p className="text-center text-gray-500 text-sm mt-14">
          No long-term contracts • Cancel anytime • 7-day free trial
        </p>
      </div>
    </section>
  );
}
