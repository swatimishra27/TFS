import { motion } from "motion/react";
import { PageHero } from "../components/PageHero";
import { Shield, Lock, Eye, FileText, Bell, UserCheck } from "lucide-react";

export function PrivacyPolicyPage() {
  const sections = [
    {
      title: "Information We Collect",
      icon: Eye,
      content: "We collect information that you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us for support. This may include your name, email address, phone number, and organizational details."
    },
    {
      title: "How We Use Your Information",
      icon: FileText,
      content: "We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to develop new products and services. We also use it to protect Talent Forge and our users."
    },
    {
      title: "Data Protection & Security",
      icon: Lock,
      content: "We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction. We use industry-standard encryption and security protocols."
    },
    {
      title: "Sharing of Information",
      icon: UserCheck,
      content: "We do not share your personal information with third parties except as described in this policy, such as with your consent, to comply with laws, or to protect our rights."
    },
    {
      title: "Your Choices & Rights",
      icon: Shield,
      content: "You have the right to access, update, or delete your personal information. You can also opt-out of receiving promotional communications from us by following the instructions in those communications."
    },
    {
      title: "Changes to This Policy",
      icon: Bell,
      content: "We may change this Privacy Policy from time to time. If we make changes, we will notify you by revising the date at the top of the policy and, in some cases, we may provide you with additional notice."
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">
      <PageHero 
        title="Privacy" 
        subtitle="Policy" 
        image="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80"
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
              At Talent Forge, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
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
                  <div className="w-16 h-16 rounded-2xl bg-brand-teal/10 flex items-center justify-center">
                    <section.icon className="w-8 h-8 text-brand-teal" />
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

          <div className="mt-16 text-center text-slate-400 text-sm font-medium">
            Last Updated: March 28, 2026
          </div>
        </div>
      </section>
    </div>
  );
}
