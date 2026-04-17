"use client";

import { useState, useEffect, useRef } from "react";

type NavChild = { label: string; href: string };
type NavLink = { label: string; href?: string; children?: NavChild[] };

const links: NavLink[] = [
  {
    label: "Tentang Kami",
    children: [
      { label: "Visi & Misi", href: "/about/visi-misi" },
    ],
  },
  { label: "Program",  href: "#" },
  { label: "Berita",   href: "/news" },
  { label: "Galeri",   href: "#" },
];

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Tutup dropdown kalau klik di luar
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-40 w-full bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "shadow-none"
      }`}
    >
      {/* ── Desktop bar ── */}
      <div
        ref={dropdownRef}
        className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-14 h-16 flex items-center justify-between"
      >
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
          {links.map((link) =>
            link.children ? (
              /* ── Link dengan dropdown ── */
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  className="relative flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-[#213F9A] transition-colors duration-200 group"
                >
                  {link.label}
                  {/* Chevron */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${
                      openDropdown === link.label ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                  {/* Underline slide-in */}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#213F9A] rounded-full group-hover:w-full transition-all duration-300" />
                </button>

                {/* pt-2 fills the gap so hover stays active when cursor moves toward menu */}
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 w-52 transition-all duration-200 ease-out origin-top ${
                    openDropdown === link.label
                      ? "opacity-100 scale-y-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 scale-y-95 -translate-y-1 pointer-events-none"
                  }`}
                >
                  {/* Arrow — outside overflow-hidden so it renders correctly */}
                  <div className="flex justify-center -mb-px">
                    <div className="w-3 h-3 bg-white border-l border-t border-gray-100 rotate-45 shadow-[-1px_-1px_0_0_#f3f4f6]" />
                  </div>
                  {/* Menu box */}
                  <div className="bg-white rounded-xl border border-gray-100 shadow-lg py-1 overflow-hidden">
                    {link.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        onClick={() => setOpenDropdown(null)}
                        className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-gray-600 hover:text-[#213F9A] hover:bg-[#213F9A]/5 transition-colors duration-150"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#02A6E0] flex-shrink-0" />
                        {child.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              /* ── Link biasa ── */
              <a
                key={link.label}
                href={link.href}
                className="relative text-sm font-medium text-gray-600 hover:text-[#213F9A] transition-colors duration-200 group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#213F9A] rounded-full group-hover:w-full transition-all duration-300" />
              </a>
            )
          )}

          <a
            href="#"
            className="py-2 px-5 bg-[#213F9A] hover:bg-[#1a3280] text-white text-sm font-semibold rounded-full shadow-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-200"
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
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-gray-100 px-5 py-3 flex flex-col">
          {links.map((link) =>
            link.children ? (
              <div key={link.label}>
                <p className="py-3 text-sm font-semibold text-gray-700 border-b border-gray-100">
                  {link.label}
                </p>
                {link.children.map((child) => (
                  <a
                    key={child.label}
                    href={child.href}
                    onClick={() => setMobileOpen(false)}
                    className="pl-4 py-2.5 text-sm text-gray-500 hover:text-[#213F9A] border-b border-gray-50 last:border-b-0 transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#02A6E0]/50" />
                    {child.label}
                  </a>
                ))}
              </div>
            ) : (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 text-sm font-medium text-gray-600 hover:text-[#213F9A] border-b border-gray-100 last:border-b-0 transition-colors duration-200"
              >
                {link.label}
              </a>
            )
          )}
          <a
            href="#"
            onClick={() => setMobileOpen(false)}
            className="mt-4 mb-1 py-2.5 bg-[#213F9A] hover:bg-[#1a3280] text-white text-sm font-semibold rounded-full text-center transition-colors duration-200"
          >
            Donasi
          </a>
        </div>
      </div>
    </nav>
  );
}
