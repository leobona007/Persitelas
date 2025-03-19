import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  const apiRouter = express.Router();
  
  // Products endpoints
  apiRouter.get('/products', async (req, res) => {
    try {
      const products = await storage.getProducts();
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching products' });
    }
  });
  
  apiRouter.get('/products/featured', async (req, res) => {
    try {
      const limit = req.query.limit ? parseInt(req.query.limit as string) : undefined;
      const products = await storage.getFeaturedProducts(limit);
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching featured products' });
    }
  });
  
  apiRouter.get('/products/category/:slug', async (req, res) => {
    try {
      const products = await storage.getProductsByCategory(req.params.slug);
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching products by category' });
    }
  });
  
  apiRouter.get('/products/:slug', async (req, res) => {
    try {
      const product = await storage.getProductBySlug(req.params.slug);
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.json(product);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching product' });
    }
  });
  
  // Categories endpoints
  apiRouter.get('/categories', async (req, res) => {
    try {
      const categories = await storage.getCategories();
      res.json(categories);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching categories' });
    }
  });
  
  apiRouter.get('/categories/:slug', async (req, res) => {
    try {
      const category = await storage.getCategoryBySlug(req.params.slug);
      if (!category) {
        return res.status(404).json({ message: 'Category not found' });
      }
      res.json(category);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching category' });
    }
  });
  
  // Testimonials endpoint
  apiRouter.get('/testimonials', async (req, res) => {
    try {
      const testimonials = await storage.getTestimonials();
      res.json(testimonials);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching testimonials' });
    }
  });
  
  // Articles endpoints
  apiRouter.get('/articles', async (req, res) => {
    try {
      const limit = req.query.limit ? parseInt(req.query.limit as string) : undefined;
      const articles = await storage.getArticles(limit);
      res.json(articles);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching articles' });
    }
  });
  
  apiRouter.get('/articles/:slug', async (req, res) => {
    try {
      const article = await storage.getArticleBySlug(req.params.slug);
      if (!article) {
        return res.status(404).json({ message: 'Article not found' });
      }
      res.json(article);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching article' });
    }
  });
  
  // Register API routes
  app.use('/api', apiRouter);

  const httpServer = createServer(app);

  return httpServer;
};

import express from 'express';
