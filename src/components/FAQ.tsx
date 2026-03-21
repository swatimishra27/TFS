import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { cn } from "../lib/utils";

const faqs = [
  {
    question: "How is Talent Forge different from other training providers?",
    answer: "Most providers deliver one-size-fits-all sessions that end when the trainer leaves. At Talent Forge, we start with consulting to understand your unique challenges, co-create contextual programs, and ensure learning sticks with post-training reinforcement.",
  },
  {
    question: "How do you ensure ROI from training?",
    answer: "ROI is built into our process. We use discovery calls, alignment with business goals, customized content, and follow-up retention plans (30–90 days) to ensure knowledge is applied, measured, and tied to real outcomes.",
  },
  {
    question: "Do you offer demo sessions before we commit?",
    answer: "Yes. We provide a 30-minute content walkthrough and trainer style preview before the actual session. This ensures you know what to expect and can select the delivery style best suited for your audience.",
  },
  {
    question: "What if our people don’t have time for long workshops?",
    answer: "We understand time is limited. That’s why we design modular, skill-focused sessions and create flexible learning journeys that fit into your employees’ schedules — without losing depth or impact.",
  },
  {
    question: "Can your programs be tailored to our industry or challenges?",
    answer: "Absolutely. Every program is co-created with your leadership and stakeholders. We customize content and delivery to address your exact business context, challenges, and goals.",
  },
  {
    question: "Do you also support individuals, or only organizations?",
    answer: "Both. While we partner deeply with organizations, we also design programs and coaching for professionals looking to enhance their skills, confidence, and career growth.",
  },
  {
    question: "What types of learning solutions do you offer?",
    answer: "Our services include Leadership Development, Train-the-Trainer, Assessments, Compliance Training, Women in Leadership, and DEIB programs. Each solution is designed to drive confidence, culture, and measurable growth.",
  },
  {
    question: "What happens after the training is done?",
    answer: "Unlike most providers, we don’t stop at the event. We provide retention planners, refresher sessions, group connects, and ongoing coaching to ensure learning translates into lasting change.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-slate-50/90 backdrop-blur-md relative overflow-hidden" id="faq">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-orange/5 rounded-full mix-blend-multiply filter blur-[128px] translate-x-1/3 -translate-y-1/3" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-brand-navy mb-6 font-display">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-start">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={cn(
                "border-2 rounded-2xl overflow-hidden transition-colors duration-300",
                openIndex === index ? "border-brand-teal bg-white shadow-lg shadow-brand-teal/5" : "border-slate-200 bg-white hover:border-brand-teal/30"
              )}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className={cn(
                  "text-lg font-bold pr-8 font-display transition-colors",
                  openIndex === index ? "text-brand-teal" : "text-brand-navy"
                )}>
                  {faq.question}
                </span>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 transition-transform duration-300 flex-shrink-0",
                    openIndex === index ? "rotate-180 text-brand-teal" : "text-slate-400"
                  )}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-slate-600 leading-relaxed font-medium">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
