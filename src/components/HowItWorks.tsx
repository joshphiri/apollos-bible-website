"use client";

import { motion } from "framer-motion";
import { HelpCircle, Sparkles, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Open Ask Apollos",
    description: "Wonder about a passage? Simply ask in plain language. No need for complex searches or terminology.",
    icon: HelpCircle,
  },
  {
    number: "02",
    title: "Explore the Answer",
    description: "Read the explanation and Scripture references, then compare them with the passage. Responses can make mistakes, so use your own judgement.",
    icon: Sparkles,
  },
  {
    number: "03",
    title: "Go Deeper",
    description: "Explore related passages, write your reflections in your journal, and build a richer understanding over time.",
    icon: ArrowRight,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-gradient-to-b from-cream to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4">
            How It <span className="text-gold">Works</span>
          </h2>
          <p className="text-lg text-navy/60 max-w-2xl mx-auto">
            Bring your questions about Scripture to Ask Apollos, then keep exploring the Bible for yourself.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                {/* Connector line (hidden on mobile and last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-full h-0.5 bg-gradient-to-r from-gold/50 to-gold/10" />
                )}

                <div className="relative bg-white rounded-2xl p-8 shadow-lg shadow-navy/5 hover:shadow-xl transition-shadow">
                  {/* Step number */}
                  <div className="absolute -top-4 left-6 px-3 py-1 bg-gold text-white text-sm font-bold rounded-full">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mb-6">
                    <Icon size={32} className="text-gold" />
                  </div>

                  <h3 className="font-display text-xl font-semibold text-navy mb-3">
                    {step.title}
                  </h3>
                  <p className="text-navy/60 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <a
            href="/#download"
            className="inline-flex items-center gap-2 px-8 py-4 bg-navy hover:bg-navy-600 text-white font-semibold rounded-full transition-all hover:shadow-xl hover:shadow-navy/20"
          >
            See iPhone availability
            <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
