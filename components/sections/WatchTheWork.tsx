// src/components/sections/WatchTheWork.tsx
"use client";

import { useEffect, useRef } from "react";

const clips = [
  {
    title: "Nails",
    caption: "Builder gel and acrylic application, start to finish.",
    src: "/videos/nails-process.mp4",
    poster: "/images/nails-poster.jpg",
    color: "#92400E",
  },
  {
    title: "Lash & Brow",
    caption: "Volume fanning, one lash at a time.",
    src: "/videos/lash-process.mp4",
    poster: "/images/lash-poster.jpg",
    color: "#EAB308",
  },
  {
    title: "Academy",
    caption: "Students learning the same techniques we use in-studio.",
    src: "/videos/academy-process.mp4",
    poster: "/images/academy-poster.jpg",
    color: "#22C55E",
  },
  {
    title: "Shop",
    caption: "The products, prepped and ready before every appointment.",
    src: "/videos/shop-process.mp4",
    poster: "/images/shop-poster.jpg",
    color: "#D93B93",
  },
];

export default function WatchTheWork() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const frontIndex = clips.length - 1;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center bg-white px-8 md:px-16 py-16 grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto overflow-hidden"
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(217,59,147,0.15) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    >
      <div>
        <h2 className="text-4xl md:text-5xl font-normal mb-3 font-preahvihear">
          See it happen, not just the finished set
        </h2>
        <p className="text-sm text-black/70">
          Every set is built by hand, here's what that actually looks like.
        </p>
      </div>

      <div className="relative h-[520px] w-[360px] mx-auto">
        {clips.map((clip, i) => {
          const isFront = i === frontIndex;
          return (
            <div
              key={clip.title}
              data-card-index={i}
              className="absolute inset-0 rounded-2xl overflow-hidden shadow-lg"
              style={{
                backgroundColor: clip.color,
                transform: `rotate(${(i - 1.5) * 4}deg) translateX(${i * 12}px)`,
                zIndex: i,
              }}
            >
              {isFront && (
                <>
                  <video
                    ref={videoRef}
                    src={clip.src}
                    poster={clip.poster}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <h3 className="text-white text-xl font-normal mb-1">{clip.title}</h3>
                    <p className="text-white/80 text-xs">{clip.caption}</p>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}