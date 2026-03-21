import { motion } from "motion/react";

const clients = [
  { name: "GlobalTech", logo: "GT" },
  { name: "Innovate Inc", logo: "IN" },
  { name: "FutureWorks", logo: "FW" },
  { name: "Nexus Corp", logo: "NC" },
  { name: "Apex Solutions", logo: "AS" },
  { name: "Pioneer Group", logo: "PG" },
];

export function TrustedBy() {
  return (
    <section className="py-12 bg-slate-50/90 backdrop-blur-md border-b border-slate-200/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-bold text-slate-400 uppercase tracking-widest mb-8 font-display">
          Trusted by forward-thinking organizations
        </p>
        
        {/* Marquee Container */}
        <div className="relative flex overflow-x-hidden group">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-16 md:gap-24 py-4">
            {[...clients, ...clients, ...clients].map((client, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-slate-200 flex items-center justify-center text-xl font-black text-slate-500 font-display">
                  {client.logo}
                </div>
                <span className="ml-4 text-xl font-bold text-slate-600 font-display hidden sm:block">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
          
          {/* Gradient Overlays for smooth fade effect */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-slate-50/90 to-transparent pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-slate-50/90 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
