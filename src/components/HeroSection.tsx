"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Calendar, MapPin, Sparkles, Clock, Heart, ShieldAlert, ChevronDown, FileText } from "lucide-react";

export default function HeroSection() {
  const weddingDate = new Date("2026-11-21T12:00:00+01:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, [weddingDate]);

  const handleAddToCalendar = () => {
    const title = encodeURIComponent(
      "Holy Matrimony: Ololade Martha & Oluwadamilola Ayomide"
    );
    const details = encodeURIComponent(
      "Marriage of Ololade Martha Oladele & Oluwadamilola Ayomide Adetunji. Colours of the Day: Orange, Green & Chocolate."
    );
    const location = encodeURIComponent(
      "Eredo LCDA Secretariat, Along Ijebu-Ode-Epe Express Road, Eredo, Epe, Lagos State"
    );
    const startDate = "20261121T110000Z";
    const endDate = "20261121T180000Z";

    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate}/${endDate}&details=${details}&location=${location}`;
    window.open(calendarUrl, "_blank");
  };

  return (
    <section id="invitation" className="relative min-h-screen flex items-center justify-center pt-28 sm:pt-32 pb-20 px-4 overflow-hidden bg-[#FAF8F5]">
      {/* Background Soft Glow Orbs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#1B4332]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#D96B27]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column: Intuitive Invitation Layout */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          {/* Header Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#2D6A4F]/30 bg-[#1B4332]/10 text-[#1B4332] text-xs font-bold uppercase tracking-widest shadow-xs">
            <span>WITH GRATITUDE TO GOD</span>
          </div>

          {/* Family Names Block */}
          <div className="space-y-1">
            <p className="font-serif text-lg sm:text-xl font-bold tracking-wider text-[#4A2511] uppercase">
              MR &amp; MRS OLADELE
            </p>
            <p className="text-xs font-serif italic text-slate-500 uppercase tracking-widest">
              TOGETHER WITH
            </p>
            <p className="font-serif text-lg sm:text-xl font-bold tracking-wider text-[#4A2511] uppercase">
              MR &amp; MRS ADETUNJI
            </p>
            <p className="text-xs sm:text-sm text-[#1B4332] font-semibold pt-1 italic">
              Cordially invite your esteemed presence for the marriage of their children
            </p>
          </div>

          {/* Couple Names Headline */}
          <div className="py-2 space-y-1">
            <h1 className="font-script text-6xl sm:text-8xl text-[#1B4332] leading-none drop-shadow-xs">
              Ololade Martha
            </h1>
            <div className="font-serif text-2xl font-light text-[#D96B27] uppercase tracking-widest my-1">
              &amp;
            </div>
            <h1 className="font-script text-6xl sm:text-8xl text-[#1B4332] leading-none drop-shadow-xs">
              Oluwadamilola Ayomide
            </h1>
            <p className="font-serif text-sm sm:text-base font-bold tracking-widest uppercase text-[#D96B27] pt-2">
              AS THEY UNITE IN HOLY MATRIMONY
            </p>
          </div>

          {/* Key Details Summary Box */}
          <div className="iv-card p-5 sm:p-6 rounded-3xl border border-[#2D6A4F]/20 space-y-3 shadow-md">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-bold text-[#1B4332]">
              <div className="flex items-center gap-2 bg-white p-3 rounded-2xl border border-slate-100">
                <Calendar className="w-4 h-4 text-[#D96B27] shrink-0" />
                <span>Saturday, 21st Nov 2026</span>
              </div>
              <div className="flex items-center gap-2 bg-white p-3 rounded-2xl border border-slate-100 text-[#4A2511]">
                <Clock className="w-4 h-4 text-[#D96B27] shrink-0" />
                <span>12:00 PM Prompt</span>
              </div>
            </div>

            <div className="flex items-start gap-3 text-xs sm:text-sm text-[#4A2511] font-medium pt-2 border-t border-[#1B4332]/10">
              <MapPin className="w-5 h-5 text-[#D96B27] shrink-0 mt-0.5" />
              <div>
                <strong className="block text-[#1B4332] font-serif text-base font-bold">
                  EREDO LCDA SECRETARIAT
                </strong>
                <span className="text-slate-600 text-xs">
                  Along Ijebu-Ode - Epe Express Road, Eredo, Epe, Lagos State
                </span>
              </div>
            </div>
          </div>

          {/* Live Countdown Section */}
          <div className="pt-1">
            <div className="flex items-center justify-center lg:justify-start gap-2 text-xs uppercase tracking-widest text-[#4A2511] font-bold mb-3">
              <Clock className="w-3.5 h-3.5 text-[#D96B27]" />
              <span>Counting Down To The Matrimony</span>
            </div>
            <div className="grid grid-cols-4 gap-3 max-w-md mx-auto lg:mx-0">
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hours", value: timeLeft.hours },
                { label: "Minutes", value: timeLeft.minutes },
                { label: "Seconds", value: timeLeft.seconds },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-3 sm:p-4 rounded-2xl text-center border border-[#2D6A4F]/20 shadow-xs"
                >
                  <span className="block font-serif text-3xl sm:text-4xl font-bold text-[#1B4332]">
                    {String(item.value).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider text-[#D96B27] font-bold">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
            <a
              href="#rsvp"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-widest bg-[#1B4332] text-white shadow-lg hover:bg-[#2D6A4F] transition-all text-center"
            >
              Respond To RSVP
            </a>
            <button
              onClick={handleAddToCalendar}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full font-bold text-xs uppercase tracking-widest bg-white border border-[#2D6A4F]/30 text-[#1B4332] hover:bg-[#1B4332]/5 transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#D96B27]" />
              Save To Calendar
            </button>
            <a
              href="#iv-card"
              className="w-full sm:w-auto px-5 py-3.5 rounded-full font-bold text-xs uppercase tracking-widest bg-[#D96B27]/10 border border-[#D96B27]/30 text-[#4A2511] hover:bg-[#D96B27]/20 transition-all flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4 text-[#D96B27]" />
              View IV Card
            </a>
          </div>

          {/* Strictly By Invitation Seal */}
          <div className="pt-1">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-[#D96B27]/40 bg-[#D96B27]/10 text-[#4A2511] text-[11px] font-bold uppercase tracking-widest">
              <ShieldAlert className="w-3.5 h-3.5 text-[#D96B27]" />
              <span>STRICTLY BY INVITATION</span>
            </div>
          </div>
        </div>

        {/* Right Column: Intuitive Real Couple Photo Frame */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-md aspect-[3/4] rounded-3xl p-4 bg-white border-2 border-[#D96B27]/40 shadow-2xl group">
            {/* Elegant Decorative Corners */}
            <div className="absolute -top-3 -left-3 w-10 h-10 border-t-4 border-l-4 border-[#1B4332] rounded-tl-2xl z-20 pointer-events-none" />
            <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-4 border-r-4 border-[#D96B27] rounded-br-2xl z-20 pointer-events-none" />

            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-inner">
              <Image
                src="/images/couple_photo.jpg"
                alt="Ololade Martha and Oluwadamilola Ayomide"
                fill
                priority
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B4332]/90 via-transparent to-transparent" />

              {/* Photo Overlay Badge */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#2D6A4F]/20 flex items-center justify-between shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#D96B27]/20 border border-[#D96B27] flex items-center justify-center shrink-0">
                    <Heart className="w-5 h-5 text-[#D96B27] fill-[#D96B27]" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#1B4332] font-serif leading-tight">
                      Ololade &amp; Oluwadamilola
                    </h4>
                    <p className="text-[10px] text-[#4A2511] font-semibold">
                      Uniting In Holy Matrimony
                    </p>
                  </div>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-[#1B4332] px-3 py-1.5 rounded-full shrink-0">
                  21.11.2026
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Down indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-400 hover:text-[#D96B27] transition-colors cursor-pointer">
        <span className="text-[10px] uppercase font-bold tracking-widest">Scroll Down</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-[#D96B27]" />
      </div>
    </section>
  );
}
