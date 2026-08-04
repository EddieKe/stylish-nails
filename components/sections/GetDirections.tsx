import React from 'react';

export default function GetDirections() {
  return (
    <section className="py-24 px-8 md:px-16 lg:px-24 bg-white flex flex-col items-center">
      <div className="mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-preahvihear text-brand-black">
          Get The Directions
        </h2>
      </div>
      
      <div className="w-full max-w-5xl h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] bg-[#180a1a]">
        {/* We use an embedded Google Map pointing to Dynamica Mall, Tom Mboya Street, Nairobi */}
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          scrolling="no"
          marginHeight={0}
          marginWidth={0}
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Dynamica%20Mall,%20Tom%20Mboya%20Street,%20Nairobi+(Stylish%20Nails)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Map to Stylish Nails at Dynamica Mall"
        ></iframe>
      </div>
    </section>
  );
}
