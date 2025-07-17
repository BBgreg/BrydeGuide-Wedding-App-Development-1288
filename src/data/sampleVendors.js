// Sample vendor data for development and testing
export const sampleVendors = [
  // Venues
  {
    id: '1',
    business_name: 'The Pfister Hotel',
    category: 'venue',
    location: 'Downtown Milwaukee',
    distance_from_milwaukee: 0,
    price_minimum: 8000,
    price_maximum: 15000,
    style_tags: ['classic', 'elegant', 'historic'],
    specialties: ['Historic charm', 'Downtown location', 'Full-service catering'],
    description: 'Milwaukee\'s grand hotel offering timeless elegance for your special day with stunning ballrooms and exceptional service.',
    contact_email: 'events@thepfisterhotel.com',
    contact_phone: '(414) 273-8222',
    website_url: 'https://thepfisterhotel.com',
    portfolio_images: ['https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=400&h=300&fit=crop&q=80'],
    capacity_minimum: 50,
    capacity_maximum: 300,
    rating: 4.8,
    review_count: 127,
    featured: true
  },
  {
    id: '2',
    business_name: 'Riverside Theater',
    category: 'venue',
    location: 'Downtown Milwaukee',
    distance_from_milwaukee: 1,
    price_minimum: 5000,
    price_maximum: 10000,
    style_tags: ['modern', 'unique', 'urban'],
    specialties: ['Historic theater', 'Unique atmosphere', 'Downtown convenience'],
    description: 'A beautifully restored historic theater providing a unique and memorable venue for your wedding celebration.',
    contact_email: 'events@riversidetheater.com',
    contact_phone: '(414) 286-3663',
    website_url: 'https://riversidetheater.com',
    portfolio_images: ['https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=400&h=300&fit=crop&q=80'],
    capacity_minimum: 100,
    capacity_maximum: 500,
    rating: 4.6,
    review_count: 89,
    featured: false
  },
  {
    id: '3',
    business_name: 'Villa Terrace',
    category: 'venue',
    location: 'Milwaukee East Side',
    distance_from_milwaukee: 3,
    price_minimum: 12000,
    price_maximum: 20000,
    style_tags: ['classic', 'elegant', 'garden'],
    specialties: ['Italian Renaissance architecture', 'Formal gardens', 'Lakefront views'],
    description: 'An exquisite Italian Renaissance-style villa with formal gardens and stunning Lake Michigan views.',
    contact_email: 'rentals@villaterrace.org',
    contact_phone: '(414) 271-3656',
    website_url: 'https://villaterrace.org',
    portfolio_images: ['https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&h=300&fit=crop&q=80'],
    capacity_minimum: 80,
    capacity_maximum: 200,
    rating: 4.9,
    review_count: 156,
    featured: true
  },

  // Photography
  {
    id: '4',
    business_name: 'Sarah Marie Photography',
    category: 'photography',
    location: 'Milwaukee',
    distance_from_milwaukee: 2,
    price_minimum: 2500,
    price_maximum: 4500,
    style_tags: ['modern', 'romantic', 'candid'],
    specialties: ['Natural light', 'Emotional storytelling', 'Couple portraits'],
    description: 'Capturing authentic moments and emotions with a modern, romantic approach to wedding photography.',
    contact_email: 'hello@sarahmariephoto.com',
    contact_phone: '(414) 555-0123',
    website_url: 'https://sarahmariephoto.com',
    portfolio_images: ['https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=300&fit=crop&q=80'],
    capacity_minimum: 1,
    capacity_maximum: 1000,
    rating: 4.9,
    review_count: 234,
    featured: true
  },
  {
    id: '5',
    business_name: 'Milwaukee Wedding Studios',
    category: 'photography',
    location: 'Milwaukee',
    distance_from_milwaukee: 1,
    price_minimum: 1800,
    price_maximum: 3200,
    style_tags: ['classic', 'traditional', 'posed'],
    specialties: ['Traditional poses', 'Family portraits', 'Ceremony coverage'],
    description: 'Professional wedding photography with a classic approach, ensuring every important moment is captured beautifully.',
    contact_email: 'info@milwaukeeweddingstudios.com',
    contact_phone: '(414) 555-0456',
    website_url: 'https://milwaukeeweddingstudios.com',
    portfolio_images: ['https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=400&h=300&fit=crop&q=80'],
    capacity_minimum: 1,
    capacity_maximum: 1000,
    rating: 4.7,
    review_count: 178,
    featured: false
  },
  {
    id: '6',
    business_name: 'Boho Lens Photography',
    category: 'photography',
    location: 'Milwaukee',
    distance_from_milwaukee: 4,
    price_minimum: 3000,
    price_maximum: 5000,
    style_tags: ['bohemian', 'artistic', 'natural'],
    specialties: ['Outdoor ceremonies', 'Artistic composition', 'Natural settings'],
    description: 'Bohemian-inspired wedding photography that captures the free-spirited essence of your special day.',
    contact_email: 'capture@boholens.com',
    contact_phone: '(414) 555-0789',
    website_url: 'https://boholens.com',
    portfolio_images: ['https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=400&h=300&fit=crop&q=80'],
    capacity_minimum: 1,
    capacity_maximum: 1000,
    rating: 4.8,
    review_count: 145,
    featured: true
  },

  // Catering
  {
    id: '7',
    business_name: 'Bartolotta Catering',
    category: 'catering',
    location: 'Milwaukee',
    distance_from_milwaukee: 2,
    price_minimum: 85,
    price_maximum: 150,
    style_tags: ['upscale', 'italian', 'contemporary'],
    specialties: ['Italian cuisine', 'Farm-to-table', 'Custom menus'],
    description: 'Award-winning catering featuring fresh, locally-sourced ingredients and exceptional Italian-inspired cuisine.',
    contact_email: 'catering@bartolotta.com',
    contact_phone: '(414) 771-7910',
    website_url: 'https://bartolotta.com/catering',
    portfolio_images: ['https://images.unsplash.com/photo-1555244162-803834f70033?w=400&h=300&fit=crop&q=80'],
    capacity_minimum: 50,
    capacity_maximum: 500,
    rating: 4.9,
    review_count: 289,
    featured: true
  },
  {
    id: '8',
    business_name: 'Elegant Occasions Catering',
    category: 'catering',
    location: 'Milwaukee',
    distance_from_milwaukee: 3,
    price_minimum: 65,
    price_maximum: 120,
    style_tags: ['classic', 'elegant', 'traditional'],
    specialties: ['Classic American', 'Buffet service', 'Dietary accommodations'],
    description: 'Full-service catering with elegant presentation and classic American cuisine for your perfect wedding day.',
    contact_email: 'events@elegantoccasions.com',
    contact_phone: '(414) 555-1234',
    website_url: 'https://elegantoccasions.com',
    portfolio_images: ['https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&q=80'],
    capacity_minimum: 30,
    capacity_maximum: 300,
    rating: 4.6,
    review_count: 156,
    featured: false
  },
  {
    id: '9',
    business_name: 'Farm Fresh Catering Co.',
    category: 'catering',
    location: 'Milwaukee',
    distance_from_milwaukee: 5,
    price_minimum: 55,
    price_maximum: 95,
    style_tags: ['rustic', 'organic', 'farm-to-table'],
    specialties: ['Organic ingredients', 'Seasonal menus', 'Sustainable practices'],
    description: 'Farm-to-table catering featuring organic, locally-sourced ingredients for a fresh and sustainable wedding feast.',
    contact_email: 'hello@farmfreshcatering.com',
    contact_phone: '(414) 555-5678',
    website_url: 'https://farmfreshcatering.com',
    portfolio_images: ['https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&q=80'],
    capacity_minimum: 25,
    capacity_maximum: 200,
    rating: 4.8,
    review_count: 123,
    featured: true
  }
]

// Helper function to get vendors by category
export const getVendorsByCategory = (category) => {
  return sampleVendors.filter(vendor => vendor.category === category)
}

// Helper function to get featured vendors
export const getFeaturedVendors = () => {
  return sampleVendors.filter(vendor => vendor.featured)
}

// Helper function to search vendors
export const searchVendors = (query, category = null) => {
  let vendors = category ? getVendorsByCategory(category) : sampleVendors
  
  if (!query) return vendors
  
  const lowercaseQuery = query.toLowerCase()
  
  return vendors.filter(vendor => 
    vendor.business_name.toLowerCase().includes(lowercaseQuery) ||
    vendor.description.toLowerCase().includes(lowercaseQuery) ||
    vendor.style_tags.some(tag => tag.toLowerCase().includes(lowercaseQuery)) ||
    vendor.specialties.some(specialty => specialty.toLowerCase().includes(lowercaseQuery))
  )
}