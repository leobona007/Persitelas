import { Link } from 'wouter';
import { useState, useEffect } from 'react';
import ProductCard from '@/components/products/ProductCard';
import { Product } from '@shared/schema';
import { fetchFeaturedProducts } from '@/lib/data';

const FeaturedProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  
  useEffect(() => {
    const loadProducts = async () => {
      try {
        setIsLoading(true);
        const featuredProducts = await fetchFeaturedProducts();
        setProducts(featuredProducts);
        setIsLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to load products'));
        setIsLoading(false);
      }
    };
    
    loadProducts();
  }, []);
  
  if (isLoading) {
    return (
      <section className="py-16 bg-[#F8F8F8]">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-[#225260]">Popular Right Now</h2>
            <Link href="/products">
              <a className="text-[#5B412A] hover:text-[#5B412A]/80 font-medium">View All Products →</a>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white shadow-md h-96 animate-pulse">
                <div className="h-64 bg-gray-200"></div>
                <div className="p-5">
                  <div className="h-6 bg-gray-200 rounded mb-3"></div>
                  <div className="h-4 bg-gray-200 rounded mb-3"></div>
                  <div className="flex justify-between">
                    <div className="h-5 w-24 bg-gray-200 rounded"></div>
                    <div className="h-5 w-28 bg-gray-200 rounded"></div>
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
      <section className="py-16 bg-[#F8F8F8]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6 text-[#225260]">Popular Right Now</h2>
          <p className="text-red-500">Error loading products. Please try again later.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-[#F8F8F8]">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-[#225260]">Popular Right Now</h2>
          <Link href="/products">
            <a className="text-[#5B412A] hover:text-[#5B412A]/80 font-medium">View All Products →</a>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
