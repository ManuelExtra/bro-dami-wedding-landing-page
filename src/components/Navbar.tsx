"use client";

import { useState, useEffect } from "react";
import { Heart, Menu, X, Sparkles } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("invitation");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ["invitation", "iv-card", "details", "directions", "colours", "rsvp", "gifts"];
      const current = sections.find((sec) => {
        const el = document.getElementById(sec);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 180 && rect.bottom >= 180;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Invitation", href: "#invitation" },
    { name: "IV Card", href: "#iv-card" },
    { name: "Details", href: "#details" },
    { name: "Directions", href: "#directions" },
    { name: "Colour Code", href: "#colours" },
    { name: "RSVP", href: "#rsvp" },
    { name: "Gifts & Account", href: "#gifts" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 sm:py-4 px-3 sm:px-6">
      <div
        className={`max-w-7xl mx-auto transition-all duration-300 rounded-2xl sm:rounded-full px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between ${scrolled
            ? "floating-nav shadow-lg shadow-[#1B4332]/10 border border-[#2D6A4F]/25 bg-[#FAF8F5]/95"
            : "bg-[#FAF8F5]/85 backdrop-blur-md border border-[#2D6A4F]/10 shadow-xs"
          }`}
      >
        {/* Monogram Brand */}
        <a href="#invitation" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-full border-2 border-[#D96B27] bg-[#1B4332] text-[#FAF8F5] flex items-center justify-center shadow-md group-hover:bg-[#2D6A4F] transition-all">
            <span className="font-script font-bold text-xl leading-none text-[#FAF8F5] group-hover:text-[#D96B27]">
              O&amp;O
            </span>
            <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-[#D96B27] border-2 border-[#FAF8F5] flex items-center justify-center">
              <Heart className="w-2 h-2 text-white fill-white" />
            </span>
          </div>

          <div className="flex flex-col">
            <span className="font-script text-2xl font-bold text-[#1B4332] leading-none group-hover:text-[#D96B27] transition-colors">
              Ololade &amp; Oluwadamilola
            </span>
            <span className="text-[10px] text-[#4A2511] font-bold tracking-widest uppercase flex items-center gap-1.5 pt-0.5">
              <span>Nov 21, 2026</span>
              <span className="w-1 h-1 rounded-full bg-[#D96B27]" />
              <span>Epe, Lagos</span>
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs uppercase tracking-wider font-bold transition-all py-1.5 px-3 rounded-full relative ${isActive
                    ? "text-[#D96B27] bg-[#1B4332]/10"
                    : "text-[#1B4332] hover:text-[#D96B27] hover:bg-[#1B4332]/5"
                  }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#D96B27] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* RSVP Button & Mobile Menu Trigger */}
        <div className="flex items-center gap-2.5">
          <a
            href="#rsvp"
            className="inline-flex items-center gap-1.5 px-4.5 py-2 rounded-full font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-[#1B4332] to-[#2D6A4F] text-[#FAF8F5] hover:opacity-95 shadow-sm transition-all transform hover:-translate-y-0.5"
          >

            <span>RSVP</span>
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-[#1B4332] hover:bg-[#1B4332]/10 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 bg-[#FAF8F5] border border-[#2D6A4F]/20 rounded-2xl p-5 space-y-3 shadow-2xl animate-in fade-in duration-200">
          <div className="flex items-center justify-between border-b border-[#1B4332]/10 pb-3">
            <span className="font-script text-xl font-bold text-[#1B4332]">
              Ololade &amp; Oluwadamilola
            </span>
            <span className="text-[10px] uppercase font-bold text-[#D96B27] bg-[#D96B27]/10 px-2.5 py-0.5 rounded-full">
              21st Nov 2026
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-bold uppercase tracking-wider text-[#1B4332] hover:text-[#D96B27] p-2.5 rounded-xl bg-white border border-slate-200 text-center hover:bg-[#1B4332]/5 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <a
            href="#rsvp"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 w-full text-center py-3 rounded-xl font-bold uppercase text-xs tracking-widest bg-[#1B4332] text-white shadow-md block"
          >
            Respond To RSVP
          </a>
        </div>
      )}
    </header>
  );
}
