"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const screenshots = [
  {
    src: "/images/screenshots/home-screen.jpg",
    title: "Home Dashboard",
    description: "Quick access to all features",
  },
  {
    src: "/images/screenshots/bible-reader.jpg",
    title: "Bible Reader",
    description: "Multiple translations with search",
  },
  {
    src: "/images/screenshots/sermons.jpg",
    title: "Sermon Transcriber",
    description: "Record and transcribe automatically",
  },
  {
    src: "/images/screenshots/welcome.jpg",
    title: "Welcome Screen",
    description: "Everything to grow in God's Word",
  },
];

export default function AppPreview() {
  return (
    <section className="py-20 bg-navy overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            See It In Action
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Beautiful, intuitive design that makes Bible study a joy
          </p>
        </motion.div>

        {/* Screenshot carousel */}
        <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
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
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-gray-800 rounded-b-xl z-10" />
                    
                    <Image
                      src={screenshot.src}
                      alt={screenshot.title}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                </div>

                {/* Label */}
                <div className="mt-4 text-center">
                  <h3 className="font-semibold text-white">{screenshot.title}</h3>
                  <p className="text-sm text-white/60">{screenshot.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
