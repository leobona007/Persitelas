import { pgTable, text, serial, integer, boolean, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Products Table
export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  shortDescription: text("short_description"),
  price: text("price").notNull(),
  priceRange: text("price_range"),
  images: text("images").array().notNull(),
  category: text("category").notNull(),
  isFeatured: boolean("is_featured").default(false),
  isOnSale: boolean("is_sale").default(false),
  rating: integer("rating").default(0),
  reviewCount: integer("review_count").default(0),
  options: jsonb("options"),
  slug: text("slug").notNull().unique()
});

// Categories Table
export const categories = pgTable("categories", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  image: text("image").notNull(),
  slug: text("slug").notNull().unique()
});

// Testimonials Table
export const testimonials = pgTable("testimonials", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  role: text("role").default("Customer"),
  content: text("content").notNull(),
  rating: integer("rating").default(5)
});

// Blog Articles Table
export const articles = pgTable("articles", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  excerpt: text("excerpt").notNull(),
  image: text("image").notNull(),
  publishDate: text("publish_date").notNull(),
  slug: text("slug").notNull().unique()
});

// Schemata for data insertion
export const insertProductSchema = createInsertSchema(products).omit({ id: true });
export const insertCategorySchema = createInsertSchema(categories).omit({ id: true });
export const insertTestimonialSchema = createInsertSchema(testimonials).omit({ id: true });
export const insertArticleSchema = createInsertSchema(articles).omit({ id: true });

// Types for data selection
export type Product = typeof products.$inferSelect;
export type Category = typeof categories.$inferSelect;
export type Testimonial = typeof testimonials.$inferSelect;
export type Article = typeof articles.$inferSelect;

// Types for data insertion
export type InsertProduct = z.infer<typeof insertProductSchema>;
export type InsertCategory = z.infer<typeof insertCategorySchema>;
export type InsertTestimonial = z.infer<typeof insertTestimonialSchema>;
export type InsertArticle = z.infer<typeof insertArticleSchema>;

// Legacy schema required by template
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
