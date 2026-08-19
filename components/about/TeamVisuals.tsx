export default function TeamVisuals() {
  const teamImages = [
    "/founder.webp",
    "/nail_tech_2.webp",
    "/nail_tech9.webp",
    "/nail_tech1.webp",
    "/nail_tech2.webp",
    "/nail_tech3.webp",
    "/nail_tech_4.webp",
    "/nail_tech5.webp",
    "/nail_tech6.webp",
    "/nail_tech7.webp",
    "/nail_tech8.webp",
    "/lash_trainer.webp",
    "/lash_trainer1.webp",
    "/lash_trainer2.webp",
    "/lash_trainer_smile.webp",
    "/nail_trainer.webp",
    "/nail_trainer1.webp",
    "/lash_training_team1.webp",
    "/lash_training_team2.webp"
  ];

  return (
    <section className="relative w-full py-24 px-8 md:px-12 bg-[#fafafa] font-preahvihear overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-brand-black mb-4">
            The faces behind the magic.
          </h2>
          <p className="text-brand-black/60 font-sans">
            Our talented team of artists and technicians.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {teamImages.map((image, idx) => (
            <div 
              key={idx}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer shadow-lg bg-brand-plum"
            >
              <img 
                src={image} 
                alt={`Team member ${idx + 1}`}
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-brand-plum/20 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
