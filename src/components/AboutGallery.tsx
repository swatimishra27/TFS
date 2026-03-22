import { motion } from "motion/react";

const gallery = [
  { image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80", title: "Student Workshop" },
  { image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80", title: "Professional Training" },
  { image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80", title: "Team Building" },
  { image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80", title: "Executive Coaching" },
  { image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80", title: "Corporate Strategy" },
  { image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80", title: "Talent Hub" }
];

export function AboutGallery() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-brand-navy mb-4 font-display">
            Our <span className="text-brand-teal">Gallery</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A glimpse into our sessions and the impact we're making.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {gallery.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative aspect-square rounded-[2rem] overflow-hidden group shadow-lg"
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-bold text-lg font-display">{item.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
