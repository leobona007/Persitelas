import { Link } from 'wouter';
import { useState, useEffect } from 'react';
import { Article } from '@shared/schema';
import { fetchArticles } from '@/lib/data';

const BlogSection = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  
  useEffect(() => {
    const loadArticles = async () => {
      try {
        setIsLoading(true);
        const articlesData = await fetchArticles(3); // Limit to 3 articles
        setArticles(articlesData);
        setIsLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to load articles'));
        setIsLoading(false);
      }
    };
    
    loadArticles();
  }, []);

  if (isLoading) {
    return (
      <section className="py-16 bg-[#F8F8F8]">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-[#225260]">Últimas Notícias</h2>
            <Link href="/blog">
              <a className="text-[#5B412A] hover:text-[#5B412A]/80 font-medium">Ver Todos os Artigos →</a>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white shadow-md h-96 animate-pulse">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <div className="h-4 bg-gray-200 rounded mb-3 w-1/3"></div>
                  <div className="h-6 bg-gray-200 rounded mb-3"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded mb-4 w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/4"></div>
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
          <h2 className="text-3xl md:text-4xl font-serif mb-6 text-[#225260]">Últimas Notícias</h2>
          <p className="text-red-500">Erro ao carregar artigos. Por favor, tente novamente mais tarde.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-[#F8F8F8]">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-[#225260]">Últimas Notícias</h2>
          <Link href="/blog">
            <a className="text-[#5B412A] hover:text-[#5B412A]/80 font-medium">Ver Todos os Artigos →</a>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles?.map((article) => (
            <div key={article.id} className="bg-white shadow-md overflow-hidden group transition-all duration-300 hover:shadow-lg">
              <div className="h-48 relative">
                <img 
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <i className="far fa-calendar mr-2"></i>
                  <span>{article.publishDate}</span>
                </div>
                <h3 className="text-xl font-serif text-[#225260] mb-3">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <Link href={`/blog/${article.slug}`}>
                  <a className="text-[#5B412A] font-medium hover:underline">Read more →</a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
