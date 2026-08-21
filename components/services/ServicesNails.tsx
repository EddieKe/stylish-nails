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

  const nailServices: Service[] = [
    {
      title: "Gel Plain",
      description: "A flawless, durable plain gel application for a sleek and natural look.",
      price: "Ksh 500",
      images: [],
      whatsappMessage: "Hi Stylish Nails, I would like to book a Gel Plain service."
    },
    {
      title: "Tips, Gel & Builder",
      description: "Enhance length and strength with tips and a protective builder gel overlay.",
      price: "Ksh 1,000",
      images: [],
      whatsappMessage: "Hi Stylish Nails, I would like to book a Tips, Gel & Builder service."
    },
    {
      title: "Dip-in Nails",
      description: "A long-lasting, odor-free alternative to acrylics that provides strength and beautiful color.",
      price: "Ksh 1,500",
      images: [],
      whatsappMessage: "Hi Stylish Nails, I would like to book a Dip-in Nails service."
    },
    {
      title: "Tips Gum Gel",
      description: "Flexible and lightweight gum gel extensions for a natural feel and extended length.",
      price: "Ksh 2,000",
      images: [],
      whatsappMessage: "Hi Stylish Nails, I would like to book a Tips Gum Gel service."
    },
    {
      title: "Acrylics",
      description: "Classic, durable extensions providing maximum strength and length for any shape you desire.",
      price: "Ksh 2,500",
      images: [],
      whatsappMessage: "Hi Stylish Nails, I would like to book an Acrylics service."
    },
  ];

  const pedicureServices: Service[] = [
    {
      title: "Gel Pedicure",
      description: "Deep exfoliation, cuticle detailing, and nail care finished with a long-lasting gel polish.",
      price: "Ksh 1,000",
      images: [],
      whatsappMessage: "Hi Stylish Nails, I would like to book a Gel Pedicure service."
    },
  ];

  const nailArtServices: Service[] = [
    {
      title: "Standard Nail Art",
      description: "Beautiful standard nail art designs included to compliment your chosen nail service.",
      price: "FREE",
      images: [],
      whatsappMessage: "Hi Stylish Nails, I would like to add Standard Nail Art."
    },
    {
      title: "3D Nail Art",
      description: "Intricate, raised 3D designs to make your nails truly stand out.",
      price: "Ksh 200",
      images: [],
      whatsappMessage: "Hi Stylish Nails, I would like to add 3D Nail Art."
    },
  ];

  const groups = [
    { label: "Nails", items: nailServices },
    { label: "Pedicure", items: pedicureServices },
    { label: "Nail Art", items: nailArtServices },
  ];

  return (
    <section id="nails" className="w-full bg-brand-void py-24 px-8 md:px-24">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        <div className="border-b border-white/10 pb-8">
          <p className="text-lg md:text-xl text-white/70 max-w-3xl leading-relaxed">
            From classic gel and durable acrylics to detailed pedicures and intricate 3D nail art. Find the perfect treatment for your style.
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