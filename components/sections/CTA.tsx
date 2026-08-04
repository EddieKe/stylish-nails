import React from 'react';

export default function CTA() {
  return (
    <section className="py-24 px-8 md:px-16 lg:px-24 bg-white flex justify-center items-center">
      <div className="w-full max-w-6xl rounded-3xl bg-gradient-to-r from-[#180a1a] to-[#2a162b] p-12 md:p-20 lg:p-24 shadow-2xl flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
        
        {/* Subtle glow effect */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        
        <div className="mb-8 md:mb-0 relative z-10 text-center md:text-left flex-1">
          <h2 className="text-3xl md:text-5xl font-preahvihear text-white mb-4">
            Ready to elevate your style?
          </h2>
          <p className="text-gray-300 max-w-md mx-auto md:mx-0">
            Book your appointment today and let our expert team take care of the rest.
          </p>
        </div>
        
        <div className="relative z-10 md:ml-8 flex justify-center md:justify-end flex-1">
          <button className="bg-white text-[#180a1a] text-sm font-semibold px-10 py-3 rounded-2xl hover:bg-gray-100 transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
}
