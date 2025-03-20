import { Product, Category, Testimonial, Article } from '@shared/schema';

// Static data for products
export const products: Product[] = [
  {
    id: 1,
    name: 'Roller Blinds',
    description: 'Our roller blinds combine functionality with style, offering a sleek and modern solution for any window. Available in a wide range of fabrics, colors, and opacity levels.',
    shortDescription: 'Sleek, modern window coverings with various opacity options',
    price: '89.99',
    priceRange: '$89.99 - $199.99',
    images: [
      '/images/products/roller-blinds-1.jpg',
      '/images/products/roller-blinds-2.jpg',
      '/images/products/roller-blinds-3.jpg'
    ],
    category: 'blinds',
    isFeatured: true,
    isOnSale: false,
    rating: 4.5,
    reviewCount: 128,
    options: {
      colors: ['White', 'Beige', 'Gray', 'Black', 'Navy'],
      materials: ['Polyester', 'Linen Blend', 'Blackout'],
      widths: ['60cm', '90cm', '120cm', '150cm', 'Custom']
    },
    slug: 'roller-blinds'
  },
  {
    id: 2,
    name: 'Venetian Blinds',
    description: 'Classic venetian blinds offering excellent light control and privacy. Our aluminum and wooden options are durable, easy to clean, and complement any interior design.',
    shortDescription: 'Classic slatted blinds with precise light control',
    price: '109.99',
    priceRange: '$109.99 - $259.99',
    images: [
      '/images/products/venetian-blinds-1.jpg',
      '/images/products/venetian-blinds-2.jpg',
      '/images/products/venetian-blinds-3.jpg'
    ],
    category: 'blinds',
    isFeatured: true,
    isOnSale: true,
    rating: 4.3,
    reviewCount: 95,
    options: {
      colors: ['White', 'Cream', 'Natural Wood', 'Walnut', 'Black'],
      materials: ['Aluminum', 'Basswood', 'PVC'],
      widths: ['60cm', '90cm', '120cm', '150cm', 'Custom']
    },
    slug: 'venetian-blinds'
  },
  {
    id: 3,
    name: 'Roman Curtains',
    description: 'Elegant and timeless, our roman curtains add a touch of sophistication to any room. When raised, they fold up neatly, creating a cascading effect that adds texture and visual interest.',
    shortDescription: 'Elegant fabric curtains with a cascading fold effect',
    price: '149.99',
    priceRange: '$149.99 - $349.99',
    images: [
      '/images/products/roman-curtains-1.jpg',
      '/images/products/roman-curtains-2.jpg',
      '/images/products/roman-curtains-3.jpg'
    ],
    category: 'curtains',
    isFeatured: true,
    isOnSale: false,
    rating: 4.7,
    reviewCount: 112,
    options: {
      colors: ['White', 'Cream', 'Gray', 'Blue', 'Terracotta'],
      materials: ['Cotton', 'Linen', 'Polyester Blend', 'Silk Blend'],
      widths: ['80cm', '100cm', '120cm', '150cm', '180cm', 'Custom']
    },
    slug: 'roman-curtains'
  },
  {
    id: 4,
    name: 'Vertical Blinds',
    description: 'Perfect for large windows and sliding doors, our vertical blinds offer excellent coverage and light control. The vertical slats can be rotated to adjust light levels or drawn completely to one side.',
    shortDescription: 'Vertical slat blinds ideal for large windows and doors',
    price: '129.99',
    priceRange: '$129.99 - $299.99',
    images: [
      '/images/products/vertical-blinds-1.jpg',
      '/images/products/vertical-blinds-2.jpg',
      '/images/products/vertical-blinds-3.jpg'
    ],
    category: 'blinds',
    isFeatured: false,
    isOnSale: true,
    rating: 4.1,
    reviewCount: 78,
    options: {
      colors: ['White', 'Off-white', 'Gray', 'Black', 'Blue'],
      materials: ['PVC', 'Fabric', 'Aluminum'],
      widths: ['100cm', '150cm', '200cm', '250cm', 'Custom']
    },
    slug: 'vertical-blinds'
  },
  {
    id: 5,
    name: 'Sheer Curtains',
    description: 'Our lightweight sheer curtains diffuse sunlight beautifully while maintaining privacy. They create a soft, ethereal atmosphere and can be layered with heavier curtains for a complete window treatment.',
    shortDescription: 'Lightweight, translucent curtains for soft light diffusion',
    price: '79.99',
    priceRange: '$79.99 - $199.99',
    images: [
      '/images/products/sheer-curtains-1.jpg',
      '/images/products/sheer-curtains-2.jpg',
      '/images/products/sheer-curtains-3.jpg'
    ],
    category: 'curtains',
    isFeatured: true,
    isOnSale: false,
    rating: 4.6,
    reviewCount: 143,
    options: {
      colors: ['White', 'Ivory', 'Light Gray', 'Blush', 'Pale Blue'],
      materials: ['Voile', 'Chiffon', 'Organza', 'Polyester'],
      widths: ['140cm', '180cm', '220cm', '280cm', 'Custom']
    },
    slug: 'sheer-curtains'
  },
  {
    id: 6,
    name: 'Blackout Curtains',
    description: 'Our premium blackout curtains block light, reduce noise, and provide excellent insulation. Perfect for bedrooms, home theaters, or any room where you want complete light control and privacy.',
    shortDescription: 'Light-blocking, insulating curtains for complete privacy',
    price: '129.99',
    priceRange: '$129.99 - $299.99',
    images: [
      '/images/products/blackout-curtains-1.jpg',
      '/images/products/blackout-curtains-2.jpg',
      '/images/products/blackout-curtains-3.jpg'
    ],
    category: 'curtains',
    isFeatured: true,
    isOnSale: true,
    rating: 4.8,
    reviewCount: 187,
    options: {
      colors: ['White', 'Beige', 'Gray', 'Navy', 'Emerald', 'Burgundy'],
      materials: ['Polyester', 'Microfiber', 'Thermal Insulated'],
      widths: ['140cm', '180cm', '220cm', '280cm', 'Custom']
    },
    slug: 'blackout-curtains'
  },
  {
    id: 7,
    name: 'Wooden Blinds',
    description: 'Add warmth and natural beauty to your space with our wooden blinds. Made from premium hardwoods, these blinds offer excellent durability and a timeless aesthetic that complements any decor style.',
    shortDescription: 'Natural wood slat blinds for a warm, classic look',
    price: '159.99',
    priceRange: '$159.99 - $399.99',
    images: [
      '/images/products/wooden-blinds-1.jpg',
      '/images/products/wooden-blinds-2.jpg',
      '/images/products/wooden-blinds-3.jpg'
    ],
    category: 'blinds',
    isFeatured: false,
    isOnSale: false,
    rating: 4.5,
    reviewCount: 92,
    options: {
      colors: ['Natural', 'Oak', 'Cherry', 'Walnut', 'Mahogany', 'White'],
      materials: ['Basswood', 'Bamboo', 'Cedar'],
      widths: ['60cm', '90cm', '120cm', '150cm', 'Custom']
    },
    slug: 'wooden-blinds'
  },
  {
    id: 8,
    name: 'Cellular Shades',
    description: 'Our energy-efficient cellular shades feature a unique honeycomb design that traps air, providing excellent insulation. Available in single, double, or triple cell options for varying levels of insulation.',
    shortDescription: 'Energy-efficient honeycomb design for insulation',
    price: '119.99',
    priceRange: '$119.99 - $279.99',
    images: [
      '/images/products/cellular-shades-1.jpg',
      '/images/products/cellular-shades-2.jpg',
      '/images/products/cellular-shades-3.jpg'
    ],
    category: 'shades',
    isFeatured: true,
    isOnSale: false,
    rating: 4.7,
    reviewCount: 108,
    options: {
      colors: ['White', 'Cream', 'Beige', 'Gray', 'Tan'],
      cellTypes: ['Single Cell', 'Double Cell', 'Triple Cell'],
      opacities: ['Light Filtering', 'Room Darkening', 'Blackout'],
      widths: ['60cm', '90cm', '120cm', '150cm', 'Custom']
    },
    slug: 'cellular-shades'
  }
];

