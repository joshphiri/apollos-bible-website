"use client";

import { motion } from "framer-motion";
import { BookOpen, MessageSquareText, AudioLines, Mic, NotebookPen, Brain } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Bible Reader",
    description: "Beautiful, distraction-free reading experience with multiple translations at your fingertips.",
    color: "bg-navy/10 text-navy",
  },
  {
    icon: MessageSquareText,
    title: "Ask Apollos",
    description: "Ask about a verse, passage, or biblical word. Explore explanations and Scripture references to support your own study.",
    color: "bg-gold/20 text-gold-700",
  },
  {
    icon: AudioLines,
    title: "Voice Bible",
    description: "Create a voice profile from your own recording and hear Scripture narrated in your voice. Save generated chapters in your library.",
    color: "bg-navy/10 text-navy",
  },
  {
    icon: Mic,
    title: "Sermon Transcriber",
    description: "Record sermons and return to their transcripts, summaries, and key points in your sermon library.",
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
    description: "Practise Scripture with flashcards and build a regular habit of remembering God's Word.",
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
