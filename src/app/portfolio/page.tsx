"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const projects = [
  {
    title: "Friends & Fries Café",
    type: "Restaurant Website",
    location: "Ankleshwar, Gujarat",
    description: "Complete digital presence with online menu, table booking & SEO optimization for a growing café chain.",
    tags: ["Next.js", "Tailwind", "SEO"],
  },
  {
    title: "La Festiva Restaurant",
    type: "Restaurant Website",
    location: "Ankleshwar, Gujarat",
    description: "Premium dining website with reservation system, gallery & performance optimization.",
    tags: ["Next.js", "Framer Motion", "CMS"],
  },
  {
    title: "Thanmurti International School",
    type: "Education Website",
    location: "Puranpur, Uttar Pradesh",
    description: "Modern school website with admissions portal, event calendar & parent communication system.",
    tags: ["Next.js", "Supabase", "Auth"],
  },
  {
    title: "KritBot — AI Chatbot",
    type: "AI Product",
    location: "SaaS",
    description: "White-label AI chatbot platform trained on business data. WhatsApp & website ready.",
    tags: ["AI", "WhatsApp API", "n8n"],
  },
  {
    title: "LocalBiz Automation Suite",
    type: "Workflow Automation",
    location: "Gujarat",
    description: "n8n-powered automation connecting CRM, billing, SMS & email into a single workflow.",
    tags: ["n8n", "CRM", "Automation"],
  },
  {
    title: "E-Commerce Analytics Dashboard",
    type: "SaaS Dashboard",
    location: "Bareilly, UP",
    description: "Real-time analytics dashboard with AI-powered insights for e-commerce businesses.",
    tags: ["Next.js", "AI", "Analytics"],
  },
];

export default function Portfolio() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section aria-labelledby="portfolio-hero-heading" className="relative pt-36 pb-20 md:pb-28 overflow-hidden">
        <div className="dot-grid absolute inset-0 pointer-events-none opacity-50" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <ScrollReveal>
            <h1 id="portfolio-hero-heading" className="font-display font-bold text-[clamp(2.5rem,6vw,4.5rem)] text-cool-white leading-tight max-w-3xl text-balance">
              Portfolio
            </h1>
            <p className="mt-4 text-lg text-cool-white/50 font-body max-w-xl leading-relaxed text-pretty">
              Real projects for real businesses. Every site, bot, and workflow we ship is custom-built.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── PROJECTS GRID ─── */}
      <section aria-label="Project cards" className="pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <ScrollReveal key={project.title} delay={i * 0.08}>
                <div className="group relative p-8 rounded-2xl bg-card-bg border border-nexera-violet/10 hover:border-nexera-cyan/30 transition-[border-color,box-shadow] duration-500 min-h-[280px] flex flex-col overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-nexera-cyan/5 to-nexera-violet/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />
                  <div className="relative z-10 flex flex-col flex-1">
                    <div className="flex-1">
                      <span className="font-mono text-[11px] tracking-wider text-cool-white/50 uppercase">
                        {project.type}
                      </span>
                      <h3 className="mt-2 font-display font-bold text-lg text-cool-white group-hover:text-nexera-cyan transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-cool-white/50 font-body text-xs leading-relaxed">
                        {project.description}
                      </p>
                      <p className="mt-3 font-mono text-[11px] text-cool-white/30 tracking-wide">
                        {project.location}
                      </p>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-full bg-nexera-violet/10 text-cool-white/50 font-mono text-[10px] tracking-wider"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <span className="inline-block mt-4 text-xs font-mono tracking-wider text-nexera-cyan/70 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                      View project →
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section aria-label="Start a project CTA" className="relative py-24 md:py-32 bg-gradient-to-br from-nexera-violet/10 via-transparent to-nexera-cyan/5">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="font-display font-bold text-[clamp(1.8rem,4vw,3rem)] text-cool-white text-balance">
              Want your project here?
            </h2>
            <p className="mt-4 text-cool-white/50 font-body text-sm max-w-md mx-auto leading-relaxed text-pretty">
              Let&apos;s build something people will remember.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-nexera-violet text-cool-white font-semibold text-sm tracking-wide hover:bg-nexera-violet/80 transition-all duration-300 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nexera-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-ink-space hover:shadow-[0_0_40px_rgba(91,47,212,0.4)]"
              >
                Start a project
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
