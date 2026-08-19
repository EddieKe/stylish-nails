// src/components/sections/Shop.tsx
"use client";

const products = [
  {
    id: 1,
    name: "Sun UV Nail Lamp",
    desc: "Professional-grade UV/LED curing lamp for fast, even gel polish drying. Compact design with a 60s smart timer — a must-have for every nail station.",
    price: "KSh 1,000",
    image: "/sun_uv_lamp.webp",
    whatsappText: "Hi, I'd like to purchase the Sun UV Nail Lamp (KSh 1,000). Is it available?",
  },
  {
    id: 2,
    name: "Nail Hand Trainer",
    desc: "Flexible practice hand with adjustable fingers for perfecting nail shaping, gel application and art techniques before working on real clients.",
    price: "KSh 2,000",
    image: "/nail_hand_trainer.webp",
    whatsappText: "Hi, I'd like to purchase the Nail Hand Trainer (KSh 2,000). Is it available?",
  },
  {
    id: 3,
    name: "Lash Training Dummy",
    desc: "Realistic mannequin head with six replaceable eyelids for endless lash extension practice. Build speed and precision before your first real client.",
    price: "KSh 2,000",
    image: "/lash_dummy.webp",
    whatsappText: "Hi, I'd like to purchase the Lash Training Dummy (KSh 2,000). Is it available?",
  },
  {
    id: 4,
    name: "Roniki Acrylic Gel",
    desc: "High-quality acrylic gel for sculpting and extensions. Self-leveling formula with excellent adhesion — ideal for both students and working techs.",
    price: "KSh 3,500",
    image: "/Roniki_acrylic_gel.webp",
    whatsappText: "Hi, I'd like to purchase the Roniki Acrylic Gel (KSh 3,500). Is it available?",
  },
];

export default function Shop() {
  return (
    <section
      id="shop"
      className="relative min-h-screen flex flex-col justify-center bg-[#FAFAFA] px-6 sm:px-12 md:px-24 py-24 overflow-hidden"
    >
      {/* Premium Grid Mesh Background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(217, 59, 147, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(217, 59, 147, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)'
        }}
      />

      {/* Header Section */}
      <div className="relative z-10 text-center mb-16">
        <h2 className="text-black text-4xl md:text-5xl font-normal mb-4 font-preahvihear">
          Take the studio home.
        </h2>
        <p className="text-black/70 text-sm max-w-xl mx-auto mb-8">
          The same products we use on you, available to take home and keep the results going between appointments.
        </p>
      </div>

      {/* Product Grid — 2 cols on mobile, 4 on desktop */}
      <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto w-full">
        {products.map((product) => (
          <div
            key={product.id}
            className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-black/5"
          >
            {/* Product Image */}
            <div className="relative w-full aspect-square bg-[#F5F5F5] overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
              />
              {/* Price badge */}
              <span className="absolute top-3 right-3 bg-brand-plum text-white text-[10px] sm:text-xs font-medium px-2 sm:px-3 py-1 rounded-full shadow-md">
                {product.price}
              </span>
            </div>

            {/* Content Area */}
            <div className="p-4 sm:p-5 flex flex-col flex-grow">
              <h3 className="text-black text-sm sm:text-lg font-semibold mb-1 sm:mb-2 font-preahvihear leading-tight">
                {product.name}
              </h3>
              <p className="text-black/60 text-[11px] sm:text-xs mb-4 leading-relaxed line-clamp-3">
                {product.desc}
              </p>

              {/* Buy Now CTA */}
              <a
                href={`https://wa.me/+254715702251?text=${encodeURIComponent(product.whatsappText)}`}
                className="mt-auto inline-flex items-center justify-center gap-2 w-full bg-brand-accent text-white text-xs sm:text-sm font-medium px-4 py-2.5 sm:py-3 rounded-full hover:brightness-110 transition-all shadow-sm"
              >
                <svg
                  className="w-4 h-4 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Buy Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
