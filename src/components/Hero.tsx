"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Apple, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 lg:pt-0 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-cream to-gold/10" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-navy/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 rounded-full text-gold-700 text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
              Ask Apollos
            </motion.div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-tight mb-6">
              Study Scripture
              <br />
              <span className="text-gold">Like Never Before</span>
            </h1>

            <p className="text-lg sm:text-xl text-navy/70 mb-8 max-w-xl mx-auto lg:mx-0">
              Read Scripture, explore questions with Ask Apollos, hear the Bible in your own voice, and revisit the lessons from your sermons.
            </p>

            {/* Pre-launch availability; no placeholder store links. */}
            <div id="download" className="scroll-mt-24 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <div
                className="inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-navy text-white rounded-xl"
              >
                <Apple size={24} aria-hidden="true" />
                <div className="text-left">
                  <div className="text-xs text-white/70">Coming soon to</div>
                  <div className="font-semibold">iPhone</div>
                </div>
              </div>
              <a
                href="/#features"
                className="inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-navy hover:bg-navy-600 text-white rounded-xl transition-all hover:shadow-xl hover:shadow-navy/20 group"
              >
                <span className="font-semibold">Explore features</span>
                <ArrowRight size={20} aria-hidden="true" />
              </a>
            </div>
          </motion.div>

          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Phone frame */}
              <div className="relative w-[280px] sm:w-[320px] h-[560px] sm:h-[640px] bg-navy rounded-[3rem] p-2 shadow-2xl shadow-navy/30">
                <div className="w-full h-full bg-cream rounded-[2.5rem] overflow-hidden relative">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-navy rounded-b-2xl z-10" />
                  
                  {/* Real app screenshot */}
                  <Image
                    src="/images/screenshots/welcome.jpg"
                    alt="Apollos Bible App"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -left-8 top-1/4 bg-white rounded-xl p-3 shadow-xl hidden lg:block"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center">
                    <span className="text-gold text-lg">📖</span>
                  </div>
                  <div>
                    <div className="text-xs text-navy/60">Daily Reading</div>
                    <div className="text-sm font-semibold text-navy">Psalm 23</div>
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
