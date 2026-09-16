"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What Bible translations are available?",
    answer: "The reading library offers NIV, AMP, WEB, and KJV. Choose a translation in the Bible reader. WEB is available offline; other translations need an internet connection.",
  },
  {
    question: "How does Ask Apollos work?",
    answer: "Open the Apollos tab and ask about a verse, passage, or biblical word. Ask Apollos provides explanations and Scripture references to support your study. Responses can make mistakes; compare them with Scripture and trusted study resources. Access and usage allowances are shown in the app.",
  },
  {
    question: "Is my data private and secure?",
    answer: "Some features send questions, voice recordings, or sermon audio to service providers so they can respond, generate narration, or transcribe. Read our Privacy Policy for details about collection, processing, storage, and account deletion. Avoid including sensitive personal information in questions or recordings.",
  },
  {
    question: "Can I use Apollos Bible offline?",
    answer: "The WEB Bible is available offline. Voice Bible chapters saved on your device can be replayed offline. Ask Apollos, new voice narration, sermon processing, and Dramatised Bible streaming require an internet connection.",
  },
  {
    question: "What makes Apollos different from other Bible apps?",
    answer: "Read Scripture, explore questions with Ask Apollos, hear the Bible in your own voice with Voice Bible, and revisit sermons through transcripts and summaries. Reading plans, a personal journal, bookmarks, and memory flashcards support your daily study.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Manage or cancel your iPhone subscription in your Apple Account subscription settings. Access continues for the remaining subscription period. See the renewal terms Apple presents before you subscribe.",
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