// Static data for categories
export const categories: Category[] = [
  {
    id: 1,
    name: 'Blinds',
    description: 'Explore our collection of premium blinds, including roller, venetian, vertical, and wooden options.',
    image: '/images/categories/blinds.jpg',
    slug: 'blinds'
  },
  {
    id: 2,
    name: 'Curtains',
    description: 'Discover our elegant curtain collection, from sheer to blackout, designed to enhance any room.',
    image: '/images/categories/curtains.jpg',
    slug: 'curtains'
  },
  {
    id: 3,
    name: 'Shades',
    description: 'Browse our innovative window shades, including cellular, roller, and roman designs for modern homes.',
    image: '/images/categories/shades.jpg',
    slug: 'shades'
  },
  {
    id: 4,
    name: 'Accessories',
    description: 'Complete your window treatments with our premium accessories, including rods, tiebacks, and more.',
    image: '/images/categories/accessories.jpg',
    slug: 'accessories'
  }
];

// Static data for testimonials
export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Homeowner',
    content: 'The blackout curtains I purchased are amazing! They completely transformed my bedroom, blocking out all light and reducing outside noise. The quality is exceptional and the installation service was professional and efficient.',
    rating: 5
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    role: 'Interior Designer',
    content: 'As an interior designer, I regularly recommend Persitelas to my clients. Their range of products is extensive, the quality is consistently high, and their customer service is unmatched in the industry.',
    rating: 5
  },
  {
    id: 3,
    name: 'Emma Thompson',
    role: 'Customer',
    content: 'I ordered custom wooden blinds for my living room and couldn\'t be happier with the result. The measuring service was precise, and the blinds fit perfectly. The natural wood adds such warmth to my space!',
    rating: 4
  },
  {
    id: 4,
    name: 'David Chen',
    role: 'Homeowner',
    content: 'The cellular shades I purchased have made a noticeable difference in my energy bills. They provide excellent insulation while still looking stylish. The remote control operation is a convenient bonus!',
    rating: 5
  },
  {
    id: 5,
    name: 'Olivia Martinez',
    role: 'Customer',
    content: 'I was hesitant to order window treatments online, but the detailed measuring guide and helpful customer service made it easy. My roman curtains arrived quickly and look absolutely beautiful!',
    rating: 4
  }
];

