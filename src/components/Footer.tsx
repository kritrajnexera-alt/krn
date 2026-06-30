import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <Link
              href="/"
              className="inline-flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nexera-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded"
            >
              <Image
                src="/Screenshot_2026-06-30_at_9.11.31_AM-removebg-preview.png"
                alt="KritRaj Nexera"
                width={130}
                height={36}
                className="h-8 w-auto object-contain transition-all duration-300 group-hover:scale-105"
              />
              <span className="font-display font-bold text-lg tracking-tight text-gray-800 group-hover:text-nexera-violet transition-colors duration-300">
                KritRaj Nexera
              </span>
            </Link>
            <p className="mt-4 text-gray-500 font-body text-sm max-w-md leading-relaxed">
              AI-powered web development & automation agency. Building the next generation of digital experiences for
              Indian businesses.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm text-gray-700 mb-4 tracking-wider uppercase">
              Pages
            </h4>
            <ul className="space-y-2.5">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="relative text-gray-400 hover:text-nexera-cyan text-sm transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nexera-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-nexera-cyan after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm text-gray-700 mb-4 tracking-wider uppercase">
              Reach Us
            </h4>
            <ul className="space-y-2.5 text-gray-400 font-body text-sm">
              <li className="hover:text-gray-600 transition-colors duration-300">Puranpur, Pilibhit, Uttar Pradesh</li>
              <li className="pt-2">
                <a
                  href="https://wa.me/919520689539"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat on WhatsApp (opens in new tab)"
                  className="relative text-gray-400 hover:text-nexera-cyan transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nexera-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-nexera-cyan after:transition-all after:duration-300 hover:after:w-full"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="mailto:kritrajnexera@gmail.com"
                  className="relative text-gray-400 hover:text-nexera-cyan transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nexera-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-nexera-cyan after:transition-all after:duration-300 hover:after:w-full"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-400 text-xs font-body">
          <p>&copy; {new Date().getFullYear()} KritRaj Nexera. All rights reserved.</p>
          <p className="font-mono text-[11px] tracking-wider">
            Build the Next. Now.
          </p>
        </div>
      </div>
    </footer>
  );
}
