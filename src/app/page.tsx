"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import InvitationCardSection from "@/components/InvitationCardSection";
import EventSchedule from "@/components/EventSchedule";
import DrivingDirections from "@/components/DrivingDirections";
import RsvpSection from "@/components/RsvpSection";
import GiftRegistry from "@/components/GiftRegistry";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#2C3531]">
      <Navbar />

      <HeroSection />

      <InvitationCardSection />

      <EventSchedule />

      <DrivingDirections />

      <RsvpSection />

      <GiftRegistry />

      <Footer />
    </main>
  );
}
