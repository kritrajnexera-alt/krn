"use client";

import { useRef, useState, useEffect } from "react";
import ScrollReveal from "./ScrollReveal";

function CountUp({ from, to, inView }: { from: number; to: number; inView: boolean }) {
  const [count, setCount] = useState(from);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;

    const duration = 1500;
    const steps = 20;
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

function AnimatedCount({ value, suffix = "" }: { value: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "-80px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const numValue = parseInt(value.replace(/[^0-9]/g, ""));
  const isNumeric = !isNaN(numValue);

  return (
    <span ref={ref} className="inline-block">
      <span
        className={`inline-block transition-all duration-700 ease-out-soft ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        {isNumeric ? <CountUp from={0} to={numValue} inView={inView} /> : value}
      </span>
      {suffix && (
        <span
          className={`inline-block transition-all duration-400 ease-out-soft ${
            inView ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "0.6s" }}
        >
          {suffix}
        </span>
      )}
    </span>
  );
}

export default function StatsSection() {
  return (
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
  );
}
