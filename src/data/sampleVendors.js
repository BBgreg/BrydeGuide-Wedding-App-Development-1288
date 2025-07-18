// Sample vendor data for development and testing
export const sampleVendors = [
  // Wedding Planners
  {
    id: 'wp1',
    business_name: 'Events To a T',
    category: 'wedding_planner',
    location: 'Milwaukee',
    distance_from_milwaukee: 0,
    price_minimum: 3000,
    price_maximum: 8000,
    style_tags: ['classic', 'timeless', 'fresh'],
    specialties: ['Full-service planning', 'Local vendor relationships', 'Award-winning service'],
    description: 'When you\'re planning with Events to a T, we want you to feel like you\'re planning your wedding with your best friend. We truly want to get to know YOU and your vision for your day.',
    contact_email: 'emily@eventstoat.co',
    contact_phone: '(360) 393-9827',
    website_url: 'https://eventstoat.co/',
    portfolio_images: ['https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop&q=80'],
    capacity_minimum: 50,
    capacity_maximum: 500,
    rating: 4.9,
    review_count: 156,
    featured: true
  },

  // Venues
  {
    id: 'v1',
    business_name: 'St. James 1868',
    category: 'venue',
    location: 'Milwaukee',
    distance_from_milwaukee: 0,
    price_minimum: 8000,
    price_maximum: 15000,
    style_tags: ['historic', 'elegant', 'classic'],
    specialties: ['Historic charm', 'Downtown location', 'Full-service venue'],
    description: 'A beautifully restored 1868 historic venue in the heart of Milwaukee, offering timeless elegance for your wedding celebration.',
    contact_email: 'events@stjames1868.com',
    contact_phone: '(414) 555-1868',
    website_url: 'https://stjames1868.com',
    portfolio_images: ['https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=400&h=300&fit=crop&q=80'],
    capacity_minimum: 80,
    capacity_maximum: 250,
    rating: 4.8,
    review_count: 127,
    featured: true
  },
  {
    id: 'v2',
    business_name: 'Discovery World',
    category: 'venue',
    location: 'Milwaukee',
    distance_from_milwaukee: 0,
    price_minimum: 10000,
    price_maximum: 20000,
    style_tags: ['modern', 'unique', 'lakefront'],
    specialties: ['Lakefront views', 'Modern facilities', 'Unique setting'],
    description: 'Milwaukee\'s premier science and technology museum offering stunning lakefront views and modern facilities for unforgettable weddings.',
    contact_email: 'events@discoveryworld.org',
    contact_phone: '(414) 765-9966',
    website_url: 'https://discoveryworld.org',
    portfolio_images: ['https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=400&h=300&fit=crop&q=80'],
    capacity_minimum: 100,
    capacity_maximum: 400,
    rating: 4.9,
    review_count: 89,
    featured: true
  },
  {
    id: 'v3',
    business_name: 'The Atrium',
    category: 'venue',
    location: 'Shorewood',
    distance_from_milwaukee: 5,
    price_minimum: 6000,
    price_maximum: 12000,
    style_tags: ['elegant', 'intimate', 'garden'],
    specialties: ['Garden setting', 'Intimate atmosphere', 'Natural lighting'],
    description: 'An elegant venue in Shorewood featuring beautiful natural lighting and intimate garden settings perfect for romantic weddings.',
    contact_email: 'events@theatrium.com',
    contact_phone: '(414) 555-0789',
    website_url: 'https://theatrium.com',
    portfolio_images: ['https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&h=300&fit=crop&q=80'],
    capacity_minimum: 60,
    capacity_maximum: 180,
    rating: 4.8,
    review_count: 156,
    featured: true
  },
  {
    id: 'v4',
    business_name: 'Field Museum',
    category: 'venue',
    location: 'Chicago',
    distance_from_milwaukee: 90,
    price_minimum: 15000,
    price_maximum: 35000,
    style_tags: ['iconic', 'grand', 'historic'],
    specialties: ['Iconic setting', 'Museum backdrop', 'Grand architecture'],
    description: 'Exchange vows among world-class exhibits at Chicago\'s iconic Field Museum, offering a truly unique and memorable wedding experience.',
    contact_email: 'events@fieldmuseum.org',
    contact_phone: '(312) 922-9410',
    website_url: 'https://fieldmuseum.org',
    portfolio_images: ['https://images.unsplash.com/photo-1582192730841-2a682d7375f9?w=400&h=300&fit=crop&q=80'],
    capacity_minimum: 150,
    capacity_maximum: 500,
    rating: 4.9,
    review_count: 234,
    featured: true
  },

  // Photography
  {
    id: 'p1',
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

  // Videography
  {
    id: 'vid1',
    business_name: 'Films By Design',
    category: 'videography',
    location: 'Glendale',
    distance_from_milwaukee: 5,
    price_minimum: 2000,
    price_maximum: 5000,
    style_tags: ['cinematic', 'professional', 'storytelling'],
    specialties: ['Wedding videography', 'Cinematic films', 'Same-day edits'],
    description: 'Professional wedding videography capturing your love story with cinematic quality and artistic vision.',
    contact_email: 'info@filmsbydesign.co',
    contact_phone: '(262) 968-9586',
    website_url: 'https://filmsbydesign.co/',
    portfolio_images: ['https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=300&fit=crop&q=80'],
    capacity_minimum: 1,
    capacity_maximum: 500,
    rating: 4.9,
    review_count: 167,
    featured: true
  },

  // DJ Services
  {
    id: 'dj1',
    business_name: 'Sound By Design - DJ Ray',
    category: 'dj',
    location: 'Milwaukee',
    distance_from_milwaukee: 0,
    price_minimum: 800,
    price_maximum: 2000,
    style_tags: ['professional', 'experienced', 'versatile'],
    specialties: ['DJ services', 'MC services', 'Event coordination'],
    description: 'DJ Ray of Sunshine brings energy and professionalism to every event with Sound By Design\'s exceptional audio services.',
    contact_email: 'hello@soundbydesign.co',
    contact_phone: '262.993.3804',
    website_url: 'https://soundbydesign.co/ray-riordan',
    portfolio_images: ['https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop&q=80'],
    capacity_minimum: 50,
    capacity_maximum: 500,
    rating: 4.8,
    review_count: 89,
    featured: true
  },

  // Music
  {
    id: 'm1',
    business_name: 'Sound By Design',
    category: 'music',
    location: 'Milwaukee',
    distance_from_milwaukee: 0,
    price_minimum: 500,
    price_maximum: 1500,
    style_tags: ['professional', 'versatile', 'high-quality'],
    specialties: ['Live sound', 'Audio equipment', 'Professional mixing'],
    description: 'Professional audio services for weddings and events with top-tier equipment and experienced technicians.',
    contact_email: 'hello@soundbydesign.co',
    contact_phone: '262.945.5106',
    website_url: 'https://soundbydesign.co/',
    portfolio_images: ['https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=300&fit=crop&q=80'],
    capacity_minimum: 20,
    capacity_maximum: 1000,
    rating: 4.9,
    review_count: 134,
    featured: true
  },

  // Lighting
  {
    id: 'l1',
    business_name: 'Sound By Design - Lighting',
    category: 'lighting',
    location: 'Milwaukee',
    distance_from_milwaukee: 0,
    price_minimum: 600,
    price_maximum: 2500,
    style_tags: ['professional', 'atmospheric', 'customizable'],
    specialties: ['Wedding lighting', 'Uplighting', 'Dance floor lighting'],
    description: 'Transform your venue with professional lighting design from Sound By Design, creating the perfect ambiance for your special day.',
    contact_email: 'hello@soundbydesign.co',
    contact_phone: '262.945.5106',
    website_url: 'https://soundbydesign.co/',
    portfolio_images: ['https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=300&fit=crop&q=80'],
    capacity_minimum: 30,
    capacity_maximum: 800,
    rating: 4.8,
    review_count: 96,
    featured: true
  },

  // Photo Booth
  {
    id: 'pb1',
    business_name: 'Sound By Design - Photo Booth',
    category: 'photo_booth',
    location: 'Milwaukee',
    distance_from_milwaukee: 0,
    price_minimum: 400,
    price_maximum: 1200,
    style_tags: ['fun', 'interactive', 'professional'],
    specialties: ['Photo booth rental', 'Custom backdrops', 'Instant prints'],
    description: 'Add fun and memories to your wedding with Sound By Design\'s professional photo booth services.',
    contact_email: 'hello@soundbydesign.co',
    contact_phone: '262.945.5106',
    website_url: 'https://soundbydesign.co/',
    portfolio_images: ['https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=300&fit=crop&q=80'],
    capacity_minimum: 50,
    capacity_maximum: 500,
    rating: 4.7,
    review_count: 78,
    featured: true
  },

  // Catering
  {
    id: 'c1',
    business_name: 'Zarletti Catering',
    category: 'catering',
    location: 'Milwaukee',
    distance_from_milwaukee: 2,
    price_minimum: 75,
    price_maximum: 150,
    style_tags: ['italian', 'upscale', 'fresh'],
    specialties: ['Italian cuisine', 'Fresh ingredients', 'Custom menus'],
    description: 'Authentic Italian catering with fresh, locally-sourced ingredients and exceptional service for your wedding day.',
    contact_email: 'catering@zarletti.com',
    contact_phone: '(414) 225-0000',
    website_url: 'https://zarletti.com',
    portfolio_images: ['https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&q=80'],
    capacity_minimum: 50,
    capacity_maximum: 300,
    rating: 4.8,
    review_count: 145,
    featured: true
  },

  // Florist
  {
    id: 'f1',
    business_name: 'Bella Fiori',
    category: 'florist',
    location: 'Milwaukee',
    distance_from_milwaukee: 3,
    price_minimum: 800,
    price_maximum: 3000,
    style_tags: ['romantic', 'elegant', 'seasonal'],
    specialties: ['Bridal bouquets', 'Ceremony arrangements', 'Reception centerpieces'],
    description: 'Creating beautiful floral designs for Milwaukee weddings with fresh, seasonal flowers and artistic arrangements.',
    contact_email: 'info@bellafiori.com',
    contact_phone: '(414) 555-0789',
    website_url: 'https://bellafiori.com',
    portfolio_images: ['https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=400&h=300&fit=crop&q=80'],
    capacity_minimum: 20,
    capacity_maximum: 500,
    rating: 4.9,
    review_count: 203,
    featured: true
  },

  // Cake
  {
    id: 'ck1',
    business_name: 'Canela Bakery',
    category: 'cake',
    location: 'Milwaukee',
    distance_from_milwaukee: 4,
    price_minimum: 300,
    price_maximum: 1500,
    style_tags: ['custom', 'delicious', 'artistic'],
    specialties: ['Wedding cakes', 'Custom designs', 'Multiple flavors'],
    description: 'Artisan wedding cakes made with premium ingredients and custom designs to match your wedding vision.',
    contact_email: 'orders@canelabakery.com',
    contact_phone: '(414) 555-0456',
    website_url: 'https://canelabakery.com',
    portfolio_images: ['https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop&q=80'],
    capacity_minimum: 50,
    capacity_maximum: 500,
    rating: 4.8,
    review_count: 167,
    featured: true
  },

  // Transportation
  {
    id: 't1',
    business_name: 'Milwaukee Luxury Limo',
    category: 'transportation',
    location: 'Milwaukee',
    distance_from_milwaukee: 1,
    price_minimum: 200,
    price_maximum: 800,
    style_tags: ['luxury', 'reliable', 'professional'],
    specialties: ['Wedding transportation', 'Luxury vehicles', 'Professional chauffeurs'],
    description: 'Luxury transportation services for Milwaukee weddings with professional chauffeurs and pristine vehicles.',
    contact_email: 'info@milwaukeeluxurylimo.com',
    contact_phone: '(414) 555-0123',
    website_url: 'https://milwaukeeluxurylimo.com',
    portfolio_images: ['https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop&q=80'],
    capacity_minimum: 2,
    capacity_maximum: 20,
    rating: 4.7,
    review_count: 89,
    featured: true
  },

  // Officiant
  {
    id: 'o1',
    business_name: 'Reverend Sarah Johnson',
    category: 'officiant',
    location: 'Milwaukee',
    distance_from_milwaukee: 2,
    price_minimum: 400,
    price_maximum: 800,
    style_tags: ['personalized', 'spiritual', 'inclusive'],
    specialties: ['Wedding ceremonies', 'Personalized vows', 'Interfaith ceremonies'],
    description: 'Creating meaningful and personalized wedding ceremonies that reflect your unique love story and values.',
    contact_email: 'rev.sarah@milwaukeeweddings.com',
    contact_phone: '(414) 555-0321',
    website_url: 'https://milwaukeeweddings.com',
    portfolio_images: ['https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&q=80'],
    capacity_minimum: 20,
    capacity_maximum: 300,
    rating: 4.9,
    review_count: 134,
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