import { motion } from "motion/react";
import { Linkedin, Twitter, Mail } from "lucide-react";

const team = [
  {
    name: "Sarah Jenkins",
    role: "Founder & Lead Consultant",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    bio: "15+ years in talent development and organizational strategy."
  },
  {
    name: "Michael Chen",
    role: "Head of Learning Design",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
    bio: "Expert in instructional design and digital learning ecosystems."
  },
  {
    name: "Elena Rodriguez",
    role: "Student Success Lead",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
    bio: "Dedicated to bridging the gap between education and industry."
  },
  {
    name: "David Smith",
    role: "Corporate Strategy Advisor",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80",
    bio: "Helping businesses align their human capital with long-term goals."
  }
];

export function AboutTeam() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-black text-brand-navy mb-4 font-display"
          >
            Meet the <span className="text-brand-teal">Experts</span>
          </motion.h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Our team brings together decades of experience in education, corporate strategy, and talent development.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group"
            >
              <div className="relative mb-6 rounded-[2rem] overflow-hidden aspect-[4/5] shadow-lg">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a href="#" className="p-2 bg-white/20 hover:bg-brand-teal rounded-full text-white transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="p-2 bg-white/20 hover:bg-brand-teal rounded-full text-white transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="p-2 bg-white/20 hover:bg-brand-teal rounded-full text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-1 font-display">{member.name}</h3>
              <p className="text-brand-teal font-semibold text-sm mb-3">{member.role}</p>
              <p className="text-slate-600 text-sm leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
