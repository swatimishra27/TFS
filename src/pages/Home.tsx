import { Hero } from "../components/Hero";
import { TrustedBy } from "../components/TrustedBy";
import { Stats } from "../components/Stats";
import { PromiseSection } from "../components/PromiseSection";
import { WhoWeHelp } from "../components/WhoWeHelp";
import { Testimonials } from "../components/Testimonials";

export function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Stats />
      <PromiseSection />
      <WhoWeHelp />
      <Testimonials />
    </>
  );
}
