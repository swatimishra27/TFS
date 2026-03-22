import { motion } from "motion/react";

const stats = [
  { label: "Learners Impacted", value: "10k+" },
  { label: "Sessions Conducted", value: "500+" },
  { label: "Corporate Partners", value: "50+" },
  { label: "Student Success Rate", value: "95%" }
];

export function AboutStats() {
  return (
    <section className="py-24 bg-brand-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-black text-brand-teal mb-2 font-display">{stat.value}</div>
              <div className="text-slate-400 font-medium uppercase tracking-widest text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
