import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
      {/* Glowing Background Blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-teal/20 rounded-full mix-blend-multiply filter blur-[100px] animate-blob" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-green/20 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-2000" />
      <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-brand-orange/20 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-4000" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-semibold text-brand-navy bg-white mb-8 shadow-sm ring-1 ring-inset ring-slate-200">
              <span className="w-2 h-2 rounded-full bg-brand-orange mr-2 animate-pulse"></span>
              Talent Management & Organizational Strategy
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-brand-navy mb-8 leading-[1.1] font-display">
              Forging Talent for <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-green">High-Performance</span> Organizations
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
              At Talent Forge, we don't just deliver training—we design consulting-driven, personalized learning journeys that unlock human potential, strengthen leadership, and deliver measurable business impact.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-brand-navy hover:bg-brand-teal transition-all duration-300 rounded-full group shadow-lg shadow-brand-navy/20 hover:shadow-brand-teal/30 hover:-translate-y-0.5"
              >
                Book a Discovery Call
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-brand-navy bg-white border-2 border-slate-200 hover:border-brand-teal hover:text-brand-teal transition-colors rounded-full"
              >
                Explore Services
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative lg:ml-auto w-full max-w-lg lg:max-w-none"
          >
            <div className="aspect-[4/5] sm:aspect-[3/2] lg:aspect-[4/5] rounded-[2.5rem] overflow-hidden relative shadow-2xl shadow-brand-navy/10 border-8 border-white">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
                alt="Team collaborating in a modern office"
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-navy/60 via-brand-teal/20 to-transparent mix-blend-multiply" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
