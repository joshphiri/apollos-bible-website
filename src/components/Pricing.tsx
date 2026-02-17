"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for getting started with Bible study",
    features: [
      "Full Bible text (multiple translations)",
      "Basic search and bookmarks",
      "Personal journal",
      "5 AI questions per day",
      "Reading plans",
    ],
    cta: "Download Free",
    popular: false,
  },
  {
    name: "Premium",
    price: "$12",
    period: "/month",
    description: "Unlock the full power of AI-assisted study",
    features: [
      "Everything in Free, plus:",
      "Unlimited AI conversations",
      "Advanced concordance & dictionary",
      "Sermon transcription",
      "Scripture memory tools",
      "Cross-reference explorer",
      "Offline access",
      "Priority support",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 lg:py-32 bg-navy relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Simple, Transparent <span className="text-gold">Pricing</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Start free and upgrade when you&apos;re ready. Cancel anytime.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative rounded-3xl p-8 ${
                plan.popular
                  ? "bg-white"
                  : "bg-white/10 backdrop-blur-sm border border-white/10"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 px-4 py-1.5 bg-gold text-white text-sm font-semibold rounded-full">
                  <Sparkles size={14} />
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className={`font-display text-2xl font-bold mb-2 ${plan.popular ? "text-navy" : "text-white"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.popular ? "text-navy/60" : "text-white/60"}`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <span className={`font-display text-5xl font-bold ${plan.popular ? "text-navy" : "text-white"}`}>
                  {plan.price}
                </span>
                <span className={`${plan.popular ? "text-navy/60" : "text-white/60"}`}>
                  {plan.period}
                </span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      plan.popular ? "bg-gold/20" : "bg-gold/30"
                    }`}>
                      <Check size={12} className="text-gold" />
                    </div>
                    <span className={`${plan.popular ? "text-navy/80" : "text-white/80"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#download"
                className={`block w-full py-4 text-center font-semibold rounded-xl transition-all ${
                  plan.popular
                    ? "bg-gold hover:bg-gold-600 text-white hover:shadow-lg hover:shadow-gold/25"
                    : "bg-white/10 hover:bg-white/20 text-white border border-white/20"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Church support message */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-white/40 text-sm mt-12"
        >
          Proceeds support new church plants worldwide
        </motion.p>
      </div>
    </section>
  );
}
