import { FAQ } from "../components/FAQ";
import { PageHero } from "../components/PageHero";
import { TrustedBy } from "../components/TrustedBy";

export function FAQPage() {
  return (
    <div className="pt-24 min-h-screen">
      <PageHero 
        title="Help" 
        subtitle="Center" 
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
      />
      <TrustedBy />
      <FAQ />
    </div>
  );
}
