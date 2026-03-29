import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Search, MessageCircle, Mail, Phone, HelpCircle } from "lucide-react";
import { cn } from "../lib/utils";

const faqCategories = [
  { id: "all", name: "All Questions" },
  { id: "general", name: "General" },
  { id: "process", name: "Our Process" },
  { id: "services", name: "Services" },
  { id: "impact", name: "Impact & ROI" },
];

const faqs = [
  {
    category: "general",
    question: "How is Talent Forge different from other training providers?",
    answer: "Most providers deliver one-size-fits-all sessions that end when the trainer leaves. At Talent Forge, we start with consulting to understand your unique challenges, co-create contextual programs, and ensure learning sticks with post-training reinforcement.",
  },
  {
    category: "impact",
    question: "How do you ensure ROI from training?",
    answer: "ROI is built into our process. We use discovery calls, alignment with business goals, customized content, and follow-up retention plans (30–90 days) to ensure knowledge is applied, measured, and tied to real outcomes.",
  },
  {
    category: "process",
    question: "Do you offer demo sessions before we commit?",
    answer: "Yes. We provide a 30-minute content walkthrough and trainer style preview before the actual session. This ensures you know what to expect and can select the delivery style best suited for your audience.",
  },
  {
    category: "process",
    question: "What if our people don’t have time for long workshops?",
    answer: "We understand time is limited. That’s why we design modular, skill-focused sessions and create flexible learning journeys that fit into your employees’ schedules — without losing depth or impact.",
  },
  {
    category: "services",
    question: "Can your programs be tailored to our industry or challenges?",
    answer: "Absolutely. Every program is co-created with your leadership and stakeholders. We customize content and delivery to address your exact business context, challenges, and goals.",
  },
  {
    category: "general",
    question: "Do you also support individuals, or only organizations?",
    answer: "Both. While we partner deeply with organizations, we also design programs and coaching for professionals looking to enhance their skills, confidence, and career growth.",
  },
  {
    category: "services",
    question: "What types of learning solutions do you offer?",
    answer: "Our services include Leadership Development, Train-the-Trainer, Assessments, Compliance Training, Women in Leadership, and DEIB programs. Each solution is designed to drive confidence, culture, and measurable growth.",
  },
  {
    category: "process",
    question: "What happens after the training is done?",
    answer: "Unlike most providers, we don’t stop at the event. We provide retention planners, refresher sessions, group connects, and ongoing coaching to ensure learning translates into lasting change.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs = useMemo(() => {
    return faqs.filter((faq) => {
      const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="faq">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-teal/5 rounded-full mix-blend-multiply filter blur-[128px] translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-orange/5 rounded-full mix-blend-multiply filter blur-[128px] -translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-brand-navy mb-6 font-display">
            Everything You <span className="text-brand-teal italic font-serif">Need to Know</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed font-medium">
            Find answers to common questions about our methodology, services, and how we help organizations forge high-performance cultures.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12 space-y-8">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search for questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-brand-teal focus:outline-none transition-all font-medium text-brand-navy"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {faqCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-bold transition-all duration-300",
                  activeCategory === category.id
                    ? "bg-brand-navy text-white shadow-lg shadow-brand-navy/20"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                )}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Grid */}
        <div className="grid md:grid-cols-2 gap-6 items-start min-h-[400px]">
          <AnimatePresence mode="popLayout">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => (
                <motion.div
                  key={faq.question}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className={cn(
                    "border-2 rounded-[2rem] overflow-hidden transition-all duration-300",
                    openIndex === index 
                      ? "border-brand-teal bg-white shadow-xl shadow-brand-teal/5" 
                      : "border-slate-100 bg-slate-50/50 hover:border-brand-teal/30 hover:bg-white"
                  )}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-8 text-left focus:outline-none"
                  >
                    <span className={cn(
                      "text-lg font-bold pr-8 font-display transition-colors",
                      openIndex === index ? "text-brand-teal" : "text-brand-navy"
                    )}>
                      {faq.question}
                    </span>
                    <div className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300",
                      openIndex === index ? "bg-brand-teal text-white rotate-180" : "bg-white text-slate-400 border border-slate-100"
                    )}>
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-8 pb-8 text-slate-600 leading-relaxed font-medium">
                          <div className="h-px w-full bg-slate-100 mb-6" />
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full py-20 text-center">
                <HelpCircle className="w-16 h-16 text-slate-200 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-brand-navy mb-2">No questions found</h3>
                <p className="text-slate-500">Try adjusting your search or category filters.</p>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
