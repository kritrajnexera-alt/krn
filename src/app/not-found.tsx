import Link from "next/link";

export default function NotFound() {
  return (
    <section aria-labelledby="not-found-heading" className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden">
      <div className="dot-grid absolute inset-0 pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        <span className="font-display font-bold text-[clamp(6rem,20vw,12rem)] text-nexera-violet/20 leading-none select-none" aria-hidden="true">
          404
        </span>
        <h1 id="not-found-heading" className="font-display font-bold text-[clamp(2rem,5vw,3.5rem)] text-cool-white leading-tight -mt-6 text-balance">
          Page not found
        </h1>
        <p className="mt-4 text-lg text-cool-white/50 font-body max-w-md mx-auto leading-relaxed text-pretty">
          This page doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
        </p>
        <div className="mt-10">
          <Link
            href="/"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-nexera-violet text-cool-white font-semibold text-sm tracking-wide hover:bg-nexera-violet/80 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nexera-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-ink-space hover:shadow-[0_0_40px_rgba(91,47,212,0.4)]"
          >
            Back to home
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
