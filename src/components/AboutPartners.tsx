import { motion } from "motion/react";

const partners = [
  { name: "Global Tech", logo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80" },
  { name: "EduCorp", logo: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80" },
  { name: "Innovate Labs", logo: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80" },
  { name: "Future Skills", logo: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80" },
  { name: "Talent Hub", logo: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" },
  { name: "Lead Academy", logo: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80" }
];

export function AboutPartners() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold text-slate-400 uppercase tracking-widest font-display">
            Trusted by Industry Leaders
          </h2>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {partners.map((partner, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="h-12 w-32 relative"
            >
              <div className="absolute inset-0 flex items-center justify-center font-black text-xl text-brand-navy">
                {partner.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
