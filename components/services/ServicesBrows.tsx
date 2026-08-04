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
      title: "Microblading",
      description: "A semi-permanent tattooing technique that creates hair-like strokes to fill in sparse or thinning brows.",
      price: "From Ksh 15,000",
      images: [],
      whatsappMessage: "Hi Stylish Nails, I would like to book a Microblading service."
    },
    {
      title: "Ombre Powder Brows",
      description: "A semi-permanent makeup technique providing a soft, powdery makeup look that resembles penciled-in brows.",
      price: "From Ksh 12,000",
      images: [],
      whatsappMessage: "Hi Stylish Nails, I would like to book an Ombre Powder Brows service."
    },
    {
      title: "Brow Lamination",
      description: "A non-invasive treatment that smooths, shapes, and sets your natural brow hairs in an upward, uniform direction.",
      price: "From Ksh 3,500",
      images: [],
      whatsappMessage: "Hi Stylish Nails, I would like to book a Brow Lamination service."
    },
    {
      title: "Brow Tint & Shape",
      description: "Custom brow shaping combined with a semi-permanent tint to add definition and depth to your brows.",
      price: "From Ksh 1,500",
      images: [],
      whatsappMessage: "Hi Stylish Nails, I would like to book a Brow Tint & Shape service."
    }
  ];

  return (
    <section id="brows" className="w-full bg-brand-void py-24 px-8 md:px-24">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        <div className="border-b border-white/10 pb-8">
          <p className="text-lg md:text-xl text-white/70 max-w-3xl leading-relaxed">
            Perfectly sculpted and defined brows to complement your facial structure. From microblading to laminations, our experts have you covered.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="text-2xl font-preahvihear" style={{ color: ACCENT }}>Brow Styling & Semi-Permanent Makeup</h3>
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