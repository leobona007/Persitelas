import { useState } from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import BlindsAnimation from '@/components/ui/blinds-animation';
import { Product } from '@shared/schema';
import { useToast } from '@/hooks/use-toast';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { toast } = useToast();
  
  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    setIsFavorite(!isFavorite);
    toast({
      title: !isFavorite ? 'Added to favorites' : 'Removed from favorites',
      description: !isFavorite ? `${product.name} has been added to your favorites` : `${product.name} has been removed from your favorites`,
      duration: 3000,
    });
  };
  
  // Render stars based on rating
  const renderStars = () => {
    return Array.from({ length: 5 }, (_, i) => {
      if (i < Math.floor(product.rating)) {
        return <i key={i} className="fas fa-star"></i>;
      } else if (i === Math.floor(product.rating) && product.rating % 1 >= 0.5) {
        return <i key={i} className="fas fa-star-half-alt"></i>;
      } else {
        return <i key={i} className="far fa-star"></i>;
      }
    });
  };

  return (
    <div className="bg-white shadow-md overflow-hidden group transition-all duration-300 hover:shadow-lg relative">
      <div className="absolute top-4 right-4 z-10">
        <button 
          className="bg-white w-9 h-9 rounded-full flex items-center justify-center shadow-md transition hover:bg-[#5B412A] hover:text-white"
          onClick={handleFavoriteClick}
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <i className={`${isFavorite ? 'fas' : 'far'} fa-heart text-[#5B412A] group-hover:text-white`}></i>
        </button>
      </div>
      
      <Link href={`/products/${product.slug}`}>
        <a>
          <BlindsAnimation className="h-64">
            <img 
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {product.isOnSale && (
              <div className="absolute top-0 left-0 bg-[#5B412A] text-white px-3 py-1 text-sm font-medium">
                Sale!
              </div>
            )}
          </BlindsAnimation>
          
          <div className="p-5">
            <h3 className="text-lg font-medium text-[#225260] mb-2">{product.name}</h3>
            
            <div className="flex items-center space-x-1 text-yellow-400 mb-3">
              {/* {renderStars()} */}
              <span className="text-gray-500 text-sm ml-2">({product.description})</span>
            </div>
            
            {/* <div className="flex justify-between items-center">
              
              <motion.span 
                className="text-[#225260] hover:underline font-medium text-sm"
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
              >
                Select Options
              </motion.span>
            </div> */}
          </div>
        </a>
      </Link>
    </div>
  );
};

export default ProductCard;
