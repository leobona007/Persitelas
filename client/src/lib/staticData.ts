import { Product, Category, Testimonial, Article } from '@shared/schema';

// Static data for products
export const products: Product[] = [
  {
    id: 1,
    name: 'Persianas Romanas',
    description: 'A Persiana Romana é sinônimo de elegância e funcionalidade, ideal para quem busca um toque refinado na decoração sem abrir mão da praticidade. Seu design sofisticado, composto por painéis estruturados que se dobram em camadas suaves ao serem recolhidos, proporciona um visual moderno e harmonioso para qualquer ambiente.',
    shortDescription: 'Com design elegante e funcional, a Persiana Romana oferece controle de luz e privacidade, agregando estilo e conforto ao seu ambiente.',
    price: '',
    priceRange: '',
    images: [
      '/public/persiana_romana_sala.jpg',
      '/public/persiana_romana_sala_2.jpg',
      '/public/persiana_romana_blackout.jpg'
    ],
    category: 'persianas',
    isFeatured: true,
    isOnSale: false,
    rating: 4.5,
    reviewCount: 128,
    options: {
      colors: ['White', 'Beige', 'Gray', 'Black', 'Navy'],
      materials: ['Polyester', 'Linen Blend', 'Blackout'],
      widths: ['60cm', '90cm', '120cm', '150cm', 'Custom']
    },
    slug: 'persianas-romanas'
  },
  {
    id: 2,
    name: 'Persianas Motorizadas',
    description: 'Experimente o futuro da automação residencial com as Persianas Motorizadas da Persitelas. Desenvolvidas para oferecer praticidade, segurança e elegância, nossas persianas permitem o controle automático de luminosidade e privacidade com o simples toque de um botão. Com design moderno e tecnologia avançada, elas se adaptam perfeitamente a ambientes residenciais e corporativos, proporcionando conforto e economia de energia.',
    shortDescription: 'Persianas Motorizadas – Controle automático de luz e privacidade com design moderno e eficiência para transformar seu ambiente. ',
    price: '',
    priceRange: '',
    images: [
      '/public/persianas_motorizada_2.png',
      '/public/persiana_motorizada.jpeg',
      '/public/persiana_motorizada_3.jpg',
    ],
    category: 'persianas',
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
    slug: 'persianas-motorizadas'
  },
  {
    id: 3,
    name: 'Persianas Double-Vision',
    description: 'A Persiana Double Vision combina modernidade e funcionalidade, permitindo o ajuste perfeito entre luminosidade e privacidade. Seu design inovador conta com faixas translúcidas e opacas que se alternam, possibilitando diferentes níveis de iluminação sem abrir mão da elegância.',
    shortDescription: 'Com faixas ajustáveis, a Persiana Double Vision permite regular a luz e a privacidade com elegância e praticidade.',
    price: '',
    priceRange: '',
    images: [
      '/public/persiana_double_vision_sala.png',
      '/public/persiana_double_vision_sala_2.jpg',
      '/public/persiana_double_vision_sala_3.webp'
    ],
    category: 'persianas',
    isFeatured: true,
    isOnSale: false,
    rating: 4.3,
    reviewCount: 95,
    options: {
      colors: ['White', 'Cream', 'Natural Wood', 'Walnut', 'Black'],
      materials: ['Aluminum', 'Basswood', 'PVC'],
      widths: ['60cm', '90cm', '120cm', '150cm', 'Custom']
    },
    slug: 'persianas-double-vision'
  },
  {
    id: 4,
    name: 'Persianas De Teto',
    description: 'A Persiana de Teto é a solução ideal para ambientes com tetos de vidro, claraboias e áreas envidraçadas, proporcionando proteção solar, conforto térmico e controle de luminosidade sem comprometer a estética do espaço.',
    shortDescription: 'Ideal para tetos de vidro, a Persiana de Teto controla a luz e o calor com elegância e praticidade.',
    price: '',
    priceRange: '',
    images: [
      '/public/persiana_teto.jpg',
      '/public/persiana_teto_2.webp',
      '/public/persiana_teto_3.webp'
    ],
    category: 'persianas',
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
    id: 5,
    name: 'Persianas Externas',
    description: 'A Persiana Externa de Alumínio ou PVC combina resistência, segurança e conforto térmico, sendo ideal para quem busca isolamento eficiente contra calor, frio e ruídos. Seu design robusto e funcional protege janelas e fachadas contra intempéries, aumentando a durabilidade do ambiente e proporcionando maior privacidade.',
    shortDescription: 'Resistente e funcional, a Persiana Externa de Alumínio e PVC garante isolamento térmico, proteção solar e mais privacidade para seu espaço.',
    price: '',
    priceRange: '',
    images: [
      '/public/persiana_externa_porta_2.jpg',
      '/public/persiana_externa_4.jpg',
      '/public/persiana_externa_porta.jpg'
    ],
    category: 'persianas',
    isFeatured: false,
    isOnSale: false,
    rating: 4.1,
    reviewCount: 78,
    options: {
      colors: ['White', 'Off-white', 'Gray', 'Black', 'Blue'],
      materials: ['PVC', 'Fabric', 'Aluminum'],
      widths: ['100cm', '150cm', '200cm', '250cm', 'Custom']
    },
    slug: 'persianas-externas'
  },
  {
    id: 6,
    name: 'Tela de Proteção para Janelas',
    description: 'A Tela de Proteção para Janelas é a solução ideal para evitar quedas e garantir a segurança de crianças, idosos e pets em apartamentos e sobrados. Feita sob medida, com materiais resistentes e discretos, protege sem comprometer a ventilação e a estética do ambiente.',
    shortDescription: 'Tela de Proteção para Janelas – Segurança discreta e eficiente para proteger sua família e pets contra quedas.',
    price: '',
    priceRange: '',
    images: [
            '/public/tela_proteção_janela_2.jpeg',
      '/public/tela_proteção_janela_3.jpeg'
    ],
    category: 'telas-de-proteção',
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
    id: 7,
    name: 'Tela de Proteção para Piscinas ',
    description: 'A Tela de Proteção para Piscinas previne acidentes e garante mais segurança para crianças e animais de estimação. Feita sob medida, é resistente e discreta, proporcionando proteção sem comprometer a estética do ambiente',
    shortDescription: 'Tela de Proteção para Piscinas – Prevenção de acidentes com design discreto e resistente. ',
    price: '',
    priceRange: '',
    images: [
      '/public/tela_proteção_piscina_top.jpeg',
      '/public/tela_proteção_piscinas_2.jpg',
      '/public/tela_proteção_piscinas.jpg'
    ],
    category: 'telas-de-proteção',
    isFeatured: true,
    isOnSale: false,
    rating: 4.8,
    reviewCount: 187,
    options: {
      colors: ['White', 'Beige', 'Gray', 'Navy', 'Emerald', 'Burgundy'],
      materials: ['Polyester', 'Microfiber', 'Thermal Insulated'],
      widths: ['140cm', '180cm', '220cm', '280cm', 'Custom']
    },
    slug: 'telas-de-proteção-piscinas'
  },
  {
    id: 8,
    name: 'Tela de Proteção para Para-peitos',
    description: 'A Tela de Proteção para Parapeitos é projetada para evitar quedas e proporcionar segurança em sacadas, varandas e mezaninos. Fabricada sob medida, é resistente e mantém a ventilação sem afetar a estética do espaço.',
    shortDescription: 'Tela de Proteção para Parapeitos – Segurança discreta para varandas e sacadas sem comprometer a estética. ',
    price: '',
    priceRange: '',
    images: [
      '/public/tela_proteção_escadas.webp',
      '/public/tela_proteção_sacada.jpeg',
      '/public/tela_proteção_sacada_2.jpeg'
    ],
    category: 'telas-de-proteção',
    isFeatured: false,
    isOnSale: false,
    rating: 4.5,
    reviewCount: 92,
    options: {
      colors: ['Natural', 'Oak', 'Cherry', 'Walnut', 'Mahogany', 'White'],
      materials: ['Basswood', 'Bamboo', 'Cedar'],
      widths: ['60cm', '90cm', '120cm', '150cm', 'Custom']
    },
    slug: 'telas-de-proteção-para-peitos'
  },
  {
    id: 9,
    name: 'Mosquiteiras Para Janelas',
    description: 'A Tela para Mosquito para Janelas permite a ventilação natural sem a entrada de mosquitos e outros insetos. Fabricada sob medida, é resistente, discreta e fácil de instalar, proporcionando conforto e proteção contra os insetos.',
    shortDescription: 'Tela para Mosquito para Janelas, Permite a circulação do ar, mantendo os insetos do lado de fora.',
    price: '',
    priceRange: '',
    images: [
      '/public/tela_mosquiteiro.jpg',
      '/public/tela_mosquiteiro_3.jpg',
      '/public/tela_mosquiteiro_2.webp'
    ],
    category: 'mosquiteiras',
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
  },
  {
    id: 10,
    name: 'Mosquiteiras Para Portas',
    description: 'A Tela para Mosquito para Portas impede a entrada de insetos enquanto mantém a circulação de ar nos ambientes. Feita sob medida, é prática, discreta e ideal para portas de varandas, sacadas e áreas externas.',
    shortDescription: 'Tela para Mosquito para Portas – Protege sua casa contra insetos sem impedir a ventilação. ',
    price: '',
    priceRange: '',
    images: [
      '/public/tela_mosquiteira_porta.webp',
      '/public/tela_mosquiteiro_porta_2.jpg',
      
    ],
    category: 'mosquiteiras',
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
    slug: 'tela-mosquito'
  }
];

