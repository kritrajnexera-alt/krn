import ScrollReveal from "@/components/ScrollReveal";
import BookingFormWrapper from "@/components/BookingFormWrapper";

export default function Contact() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section aria-labelledby="contact-hero-heading" className="relative pt-36 pb-20 md:pb-28 overflow-hidden">
        <div className="dot-grid absolute inset-0 pointer-events-none opacity-50" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <ScrollReveal>
            <h1 id="contact-hero-heading" className="font-display font-bold text-[clamp(2.5rem,6vw,4.5rem)] text-cool-white leading-tight max-w-3xl text-balance">
              Let&apos;s build something great.
            </h1>
            <p className="mt-4 text-lg text-cool-white/50 font-body max-w-xl leading-relaxed text-pretty">
              Free consultation, no pressure. Tell us about your project and we&apos;ll take it from there.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── CONTACT CARDS ─── */}
      <section aria-label="Contact information" className="pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <ScrollReveal>
                <div className="p-8 rounded-2xl bg-card-bg border border-nexera-violet/10 hover:border-nexera-cyan/30 transition-[border-color] duration-500">
                  <span className="font-mono text-[11px] tracking-wider text-cool-white/50 uppercase">Reach Us</span>
                  <div className="mt-6 space-y-6">
                    <a
                      href="https://wa.me/919520689539"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Chat on WhatsApp (opens in new tab)"
                      className="group flex items-center gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nexera-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-ink-space rounded"
                    >
                      <div className="w-12 h-12 rounded-xl bg-nexera-violet/10 flex items-center justify-center flex-shrink-0 group-hover:bg-nexera-violet/20 transition-colors">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00C8E0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-mono text-[11px] text-cool-white/40">WhatsApp</span>
                        <p className="font-body text-sm text-cool-white group-hover:text-nexera-cyan transition-colors">
                          +91 95206 89539
                        </p>
                      </div>
                    </a>

                    <a
                      href="mailto:kritrajnexera@gmail.com"
                      className="group flex items-center gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nexera-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-ink-space rounded"
                    >
                      <div className="w-12 h-12 rounded-xl bg-nexera-violet/10 flex items-center justify-center flex-shrink-0 group-hover:bg-nexera-violet/20 transition-colors">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00C8E0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <rect width="20" height="16" x="2" y="4" rx="2" />
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-mono text-[11px] text-cool-white/40">Email</span>
                        <p className="font-body text-sm text-cool-white group-hover:text-nexera-cyan transition-colors">
                          kritrajnexera@gmail.com
                        </p>
                      </div>
                    </a>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-nexera-violet/10 flex items-center justify-center flex-shrink-0">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00C8E0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-mono text-[11px] text-cool-white/40">Location</span>
                        <p className="font-body text-sm text-cool-white">
                          Puranpur, Pilibhit,<br />Uttar Pradesh 262122
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <div className="p-8 rounded-2xl bg-card-bg border border-nexera-violet/10 hover:border-nexera-cyan/30 transition-[border-color] duration-500">
                  <span className="font-mono text-[11px] tracking-wider text-cool-white/50 uppercase">Quick Response</span>
                  <p className="mt-3 font-body text-sm text-cool-white/50 leading-relaxed">
                    We typically respond within 2–4 hours on WhatsApp. For urgent inquiries, 
                    reach out directly via chat.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Booking Form */}
            <ScrollReveal delay={0.2}>
              <BookingFormWrapper />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
