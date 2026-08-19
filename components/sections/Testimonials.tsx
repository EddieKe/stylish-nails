// src/components/sections/Testimonials.tsx
"use client";

import { useState, useEffect, useCallback } from "react";

const testimonials = [
  {
    id: 1,
    name: "Wanjiku Kariuki",
    role: "Regular Client",
    content: "The best nail studio in Nairobi. My acrylics lasted a whole month without lifting! The attention to detail is unmatched.",
    avatar: "/avatar_wanjiku_1787062172028.png",
  },
  {
    id: 2,
    name: "Omondi Otieno",
    role: "Academy Student",
    content: "Took the beginner lash course and now I have my own studio. Highly recommend their hands-on training.",
    avatar: "/avatar_omondi_1787062183532.png",
  },
  {
    id: 3,
    name: "Achieng Onyango",
    role: "Bride",
    content: "They did my bridal party's nails and lashes. Flawless execution and great customer service on my big day.",
    avatar: "/avatar_achieng_1787062194833.png",
  },
  {
    id: 4,
    name: "Kipchoge Mutai",
    role: "Shop Customer",
    content: "Their cuticle oil is magic. I buy it every time I drop by. Keeps my hands looking fresh between sets.",
    avatar: "/avatar_kipchoge_1787062205543.png",
  },
  {
    id: 5,
    name: "Nanjala Wekesa",
    role: "Loyal Client",
    content: "I never trust anyone else with my brows. Stylish Nails sets the standard for brow shaping and lamination.",
    avatar: "/avatar_nanjala_1787062216501.png",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const getCardStyles = (index: number) => {
    const total = testimonials.length;
    let diff = (index - activeIndex) % total;
    if (diff > 2) diff -= total;
    if (diff < -2) diff += total;

    let transform = "";
    let zIndex = 0;
    let opacity = 1;

    // Mobile scaling adjustments can be handled by scaling the whole container, 
    // but these are the base desktop translations.
    if (diff === 0) {
      transform = "translateX(0) translateY(0) scale(1) rotate(0deg)";
      zIndex = 30;
    } else if (diff === 1) {
      transform = "translateX(140px) translateY(30px) scale(0.9) rotate(12deg)";
      zIndex = 20;
    } else if (diff === -1) {
      transform = "translateX(-140px) translateY(30px) scale(0.9) rotate(-12deg)";
      zIndex = 20;
    } else if (diff === 2) {
      transform = "translateX(260px) translateY(80px) scale(0.8) rotate(24deg)";
      zIndex = 10;
    } else if (diff === -2) {
      transform = "translateX(-260px) translateY(80px) scale(0.8) rotate(-24deg)";
      zIndex = 10;
    } else {
      transform = "translateX(0) translateY(150px) scale(0.5) rotate(0deg)";
      opacity = 0;
      zIndex = 0;
    }

    return { transform, zIndex, opacity };
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-white px-8 md:px-24 py-24 overflow-hidden">
      
      <div className="text-center mb-20 relative z-40">
        <h2 className="text-black text-4xl md:text-5xl font-normal font-preahvihear">
          Don&apos;t take our word<br />for it
        </h2>
      </div>

      {/* Fan Container */}
      <div className="relative w-full max-w-sm mx-auto h-[400px] md:h-[450px] scale-75 sm:scale-90 md:scale-100 flex-shrink-0">
        {testimonials.map((testimonial, index) => {
          const { transform, zIndex, opacity } = getCardStyles(index);
          
          return (
            <div
              key={testimonial.id}
              className="absolute inset-0 bg-gradient-to-b from-brand-plum to-brand-deep rounded-2xl p-8 flex flex-col justify-between shadow-2xl transition-all duration-700 ease-in-out border border-white/5 cursor-pointer"
              style={{
                transform,
                zIndex,
                opacity,
                transformOrigin: "bottom center",
              }}
              onClick={() => setActiveIndex(index)}
            >
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 overflow-hidden bg-brand-accent/20">
                    <img 
                      src={testimonial.avatar} 
                      alt={`${testimonial.name} avatar`} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div>
                    <h3 className="text-white text-lg font-medium">{testimonial.name}</h3>
                    <p className="text-brand-blush text-xs">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-white/80 text-sm leading-relaxed">
                  &quot;{testimonial.content}&quot;
                </p>
              </div>
              
              <div className="flex gap-1 text-brand-vibrant">
                {/* 5 Stars */}
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Controls */}
      <div className="flex justify-center items-center gap-6 mt-16 relative z-40">
        <button 
          onClick={prev}
          className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center text-black hover:bg-black hover:text-white transition"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          onClick={next}
          className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center text-black hover:bg-black hover:text-white transition"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

    </section>
  );
}
