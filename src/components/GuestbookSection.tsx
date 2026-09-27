"use client";

import { useState, useEffect } from "react";
import { MessageSquare, Heart, Send, Sparkles, User } from "lucide-react";

interface GuestWish {
  id: number;
  name: string;
  relation: string;
  message: string;
  likes: number;
  date: string;
}

export default function GuestbookSection() {
  const [wishes, setWishes] = useState<GuestWish[]>([
    {
      id: 1,
      name: "Iyanuoluwa Adetunji",
      relation: "Groom's Brother",
      message:
        "Big congratulations Bro Dami & Ololade! May God bless your home with joy, wisdom, divine peace, and overflowing abundance. Love you both!",
      likes: 14,
      date: "2 hours ago",
    },
    {
      name: "Dr. Olamide Oladele",
      id: 2,
      relation: "Bride's Family",
      message:
        "To my wonderful sister Ololade Martha and Damilola, you two make such a beautiful couple. Excited for Saturday 21st Nov 2026 in Epe!",
      likes: 11,
      date: "Yesterday",
    },
    {
      id: 3,
      name: "Engr. & Mrs. Adebayo",
      relation: "Family Friends",
      message:
        "Congratulations to the Oladele and Adetunji families! Praying for a joyful matrimony filled with laughter and divine favor.",
      likes: 9,
      date: "2 days ago",
    },
  ]);

  const [newName, setNewName] = useState("");
  const [newWish, setNewWish] = useState("");
  const [newRelation, setNewRelation] = useState("Well Wisher / Friend");

  const handleAddWish = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim() || !newWish.trim()) return;

    const entry: GuestWish = {
      id: Date.now(),
      name: newName,
      relation: newRelation,
      message: newWish,
      likes: 1,
      date: "Just now",
    };

    setWishes([entry, ...wishes]);
    setNewName("");
    setNewWish("");
  };

  const handleLike = (id: number) => {
    setWishes(
      wishes.map((w) => (w.id === id ? { ...w, likes: w.likes + 1 } : w))
    );
  };

  return (
    <section id="guestbook" className="py-20 px-4 bg-[#F3EFEA] relative overflow-hidden">
      <div className="max-w-5xl mx-auto space-y-12 relative z-10">
        {/* Title */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#2D6A4F]/30 bg-[#1B4332]/10 text-[#1B4332] text-xs font-bold uppercase tracking-widest">
            <MessageSquare className="w-3.5 h-3.5 text-[#D96B27]" />
            <span>Digital Guestbook</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1B4332]">
            Wishes &amp; <span className="text-[#D96B27]">Blessings</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm font-medium">
            Leave a prayer or message of goodwill for Ololade Martha &amp; Oluwadamilola Ayomide.
          </p>
        </div>

        {/* Form and Messages Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Input Form */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-[#2D6A4F]/20 shadow-md space-y-4">
            <h3 className="font-serif text-xl font-bold text-[#1B4332] border-b border-slate-100 pb-2">
              Sign The Guestbook
            </h3>

            <form onSubmit={handleAddWish} className="space-y-4">
              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase tracking-wider text-[#1B4332]">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder="e.g. Chief & Mrs. Adebayo"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#1B4332] focus:outline-none text-xs text-slate-800"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase tracking-wider text-[#1B4332]">
                  Your Relationship
                </label>
                <select
                  value={newRelation}
                  onChange={(e) => setNewRelation(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#1B4332] focus:outline-none text-xs text-slate-800"
                >
                  <option value="Friend of the Couple">Friend of the Couple</option>
                  <option value="Bride's Family (Oladele)">Bride&apos;s Family (Oladele)</option>
                  <option value="Groom's Family (Adetunji)">Groom&apos;s Family (Adetunji)</option>
                  <option value="Colleague / Workmate">Colleague / Workmate</option>
                  <option value="Well Wisher">Well Wisher</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase tracking-wider text-[#1B4332]">
                  Your Message / Prayer *
                </label>
                <textarea
                  required
                  rows={4}
                  value={newWish}
                  onChange={(e) => setNewWish(e.target.value)}
                  placeholder="Write your prayers and warm wishes..."
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#1B4332] focus:outline-none text-xs text-slate-800"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest bg-[#1B4332] text-white hover:bg-[#2D6A4F] transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
              >
                <Send className="w-4 h-4 text-[#D96B27]" />
                <span>Post Your Wish</span>
              </button>
            </form>
          </div>

          {/* Right: Scrollable Wishes List */}
          <div className="lg:col-span-7 space-y-4 max-h-[520px] overflow-y-auto pr-1">
            {wishes.map((item) => (
              <div
                key={item.id}
                className="bg-white p-6 rounded-2xl border border-[#2D6A4F]/20 space-y-3 shadow-xs hover:border-[#D96B27]/40 transition-all"
              >
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <div>
                    <strong className="font-serif text-base font-bold text-[#1B4332] block">
                      {item.name}
                    </strong>
                    <span className="text-[10px] text-[#D96B27] font-semibold uppercase">
                      {item.relation}
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono">
                    {item.date}
                  </span>
                </div>

                <p className="text-xs text-slate-700 italic font-medium leading-relaxed">
                  &ldquo;{item.message}&rdquo;
                </p>

                <div className="flex justify-end pt-1">
                  <button
                    onClick={() => handleLike(item.id)}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D96B27]/10 text-[#D96B27] text-[11px] font-bold hover:bg-[#D96B27]/20 transition-all cursor-pointer"
                  >
                    <Heart className="w-3.5 h-3.5 fill-[#D96B27]" />
                    <span>{item.likes} Blessings</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
