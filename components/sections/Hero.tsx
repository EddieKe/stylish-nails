// src/components/sections/Hero.tsx
import Navbar from "../layout/Navbar"

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col font-preahvihear overflow-hidden bg-black">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/landscape_overview.mp4" type="video/mp4" />
      </video>

      {/* Subtle Cinematic Overlays - reduced for maximum video visibility */}
      <div className="absolute inset-0 bg-black/10 z-0 pointer-events-none"></div>
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-0 pointer-events-none"></div>

      <Navbar />

      <div className="relative z-10 flex-1 flex flex-col justify-end px-12 md:px-24 pb-24">
        <p
          className="text-white/90 w-fit mb-3"
          style={{ fontSize: "17px", letterSpacing: "0.02em" }}
        >
          NAILS . LASHES. BROWS. ONE STUDIO
        </p>

        <h1
          className="text-white leading-[0.95] mb-2 drop-shadow-md"
          style={{ fontSize: "50px", letterSpacing: "0.02em" }}
        >
          Your Next set<br />
          starts{" "}
          <span className="relative inline-block px-4">
            <span className="absolute inset-0 border-2 border-white/30 rounded-[50%]"></span>
            <span className="relative text-brand-accent">here...</span>
          </span>
        </h1>

        <div className="flex flex-col md:flex-row md:items-end justify-between mt-6 gap-6 md:gap-4">
          <p
            className="text-white/80 max-w-xs font-light leading-relaxed"
            style={{ fontSize: "11px", letterSpacing: "0.02em" }}
          >
            Precision Nail art, volume lashes and brow care, done properly, every time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <a
              href="https://wa.me/+25715702251?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment"
              className="bg-brand-accent text-white px-6 py-3 rounded-lg text-center"
              style={{ fontSize: "13px" }}
            >
              Book Your Appointment
            </a>
            <a
              href="#watch-the-work"
              className="bg-brand-plum text-white px-6 py-3 rounded-lg text-center"
              style={{ fontSize: "13px" }}
            >
              See Our Work
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}