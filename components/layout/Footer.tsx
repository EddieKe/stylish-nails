"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const links = [
    { name: "Services", href: "/services" },
    { name: "Academy", href: "/academy" },
    { name: "Shop", href: "#shop" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-[#0b030c] text-white pt-20 pb-10 px-8 md:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-w-sm">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/stylish_transparent_logo.png"
                alt="Stylish Nails Logo"
                width={150}
                height={50}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              Nails, Lashes, Brows, One Studio. Elevate your beauty experience with our premium services tailored just for you.
            </p>
          </div>
          
          <div className="flex gap-16">
            <div className="flex flex-col gap-4">
              <h4 className="font-preahvihear text-lg mb-2">Explore</h4>
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white/60 hover:text-brand-accent transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            <div className="flex flex-col gap-4">
              <h4 className="font-preahvihear text-lg mb-2">Socials</h4>
              <a href="#" className="text-white/60 hover:text-brand-accent transition-colors text-sm">Instagram</a>
              <a href="#" className="text-white/60 hover:text-brand-accent transition-colors text-sm">Facebook</a>
              <a href="#" className="text-white/60 hover:text-brand-accent transition-colors text-sm">TikTok</a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Stylish Nails. All rights reserved.
          </p>
          <div className="flex gap-4 text-white/40 text-xs">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      <div className="mt-20 w-full flex justify-center items-center group cursor-pointer relative" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <h1 className="text-[12vw] leading-none font-preahvihear text-white/90 whitespace-nowrap tracking-tighter flex items-center gap-4 transition-transform duration-500 group-hover:scale-105">
          STYLISH NAILS
          <i className="ti ti-arrow-up-right text-[8vw] text-brand-accent transition-transform duration-500 group-hover:-translate-y-4 group-hover:translate-x-4"></i>
        </h1>
      </div>
    </footer>
  );
}
