import { Link } from "react-router-dom";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-brand-navy/90 backdrop-blur-md text-white py-24 border-t-4 border-brand-teal relative overflow-hidden" id="contact">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-teal/20 rounded-full mix-blend-screen filter blur-[100px] translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-green/10 rounded-full mix-blend-screen filter blur-[100px] -translate-x-1/2 translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          className="relative rounded-[2.5rem] overflow-hidden mb-20 shadow-2xl shadow-brand-navy/20 border border-white/10 bg-fixed bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80')" }}
        >
          <div className="absolute inset-0 bg-brand-navy/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/40 to-brand-navy/90" />
          <div className="relative z-10 text-center max-w-3xl mx-auto px-6 py-20 sm:py-24">
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-8 leading-tight font-display text-white">
              Your people have the potential. <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-green to-brand-orange">We help unlock it.</span>
            </h2>
            <a
              href="mailto:contact@talentforge.com"
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-brand-navy bg-white hover:bg-brand-teal hover:text-white transition-all duration-300 rounded-full shadow-xl shadow-brand-teal/20 hover:-translate-y-1"
            >
              Let's Get Started
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-12 pt-16 border-t border-white/10">
          <div className="md:col-span-2">
            <div className="mb-8">
              <Logo theme="dark" />
            </div>
            <p className="text-slate-300 max-w-sm leading-relaxed mb-8 font-medium">
              Forging Talent for High-Performance Organizations through consulting-driven, personalized learning journeys.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white font-display">Services</h4>
            <ul className="space-y-4 font-medium">
              <li><Link to="/services" className="text-slate-400 hover:text-brand-teal transition-colors">Leadership Development</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-brand-teal transition-colors">Assessments & Evaluations</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-brand-teal transition-colors">Compliance Training</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-brand-teal transition-colors">DEIB Programs</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white font-display">Company</h4>
            <ul className="space-y-4 font-medium">
              <li><Link to="/about" className="text-slate-400 hover:text-brand-teal transition-colors">About Us</Link></li>
              <li><Link to="/process" className="text-slate-400 hover:text-brand-teal transition-colors">How We Work</Link></li>
              <li><Link to="/faq" className="text-slate-400 hover:text-brand-teal transition-colors">FAQ</Link></li>
              <li><a href="#contact" className="text-slate-400 hover:text-brand-teal transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-slate-400 text-sm font-medium">
          <p>© {new Date().getFullYear()} Talent Forge Strategy. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-brand-teal transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-teal transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
