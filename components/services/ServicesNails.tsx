import React from "react";
import ServiceBlock from "./ServiceBlock";

interface Service {
  title: string;
  description: string;
  price: string;
  images: string[];
  whatsappMessage: string;
}

export default function ServicesNails() {
  const ACCENT = "#D93B93";

  const extensionServices: Service[] = [
    {
      title: "Builder Gel",
      description: "A flexible, natural-looking overlay that strengthens your own nail without a hard acrylic base.",
      price: "From Ksh 2,500",
      images: [],
      whatsappMessage: "Hi Stylish Nails, I would like to book a Builder Gel service."
    },
    {
      title: "Acrylics",
      description: "Classic, durable extensions providing maximum strength and length for dramatic shapes.",
      price: "From Ksh 3,000",
      images: [],
      whatsappMessage: "Hi Stylish Nails, I would like to book an Acrylics service."
    },
    {
      title: "Overlays",
      description: "A protective hard layer applied directly over your natural nails to prevent breakage while they grow.",
      price: "From Ksh 2,000",
      images: [],
      whatsappMessage: "Hi Stylish Nails, I would like to book an Overlays service."
    },
    {
      title: "Hard Gel",
      description: "A tough, non-porous gel extension perfect for sculpting long, durable, and shiny nails.",
      price: "From Ksh 3,500",
      images: [],
      whatsappMessage: "Hi Stylish Nails, I would like to book a Hard Gel service."
    },
    {
      title: "Tips",
      description: "Pre-shaped extensions applied to the end of your natural nails to instantly add length.",
      price: "From Ksh 1,500",
      images: [],
      whatsappMessage: "Hi Stylish Nails, I would like to book a Tips service."
    },
  ];

  const finishingServices: Service[] = [
    {
      title: "Gel Polish",
      description: "Long-lasting, chip-resistant polish cured under UV light for a flawless high-gloss finish.",
      price: "From Ksh 1,000",
      images: [],
      whatsappMessage: "Hi Stylish Nails, I would like to book a Gel Polish service."
    },
    {
      title: "Nail Art",
      description: "Custom, hand-painted designs and embellishments tailored to your unique style.",
      price: "From Ksh 500",
      images: [],
      whatsappMessage: "Hi Stylish Nails, I would like to book a Nail Art service."
    },
  ];

  const careServices: Service[] = [
    {
      title: "Manicure",
      description: "Comprehensive cuticle care, nail shaping, and a relaxing hand massage for pristine natural nails.",
      price: "From Ksh 1,500",
      images: [],
      whatsappMessage: "Hi Stylish Nails, I would like to book a Manicure service."
    },
    {
      title: "Pedicure",
      description: "Deep exfoliation, cuticle detailing, and nail care to keep your feet soft, healthy, and beautiful.",
      price: "From Ksh 2,000",
      images: [],
      whatsappMessage: "Hi Stylish Nails, I would like to book a Pedicure service."
    },
  ];

  const groups = [
    { label: "Extensions & Builds", items: extensionServices },
    { label: "Finishing", items: finishingServices },
    { label: "Care", items: careServices },
  ];

  return (
    <section id="nails" className="w-full bg-brand-void py-24 px-8 md:px-24">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        <div className="border-b border-white/10 pb-8">
          <p className="text-lg md:text-xl text-white/70 max-w-3xl leading-relaxed">
            Builder gel, acrylics, overlays, hard gel, tips, nail art, manicure, pedicure — whatever your nails need, whatever look you're going for.
          </p>
        </div>

        {groups.map((group) => (
          <div key={group.label} className="flex flex-col gap-6">
            <h3 className="text-2xl font-preahvihear" style={{ color: ACCENT }}>{group.label}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {group.items.map((service, idx) => (
                <ServiceBlock key={idx} {...service} accent={ACCENT} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}