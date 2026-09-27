"use client";

import { useState } from "react";
import Image from "next/image";
import { Eye, FileText, Download, Check, Sparkles, MapPin, Calendar, Clock, CreditCard } from "lucide-react";

export default function InvitationCardSection() {
  const [zoomOpen, setZoomOpen] = useState(false);

  return (
    <section id="iv-card" className="py-20 px-4 bg-[#F3EFEA] relative overflow-hidden">
      <div className="max-w-5xl mx-auto space-y-12 relative z-10">
        {/* Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#2D6A4F]/30 bg-[#1B4332]/10 text-[#1B4332] text-xs font-bold uppercase tracking-widest">
            <FileText className="w-3.5 h-3.5 text-[#D96B27]" />
            <span>Official Wedding Invitation</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1B4332]">
            The <span className="text-[#D96B27]">Invitation</span> Card
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
            Below is the official wedding card (IV) containing all event details, venue landmarks, and transport directions.
          </p>
        </div>

        {/* Card Display Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* IV Image Preview */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div
              onClick={() => setZoomOpen(true)}
              className="relative w-full max-w-md aspect-[16/11] sm:aspect-[4/3] rounded-2xl overflow-hidden border-2 border-[#D96B27]/40 shadow-xl group cursor-pointer bg-white p-2"
            >
              <Image
                src="/images/invitation_card.jpg"
                alt="Official Wedding Invitation Card"
                fill
                className="object-contain group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                <span className="px-4 py-2 rounded-full bg-white/90 text-[#1B4332] text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-md">
                  <Eye className="w-4 h-4 text-[#D96B27]" />
                  Click to Zoom IV Card
                </span>
              </div>
            </div>
            <p className="text-[11px] text-[#4A2511] font-medium pt-2 italic">
              Tap image above to view full-resolution invitation card
            </p>
          </div>

          {/* Key Extract Highlights */}
          <div className="lg:col-span-6 space-y-4">
            <div className="bg-white p-6 rounded-2xl border border-[#2D6A4F]/20 space-y-4 shadow-xs">
              <h3 className="font-serif text-xl font-bold text-[#1B4332] border-b border-[#1B4332]/10 pb-2">
                Invitation Card Summary
              </h3>

              <div className="space-y-3 text-xs text-slate-700">
                <div>
                  <span className="text-[#D96B27] font-bold uppercase tracking-wider block text-[10px]">Host Families</span>
                  <p className="font-serif text-sm font-bold text-[#1B4332]">
                    Mr &amp; Mrs Oladele <span className="font-sans font-normal text-xs text-slate-500">together with</span> Mr &amp; Mrs Adetunji
                  </p>
                </div>

                <div>
                  <span className="text-[#D96B27] font-bold uppercase tracking-wider block text-[10px]">The Couple</span>
                  <p className="font-script text-2xl font-bold text-[#1B4332]">
                    Ololade Martha &amp; Oluwadamilola Ayomide
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-1">
                  <div>
                    <span className="text-[#D96B27] font-bold uppercase tracking-wider block text-[10px]">Date</span>
                    <strong className="text-[#1B4332] font-semibold">Saturday, 21st Nov 2026</strong>
                  </div>
                  <div>
                    <span className="text-[#D96B27] font-bold uppercase tracking-wider block text-[10px]">Time</span>
                    <strong className="text-[#1B4332] font-semibold">12:00 PM</strong>
                  </div>
                </div>

                <div className="pt-1">
                  <span className="text-[#D96B27] font-bold uppercase tracking-wider block text-[10px]">Venue</span>
                  <p className="font-semibold text-[#1B4332]">
                    Eredo Local Council Development Area (LCDA) Secretariat
                  </p>
                  <p className="text-slate-500 text-[11px]">
                    Along Ijebu-Ode - Epe Express Road, Eredo, Epe, Lagos State
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
                  <span className="font-bold text-[#D96B27] uppercase">Colour of the Day:</span>
                  <span className="font-semibold text-[#1B4332] bg-[#D96B27]/10 px-2.5 py-0.5 rounded-full border border-[#D96B27]/30">
                    Orange, Green &amp; Chocolate
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Zoom Modal */}
      {zoomOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setZoomOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden p-2 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-3 border-b border-slate-200">
              <span className="font-serif font-bold text-sm text-[#1B4332]">
                Ololade &amp; Oluwadamilola Official Wedding IV
              </span>
              <button
                onClick={() => setZoomOpen(false)}
                className="px-3 py-1 rounded-lg bg-[#1B4332] text-white text-xs font-semibold"
              >
                Close
              </button>
            </div>
            <div className="relative w-full h-[75vh]">
              <Image
                src="/images/invitation_card.jpg"
                alt="Full Wedding IV"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
