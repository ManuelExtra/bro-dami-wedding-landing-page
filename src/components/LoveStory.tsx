"use client";

import Image from "next/image";
import { Heart, Sparkles, MapPin, Calendar, Compass } from "lucide-react";

export default function LoveStory() {
  const storyMilestones = [
    {
      year: "October 2022",
      title: "The Lagos Coffee Encounter",
      location: "Victoria Island, Lagos",
      description:
        "It started as a chance meeting at a quiet tech-meetup cafe. Dami noticed Folake's contagious laugh from across the room and mustered up the courage to introduce himself over a cup of cappuccino.",
      image: "/images/hero_couple.png",
      tag: "First Meet",
    },
    {
      year: "March 2023",
      title: "First Sunset Roadtrip & Deep Conversations",
      location: "Tarkwa Bay & Lekki Coastline",
      description:
        "Hours turned into days as we discovered our shared faith, mutual passion for music, community building, and love for good food. We knew something special was blossoming.",
      image: "/images/traditional_attire.png",
      tag: "The Spark",
    },
    {
      year: "December 2025",
      title: "The Sunset Balcony Proposal",
      location: "The Glass Penthouse, Lagos",
      description:
        "Surrounded by rose petals, soft fairy lights, and our closest friends hiding nearby, Dami dropped to one knee as the sun dipped into the horizon. With happy tears and full heart, Folake said YES!",
      image: "/images/proposal_moment.png",
      tag: "The Proposal",
    },
    {
      year: "November 21, 2026",
      title: "The Covenant & Holy Matrimony",
      location: "Cathedral of Grace, Lagos",
      description:
        "We lock hands before God and our loved ones to begin our lifelong journey of faith, joy, growth, and unconditional love.",
      image: "/images/hero_couple.png",
      tag: "Forever Begins",
    },
  ];

  return (
    <section id="story" className="py-24 px-4 relative overflow-hidden bg-slate-950/60">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-rose-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-amber-400/30 bg-amber-500/10 text-amber-300 text-xs font-semibold uppercase tracking-widest">
            <Heart className="w-3.5 h-3.5 text-amber-400 fill-amber-400/20" />
            <span>How We Met &amp; Fell In Love</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-slate-100">
            Our Love <span className="gold-gradient-text">Story</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-light leading-relaxed">
            Every love story is beautiful, but ours is our favorite grace story written by God.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="relative border-l-2 border-amber-500/30 ml-4 md:ml-0 md:before:content-none space-y-12 md:space-y-24">
          {storyMilestones.map((milestone, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={idx}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[17px] md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full border-2 border-amber-400 bg-slate-950 flex items-center justify-center z-20 shadow-lg shadow-amber-500/20">
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                </div>

                {/* Content Card */}
                <div className="w-full md:w-1/2 pl-6 md:pl-0">
                  <div
                    className={`glass-panel p-6 sm:p-8 rounded-3xl border border-amber-400/20 space-y-4 hover:border-amber-400/40 transition-all ${
                      isEven ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    <div
                      className={`flex flex-wrap items-center gap-2 ${
                        isEven ? "md:justify-end" : "md:justify-start"
                      }`}
                    >
                      <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-500/20 border border-amber-400/30 text-amber-300">
                        {milestone.tag}
                      </span>
                      <span className="text-xs font-mono text-amber-400/80 font-semibold flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-amber-400" />
                        {milestone.year}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl font-bold text-slate-100">
                      {milestone.title}
                    </h3>

                    <div
                      className={`flex items-center gap-1.5 text-xs text-slate-400 font-medium ${
                        isEven ? "md:justify-end" : "md:justify-start"
                      }`}
                    >
                      <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{milestone.location}</span>
                    </div>

                    <p className="text-slate-300 text-sm font-light leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Photo Card */}
                <div className="w-full md:w-1/2 px-4 md:px-0">
                  <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden glass-card p-2 border border-slate-700/50 shadow-xl group">
                    <div className="relative w-full h-full rounded-2xl overflow-hidden">
                      <Image
                        src={milestone.image}
                        alt={milestone.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
