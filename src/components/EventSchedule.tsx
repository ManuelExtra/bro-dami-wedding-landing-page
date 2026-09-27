"use client";

import { Calendar, Clock, MapPin, Shirt, Phone, Navigation, ExternalLink, Sparkles } from "lucide-react";

export default function EventSchedule() {
  const rsvpContacts = [
    { name: "Iyanuoluwa", phone: "08129735291", raw: "2348129735291" },
    { name: "Olamide", phone: "09071836558", raw: "2349071836558" },
  ];

  const colorSwatches = [
    {
      name: "Vibrant Orange / Terracotta",
      hex: "#D96B27",
      desc: "Joyful celebratory orange tones",
    },
    {
      name: "Forest / Emerald Green",
      hex: "#1B4332",
      desc: "Graceful botanical green",
    },
    {
      name: "Rich Chocolate Bronze",
      hex: "#4A2511",
      desc: "Earthy luxury chocolate accent",
    },
  ];

  return (
    <section id="details" className="py-20 px-4 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-5xl mx-auto space-y-16 relative z-10">
        {/* Section Title */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#2D6A4F]/30 bg-[#1B4332]/10 text-[#1B4332] text-xs font-bold uppercase tracking-widest">
            <Calendar className="w-3.5 h-3.5 text-[#D96B27]" />
            <span>Event &amp; Venue Details</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1B4332]">
            Wedding <span className="text-[#D96B27]">Itinerary</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm font-medium">
            Join us in Epe, Lagos State as Ololade &amp; Oluwadamilola exchange their wedding vows.
          </p>
        </div>

        {/* Main Wedding Event Card */}
        <div className="iv-card p-8 sm:p-10 rounded-3xl border border-[#2D6A4F]/20 space-y-8 shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-b border-[#1B4332]/10 pb-8">
            <div className="md:col-span-8 space-y-3">
              <span className="px-3.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#1B4332] text-[#FAF8F5]">
                Holy Matrimony &amp; Reception
              </span>
              <h3 className="font-serif text-3xl font-bold text-[#1B4332]">
                The Marriage Union Ceremony
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                Praising God as <strong className="text-[#1B4332]">Ololade Martha Oladele</strong> and <strong className="text-[#1B4332]">Oluwadamilola Ayomide Adetunji</strong> unite in holy matrimony, followed immediately by food, music, and reception celebration.
              </p>
            </div>

            <div className="md:col-span-4 bg-[#F3EFEA] p-5 rounded-2xl border border-[#2D6A4F]/20 space-y-3">
              <div className="flex items-center gap-2.5 text-xs text-[#1B4332] font-semibold">
                <Calendar className="w-4 h-4 text-[#D96B27]" />
                <span>Saturday, 21st Nov 2026</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#1B4332] font-semibold">
                <Clock className="w-4 h-4 text-[#D96B27]" />
                <span>Time: 12:00 PM Prompt</span>
              </div>
              <div className="pt-2 border-t border-slate-200">
                <span className="text-[10px] font-bold text-[#D96B27] uppercase tracking-wider block">Access Notice</span>
                <span className="text-xs font-bold text-[#4A2511]">STRICTLY BY INVITATION</span>
              </div>
            </div>
          </div>

          {/* Venue & Location Details */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="p-3 rounded-2xl bg-[#D96B27]/10 text-[#D96B27] shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif text-xl font-bold text-[#1B4332]">
                  Venue Address
                </h4>
                <p className="font-semibold text-sm text-[#4A2511]">
                  EREDO LOCAL COUNCIL DEVELOPMENT AREA (LCDA) SECRETARIAT
                </p>
                <p className="text-xs text-slate-600">
                  Along Ijebu-Ode - Epe Express Road, Eredo, Epe, Lagos State
                </p>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Eredo+LCDA+Secretariat+Epe+Lagos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#1B4332] text-white hover:bg-[#2D6A4F] transition-all"
            >
              <Navigation className="w-4 h-4 text-[#E76F51]" />
              <span>Open Google Maps Directions</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-70" />
            </a>
          </div>

          {/* RSVP Contacts from Card */}
          <div className="pt-6 border-t border-[#1B4332]/10 space-y-3">
            <h4 className="font-serif text-lg font-bold text-[#1B4332] flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#D96B27]" />
              RSVP Committee Contacts
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {rsvpContacts.map((contact, idx) => (
                <a
                  key={idx}
                  href={`tel:${contact.phone}`}
                  className="bg-white p-4 rounded-xl border border-[#2D6A4F]/20 hover:border-[#D96B27] transition-all flex items-center justify-between group shadow-xs"
                >
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-bold">RSVP Contact</span>
                    <strong className="text-sm font-semibold text-[#1B4332] group-hover:text-[#D96B27]">
                      {contact.name}
                    </strong>
                  </div>
                  <span className="font-mono text-xs font-bold text-[#D96B27] bg-[#D96B27]/10 px-3 py-1.5 rounded-lg border border-[#D96B27]/20">
                    {contact.phone}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Colours of the Day Section */}
        <div id="colours" className="iv-card p-8 sm:p-10 rounded-3xl border border-[#D96B27]/30 space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-[#1B4332] text-[#FAF8F5]">
              <Shirt className="w-6 h-6 text-[#D96B27]" />
            </div>
            <div>
              <h3 className="font-serif text-2xl font-bold text-[#1B4332]">
                Colours of the Day
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm font-medium">
                Guests are encouraged to dress in our official palette:
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
            {colorSwatches.map((color, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-2xl border border-slate-200 space-y-3 shadow-xs"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="w-8 h-8 rounded-full border border-black/10 shadow-sm inline-block shrink-0"
                    style={{ backgroundColor: color.hex }}
                  />
                  <div>
                    <strong className="block text-xs font-serif font-bold text-[#1B4332]">
                      {color.name}
                    </strong>
                    <span className="text-[10px] font-mono text-[#D96B27] font-semibold">
                      {color.hex}
                    </span>
                  </div>
                </div>
                <p className="text-[11px] text-slate-500 italic">{color.desc}</p>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-[#1B4332]/5 border border-[#1B4332]/10 text-xs text-[#1B4332] font-medium text-center">
            Official Theme: <strong className="text-[#D96B27]">Orange, Green &amp; Chocolate</strong> — Aso-Oke / Traditional Agbada / Elegant Evening Attire
          </div>
        </div>
      </div>
    </section>
  );
}
