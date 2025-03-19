import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'wouter';

interface Slide {
  image: string;
  title: string;
  subtitle: string;
  cta: {
    text: string;
    link: string;
  };
}

const slides: Slide[] = [
  {
    image: 'https://images.pexels.com/photos/3316924/pexels-photo-3316924.jpeg',
    title: 'Inspired Design For Everyday Spaces',
    subtitle: 'Elevate your home with our premium blinds and curtains, crafted for lasting beauty and superior functionality.',
    cta: {
      text: 'Shop Now',
      link: '/products'
    }
  },
  {
    image: 'https://images.pexels.com/photos/3926542/pexels-photo-3926542.jpeg',
    title: 'Premium Blinds For The Modern Home',
    subtitle: 'Discover our collection of custom blinds, designed to complement any space with perfect light control.',
    cta: {
      text: 'View Collection',
      link: '/products?category=blinds'
    }
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Auto-rotate slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, []);
  
  return (
    <section className="pt-24 relative">
      <div className="relative overflow-hidden h-[500px] md:h-[600px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <div className="relative h-full w-full">
              <img 
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#225260]/70 to-transparent"></div>
              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-4">
                  <motion.div 
                    className="w-full md:w-1/2 text-white"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold">
                      {slides[currentSlide].title}
                    </h2>
                    <p className="text-lg mt-4 mb-8">
                      {slides[currentSlide].subtitle}
                    </p>
                    <Link href={slides[currentSlide].cta.link}>
                      <a className="bg-[#5B412A] hover:bg-[#5B412A]/90 text-white font-medium px-8 py-3 inline-block transition">
                        {slides[currentSlide].cta.text}
                      </a>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        
        {/* Slider Controls */}
        <div className="absolute bottom-5 left-0 right-0 flex justify-center space-x-3">
          {slides.map((_, index) => (
            <button 
              key={index}
              className={`w-3 h-3 rounded-full bg-white transition ${currentSlide === index ? 'bg-opacity-100' : 'bg-opacity-50'}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
