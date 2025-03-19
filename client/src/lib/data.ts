import { Product, Category, Testimonial, Article } from '@shared/schema';

// This file provides type-safe interfaces to access our API data
// The actual data is stored on the server and accessed via API calls

/**
 * Fetch all products
 */
export async function fetchProducts(): Promise<Product[]> {
  const response = await fetch('/api/products');
  if (!response.ok) {
    throw new Error(`Error fetching products: ${response.statusText}`);
  }
  return response.json();
}

/**
 * Fetch products by category
 */
export async function fetchProductsByCategory(categorySlug: string): Promise<Product[]> {
  const response = await fetch(`/api/products/category/${categorySlug}`);
  if (!response.ok) {
    throw new Error(`Error fetching products by category: ${response.statusText}`);
  }
  return response.json();
}

/**
 * Fetch featured products
 */
export async function fetchFeaturedProducts(limit?: number): Promise<Product[]> {
  const url = limit ? `/api/products/featured?limit=${limit}` : '/api/products/featured';
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Error fetching featured products: ${response.statusText}`);
  }
  return response.json();
}

/**
 * Fetch a single product by slug
 */
export async function fetchProductBySlug(slug: string): Promise<Product> {
  const response = await fetch(`/api/products/${slug}`);
  if (!response.ok) {
    throw new Error(`Error fetching product: ${response.statusText}`);
  }
  return response.json();
}

/**
 * Fetch all categories
 */
export async function fetchCategories(): Promise<Category[]> {
  const response = await fetch('/api/categories');
  if (!response.ok) {
    throw new Error(`Error fetching categories: ${response.statusText}`);
  }
  return response.json();
}

/**
 * Fetch a single category by slug
 */
export async function fetchCategoryBySlug(slug: string): Promise<Category> {
  const response = await fetch(`/api/categories/${slug}`);
  if (!response.ok) {
    throw new Error(`Error fetching category: ${response.statusText}`);
  }
  return response.json();
}

/**
 * Fetch all testimonials
 */
export async function fetchTestimonials(): Promise<Testimonial[]> {
  const response = await fetch('/api/testimonials');
  if (!response.ok) {
    throw new Error(`Error fetching testimonials: ${response.statusText}`);
  }
  return response.json();
}

/**
 * Fetch all blog articles, with optional limit
 */
export async function fetchArticles(limit?: number): Promise<Article[]> {
  const url = limit ? `/api/articles?limit=${limit}` : '/api/articles';
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Error fetching articles: ${response.statusText}`);
  }
  return response.json();
}

/**
 * Fetch a single article by slug
 */
export async function fetchArticleBySlug(slug: string): Promise<Article> {
  const response = await fetch(`/api/articles/${slug}`);
  if (!response.ok) {
    throw new Error(`Error fetching article: ${response.statusText}`);
  }
  return response.json();
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
