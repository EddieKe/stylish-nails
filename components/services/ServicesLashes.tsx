import React from "react";
import ServiceBlock from "./ServiceBlock";

interface Service {
  title: string;
  description: string;
  price: string;
  images: string[];
  whatsappMessage: string;
}

export default function ServicesLashes() {
  const ACCENT = "#C6398B";

  const lashServices: Service[] = [
    {
      title: "Classic Extensions",
      description: "One individual lash extension applied to one natural lash for a subtle, mascara-like effect.",
      price: "From Ksh 3,500",
      images: [],
      whatsappMessage: "Hi Stylish Nails, I would like to book a Classic Extensions service."
    },
    {
      title: "Volume Extensions",
      description: "Multiple lightweight lash extensions applied to a single natural lash for a fuller, more dramatic look.",
      price: "From Ksh 4,500",
      images: [],
      whatsappMessage: "Hi Stylish Nails, I would like to book a Volume Extensions service."
    },
    {
      title: "Hybrid Extensions",
      description: "A customized blend of Classic and Volume techniques for a textured, wispy, and fuller appearance.",
      price: "From Ksh 4,000",
      images: [],
      whatsappMessage: "Hi Stylish Nails, I would like to book a Hybrid Extensions service."
    },
    {
      title: "Lash Lift & Tint",
      description: "A semi-permanent treatment that enhances your natural lashes by lifting, curling, and tinting them.",
      price: "From Ksh 3,000",
      images: [],
      whatsappMessage: "Hi Stylish Nails, I would like to book a Lash Lift & Tint service."
    }
  ];

  return (
    <section id="lashes" className="w-full bg-brand-void py-24 px-8 md:px-24">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        <div className="border-b border-white/10 pb-8">
          <p className="text-lg md:text-xl text-white/70 max-w-3xl leading-relaxed">
            Enhance your natural beauty with our premium lash extensions, lifts, and tints. We offer customized styles to perfectly frame your eyes.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="text-2xl font-preahvihear" style={{ color: ACCENT }}>Lash Enhancements</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {lashServices.map((service, idx) => (
              <ServiceBlock key={idx} {...service} accent={ACCENT} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}