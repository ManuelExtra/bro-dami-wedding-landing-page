"use client";

import { useState } from "react";
import Image from "next/image";
import { Camera, Sparkles, X, Heart, Eye } from "lucide-react";

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryItems = [
    {
      id: 1,
      title: "Royal Wedding Portrait",
      category: "pre-wedding",
      image: "/images/hero_couple.png",
      subtitle: "The Look of Eternal Joy",
    },
    {
      id: 2,
      title: "Traditional Emerald & Gold Elegance",
      category: "traditional",
      image: "/images/traditional_attire.png",
      subtitle: "Honoring Our Roots & Culture",
    },
    {
      id: 3,
      title: "The Sunset Proposal",
      category: "proposal",
      image: "/images/proposal_moment.png",
      subtitle: "The Moment She Said YES!",
    },
    {
      id: 4,
      title: "Grace & Romance",
      category: "pre-wedding",
      image: "/images/hero_couple.png",
      subtitle: "A Garden Walk of Smiles",
    },
    {
      id: 5,
      title: "Royal Agbada & Gele Glamour",
      category: "traditional",
      image: "/images/traditional_attire.png",
      subtitle: "Royal African Attire",
    },
    {
      id: 6,
      title: "Fairy Lights & Rose Petals",
      category: "proposal",
      image: "/images/proposal_moment.png",
      subtitle: "A Dreamy Sunset Promise",
    },
  ];

  const categories = [
    { id: "all", name: "All Moments" },
    { id: "pre-wedding", name: "Pre-Wedding" },
    { id: "traditional", name: "Traditional Attire" },
    { id: "proposal", name: "The Proposal" },
  ];

  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-24 px-4 relative overflow-hidden bg-slate-900/60">
      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        {/* Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-amber-400/30 bg-amber-500/10 text-amber-300 text-xs font-semibold uppercase tracking-widest">
            <Camera className="w-3.5 h-3.5 text-amber-400" />
            <span>Captured Memories</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-slate-100">
            Photo <span className="gold-gradient-text">Gallery</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-light">
            A glimpse into our journey of love, joy, culture, and precious moments.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950 shadow-md shadow-amber-500/20"
                  : "glass-card text-slate-300 hover:text-amber-300 hover:border-amber-400/30"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item.image)}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden glass-panel border border-amber-400/20 group cursor-pointer shadow-lg"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              <div className="absolute inset-0 p-6 flex flex-col justify-between text-slate-100">
                <div className="flex justify-end">
                  <span className="w-8 h-8 rounded-full bg-amber-500/30 border border-amber-400/50 flex items-center justify-center text-amber-300 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                    <Eye className="w-4 h-4" />
                  </span>
                </div>

                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <h3 className="font-serif text-lg font-bold text-slate-100 group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 font-light">{item.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-slate-900/80 text-slate-300 hover:text-amber-400 border border-slate-700"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className="relative w-full max-w-4xl aspect-[4/3] sm:aspect-[16/10] rounded-3xl overflow-hidden border border-amber-400/30 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image src={selectedImage} alt="Wedding Gallery Lightbox" fill className="object-cover" />
          </div>
        </div>
      )}
    </section>
  );
}
