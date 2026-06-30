"use client";

import { useForm, ValidationError } from "@formspree/react";
import ScrollReveal from "@/components/ScrollReveal";

export default function Contact() {
  const [state, handleSubmit] = useForm("mrewakzj");

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
              <div className="p-8 md:p-10 rounded-2xl bg-card-bg border border-nexera-violet/10">
                <span className="font-mono text-[11px] tracking-widest text-cool-white/50 uppercase">Book a Call</span>
                <h3 className="mt-3 font-display font-bold text-xl text-cool-white">Schedule a Consultation</h3>
                <p className="mt-1.5 font-body text-sm text-cool-white/50 leading-relaxed max-w-sm">
                  Fill in the details and we&apos;ll get back to you within 2–4 hours.
                </p>

                {state.succeeded ? (
                  <p className="mt-8 text-center font-body text-sm text-nexera-cyan">
                    Booking request sent! We&apos;ll get back to you shortly.
                  </p>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                    <div>
                      <label htmlFor="name" className="font-mono text-[11px] tracking-wider text-cool-white/40 block mb-1.5">Name *</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-xl bg-surface-mid border border-nexera-violet/15 text-cool-white text-sm placeholder-cool-white/25 focus:outline-none focus:border-nexera-cyan/60 focus:shadow-[0_0_16px_rgba(0,200,224,0.06)] hover:border-nexera-violet/30 transition-all duration-300"
                      />
                      <ValidationError field="name" errors={state.errors} />
                    </div>

                    <div>
                      <label htmlFor="phone" className="font-mono text-[11px] tracking-wider text-cool-white/40 block mb-1.5">Phone *</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="+91 9XXXXXXXXX"
                        className="w-full px-4 py-3 rounded-xl bg-surface-mid border border-nexera-violet/15 text-cool-white text-sm placeholder-cool-white/25 focus:outline-none focus:border-nexera-cyan/60 focus:shadow-[0_0_16px_rgba(0,200,224,0.06)] hover:border-nexera-violet/30 transition-all duration-300"
                      />
                      <ValidationError field="phone" errors={state.errors} />
                    </div>

                    <div>
                      <label htmlFor="service" className="font-mono text-[11px] tracking-wider text-cool-white/40 block mb-1.5">Service / Project Type *</label>
                      <div className="relative">
                        <select
                          id="service"
                          name="service"
                          required
                          className="w-full px-4 py-3 rounded-xl bg-surface-mid border border-nexera-violet/15 text-cool-white text-sm appearance-none focus:outline-none focus:border-nexera-cyan/60 focus:shadow-[0_0_16px_rgba(0,200,224,0.06)] hover:border-nexera-violet/30 transition-all duration-300 cursor-pointer"
                        >
                          <option value="" disabled>Select a service</option>
                          <option value="Website Development">Website Development</option>
                          <option value="Workflow Automation">Workflow Automation</option>
                          <option value="AI Chatbot">AI Chatbot</option>
                          <option value="SaaS Development">SaaS Development</option>
                          <option value="Other / Not Sure">Other / Not Sure</option>
                        </select>
                        <svg className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-cool-white/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </div>
                      <ValidationError field="service" errors={state.errors} />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="date" className="font-mono text-[11px] tracking-wider text-cool-white/40 block mb-1.5">Preferred Date *</label>
                        <input
                          id="date"
                          name="date"
                          type="date"
                          required
                          className="w-full px-4 py-3 rounded-xl bg-surface-mid border border-nexera-violet/15 text-cool-white text-sm focus:outline-none focus:border-nexera-cyan/60 focus:shadow-[0_0_16px_rgba(0,200,224,0.06)] hover:border-nexera-violet/30 transition-all duration-300 [color-scheme:dark]"
                        />
                        <ValidationError field="date" errors={state.errors} />
                      </div>
                      <div>
                        <label htmlFor="time" className="font-mono text-[11px] tracking-wider text-cool-white/40 block mb-1.5">Preferred Time *</label>
                        <div className="relative">
                          <select
                            id="time"
                            name="time"
                            required
                            className="w-full px-4 py-3 rounded-xl bg-surface-mid border border-nexera-violet/15 text-cool-white text-sm appearance-none focus:outline-none focus:border-nexera-cyan/60 focus:shadow-[0_0_16px_rgba(0,200,224,0.06)] hover:border-nexera-violet/30 transition-all duration-300 cursor-pointer"
                          >
                            <option value="" disabled>Select</option>
                            <option value="Morning (9AM–12PM)">Morning (9AM–12PM)</option>
                            <option value="Afternoon (12PM–4PM)">Afternoon (12PM–4PM)</option>
                            <option value="Evening (4PM–8PM)">Evening (4PM–8PM)</option>
                          </select>
                          <svg className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-cool-white/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </div>
                        <ValidationError field="time" errors={state.errors} />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="font-mono text-[11px] tracking-wider text-cool-white/40 block mb-1.5">Message <span className="text-cool-white/20">(optional)</span></label>
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        placeholder="Tell us about your project..."
                        className="w-full px-4 py-3 rounded-xl bg-surface-mid border border-nexera-violet/15 text-cool-white text-sm placeholder-cool-white/25 focus:outline-none focus:border-nexera-cyan/60 focus:shadow-[0_0_16px_rgba(0,200,224,0.06)] hover:border-nexera-violet/30 transition-all duration-300 resize-none"
                      />
                      <ValidationError field="message" errors={state.errors} />
                    </div>

                    <button
                      type="submit"
                      disabled={state.submitting}
                      className="group relative w-full py-4 rounded-full bg-nexera-violet text-cool-white font-semibold text-sm tracking-wide hover:bg-nexera-violet/80 transition-all duration-300 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nexera-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-ink-space disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer overflow-hidden"
                    >
                      <span className="relative z-10">{state.submitting ? "Sending..." : "Send Booking Request"}</span>
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-cool-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" aria-hidden="true" />
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
