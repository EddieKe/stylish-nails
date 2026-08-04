// src/components/sections/Shop.tsx
"use client";

const products = [
  {
    id: 1,
    name: "Cuticle Revive Oil",
    desc: "Nourishing jojoba and vitamin E blend for daily hydration.",
    price: "KSh 2,200",
    imageColor: "bg-brand-accent/20",
  },
  {
    id: 2,
    name: "Strengthening Base Coat",
    desc: "Keratin-infused formula to protect and fortify natural nails.",
    price: "KSh 1,800",
    imageColor: "bg-brand-vibrant/20",
  },
  {
    id: 3,
    name: "Lash Growth Serum",
    desc: "Clinically proven peptide serum for longer, fuller lashes.",
    price: "KSh 4,500",
    imageColor: "bg-brand-blush/20",
  },
  {
    id: 4,
    name: "Studio Hand Cream",
    desc: "Deeply moisturizing shea butter cream with our signature scent.",
    price: "KSh 2,800",
    imageColor: "bg-brand-mid/20",
  },
];

export default function Shop() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-[#FAFAFA] px-12 md:px-24 py-24 overflow-hidden">
      
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
        <a
          href="/shop"
          className="inline-block bg-brand-plum text-white text-sm font-medium px-8 py-3 rounded-full hover:bg-brand-berry transition shadow-md"
        >
          Shop All Products
        </a>
      </div>

      {/* Product Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto w-full">
        {products.map((product) => (
          <div
            key={product.id}
            className="group flex flex-col bg-gradient-to-br from-brand-plum to-brand-deep rounded-2xl overflow-hidden shadow-lg transition-transform hover:-translate-y-2 cursor-pointer"
          >
            {/* Image Placeholder Area */}
            <div className={`h-64 w-full ${product.imageColor} relative flex items-center justify-center`}>
               {/* Realistic image placeholder */}
               <span className="text-white/50 text-sm font-preahvihear tracking-widest">IMAGE</span>
            </div>
            
            {/* Content Area */}
            <div className="p-6 flex flex-col flex-grow justify-between">
              <div>
                <h3 className="text-white text-xl font-normal mb-2">{product.name}</h3>
                <p className="text-white/70 text-xs mb-4 leading-relaxed">{product.desc}</p>
              </div>
              <div className="mt-auto">
                <span className="text-brand-accent font-medium text-lg">{product.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
