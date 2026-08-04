"use client";
import React, { useState, useEffect } from "react";

export interface ServiceBlockProps {
  title: string;
  description: string;
  price: string;
  images: string[];
  whatsappMessage: string;
  accent: string;
}

const ServiceBlock: React.FC<ServiceBlockProps> = ({
  title,
  description,
  price,
  images,
  whatsappMessage,
  accent,
}) => {
  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImageIdx((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images]);

  const whatsappHref = `https://wa.me/YOUR_NUMBER_HERE?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div
      className="group rounded-2xl overflow-hidden bg-brand-plum border border-white/10 flex flex-col transition-all duration-300"
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 0 40px -10px ${accent}`;
        e.currentTarget.style.borderColor = accent;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
      }}
    >
      <div className="relative w-full h-64 bg-black/40">
        {images && images.length > 0 ? (
          images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`${title} image ${idx + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                idx === currentImageIdx ? "opacity-100" : "opacity-0"
              }`}
            />
          ))
        ) : (
          <div
            className="w-full h-full"
            style={{ background: `linear-gradient(135deg, ${accent}33, transparent)` }}
          />
        )}
        <span
          className="absolute top-4 right-4 text-white text-xs font-medium px-3 py-1 rounded-full"
          style={{ backgroundColor: accent }}
        >
          {price}
        </span>
      </div>

      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          <h4 className="text-xl font-preahvihear text-white mb-2">{title}</h4>
          <p className="text-white/60 text-sm leading-relaxed">{description}</p>
        </div>
        <a
          href={whatsappHref}
          className="mt-6 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-medium text-white transition-all"
          style={{ backgroundColor: accent }}
        >
          Book This Service →
        </a>
      </div>
    </div>
  );
};

export default ServiceBlock;