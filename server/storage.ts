// import { 
//   users, type User, type InsertUser,
//   products, type Product, type InsertProduct,
//   categories, type Category, type InsertCategory,
//   testimonials, type Testimonial, type InsertTestimonial,
//   articles, type Article, type InsertArticle
// } from "@shared/schema";

// export interface IStorage {
//   // User operations (from template)
//   getUser(id: number): Promise<User | undefined>;
//   getUserByUsername(username: string): Promise<User | undefined>;
//   createUser(user: InsertUser): Promise<User>;
  
//   // Product operations
//   getProducts(): Promise<Product[]>;
//   getProductById(id: number): Promise<Product | undefined>;
//   getProductBySlug(slug: string): Promise<Product | undefined>;
//   getProductsByCategory(category: string): Promise<Product[]>;
//   getFeaturedProducts(limit?: number): Promise<Product[]>;
//   createProduct(product: InsertProduct): Promise<Product>;
  
//   // Category operations
//   getCategories(): Promise<Category[]>;
//   getCategoryById(id: number): Promise<Category | undefined>;
//   getCategoryBySlug(slug: string): Promise<Category | undefined>;
//   createCategory(category: InsertCategory): Promise<Category>;
  
//   // Testimonial operations
//   getTestimonials(): Promise<Testimonial[]>;
//   createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
  
//   // Article operations
//   getArticles(limit?: number): Promise<Article[]>;
//   getArticleBySlug(slug: string): Promise<Article | undefined>;
//   createArticle(article: InsertArticle): Promise<Article>;
// }

// export class MemStorage implements IStorage {
//   private users: Map<number, User>;
//   private products: Map<number, Product>;
//   private categories: Map<number, Category>;
//   private testimonials: Map<number, Testimonial>;
//   private articles: Map<number, Article>;
  
//   private currentUserId: number;
//   private currentProductId: number;
//   private currentCategoryId: number;
//   private currentTestimonialId: number;
//   private currentArticleId: number;

//   constructor() {
//     this.users = new Map();
//     this.products = new Map();
//     this.categories = new Map();
//     this.testimonials = new Map();
//     this.articles = new Map();
    
//     this.currentUserId = 1;
//     this.currentProductId = 1;
//     this.currentCategoryId = 1;
//     this.currentTestimonialId = 1;
//     this.currentArticleId = 1;
    
//     this.initializeData();
//   }

//   private initializeData() {
//     // Initialize categories
//     const categories: InsertCategory[] = [
//       {
//         name: "Cortinas",
//         description: "Uma variedade irresistível de acessórios decorativos para iluminar sua casa",
//         image: "https://images.pexels.com/photos/3620234/pexels-photo-3620234.jpeg",
//         slug: "cortinas"
//       },
//       {
//         name: "Persianas",
//         description: "Nossas persianas são versáteis e elegantes, oferecendo proteção e sombra prática",
//         image: "https://images.pexels.com/photos/1267318/pexels-photo-1267318.jpeg",
//         slug: "persianas"
//       },
//       {
//         name: "Acessórios",
//         description: "Uma variedade irresistível de acessórios decorativos para iluminar sua casa",
//         image: "https://images.pexels.com/photos/945688/pexels-photo-945688.jpeg",
//         slug: "acessorios"
//       }
//     ];
    
//     categories.forEach(category => this.createCategory(category));
    
