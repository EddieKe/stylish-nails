// src/components/sections/Range.tsx
"use client";

const services = [
  {
    name: "Nails",
    desc: "Builds, finishes, and full nail care — from acrylics to art.",
    icon: "💅",
    glow: "#D93B93",
    href: "/services#nails",
  },
  {
    name: "Lash & Brow",
    desc: "Full sets, fills, shaping, and microblading.",
    icon: "👁️",
    glow: "#C6398B",
    href: "/services#lashes-brows",
  },
  {
    name: "Academy",
    desc: "Hands-on training with a real path after certification.",
    icon: "🎓",
    glow: "#850F67",
    href: "#academy",
  },
  {
    name: "Shop",
    desc: "The products behind every result, ready to take home.",
    icon: "🛍️",
    glow: "#931F6D",
    href: "#shop",
  },
];

export default function Range() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-brand-black px-12 md:px-24 py-24 overflow-hidden">
      <svg
        className="absolute top-10 right-20 w-40 h-40 opacity-30"
        viewBox="0 0 100 100"
        fill="none"
      >
        <path
          d="M10 80 Q 50 10 90 60"
          stroke="#D93B93"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
      </svg>

      <div className="text-center mb-16">
        
        <h2 className="text-white text-4xl md:text-5xl font-normal font-preahvihear">
          One Studio, Every Service
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto w-full">
        {services.map((s) => (
          <div
            key={s.name}
            className="group bg-brand-plum border border-white/10 rounded-2xl p-6 min-h-[280px] flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
            style={{
              boxShadow: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = `0 0 40px -8px ${s.glow}`;
              e.currentTarget.style.borderColor = s.glow;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
            }}
          >
            <span className="text-4xl mb-4">{s.icon}</span>
            <div>
              <h3 className="text-white text-xl font-normal mb-2">{s.name}</h3>
              <p className="text-white/60 text-sm mb-4">{s.desc}</p>
              <a
                href={s.href}
                className="text-brand-accent text-sm underline underline-offset-4"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}