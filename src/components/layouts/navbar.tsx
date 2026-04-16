"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "Tentang Kami", href: "#" },
  { label: "Program",      href: "#" },
  { label: "Berita",       href: "/news" },
  { label: "Galeri",       href: "#" },
];

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false);
  const [mobileOpen,  setMobileOpen]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-40 w-full bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "shadow-none"
      }`}
    >
      {/* ── Desktop bar ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-14 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="flex-shrink-0">
          <img
            src="/icon/Teman Baik Logo.png"
            alt="Teman Baik Logo"
            width={95}
          />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative text-sm font-medium text-gray-600 hover:text-[#278dcd] transition-colors duration-200 group"
            >
              {link.label}
              {/* Underline slide-in */}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#278dcd] rounded-full group-hover:w-full transition-all duration-300" />
            </a>
          ))}

          <a
            href="#"
            className="py-2 px-5 bg-[#278dcd] hover:bg-[#1e7ab8] text-white text-sm font-semibold rounded-full shadow-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-200"
          >
            Donasi
          </a>
        </div>

        {/* Hamburger (mobile) */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          className="md:hidden flex flex-col justify-center items-center gap-[5px] w-9 h-9"
        >
          <span
            className={`h-0.5 w-6 bg-gray-700 rounded transition-all duration-300 origin-center ${
              mobileOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-gray-700 rounded transition-all duration-300 ${
              mobileOpen ? "opacity-0 scale-x-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-gray-700 rounded transition-all duration-300 origin-center ${
              mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </div>

      {/* ── Mobile dropdown ── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-gray-100 px-5 py-3 flex flex-col">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="py-3 text-sm font-medium text-gray-600 hover:text-[#278dcd] border-b border-gray-100 last:border-b-0 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#"
            onClick={() => setMobileOpen(false)}
            className="mt-4 mb-1 py-2.5 bg-[#278dcd] hover:bg-[#1e7ab8] text-white text-sm font-semibold rounded-full text-center transition-colors duration-200"
          >
            Donasi
          </a>
        </div>
      </div>
    </nav>
  );
}
