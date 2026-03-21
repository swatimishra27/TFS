import { motion } from "motion/react";
import { BookOpen, Users, ShieldCheck, Star, Award, HeartHandshake } from "lucide-react";

const services = [
  {
    icon: Star,
    title: "Leadership Development",
    color: "text-brand-teal",
    bg: "bg-brand-teal/10",
    items: [
      "Executive Coaching: One-on-one coaching for senior leaders.",
      "Leadership Assessment: Evaluate styles, capabilities, and readiness.",
      "Development Programs: Structured programs across different levels.",
      "Train the Trainer Programs: Equip trainers to inspire and deliver impact.",
    ],
  },
  {
    icon: BookOpen,
    title: "Learning Content & Delivery",
    color: "text-brand-green",
    bg: "bg-brand-green/20",
    items: [
      "Workshop Content: Contextualized, engaging material.",
      "E-Learning Content: Digital modules that are accessible and scalable.",
      "Content Library: A ready-to-use repository of structured training.",
    ],
  },
  {
    icon: Award,
    title: "Assessments & Evaluations",
    color: "text-brand-orange",
    bg: "bg-brand-orange/10",
    items: [
      "Psychometric Assessments: Gain deep insights into behavior and potential.",
      "360° Feedback: Collect multi-level feedback to identify growth opportunities.",
      "Assessment & Development Centres: Structured evaluation programs.",
      "Behavioral Event Interviewing: Assess past behavior for predicting future performance.",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Compliance Training",
    color: "text-brand-navy",
    bg: "bg-brand-navy/10",
    items: [
      "POSH: Create safe, respectful workplaces.",
      "POCSO: Mandatory awareness for child safety.",
      "EHS: Promote safety-first culture.",
      "AML & ABAC: Ensure financial integrity and ethical practices.",
    ],
  },
  {
    icon: Users,
    title: "Women in Leadership",
    color: "text-brand-teal",
    bg: "bg-brand-teal/10",
    items: [
      "First-Time Women Leaders: Support stepping into leadership roles.",
      "Middle-Level Women Leaders: Build influence, resilience, and career advancement.",
      "Executive Women Leaders: Empower senior women leaders to navigate complexity.",
    ],
  },
  {
    icon: HeartHandshake,
    title: "Diversity, Equity, Inclusion & Belonging",
    color: "text-brand-green",
    bg: "bg-brand-green/20",
    items: [
      "Overcoming Unconscious Bias: Awareness and tools to identify hidden biases.",
      "Customized DEIB Programs: Tailored workshops to foster inclusion and equity.",
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
            Our Approach to Learning & Development
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            We believe training should never be a one-day event. Every program is <strong className="font-bold text-brand-navy">consulting-driven, personalized, and impact-focused.</strong>
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

        <div className="bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-navy rounded-[2.5rem] p-10 sm:p-16 text-center text-white relative overflow-hidden shadow-2xl shadow-brand-navy/20">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl font-black mb-10 font-display">Why Our Services Work</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="font-bold text-brand-teal text-lg">Consulting-Led Design</div>
              <div className="font-bold text-brand-green text-lg">Learner-First Focus</div>
              <div className="font-bold text-brand-orange text-lg">Retention & ROI</div>
              <div className="font-bold text-brand-teal text-lg">Trusted Expertise</div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-brand-navy bg-white hover:bg-brand-teal hover:text-white transition-colors duration-300 rounded-full shadow-lg"
              >
                Book a Discovery Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
