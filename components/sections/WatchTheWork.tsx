// src/components/sections/WatchTheWork.tsx
"use client";

import { useEffect, useRef, useCallback, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Clip {
  title: string;
  caption: string;
  src: string;
  accent: string;
}

const clips: Clip[] = [
  {
    title: "Lash Academy",
    caption: "A student showcasing precision lash application technique.",
    src: "/burgundy_student_lash_application.mp4",
    accent: "#D93B93",
  },
  {
    title: "Nail Training",
    caption: "Base coat application — building the perfect foundation.",
    src: "/nail_student_base_coat.mp4",
    accent: "#92400E",
  },
  {
    title: "Top Coat Finish",
    caption: "Close-up gel top coat application for a flawless shine.",
    src: "/top_coat.mp4",
    accent: "#EAB308",
  },
  {
    title: "Guided Lash Training",
    caption: "Teacher Mwihaki guiding a student through lash techniques.",
    src: "/teacher_mwihaki_locs_student.mp4",
    accent: "#22C55E",
  },
];

export default function WatchTheWork() {
  // Outer wrapper that ScrollTrigger pins — keeps React's DOM tree intact
  const wrapperRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const activeIndexRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const dotRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const setCardRef = useCallback(
    (el: HTMLDivElement | null, i: number) => {
      cardRefs.current[i] = el;
    },
    []
  );

  const setVideoRef = useCallback(
    (el: HTMLVideoElement | null, i: number) => {
      videoRefs.current[i] = el;
    },
    []
  );

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
    const videos = videoRefs.current.filter(Boolean) as HTMLVideoElement[];
    if (!wrapper || cards.length === 0) return;

    const totalCards = cards.length;
    const SPREAD_OFFSET = 14;
    const SPREAD_ROTATE = 3;

    // --- Use gsap.context() for safe React cleanup ---
    const ctx = gsap.context(() => {
      // Helper: position all cards into the stack based on activeIndex
      const layoutStack = (activeIdx: number, animate = true) => {
        cards.forEach((card, i) => {
          let depth: number;
          if (i < activeIdx) {
            depth = totalCards + (i - activeIdx);
          } else {
            depth = i - activeIdx;
          }

          const isActive = depth === 0;
          const zIndex = totalCards - depth;
          const xOffset = depth * SPREAD_OFFSET;
          const rotation = depth * SPREAD_ROTATE;
          const scale = 1 - depth * 0.04;
          const opacity = depth <= 2 ? 1 : 0;

          gsap.to(card, {
            x: xOffset,
            rotation: rotation,
            scale: Math.max(scale, 0.88),
            opacity,
            zIndex,
            duration: animate ? 0.5 : 0,
            ease: "power2.out",
            overwrite: "auto",
          });

          // Play/pause videos
          const video = videos[i];
          if (video) {
            if (isActive) {
              video.currentTime = 0;
              video.play().catch(() => {});
            } else {
              video.pause();
            }
          }
        });
      };

      // Initial layout — no animation
      layoutStack(0, false);
      if (videos[0]) videos[0].play().catch(() => {});

      const stepsCount = totalCards - 1;

      ScrollTrigger.create({
        trigger: wrapper,
        start: "top top",
        end: `+=${stepsCount * 100}%`,
        pin: true,
        pinSpacing: true,
        scrub: 0.4,
        onUpdate: (self) => {
          const raw = self.progress * stepsCount;
          const newIndex = Math.round(raw);
          const clamped = Math.min(Math.max(newIndex, 0), stepsCount);

          if (clamped !== activeIndexRef.current) {
            activeIndexRef.current = clamped;
            setActiveIndex(clamped);
            layoutStack(clamped, true);

            // Animate progress dots
            dotRefs.current.forEach((dot, di) => {
              if (!dot) return;
              gsap.to(dot, {
                backgroundColor: di === clamped ? clips[di].accent : "#D1D5DB",
                scale: di === clamped ? 1.5 : 1,
                duration: 0.3,
                ease: "power2.out",
              });
            });
          }
        },
      });
    }, wrapper); // <-- scope context to the wrapper element

    return () => ctx.revert(); // Clean teardown — restores DOM & kills all tweens/triggers
  }, []);

  return (
    <div ref={wrapperRef} id="watch-the-work">
      <section
        className="relative min-h-screen flex flex-col md:flex-row items-center justify-center bg-white px-6 md:px-16 py-20 gap-12 md:gap-16 overflow-hidden font-preahvihear"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(217,59,147,0.08) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      >
        {/* Left — Text */}
        <div className="w-full md:w-2/5 max-w-lg z-10">
          <p
            className="text-brand-accent text-xs tracking-widest uppercase mb-4"
            style={{ letterSpacing: "0.15em" }}
          >
            Behind the scenes
          </p>
          <h2 className="text-3xl md:text-5xl font-normal leading-tight mb-4">
            See it happen, not just the finished&nbsp;set
          </h2>
          <p className="text-sm text-black/60 leading-relaxed max-w-sm">
            Every set is built by hand — here&apos;s what that actually looks
            like. Scroll to explore the craft.
          </p>
          {/* Progress dots */}
          <div className="flex items-center gap-3 mt-8">
            {clips.map((clip, i) => (
              <span
                key={clip.title}
                ref={(el) => { dotRefs.current[i] = el; }}
                className="w-2 h-2 rounded-full"
                style={{
                  backgroundColor: i === activeIndex ? clip.accent : "#D1D5DB",
                  transform: i === activeIndex ? "scale(1.5)" : "scale(1)",
                }}
              />
            ))}
          </div>
        </div>

        {/* Right — Card Stack */}
        <div className="relative w-[300px] h-[440px] sm:w-[340px] sm:h-[480px] md:w-[380px] md:h-[540px]">
          {clips.map((clip, i) => (
            <div
              key={clip.title}
              ref={(el) => setCardRef(el, i)}
              className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl will-change-transform"
              style={{ transformOrigin: "bottom left" }}
            >
              {/* Video */}
              <video
                ref={(el) => setVideoRef(el, i)}
                src={clip.src}
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
              />

              {/* Bottom gradient overlay + text */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 pt-16">
                <span
                  className="inline-block text-[10px] tracking-widest uppercase px-3 py-1 rounded-full mb-3 text-white"
                  style={{ backgroundColor: clip.accent }}
                >
                  {clip.title}
                </span>
                <p className="text-white/80 text-xs leading-relaxed">
                  {clip.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}