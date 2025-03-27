import { Product, Category, Testimonial, Article } from '@shared/schema';
import { products, categories, testimonials, articles } from './staticData';

// This file provides type-safe interfaces to access our data
// The data is now stored statically in the frontend

/**
 * Fetch all products
 */
export async function fetchProducts(): Promise<Product[]> {
  // Return static data instead of API call
  return Promise.resolve(products);
}

/**
 * Fetch products by category
 */
export async function fetchProductsByCategory(categorySlug: string): Promise<Product[]> {
  // Filter products by category from static data
  const filteredProducts = products.filter(product => product.category === categorySlug);
  return Promise.resolve(filteredProducts);
}

/**
 * Fetch featured products
 */
export async function fetchFeaturedProducts(limit?: number): Promise<Product[]> {
  // Filter featured products from static data
  let featuredProducts = products.filter(product => product.isFeatured);
  
  // Apply limit if provided
  if (limit && limit > 0) {
    featuredProducts = featuredProducts.slice(0, limit);
  }
  
  return Promise.resolve(featuredProducts);
}

/**
 * Fetch a single product by slug
 */
export async function fetchProductBySlug(slug: string): Promise<Product> {
  // Find product by slug from static data
  const product = products.find(p => p.slug === slug);
  
  if (!product) {
    throw new Error(`Product not found: ${slug}`);
  }
  
  return Promise.resolve(product);
}

/**
 * Fetch all categories
 */
export async function fetchCategories(): Promise<Category[]> {
  // Return static categories data
  return Promise.resolve(categories);
}

/**
 * Fetch a single category by slug
 */
export async function fetchCategoryBySlug(slug: string): Promise<Category> {
  // Find category by slug from static data
  const category = categories.find(c => c.slug === slug);
  
  if (!category) {
    throw new Error(`Category not found: ${slug}`);
  }
  
  return Promise.resolve(category);
}

/**
 * Fetch all testimonials, including Google reviews if available
 */
export async function fetchTestimonials(): Promise<Testimonial[]> {
  try {
    // Import the Google Maps service to fetch reviews
    const { fetchGoogleReviews } = await import('./googleMapsService');
    
    // Fetch Google reviews
    const googleReviews = await fetchGoogleReviews();
    
    // Combine static testimonials with Google reviews
    // We'll put Google reviews first as they're likely more recent
    const allTestimonials = [...googleReviews, ...testimonials];
    
    // Return combined testimonials
    return Promise.resolve(allTestimonials);
  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    // If there's an error with Google reviews, fall back to static testimonials
    return Promise.resolve(testimonials);
  }
}

/**
 * Fetch all blog articles, with optional limit
 */
export async function fetchArticles(limit?: number): Promise<Article[]> {
  // Get articles from static data with optional limit
  let result = articles;
  
  if (limit && limit > 0) {
    result = result.slice(0, limit);
  }
  
  return Promise.resolve(result);
}

/**
 * Fetch a single article by slug
 */
export async function fetchArticleBySlug(slug: string): Promise<Article> {
  // Find article by slug from static data
  const article = articles.find(a => a.slug === slug);
  
  if (!article) {
    throw new Error(`Article not found: ${slug}`);
  }
  
  return Promise.resolve(article);
}

/**
 * Helper function to format price for display
 */
export function formatPrice(price: string): string {
  // Remove any non-numeric characters except dots
  const numericPrice = price.replace(/[^\d.]/g, '');
  // Format with dollar sign
  return `$${numericPrice}`;
}

/**
 * Cart management functions - to be implemented in a real app
 * These are placeholders for now
 */
export function addToCart(productId: number, quantity: number, options?: Record<string, string>): void {
  console.log('Added to cart:', { productId, quantity, options });
  // In a real app, this would call an API endpoint or update local storage
}

export function toggleFavorite(productId: number): void {
  console.log('Toggled favorite status for product:', productId);
  // In a real app, this would call an API endpoint or update local storage
}

/**
 * Newsletter subscription - to be implemented in a real app
 * This is a placeholder for now
 */
export async function subscribeToNewsletter(email: string): Promise<{ success: boolean, message: string }> {
  // In a real app, this would call an API endpoint
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        message: 'Thank you for subscribing to our newsletter!'
      });
    }, 1000);
  });
}

/**
 * Contact form submission - to be implemented in a real app
 * This is a placeholder for now
 */
export async function submitContactForm(formData: any): Promise<{ success: boolean, message: string }> {
  // In a real app, this would call an API endpoint
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        message: 'Thank you for your message. We will get back to you soon!'
      });
    }, 1000);
  });
}

