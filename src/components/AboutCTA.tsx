import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function AboutCTA() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-brand-teal rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-navy/10 rounded-full -ml-32 -mb-32 blur-3xl" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-brand-navy mb-8 font-display">
              Ready to <span className="text-white italic font-serif">Forge</span> Your Future?
            </h2>
            <p className="text-brand-navy/80 text-xl mb-12 max-w-2xl mx-auto font-medium">
              Whether you're a student looking for a breakthrough or a professional seeking to upskill, we're here to guide you.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-10 py-5 bg-brand-navy text-white font-bold rounded-full hover:bg-brand-navy-light transition-all transform hover:scale-105 shadow-xl"
              >
                Get Started Now
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/services"
                className="inline-flex items-center gap-2 px-10 py-5 bg-white text-brand-navy font-bold rounded-full hover:bg-slate-50 transition-all transform hover:scale-105 shadow-lg"
              >
                Explore Services
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
