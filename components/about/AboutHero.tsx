export default function AboutHero() {
  return (
    <section className="relative w-full min-h-[90vh] bg-brand-black pt-32 pb-16 px-8 md:px-12 flex flex-col justify-center overflow-hidden font-preahvihear text-white">
      {/* Subtle Dot Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      
      <div className="max-w-6xl mx-auto w-full relative z-10 flex flex-col gap-16 lg:gap-24">
        
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-brand-accent mb-4 uppercase tracking-widest text-sm">
            Our Purpose
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl leading-tight mb-8">
            Redefining beauty,<br />
            <span className="italic text-brand-plum drop-shadow-sm font-sans font-light">one detail</span> at a time.
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          <div className="bg-white/5 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors duration-500">
            <h2 className="text-3xl mb-6 text-brand-accent">Our Vision</h2>
            <p className="text-white/80 font-sans leading-relaxed text-lg">
              To be the premier destination in Nairobi for high-end nail and lash artistry, setting the gold standard for hygiene, creativity, and customer experience. We envision a space where every client feels deeply valued and uniquely beautiful.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors duration-500">
            <h2 className="text-3xl mb-6 text-brand-accent">Our Mission</h2>
            <p className="text-white/80 font-sans leading-relaxed text-lg">
              To deliver flawless, long-lasting beauty services through meticulous technique and premium products. We are committed to continuous education, empowering our artists, and transforming the beauty industry through our dedicated Academy.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
