import { motion } from "motion/react";
import { Search, PenTool, Rocket, BarChart } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discovery",
    desc: "We dive deep into your organization's needs, culture, and goals to understand the gaps.",
    color: "text-brand-teal",
    bg: "bg-brand-teal/10"
  },
  {
    icon: PenTool,
    title: "Design",
    desc: "We create customized learning paths and content tailored to your specific context.",
    color: "text-brand-green",
    bg: "bg-brand-green/10"
  },
  {
    icon: Rocket,
    title: "Delivery",
    desc: "Our expert facilitators deliver engaging, high-impact sessions that drive real change.",
    color: "text-brand-orange",
    bg: "bg-brand-orange/10"
  },
  {
    icon: BarChart,
    title: "Impact Analysis",
    desc: "We measure the results and provide insights on the ROI and long-term impact.",
    color: "text-brand-navy",
    bg: "bg-brand-navy/10"
  }
];

export function ServicesProcess() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-brand-navy mb-4 font-display">
            How We <span className="text-brand-teal">Deliver</span> Results
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Our structured approach ensures every program is aligned with your business objectives.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0" />
          
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative z-10 text-center"
            >
              <div className={`w-20 h-20 rounded-3xl ${step.bg} flex items-center justify-center mx-auto mb-6 shadow-lg border border-white`}>
                <step.icon className={`w-10 h-10 ${step.color}`} />
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-2 font-display">{step.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
