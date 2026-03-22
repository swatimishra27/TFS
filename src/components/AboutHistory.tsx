import { motion } from "motion/react";

const timeline = [
  { year: "2015", title: "The Beginning", desc: "Talent Forge was founded with a vision to bridge the gap between education and industry." },
  { year: "2018", title: "Expansion", desc: "We expanded our services to include corporate strategy and executive coaching." },
  { year: "2021", title: "Digital Transformation", desc: "Launched our digital learning platform to reach a global audience." },
  { year: "2024", title: "Global Impact", desc: "Now serving over 50+ organizations and 10,000+ learners worldwide." }
];

export function AboutHistory() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-brand-navy mb-4 font-display">
            Our <span className="text-brand-orange italic font-serif">Journey</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A decade of transforming lives and organizations through strategic talent development.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-brand-teal/20 hidden md:block" />
          
          <div className="space-y-12">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`flex flex-col md:flex-row items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="md:w-1/2 flex justify-center md:justify-start px-8">
                  <div className={`text-center ${i % 2 === 0 ? 'md:text-left' : 'md:text-right'} w-full`}>
                    <span className="text-4xl font-black text-brand-teal mb-2 block font-display">{item.year}</span>
                    <h3 className="text-xl font-bold text-brand-navy mb-2 font-display">{item.title}</h3>
                    <p className="text-slate-600">{item.desc}</p>
                  </div>
                </div>
                <div className="w-8 h-8 bg-brand-navy border-4 border-brand-teal rounded-full relative z-10 my-4 md:my-0" />
                <div className="md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