// Static data for articles
export const articles: Article[] = [
  {
    id: 1,
    title: 'How to Choose the Perfect Window Treatments for Each Room',
    content: `<p>Selecting the right window treatments for each room in your home can be a daunting task. Different spaces have different requirements for light control, privacy, and style. Here's our room-by-room guide to help you make the best choices.</p>

<h2>Living Room</h2>
<p>Living rooms often benefit from layered window treatments that can be adjusted throughout the day. Consider pairing sheer curtains with heavier drapes to allow for maximum flexibility. During the day, the sheers provide privacy while still allowing natural light to filter through. In the evening, the drapes can be closed for additional privacy and insulation.</p>

<h2>Bedroom</h2>
<p>For bedrooms, prioritize window treatments that offer light control and privacy. Blackout curtains or cellular shades are excellent options for creating a dark, restful environment conducive to sleep. If you prefer to wake up with natural light, consider adding a sheer layer or choosing a top-down/bottom-up shade that allows you to let in light from the top while maintaining privacy.</p>

<h2>Kitchen</h2>
<p>Kitchens require window treatments that are easy to clean and won't absorb cooking odors. Faux wood blinds, roller shades, or cafe curtains are practical choices that can withstand moisture and are simple to wipe down. Avoid floor-length curtains that could pose a fire hazard near the stove.</p>

<h2>Bathroom</h2>
<p>Privacy is paramount in bathrooms, but you'll also want to consider moisture resistance. Vinyl blinds, faux wood blinds, or water-resistant roller shades are excellent choices. For a softer look, consider moisture-resistant polyester curtains that won't develop mildew.</p>`,
    excerpt: 'Learn how to select the ideal window treatments for each room in your home based on functionality, style, and specific room requirements.',
    image: '/images/blog/window-treatments-guide.jpg',
    publishDate: '2023-06-15',
    slug: 'how-to-choose-perfect-window-treatments'
  },
  {
    id: 2,
    title: 'The Benefits of Energy-Efficient Window Treatments',
    content: `<p>Did you know that your window treatments can significantly impact your home's energy efficiency? The right blinds, curtains, or shades can help reduce energy costs year-round by providing insulation and controlling light.</p>

<h2>Winter Insulation</h2>
<p>During cold months, up to 30% of your home's heating energy can be lost through windows. Cellular shades, with their honeycomb design, trap air in distinct pockets, creating an insulating barrier between the window and your room. Heavy drapes with thermal lining also provide excellent insulation when closed.</p>

<h2>Summer Heat Reduction</h2>
<p>In summer, solar heat gain through windows can make cooling systems work harder. Reflective blinds, solar shades, and light-colored window treatments can reflect sunlight away from your home. Exterior options like awnings can reduce solar heat gain by up to 77% on west-facing windows.</p>

<h2>Smart Operation</h2>
<p>Motorized window treatments that can be programmed to open and close at specific times maximize energy efficiency. Open blinds during winter days to let in warming sunlight, then close them at night to retain heat. In summer, keep treatments closed during peak sun hours to keep your home cooler.</p>`,
    excerpt: 'Discover how the right window treatments can help reduce energy costs and create a more comfortable home environment throughout the year.',
    image: '/images/blog/energy-efficient-windows.jpg',
    publishDate: '2023-07-22',
    slug: 'benefits-of-energy-efficient-window-treatments'
  },
  {
    id: 3,
    title: 'Trending Window Treatment Styles for 2023',
    content: `<p>Window treatments are not just functional elements but also key components of interior design. Here are the top window treatment trends we're seeing in 2023.</p>

<h2>Natural Materials</h2>
<p>Sustainable, eco-friendly window treatments made from natural materials like bamboo, jute, and linen are increasingly popular. These materials bring organic texture and warmth to spaces while aligning with environmentally conscious design principles.</p>

<h2>Minimalist Designs</h2>
<p>Clean lines and simple designs continue to dominate modern interiors. Roller blinds with sleek hardware, ripple fold drapery, and panel track systems offer functionality without visual clutter, perfect for contemporary spaces.</p>

<h2>Smart Home Integration</h2>
<p>Motorized blinds and shades that can be controlled via smartphone apps or voice commands are becoming standard in new homes. These smart window treatments can be programmed to adjust based on time of day, temperature, or occupancy, offering convenience and energy efficiency.</p>

<h2>Bold Colors and Patterns</h2>
<p>While neutrals remain timeless, we're seeing more homeowners embrace statement window treatments in rich jewel tones, geometric patterns, and botanical prints that serve as focal points in otherwise neutral rooms.</p>`,
    excerpt: 'Stay up-to-date with the latest window treatment trends of 2023, from sustainable materials to smart home integration and bold design statements.',
    image: '/images/blog/window-treatment-trends.jpg',
    publishDate: '2023-08-10',
    slug: 'trending-window-treatment-styles-2023'
  }
];