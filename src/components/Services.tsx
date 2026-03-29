import { motion } from "motion/react";
import { BookOpen, Users, ShieldCheck, Star, Award, HeartHandshake } from "lucide-react";

const services = [
  {
    icon: Star,
    title: "1. Talent Strategy & Acquisition",
    color: "text-brand-teal",
    bg: "bg-brand-teal/10",
    items: [
      "Talent Strategy & Workforce Planning",
      "Executive Recruitment",
      "CXO / VP / HOD Hiring",
      "Top Talent Sourcing & Market Mapping",
      "Hiring Process Consulting",
    ],
  },
  {
    icon: BookOpen,
    title: "2. Leadership & Capability Development",
    color: "text-brand-green",
    bg: "bg-brand-green/20",
    items: [
      "Executive Coaching (1:1 for senior leaders)",
      "Leadership Development Programs (across levels)",
      "Leadership Assessments",
      "Train-the-Trainer Programs: Product / Process, Sales, Behavioral / Soft Skills, Master Behavioral Trainer",
    ],
  },
  {
    icon: Users,
    title: "3. Organizational Effectiveness & Culture",
    color: "text-brand-orange",
    bg: "bg-brand-orange/10",
    items: [
      "Women in Leadership: First-Time, Middle-Level, Executive",
      "Diversity, Equity, Inclusion & Belonging (DEIB): Overcoming Unconscious Bias, Customized DEIB Programs",
      "Culture & Behavioral Interventions",
      "Employee Experience Enhancement",
    ],
  },
  {
    icon: ShieldCheck,
    title: "4. Learning, Assessment & Compliance Ecosystem",
    color: "text-brand-navy",
    bg: "bg-brand-navy/10",
    items: [
      "Learning Solutions: Workshop Content, E-Learning Modules, Content Library",
      "Assessments & Evaluations: Psychometric, 360° Feedback, Assessment & Development Centres, Behavioral Event Interviewing",
      "Compliance Training: POSH, POCSO, EHS, AML, ABAC",
    ],
  },
  {
    icon: HeartHandshake,
    title: "5. Global Payroll & Workforce Operations",
    color: "text-brand-teal",
    bg: "bg-brand-teal/10",
    items: [
      "Multi-Country Payroll Management",
      "Statutory Compliance & Regulatory Adherence",
      "Payroll Processing & Administration",
      "Employee Lifecycle & Payroll Support",
      "Scalable Workforce Solutions",
    ],
  },
];

export function Services() {
  return (
    <section className="py-24 bg-slate-50/90 backdrop-blur-md relative overflow-hidden" id="services">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-teal/5 rounded-full mix-blend-multiply filter blur-[128px] -translate-y-1/2 -translate-x-1/2" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-brand-navy mb-6 font-display">
            End-to-End Talent & Organization Solutions
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            We don't offer isolated services — we solve business problems through integrated talent, leadership, and organizational solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-[2rem] p-8 border-2 border-slate-100 hover:border-brand-teal/20 hover:shadow-xl hover:shadow-brand-teal/5 transition-all duration-300 group"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${service.bg}`}>
                <service.icon className={`w-7 h-7 ${service.color}`} />
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-4 font-display">{service.title}</h3>
              <ul className="space-y-3">
                {service.items.map((item, i) => {
                  const [boldPart, ...rest] = item.split(":");
                  return (
                    <li key={i} className="text-slate-600 text-sm leading-relaxed flex items-start">
                      <span className={`mr-2 mt-1 ${service.color}`}>•</span>
                      <span>
                        {rest.length > 0 ? (
                          <>
                            <strong className="font-bold text-slate-800">{boldPart}:</strong>
                            {rest.join(":")}
                          </>
                        ) : (
                          item
                        )}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
