import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "Discover & Diagnose",
    color: "text-brand-teal",
    bg: "bg-brand-teal/5",
    items: [
      "Consult with your leadership and stakeholders.",
      "Understand your organizational challenges.",
      "Define clear learning objectives.",
    ],
    outcome: "A shared understanding of the problem and the goals.",
  },
  {
    number: "02",
    title: "Design & Co-Create",
    color: "text-brand-green",
    bg: "bg-brand-green/10",
    items: [
      "Tailored content aligned to your context.",
      "Choice of training styles (so you pick what works for your people).",
      "Demo sessions and walkthroughs for full transparency.",
    ],
    outcome: "A personalized learning journey designed for your audience.",
  },
  {
    number: "03",
    title: "Deliver & Engage",
    color: "text-brand-orange",
    bg: "bg-brand-orange/5",
    items: [
      "Interactive sessions that connect theory to practice.",
      "Programs designed for skill-building, not just 'event learning.'",
      "Flexible formats (modular, skill-focused, short-duration if needed).",
    ],
    outcome: "Learners are engaged, motivated, and empowered.",
  },
  {
    number: "04",
    title: "Reinforce & Measure",
    color: "text-brand-navy",
    bg: "bg-brand-navy/5",
    items: [
      "30, 45, 60, 90-day retention plans.",
      "Refresher sessions and group connects.",
      "Ongoing coaching and learner support.",
    ],
    outcome: "Lasting knowledge, measurable ROI, and visible change.",
  },
];

export function Process() {
  return (
    <section className="py-24 bg-white/90 backdrop-blur-md border-y border-slate-200/50" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-brand-navy mb-6 font-display">
            How We Work
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            <strong className="font-bold text-brand-navy">Our Philosophy:</strong> Training isn't just about what happens in the room — it's about the impact that lasts long after.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className={`text-7xl font-black mb-6 tracking-tighter transition-colors duration-300 opacity-20 group-hover:opacity-40 ${step.color} font-display`}>
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-6 font-display">
                {step.title}
              </h3>
              <ul className="space-y-4 mb-8">
                {step.items.map((item, i) => (
                  <li key={i} className="text-slate-600 text-sm leading-relaxed flex items-start">
                    <span className={`mr-2 mt-1 font-bold ${step.color}`}>•</span>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <div className={`p-6 rounded-2xl border-2 border-white shadow-sm transition-colors duration-300 ${step.bg}`}>
                <div className={`text-xs font-bold uppercase tracking-wider mb-2 ${step.color}`}>
                  Outcome
                </div>
                <div className="text-sm text-slate-800 font-semibold leading-relaxed">
                  {step.outcome}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
