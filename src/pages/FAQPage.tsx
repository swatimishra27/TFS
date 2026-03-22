import { FAQ } from "../components/FAQ";
import { PageHero } from "../components/PageHero";

export function FAQPage() {
  return (
    <div className="pt-24 min-h-screen">
      <PageHero 
        title="Common" 
        subtitle="Questions" 
        image="https://images.unsplash.com/photo-1454165833767-027ffea9e41b?auto=format&fit=crop&q=80"
      />
      <FAQ />
    </div>
  );
}
