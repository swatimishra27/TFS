import { motion } from "motion/react";
import { ArrowRight, Calendar } from "lucide-react";

export function ProcessCTA() {
  return (
    <section className="py-24 bg-brand-navy relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-teal/5 rounded-full mix-blend-multiply filter blur-[128px] translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-brand-green/5 rounded-full mix-blend-multiply filter blur-[128px] -translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-brand-teal via-brand-green to-brand-orange p-1 rounded-[3rem] shadow-2xl"
        >
          <div className="bg-brand-navy rounded-[2.9rem] p-12 md:p-24 text-center">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 font-display leading-[1.1]">
              Ready to <span className="text-brand-teal italic font-serif">Forge</span> Your Future?
            </h2>
            <p className="text-slate-300 text-xl mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
              Let's discuss how our consulting-driven approach can help your organization unlock its full potential.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-10 py-5 bg-brand-teal text-brand-navy font-bold rounded-full hover:bg-white transition-all transform hover:scale-105 shadow-xl shadow-brand-teal/20"
              >
                <Calendar className="w-5 h-5" />
                Book a Discovery Call
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/services"
                className="inline-flex items-center gap-2 px-10 py-5 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-all transform hover:scale-105 backdrop-blur-md border border-white/20"
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