//     // Initialize products
//     const products: InsertProduct[] = [
//       {
//         name: "Cortinas Zen Azul Ovo de Pato",
//         description: "Estas elegantes cortinas trazem uma presença suave e calmante para seu espaço com seu tom azul ovo de pato. Perfeito para interiores contemporâneos que buscam um toque sutil de cor.",
//         shortDescription: "Elegantes cortinas azul ovo de pato com design de ilhós para fácil instalação",
//         price: "R$279,90",
//         priceRange: "R$279,90 – R$299,90",
//         images: ["https://images.pexels.com/photos/1753210/pexels-photo-1753210.jpeg"],
//         category: "cortinas",
//         isFeatured: true,
//         isOnSale: false,
//         rating: 4,
//         reviewCount: 24,
//         options: { sizes: ["Pequeno", "Médio", "Grande"] },
//         slug: "cortinas-zen-azul-ovo-de-pato"
//        },
//       // {
//       //   name: "Cortinas Suedine Chocolate com Ilhós",
//       //   description: "Adicione um toque de luxo com essas cortinas em tom chocolate com acabamento em suedine. O tecido tecido oferece durabilidade e estilo para ambientes sofisticados.",
//       //   shortDescription: "Luxuosas cortinas em tom chocolate com acabamento em suedine",
//       //   price: "R$289,90",
//       //   priceRange: "R$289,90 – R$299,90",
//       //   images: ["https://images.pexels.com/photos/276651/pexels-photo-276651.jpeg"],
//       //   category: "cortinas",
//       //   isFeatured: true,
//       //   isOnSale: true,
//       //   rating: 5,
//       //   reviewCount: 16,
//       //   options: { sizes: ["Médio", "Grande"] },
//       //   slug: "cortinas-suedine-chocolate-com-ilhos"
//       // },
//       // {
//       //   name: "Salla Ecru Plain Woven Eyelet Lined Curtains",
//       //   description: "These versatile ecru curtains feature a classic woven design with eyelet tops for easy hanging. The neutral tone complements any interior style.",
//       //   shortDescription: "Versatile ecru curtains with eyelet tops and lined for better light control",
//       //   price: "$49.99",
//       //   priceRange: "$49.99 – $50.99",
//       //   images: ["https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg"],
//       //   category: "curtains",
//       //   isFeatured: true,
//       //   isOnSale: false,
//       //   rating: 4,
//       //   reviewCount: 12,
//       //   options: { sizes: ["Small", "Medium"] },
//       //   slug: "salla-ecru-plain-woven-eyelet-lined-curtains"
//       // },
//       // {
//       //   name: "Zen Ecru Plain Eyelet Curtains",
//       //   description: "Simple elegance defines these plain ecru curtains. The lightweight fabric and eyelet design make them a practical and stylish choice for any room.",
//       //   shortDescription: "Simple and elegant plain ecru curtains with eyelet design",
//       //   price: "$27.99",
//       //   priceRange: "$27.99 – $29.99",
//       //   images: ["https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg"],
//       //   category: "curtains",
//       //   isFeatured: true,
//       //   isOnSale: false,
//       //   rating: 3,
//       //   reviewCount: 8,
//       //   options: { sizes: ["Small", "Large"] },
//       //   slug: "zen-ecru-plain-eyelet-curtains"
//       // },
//       // {
//       //   name: "Premium Wooden Venetian Blinds",
//       //   description: "Made from high-quality wood, these venetian blinds offer excellent light control and privacy while adding a natural element to your decor.",
//       //   shortDescription: "Natural wooden blinds with adjustable slats for perfect light control",
//       //   price: "$89.99",
//       //   priceRange: "$89.99 – $129.99",
//       //   images: ["https://images.pexels.com/photos/276514/pexels-photo-276514.jpeg"],
//       //   category: "blinds",
//       //   isFeatured: true,
//       //   isOnSale: false,
//       //   rating: 5,
//       //   reviewCount: 31,
//       //   options: { colors: ["Natural", "Mahogany", "White"], sizes: ["Small", "Medium", "Large"] },
//       //   slug: "premium-wooden-venetian-blinds"
//       // },
//       // {
//       //   name: "Modern Roller Blinds",
//       //   description: "Contemporary roller blinds that combine functionality with style. Available in various colors to match your interior design preferences.",
//       //   shortDescription: "Contemporary roller blinds with smooth operation and clean lines",
//       //   price: "$45.99",
//       //   priceRange: "$45.99 – $65.99",
//       //   images: ["https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg"],
//       //   category: "blinds",
//       //   isFeatured: false,
//       //   isOnSale: true,
//       //   rating: 4,
//       //   reviewCount: 18,
//       //   options: { colors: ["White", "Gray", "Black", "Blue"], sizes: ["Small", "Medium", "Large"] },
//       //   slug: "modern-roller-blinds"
//       // },
//       // {
//       //   name: "Classic Roman Blinds",
//       //   description: "These elegant roman blinds combine the soft look of fabric window treatments with the functionality of blinds, perfect for a sophisticated interior.",
//       //   shortDescription: "Elegant fabric roman blinds with smooth folding operation",
//       //   price: "$75.99",
//       //   priceRange: "$75.99 – $95.99",
//       //   images: ["https://images.pexels.com/photos/2631746/pexels-photo-2631746.jpeg"],
//       //   category: "blinds",
//       //   isFeatured: false,
//       //   isOnSale: false,
//       //   rating: 5,
//       //   reviewCount: 22,
//       //   options: { colors: ["Beige", "Light Gray", "Sage Green"], sizes: ["Small", "Medium", "Large"] },
//       //   slug: "classic-roman-blinds"
//       // },
//       // {
//       //   name: "Decorative Curtain Rod Set",
//       //   description: "Complete your window treatment with this stylish curtain rod set featuring ornate finials and mounting hardware. Available in various finishes to match your decor.",
//       //   shortDescription: "Stylish curtain rod set with decorative finials and all mounting hardware",
//       //   price: "$39.99",
//       //   priceRange: "$39.99 – $59.99",
//       //   images: ["https://images.pexels.com/photos/763147/pexels-photo-763147.jpeg"],
//       //   category: "accessories",
//       //   isFeatured: false,
//       //   isOnSale: false,
//       //   rating: 4,
//       //   reviewCount: 15,
//       //   options: { finishes: ["Brushed Nickel", "Matte Black", "Antique Brass"], sizes: ["28-48 inches", "48-84 inches", "84-120 inches"] },
//       //   slug: "decorative-curtain-rod-set"
//       // },
//       // {
//       //   name: "Elegant Tiebacks",
//       //   description: "Add a finishing touch to your curtains with these elegant tiebacks. Available in various styles to complement your window treatments.",
//       //   shortDescription: "Decorative tiebacks to elegantly hold back your curtains",
//       //   price: "$24.99",
//       //   priceRange: "$24.99 – $29.99",
//       //   images: ["https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg"],
//       //   category: "accessories",
//       //   isFeatured: false,
//       //   isOnSale: false,
//       //   rating: 4,
//       //   reviewCount: 9,
//       //   options: { styles: ["Tassel", "Rope", "Crystal"], colors: ["Gold", "Silver", "Bronze"] },
//       //   slug: "elegant-tiebacks"
//       // }
//     ];
    
