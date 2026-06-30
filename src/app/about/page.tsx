"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { SiNextdotjs, SiTailwindcss, SiFramer, SiTypescript, SiSupabase, SiVercel, SiAnthropic, SiN8N } from "react-icons/si";

const stackCategories = [
  {
    name: "Frontend & Design",
    tools: [
      { name: "Next.js", icon: <SiNextdotjs size={20} />, label: "React framework" },
      { name: "Tailwind CSS", icon: <SiTailwindcss size={20} />, label: "Utility-first CSS" },
      { name: "Framer Motion", icon: <SiFramer size={20} />, label: "Animation library" },
      { name: "TypeScript", icon: <SiTypescript size={20} />, label: "Type-safe JS" },
    ],
  },
  {
    name: "Cloud Infrastructure",
    tools: [
      { name: "Supabase", icon: <SiSupabase size={20} />, label: "Open source backend" },
      { name: "Vercel", icon: <SiVercel size={20} />, label: "Deployment platform" },
    ],
  },
  {
    name: "AI & Automation",
    tools: [
      { name: "Claude AI", icon: <SiAnthropic size={20} />, label: "AI assistant" },
      { name: "n8n", icon: <SiN8N size={20} />, label: "Workflow automation" },
    ],
  },
];

export default function About() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section aria-labelledby="about-hero-heading" className="relative pt-36 pb-20 md:pb-28 overflow-hidden">
        <div className="dot-grid absolute inset-0 pointer-events-none opacity-50" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <ScrollReveal>
            <h1 id="about-hero-heading" className="font-display font-bold text-[clamp(2.5rem,6vw,4.5rem)] text-cool-white leading-tight max-w-3xl text-balance">
              The story behind<br />KritRaj Nexera
            </h1>
            <p className="mt-4 text-lg text-cool-white/50 font-body max-w-xl leading-relaxed text-pretty">
              A young entrepreneur&apos;s vision to bring world-class AI development to Indian businesses.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── FOUNDER STORY ─── */}
      <section aria-labelledby="founder-heading" className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <h2 id="founder-heading" className="font-display font-bold text-2xl md:text-3xl text-cool-white leading-tight text-balance">
                  KritRaj — building India&apos;s next AI agency
                </h2>
                <div className="mt-6 text-cool-white/50 font-body text-sm leading-relaxed space-y-4 text-pretty">
                  <p>
                    KritRaj Nexera was founded by a young, self-taught developer with a single
                    mission — bring world-class AI development to Indian businesses that mainstream
                    agencies overlook. The founder saw a gap — local businesses in cities like
                    Ankleshwar and Bareilly were being left behind in the digital revolution.
                  </p>
                  <p>
                    Using the latest AI tools and modern web technologies, KritRaj Nexera delivers
                    premium digital solutions at prices that make sense for Indian businesses. From
                    restaurant websites in Gujarat to school portals in Uttar Pradesh — every project
                    is crafted with the same care and quality.
                  </p>
                  <p>
                    We don&apos;t just build websites. We build digital foundations for businesses
                    ready to grow.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="relative p-8 rounded-2xl bg-card-bg border border-nexera-violet/10 hover:border-nexera-cyan/30 transition-[border-color] duration-500">
                <svg className="absolute top-4 left-4 w-8 h-8 text-nexera-violet/20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <blockquote className="relative z-10 pt-6">
                  <p className="font-display font-medium text-xl md:text-2xl text-cool-white leading-relaxed">
                    &ldquo;We don&apos;t just build websites. We build businesses.&rdquo;
                  </p>
                  <footer className="mt-6 flex items-center gap-3">
                    <img
                      src="/images/owner-photo.jpg"
                      alt="Rajnish Singh, founder of KritRaj Nexera"
                      className="w-10 h-10 rounded-full object-cover border border-nexera-cyan/20"
                      width={40}
                      height={40}
                    />
                    <div>
                      <span className="font-display font-semibold text-sm text-cool-white block">Rajnish Singh</span>
                      <span className="font-mono text-[11px] text-cool-white/40">Founder, KritRaj Nexera</span>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── OUR STACK ─── */}
      <section aria-labelledby="stack-heading" className="relative py-24 md:py-32 overflow-hidden">
        <div className="dot-grid absolute inset-0 pointer-events-none opacity-50" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <ScrollReveal>
            <h2 id="stack-heading" className="font-display font-bold text-[clamp(1.8rem,4vw,3rem)] text-cool-white leading-tight text-balance">
              Our Stack
            </h2>
            <p className="mt-4 text-cool-white/50 font-body text-sm max-w-lg leading-relaxed text-pretty">
              Built with tools trusted by the world&apos;s best product teams.
            </p>
          </ScrollReveal>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-14">
            {stackCategories.map((category, ci) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: ci * 0.12, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="font-mono text-[11px] tracking-widest text-cool-white/40 uppercase block mb-6">
                  {category.name}
                </span>
                <div className="space-y-4">
                  {category.tools.map((tool, ti) => (
                    <motion.div
                      key={tool.name}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.4, delay: ci * 0.12 + ti * 0.06, ease: [0.16, 1, 0.3, 1] }}
                      className="group flex items-center gap-3 p-3 -mx-3 rounded-xl hover:bg-card-bg/60 hover:shadow-[0_0_30px_rgba(91,47,212,0.08)] hover:scale-[1.03] transition-all duration-300 ease-out-soft cursor-default"
                    >
                      <span className="w-10 h-10 rounded-lg bg-surface-mid border border-nexera-violet/10 flex items-center justify-center text-cool-white/60 group-hover:text-nexera-cyan transition-colors duration-300 flex-shrink-0">
                        {tool.icon}
                      </span>
                      <div className="min-w-0">
                        <span className="font-display font-semibold text-sm text-cool-white group-hover:text-nexera-cyan transition-colors duration-300 block leading-tight">
                          {tool.name}
                        </span>
                        <span className="font-body text-[12px] text-cool-white/40 leading-tight">
                          {tool.label}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OWNER DETAILS ─── */}
      <section aria-label="Business owner details" className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-md mx-auto">
            <ScrollReveal>
              <div className="p-8 rounded-2xl bg-ink-space border border-nexera-violet/10 text-center">
                <span className="font-mono text-[10px] tracking-wider text-cool-white/40 uppercase">Business Owner Details</span>
                <div className="mt-6 flex justify-center">
                  <div className="w-36 h-36 md:w-44 md:h-44 rounded-full border-2 border-nexera-violet/40 overflow-hidden">
                    <img
                      src="/images/owner-photo.jpg"
                      alt="Rajnish Singh, Owner & Founder of KritRaj Nexera"
                      className="w-full h-full object-cover"
                      width={176}
                      height={176}
                    />
                  </div>
                </div>
                <h3 className="mt-5 font-display font-semibold text-lg text-cool-white">Rajnish Singh</h3>
                <p className="mt-1 font-mono text-[12px] text-cool-white/40">Owner &amp; Founder, KritRaj Nexera</p>
                <p className="mt-4 font-body text-[13px] text-cool-white/50 leading-relaxed max-w-xs mx-auto">
                  Operating KritRaj Nexera as a registered business, building AI-powered digital solutions for Indian businesses.
                </p>
                <p className="mt-3 font-body text-[12px] text-cool-white/40">
                  Based in Puranpur, Pilibhit — Uttar Pradesh 262122
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
