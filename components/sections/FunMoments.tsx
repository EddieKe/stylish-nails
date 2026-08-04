"use client";

const moments = [
  {
    title: "Nails",
    caption: "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
    videoSrc: "/videos/fun-nails.mp4",
  },
  {
    title: "Lash & Brow",
    caption: "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
    videoSrc: "/videos/fun-lash.mp4",
  },
  {
    title: "Academy",
    caption: "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
    videoSrc: "/videos/fun-academy.mp4",
  },
  {
    title: "Shop",
    caption: "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
    videoSrc: "/videos/fun-shop.mp4",
  },
];

export default function FunMoments() {
  return (
    <section className="relative py-24 px-8 md:px-16 lg:px-24 bg-brand-black overflow-hidden flex flex-col items-center justify-center min-h-screen">
      {/* Subtle Dot Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      
      <div className="relative z-10 text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-white text-4xl md:text-5xl font-normal font-preahvihear leading-snug">
          More than a service,<br />a studio you&apos;ll want<br />to hang around
        </h2>
      </div>

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl mx-auto">
        {moments.map((moment, idx) => (
          <div 
            key={idx}
            className="group relative aspect-[3/5] w-full max-w-[300px] mx-auto rounded-2xl overflow-hidden bg-gradient-to-b from-[#311C28] to-[#180A12] border border-white/5 shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer flex flex-col justify-end"
          >
            <video 
              src={moment.videoSrc}
              muted
              loop
              autoPlay
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
            />
            
            {/* Mimic video playing UI - Top Right Play Icon */}
            <div className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/10 group-hover:bg-brand-accent/50 transition-colors duration-300">
              <svg className="w-3 h-3 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
