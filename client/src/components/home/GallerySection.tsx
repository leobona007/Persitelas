import { Link } from 'wouter';
import { useState, useEffect } from 'react';
import BlindsAnimation from '@/components/ui/blinds-animation';

interface GalleryItem {
  id: string;
  image: string;
  description?: string;
}

// Function to fetch Instagram photos
const fetchInstagramPhotos = async (limit: number = 6): Promise<GalleryItem[]> => {
  // In a real implementation, you would use Instagram API or a service like Instagram Basic Display API
  // For this example, we'll use mock data based on the Instagram account
  
  // Mock data representing Instagram posts from https://www.instagram.com/persitelas/
  const mockInstagramPosts: GalleryItem[] = [
    {
      id: '1',
      image: '/public/persiana_interna_sob_medida.jpeg'
    },
    {
      id: '2',
      image: 'public/rede_de_proteção_sacada.jpeg'
    },
    {
      id: '3',
      image: 'public/persianas_double_vision.jpeg'
    },
    {
      id: '4',
      image: 'public/rede_proteção_externa.jpeg'
    },
    {
      id: '5',
      image: 'public/rede_proteção_piscina.jpeg'
    },
    {
      id: '6',
      image: 'public/persiana_double_visionn.jpeg'
    },
  ];

  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  return mockInstagramPosts.slice(0, limit);
};

// Export the function for use in other components
export { fetchInstagramPhotos };
export type { GalleryItem };

const GallerySection = () => {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  
  useEffect(() => {
    const loadGalleryItems = async () => {
      try {
        setIsLoading(true);
        const items = await fetchInstagramPhotos(6); // Limit to 6 gallery items
        setGalleryItems(items);
        setIsLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to load gallery items'));
        setIsLoading(false);
      }
    };
    
    loadGalleryItems();
  }, []);

  if (isLoading) {
    return (
      <section className="py-16 bg-[#F8F8F8]">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-[#225260]">Nossa Galeria</h2>
            <Link href="/gallery">
              <a className="text-[#5B412A] hover:text-[#5B412A]/80 font-medium">Ver Galeria Completa →</a>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white shadow-md h-96 animate-pulse">
                <div className="h-96 bg-gray-200"></div>
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
          <h2 className="text-3xl md:text-4xl font-serif mb-6 text-[#225260]">Nossa Galeria</h2>
          <p className="text-red-500">Erro ao carregar imagens. Por favor, tente novamente mais tarde.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-[#F8F8F8]">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-[#225260]">Nossa Galeria</h2>
          <a 
            href="https://www.instagram.com/persitelas/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#5B412A] hover:text-[#5B412A]/80 font-medium"
          >
            Seguir no Instagram →
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {galleryItems?.map((item) => (
            <div key={item.id} className="bg-white shadow-md overflow-hidden group transition-all duration-300 hover:shadow-lg">
              <BlindsAnimation className="h-96 relative">
                <img 
                  src={item.image}
                  alt="Instagram post"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </BlindsAnimation>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;