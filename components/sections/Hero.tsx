// src/components/sections/Hero.tsx
import Navbar from "../layout/Navbar"

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col bg-white font-preahvihear">
      <Navbar />

      <div className="flex-1 flex flex-col justify-end px-12 md:px-24 pb-24">
        <p
          className="text-black w-fit mb-3"
          style={{ fontSize: "17px", letterSpacing: "0.02em" }}
        >
          NAILS . LASHES. BROWS. ONE STUDIO
        </p>

        <h1
          className="text-black leading-[0.95] mb-2"
          style={{ fontSize: "50px", letterSpacing: "0.02em" }}
        >
          Your Next set<br />
          starts{" "}
          <span className="relative inline-block px-4">
            <span className="absolute inset-0 border-2 border-black rounded-[50%]"></span>
            <span className="relative text-brand-accent">here...</span>
          </span>
        </h1>

        <div className="flex flex-col md:flex-row md:items-end justify-between mt-6 gap-6 md:gap-4">
          <p
            className="text-black max-w-xs"
            style={{ fontSize: "11px", letterSpacing: "0.02em" }}
          >
            Precision Nail art, volume lashes and brow care, done properly, every time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <a
              href="https://wa.me/YOUR_NUMBER_HERE?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment"
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