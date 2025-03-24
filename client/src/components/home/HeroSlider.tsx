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
    title: 'Design Inspirado Para Espaços do Dia a Dia',
    subtitle: 'Eleve sua casa com nossas persianas premium, criadas para beleza duradoura e funcionalidade superior.',
    cta: {
      text: 'Ver Persianas',
      link: '/products?category=persianas'
    }
  },
  {
    image: '/tela_de_protecao.jpg',
    title: 'Proteção Extra para quem Você Ama',
    subtitle: 'Descubra nossa Redes de Proteção personalizadas, projetadas artesanalmente para proporcionar segurança para sua familia',
    cta: {
      text: 'Ver telas de proteção',
      link: '/products?category=telas-de-proteção'
    }
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Auto-rotate slides with reset capability
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [currentSlide]); // Reset timer when slide changes
  
  // Handle manual navigation
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };
  
  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };
  
  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };
  
  return (
    <section className="pt-0 relative">
      <div className="relative overflow-hidden h-[600px] md:h-[700px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5}}
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
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold">
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
        
        {/* Arrow Navigation */}
        <button 
          onClick={goToPrevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/30 text-white hover:bg-white/50 transition z-10"
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          onClick={goToNextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/30 text-white hover:bg-white/50 transition z-10"
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        
        {/* Dot Indicators */}
        <div className="absolute bottom-5 left-0 right-0 flex justify-center space-x-3">
          {slides.map((_, index) => (
            <button 
              key={index}
              className={`w-3 h-3 rounded-full bg-white transition ${currentSlide === index ? 'bg-opacity-100' : 'bg-opacity-50'}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
