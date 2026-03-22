import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80",
    title: "Forging Talent for High-Performance Organizations",
    subtitle: "At Talent Forge, we don't just deliver training—we design consulting-driven, personalized learning journeys that unlock human potential, strengthen leadership, and deliver measurable business impact.",
  },
  {
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80",
    title: "Unlocking Human Potential Through Strategy",
    subtitle: "We partner with leadership teams to build cultures of excellence, ensuring every individual has the tools and confidence to excel in their role.",
  },
  {
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80",
    title: "Measurable Impact, Lasting Results",
    subtitle: "Our consulting-driven approach ensures that learning isn't just an event, but a continuous journey that drives real business outcomes.",
  }
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-[90vh] min-h-[600px] overflow-hidden bg-brand-navy">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 via-brand-navy/60 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-semibold text-white bg-white/10 backdrop-blur-md mb-8 ring-1 ring-white/20">
                <span className="w-2 h-2 rounded-full bg-brand-teal mr-2 animate-pulse"></span>
                Talent Management & Organizational Strategy
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6 leading-[1.1] font-display">
                {slides[currentSlide].title.split(' ').map((word, i) => 
                  word === 'High-Performance' || word === 'Potential' || word === 'Results' ? (
                    <span key={i} className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-green">{word} </span>
                  ) : word + ' '
                )}
              </h1>
              <p className="text-base sm:text-lg text-slate-200 mb-8 leading-relaxed max-w-2xl font-medium">
                {slides[currentSlide].subtitle}
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-brand-navy bg-white hover:bg-brand-teal hover:text-white transition-all duration-300 rounded-full group shadow-lg shadow-white/10 hover:-translate-y-0.5"
                >
                  Book a Discovery Call
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-white bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-colors rounded-full"
                >
                  Explore Services
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-10 right-4 sm:right-8 lg:right-12 z-20 flex items-center space-x-4">
        <button
          onClick={prevSlide}
          className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-12 h-1.5 rounded-full transition-all duration-300 ${
              currentSlide === index ? "bg-brand-teal w-16" : "bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
