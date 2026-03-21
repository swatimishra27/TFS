import { motion } from "motion/react";

const stats = [
  { value: "15+", label: "Years of Experience", color: "text-brand-teal" },
  { value: "50k+", label: "Professionals Empowered", color: "text-brand-green" },
  { value: "98%", label: "Client Retention Rate", color: "text-brand-orange" },
  { value: "120+", label: "Corporate Partners", color: "text-white" },
];

export function Stats() {
  return (
    <section className="py-20 bg-brand-navy/90 backdrop-blur-md relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full bg-brand-teal/10 rounded-full mix-blend-screen filter blur-[100px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 divide-x-0 md:divide-x divide-white/10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center px-4"
            >
              <div className={`text-4xl sm:text-5xl lg:text-6xl font-black mb-2 font-display ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-sm sm:text-base text-slate-300 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