// Static data for categories
export const categories: Category[] = [
  {
    id: 1,
    name: 'Persianas',
    description: 'Conheça nossos modelos Personalizados que elevam o design do seu ambiente.',
    image: '/public/Persiana_Romana.jpg',
    slug: 'persianas'
  },
  {
    id: 2,
    name: 'Telas de Proteção',
    description: 'Telas totalmente adaptaveis a tua necessidade de proteção!',
    image: '/public/tela-de-protecao-piscina.webp',
    slug: 'telas-de-proteção'
  },
  {
    id: 3,
    name: 'Mosquiteiras',
    description: 'Traga conforto em sentir aquele ar gostoso entrando sem a companhia dos mosquitos.',
    image: '/public/Tela_mosquito.jpg',
    slug: 'mosquiteiras'
  },
  // {
  //   id: 4,
  //   name: 'Accessories',
  //   description: 'Complete your window treatments with our premium accessories, including rods, tiebacks, and more.',
  //   image: '/images/categories/accessories.jpg',
  //   slug: 'accessories'
  // }
];

// Static data for testimonials
export const testimonials: Testimonial[] = [
  // {
  //   id: 1,
  //   name: 'Sarah Johnson',
  //   role: 'Homeowner',
  //   content: 'The blackout curtains I purchased are amazing! They completely transformed my bedroom, blocking out all light and reducing outside noise. The quality is exceptional and the installation service was professional and efficient.',
  //   rating: 5
  // },
  // {
  //   id: 2,
  //   name: 'Michael Rodriguez',
  //   role: 'Interior Designer',
  //   content: 'As an interior designer, I regularly recommend Persitelas to my clients. Their range of products is extensive, the quality is consistently high, and their customer service is unmatched in the industry.',
  //   rating: 5
  // },
  // {
  //   id: 3,
  //   name: 'Emma Thompson',
  //   role: 'Customer',
  //   content: 'I ordered custom wooden blinds for my living room and couldn\'t be happier with the result. The measuring service was precise, and the blinds fit perfectly. The natural wood adds such warmth to my space!',
  //   rating: 4
  // },
  // {
  //   id: 4,
  //   name: 'David Chen',
  //   role: 'Homeowner',
  //   content: 'The cellular shades I purchased have made a noticeable difference in my energy bills. They provide excellent insulation while still looking stylish. The remote control operation is a convenient bonus!',
  //   rating: 5
  // },
  // {
  //   id: 5,
  //   name: 'Olivia Martinez',
  //   role: 'Customer',
  //   content: 'I was hesitant to order window treatments online, but the detailed measuring guide and helpful customer service made it easy. My roman curtains arrived quickly and look absolutely beautiful!',
  //   rating: 4
  // }
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