//     products.forEach(product => this.createProduct(product));
    
//     // Initialize testimonials
//     const testimonials: InsertTestimonial[] = [
//       {
//         name: "Helena Dourado",
//         role: "Cliente",
//         content: "Escolhi a Gardis pela rapidez de resposta, criatividade de ideias, variedade, profissionalismo e eficiência. Muito satisfeita.",
//         rating: 5
//       },
//       {
//         name: "Beatriz Arnaldo",
//         role: "Cliente",
//         content: "Cheguei ontem à noite e encontrei minhas novas persianas de bambu instaladas. Obrigada à equipe da Gardis pelo profissionalismo.",
//         rating: 5
//       },
//       {
//         name: "Jocelina Borges",
//         role: "Cliente",
//         content: "Eu recomendaria a Gardis para amigos - a equipe foi excepcional do ponto de vista de conhecimento e atendimento ao cliente.",
//         rating: 5
//       }
//     ];
    
//     testimonials.forEach(testimonial => this.createTestimonial(testimonial));
    
//     // Initialize articles
//     const articles: InsertArticle[] = [
//       {
//         title: "Estilos Imperdíveis desta Temporada",
//         content: "Descubra as últimas tendências em tratamentos para janelas que estão dominando o mundo do design nesta temporada. De padrões ousados a designs minimalistas, exploramos o que está em alta no mundo das cortinas e persianas.",
//         excerpt: "Descubra as últimas tendências em tratamentos para janelas que estão dominando o mundo do design nesta temporada.",
//         image: "https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg",
//         publishDate: "12 de Junho de 2023",
//         slug: "estilos-imperdiveis-desta-temporada"
//       },
//       {
//         title: "As Melhores Persianas para Redução de Ruído",
//         content: "Aprenda como os tratamentos certos para janelas podem reduzir significativamente o ruído e criar um ambiente doméstico mais tranquilo. Discutimos os melhores materiais e designs para isolamento acústico.",
//         excerpt: "Aprenda como os tratamentos certos para janelas podem reduzir significativamente o ruído e criar um ambiente doméstico mais tranquilo.",
//         image: "https://images.pexels.com/photos/3935321/pexels-photo-3935321.jpeg",
//         publishDate: "12 de Junho de 2023",
//         slug: "melhores-persianas-para-reducao-de-ruido"
//       },
//       {
//         title: "As Melhores Persianas e Toldos para Janelas",
//         content: "Compare os benefícios de várias opções de tratamento de janelas para encontrar a solução perfeita para suas necessidades específicas. Da filtragem de luz à privacidade, abordamos todos os aspectos a serem considerados.",
//         excerpt: "Compare os benefícios de várias opções de tratamento de janelas para encontrar a solução perfeita para suas necessidades específicas.",
//         image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
//         publishDate: "12 de Junho de 2023",
//         slug: "melhores-persianas-e-toldos-para-janelas"
//       }
//     ];
    
