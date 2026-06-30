"use client";

import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export default function CTASection() {
  return (
    <section aria-label="Call to action" className="relative py-32 md:py-44 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-nexera-violet/20 via-transparent to-nexera-cyan/10" aria-hidden="true" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <ScrollReveal>
          <h2 className="font-display font-bold text-[clamp(2.2rem,6vw,4rem)] text-cool-white leading-tight text-balance">
            Ready to build<br />the next?
          </h2>
          <p className="mt-6 text-lg text-cool-white/50 font-body max-w-lg mx-auto text-pretty">
            Let&apos;s talk. Free consultation, no pressure.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-nexera-violet text-cool-white font-semibold text-sm tracking-wide hover:bg-nexera-violet/80 hover:scale-[1.04] active:scale-[0.96] transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nexera-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-ink-space hover:shadow-[0_0_40px_rgba(91,47,212,0.4)]"
            >
              Start a project
              <span className="inline-block transition-transform duration-150 group-hover:translate-x-1" aria-hidden="true">→</span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
