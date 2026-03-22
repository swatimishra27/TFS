import { motion } from "motion/react";
import { Linkedin, Twitter, Instagram, Facebook } from "lucide-react";

export function AboutSocial() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-brand-navy mb-4 font-display">
            Follow Our <span className="text-brand-teal">Journey</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Stay updated with our latest sessions, tips, and success stories.
          </p>
        </div>

        <div className="flex justify-center gap-8">
          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            href="#"
            className="p-4 bg-white rounded-2xl shadow-sm border border-slate-200 text-brand-navy hover:bg-brand-teal hover:text-white transition-all"
          >
            <Linkedin className="w-8 h-8" />
          </motion.a>
          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            href="#"
            className="p-4 bg-white rounded-2xl shadow-sm border border-slate-200 text-brand-navy hover:bg-brand-teal hover:text-white transition-all"
          >
            <Twitter className="w-8 h-8" />
          </motion.a>
          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            href="#"
            className="p-4 bg-white rounded-2xl shadow-sm border border-slate-200 text-brand-navy hover:bg-brand-teal hover:text-white transition-all"
          >
            <Instagram className="w-8 h-8" />
          </motion.a>
          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            href="#"
            className="p-4 bg-white rounded-2xl shadow-sm border border-slate-200 text-brand-navy hover:bg-brand-teal hover:text-white transition-all"
          >
            <Facebook className="w-8 h-8" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