//     articles.forEach(article => this.createArticle(article));
//   }

//   // User operations (from template)
//   async getUser(id: number): Promise<User | undefined> {
//     return this.users.get(id);
//   }

//   async getUserByUsername(username: string): Promise<User | undefined> {
//     return Array.from(this.users.values()).find(
//       (user) => user.username === username,
//     );
//   }

//   async createUser(insertUser: InsertUser): Promise<User> {
//     const id = this.currentUserId++;
//     const user: User = { ...insertUser, id };
//     this.users.set(id, user);
//     return user;
//   }
  
//   // Product operations
//   async getProducts(): Promise<Product[]> {
//     return Array.from(this.products.values());
//   }
  
//   async getProductById(id: number): Promise<Product | undefined> {
//     return this.products.get(id);
//   }
  
//   async getProductBySlug(slug: string): Promise<Product | undefined> {
//     return Array.from(this.products.values()).find(
//       (product) => product.slug === slug,
//     );
//   }
  
//   async getProductsByCategory(category: string): Promise<Product[]> {
//     return Array.from(this.products.values()).filter(
//       (product) => product.category === category,
//     );
//   }
  
//   async getFeaturedProducts(limit?: number): Promise<Product[]> {
//     const featured = Array.from(this.products.values()).filter(
//       (product) => product.isFeatured,
//     );
    
//     return limit ? featured.slice(0, limit) : featured;
//   }
  
//   async createProduct(insertProduct: InsertProduct): Promise<Product> {
//     const id = this.currentProductId++;
//     const product: Product = { ...insertProduct, id };
//     this.products.set(id, product);
//     return product;
//   }
  
//   // Category operations
//   async getCategories(): Promise<Category[]> {
//     return Array.from(this.categories.values());
//   }
  
//   async getCategoryById(id: number): Promise<Category | undefined> {
//     return this.categories.get(id);
//   }
  
//   async getCategoryBySlug(slug: string): Promise<Category | undefined> {
//     return Array.from(this.categories.values()).find(
//       (category) => category.slug === slug,
//     );
//   }
  
//   async createCategory(insertCategory: InsertCategory): Promise<Category> {
//     const id = this.currentCategoryId++;
//     const category: Category = { ...insertCategory, id };
//     this.categories.set(id, category);
//     return category;
//   }
  
//   // Testimonial operations
//   async getTestimonials(): Promise<Testimonial[]> {
//     return Array.from(this.testimonials.values());
//   }
  
//   async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
//     const id = this.currentTestimonialId++;
//     const testimonial: Testimonial = { ...insertTestimonial, id };
//     this.testimonials.set(id, testimonial);
//     return testimonial;
//   }
  
//   // Article operations
//   async getArticles(limit?: number): Promise<Article[]> {
//     const allArticles = Array.from(this.articles.values());
//     return limit ? allArticles.slice(0, limit) : allArticles;
//   }
  
//   async getArticleBySlug(slug: string): Promise<Article | undefined> {
//     return Array.from(this.articles.values()).find(
//       (article) => article.slug === slug,
//     );
//   }
  
//   async createArticle(insertArticle: InsertArticle): Promise<Article> {
//     const id = this.currentArticleId++;
//     const article: Article = { ...insertArticle, id };
//     this.articles.set(id, article);
//     return article;
//   }
// }

// export const storage = new MemStorage();
