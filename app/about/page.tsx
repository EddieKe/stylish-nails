import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutHero from "@/components/about/AboutHero";
import FounderThoughtPiece from "@/components/about/FounderThoughtPiece";
import TeamVisuals from "@/components/about/TeamVisuals";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white selection:bg-brand-accent selection:text-white">
      <Navbar />
      <AboutHero />
      <FounderThoughtPiece />
      <TeamVisuals />
      <Footer />
    </main>
  );
}
