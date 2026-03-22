import { motion } from "motion/react";
import { CheckCircle2, ArrowRight } from "lucide-react";

const models = [
  {
    title: "Project-Based",
    subtitle: "Specific Solutions",
    description: "Ideal for organizations with a defined challenge or a specific training need.",
    features: ["Customized curriculum", "One-time or recurring sessions", "Pre- and post-assessments", "Post-training reinforcement"],
    color: "text-brand-teal",
    bg: "bg-brand-teal/5",
    border: "border-brand-teal/20"
  },
  {
    title: "Learning Retainer",
    subtitle: "Strategic Partnership",
    description: "A continuous partnership to build a long-term culture of learning and development.",
    features: ["Ongoing consulting", "Monthly training sessions", "Leadership coaching", "Continuous impact tracking"],
    color: "text-brand-green",
    bg: "bg-brand-green/10",
    border: "border-brand-green/30",
    featured: true
  },
  {
    title: "Executive Coaching",
    subtitle: "One-on-One Mastery",
    description: "Personalized development for high-potential leaders and executives.",
    features: ["Individual assessments", "Strategic goal setting", "Bi-weekly coaching calls", "Confidential environment"],
    color: "text-brand-orange",
    bg: "bg-brand-orange/5",
    border: "border-brand-orange/20"
  }
];

export function ProcessEngagement() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-teal/5 rounded-full mix-blend-multiply filter blur-[128px] translate-x-1/2" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-brand-navy mb-6 font-display">
            Ways to <span className="text-brand-green italic font-serif">Engage</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed font-medium">
            We offer flexible engagement models to suit your organization's unique needs and long-term goals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {models.map((model, index) => (
            <motion.div
              key={model.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative p-8 sm:p-12 rounded-[3rem] border-2 ${model.featured ? 'bg-brand-navy text-white border-brand-navy shadow-2xl scale-105' : 'bg-white text-brand-navy border-slate-100 shadow-sm'} transition-all duration-300 hover:-translate-y-2 group`}
            >
              {model.featured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-green text-brand-navy text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className={`text-2xl font-black mb-2 font-display ${model.featured ? 'text-white' : 'text-brand-navy'}`}>
                  {model.title}
                </h3>
                <p className={`text-sm font-bold uppercase tracking-widest ${model.featured ? 'text-brand-green' : model.color}`}>
                  {model.subtitle}
                </p>
              </div>

              <p className={`text-sm mb-10 leading-relaxed font-medium ${model.featured ? 'text-slate-300' : 'text-slate-600'}`}>
                {model.description}
              </p>

              <ul className="space-y-4 mb-12">
                {model.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 ${model.featured ? 'text-brand-green' : model.color}`} />
                    <span className={`text-sm font-semibold ${model.featured ? 'text-slate-200' : 'text-slate-700'}`}>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`inline-flex items-center justify-center w-full px-8 py-4 text-sm font-bold rounded-full transition-all duration-300 ${
                  model.featured 
                    ? 'bg-brand-green text-brand-navy hover:bg-white' 
                    : 'bg-brand-navy text-white hover:bg-brand-teal'
                }`}
              >
                Discuss This Model
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
