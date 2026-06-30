import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const servicesData = [
  {
    title: "Website Builds",
    tagline: "Premium Next.js websites. Fast, responsive, conversion-ready.",
    includes: [
      "Custom Next.js development with Tailwind CSS",
      "Responsive, mobile-first design",
      "SEO-optimized architecture",
      "Framer Motion animations",
      "CMS integration (Sanity / Supabase)",
      "Vercel hosting setup",
      "Performance optimization (Lighthouse 95+)",
      "1 month free maintenance",
    ],
    timeline: "5–10 days",
    price: "Starting ₹2,999",
    gradient: "from-nexera-violet/20 to-transparent",
    borderColor: "border-nexera-violet/20",
  },
  {
    title: "Workflow Automation",
    tagline: "n8n-powered automations. Save hours every week.",
    includes: [
      "n8n workflow design & development",
      "CRM & ERP integration",
      "Email & SMS automation",
      "Data sync between platforms",
      "Invoice & billing automation",
      "Lead capture & follow-up sequences",
      "Dashboard & reporting setup",
      "Ongoing support available",
    ],
    timeline: "3–7 days",
    price: "Custom pricing",
    gradient: "from-nexera-cyan/20 to-transparent",
    borderColor: "border-nexera-cyan/20",
  },
  {
    title: "AI Chatbots — KritBot",
    tagline: "White-label chatbot for your business.",
    comingSoon: true,
    includes: [
      "Custom AI chatbot trained on your data",
      "WhatsApp & website integration",
      "Lead qualification & capture",
      "24/7 automated customer support",
      "Multilingual support (Hindi, English, Gujarati)",
      "Analytics dashboard",
      "White-label — your brand, your domain",
      "Monthly updates & improvements",
    ],
    timeline: "3–5 days",
    price: "Starting ₹999/month",
    gradient: "from-nexera-violet/20 to-transparent",
    borderColor: "border-nexera-violet/20",
  },
  {
    title: "SaaS Development",
    tagline: "Custom software built with AI. From idea to launch.",
    comingSoon: true,
    includes: [
      "Full-stack SaaS development (Next.js / Node.js)",
      "Database design & API development",
      "Authentication & authorization",
      "Payment gateway integration",
      "Admin dashboard & analytics",
      "AI feature integration (Claude, GPT)",
      "Scalable cloud infrastructure",
      "Post-launch support & maintenance",
    ],
    timeline: "2–6 weeks",
    price: "Custom pricing",
    gradient: "from-nexera-cyan/20 to-transparent",
    borderColor: "border-nexera-cyan/20",
  },
];

export default function Services() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section aria-labelledby="services-hero-heading" className="relative pt-36 pb-20 md:pb-28 overflow-hidden">
        <div className="dot-grid absolute inset-0 pointer-events-none opacity-50" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <ScrollReveal>
            <h1 id="services-hero-heading" className="font-display font-bold text-[clamp(2.5rem,6vw,4.5rem)] text-cool-white leading-tight max-w-3xl text-balance">
              Services
            </h1>
            <p className="mt-4 text-lg text-cool-white/50 font-body max-w-xl leading-relaxed text-pretty">
              Websites, automation & more — everything your business needs to grow online.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── SERVICES DETAIL ─── */}
      <section aria-label="Service details" className="pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-8">
            {servicesData.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.1}>
                <div
                  className={`relative overflow-hidden rounded-2xl bg-card-bg border ${service.borderColor} transition-[border-color,box-shadow] duration-500 p-8 md:p-12 ${
                    service.comingSoon
                      ? "opacity-60 hover:opacity-100 hover:border-nexera-cyan/30"
                      : "hover:border-nexera-cyan/30"
                  }`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} pointer-events-none`} aria-hidden="true" />
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 flex-wrap">
                          <h2 className="font-display font-bold text-2xl md:text-3xl text-cool-white">
                            {service.title}
                          </h2>
                          {service.comingSoon && (
                            <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-cool-white/40 px-2.5 py-1 rounded-full border border-cool-white/10 bg-cool-white/5">
                              Coming Soon
                            </span>
                          )}
                        </div>
                        <p className="mt-2 text-cool-white/50 font-body text-sm">
                          {service.tagline}
                        </p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <span className="font-mono text-[11px] text-cool-white/50 block">
                          Timeline: {service.timeline}
                        </span>
                        <span className="font-display font-bold text-lg text-nexera-cyan block mt-1">
                          {service.price}
                        </span>
                      </div>
                    </div>

                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.includes.map((item, j) => (
                        <div key={j} className="flex items-start gap-3">
                          <span className="text-nexera-cyan mt-0.5 flex-shrink-0" aria-hidden="true">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          </span>
                          <span className="font-body text-sm text-cool-white/60">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section aria-label="Get a quote" className="relative py-24 md:py-32 bg-gradient-to-br from-nexera-violet/10 via-transparent to-nexera-cyan/5">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="font-display font-bold text-[clamp(1.8rem,4vw,3rem)] text-cool-white text-balance">
              Need something custom?
            </h2>
            <p className="mt-4 text-cool-white/50 font-body text-sm max-w-md mx-auto leading-relaxed text-pretty">
              Every business is unique. Tell us what you need and we&apos;ll build it.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-nexera-violet text-cool-white font-semibold text-sm tracking-wide hover:bg-nexera-violet/80 transition-all duration-300 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nexera-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-ink-space hover:shadow-[0_0_40px_rgba(91,47,212,0.4)]"
              >
                Get a custom quote
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
