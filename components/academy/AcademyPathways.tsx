import React from "react";

export default function AcademyPathways() {
  const pathways = [
    {
      title: "Go Independent",
      description: "We equip you with the business fundamentals, a premium starter kit, and referrals for your first clients so you can launch your own freelance career with confidence.",
      icon: "ti-rocket",
      image: "/lady_nail_student_filing.webp",
    },
    {
      title: "Join Our Team",
      description: "Standout graduates get fast-tracked for open positions at Stylish Nails. Start your career in an established, high-end studio environment.",
      icon: "ti-building-store",
      image: "/locs_lash_student.webp",
    },
    {
      title: "Keep Learning",
      description: "Education never stops. Return for advanced masterclasses in nail art, mega-volume lashing, or business scaling at exclusive alumni rates.",
      icon: "ti-books",
      image: "/nail_training_session1.webp",
    }
  ];

  return (
    <section className="w-full bg-brand-black py-24 px-8 md:px-12 font-preahvihear">
      <div className="max-w-6xl mx-auto">
        
        <div className="mb-16 max-w-2xl">
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Certified is the start, <br />
            not the finish.
          </h2>
          <p className="text-sm text-white/70 font-sans">
            Graduates leave with more than a certificate — a path to their own clients, a route into freelance or mobile work, or the option to apply for an open seat at Stylish Nails itself.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pathways.map((pathway, idx) => (
            <div 
              key={idx} 
              className="rounded-2xl bg-brand-plum border border-white/5 flex flex-col h-full overflow-hidden"
            >
              <div className="w-full h-48 relative">
                <img src={pathway.image} alt={pathway.title} className="w-full h-full object-cover" />
                <div className="absolute -bottom-5 left-8 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg">
                  <i className={`ti ${pathway.icon} text-xl text-brand-plum`}></i>
                </div>
              </div>
              <div className="p-8 pt-10 flex flex-col flex-grow">
                <h3 className="text-xl text-white mb-3">{pathway.title}</h3>
                <p className="text-white/60 text-sm font-sans flex-grow">
                  {pathway.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
