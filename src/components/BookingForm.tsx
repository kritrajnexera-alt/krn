"use client";

import { useForm, ValidationError } from "@formspree/react";

export default function BookingForm() {
  const [state, handleSubmit] = useForm("mrewakzj");

  return (
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
  );
}
