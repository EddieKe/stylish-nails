import Hero from "../components/sections/Hero";
import Range from "../components/sections/Range";
import WatchTheWork from "../components/sections/WatchTheWork";
import AcademyTeaser from "../components/sections/AcademyTeaser";
import Shop from "../components/sections/Shop";
import MeetTheTeam from "../components/sections/MeetTheTeam";
import Testimonials from "../components/sections/Testimonials";
import FunMoments from "../components/sections/FunMoments";
import GetDirections from "../components/sections/GetDirections";
import CTA from "../components/sections/CTA";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Range />
      <WatchTheWork />
      <AcademyTeaser />
      <Shop />
      <MeetTheTeam />
      <Testimonials />
      <FunMoments />
      <GetDirections />
      <CTA />
      <Footer />
    </>
  );
}
