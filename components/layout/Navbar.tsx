// src/components/sections/Navbar.tsx

export default function Navbar() {
  return (
    <nav className="fixed top-6 left-12 right-12 md:left-24 md:right-24 flex items-center justify-between px-8 py-4 bg-brand-plum/90 backdrop-blur-sm shadow-lg rounded-2xl font-preahvihear z-50">
      <span className="text-white font-normal text-lg tracking-tight">
        STYLISH NAILS
      </span>
      <div className="hidden md:flex items-center gap-8 text-white text-sm">
        <a href="/services">Services</a>
        <a href="/academy">Academy</a>
        <a href="#shop">Shop</a>
        <a href="#about">About Us</a>
      </div>
      <a
        href="https://wa.me/YOUR_NUMBER_HERE"
        className="bg-brand-accent text-white text-sm px-5 py-2 rounded-full"
      >
        Book Now
      </a>
    </nav>
  )
}