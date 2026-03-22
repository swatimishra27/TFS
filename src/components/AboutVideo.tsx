import { motion } from "motion/react";
import { Play } from "lucide-react";

export function AboutVideo() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl group">
          <img 
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            alt="Video Thumbnail"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-navy/40 group-hover:bg-brand-navy/30 transition-colors" />
          
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-24 h-24 bg-brand-teal text-white rounded-full flex items-center justify-center shadow-2xl mb-8"
            >
              <Play className="w-10 h-10 fill-current ml-1" />
            </motion.button>
            <h2 className="text-3xl md:text-5xl font-black text-white font-display max-w-2xl">
              Watch How We <span className="text-brand-teal italic font-serif">Transform</span> Learning
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
