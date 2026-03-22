import { Process } from "../components/Process";
import { PageHero } from "../components/PageHero";
import { ProcessMethodology } from "../components/ProcessMethodology";
import { ProcessEngagement } from "../components/ProcessEngagement";
import { ProcessCTA } from "../components/ProcessCTA";

export function ProcessPage() {
  return (
    <div className="pt-24 min-h-screen">
      <PageHero 
        title="How We" 
        subtitle="Work" 
        image="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80"
      />
      <ProcessMethodology />
      <Process />
      <ProcessEngagement />
      <ProcessCTA />
    </div>
  );
}
