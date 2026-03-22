import { motion } from "motion/react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "The sessions for our students were eye-opening. They didn't just learn skills; they gained a new perspective on their future careers.",
    author: "Dr. Robert Miller",
    role: "University Dean",
    image: "https://i.pravatar.cc/150?u=robert"
  },
  {
    text: "Talent Forge helped our leadership team align our vision with our people's potential. The impact on our culture was immediate.",
    author: "Amanda Lee",
    role: "CEO, TechStart",
    image: "https://i.pravatar.cc/150?u=amanda"
  }
];

export function AboutTestimonials() {
  return (
    <section className="py-24 bg-brand-navy relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-teal/10 rounded-full blur-3xl -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl -ml-48 -mb-48" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white/5 backdrop-blur-lg p-10 rounded-[2.5rem] border border-white/10"
            >
              <Quote className="w-12 h-12 text-brand-teal mb-6 opacity-50" />
              <p className="text-xl text-slate-200 italic mb-8 leading-relaxed font-serif">
                "{t.text}"
              </p>
              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.author} className="w-14 h-14 rounded-full border-2 border-brand-teal" />
                <div>
                  <h4 className="text-white font-bold font-display">{t.author}</h4>
                  <p className="text-brand-teal text-sm">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
