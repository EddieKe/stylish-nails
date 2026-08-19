import React from "react";

export default function AcademyHero() {
  return (
    <section className="relative w-full min-h-[90vh] bg-white pt-32 pb-16 px-8 md:px-12 flex flex-col justify-end overflow-hidden font-preahvihear">
      <div className="max-w-6xl mx-auto w-full relative z-10 flex flex-col gap-12 lg:gap-16">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-3xl">
            <p
              className="text-black w-fit mb-3 uppercase"
              style={{ fontSize: "17px", letterSpacing: "0.02em" }}
            >
              Stylish Nails Academy
            </p>
            <h1
              className="text-black leading-[0.95] mb-2"
              style={{ fontSize: "50px", letterSpacing: "0.02em" }}
            >
              Train with us. <br />
              <span className="relative inline-block px-4">
                <span className="absolute inset-0 border-2 border-black rounded-[50%]"></span>
                <span className="relative text-brand-accent">Then build something</span>
              </span> <br />
              with it.
            </h1>
          </div>

          <div className="max-w-xs">
            <p
              className="text-black/70"
              style={{ fontSize: "11px", letterSpacing: "0.02em" }}
            >
              Our Nail and Lash training programs are hands-on from day one — small classes, real clients, real tools, taught by the people who run this studio.
            </p>
          </div>
        </div>
        
        <div className="mt-4">
          <a
            href="https://wa.me/25715702251?text=Hi%20Stylish%20Nails%2C%20I%20would%20like%20to%20apply%20for%20the%20Academy%20Training!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-brand-accent text-white px-8 py-4 rounded-full font-medium hover:bg-black transition-colors duration-300"
          >
            Apply Now
          </a>
        </div>

        {/* Structured Media Collage */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 h-[50vh] md:h-[60vh]">
          <div className="md:col-span-2 rounded-2xl overflow-hidden relative group">
            <video
              src="/students_teachers_lash_training_session.mp4"
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
          <div className="hidden md:grid grid-rows-2 gap-4 h-full">
            <div className="rounded-2xl overflow-hidden relative group">
              <img
                src="/teacher_nail_student_session.webp"
                alt="Nail Training Session"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden relative group">
              <img
                src="/lash_training_session_landscape.webp"
                alt="Lash Training Session"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
