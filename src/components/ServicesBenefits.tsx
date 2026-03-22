import { motion } from "motion/react";
import { CheckCircle } from "lucide-react";

const benefits = [
  "Personalized learning paths for every individual.",
  "Consulting-led design that aligns with business goals.",
  "Expert facilitators with deep industry experience.",
  "Measurable impact and ROI for every program.",
  "Engaging, interactive content that drives retention.",
  "Flexible delivery models: In-person, virtual, or hybrid."
];

export function ServicesBenefits() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-black text-brand-navy mb-6 font-display">
              Why Choose Our <span className="text-brand-teal italic font-serif">Learning</span> Solutions?
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              We don't just provide training; we provide solutions that drive real behavioral change and business outcomes.
            </p>
            <div className="grid sm:grid-cols-1 gap-4">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-slate-200 shadow-sm"
                >
                  <CheckCircle className="w-6 h-6 text-brand-teal flex-shrink-0" />
                  <span className="text-brand-navy font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" 
                alt="Our Impact"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 p-8 bg-brand-teal text-white rounded-3xl shadow-xl max-w-xs">
              <div className="text-4xl font-black mb-2 font-display">95%</div>
              <p className="text-sm font-medium opacity-90">Learner satisfaction rate across all our programs.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
