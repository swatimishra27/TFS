import { About } from "../components/About";
import { PageHero } from "../components/PageHero";
import { AboutSessions } from "../components/AboutSessions";
import { AboutValues } from "../components/AboutValues";
import { AboutTeam } from "../components/AboutTeam";
import { AboutTestimonials } from "../components/AboutTestimonials";
import { AboutHistory } from "../components/AboutHistory";
import { AboutGallery } from "../components/AboutGallery";
import { AboutContact } from "../components/AboutContact";
import { AboutStats } from "../components/AboutStats";
import { AboutVideo } from "../components/AboutVideo";
import { AboutBlog } from "../components/AboutBlog";

export function AboutPage() {
  return (
    <div className="pt-24 min-h-screen">
      <PageHero 
        title="About" 
        subtitle="Us" 
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
      />
      <About />
      <AboutStats />
      <AboutValues />
      <AboutVideo />
      <AboutHistory />
      <AboutSessions />
      <AboutGallery />
      <AboutTeam />
      <AboutTestimonials />
      <AboutBlog />
      <AboutContact />
    </div>
  );
}
