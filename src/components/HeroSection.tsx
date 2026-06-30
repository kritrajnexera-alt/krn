"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const headline = ["BUILD", "THE", "NEXT.", "NOW."];

function WordReveal({ words }: { words: string[] }) {
  return (
    <h1 className="font-display font-bold leading-[0.9] tracking-tight text-balance">
      <span className="text-[clamp(2.5rem,10vw,96px)]">
        {words.map((word, i) => {
          const isLast = i === words.length - 1;
          return (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 60, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className={`inline-block mr-[0.15em] ${isLast ? "text-nexera-cyan" : ""}`}
            >
              {word}
              {isLast && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block ml-2 w-2 h-2 rounded-full bg-nexera-cyan align-middle"
                  aria-hidden="true"
                />
              )}
            </motion.span>
          );
        })}
      </span>
    </h1>
  );
}

function Ticker() {
  const items = [
    "WEBSITES", "AUTOMATION", "N8N WORKFLOWS", "NEXT.JS",
    "TAILWIND", "TYPESCRIPT", "VERCEL", "SUPABASE",
  ];
  return (
    <div className="w-full overflow-hidden border-t border-b border-nexera-violet/10 py-3 relative" aria-hidden="true">
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-ink-space to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-ink-space to-transparent z-10 pointer-events-none" />
      <div className="ticker-track flex gap-12 whitespace-nowrap">
        {[...Array(2)].map((_, setIdx) => (
          <div key={setIdx} className="flex gap-12 items-center">
            {items.map((item, i) => (
              <span key={i} className="font-mono text-[11px] tracking-[0.15em] text-cool-white/40 uppercase">
                <span className="text-nexera-cyan mr-2" aria-hidden="true">◆</span>
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section aria-labelledby="hero-heading" className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden">
      <div className="dot-grid absolute inset-0 pointer-events-none" aria-hidden="true" />

      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none hidden lg:block" aria-hidden="true">
        <svg viewBox="0 0 500 500" fill="none" className="w-full h-full opacity-[0.04] mix-blend-screen">
          <rect x="50" y="50" width="400" height="400" rx="20" stroke="url(#cube-grad)" strokeWidth="0.5" />
          <rect x="100" y="100" width="400" height="400" rx="20" stroke="url(#cube-grad)" strokeWidth="0.5" />
          <line x1="50" y1="50" x2="100" y2="100" stroke="url(#cube-grad)" strokeWidth="0.5" />
          <line x1="450" y1="50" x2="500" y2="100" stroke="url(#cube-grad)" strokeWidth="0.5" />
          <line x1="50" y1="450" x2="100" y2="500" stroke="url(#cube-grad)" strokeWidth="0.5" />
          <line x1="450" y1="450" x2="500" y2="500" stroke="url(#cube-grad)" strokeWidth="0.5" />
          <defs>
            <linearGradient id="cube-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#5B2FD4" />
              <stop offset="50%" stopColor="#00C8E0" />
              <stop offset="100%" stopColor="#5B2FD4" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-16 w-full">
        <div className="max-w-4xl">
          <div id="hero-heading">
            <WordReveal words={headline} />
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-lg md:text-xl text-cool-white/60 font-body max-w-2xl leading-relaxed text-pretty"
          >
            Premium websites, smart automation &amp; AI-powered tools — 
            built for Indian businesses ready to grow beyond templates.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col sm:flex-row gap-4 items-center"
          >
            <Link
              href="/contact"
              className="px-7 py-3.5 rounded-full bg-nexera-violet text-cool-white font-semibold text-sm tracking-wide hover:bg-nexera-violet/80 hover:scale-[1.03] active:scale-[0.97] transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nexera-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-ink-space hover:shadow-[0_0_30px_rgba(91,47,212,0.3)] flex items-center gap-2"
            >
              Book a free call
              <span className="inline-block transition-transform duration-150 group-hover:translate-x-1" aria-hidden="true">→</span>
            </Link>
            <Link
              href="/services"
              className="px-7 py-3.5 rounded-full border border-nexera-cyan/50 text-nexera-cyan font-semibold text-sm tracking-wide hover:bg-nexera-cyan/10 hover:scale-[1.03] active:scale-[0.97] transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nexera-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-ink-space flex items-center gap-2"
            >
              View services
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10">
        <Ticker />
      </div>
    </section>
  );
}
