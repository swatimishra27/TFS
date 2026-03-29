import { motion } from "motion/react";
import { PageHero } from "../components/PageHero";
import { Scale, UserCheck, ShieldAlert, Ban, Gavel, HelpCircle } from "lucide-react";

export function TermsOfServicePage() {
  const sections = [
    {
      title: "Acceptance of Terms",
      icon: UserCheck,
      content: "By accessing or using Talent Forge's services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services."
    },
    {
      title: "Use of Services",
      icon: Scale,
      content: "Our services are designed for professional development and organizational consulting. You agree to use our services only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the services."
    },
    {
      title: "Intellectual Property",
      icon: Gavel,
      content: "All content, features, and functionality on our website and within our programs, including text, graphics, logos, and software, are the exclusive property of Talent Forge and are protected by international copyright and trademark laws."
    },
    {
      title: "Prohibited Conduct",
      icon: Ban,
      content: "You are prohibited from using our services to transmit any malicious code, engage in data mining, or attempt to gain unauthorized access to our systems. Any breach of security will result in immediate termination of your access."
    },
    {
      title: "Limitation of Liability",
      icon: ShieldAlert,
      content: "Talent Forge shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your access to or use of, or inability to access or use, our services or any content therein."
    },
    {
      title: "Governing Law",
      icon: HelpCircle,
      content: "These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which Talent Forge operates, and you irrevocably submit to the exclusive jurisdiction of the courts in that location."
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">
      <PageHero 
        title="Terms of" 
        subtitle="Service" 
        image="https://images.unsplash.com/photo-1589216532372-1c2a367900d9?auto=format&fit=crop&q=80"
      />

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-slate max-w-none mb-16"
          >
            <p className="text-lg text-slate-600 leading-relaxed font-medium text-center mb-12">
              Please read these Terms of Service carefully before using our services. These terms govern your relationship with Talent Forge and outline your rights and responsibilities as a user.
            </p>
            <div className="h-px w-full bg-slate-100 mb-16" />
          </motion.div>

          <div className="space-y-16">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col md:flex-row gap-8 items-start"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-brand-orange/10 flex items-center justify-center">
                    <section.icon className="w-8 h-8 text-brand-orange" />
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-black text-brand-navy mb-4 font-display">
                    {section.title}
                  </h2>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    {section.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-24 text-center text-slate-400 text-sm font-medium">
            Last Updated: March 28, 2026
          </div>
        </div>
      </section>
    </div>
  );
}
