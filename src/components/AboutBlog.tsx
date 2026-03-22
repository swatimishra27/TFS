import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    title: "The Future of Talent Development",
    desc: "Exploring how AI and automation are reshaping the workforce.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80"
  },
  {
    title: "Bridging the Gap: Education to Industry",
    desc: "How we're helping students transition into their professional careers.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80"
  }
];

export function AboutBlog() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-brand-navy mb-4 font-display">
            Latest from Our <span className="text-brand-teal">Blog</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-lg border border-slate-100 group"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-brand-navy mb-4 font-display">{post.title}</h3>
                <p className="text-slate-600 mb-6">{post.desc}</p>
                <a href="#" className="inline-flex items-center gap-2 text-brand-teal font-bold hover:gap-4 transition-all">
                  Read More
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
