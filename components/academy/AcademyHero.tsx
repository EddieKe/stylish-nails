import React from "react";

export default function AcademyHero() {
  return (
    <section className="relative w-full min-h-[90vh] bg-white pt-32 pb-16 px-8 md:px-12 flex flex-col justify-end overflow-hidden font-preahvihear">
      <div className="max-w-6xl mx-auto w-full relative z-10 flex flex-col gap-12 lg:gap-16">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-3xl">
            <p
              className="text-black w-fit mb-3 uppercase"
              style={{ fontSize: "17px", letterSpacing: "0.02em" }}
            >
              Stylish Nails Academy
            </p>
            <h1 
              className="text-black leading-[0.95] mb-2"
              style={{ fontSize: "50px", letterSpacing: "0.02em" }}
            >
              Train with us. <br />
              <span className="relative inline-block px-4">
                <span className="absolute inset-0 border-2 border-black rounded-[50%]"></span>
                <span className="relative text-brand-accent">Then build something</span>
              </span> <br/>
              with it.
            </h1>
          </div>
          
          <div className="max-w-xs">
            <p
              className="text-black/70"
              style={{ fontSize: "11px", letterSpacing: "0.02em" }}
            >
              Our Nail and Lash training programs are hands-on from day one — small classes, real clients, real tools, taught by the people who run this studio.
            </p>
          </div>
        </div>

        {/* Structured Media Placeholder */}
        <div className="w-full h-[50vh] md:h-[60vh] bg-gray-50 border border-black/5 rounded-2xl overflow-hidden relative group">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-preahvihear text-black/20 tracking-widest text-lg uppercase">Hero Media Placeholder</span>
          </div>
        </div>
        
      </div>
    </section>
  );
}
