import React from "react";
import Navbar from "../layout/Navbar";

export default function ServicesHero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col bg-brand-void text-white font-preahvihear overflow-hidden">
      <Navbar />

      <div className="flex-1 grid md:grid-cols-2 gap-16 items-center px-8 md:px-24 py-24 max-w-6xl mx-auto w-full">
        <div>
          <p className="text-brand-accent text-xs tracking-widest mb-4">// SERVICES</p>
          <h1 className="text-5xl md:text-6xl leading-tight mb-6">
            Every service, <span className="text-brand-accent">done properly.</span>
          </h1>
          <p className="text-white/70 text-base md:text-lg leading-relaxed mb-8 max-w-md">
            Whether you're here for a full acrylic set, a lash fill, or your first microblading appointment, every service at Stylish Nails is done by a specialist in that exact craft — not a generalist doing a bit of everything.
          </p>
          <div className="flex gap-3">
            <a href="#nails" className="border border-white/20 text-white text-sm px-5 py-2 rounded-full hover:bg-white/10 transition">Nails</a>
            <a href="#lashes" className="border border-white/20 text-white text-sm px-5 py-2 rounded-full hover:bg-white/10 transition">Lashes</a>
            <a href="#brows" className="border border-white/20 text-white text-sm px-5 py-2 rounded-full hover:bg-white/10 transition">Brows</a>
          </div>
        </div>

        {/* Media slot — swap for a looping video once footage exists */}
        <div className="h-[520px] rounded-2xl bg-gradient-to-br from-brand-plum to-brand-deep shadow-xl" />
      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-brand-void to-transparent pointer-events-none" />
    </section>
  );
}