import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import BlindsAnimation from '@/components/ui/blinds-animation';
import { Category } from '@shared/schema';
import { fetchCategories } from '@/lib/data';

const CategorySection = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  
  useEffect(() => {
    const loadCategories = async () => {
      try {
        setIsLoading(true);
        const categoriesData = await fetchCategories();
        setCategories(categoriesData);
        setIsLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to load categories'));
        setIsLoading(false);
      }
    };
    
    loadCategories();
  }, []);
  
  if (isLoading) {
    return (
      <section className="py-16 bg-[#F8F8F8]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12 text-[#225260]">Nossos Produtos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white shadow-md h-96 animate-pulse">
                <div className="h-64 bg-gray-200"></div>
                <div className="p-6">
                  <div className="h-6 bg-gray-200 rounded mb-3 w-1/3"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3"></div>
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
          <h2 className="text-3xl md:text-4xl font-serif mb-6 text-[#225260]">Nossos Produtos</h2>
          <p className="text-red-500">Erro ao carregar categorias. Por favor, tente novamente mais tarde.</p>
        </div>
      </section>
    );
  }
  
  return (
    <section className="py-16 bg-[#F8F8F8]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-12 text-[#225260]">Nossos Produtos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories?.map((category) => (
            <div key={category.id} className="bg-white shadow-md overflow-hidden group transition-all duration-300 hover:shadow-lg">
              <BlindsAnimation className="h-64">
                <img 
                  src={category.image}
                  alt={category.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </BlindsAnimation>
              <div className="p-6">
                <h3 className="text-2xl font-serif text-[#225260] mb-3">{category.name}</h3>
                <p className="text-gray-600">{category.description}</p>
                <Link href={`/products?category=${category.slug}`}>
                  <a className="text-[#5B412A] font-medium inline-block mt-4 hover:underline">
                    Explorar Coleção →
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
