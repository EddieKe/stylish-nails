import React from "react";

export default function AcademyDayInLife() {
  return (
    <section className="w-full bg-white py-24 px-8 md:px-12 font-preahvihear border-t border-black/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        <div className="w-full md:w-1/3">
          <h2 className="text-4xl md:text-5xl text-black mb-4">What Happens in Class</h2>
          <p className="text-sm text-black/70 mb-6 font-sans">
            A day-in-the-life walkthrough. See the studio, meet the instructors, and watch our students turn theory into flawless practice.
          </p>
        </div>

        {/* Video Placeholder Container */}
        <div className="w-full md:w-2/3 aspect-video rounded-2xl overflow-hidden relative group cursor-pointer bg-gray-50 border border-black/5 flex items-center justify-center shadow-md">
          
          <span className="font-preahvihear text-black/20 tracking-widest text-lg uppercase z-0">Video Placeholder</span>

          {/* Play Button Overlay */}
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <i className="ti ti-player-play-filled text-3xl text-brand-accent ml-1"></i>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
