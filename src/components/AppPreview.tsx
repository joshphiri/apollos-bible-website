"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const screenshots = [
  {
    src: "/showcase/assets/home.jpg",
    title: "Your Home",
    description: "Continue reading and discover a daily verse",
  },
  {
    src: "/showcase/assets/voice.png",
    title: "Voice Bible",
    description: "Your voice and saved Scripture chapters",
  },
  {
    src: "/showcase/assets/sermons.jpg",
    title: "Sermon Transcriber",
    description: "Revisit a sermon and its key points",
  },
  {
    src: "/showcase/assets/verse.jpg",
    title: "Verse Cards",
    description: "Save and share a meaningful verse",
  },
];

export default function AppPreview() {
  return (
    <section id="app-preview" className="py-20 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy mb-4">
            See It In Action
          </h2>
          <p className="text-lg text-navy/70 max-w-2xl mx-auto">
            Real Apollos screens. Swipe or scroll across to explore.
          </p>
        </motion.div>

        {/* Screenshot carousel */}
        <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory" tabIndex={0} role="region" aria-label="Apollos screenshot gallery">
          {screenshots.map((screenshot, index) => (
            <motion.div
              key={screenshot.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex-shrink-0 snap-center first:pl-4 last:pr-4"
            >
              <div className="relative group">
                {/* Phone frame */}
                <div className="w-[240px] sm:w-[280px] bg-gray-800 rounded-[2.5rem] p-2 shadow-2xl">
                  <div className="relative w-full h-[480px] sm:h-[560px] rounded-[2rem] overflow-hidden bg-black">
                    {/* Real screenshots remain unaltered; do not add a fake notch. */}
                    
                    <Image
                      src={screenshot.src}
                      alt={screenshot.title}
                      fill
                      className="object-contain" sizes="(max-width: 640px) 240px, 280px"
                    />
                  </div>
                </div>

                {/* Label */}
                <div className="mt-4 text-center">
                  <h3 className="font-semibold text-navy">{screenshot.title}</h3>
                  <p className="text-sm text-navy/70">{screenshot.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
