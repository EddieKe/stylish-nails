// src/components/sections/AcademyTeaser.tsx

export default function AcademyTeaser() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-brand-black via-brand-plum to-brand-berry px-12 md:px-24 py-24 overflow-hidden">
      <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto w-full">
        <div className="h-[600px] rounded-2xl bg-gradient-to-br from-brand-plum to-brand-deep shadow-xl" />

        <div>
          <h2 className="text-white text-4xl md:text-5xl font-normal leading-tight mb-3 font-preahvihear">
            Learn the craft.
            <br />
            Build the career.
          </h2>

          <p className="text-brand-blush text-sm max-w-md mb-6">
            Our nail and lash training programs don't stop at certification — we help you figure out what comes next, whether that's your own clients, your own studio, or a seat on our team.
          </p>

          <a
            href="/academy"
            className="inline-block bg-brand-plum border border-white/20 text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-brand-berry transition"
          >
            Explore the Academy
          </a>
        </div>
      </div>
    </section>
  );
}