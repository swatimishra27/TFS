import { Services } from "../components/Services";
import { PageHero } from "../components/PageHero";
import { ServicesProcess } from "../components/ServicesProcess";
import { ServicesBenefits } from "../components/ServicesBenefits";
import { ServicesCTA } from "../components/ServicesCTA";
import { WhoWeHelp } from "../components/WhoWeHelp";

export function ServicesPage() {
  return (
    <div className="pt-24 min-h-screen">
      <PageHero 
        title="Our" 
        subtitle="Services" 
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
      />
      <WhoWeHelp />
      <Services />
      <ServicesBenefits />
      <ServicesProcess />
      <ServicesCTA />
    </div>
  );
}
