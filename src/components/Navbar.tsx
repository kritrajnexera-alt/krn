"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-black/5 shadow-sm"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nexera-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded"
          >
            <div className="relative flex-shrink-0 nav-logo">
              <Image
                src="/Screenshot_2026-06-30_at_9.11.31_AM-removebg-preview.png"
                alt="KritRaj Nexera"
                width={110}
                height={32}
                className="h-7 w-auto object-contain transition-transform duration-300 hover:scale-105"
                priority
              />
            </div>
            <span className="font-display font-bold text-base tracking-tight text-gray-900 hidden sm:inline nav-brand">
              KritRaj Nexera
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative font-body text-sm font-medium tracking-wide transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nexera-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded ${
                    isActive ? "text-nexera-cyan" : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-nexera-cyan rounded-full nav-underline-active" />
                  )}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-full bg-nexera-violet text-white text-sm font-semibold hover:bg-nexera-violet/80 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nexera-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-white hover:shadow-[0_0_30px_rgba(91,47,212,0.3)] active:scale-[0.97] inline-block"
            >
              Get Started
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative w-6 h-5 flex flex-col justify-center items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nexera-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <span
              className={`block w-6 h-[2px] bg-gray-800 rounded-full origin-center transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-[3.5px]" : ""
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-gray-800 rounded-full transition-all duration-300 mt-[5px] ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-gray-800 rounded-full origin-center transition-all duration-300 mt-[5px] ${
                mobileOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-white/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 transition-all duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        {links.map((link) => (
          <div
            key={link.href}
            className={`transition-all duration-500 ease-out ${
              mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: links.indexOf(link) * 80 + "ms" }}
          >
            <Link
              href={link.href}
              className={`font-display text-3xl font-bold tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nexera-cyan focus-visible:ring-offset-4 focus-visible:ring-offset-white rounded ${
                pathname === link.href ? "text-nexera-cyan" : "text-gray-700 hover:text-gray-900"
              } transition-colors`}
            >
              {link.label}
            </Link>
          </div>
        ))}
        <div
          className={`transition-all duration-500 ease-out delay-[320ms] ${
            mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Link
            href="/contact"
            className="px-8 py-3 rounded-full bg-nexera-violet text-white font-semibold text-lg hover:bg-nexera-violet/80 transition-all active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nexera-cyan focus-visible:ring-offset-4 focus-visible:ring-offset-white"
          >
            Get Started
          </Link>
        </div>
      </div>
    </>
  );
}
