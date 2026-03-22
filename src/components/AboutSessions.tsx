import { motion } from "motion/react";
import { Users, GraduationCap, Briefcase, Presentation } from "lucide-react";

const sessions = [
  {
    title: "Student Workshops",
    subtitle: "Empowering the Next Generation",
    description: "Interactive sessions focused on career readiness, soft skills, and technical foundations for university students.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80",
    icon: GraduationCap,
    category: "Students"
  },
  {
    title: "Professional Training",
    subtitle: "Upskilling for Excellence",
    description: "Advanced leadership and technical training programs designed for mid-to-senior level professionals.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80",
    icon: Briefcase,
    category: "Professionals"
  },
  {
    title: "Corporate Retreats",
    subtitle: "Building Stronger Teams",
    description: "Off-site sessions that combine strategic planning with team-building activities to foster collaboration.",
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80",
    icon: Users,
    category: "Teams"
  },
  {
    title: "Executive Coaching",
    subtitle: "Strategic Leadership",
    description: "One-on-one sessions with industry experts to refine leadership styles and strategic decision-making.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80",
    icon: Presentation,
    category: "Executives"
  }
];

export function AboutSessions() {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-brand-navy mb-6 font-display">
              Our Impact in <span className="text-brand-orange italic font-serif">Action</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto font-medium">
              We don't just teach; we transform. Explore our diverse range of sessions tailored for different stages of professional growth.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {sessions.map((session, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative h-[400px] rounded-[2rem] overflow-hidden shadow-xl"
            >
              {/* Background Image */}
              <img 
                src={session.image} 
                alt={session.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-brand-teal rounded-lg text-white">
                    <session.icon className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-bold text-brand-teal uppercase tracking-widest">
                    {session.category}
                  </span>
                </div>
                
                <h3 className="text-3xl font-bold text-white mb-2 font-display">
                  {session.title}
                </h3>
                <p className="text-brand-green font-serif italic mb-4 text-lg">
                  {session.subtitle}
                </p>
                <p className="text-slate-200 text-sm leading-relaxed max-w-md opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {session.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats / Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 bg-brand-navy rounded-[3rem] p-12 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 font-display">
              Ready to host a session for your team?
            </h3>
            <p className="text-slate-300 mb-10 max-w-2xl mx-auto">
              Join over 5,000+ students and professionals who have transformed their careers through our specialized training programs.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="#contact"
                className="px-8 py-4 bg-brand-teal text-brand-navy font-bold rounded-full hover:bg-white transition-all transform hover:scale-105 shadow-lg"
              >
                Schedule a Session
              </a>
              <div className="flex items-center gap-4 text-white">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <img 
                      key={i}
                      src={`https://i.pravatar.cc/100?img=${i+10}`} 
                      className="w-10 h-10 rounded-full border-2 border-brand-navy"
                      alt="User"
                    />
                  ))}
                </div>
                <span className="text-sm font-medium">500+ Sessions Conducted</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
