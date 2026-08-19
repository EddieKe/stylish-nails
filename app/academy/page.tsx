import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AcademyHero from "@/components/academy/AcademyHero";
import AcademyCourses from "@/components/academy/AcademyCourses";
import AcademyDayInLife from "@/components/academy/AcademyDayInLife";
import AcademyPathways from "@/components/academy/AcademyPathways";
import AcademyGallery from "@/components/academy/AcademyGallery";

export default function AcademyPage() {
  return (
    <main className="min-h-screen bg-white selection:bg-brand-accent selection:text-white">
      <Navbar />
      <AcademyHero />
      <AcademyCourses />
      <AcademyDayInLife />
      <AcademyGallery />
      <AcademyPathways />
      <Footer />
    </main>
  );
}
