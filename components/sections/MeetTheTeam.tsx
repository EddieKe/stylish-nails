import React from 'react';

const teamMembers = [
  {
    name: "Daniel Macharia",
    role: "Senior Nail Artist",
    expertise: "Acrylics & 3D Art",
    image: "/images/team-daniel.jpg" 
  },
  {
    name: "Wa Ingo",
    role: "Lash Technician",
    expertise: "Volume & Classic Extensions",
    image: "/images/team-ingo.jpg"
  },
  {
    name: "Sam",
    role: "Nail Technician",
    expertise: "Gel Manicures & Pedicures",
    image: "/images/team-sam.jpg"
  },
  {
    name: "Waigwa",
    role: "Nail Technician",
    expertise: "Gel & Acrylic Extensions",
    image: "/images/team-waigwa.jpg"
  }
];

export default function MeetTheTeam() {
  return (
    <section className="relative py-24 px-8 md:px-16 lg:px-24 overflow-hidden bg-[#fafafa] flex flex-col items-center justify-center min-h-screen">
      {/* Subtle Dot Pattern Background */}
      <div 
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(#000000 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      
      <div className="relative z-10 flex flex-col items-center mb-16 text-center">
        <h2 className="text-4xl md:text-5xl text-brand-black font-preahvihear mb-4">
          The hands behind the work.
        </h2>
        <button className="bg-brand-plum text-white text-xs md:text-sm px-6 py-2.5 rounded-full font-medium hover:bg-opacity-90 transition-colors shadow-md">
          View All Team Members
        </button>
      </div>

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 w-full max-w-7xl mx-auto">
        {teamMembers.map((member, idx) => (
          <div key={idx} className="flex flex-col items-center group cursor-pointer">
            {/* Circular Card */}
            <div className="relative w-64 h-64 md:w-72 md:h-72 mb-8 rounded-full shadow-[0_15px_30px_rgba(0,0,0,0.2)] overflow-hidden bg-[#2a162b] transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] flex items-center justify-center">
              {/* Image Placeholder */}
              <svg className="w-16 h-16 text-white opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            
            {/* Text Outside Card */}
            <div className="text-center transition-transform duration-500 group-hover:-translate-y-1">
              <h3 className="text-xl text-brand-black font-semibold font-preahvihear mb-1">
                {member.name}
              </h3>
              <p className="text-sm text-brand-plum font-medium mb-1">
                {member.role}
              </p>
              <p className="text-xs text-gray-500">
                {member.expertise}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
