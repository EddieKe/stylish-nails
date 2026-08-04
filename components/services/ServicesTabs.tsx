"use client";
import React, { useState } from "react";
import ServicesNails from "./ServicesNails";
import ServicesLashes from "./ServicesLashes";
import ServicesBrows from "./ServicesBrows";
export default function ServicesTabs() {
  const [activeTab, setActiveTab] = useState("nails");

  return (
    <div className="w-full bg-brand-void pb-24">
      <div className="max-w-6xl mx-auto px-8 md:px-24 pt-12 flex justify-center border-b border-white/10">
        <button
          onClick={() => setActiveTab("nails")}
          className={`px-6 md:px-8 py-4 font-preahvihear text-lg md:text-xl transition-all ${
            activeTab === "nails" 
              ? "text-brand-accent border-b-2 border-brand-accent" 
              : "text-white/50 hover:text-white"
          }`}
        >
          Nails
        </button>
        <button
          onClick={() => setActiveTab("lashes")}
          className={`px-6 md:px-8 py-4 font-preahvihear text-lg md:text-xl transition-all ${
            activeTab === "lashes" 
              ? "text-brand-accent border-b-2 border-brand-accent" 
              : "text-white/50 hover:text-white"
          }`}
        >
          Lashes
        </button>
        <button
          onClick={() => setActiveTab("brows")}
          className={`px-6 md:px-8 py-4 font-preahvihear text-lg md:text-xl transition-all ${
            activeTab === "brows" 
              ? "text-brand-accent border-b-2 border-brand-accent" 
              : "text-white/50 hover:text-white"
          }`}
        >
          Brows
        </button>
      </div>

      <div className="mt-8">
        {activeTab === "nails" && <ServicesNails />}
        {activeTab === "lashes" && <ServicesLashes />}
        {activeTab === "brows" && <ServicesBrows />}
      </div>
    </div>
  );
}
