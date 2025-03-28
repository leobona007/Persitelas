import { useState, useEffect } from 'react';
import { Testimonial } from '@shared/schema';
import { fetchTestimonials } from '@/lib/data';

const renderStars = (rating: number | null) => {
  const ratingValue = rating || 0;
  return Array.from({ length: 5 }, (_, i) => (
    <i key={i} className={`fas fa-star ${i < ratingValue ? '' : 'text-white/30'}`}></i>
  ));
};

const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  
  useEffect(() => {
    const loadTestimonials = async () => {
      try {
        setIsLoading(true);
        // console.log("CP1")
        const testimonialsData = await fetchTestimonials();
        //console.log(testimonialsData)
        setTestimonials(testimonialsData);
        setIsLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to load testimonials'));
        setIsLoading(false);
      }
    };
    
    loadTestimonials();
  }, []);

  if (isLoading) {
    return (
      <section className="py-16 bg-[#225260] text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 mb-12">
            <img src="/googlereviews.png" alt="Google Reviews" className="h-16" />
            {/* <h2 className="text-3xl md:text-4xl font-serif">O Que Nossos Clientes Dizem</h2> */}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white/10 p-6 rounded-lg animate-pulse">
                <div className="mb-4 flex space-x-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <div key={s} className="w-4 h-4 bg-yellow-200 rounded-full"></div>
                  ))}
                </div>
                <div className="h-24 bg-white/5 rounded mb-6"></div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full mr-4"></div>
                  <div>
                    <div className="h-5 w-24 bg-white/20 rounded mb-1"></div>
                    <div className="h-4 w-16 bg-white/10 rounded"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-[#225260] text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <img src="/googlereviews.png" alt="Google Reviews" className="h-16" />
            {/* <h2 className="text-3xl md:text-4xl font-serif">O Que Nossos Clientes Dizem</h2> */}
          </div>
          <p className="text-white/80">Erro ao carregar depoimentos. Por favor, tente novamente mais tarde.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-[#225260] text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-4 mb-12">
          <img src="/googlereviews.png" alt="Google Reviews" className="h-32" />
          {/* <h2 className="text-3xl md:text-4xl font-serif">O Que Nossos Clientes Dizem</h2> */}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials?.map((testimonial) => (
            <div key={testimonial.id} className="bg-white/10 p-6 rounded-lg">
              <div className="text-yellow-400 mb-4 flex">
                {renderStars(testimonial.rating)}
              </div>
              <p className="italic mb-6 text-white/90">"{testimonial.content}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-user text-white/70"></i>
                </div>
                <div>
                  <h4 className="font-medium">{testimonial.name}</h4>
                  <p className="text-sm text-white/70">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
