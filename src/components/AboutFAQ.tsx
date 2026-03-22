import { motion } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  { question: "What is Talent Forge?", answer: "Talent Forge is a strategic talent consultancy dedicated to helping organizations and professionals unlock potential." },
  { question: "Who do you serve?", answer: "We serve university students, mid-to-senior level professionals, and organizations looking to build future-ready workforces." },
  { question: "How do you measure impact?", answer: "We measure success by your growth and the measurable business outcomes our programs drive." },
  { question: "Do you offer digital learning?", answer: "Yes, we have a digital learning platform to reach a global audience." }
];

export function AboutFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-brand-navy mb-4 font-display">
            Common <span className="text-brand-teal">Questions</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-bold text-brand-navy font-display">{faq.question}</span>
                {openIndex === i ? <Minus className="w-5 h-5 text-brand-teal" /> : <Plus className="w-5 h-5 text-brand-teal" />}
              </button>
              {openIndex === i && (
                <div className="px-8 pb-6 text-slate-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
