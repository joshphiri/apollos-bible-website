"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What Bible translations are available?",
    answer: "Apollos Bible includes ESV, NIV, KJV, NASB, NLT, and more. You can easily switch between translations while reading, and even compare multiple versions side-by-side.",
  },
  {
    question: "How does the AI study assistant work?",
    answer: "Our AI is trained on trusted theological resources and commentaries. Ask any question about a passage, and it will provide thoughtful, doctrinally-sound insights along with relevant cross-references. It's like having a seminary professor in your pocket.",
  },
  {
    question: "Is my data private and secure?",
    answer: "Absolutely. Your notes, highlights, and conversations are encrypted and stored securely. We never sell your data or share it with third parties. Your spiritual journey remains private.",
  },
  {
    question: "Can I use Apollos Bible offline?",
    answer: "Yes! Premium subscribers can download Bible translations and their notes for offline access. Perfect for quiet retreats or areas with limited connectivity.",
  },
  {
    question: "What makes Apollos different from other Bible apps?",
    answer: "Apollos combines the depth of traditional study tools with modern AI capabilities. We focus on theological accuracy, beautiful design, and features that help you not just read, but truly understand and apply Scripture.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, you can cancel your Premium subscription at any time. You'll continue to have access until the end of your billing period, and your data (notes, highlights, etc.) will always remain accessible on the free plan.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 lg:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4">
            Frequently Asked <span className="text-gold">Questions</span>
          </h2>
          <p className="text-lg text-navy/60">
            Got questions? We&apos;ve got answers.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-6 bg-cream rounded-2xl hover:bg-cream-200 transition-colors"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-display text-lg font-semibold text-navy pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown size={20} className="text-navy/40" />
                  </motion.div>
                </div>

                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="pt-4 text-navy/60 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12 p-8 bg-cream rounded-2xl"
        >
          <h3 className="font-display text-xl font-semibold text-navy mb-2">
            Still have questions?
          </h3>
          <p className="text-navy/60 mb-4">
            We&apos;re here to help. Reach out anytime.
          </p>
          <a
            href="/support"
            className="inline-flex items-center px-6 py-3 bg-navy hover:bg-navy-600 text-white font-semibold rounded-full transition-all hover:shadow-lg"
          >
            Contact Support
          </a>
        </motion.div>
      </div>
    </section>
  );
}
