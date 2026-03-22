import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function ServicesCTA() {
  return (
    <section className="py-24 bg-brand-navy relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-teal/5 rounded-full mix-blend-multiply filter blur-[128px] translate-x-1/2" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-8 font-display">
            Ready to <span className="text-brand-teal italic font-serif">Forge</span> Your Future?
          </h2>
          <p className="text-slate-400 text-lg mb-12 leading-relaxed">
            Let's discuss how our learning solutions can help your organization unlock its full potential.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-brand-navy bg-brand-teal hover:bg-white transition-all duration-300 rounded-full shadow-xl shadow-brand-teal/20 group"
            >
              Book a Discovery Call
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/process"
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white border-2 border-white/20 hover:bg-white/10 transition-all duration-300 rounded-full"
            >
              Learn Our Process
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
