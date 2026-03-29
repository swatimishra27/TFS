import { motion } from "motion/react";
import { CheckCircle2, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discover & Diagnose",
    subtitle: "Understanding the 'Why'",
    color: "text-brand-teal",
    bg: "bg-brand-teal/5",
    items: [
      "Stakeholder consultations (CXOs, leaders, teams).",
      "Identify business challenges & capability gaps.",
      "Define clear success metrics.",
    ],
    outcome: "Clarity on problems and goals.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
  },
  {
    number: "02",
    title: "Design & Co-Create",
    subtitle: "Personalizing the Journey",
    color: "text-brand-green",
    bg: "bg-brand-green/10",
    items: [
      "Tailored solutions aligned to business context.",
      "Flexible learning & execution formats.",
      "Demo sessions & walkthroughs.",
    ],
    outcome: "Customized solution built with you.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
  },
  {
    number: "03",
    title: "Deliver & Enable",
    subtitle: "Connecting Theory to Practice",
    color: "text-brand-orange",
    bg: "bg-brand-orange/5",
    items: [
      "Highly engaging, application-focused interventions.",
      "Skill-building, not event-based learning.",
      "Flexible delivery formats.",
    ],
    outcome: "Engaged learners and real capability building.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
  },
  {
    number: "04",
    title: "Reinforce & Measure",
    subtitle: "Ensuring Lasting Impact",
    color: "text-brand-navy",
    bg: "bg-brand-navy/5",
    items: [
      "30-60-90 day retention plans.",
      "Refresher sessions & group connects.",
      "Coaching & continuous support.",
    ],
    outcome: "Measurable ROI and sustained behavior change.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
  },
];

export function Process() {
  return (
    <section className="py-24 bg-white overflow-hidden" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-brand-navy mb-8 font-display leading-[1.1]">
              Our <span className="text-brand-green italic font-serif">Step-by-Step</span> Process
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed font-medium">
              We've refined our process to ensure that every learning intervention is strategic, impactful, and measurable.
            </p>
          </motion.div>
        </div>

        <div className="space-y-32">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2 relative">
                <div className={`absolute -inset-4 rounded-[3rem] ${step.bg} -rotate-2 scale-105`} />
                <div className="relative h-[400px] sm:h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent" />
                  <div className="absolute bottom-8 left-8">
                    <div className={`text-6xl font-black text-white/20 font-display mb-2`}>
                      {step.number}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 space-y-8">
                <div>
                  <div className={`text-sm font-black uppercase tracking-widest mb-4 ${step.color}`}>
                    Step {step.number}
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-black text-brand-navy mb-4 font-display">
                    {step.title}
                  </h3>
                  <p className="text-xl text-brand-green font-serif italic mb-6">
                    {step.subtitle}
                  </p>
                </div>

                <ul className="space-y-4">
                  {step.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <CheckCircle2 className={`w-6 h-6 flex-shrink-0 mt-0.5 ${step.color}`} />
                      <span className="text-slate-700 font-semibold leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className={`p-8 rounded-3xl border-2 border-slate-100 shadow-sm transition-all duration-300 hover:shadow-xl ${step.bg}`}>
                  <div className={`text-xs font-black uppercase tracking-wider mb-3 ${step.color}`}>
                    Expected Outcome
                  </div>
                  <div className="text-lg text-brand-navy font-bold leading-relaxed">
                    {step.outcome}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
