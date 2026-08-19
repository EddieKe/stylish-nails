export default function FounderThoughtPiece() {
  return (
    <section className="relative w-full py-24 px-8 md:px-12 bg-white font-preahvihear">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        
        {/* Founder Image */}
        <div className="w-full md:w-5/12">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="/founder.webp" 
              alt="Daniel Macharia - Founder" 
              className="w-full h-full object-cover object-top"
            />
            {/* Elegant overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-8 left-8">
              <p className="text-white text-3xl mb-1">Daniel Macharia</p>
              <p className="text-brand-accent text-sm tracking-widest uppercase">Founder</p>
            </div>
          </div>
        </div>

        {/* Thought Piece Content */}
        <div className="w-full md:w-7/12">
          <i className="ti-quote text-6xl text-brand-plum/20 mb-6 block"></i>
          
          <h2 className="text-4xl md:text-5xl text-brand-black mb-8 leading-tight">
            "We didn't just want to open a salon. We wanted to elevate a craft."
          </h2>
          
          <div className="space-y-6 text-brand-black/70 font-sans text-lg leading-relaxed">
            <p>
              When I first looked at the beauty industry in Nairobi, I saw immense talent but a lack of structured, premium environments that truly respected both the client and the artist. Stylish Nails was born out of a desire to bridge that gap.
            </p>
            <p>
              Our philosophy is simple: never compromise on quality. Whether it's the meticulous prep work for a fresh set of acrylics or the delicate isolation in lash application, every step matters. We believe that luxury is not just about the final look; it's about the entire experience—the ambiance, the hygiene, and the connection.
            </p>
            <p>
              That same dedication drives our Academy. I want to empower the next generation of technicians to not only master their skills but to understand their worth and build thriving businesses. We are building more than a studio; we are building a community of excellence.
            </p>
          </div>
          
          <div className="mt-12 flex items-center gap-6 border-t border-black/10 pt-8">
            <img 
              src="/founder.webp" 
              alt="Daniel Macharia" 
              className="w-16 h-16 rounded-full object-cover object-top grayscale"
            />
            <div>
              <p className="font-semibold text-brand-black">Daniel Macharia</p>
              <p className="text-sm text-brand-black/60 font-sans">Visionary & Founder</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
