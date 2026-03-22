import { motion } from "motion/react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Talent Forge completely transformed our leadership pipeline. Their consulting-first approach meant the program was perfectly tailored to our specific cultural challenges.",
    author: "Sarah Jenkins",
    role: "CHRO, TechFlow Innovations",
    color: "bg-brand-teal/10",
    iconColor: "text-brand-teal"
  },
  {
    quote: "The DEIB workshops were eye-opening. They didn't just deliver a presentation; they facilitated deep, meaningful conversations that have genuinely shifted our company culture.",
    author: "Marcus Chen",
    role: "VP of People, Global Retail",
    color: "bg-brand-green/10",
    iconColor: "text-brand-green"
  },
  {
    quote: "As a first-time executive, the one-on-one coaching I received was invaluable. It gave me the strategic frameworks and confidence I needed to navigate complex organizational changes.",
    author: "Elena Rodriguez",
    role: "Chief Operating Officer",
    color: "bg-brand-orange/10",
    iconColor: "text-brand-orange"
  }
];

export function Testimonials() {
  return (
    <section className="pt-24 pb-24 bg-white relative overflow-hidden" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-brand-navy mb-6 font-display">
            Impact That Speaks for Itself
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Don't just take our word for it. Hear from the organizations and leaders who have experienced the Talent Forge difference.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`p-8 rounded-3xl border-2 border-slate-100 relative ${testimonial.color}`}
            >
              <Quote className={`w-10 h-10 mb-6 opacity-50 ${testimonial.iconColor}`} />
              <p className="text-slate-700 font-medium leading-relaxed mb-8 relative z-10">
                "{testimonial.quote}"
              </p>
              <div>
                <div className="font-bold text-brand-navy font-display text-lg">
                  {testimonial.author}
                </div>
                <div className="text-sm text-slate-600 font-medium">
                  {testimonial.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
