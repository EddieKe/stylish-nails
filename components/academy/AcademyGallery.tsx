"use client";
import React, { useRef, useEffect, useCallback } from "react";

export default function AcademyGallery() {
  const media = [
    { type: "video", src: "/students_lash_training_session.mp4" },
    { type: "image", src: "/teacher_man_u_nail_student_session.webp" },
    { type: "image", src: "/350_lash_student.webp" },
    { type: "video", src: "/teacher_mwihaki_locs_student.mp4" },
    { type: "image", src: "/nail_training_session.webp" },
    { type: "video", src: "/lash_training_session_landscape_appllication_view.mp4" },
    { type: "image", src: "/man_u_nail_student_applying_gel.webp" },
    { type: "image", src: "/lash_training_team.webp" },
    { type: "video", src: "/female_nail_student.mp4" },
    { type: "image", src: "/locs_lash_student.webp" },
    { type: "image", src: "/lady_nail_student_filing.webp" },
    { type: "video", src: "/nail_student_nail_shaping.mp4" },
  ];

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const setVideoRef = useCallback((el: HTMLVideoElement | null, idx: number) => {
    videoRefs.current[idx] = el;
  }, []);

  useEffect(() => {
    const videos = videoRefs.current.filter(Boolean) as HTMLVideoElement[];
    if (videos.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
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
    <section className="w-full bg-white py-24 px-4 sm:px-8 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl text-black mb-4 font-preahvihear">See It in Action</h2>
          <p className="text-sm text-black/70 font-sans">
            Real students, real training. Get a glimpse of the hands-on environment you&apos;ll be learning in at the Stylish Nails Academy.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {media.map((item, idx) => (
            <div key={idx} className="break-inside-avoid relative rounded-2xl overflow-hidden shadow-sm group">
              {item.type === "video" ? (
                <div className="relative">
                  <video
                    ref={(el) => setVideoRef(el, idx)}
                    src={item.src}
                    className="w-full h-auto rounded-2xl object-cover"
                    loop
                    muted
                    playsInline
                    preload="metadata"
                  />
                  {/* Play Icon Indicator */}
                  <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/10 group-hover:bg-brand-accent/80 transition-colors duration-300">
                    <svg className="w-3 h-3 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              ) : (
                <img
                  src={item.src}
                  alt={`Training highlight ${idx + 1}`}
                  className="w-full h-auto rounded-2xl object-cover hover:scale-105 transition-transform duration-500"
                />
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://wa.me/254715702251?text=Hi%20Stylish%20Nails%2C%20I%20would%20like%20to%20apply%20for%20the%20Academy%20Training!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-brand-accent text-white px-8 py-4 rounded-full font-medium hover:bg-black transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Apply Now
          </a>
        </div>
      </div>
    </section>
  );
}
