import { motion } from "motion/react";
import { Building2, UserCircle } from "lucide-react";

export function WhoWeHelp() {
  return (
    <section className="py-24 bg-slate-50/90 backdrop-blur-md relative overflow-hidden" id="who-we-help">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-brand-navy mb-6 font-display">
            Who We Help
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Whether you're an organization looking to scale or a professional aiming to level up, we have the right solutions for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="group relative overflow-hidden rounded-[2.5rem] bg-brand-navy p-10 sm:p-12 text-white shadow-2xl shadow-brand-navy/20"
          >
            <div className="absolute inset-0 opacity-40 group-hover:opacity-50 transition-opacity mix-blend-overlay">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
                alt="Office building"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy/90 to-brand-teal/40" />
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8 border border-white/20 group-hover:scale-110 transition-transform">
                <Building2 className="w-8 h-8 text-brand-teal" />
              </div>
              <h3 className="text-3xl font-black mb-4 font-display">Organizations</h3>
              <p className="text-lg text-slate-300 mb-8 flex-grow leading-relaxed">
                Build future-ready leaders, strengthen culture, and optimize talent for growth.
              </p>
              <a
                href="#services"
                className="inline-flex items-center text-brand-teal font-bold hover:text-white transition-colors"
              >
                Explore Organizational Services &rarr;
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="group relative overflow-hidden rounded-[2.5rem] bg-brand-teal p-10 sm:p-12 text-white shadow-2xl shadow-brand-teal/20"
          >
            <div className="absolute inset-0 opacity-40 group-hover:opacity-50 transition-opacity mix-blend-overlay">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80"
                alt="Professional working"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-brand-teal via-brand-teal/90 to-brand-green/60" />
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8 border border-white/30 group-hover:scale-110 transition-transform">
                <UserCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-black mb-4 font-display">Professionals</h3>
              <p className="text-lg text-white/80 mb-8 flex-grow leading-relaxed">
                Enhance skills, boost confidence, and accelerate career growth.
              </p>
              <a
                href="#services"
                className="inline-flex items-center text-white font-bold hover:text-brand-navy transition-colors"
              >
                Explore Professional Coaching &rarr;
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
