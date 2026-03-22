import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { Linkedin, Twitter, Instagram, Facebook, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <>
      <div 
        className="relative overflow-hidden bg-fixed bg-cover bg-center mt-24"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80')" }}
      >
        <div className="absolute inset-0 bg-brand-navy/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/40 to-brand-navy/90" />
        <div className="relative z-10 text-center max-w-3xl mx-auto px-6 py-24 sm:py-32">
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-8 leading-tight font-display text-white">
            Your people have the potential. <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-green to-brand-orange">We help unlock it.</span>
          </h2>
          <a
            href="mailto:contact@talentforge.com"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-brand-navy bg-white hover:bg-brand-teal hover:text-white transition-all duration-300 rounded-full shadow-xl shadow-brand-teal/20 hover:-translate-y-1"
          >
            Let's Get Started
          </a>
        </div>
      </div>

      <footer className="bg-brand-navy text-white pb-12 relative overflow-hidden" id="contact">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-teal/10 rounded-full mix-blend-screen filter blur-[120px] translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-green/5 rounded-full mix-blend-screen filter blur-[120px] -translate-x-1/2 translate-y-1/2" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/10">
            {/* Brand Column */}
            <div className="space-y-8">
              <Logo theme="dark" />
              <p className="text-slate-300 leading-relaxed font-medium">
                Forging Talent for High-Performance Organizations through consulting-driven, personalized learning journeys.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: Linkedin, href: "#" },
                  { icon: Twitter, href: "#" },
                  { icon: Instagram, href: "#" },
                  { icon: Facebook, href: "#" }
                ].map((social, i) => (
                  <a 
                    key={i}
                    href={social.href} 
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-brand-teal hover:text-white hover:border-brand-teal transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services Column */}
            <div>
              <h4 className="text-lg font-bold mb-8 text-white font-display relative inline-block">
                Services
                <span className="absolute -bottom-2 left-0 w-8 h-1 bg-brand-teal rounded-full" />
              </h4>
              <ul className="space-y-4 font-medium">
                <li><Link to="/services" className="text-slate-400 hover:text-brand-teal transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" /> Leadership Development</Link></li>
                <li><Link to="/services" className="text-slate-400 hover:text-brand-teal transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" /> Assessments & Evaluations</Link></li>
                <li><Link to="/services" className="text-slate-400 hover:text-brand-teal transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" /> Compliance Training</Link></li>
                <li><Link to="/services" className="text-slate-400 hover:text-brand-teal transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" /> DEIB Programs</Link></li>
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h4 className="text-lg font-bold mb-8 text-white font-display relative inline-block">
                Contact Us
                <span className="absolute -bottom-2 left-0 w-8 h-1 bg-brand-green rounded-full" />
              </h4>
              <ul className="space-y-6 font-medium">
                <li className="flex items-start gap-4 text-slate-400">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-brand-teal">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span>123 Strategy Lane, Suite 400<br />New York, NY 10001</span>
                </li>
                <li className="flex items-center gap-4 text-slate-400">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-brand-green">
                    <Phone className="w-5 h-5" />
                  </div>
                  <a href="tel:+12125550123" className="hover:text-brand-teal transition-colors">+1 (212) 555-0123</a>
                </li>
                <li className="flex items-center gap-4 text-slate-400">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-brand-orange">
                    <Mail className="w-5 h-5" />
                  </div>
                  <a href="mailto:contact@talentforge.com" className="hover:text-brand-teal transition-colors">contact@talentforge.com</a>
                </li>
              </ul>
            </div>

            {/* Newsletter Column */}
            <div>
              <h4 className="text-lg font-bold mb-8 text-white font-display relative inline-block">
                Newsletter
                <span className="absolute -bottom-2 left-0 w-8 h-1 bg-brand-orange rounded-full" />
              </h4>
              <p className="text-slate-400 mb-6 font-medium">
                Subscribe to get the latest insights on talent strategy.
              </p>
              <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                <div className="relative">
                  <input 
                    type="email" 
                    placeholder="Your email" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-teal transition-colors"
                  />
                </div>
                <button className="w-full bg-brand-teal hover:bg-brand-teal/90 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-brand-teal/20">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="py-8 flex flex-col md:flex-row items-center justify-between text-slate-500 text-sm font-medium">
            <div className="flex items-center gap-8 mb-4 md:mb-0">
              <p>© {new Date().getFullYear()} Talent Forge Strategy.</p>
              <div className="hidden md:flex space-x-6">
                <Link to="/about" className="hover:text-brand-teal transition-colors">About</Link>
                <Link to="/process" className="hover:text-brand-teal transition-colors">Process</Link>
                <Link to="/faq" className="hover:text-brand-teal transition-colors">FAQ</Link>
              </div>
            </div>
            <div className="flex space-x-8">
              <a href="#" className="hover:text-brand-teal transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-brand-teal transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
