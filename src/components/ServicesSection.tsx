"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

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

export default function ServicesSection() {
  return (
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
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-nexera-violet/30 text-cool-white/80 font-semibold text-sm tracking-wide hover:bg-nexera-violet/10 hover:border-nexera-violet/50 hover:text-cool-white hover:scale-[1.03] active:scale-[0.97] transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nexera-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-ink-space"
            >
              View all services
              <span className="inline-block transition-transform duration-150 group-hover:translate-x-1" aria-hidden="true">→</span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
