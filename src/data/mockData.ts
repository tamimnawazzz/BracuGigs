export const categories = [
  { id: 'graphics-design', name: 'Graphics & Design', icon: 'Palette' },
  { id: 'digital-marketing', name: 'Digital Marketing', icon: 'TrendingUp' },
  { id: 'writing-translation', name: 'Writing & Translation', icon: 'FileText' },
  { id: 'video-animation', name: 'Video & Animation', icon: 'Video' },
  { id: 'music-audio', name: 'Music & Audio', icon: 'Music' },
  { id: 'programming-tech', name: 'Programming & Tech', icon: 'Code' },
  { id: 'business', name: 'Business', icon: 'Briefcase' },
  { id: 'lifestyle', name: 'Lifestyle', icon: 'Heart' },
];

export const mockGigs = [
  {
    id: 'gig-1',
    title: 'I will design a modern logo for your brand',
    description: 'Professional logo design with unlimited revisions. Get a unique, memorable logo that represents your brand perfectly. Includes multiple concepts, all source files, and commercial rights.',
    category: 'graphics-design',
    price: 50,
    deliveryDays: 3,
    sellerId: 'seller-1',
    sellerName: 'Sarah Johnson',
    sellerAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    sellerLevel: 'Top Rated',
    rating: 4.9,
    reviewCount: 247,
    image: 'logo design branding',
    features: ['Unlimited Revisions', 'Source Files', 'Vector File', 'Printable File'],
    tags: ['logo', 'branding', 'design', 'graphics'],
    orders: 350
  },
  {
    id: 'gig-2',
    title: 'I will create professional social media content',
    description: 'Engaging social media posts designed to boost your online presence. Perfect for Instagram, Facebook, Twitter, and LinkedIn. Includes custom graphics and copy.',
    category: 'digital-marketing',
    price: 75,
    deliveryDays: 2,
    sellerId: 'seller-2',
    sellerName: 'Michael Chen',
    sellerAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    sellerLevel: 'Level 2',
    rating: 4.8,
    reviewCount: 189,
    image: 'social media marketing',
    features: ['10 Posts', 'Hashtag Research', 'Content Calendar', 'Royalty Free Images'],
    tags: ['social-media', 'marketing', 'content', 'instagram'],
    orders: 280
  },
  {
    id: 'gig-3',
    title: 'I will write SEO optimized blog articles',
    description: 'High-quality, well-researched articles optimized for search engines. Boost your website traffic with engaging content that ranks. Includes keyword research and meta descriptions.',
    category: 'writing-translation',
    price: 100,
    deliveryDays: 5,
    sellerId: 'seller-3',
    sellerName: 'Emma Williams',
    sellerAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    sellerLevel: 'Top Rated',
    rating: 5.0,
    reviewCount: 412,
    image: 'writing blog article',
    features: ['SEO Optimized', 'Plagiarism Free', 'Unlimited Revisions', 'Fast Delivery'],
    tags: ['writing', 'seo', 'blog', 'content'],
    orders: 520
  },
  {
    id: 'gig-4',
    title: 'I will create stunning product videos',
    description: 'Professional product videos that showcase your items in the best light. Perfect for e-commerce, Amazon listings, and social media ads. Includes music and transitions.',
    category: 'video-animation',
    price: 150,
    deliveryDays: 7,
    sellerId: 'seller-4',
    sellerName: 'David Martinez',
    sellerAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    sellerLevel: 'Level 2',
    rating: 4.7,
    reviewCount: 156,
    image: 'video production product',
    features: ['HD Quality', 'Background Music', 'Color Grading', 'Fast Turnaround'],
    tags: ['video', 'animation', 'product', 'marketing'],
    orders: 195
  },
  {
    id: 'gig-5',
    title: 'I will produce professional voiceovers',
    description: 'Crystal clear voiceovers for videos, podcasts, audiobooks, and more. Native English speaker with professional studio equipment. Quick turnaround guaranteed.',
    category: 'music-audio',
    price: 80,
    deliveryDays: 2,
    sellerId: 'seller-5',
    sellerName: 'Lisa Anderson',
    sellerAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop',
    sellerLevel: 'Top Rated',
    rating: 4.9,
    reviewCount: 328,
    image: 'microphone recording studio',
    features: ['Professional Quality', 'Background Music', 'Commercial Rights', 'Fast Delivery'],
    tags: ['voiceover', 'audio', 'narration', 'recording'],
    orders: 445
  },
  {
    id: 'gig-6',
    title: 'I will develop responsive web applications',
    description: 'Custom web applications built with modern technologies. React, Node.js, and more. Fully responsive, fast, and SEO-friendly. Includes deployment and documentation.',
    category: 'programming-tech',
    price: 500,
    deliveryDays: 14,
    sellerId: 'seller-6',
    sellerName: 'James Wilson',
    sellerAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    sellerLevel: 'Top Rated',
    rating: 5.0,
    reviewCount: 201,
    image: 'coding programming laptop',
    features: ['Responsive Design', 'Clean Code', 'Documentation', 'Bug Fixes'],
    tags: ['web-development', 'react', 'programming', 'tech'],
    orders: 178
  },
  {
    id: 'gig-7',
    title: 'I will create a comprehensive business plan',
    description: 'Detailed business plans for startups and established businesses. Includes market analysis, financial projections, and growth strategies. Investor-ready format.',
    category: 'business',
    price: 200,
    deliveryDays: 10,
    sellerId: 'seller-7',
    sellerName: 'Robert Taylor',
    sellerAvatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop',
    sellerLevel: 'Level 2',
    rating: 4.8,
    reviewCount: 143,
    image: 'business plan strategy',
    features: ['Market Research', 'Financial Projections', 'Executive Summary', 'Revisions'],
    tags: ['business', 'consulting', 'strategy', 'planning'],
    orders: 167
  },
  {
    id: 'gig-8',
    title: 'I will provide personalized fitness coaching',
    description: 'Custom workout plans and nutrition guidance tailored to your goals. Weekly check-ins and ongoing support. Transform your body and lifestyle with expert guidance.',
    category: 'lifestyle',
    price: 120,
    deliveryDays: 30,
    sellerId: 'seller-8',
    sellerName: 'Jennifer Brown',
    sellerAvatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop',
    sellerLevel: 'Top Rated',
    rating: 4.9,
    reviewCount: 267,
    image: 'fitness training exercise',
    features: ['Custom Plan', 'Weekly Check-ins', 'Meal Plans', '24/7 Support'],
    tags: ['fitness', 'health', 'coaching', 'lifestyle'],
    orders: 312
  },
  {
    id: 'gig-9',
    title: 'I will design eye-catching social media graphics',
    description: 'Professional graphics for all your social media needs. Instagram posts, stories, Facebook covers, and more. Stand out with stunning visuals that engage your audience.',
    category: 'graphics-design',
    price: 45,
    deliveryDays: 2,
    sellerId: 'seller-1',
    sellerName: 'Sarah Johnson',
    sellerAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    sellerLevel: 'Top Rated',
    rating: 4.9,
    reviewCount: 247,
    image: 'social media graphics design',
    features: ['10 Designs', 'All Formats', 'Source Files', 'Fast Delivery'],
    tags: ['graphics', 'social-media', 'design', 'instagram'],
    orders: 423
  },
  {
    id: 'gig-10',
    title: 'I will manage your Google Ads campaigns',
    description: 'Expert Google Ads management to maximize your ROI. Campaign setup, optimization, and monthly reporting. Drive qualified traffic and increase conversions.',
    category: 'digital-marketing',
    price: 250,
    deliveryDays: 30,
    sellerId: 'seller-2',
    sellerName: 'Michael Chen',
    sellerAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    sellerLevel: 'Level 2',
    rating: 4.8,
    reviewCount: 189,
    image: 'google ads marketing',
    features: ['Campaign Setup', 'Daily Monitoring', 'Monthly Reports', 'A/B Testing'],
    tags: ['google-ads', 'marketing', 'ppc', 'advertising'],
    orders: 156
  },
  {
    id: 'gig-11',
    title: 'I will translate documents professionally',
    description: 'Accurate translation services for over 20 languages. Native speakers ensure cultural accuracy and context. Perfect for business documents, websites, and marketing materials.',
    category: 'writing-translation',
    price: 60,
    deliveryDays: 3,
    sellerId: 'seller-9',
    sellerName: 'Maria Garcia',
    sellerAvatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop',
    sellerLevel: 'Level 2',
    rating: 4.9,
    reviewCount: 234,
    image: 'translation languages documents',
    features: ['Native Speaker', 'Proofreading', 'Fast Delivery', 'Certified Translation'],
    tags: ['translation', 'languages', 'writing', 'documents'],
    orders: 389
  },
  {
    id: 'gig-12',
    title: 'I will create 2D animation explainer videos',
    description: 'Engaging animated explainer videos that simplify complex ideas. Perfect for startups, products, and services. Includes script, voiceover, and background music.',
    category: 'video-animation',
    price: 300,
    deliveryDays: 10,
    sellerId: 'seller-4',
    sellerName: 'David Martinez',
    sellerAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    sellerLevel: 'Level 2',
    rating: 4.7,
    reviewCount: 156,
    image: '2d animation explainer',
    features: ['Script Writing', 'Voiceover', 'Background Music', 'Revisions'],
    tags: ['animation', 'explainer', 'video', '2d'],
    orders: 123
  }
];

