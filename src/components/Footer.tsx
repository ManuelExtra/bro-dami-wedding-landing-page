"use client";

import { Heart, Sparkles, MapPin, ShieldAlert } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1B4332] text-[#FAF8F5] pt-16 pb-12 px-4 border-t-4 border-[#D96B27]">
      <div className="max-w-5xl mx-auto space-y-10 text-center">
        {/* Monogram & Names */}
        <div className="space-y-3">
          <div className="w-16 h-16 rounded-full border-2 border-[#D96B27] bg-[#FAF8F5] text-[#1B4332] flex items-center justify-center mx-auto shadow-lg">
            <span className="font-script text-3xl font-bold">O&amp;O</span>
          </div>
          <h2 className="font-script text-4xl sm:text-6xl text-[#FAF8F5]">
            Ololade Martha &amp; Oluwadamilola Ayomide
          </h2>
          <p className="font-serif text-xs sm:text-sm tracking-widest uppercase text-[#D96B27] font-semibold">
            Saturday, 21st November 2026 • Eredo LCDA Secretariat, Epe, Lagos
          </p>
        </div>

        {/* Families tribute */}
        <div className="max-w-xl mx-auto space-y-2 text-xs text-[#FAF8F5]/80 font-medium">
          <p className="uppercase tracking-wider">MR &amp; MRS OLADELE &amp; MR &amp; MRS ADETUNJI</p>
          <p className="italic font-serif text-sm text-[#F3EFEA]">
            &ldquo;We extend our profound appreciation for your prayers, love, and presence as our children unite in Holy Matrimony.&rdquo;
          </p>
        </div>

        {/* Quick Details Bar */}
        <div className="pt-4 border-t border-[#2D6A4F] flex flex-wrap justify-center items-center gap-6 text-xs font-semibold text-[#FAF8F5]/90">
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#D96B27]" />
            <span>Colours: Orange, Green &amp; Chocolate</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldAlert className="w-3.5 h-3.5 text-[#D96B27]" />
            <span>Strictly By Invitation</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Heart className="w-3.5 h-3.5 text-[#D96B27] fill-[#D96B27]" />
            <span>#OloladeUnitesWithDamilola</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-[11px] text-[#FAF8F5]/50 font-mono pt-4">
          &copy; 2026 Ololade &amp; Oluwadamilola Wedding Celebration. Crafted with love.
        </div>
      </div>
    </footer>
  );
}
