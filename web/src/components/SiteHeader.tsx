"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";

const nav = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#writing", label: "Writing" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200/80 bg-white/90 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          className={`font-serif text-lg font-semibold tracking-tight transition-colors ${
            scrolled ? "text-slate-900" : "text-white"
          }`}
        >
          {site.name.split(" ")[0]}
        </a>
        <nav className="hidden items-center gap-8 sm:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-teal-600 ${
                scrolled ? "text-slate-600" : "text-slate-200"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href={`mailto:${site.email}`}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-colors sm:hidden ${
            scrolled
              ? "bg-teal-700 text-white hover:bg-teal-800"
              : "bg-white/15 text-white hover:bg-white/25"
          }`}
        >
          Email
        </a>
        <a
          href={`mailto:${site.email}`}
          className={`hidden rounded-full px-4 py-2.5 text-sm font-medium transition-colors sm:inline-flex ${
            scrolled
              ? "bg-teal-700 text-white hover:bg-teal-800"
              : "bg-white text-slate-900 hover:bg-slate-100"
          }`}
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}
