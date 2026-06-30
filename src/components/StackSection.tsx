"use client";

import { useRef, useState, useEffect } from "react";
import ScrollReveal from "./ScrollReveal";

function SiNextdotjs({ size }: { size: number }) {
  return <svg role="img" viewBox="0 0 24 24" width={size} height={size} fill="currentColor"><path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z"/></svg>;
}
function SiTailwindcss({ size }: { size: number }) {
  return <svg role="img" viewBox="0 0 24 24" width={size} height={size} fill="currentColor"><path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/></svg>;
}
function SiFramer({ size }: { size: number }) {
  return <svg role="img" viewBox="0 0 24 24" width={size} height={size} fill="currentColor"><path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z"/></svg>;
}
function SiTypescript({ size }: { size: number }) {
  return <svg role="img" viewBox="0 0 24 24" width={size} height={size} fill="currentColor"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/></svg>;
}
function SiSupabase({ size }: { size: number }) {
  return <svg role="img" viewBox="0 0 24 24" width={size} height={size} fill="currentColor"><path d="M11.9 1.036c-.015-.986-1.26-1.41-1.874-.637L.764 12.05C-.33 13.427.65 15.455 2.409 15.455h9.579l.113 7.51c.014.985 1.259 1.408 1.873.636l9.262-11.653c1.093-1.375.113-3.403-1.645-3.403h-9.642z"/></svg>;
}
function SiVercel({ size }: { size: number }) {
  return <svg role="img" viewBox="0 0 24 24" width={size} height={size} fill="currentColor"><path d="m12 1.608 12 20.784H0Z"/></svg>;
}
function SiAnthropic({ size }: { size: number }) {
  return <svg role="img" viewBox="0 0 24 24" width={size} height={size} fill="currentColor"><path d="M17.3041 3.541h-3.6718l6.696 16.918H24Zm-10.6082 0L0 20.459h3.7442l1.3693-3.5527h7.0052l1.3693 3.5528h3.7442L10.5363 3.5409Zm-.3712 10.2232 2.2914-5.9456 2.2914 5.9456Z"/></svg>;
}
function SiN8N({ size }: { size: number }) {
  return <svg role="img" viewBox="0 0 24 24" width={size} height={size} fill="currentColor"><path d="M21.4737 5.6842c-1.1772 0-2.1663.8051-2.4468 1.8947h-2.8955c-1.235 0-2.289.893-2.492 2.111l-.1038.623a1.263 1.263 0 0 1-1.246 1.0555H11.289c-.2805-1.0896-1.2696-1.8947-2.4468-1.8947s-2.1663.8051-2.4467 1.8947H4.973c-.2805-1.0896-1.2696-1.8947-2.4468-1.8947C1.1311 9.4737 0 10.6047 0 12s1.131 2.5263 2.5263 2.5263c1.1772 0 2.1663-.8051 2.4468-1.8947h1.4223c.2804 1.0896 1.2696 1.8947 2.4467 1.8947 1.1772 0 2.1663-.8051 2.4468-1.8947h1.0008a1.263 1.263 0 0 1 1.2459 1.0555l.1038.623c.203 1.218 1.257 2.111 2.492 2.111h.3692c.2804 1.0895 1.2696 1.8947 2.4468 1.8947 1.3952 0 2.5263-1.131 2.5263-2.5263s-1.131-2.5263-2.5263-2.5263c-1.1772 0-2.1664.805-2.4468 1.8947h-.3692a1.263 1.263 0 0 1-1.246-1.0555l-.1037-.623A2.52 2.52 0 0 0 13.9607 12a2.52 2.52 0 0 0 .821-1.4794l.1038-.623a1.263 1.263 0 0 1 1.2459-1.0555h2.8955c.2805 1.0896 1.2696 1.8947 2.4468 1.8947 1.3952 0 2.5263-1.131 2.5263-2.5263s-1.131-2.5263-2.5263-2.5263m0 1.2632a1.263 1.263 0 0 1 1.2631 1.2631 1.263 1.263 0 0 1-1.2631 1.2632 1.263 1.263 0 0 1-1.2632-1.2632 1.263 1.263 0 0 1 1.2632-1.2631M2.5263 10.7368A1.263 1.263 0 0 1 3.7895 12a1.263 1.263 0 0 1-1.2632 1.2632A1.263 1.263 0 0 1 1.2632 12a1.263 1.263 0 0 1 1.2631-1.2632m6.3158 0A1.263 1.263 0 0 1 10.1053 12a1.263 1.263 0 0 1-1.2632 1.2632A1.263 1.263 0 0 1 7.579 12a1.263 1.263 0 0 1 1.2632-1.2632m10.1053 3.7895a1.263 1.263 0 0 1 1.2631 1.2632 1.263 1.263 0 0 1-1.2631 1.2631 1.263 1.263 0 0 1-1.2632-1.2631 1.263 1.263 0 0 1 1.2632-1.2632"/></svg>;
}

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

function StackCategory({ category, index }: { category: typeof stackCategories[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
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

  return (
    <div ref={ref}>
      <div
        className={`transition-all duration-500 ease-out-soft ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
        style={{ transitionDelay: `${index * 0.12}s` }}
      >
        <span className="font-mono text-[11px] tracking-widest text-cool-white/40 uppercase block mb-6">
          {category.name}
        </span>
        <div className="space-y-4">
          {category.tools.map((tool, ti) => (
            <div
              key={tool.name}
              className={`transition-all duration-400 ease-out-soft ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
              style={{ transitionDelay: `${index * 0.12 + ti * 0.06}s` }}
            >
              <div className="group flex items-center gap-3 p-3 -mx-3 rounded-xl hover:bg-card-bg/60 hover:shadow-[0_0_30px_rgba(91,47,212,0.08)] hover:scale-[1.03] transition-all duration-300 ease-out-soft cursor-default">
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function StackSection() {
  return (
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
            <StackCategory key={category.name} category={category} index={ci} />
          ))}
        </div>
      </div>
    </section>
  );
}
