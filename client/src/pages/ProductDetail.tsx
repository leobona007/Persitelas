import { useState } from 'react';
import { useParams, Link } from 'wouter';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet';
import { Product } from '@shared/schema';
import { useToast } from '@/hooks/use-toast';
import BlindsAnimation from '@/components/ui/blinds-animation';
import { motion } from 'framer-motion';

const ProductDetail = () => {
  const { slug } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
  const { toast } = useToast();
  
  const { data: product, isLoading, error } = useQuery<Product>({
    queryKey: [`/api/products/${slug}`],
  });
  
  const handleAddToCart = () => {
    toast({
      title: 'Added to cart',
      description: `${product?.name} has been added to your cart`,
      duration: 3000,
    });
  };
  
  const handleOptionChange = (optionType: string, value: string) => {
    setSelectedOptions(prev => ({
      ...prev,
      [optionType]: value,
    }));
  };
  
  // Render stars based on rating
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => {
      if (i < Math.floor(rating)) {
        return <i key={i} className="fas fa-star"></i>;
      } else if (i === Math.floor(rating) && rating % 1 >= 0.5) {
        return <i key={i} className="fas fa-star-half-alt"></i>;
      } else {
        return <i key={i} className="far fa-star"></i>;
      }
    });
  };
  
  if (isLoading) {
    return (
      <div className="pt-24 pb-16 container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-10 animate-pulse">
          <div className="w-full md:w-1/2 h-[500px] bg-gray-200 rounded"></div>
          <div className="w-full md:w-1/2">
            <div className="h-10 bg-gray-200 rounded mb-4 w-3/4"></div>
            <div className="h-6 bg-gray-200 rounded mb-6 w-1/3"></div>
            <div className="h-4 bg-gray-200 rounded mb-2 w-full"></div>
            <div className="h-4 bg-gray-200 rounded mb-2 w-full"></div>
            <div className="h-4 bg-gray-200 rounded mb-8 w-3/4"></div>
            <div className="h-10 bg-gray-200 rounded mb-6 w-1/3"></div>
            <div className="h-12 bg-gray-200 rounded mb-4 w-full"></div>
            <div className="h-12 bg-gray-200 rounded w-full"></div>
          </div>
        </div>
      </div>
    );
  }
  
  if (error || !product) {
    return (
      <div className="pt-24 pb-16 container mx-auto px-4 text-center">
        <h1 className="text-3xl font-serif text-[#225260] mb-4">Product Not Found</h1>
        <p className="text-gray-600 mb-8">Sorry, the product you're looking for doesn't exist or has been removed.</p>
        <Link href="/products">
          <a className="bg-[#225260] text-white px-6 py-3 rounded hover:bg-[#225260]/90 transition">
            Browse All Products
          </a>
        </Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{product.name} | Gardis - Blinds & Curtains</title>
        <meta name="description" content={product.shortDescription || product.description.substring(0, 160)} />
      </Helmet>
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumbs */}
          <div className="flex items-center text-sm mb-8">
            <Link href="/">
              <a className="text-gray-500 hover:text-[#225260]">Home</a>
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/products">
              <a className="text-gray-500 hover:text-[#225260]">Products</a>
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-[#225260]">{product.name}</span>
          </div>
          
          <div className="flex flex-col md:flex-row gap-10">
            {/* Product Image */}
            <div className="w-full md:w-1/2">
              <BlindsAnimation className="rounded-md overflow-hidden">
                <img 
                  src={product.images[0]} 
                  alt={product.name} 
                  className="w-full h-auto"
                />
              </BlindsAnimation>
            </div>
            
            {/* Product Details */}
            <div className="w-full md:w-1/2">
              <h1 className="text-3xl font-serif text-[#225260] mb-2">{product.name}</h1>
              
              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-yellow-400">
                  {renderStars(product.rating)}
                </div>
                <span className="text-gray-500">({product.reviewCount} reviews)</span>
              </div>
              
              <div className="text-2xl font-medium text-[#5B412A] mb-6">
                {product.price}
              </div>
              
              <div className="text-gray-700 mb-8">
                <p>{product.description}</p>
              </div>
              
              {/* Product Options */}
              {product.options && Object.entries(product.options).map(([optionType, values]) => (
                <div key={optionType} className="mb-6">
                  <h3 className="text-lg font-medium text-[#225260] mb-2 capitalize">{optionType}</h3>
                  <div className="flex flex-wrap gap-2">
                    {(values as string[]).map((value) => (
                      <button 
                        key={value}
                        className={`px-4 py-2 border ${selectedOptions[optionType] === value ? 'border-[#225260] bg-[#225260] text-white' : 'border-gray-300 bg-white hover:border-[#225260]'} rounded-md transition`}
                        onClick={() => handleOptionChange(optionType, value)}
                      >
                        {value}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
              
              {/* Quantity */}
              <div className="mb-6">
                <h3 className="text-lg font-medium text-[#225260] mb-2">Quantity</h3>
                <div className="flex items-center">
                  <button 
                    className="w-10 h-10 border border-gray-300 flex items-center justify-center"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <i className="fas fa-minus"></i>
                  </button>
                  <input 
                    type="number" 
                    className="w-16 h-10 border-t border-b border-gray-300 text-center" 
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    min="1"
                  />
                  <button 
                    className="w-10 h-10 border border-gray-300 flex items-center justify-center"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <i className="fas fa-plus"></i>
                  </button>
                </div>
              </div>
              
              {/* Add to Cart */}
              <motion.button
                className="w-full bg-[#225260] text-white px-6 py-3 rounded-md hover:bg-[#225260]/90 transition mb-4"
                onClick={handleAddToCart}
                whileTap={{ scale: 0.95 }}
              >
                Add to Cart
              </motion.button>
              
              {/* Wishlist */}
              <button className="w-full border border-[#5B412A] text-[#5B412A] px-6 py-3 rounded-md hover:bg-[#5B412A] hover:text-white transition flex items-center justify-center">
                <i className="far fa-heart mr-2"></i>
                Add to Wishlist
              </button>
              
              {/* Additional Info */}
              <div className="mt-8 border-t border-gray-200 pt-6">
                <div className="flex items-center text-gray-600 mb-2">
                  <i className="fas fa-truck mr-2"></i>
                  <span>Free shipping on orders over $100</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <i className="fas fa-sync-alt mr-2"></i>
                  <span>30-day returns policy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
