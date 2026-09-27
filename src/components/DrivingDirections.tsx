"use client";

import { useState } from "react";
import { Navigation, Bus, Car, MapPin, Compass, CheckCircle } from "lucide-react";

export default function DrivingDirections() {
  const [tab, setTab] = useState<"public" | "driving">("public");

  const publicRoutes = [
    {
      title: "1. From Lagos Mainland",
      sub: "Ogba, Agege, Ikeja, Berger, Ketu, Ojota, Maryland & Environs",
      steps: [
        "Make your way to Ketu Bus Park.",
        "At Ketu, board a bus going to Epe (confirm with driver/conductor).",
        "Tell conductor: 'I am going to Eredo LCDA Secretariat, along Ijebu-Ode-Epe Express Road'.",
        "Alight directly at Eredo LCDA Secretariat.",
      ],
      badge: "Mainland Route",
    },
    {
      title: "2. From Ikorodu",
      sub: "Ikorodu Town & Environs",
      steps: [
        "Make your way to IKORODU BUS PARK.",
        "Board a bus going to Epe via Ituikin.",
        "Tell conductor: 'I am going to Eredo LCDA Secretariat, along Ijebu-Ode-Epe Express Road'.",
        "The bus will pass through Ikorodu → Ituikin → Epe/Eredo.",
        "Alight at Eredo LCDA Secretariat.",
      ],
      badge: "Ikorodu Route",
    },
    {
      title: "3. From Island / Ikoyi / Lekki / Ajah",
      sub: "Lagos Island, VI, Lekki, Ajah, Sangotedo & Environs",
      steps: [
        "Make your way to Ajah and board a bus going to Epe via Lekki-Epe route.",
        "Tell conductor: 'I am going to Eredo LCDA Secretariat, along Ijebu-Ode-Epe Express Road'.",
        "The bus will pass through Ajah → Sangotedo → Eleko → Epe-Credu.",
        "Alight at Eredo LCDA Secretariat.",
      ],
      badge: "Island Route",
    },
  ];

  const drivingRoutes = [
    {
      title: "1. Driving from Island / VI / Lekki / Ajah",
      route: "VI → Lekki → Ajah → Sangotedo → Eleko → Epe → Eredo",
      detail:
        "Continue along the Lekki-Epe Expressway towards Epe. On getting to Epe, continue towards the Ijebu-Ode-Epe Express Road and proceed to Eredo. Look out for Eredo LCDA Secretariat on your route.",
    },
    {
      title: "2. Driving from Mainland / Ikorodu",
      route: "Ketu → Ikorodu → Ituikin → Epe → Eredo",
      detail:
        "From Ketu, proceed towards Ikorodu → Continue through Ikorodu → Ituikin → Epe. On getting to Epe, continue along the Ijebu-Ode-Epe Express Road towards Eredo. Look out for Eredo LCDA Secretariat.",
    },
    {
      title: "3. Driving from Berger / Mowe / Sagamu / Ijebu-Ode",
      route: "Berger → Mowe → Ibafo → Sagamu → Ijebu-Ode → Eredo",
      detail:
        "Take the Lagos-Ibadan Expressway towards Sagamu. Continue through Sagamu to Ijebu-Ode. From Ijebu-Ode, take the Ijebu-Ode-Epe Express Road towards Epe. Continue to Eredo and look out for Eredo LCDA Secretariat.",
    },
  ];

  return (
    <section id="directions" className="py-20 px-4 bg-[#F3EFEA] relative overflow-hidden">
      <div className="max-w-5xl mx-auto space-y-12 relative z-10">
        {/* Title */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#2D6A4F]/30 bg-[#1B4332]/10 text-[#1B4332] text-xs font-bold uppercase tracking-widest">
            <Navigation className="w-3.5 h-3.5 text-[#D96B27]" />
            <span>Venue Travel Guide</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1B4332]">
            Directions to <span className="text-[#D96B27]">The Venue</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm font-medium">
            Detailed public transport and driving instructions extracted directly from the back of the IV card.
          </p>
        </div>

        {/* Easiest Landmark Banner */}
        <div className="iv-card-dark p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="p-3 rounded-full bg-[#D96B27] text-white shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] text-[#F3EFEA] uppercase tracking-widest block font-bold">
                EASIEST LANDMARK TO REMEMBER
              </span>
              <h3 className="font-serif text-xl font-bold text-white">
                EREDO LCDA SECRETARIAT
              </h3>
              <p className="text-xs text-[#FAF8F5]/80">
                Along Ijebu-Ode-Epe Express Road, Eredo, Epe, Lagos State
              </p>
            </div>
          </div>
          <a
            href="https://maps.google.com/?q=Eredo+LCDA+Secretariat+Epe+Lagos"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-[#D96B27] text-white hover:bg-[#E76F51] transition-all shrink-0"
          >
            Open Live Map
          </a>
        </div>

        {/* Transport Type Tabs */}
        <div className="flex justify-center gap-3">
          <button
            onClick={() => setTab("public")}
            className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
              tab === "public"
                ? "bg-[#1B4332] text-white shadow-sm"
                : "bg-white text-[#1B4332] hover:bg-[#1B4332]/10 border border-[#1B4332]/20"
            }`}
          >
            <Bus className="w-4 h-4 text-[#D96B27]" />
            <span>Public Transport Directions</span>
          </button>
          <button
            onClick={() => setTab("driving")}
            className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
              tab === "driving"
                ? "bg-[#1B4332] text-white shadow-sm"
                : "bg-white text-[#1B4332] hover:bg-[#1B4332]/10 border border-[#1B4332]/20"
            }`}
          >
            <Car className="w-4 h-4 text-[#D96B27]" />
            <span>Driving Directions</span>
          </button>
        </div>

        {/* Tab Contents */}
        {tab === "public" ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {publicRoutes.map((route, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-[#2D6A4F]/20 space-y-4 shadow-xs flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#D96B27]/15 text-[#D96B27] border border-[#D96B27]/30">
                      {route.badge}
                    </span>
                    <Bus className="w-4 h-4 text-[#1B4332]" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-[#1B4332]">
                    {route.title}
                  </h4>
                  <p className="text-[11px] text-[#4A2511] font-semibold italic">
                    {route.sub}
                  </p>
                  <ul className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-600">
                    {route.steps.map((step, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[#2D6A4F] shrink-0 mt-0.5" />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {drivingRoutes.map((route, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-[#2D6A4F]/20 space-y-3 shadow-xs"
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-serif text-lg font-bold text-[#1B4332]">
                    {route.title}
                  </h4>
                  <Car className="w-4 h-4 text-[#D96B27]" />
                </div>
                <div className="inline-block px-3 py-1 rounded-lg bg-[#1B4332]/10 text-[#1B4332] font-mono text-xs font-bold">
                  Route: {route.route}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {route.detail}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
