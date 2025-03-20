import { Helmet } from 'react-helmet';
import HeroSlider from '@/components/home/HeroSlider';
import CategorySection from '@/components/home/CategorySection';
import AboutSection from '@/components/home/AboutSection';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import BlogSection from '@/components/home/BlogSection';
import NewsletterSection from '@/components/home/NewsletterSection';
import GallerySection from '@/components/home/GallerySection';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Gardis - Blinds & Curtains</title>
        <meta name="description" content="Quality blinds and curtains from a local family-run business. We stock hundreds of quality fabrics and accessories for blinds and curtains in a huge range of styles, colors and patterns." />
      </Helmet>
      
      <div>
        <HeroSlider />
        <AboutSection />
        <CategorySection />
        {/* <FeaturedProducts /> */}
        <TestimonialsSection />
        {/* <BlogSection /> */}
        <GallerySection />
        <NewsletterSection />
      </div>
    </>
  );
};

export default Home;
