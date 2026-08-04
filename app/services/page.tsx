import ServicesHero from "../../components/services/ServicesHero";
import ServicesTabs from "../../components/services/ServicesTabs";
import Footer from "../../components/layout/Footer";

export default function ServicesPage() {
  return (
    <div className="bg-[#180a1a] min-h-screen">
      <ServicesHero />
      <ServicesTabs />
      <Footer />
    </div>
  );
}
