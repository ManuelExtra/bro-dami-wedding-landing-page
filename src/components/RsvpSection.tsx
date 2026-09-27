"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import { CheckCircle2, Heart, Sparkles, Send, Utensils, Users, Mail, Phone, User, QrCode, ShieldCheck, Contact2 } from "lucide-react";

export default function RsvpSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    attendance: "attending",
    familySide: "Bride's family",
    guestCount: "1",
    mealChoice: "Smokey Party Jollof & Grilled Croaker Fish",
    specialMessage: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState("");
  const [brevoActive, setBrevoActive] = useState(false);

  const affiliationOptions = [
    "Bride's family",
    "Groom's family",
    "Bride's friend",
    "Groom's friend",
    "Bride's Father friends",
    "Bride's Mother friends",
    "Groom's Father friends",
    "Groom's Mother friends",
    "Bride's siblings & Cousins",
    "Groom's siblings & Cousins",
    "Bridesmaids",
    "Groomsmen",
    "Cac Light House Assembly",
    "Cac Ilu iyanu",
    "Light Nation",
    "Honeyland School",
    "Dois School",
    "Unilag Microfinance Bank",
    "Kongapay",
    "Quantum Travels",
    "Bayo Arikawe & Co Chartered Accountant",
    "Cacsa fpi",
    "Lautech",
    "Peace House",
    "The Alatise Family & friends",
    "A-Yes Chapel Choir",
    "A-Yes Chapel Pastors",
    "The Olakulehins",
    "The Agoros",
    "Dignitaries",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      const generatedTicket = data.ticketId || `OO-${Math.floor(100000 + Math.random() * 900000)}`;

      setTicketId(generatedTicket);
      setBrevoActive(Boolean(data.brevoIntegrated));
      setSubmitted(true);
      localStorage.setItem("ololade_damilola_rsvp", JSON.stringify({ ...formData, ticketId: generatedTicket }));

      confetti({
        particleCount: 140,
        spread: 90,
        origin: { y: 0.6 },
        colors: ["#D96B27", "#1B4332", "#4A2511", "#FAF8F5"],
      });
    } catch (err) {
      console.error(err);
      const fallbackId = `OO-${Math.floor(100000 + Math.random() * 900000)}`;
      setTicketId(fallbackId);
      setSubmitted(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#D96B27", "#1B4332", "#4A2511"],
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="rsvp" className="py-20 px-4 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-4xl mx-auto space-y-12 relative z-10">
        {/* Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#2D6A4F]/30 bg-[#1B4332]/10 text-[#1B4332] text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-[#D96B27]" />
            <span>Kindly Respond Before Nov 1, 2026</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1B4332]">
            Confirm Your <span className="text-[#D96B27]">RSVP</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm font-medium">
            Please select your guest affiliation and RSVP info for Ololade Martha &amp; Oluwadamilola Ayomide&apos;s wedding.
          </p>
        </div>

        {/* Form Box */}
        <div className="iv-card p-8 sm:p-12 rounded-3xl border border-[#2D6A4F]/20 shadow-xl">
          {submitted ? (
            /* Digital Pass View */
            <div className="text-center space-y-6 py-4 animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-full bg-[#1B4332] text-white flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-8 h-8 text-[#D96B27]" />
              </div>

              <div className="space-y-1">
                <h3 className="font-serif text-3xl font-bold text-[#1B4332]">
                  Thank You, {formData.fullName.split(" ")[0]}!
                </h3>
                <p className="text-[#D96B27] font-semibold text-sm">
                  {formData.attendance === "attending"
                    ? "🎉 Your RSVP has been confirmed! We look forward to celebrating with you."
                    : "We appreciate your kind response and prayers!"}
                </p>
                {brevoActive && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold mt-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Confirmation Email Sent via Brevo</span>
                  </div>
                )}
              </div>

              {/* Digital Pass Card */}
              <div className="max-w-md mx-auto p-6 rounded-2xl bg-[#F3EFEA] border-2 border-[#D96B27]/40 text-left space-y-4 shadow-md">
                <div className="flex items-center justify-between border-b border-[#1B4332]/10 pb-3">
                  <div>
                    <h4 className="font-script text-2xl font-bold text-[#1B4332]">
                      Ololade &amp; Oluwadamilola
                    </h4>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#D96B27]">
                      Official Wedding Guest Pass
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-white border border-[#2D6A4F]/30 flex items-center justify-center text-[#1B4332]">
                    <QrCode className="w-6 h-6" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-slate-500 block text-[10px] uppercase font-bold">Guest Name</span>
                    <strong className="text-[#1B4332] font-semibold">{formData.fullName}</strong>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px] uppercase font-bold">Ticket Code</span>
                    <strong className="text-[#D96B27] font-mono font-bold">{ticketId}</strong>
                  </div>
                  <div className="col-span-2">
                    <span className="text-slate-500 block text-[10px] uppercase font-bold">Guest Affiliation</span>
                    <span className="text-[#1B4332] font-semibold">{formData.familySide}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px] uppercase font-bold">Party Size</span>
                    <span className="text-[#1B4332] font-medium">{formData.guestCount} Person(s)</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px] uppercase font-bold">Attendance</span>
                    <span className="text-[#1B4332] font-medium capitalize">{formData.attendance}</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-200 text-[10px] text-slate-500 text-center font-semibold">
                  Venue: Eredo LCDA Secretariat, Epe, Lagos State
                </div>
              </div>

              <button
                onClick={() => setSubmitted(false)}
                className="text-xs text-[#1B4332] hover:underline font-bold pt-2 cursor-pointer"
              >
                Edit or update your response
              </button>
            </div>
          ) : (
            /* RSVP Form with Exact Affiliation Options */
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Attendance Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label
                  className={`p-4 rounded-2xl border cursor-pointer flex items-center gap-3 transition-all ${
                    formData.attendance === "attending"
                      ? "bg-[#1B4332] text-white border-[#1B4332]"
                      : "bg-white text-slate-700 border-slate-200 hover:border-[#1B4332]/40"
                  }`}
                >
                  <input
                    type="radio"
                    name="attendance"
                    value="attending"
                    checked={formData.attendance === "attending"}
                    onChange={handleChange}
                    className="accent-[#D96B27]"
                  />
                  <div>
                    <strong className="block text-sm font-semibold">
                      Joyfully Accept
                    </strong>
                    <span className="text-xs opacity-80">I will be attending the wedding!</span>
                  </div>
                </label>

                <label
                  className={`p-4 rounded-2xl border cursor-pointer flex items-center gap-3 transition-all ${
                    formData.attendance === "declining"
                      ? "bg-[#4A2511] text-white border-[#4A2511]"
                      : "bg-white text-slate-700 border-slate-200 hover:border-[#4A2511]/40"
                  }`}
                >
                  <input
                    type="radio"
                    name="attendance"
                    value="declining"
                    checked={formData.attendance === "declining"}
                    onChange={handleChange}
                    className="accent-[#D96B27]"
                  />
                  <div>
                    <strong className="block text-sm font-semibold">
                      Regretfully Decline
                    </strong>
                    <span className="text-xs opacity-80">Will send prayers from afar.</span>
                  </div>
                </label>
              </div>

              {/* Guest Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#1B4332] flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#D96B27]" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Chief & Mrs. Kunle Adebayo"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:border-[#1B4332] focus:outline-none text-slate-800 text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#1B4332] flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#D96B27]" />
                    Email Address * (For Ticket Pass)
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="kunle@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:border-[#1B4332] focus:outline-none text-slate-800 text-sm"
                  />
                </div>
              </div>

              {/* Guest Affiliation / Family Side Dropdown */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-[#1B4332] flex items-center gap-1.5">
                  <Contact2 className="w-3.5 h-3.5 text-[#D96B27]" />
                  Select Guest Affiliation / Family Group *
                </label>
                <select
                  name="familySide"
                  value={formData.familySide}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:border-[#1B4332] focus:outline-none text-slate-800 text-sm font-medium"
                >
                  {affiliationOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Phone & Party Size */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#1B4332] flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#D96B27]" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="0803 000 0000"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:border-[#1B4332] focus:outline-none text-slate-800 text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#1B4332] flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#D96B27]" />
                    Number of Guests
                  </label>
                  <select
                    name="guestCount"
                    value={formData.guestCount}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:border-[#1B4332] focus:outline-none text-slate-800 text-sm"
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 Persons</option>
                  </select>
                </div>
              </div>

              {/* Special Message */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-[#1B4332] flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5 text-[#D96B27]" />
                  Warm Wish or Prayer for Ololade &amp; Oluwadamilola
                </label>
                <textarea
                  name="specialMessage"
                  rows={3}
                  value={formData.specialMessage}
                  onChange={handleChange}
                  placeholder="Share your prayers and heartfelt blessings for the couple..."
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:border-[#1B4332] focus:outline-none text-slate-800 text-sm"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl font-bold text-xs uppercase tracking-widest bg-[#1B4332] text-white hover:bg-[#2D6A4F] shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {loading ? (
                  <span>Processing Brevo RSVP...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-[#D96B27]" />
                    <span>Submit RSVP &amp; Get Pass</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
