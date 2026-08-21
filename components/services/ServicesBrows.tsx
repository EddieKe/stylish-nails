import React from "react";
import ServiceBlock from "./ServiceBlock";

interface Service {
  title: string;
  description: string;
  price: string;
  images: string[];
  whatsappMessage: string;
}

export default function ServicesBrows() {
  const ACCENT = "#850F67";

  const browServices: Service[] = [
    {
      title: "Razor Shaping",
      description: "Quick and precise brow shaping using a razor for a clean and defined arch.",
      price: "Ksh 100",
      images: [],
      whatsappMessage: "Hi Stylish Nails, I would like to book a Razor Shaping service."
    },
    {
      title: "Threading",
      description: "An ancient and highly accurate hair removal technique to beautifully sculpt your eyebrows.",
      price: "Ksh 200",
      images: [],
      whatsappMessage: "Hi Stylish Nails, I would like to book a Threading service."
    },
    {
      title: "Microblading",
      description: "A semi-permanent technique creating incredibly natural hair-like strokes to fill in sparse or thinning brows.",
      price: "Ksh 5,000",
      images: [],
      whatsappMessage: "Hi Stylish Nails, I would like to book a Microblading service."
    },
  ];

  return (
    <section id="brows" className="w-full bg-brand-void py-24 px-8 md:px-24">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        <div className="border-b border-white/10 pb-8">
          <p className="text-lg md:text-xl text-white/70 max-w-3xl leading-relaxed">
            Perfectly sculpted and defined brows to complement your facial structure. From precise threading to natural microblading, our experts have you covered.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="text-2xl font-preahvihear" style={{ color: ACCENT }}>Brow Styling</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {browServices.map((service, idx) => (
              <ServiceBlock key={idx} {...service} accent={ACCENT} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}