"use client";

import { useEffect, useRef, useCallback } from "react";

const moments = [
  {
    title: "Nail Coating",
    caption: "Precision coat application — smooth, even, flawless.",
    videoSrc: "/waingo_coat_application.mp4",
  },
  {
    title: "Lash Training",
    caption: "Students and teachers in a hands-on lash training session.",
    videoSrc: "/students_teachers_lash_training_session.mp4",
  },
  {
    title: "Lash Application",
    caption: "A student perfecting lash placement, one extension at a time.",
    videoSrc: "/student_with_burgundy_braidsl_lash_application.mp4",
  },
  {
    title: "Top Coat Finish",
    caption: "The final seal — gel top coat for a mirror-like shine.",
    videoSrc: "/top_coat.mp4",
  },
];

export default function FunMoments() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const setVideoRef = useCallback(
    (el: HTMLVideoElement | null, i: number) => {
      videoRefs.current[i] = el;
    },
    []
  );

  // IntersectionObserver: only play videos when they're visible on screen
  useEffect(() => {
    const videos = videoRefs.current.filter(Boolean) as HTMLVideoElement[];
    if (videos.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            // Pause all other videos first
            videos.forEach((v) => {
              if (v !== video) v.pause();
            });
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.3 }
    );

    videos.forEach((video) => observer.observe(video));
    return () => observer.disconnect();
  }, []);

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

      <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full max-w-7xl mx-auto">
        {moments.map((moment, idx) => (
          <div 
            key={idx}
            className="group relative aspect-[3/5] w-full rounded-2xl overflow-hidden bg-gradient-to-b from-[#311C28] to-[#180A12] border border-white/5 shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer flex flex-col justify-end"
          >
            <video 
              ref={(el) => setVideoRef(el, idx)}
              src={moment.videoSrc}
              muted
              loop
              playsInline
              preload="metadata"
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
            />
            
            {/* Bottom gradient + caption */}
            <div className="relative z-10 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 sm:p-5 pt-12">
              <span className="text-white text-xs sm:text-sm font-semibold font-preahvihear block mb-1">
                {moment.title}
              </span>
              <p className="text-white/60 text-[10px] sm:text-xs leading-relaxed">
                {moment.caption}
              </p>
            </div>

            {/* Play Icon */}
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

