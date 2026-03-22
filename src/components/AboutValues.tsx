import { motion } from "motion/react";
import { Heart, Shield, Zap, Target } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Empathy First",
    desc: "We listen to your challenges before offering solutions, ensuring every program is deeply human-centric."
  },
  {
    icon: Shield,
    title: "Integrity",
    desc: "Transparency is our foundation. We provide honest assessments and deliver exactly what we promise."
  },
  {
    icon: Zap,
    title: "Agility",
    desc: "The world changes fast. Our learning models are designed to be flexible and future-ready."
  },
  {
    icon: Target,
    title: "Impact Driven",
    desc: "We measure success by your growth. If it doesn't lead to a positive outcome, we haven't done our job."
  }
];

export function AboutValues() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {values.map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-slate-50 hover:bg-brand-navy group transition-all duration-300 border border-slate-100"
            >
              <div className="w-12 h-12 bg-brand-teal/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-teal transition-colors">
                <value.icon className="w-6 h-6 text-brand-teal group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-4 group-hover:text-white transition-colors font-display">
                {value.title}
              </h3>
              <p className="text-slate-600 group-hover:text-slate-300 transition-colors leading-relaxed">
                {value.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
