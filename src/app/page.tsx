"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

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
              transition={{ delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className={`inline-block mr-[0.15em] ${isLast ? "text-nexera-cyan" : ""}`}
            >
              {word}
              {isLast && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
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

function AnimatedCount({ value, suffix = "" }: { value: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const numValue = parseInt(value.replace(/[^0-9]/g, ""));
  const isNumeric = !isNaN(numValue);

  return (
    <span ref={ref} className="inline-block">
      {isNumeric ? (
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="inline-block"
        >
          <CountUp from={0} to={numValue} inView={inView} />
        </motion.span>
      ) : (
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {value}
        </motion.span>
      )}
      {suffix && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.4 }}
        >
          {suffix}
        </motion.span>
      )}
    </span>
  );
}

function CountUp({ from, to, inView }: { from: number; to: number; inView: boolean }) {
  const [count, setCount] = useState(from);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;

    const duration = 1500;
    const steps = 30;
    const increment = (to - from) / steps;
    let current = from;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current += increment;
      if (step >= steps) {
        setCount(to);
        clearInterval(timer);
      } else {
        setCount(Math.round(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [inView, from, to]);

  return <span>{count}</span>;
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

const services = [
  {
    index: "01",
    title: "Website Builds",
    desc: "Premium Next.js 16 + Tailwind v4. Fully responsive, SEO-optimised, 5-day turnaround. Includes CMS, analytics, and performance scoring 95+ Lighthouse.",
    price: "Starting ₹2,999",
  },
  {
    index: "02",
    title: "Workflow Automation",
    desc: "n8n-powered automations — lead capture, invoice generation, CRM sync, email sequences. 10+ hours saved per week. One-time setup, runs forever.",
    price: "Starting ₹4,999",
  },
  {
    index: "03",
    title: "AI Chatbots",
    desc: "KritBot — WhatsApp & web chat. Fine-tuned on your business data. Handles enquiries, bookings, FAQs.",
    price: "Starting ₹999/month",
    badge: "Coming Soon",
  },
  {
    index: "04",
    title: "SaaS Development",
    desc: "Full-stack SaaS with Next.js, Supabase, Stripe. Auth, payments, dashboard, API — everything included.",
    price: "Starting ₹14,999",
    badge: "Coming Soon",
  },
];

export default function Home() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section aria-labelledby="hero-heading" className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden">
        <div className="dot-grid absolute inset-0 pointer-events-none" aria-hidden="true" />

        {/* Geometric accent: large wireframe cube on the right */}
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

        {/* Small terminal accent */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-28 left-6 md:left-12 hidden md:flex items-center gap-2 font-mono text-[11px] text-cool-white/20 pointer-events-none"
          aria-hidden="true"
        >
          <span className="w-2 h-2 rounded-full bg-nexera-cyan/40" />
          <span className="tracking-wider">~/studio</span>
          <span className="text-nexera-violet/40">$</span>
          <span className="text-cool-white/10">build --next</span>
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-16 w-full">
          <div className="max-w-4xl">
            <div id="hero-heading">
              <WordReveal words={headline} />
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 text-lg md:text-xl text-cool-white/60 font-body max-w-2xl leading-relaxed text-pretty"
            >
              Premium websites, smart automation &amp; AI-powered tools — 
              built for Indian businesses ready to grow beyond templates.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 flex flex-col sm:flex-row gap-4 items-center"
            >
              <Link
                href="/contact"
                className="px-7 py-3.5 rounded-full bg-nexera-violet text-cool-white font-semibold text-sm tracking-wide hover:bg-nexera-violet/80 hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nexera-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-ink-space hover:shadow-[0_0_30px_rgba(91,47,212,0.3)] flex items-center gap-2"
              >
                Book a free call
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">→</span>
              </Link>
              <Link
                href="/services"
                className="px-7 py-3.5 rounded-full border border-nexera-cyan/50 text-nexera-cyan font-semibold text-sm tracking-wide hover:bg-nexera-cyan/10 hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nexera-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-ink-space flex items-center gap-2"
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

      {/* ─── SERVICES ─── */}
      <section aria-labelledby="services-heading" className="relative py-28 md:py-36 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <ScrollReveal>
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-nexera-cyan mb-4 block">
              What We Build
            </span>
            <h2 id="services-heading" className="font-display font-bold text-[clamp(2rem,5vw,3.5rem)] text-cool-white leading-tight max-w-xl text-balance">
              Services
            </h2>
          </ScrollReveal>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <ScrollReveal key={service.index} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className={`group relative p-8 rounded-2xl min-h-[200px] flex flex-col justify-between transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,200,224,0.08)] ${
                    service.badge === "Coming Soon"
                      ? "bg-card-bg border border-nexera-violet/10 opacity-70 hover:opacity-100 hover:border-nexera-cyan/30"
                      : i % 2 === 0
                      ? "bg-card-bg border border-nexera-violet/10 hover:border-nexera-cyan/30"
                      : "bg-surface-mid border border-nexera-violet/10 hover:border-nexera-cyan/30"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[11px] tracking-wider text-cool-white/40">{service.index}</span>
                      {service.badge && (
                        <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-cool-white/40 px-2.5 py-1 rounded-full border border-cool-white/10 bg-cool-white/5">
                          {service.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="mt-5 font-display font-bold text-xl text-cool-white group-hover:text-nexera-cyan transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-cool-white/50 font-body text-sm leading-relaxed max-w-sm">
                      {service.desc}
                    </p>
                  </div>
                  <span className="inline-block mt-6 font-mono text-[11px] tracking-wider text-cool-white/50">
                    {service.price}
                  </span>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.4}>
            <div className="mt-14 text-center">
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-nexera-violet/30 text-cool-white/80 font-semibold text-sm tracking-wide hover:bg-nexera-violet/10 hover:border-nexera-violet/50 hover:text-cool-white hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nexera-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-ink-space"
              >
                View all services
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">→</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── WHY ─── */}
      <section aria-labelledby="why-heading" className="relative py-28 md:py-36 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="space-y-12">
                <div>
                  <span className="font-display font-bold text-[clamp(3.5rem,8vw,6rem)] text-nexera-cyan leading-none block">
                    <AnimatedCount value="3" suffix="x" />
                  </span>
                  <p className="mt-2 font-body text-cool-white/60 text-sm leading-relaxed">
                    Faster delivery using AI-powered development tools and workflows.
                  </p>
                </div>
                <div>
                  <span className="font-display font-bold text-[clamp(3.5rem,8vw,6rem)] text-nexera-violet leading-none block">
                    <AnimatedCount value="100" suffix="%" />
                  </span>
                  <p className="mt-2 font-body text-cool-white/60 text-sm leading-relaxed">
                    Custom — no templates. Every project is built from scratch for your needs.
                  </p>
                </div>
                <div>
                  <span className="font-display font-bold text-[clamp(2.5rem,5vw,4rem)] text-cool-white leading-none block">
                    <AnimatedCount value="AI-first" />
                  </span>
                  <p className="mt-2 font-body text-cool-white/60 text-sm leading-relaxed">
                    Every project uses cutting-edge AI stack for maximum efficiency.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div>
                <h2 id="why-heading" className="font-display font-bold text-[clamp(1.8rem,4vw,3rem)] text-cool-white leading-tight text-balance">
                  Why KritRaj Nexera?
                </h2>
                <p className="mt-6 text-cool-white/50 font-body text-sm leading-relaxed text-pretty">
                  We combine AI acceleration with human craftsmanship to deliver premium digital
                  products at unprecedented speed. Every line of code is intentional, every design
                  decision serves your business goals.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
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
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-nexera-violet text-cool-white font-semibold text-sm tracking-wide hover:bg-nexera-violet/80 hover:scale-[1.04] active:scale-[0.96] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nexera-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-ink-space hover:shadow-[0_0_40px_rgba(91,47,212,0.4)]"
              >
                Start a project
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">→</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
