import { motion } from "motion/react";
import { Target, TrendingUp, Users } from "lucide-react";

const promises = [
  {
    title: "Consulting-First Approach",
    description: "We uncover your true challenges before designing solutions.",
    icon: Target,
    color: "text-brand-teal",
    bg: "bg-brand-teal/10",
    border: "group-hover:border-brand-teal/30"
  },
  {
    title: "Learning That Lasts",
    description: "Retention planners, post-session support, and coaching for measurable ROI.",
    icon: TrendingUp,
    color: "text-brand-green",
    bg: "bg-brand-green/20",
    border: "group-hover:border-brand-green/40"
  },
  {
    title: "Personalized Journeys",
    description: "Every program is tailored to your people, culture, and goals.",
    icon: Users,
    color: "text-brand-orange",
    bg: "bg-brand-orange/10",
    border: "group-hover:border-brand-orange/30"
  },
];

export function PromiseSection() {
  return (
    <section className="py-24 bg-white/90 backdrop-blur-md relative" id="promise">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-brand-navy mb-6 font-display">
            Our Promise
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Generic workshops end when the trainer leaves. We ensure learning continues to create real, lasting outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {promises.map((promise, index) => (
            <motion.div
              key={promise.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group bg-white p-8 rounded-3xl shadow-sm border-2 border-slate-100 transition-all duration-300 hover:shadow-xl ${promise.border} hover:-translate-y-1`}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${promise.bg}`}>
                <promise.icon className={`w-7 h-7 ${promise.color}`} />
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3 font-display">
                {promise.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {promise.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
