import { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { Helmet } from 'react-helmet';
import ProductCard from '@/components/products/ProductCard';
import { Product, Category } from '@shared/schema';
import { fetchProducts, fetchCategories, fetchProductsByCategory } from '@/lib/data';

const Products = () => {
  const [location] = useLocation();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Parse the query params from URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const category = params.get('category');
    if (category) {
      setSelectedCategory(category);
    }
  }, [location]);
  
  // Fetch categories
  useEffect(() => {
    const loadCategories = async () => {
      try {
        const categoriesData = await fetchCategories();
        setCategories(categoriesData);
      } catch (err) {
        console.error('Failed to load categories:', err);
      }
    };
    
    loadCategories();
  }, []);
  
  // Fetch products based on selected category
  useEffect(() => {
    const loadProducts = async () => {
      try {
        setIsLoading(true);
        let productsData;
        
        if (selectedCategory) {
          productsData = await fetchProductsByCategory(selectedCategory);
        } else {
          productsData = await fetchProducts();
        }
        
        setProducts(productsData);
        setIsLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to load products'));
        setIsLoading(false);
      }
    };
    
    loadProducts();
  }, [selectedCategory]);
  
  const handleCategoryChange = (categorySlug: string | null) => {
    setSelectedCategory(categorySlug);
    
    // Update the URL
    const url = new URL(window.location.href);
    if (categorySlug) {
      url.searchParams.set('category', categorySlug);
    } else {
      url.searchParams.delete('category');
    }
    
    window.history.pushState({}, '', url.toString());
  };

  return (
    <>
      <Helmet>
        <title>Produtos | Persitelas - Persianas e Telas de Proteção</title>
        <meta name="description" content="Browse our collection of high-quality blinds, curtains, and window accessories. Find the perfect window treatments for your home." />
      </Helmet>
      
      <div className="pt-16 pb-16">
        <div className="bg-[#225260] text-white py-12 mb-10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-serif mb-4">Nossos Produtos</h1>
            <p className="text-white/80 max-w-2xl mx-auto">
              Veja Os Produtos que a Persitelas tem disponivel para elevar o seu ambiente.
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-4">
              <button
                className={`px-4 py-2 rounded-md transition ${selectedCategory === null ? 'bg-[#225260] text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
                onClick={() => handleCategoryChange(null)}
              >
                All Products
              </button>
              {categories?.map((category) => (
                <button
                  key={category.id}
                  className={`px-4 py-2 rounded-md transition ${selectedCategory === category.slug ? 'bg-[#225260] text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
                  onClick={() => handleCategoryChange(category.slug)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          
          {/* Products Grid */}
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {Array.from({ length: 8 }).map((_, index) => (
                <div key={index} className="bg-white shadow-md h-[400px] animate-pulse">
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
          ) : error ? (
            <div className="text-center py-12">
              <h3 className="text-xl text-red-500 mb-2">Error loading products</h3>
              <p className="text-gray-600">Please try again later or contact customer support.</p>
            </div>
          ) : products?.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl text-[#225260] mb-2">No products found</h3>
              <p className="text-gray-600">Try selecting a different category or check back later for new arrivals.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products?.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Products;
