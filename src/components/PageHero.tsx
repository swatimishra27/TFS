import { motion } from "motion/react";

interface PageHeroProps {
  title: string;
  subtitle: string;
  image?: string;
}

export function PageHero({ title, subtitle, image = "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" }: PageHeroProps) {
  return (
    <div className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${image}')` }}
      >
        <div className="absolute inset-0 bg-brand-navy/60 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/40 via-transparent to-brand-navy/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-medium text-white font-serif tracking-tight"
        >
          {title} <span className="italic text-brand-orange font-serif">{subtitle}</span>
        </motion.h1>
        
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
          className="h-1 w-24 bg-brand-teal mx-auto mt-6 rounded-full origin-center"
        />
      </div>
    </div>
  );
}
