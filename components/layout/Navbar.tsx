"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-4 right-4 md:left-12 md:right-12 lg:left-24 lg:right-24 bg-brand-plum/90 backdrop-blur-sm shadow-lg rounded-2xl font-preahvihear z-50 transition-all duration-300">
      <div className="flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/stylish_transparent_logo.png"
            alt="Stylish Nails Logo"
            width={120}
            height={40}
            className="h-8 w-auto object-contain"
            priority
          />
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-white text-sm">
          <Link href="/services" className="hover:text-brand-accent transition-colors">Services</Link>
          <Link href="/academy" className="hover:text-brand-accent transition-colors">Academy</Link>
          <Link href="/#shop" className="hover:text-brand-accent transition-colors">Shop</Link>
          <Link href="/about" className="hover:text-brand-accent transition-colors">About Us</Link>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/+254715702251"
            className="bg-brand-accent text-white text-xs md:text-sm px-4 md:px-5 py-2 rounded-full hover:brightness-110 transition-all"
          >
            Book Now
          </a>
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 px-6 py-4 flex flex-col gap-4 text-white">
          <Link href="/services" className="hover:text-brand-accent transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
          <Link href="/academy" className="hover:text-brand-accent transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Academy</Link>
          <Link href="/#shop" className="hover:text-brand-accent transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Shop</Link>
          <Link href="/about" className="hover:text-brand-accent transition-colors" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
        </div>
      )}
    </nav>
  )
}