import { motion } from "motion/react";
import { Mail, Phone, MapPin } from "lucide-react";

export function AboutContact() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-brand-navy mb-4 font-display">
            Get in <span className="text-brand-teal">Touch</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We're here to help you forge your path to success.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-slate-50 text-center border border-slate-100"
          >
            <div className="w-12 h-12 bg-brand-teal/10 rounded-xl flex items-center justify-center mb-6 mx-auto">
              <Mail className="w-6 h-6 text-brand-teal" />
            </div>
            <h3 className="text-xl font-bold text-brand-navy mb-2 font-display">Email Us</h3>
            <p className="text-slate-600">hello@talentforge.com</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 rounded-3xl bg-slate-50 text-center border border-slate-100"
          >
            <div className="w-12 h-12 bg-brand-teal/10 rounded-xl flex items-center justify-center mb-6 mx-auto">
              <Phone className="w-6 h-6 text-brand-teal" />
            </div>
            <h3 className="text-xl font-bold text-brand-navy mb-2 font-display">Call Us</h3>
            <p className="text-slate-600">+1 (555) 123-4567</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-3xl bg-slate-50 text-center border border-slate-100"
          >
            <div className="w-12 h-12 bg-brand-teal/10 rounded-xl flex items-center justify-center mb-6 mx-auto">
              <MapPin className="w-6 h-6 text-brand-teal" />
            </div>
            <h3 className="text-xl font-bold text-brand-navy mb-2 font-display">Visit Us</h3>
            <p className="text-slate-600">123 Talent Way, Future City, FC 12345</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
