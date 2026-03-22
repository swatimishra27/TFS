import { motion } from "motion/react";
import { Lightbulb, Target, Zap, BarChart3 } from "lucide-react";

const pillars = [
  {
    title: "Consulting-First",
    description: "We don't sell off-the-shelf courses. We diagnose your specific organizational needs before recommending any learning path.",
    icon: Lightbulb,
    color: "text-brand-teal",
    bg: "bg-brand-teal/10"
  },
  {
    title: "Contextual Design",
    description: "Every case study, roleplay, and example is tailored to your industry and your team's real-world challenges.",
    icon: Target,
    color: "text-brand-green",
    bg: "bg-brand-green/10"
  },
  {
    title: "Active Learning",
    description: "Our sessions are high-energy and interactive. We prioritize 'doing' over 'listening' to ensure skill acquisition.",
    icon: Zap,
    color: "text-brand-orange",
    bg: "bg-brand-orange/10"
  },
  {
    title: "Measurable ROI",
    description: "We track progress through pre- and post-assessments, ensuring that the learning translates into business performance.",
    icon: BarChart3,
    color: "text-brand-navy",
    bg: "bg-brand-navy/10"
  }
];

export function ProcessMethodology() {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-brand-navy mb-8 font-display leading-tight">
              Our <span className="text-brand-teal italic font-serif">Philosophy</span> of Learning
            </h2>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed font-medium">
              We believe that training is an investment, not an expense. Our methodology is built on the principle that for learning to be effective, it must be strategic, contextual, and sustained.
            </p>
            <div className="space-y-6">
              <div className="p-6 bg-white rounded-3xl shadow-sm border border-slate-100">
                <p className="text-slate-700 italic font-serif text-lg">
                  "The goal of learning is not just knowledge, but action. We bridge the gap between knowing what to do and actually doing it in the workplace."
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-10 h-1 gap-1 bg-brand-teal rounded-full" />
                  <span className="text-sm font-bold text-brand-navy uppercase tracking-widest">Our Core Belief</span>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className={`w-14 h-14 rounded-2xl ${pillar.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <pillar.icon className={`w-7 h-7 ${pillar.color}`} />
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-3 font-display">
                  {pillar.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