export const mockReviews = [
  {
    id: 'review-1',
    gigId: 'gig-1',
    userId: 'user-1',
    userName: 'John Doe',
    userAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50&h=50&fit=crop',
    rating: 5,
    comment: 'Excellent work! Sarah delivered beyond my expectations. The logo design is perfect and she was very responsive to feedback.',
    date: '2025-01-15'
  },
  {
    id: 'review-2',
    gigId: 'gig-1',
    userId: 'user-2',
    userName: 'Jane Smith',
    userAvatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=50&h=50&fit=crop',
    rating: 5,
    comment: 'Very professional and creative. Will definitely work with her again!',
    date: '2025-01-10'
  },
  {
    id: 'review-3',
    gigId: 'gig-2',
    userId: 'user-3',
    userName: 'Alex Johnson',
    userAvatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=50&h=50&fit=crop',
    rating: 5,
    comment: 'Great social media content! My engagement has increased significantly.',
    date: '2025-01-20'
  }
];

// Initialize mock data in localStorage if not exists
export function initializeMockData() {
  if (!localStorage.getItem('gigs')) {
    localStorage.setItem('gigs', JSON.stringify(mockGigs));
  }
  if (!localStorage.getItem('reviews')) {
    localStorage.setItem('reviews', JSON.stringify(mockReviews));
  }
  if (!localStorage.getItem('orders')) {
    localStorage.setItem('orders', JSON.stringify([]));
  }
  if (!localStorage.getItem('users')) {
    // Create some default sellers
    const defaultSellers = [
      {
        id: 'seller-1',
        name: 'Sarah Johnson',
        email: 'sarah@example.com',
        password: 'password123',
        role: 'seller',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
        bio: 'Professional graphic designer with 8+ years of experience. Specialized in branding and logo design.',
        skills: ['Logo Design', 'Branding', 'Illustration', 'UI/UX'],
        rating: 4.9,
        reviewCount: 247
      },
      {
        id: 'seller-2',
        name: 'Michael Chen',
        email: 'michael@example.com',
        password: 'password123',
        role: 'seller',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
        bio: 'Digital marketing expert helping businesses grow online. Certified Google Ads specialist.',
        skills: ['Social Media', 'Google Ads', 'SEO', 'Content Marketing'],
        rating: 4.8,
        reviewCount: 189
      },
      {
        id: 'seller-3',
        name: 'Emma Williams',
        email: 'emma@example.com',
        password: 'password123',
        role: 'seller',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
        bio: 'Professional content writer and SEO specialist. Creating engaging content that ranks.',
        skills: ['SEO Writing', 'Blog Posts', 'Copywriting', 'Content Strategy'],
        rating: 5.0,
        reviewCount: 412
      },
      {
        id: 'seller-4',
        name: 'David Martinez',
        email: 'david@example.com',
        password: 'password123',
        role: 'seller',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
        bio: 'Video production specialist creating stunning visuals for brands worldwide.',
        skills: ['Video Editing', 'Animation', 'Motion Graphics', 'Color Grading'],
        rating: 4.7,
        reviewCount: 156
      },
      {
        id: 'seller-5',
        name: 'Lisa Anderson',
        email: 'lisa@example.com',
        password: 'password123',
        role: 'seller',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop',
        bio: 'Professional voice artist with home studio. Clear, engaging voiceovers for all projects.',
        skills: ['Voiceover', 'Narration', 'Audio Editing', 'Podcasting'],
        rating: 4.9,
        reviewCount: 328
      },
      {
        id: 'seller-6',
        name: 'James Wilson',
        email: 'james@example.com',
        password: 'password123',
        role: 'seller',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
        bio: 'Full-stack developer building modern web applications. Clean code guaranteed.',
        skills: ['React', 'Node.js', 'TypeScript', 'Web Development'],
        rating: 5.0,
        reviewCount: 201
      },
      {
        id: 'seller-7',
        name: 'Robert Taylor',
        email: 'robert@example.com',
        password: 'password123',
        role: 'seller',
        avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop',
        bio: 'Business consultant with MBA. Helping startups and businesses grow strategically.',
        skills: ['Business Planning', 'Strategy', 'Market Research', 'Consulting'],
        rating: 4.8,
        reviewCount: 143
      },
      {
        id: 'seller-8',
        name: 'Jennifer Brown',
        email: 'jennifer@example.com',
        password: 'password123',
        role: 'seller',
        avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop',
        bio: 'Certified fitness coach transforming lives through personalized training and nutrition.',
        skills: ['Fitness Training', 'Nutrition', 'Weight Loss', 'Muscle Building'],
        rating: 4.9,
        reviewCount: 267
      },
      {
        id: 'seller-9',
        name: 'Maria Garcia',
        email: 'maria@example.com',
        password: 'password123',
        role: 'seller',
        avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop',
        bio: 'Professional translator fluent in 5 languages. Accurate, culturally-aware translations.',
        skills: ['Translation', 'Spanish', 'French', 'German'],
        rating: 4.9,
        reviewCount: 234
      }
    ];
    localStorage.setItem('users', JSON.stringify(defaultSellers));
  }
}
