import { Helmet } from 'react-helmet';
import { useEffect } from 'react';
import HeroSlider from '@/components/home/HeroSlider';
import CategorySection from '@/components/home/CategorySection';
import AboutSection from '@/components/home/AboutSection';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import BlogSection from '@/components/home/BlogSection';
import NewsletterSection from '@/components/home/NewsletterSection';
import GallerySection from '@/components/home/GallerySection';

const Home = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Persitelas- Persianas e Telas Personalizadas</title>
        <meta name="description" content="Quality blinds and curtains from a local family-run business. We stock hundreds of quality fabrics and accessories for blinds and curtains in a huge range of styles, colors and patterns." />
      </Helmet>
      
      <div>
        <HeroSlider />
        <CategorySection />
        <NewsletterSection />
        <TestimonialsSection />
        <AboutSection />
        {/* <FeaturedProducts /> */}
        {/* <BlogSection /> */}
        <GallerySection />
        <NewsletterSection />
        
      </div>
    </>
  );
};

export default Home;
