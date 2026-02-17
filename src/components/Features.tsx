"use client";

import { motion } from "framer-motion";
import { BookOpen, MessageSquareText, Search, Mic, NotebookPen, Brain } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Bible Reader",
    description: "Beautiful, distraction-free reading experience with multiple translations at your fingertips.",
    color: "bg-navy/10 text-navy",
  },
  {
    icon: MessageSquareText,
    title: "AI Study Assistant",
    description: "Ask questions about any passage and receive thoughtful, theologically-grounded insights instantly.",
    color: "bg-gold/20 text-gold-700",
  },
  {
    icon: Search,
    title: "Concordance & Dictionary",
    description: "Explore original Hebrew and Greek meanings with comprehensive word studies and cross-references.",
    color: "bg-navy/10 text-navy",
  },
  {
    icon: Mic,
    title: "Sermon Notes",
    description: "Record and transcribe sermons, then link insights directly to related Scripture passages.",
    color: "bg-gold/20 text-gold-700",
  },
  {
    icon: NotebookPen,
    title: "Journal & Bookmarks",
    description: "Capture your reflections, highlight meaningful verses, and organize your spiritual journey.",
    color: "bg-navy/10 text-navy",
  },
  {
    icon: Brain,
    title: "Scripture Memory",
    description: "Memorize verses with spaced repetition and track your progress over time.",
    color: "bg-gold/20 text-gold-700",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Features() {
  return (
    <section id="features" className="py-20 lg:py-32 bg-white">
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
            Everything You Need for
            <br />
            <span className="text-gold">Deeper Bible Study</span>
          </h2>
          <p className="text-lg text-navy/60 max-w-2xl mx-auto">
            Powerful tools designed to help you understand, memorize, and apply Scripture to your daily life.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="group p-6 lg:p-8 bg-cream rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <Icon size={28} />
                </div>
                <h3 className="font-display text-xl font-semibold text-navy mb-3">
                  {feature.title}
                </h3>
                <p className="text-navy/60 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
