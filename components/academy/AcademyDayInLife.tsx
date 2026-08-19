"use client";
import React, { useRef, useEffect } from "react";

export default function AcademyDayInLife() {
  const videoRef = useRef<HTMLVideoElement>(null);

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
      { threshold: 0.3 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full bg-white py-24 px-8 md:px-12 font-preahvihear border-t border-black/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">

        <div className="w-full md:w-1/3">
          <h2 className="text-4xl md:text-5xl text-black mb-4">What Happens in Class</h2>
          <p className="text-sm text-black/70 mb-6 font-sans">
            A day-in-the-life walkthrough. See the studio, meet the instructors, and watch our students turn theory into flawless practice.
          </p>
          <a
            href="https://wa.me/254715702251?text=Hi%20Stylish%20Nails%2C%20I%20would%20like%20to%20apply%20for%20the%20Academy%20Training!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-brand-accent text-white px-8 py-4 rounded-full font-medium hover:bg-black transition-colors duration-300 mt-4"
          >
            Apply Now
          </a>
        </div>

        {/* Video Container */}
        <div className="w-full md:w-2/3 aspect-video rounded-2xl overflow-hidden relative group bg-black shadow-md">
          <video
            ref={videoRef}
            src="/teachers_visibly_training_while_captured.mp4"
            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
            muted
            loop
            playsInline
            preload="metadata"
          />
        </div>
      </div>
    </section>
  );
}
