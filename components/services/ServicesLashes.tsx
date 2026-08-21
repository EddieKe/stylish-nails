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

  const clusterLashes: Service[] = [
    {
      title: "Cluster Set",
      description: "A quick and affordable way to achieve full, glamorous lashes for your next big event.",
      price: "Ksh 1,000",
      images: [],
      whatsappMessage: "Hi Stylish Nails, I would like to book a Cluster Set lash service."
    },
    {
      title: "Cat Eye Cluster Set",
      description: "Flared cluster lashes focused on the outer corners to create an elegant, elongated cat-eye effect.",
      price: "Ksh 1,500",
      images: [],
      whatsappMessage: "Hi Stylish Nails, I would like to book a Cat Eye Cluster Set lash service."
    },
  ];

  const individualLashes: Service[] = [
    {
      title: "Classic Set",
      description: "One lash extension applied to one natural lash for a subtle and beautiful mascara-like effect.",
      price: "Ksh 2,000",
      images: [],
      whatsappMessage: "Hi Stylish Nails, I would like to book a Classic Set lash service."
    },
    {
      title: "Hybrid Set",
      description: "A blend of Classic and Volume techniques for a textured, wispy, and noticeably fuller appearance.",
      price: "Ksh 2,500",
      images: [],
      whatsappMessage: "Hi Stylish Nails, I would like to book a Hybrid Set lash service."
    },
    {
      title: "Volume Set",
      description: "Multiple lightweight lash extensions applied to a single natural lash for a bold, dramatic look.",
      price: "Ksh 3,000",
      images: [],
      whatsappMessage: "Hi Stylish Nails, I would like to book a Volume Set lash service."
    },
    {
      title: "Mega Volume Set",
      description: "The ultimate fullness and density, using ultra-light fans for maximum drama and impact.",
      price: "Ksh 3,500",
      images: [],
      whatsappMessage: "Hi Stylish Nails, I would like to book a Mega Volume Set lash service."
    },
  ];

  const advancedStyles: Service[] = [
    {
      title: "Wet Set",
      description: "Closed volume fans created for a glossy, textured, and edgy spiky lash look.",
      price: "Ksh 3,500",
      images: [],
      whatsappMessage: "Hi Stylish Nails, I would like to book a Wet Set lash service."
    },
    {
      title: "Wispy Set",
      description: "A mapped lash design featuring noticeable spikes and varied lengths for a modern strip-lash effect.",
      price: "Ksh 3,500",
      images: [],
      whatsappMessage: "Hi Stylish Nails, I would like to book a Wispy Set lash service."
    },
    {
      title: "Anime Set",
      description: "Distinctive, defined spikes combined with shorter base lashes for a stylized, manga-inspired appearance.",
      price: "Ksh 3,500",
      images: [],
      whatsappMessage: "Hi Stylish Nails, I would like to book an Anime Set lash service."
    },
  ];

  const groups = [
    { label: "Cluster Lashes", items: clusterLashes },
    { label: "Individual Lashes", items: individualLashes },
    { label: "Advanced Styles", items: advancedStyles },
  ];

  return (
    <section id="lashes" className="w-full bg-brand-void py-24 px-8 md:px-24">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        <div className="border-b border-white/10 pb-8">
          <p className="text-lg md:text-xl text-white/70 max-w-3xl leading-relaxed">
            Enhance your natural beauty with our premium lash extensions. Choose from clusters, individual sets, and our creative advanced styles to perfectly frame your eyes.
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