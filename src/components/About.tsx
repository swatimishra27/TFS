import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

const missions = [
  "Make a real shift in learners' lives.",
  "Help talents discover and reach their fullest potential.",
  "Transform learning into business outcomes that drive growth and resilience.",
  "Support organizations in building future-ready, agile workforces.",
];

const differences = [
  { title: "Consulting-Driven Learning", desc: "Start with discovery & need analysis.", color: "text-brand-teal" },
  { title: "Learner-First Mindset", desc: "Personalized and contextual programs.", color: "text-brand-green" },
  { title: "Impact Beyond Training", desc: "Retention planners & post-learning support.", color: "text-brand-orange" },
  { title: "Trust & Transparency", desc: "Demo sessions & content walkthroughs upfront.", color: "text-brand-navy" },
];

export function About() {
  return (
    <section className="py-24 bg-white/90 backdrop-blur-md border-y border-slate-200/50" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-brand-navy mb-6 font-display">
              Who We Are
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              At <strong className="text-brand-navy font-bold">Talent Forge</strong>, we believe people are the cornerstone of success. We are a strategic talent consultancy dedicated to helping organizations and professionals unlock potential, align talent with vision, and turn learning into measurable business growth.
            </p>
            
            <h3 className="text-2xl font-bold text-brand-navy mb-6 font-display">Our Mission</h3>
            <ul className="space-y-4 mb-12">
              {missions.map((mission, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-brand-teal mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 leading-relaxed font-medium">{mission}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-brand-navy hover:bg-brand-teal transition-colors rounded-full shadow-lg shadow-brand-navy/20"
            >
              Partner With Us
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-50 rounded-[2.5rem] p-8 sm:p-12 shadow-sm border-2 border-slate-100 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-teal/5 rounded-full mix-blend-multiply filter blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-orange/5 rounded-full mix-blend-multiply filter blur-3xl" />
            
            <h3 className="text-2xl font-bold text-brand-navy mb-8 relative z-10 font-display">Our Difference</h3>
            <div className="space-y-8 relative z-10">
              {differences.map((diff, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-center border-b border-slate-200 pb-6 last:border-0 last:pb-0">
                  <div className={`${diff.color} font-bold text-lg sm:w-1/2 mb-2 sm:mb-0 pr-4 font-display`}>
                    {diff.title}
                  </div>
                  <div className="text-slate-600 sm:w-1/2 font-medium">
                    {diff.desc}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
