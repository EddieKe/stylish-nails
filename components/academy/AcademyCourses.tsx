"use client";
import React from "react";

export default function AcademyCourses() {
  const courses = [
    {
      title: "Nail Technician Mastery",
      description: "From natural nail care to advanced hard gel extensions and intricate art. Master the techniques that build a loyal clientele.",
      duration: "4 Weeks",
      classSize: "Max 4 Students",
      kit: "Premium Starter Kit Included",
      certification: "Stylish Nails Certified",
      icon: "💅",
      image: "/nail_training_session.webp",
    },
    {
      title: "Lash Extension Artistry",
      description: "Learn the precision of Classic, Volume, and Hybrid lashing. Focus on eye mapping, isolation, and safe application.",
      duration: "3 Weeks",
      classSize: "Max 4 Students",
      kit: "Professional Lash Kit Included",
      certification: "Stylish Nails Certified",
      icon: "👁️",
      image: "/lash_training_team.webp",
    }
  ];

  return (
    <section id="courses" className="w-full bg-brand-black py-24 px-8 md:px-12 font-preahvihear">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl text-white mb-6">Courses</h2>
          <div className="w-full h-[1px] bg-white/10"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="bg-brand-plum rounded-2xl overflow-hidden flex flex-col border border-white/5"
            >
              <div className="w-full h-48 md:h-64 relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm p-2 rounded-full">
                  <span className="text-2xl">{course.icon}</span>
                </div>
              </div>

              <div className="p-8 md:p-12 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-2xl md:text-3xl text-white mb-4 leading-tight">{course.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-10 font-sans">
                    {course.description}
                  </p>
                </div>

                <div className="border-t border-white/10 pt-8 grid grid-cols-2 gap-y-6 gap-x-4 mb-8">
                  <div>
                    <p className="text-white/40 text-[10px] uppercase tracking-wider mb-1">Duration</p>
                    <p className="text-white text-xs">{course.duration}</p>
                  </div>
                  <div>
                    <p className="text-white/40 text-[10px] uppercase tracking-wider mb-1">Class Size</p>
                    <p className="text-white text-xs">{course.classSize}</p>
                  </div>
                  <div>
                    <p className="text-white/40 text-[10px] uppercase tracking-wider mb-1">Kit</p>
                    <p className="text-white text-xs">{course.kit}</p>
                  </div>
                  <div>
                    <p className="text-white/40 text-[10px] uppercase tracking-wider mb-1">Certification</p>
                    <p className="text-white text-xs">{course.certification}</p>
                  </div>
                </div>

                <a
                  href={`https://wa.me/254715702251?text=Hi%20Stylish%20Nails%2C%20I%20would%20like%20to%20apply%20for%20the%20${encodeURIComponent(course.title)}%20course!`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full bg-brand-accent text-white py-4 rounded-xl font-medium hover:bg-black transition-colors duration-300"
                >
                  Apply Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
