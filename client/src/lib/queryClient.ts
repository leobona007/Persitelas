import { QueryClient, QueryFunction } from "@tanstack/react-query";
import { fetchProducts, fetchProductsByCategory, fetchCategories, fetchTestimonials, fetchArticles, fetchProductBySlug, fetchCategoryBySlug, fetchArticleBySlug, fetchFeaturedProducts } from './data';

// This function is no longer needed as we're not making actual API calls
async function throwIfResNotOk(res: Response) {
  if (!res.ok) {
    const text = (await res.text()) || res.statusText;
    throw new Error(`${res.status}: ${text}`);
  }
}

// This function is kept for compatibility but won't be used for data fetching
export async function apiRequest(
  method: string,
  url: string,
  data?: unknown | undefined,
): Promise<Response> {
  const res = await fetch(url, {
    method,
    headers: data ? { "Content-Type": "application/json" } : {},
    body: data ? JSON.stringify(data) : undefined,
    credentials: "include",
  });

  await throwIfResNotOk(res);
  return res;
}

type UnauthorizedBehavior = "returnNull" | "throw";
export const getQueryFn: <T>(options: {
  on401: UnauthorizedBehavior;
}) => QueryFunction<T> =
  ({ on401: unauthorizedBehavior }) =>
  async ({ queryKey }) => {
    const path = queryKey[0] as string;
    
    // Intercept API calls and return static data instead
    if (path === '/api/products') {
      return fetchProducts() as Promise<T>;
    } else if (path.startsWith('/api/products/category/')) {
      const categorySlug = path.split('/').pop() as string;
      return fetchProductsByCategory(categorySlug) as Promise<T>;
    } else if (path === '/api/categories') {
      return fetchCategories() as Promise<T>;
    } else if (path === '/api/testimonials') {
      return fetchTestimonials() as Promise<T>;
    } else if (path.startsWith('/api/products/featured')) {
      return fetchFeaturedProducts() as Promise<T>;
    } else if (path.startsWith('/api/products/')) {
      const productSlug = path.split('/').pop() as string;
      return fetchProductBySlug(productSlug) as Promise<T>;
    } else if (path.startsWith('/api/categories/')) {
      const categorySlug = path.split('/').pop() as string;
      return fetchCategoryBySlug(categorySlug) as Promise<T>;
    } else if (path.startsWith('/api/articles/')) {
      const articleSlug = path.split('/').pop() as string;
      return fetchArticleBySlug(articleSlug) as Promise<T>;
    } else if (path.startsWith('/api/articles')) {
      return fetchArticles() as Promise<T>;
    }
    
    // Fallback to original behavior (should not happen with our static data)
    console.warn(`Unhandled API path: ${path}`);
    const res = await fetch(path, {
      credentials: "include",
    });

    if (unauthorizedBehavior === "returnNull" && res.status === 401) {
      return null;
    }

    await throwIfResNotOk(res);
    return await res.json();
  };

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn({ on401: "throw" }),
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});
