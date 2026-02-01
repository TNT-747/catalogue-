export interface Project {
  slug: string;
  title: string;
  category: string;
  tags: string[];
  shortDescription: string;
  fullDescription: string;
  techStack: string[];
  year: number;
  role: string;
  highlights: string[];
  demoUrl: string;
  images: string[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "luxe-fashion-ecommerce",
    title: "Luxe Fashion E-commerce",
    category: "E-commerce",
    tags: ["E-commerce", "React", "Spring Boot", "Payment Integration"],
    shortDescription: "High-end fashion marketplace with real-time inventory and secure checkout",
    fullDescription: "A sophisticated e-commerce platform for luxury fashion brands featuring advanced product filtering, wishlist management, secure payment processing, and real-time inventory tracking. Built with a focus on performance and user experience.",
    techStack: ["React", "TypeScript", "Spring Boot", "PostgreSQL", "Stripe", "Redis", "Docker"],
    year: 2025,
    role: "Full Stack Developer",
    highlights: [
      "Implemented real-time inventory synchronization across multiple warehouses",
      "Integrated Stripe payment gateway with 3D Secure authentication",
      "Built advanced product filtering with faceted search",
      "Optimized image delivery with lazy loading and WebP format",
      "Achieved 95+ Lighthouse performance score"
    ],
    demoUrl: "/apps/luxe-fashion",
    images: ["https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200", "https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200", "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200"],
    featured: true
  },
  {
    slug: "savoria-restaurant-platform",
    title: "Savoria Restaurant Platform",
    category: "Landing Page",
    tags: ["Landing", "React", "Framer Motion", "Responsive"],
    shortDescription: "Modern restaurant website with online reservation and menu showcase",
    fullDescription: "An elegant restaurant landing page featuring smooth animations, interactive menu browsing, table reservation system, and integration with Google Maps. Designed to convert visitors into customers with compelling visuals and seamless UX.",
    techStack: ["React", "Tailwind CSS", "Framer Motion", "Node.js", "MongoDB"],
    year: 2024,
    role: "Frontend Developer & UI Designer",
    highlights: [
      "Designed custom animations for menu item reveals",
      "Implemented real-time table availability checker",
      "Created responsive image gallery with lightbox",
      "Integrated Google Maps API for location display",
      "Mobile-first design with touch-optimized interactions"
    ],
    demoUrl: "/apps/savoria-restaurant",
    images: ["https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200", "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200"],
    featured: true
  },
  {
    slug: "admin-analytics-dashboard",
    title: "Admin Analytics Dashboard",
    category: "Dashboard",
    tags: ["Dashboard", "Admin", "React", "Chart.js", "API"],
    shortDescription: "Comprehensive analytics dashboard for business intelligence",
    fullDescription: "A powerful admin dashboard providing real-time analytics, user management, and business intelligence tools. Features customizable widgets, advanced data visualization, and role-based access control.",
    techStack: ["React", "TypeScript", "Chart.js", "Material-UI", "Node.js", "Express", "MongoDB"],
    year: 2025,
    role: "Full Stack Developer",
    highlights: [
      "Built 15+ interactive data visualization components",
      "Implemented role-based permission system",
      "Created custom date range selector with presets",
      "Developed CSV export functionality for all reports",
      "Optimized API calls with request caching and debouncing"
    ],
    demoUrl: "/apps/admin-dashboard",
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200", "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200", "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200"],
    featured: true
  },
  {
    slug: "essence-perfume-shop",
    title: "Essence Perfume Shop",
    category: "E-commerce",
    tags: ["E-commerce", "React", "Product Catalog", "Shopping Cart"],
    shortDescription: "Luxury perfume e-commerce with fragrance finder quiz",
    fullDescription: "An upscale online perfume store featuring an interactive fragrance finder quiz, detailed product descriptions with scent notes visualization, customer reviews, and personalized recommendations based on preferences.",
    techStack: ["React", "Redux", "Sass", "Node.js", "Express", "Stripe"],
    year: 2024,
    role: "Frontend Developer",
    highlights: [
      "Created interactive fragrance wheel for scent exploration",
      "Built personalized recommendation engine based on quiz results",
      "Implemented scent note visualization with radar charts",
      "Designed mobile-friendly product cards with 3D transform effects",
      "Added customer review system with photo uploads"
    ],
    demoUrl: "/apps/essence-perfume",
    images: ["https://images.unsplash.com/photo-1541643600914-78b084683601?w=1200", "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=1200"],
    featured: true
  },
  {
    slug: "booking-hub-appointment-system",
    title: "BookingHub Appointment System",
    category: "Web App",
    tags: ["Booking", "React", "Calendar", "API", "Real-time"],
    shortDescription: "Multi-service appointment booking platform with calendar sync",
    fullDescription: "A versatile appointment booking system for service-based businesses. Features real-time availability, automated reminders, calendar synchronization, payment processing, and customer management.",
    techStack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Socket.io", "Twilio"],
    year: 2025,
    role: "Full Stack Developer",
    highlights: [
      "Implemented real-time slot availability with WebSocket",
      "Integrated Google Calendar and Outlook sync",
      "Built automated SMS/email reminder system",
      "Created recurring appointment scheduling",
      "Developed staff management with individual calendars"
    ],
    demoUrl: "/apps/booking-hub",
    images: ["https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200", "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200"],
    featured: true
  },
  {
    slug: "creative-portfolio-showcase",
    title: "Creative Portfolio Showcase",
    category: "Portfolio",
    tags: ["Portfolio", "React", "Three.js", "Animations"],
    shortDescription: "3D interactive portfolio for creative professionals",
    fullDescription: "An immersive portfolio website featuring 3D graphics, smooth scroll animations, and interactive project showcases. Perfect for designers, artists, and creative professionals looking to stand out.",
    techStack: ["React", "Three.js", "GSAP", "Framer Motion", "Tailwind CSS"],
    year: 2024,
    role: "Frontend Developer",
    highlights: [
      "Created 3D scene with Three.js for hero section",
      "Implemented parallax scrolling effects",
      "Built custom cursor with interactive states",
      "Designed smooth page transitions",
      "Optimized 3D performance for mobile devices"
    ],
    demoUrl: "/apps/creative-portfolio",
    images: ["https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200", "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1200"],
    featured: true
  },
  {
    slug: "taskmasters-project-management",
    title: "TaskMasters Project Management",
    category: "Dashboard",
    tags: ["Dashboard", "Project Management", "React", "Drag & Drop"],
    shortDescription: "Kanban-style project management tool with team collaboration",
    fullDescription: "A comprehensive project management solution with Kanban boards, Gantt charts, team collaboration, time tracking, and reporting. Designed for agile teams to streamline their workflow.",
    techStack: ["React", "TypeScript", "DnD Kit", "Recharts", "Express", "MongoDB"],
    year: 2025,
    role: "Full Stack Developer",
    highlights: [
      "Built drag-and-drop Kanban board with smooth animations",
      "Implemented real-time collaboration with WebSocket",
      "Created Gantt chart for project timeline visualization",
      "Added time tracking with productivity insights",
      "Developed custom reporting dashboard"
    ],
    demoUrl: "/apps/task-masters",
    images: ["https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=1200", "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200"],
    featured: false
  },
  {
    slug: "fitzone-gym-landing",
    title: "FitZone Gym Landing Page",
    category: "Landing Page",
    tags: ["Landing", "React", "Animations", "Responsive"],
    shortDescription: "Dynamic fitness center website with class scheduling",
    fullDescription: "A high-energy landing page for a modern fitness center featuring class schedules, trainer profiles, membership plans, and virtual tour. Built to inspire and convert visitors into members.",
    techStack: ["React", "Tailwind CSS", "Framer Motion", "Sanity CMS"],
    year: 2024,
    role: "Frontend Developer & Designer",
    highlights: [
      "Designed bold, energetic UI with vibrant color scheme",
      "Created class schedule with filter by type/time",
      "Built trainer profile cards with hover animations",
      "Implemented virtual gym tour with 360° photos",
      "Added membership comparison table with CTA buttons"
    ],
    demoUrl: "/apps/fit-zone",
    images: ["https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200", "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200"],
    featured: false
  },
  {
    slug: "inventory-manager-pro",
    title: "Inventory Manager Pro",
    category: "Dashboard",
    tags: ["Dashboard", "Inventory", "React", "Real-time", "API"],
    shortDescription: "Real-time inventory tracking system for retail businesses",
    fullDescription: "An advanced inventory management system with real-time stock tracking, automated reorder alerts, barcode scanning, supplier management, and comprehensive reporting for retail businesses.",
    techStack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Redis", "Socket.io"],
    year: 2025,
    role: "Full Stack Developer",
    highlights: [
      "Implemented barcode scanning with device camera",
      "Built automated low-stock alert system",
      "Created supplier management with order history",
      "Developed real-time stock updates across locations",
      "Added batch operations for bulk inventory updates"
    ],
    demoUrl: "/apps/inventory-manager",
    images: ["https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200", "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200"],
    featured: false
  },
  {
    slug: "nexus-social-platform",
    title: "Nexus Social Platform",
    category: "Web App",
    tags: ["Social", "React", "Real-time", "API", "Spring Boot"],
    shortDescription: "Modern social networking platform with real-time messaging",
    fullDescription: "A feature-rich social networking platform with real-time messaging, news feed, friend connections, post interactions, media sharing, and notifications. Built for scalability and performance.",
    techStack: ["React", "TypeScript", "Spring Boot", "PostgreSQL", "Redis", "WebSocket", "AWS S3"],
    year: 2024,
    role: "Full Stack Developer",
    highlights: [
      "Built real-time messaging with WebSocket",
      "Implemented infinite scroll feed with optimized loading",
      "Created post editor with rich media support",
      "Developed notification system with push notifications",
      "Added friend suggestion algorithm based on connections"
    ],
    demoUrl: "/apps/nexus-social",
    images: ["https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=1200", "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200"],
    featured: false
  },
  {
    slug: "crypto-tracker-dashboard",
    title: "CryptoTracker Dashboard",
    category: "Dashboard",
    tags: ["Dashboard", "Cryptocurrency", "React", "Real-time", "Charts"],
    shortDescription: "Real-time cryptocurrency tracking dashboard with portfolio management",
    fullDescription: "A comprehensive cryptocurrency tracking platform featuring real-time price updates, portfolio management, watchlists, and detailed market analytics. Built for crypto traders and investors to monitor their investments.",
    techStack: ["React", "TypeScript", "WebSocket", "Recharts", "Tailwind CSS"],
    year: 2026,
    role: "Frontend Developer",
    highlights: [
      "Implemented real-time price updates with WebSocket",
      "Built portfolio tracking with profit/loss calculations",
      "Created interactive price charts with historical data",
      "Added watchlist functionality for favorite cryptocurrencies",
      "Designed responsive dashboard for mobile trading"
    ],
    demoUrl: "/apps/crypto-tracker",
    images: ["https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=1200"],
    featured: false
  },
  {
    slug: "streamflix-platform",
    title: "StreamFlix Platform",
    category: "Entertainment",
    tags: ["Streaming", "React", "Video", "Entertainment"],
    shortDescription: "Netflix-style video streaming platform with movie catalog",
    fullDescription: "A modern video streaming platform featuring movie catalogs, personalized recommendations, video player interface, and user watch lists. Designed to provide an immersive entertainment experience.",
    techStack: ["React", "TypeScript", "Framer Motion", "Tailwind CSS"],
    year: 2026,
    role: "Full Stack Developer",
    highlights: [
      "Created responsive video catalog with grid/list views",
      "Built custom video player with playback controls",
      "Implemented user watchlist and favorites",
      "Designed hero section with featured content",
      "Added smooth animations for content browsing"
    ],
    demoUrl: "/apps/stream-flix",
    images: ["https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=1200"],
    featured: false
  },
  {
    slug: "learnhub-education-platform",
    title: "LearnHub Education Platform",
    category: "Education",
    tags: ["Education", "React", "Learning", "Courses"],
    shortDescription: "Online learning platform with courses and progress tracking",
    fullDescription: "A comprehensive online learning platform offering course catalogs, progress tracking, certificates, and instructor profiles. Built to make education accessible and engaging for students worldwide.",
    techStack: ["React", "TypeScript", "Framer Motion", "Tailwind CSS"],
    year: 2026,
    role: "Full Stack Developer",
    highlights: [
      "Built course catalog with filtering and search",
      "Implemented progress tracking for enrolled courses",
      "Created certificate generation system",
      "Designed instructor profile pages",
      "Added student dashboard with learning analytics"
    ],
    demoUrl: "/apps/learn-hub",
    images: ["https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1200"],
    featured: false
  },
  {
    slug: "medicare-booking-system",
    title: "MediCare Booking System",
    category: "Healthcare",
    tags: ["Healthcare", "React", "Booking", "Medical"],
    shortDescription: "Healthcare appointment booking with doctor profiles",
    fullDescription: "A modern healthcare platform for booking appointments with doctors and specialists. Features doctor profiles, availability calendars, patient records, and telemedicine integration.",
    techStack: ["React", "TypeScript", "Calendar API", "Tailwind CSS"],
    year: 2026,
    role: "Full Stack Developer",
    highlights: [
      "Implemented doctor search with specialty filters",
      "Built appointment booking with real-time availability",
      "Created patient dashboard with medical history",
      "Added telemedicine video consultation feature",
      "Designed responsive mobile-first interface"
    ],
    demoUrl: "/apps/medi-care",
    images: ["https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200"],
    featured: false
  },
  {
    slug: "realestate-pro-listings",
    title: "RealEstate Pro Listings",
    category: "Real Estate",
    tags: ["Real Estate", "React", "Property", "Search"],
    shortDescription: "Property listing platform with advanced search filters",
    fullDescription: "A comprehensive real estate platform featuring property listings, virtual tours, map integration, and advanced search filters. Perfect for buyers, sellers, and agents to connect.",
    techStack: ["React", "TypeScript", "Google Maps API", "Tailwind CSS"],
    year: 2026,
    role: "Frontend Developer",
    highlights: [
      "Built property search with advanced filters",
      "Integrated Google Maps for location viewing",
      "Created virtual tour functionality",
      "Implemented favorite properties feature",
      "Designed agent contact system"
    ],
    demoUrl: "/apps/real-estate",
    images: ["https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200"],
    featured: false
  },
  {
    slug: "food-delivery-app",
    title: "QuickBite Food Delivery",
    category: "Food",
    tags: ["Food Delivery", "React", "E-commerce", "Restaurant"],
    shortDescription: "Food delivery platform with restaurant menus and order tracking",
    fullDescription: "A comprehensive food delivery application featuring restaurant listings, menu browsing, shopping cart, order tracking, and delivery management. Built to connect hungry customers with local restaurants.",
    techStack: ["React", "TypeScript", "Framer Motion", "Tailwind CSS"],
    year: 2026,
    role: "Full Stack Developer",
    highlights: [
      "Created restaurant catalog with cuisine filters",
      "Built shopping cart with real-time updates",
      "Implemented order tracking system",
      "Added delivery time estimation",
      "Designed mobile-optimized checkout flow"
    ],
    demoUrl: "/apps/food-delivery",
    images: ["https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1200"],
    featured: false
  },
  {
    slug: "weather-pro-forecast",
    title: "WeatherPro Forecast",
    category: "Weather",
    tags: ["Weather", "React", "API", "Forecast"],
    shortDescription: "Advanced weather forecast app with hourly and daily predictions",
    fullDescription: "A sophisticated weather application providing current conditions, hourly forecasts, 7-day predictions, and weather maps. Features beautiful visualizations and location-based weather data.",
    techStack: ["React", "TypeScript", "Weather API", "Tailwind CSS"],
    year: 2026,
    role: "Frontend Developer",
    highlights: [
      "Integrated weather API for real-time data",
      "Built hourly and daily forecast displays",
      "Created weather visualization components",
      "Added location-based weather detection",
      "Designed glassmorphism UI theme"
    ],
    demoUrl: "/apps/weather-pro",
    images: ["https://images.unsplash.com/photo-1592210454359-9043f067919b?w=1200"],
    featured: false
  },
  {
    slug: "music-player-app",
    title: "Harmony Music Player",
    category: "Entertainment",
    tags: ["Music", "React", "Player", "Audio"],
    shortDescription: "Modern music streaming player with playlists and visualizer",
    fullDescription: "A beautiful music player application featuring playlist management, audio visualizer, playback controls, and song library. Built to provide an immersive music listening experience.",
    techStack: ["React", "TypeScript", "Web Audio API", "Framer Motion"],
    year: 2026,
    role: "Frontend Developer",
    highlights: [
      "Built custom audio visualizer with animations",
      "Implemented playlist management system",
      "Created smooth playback controls",
      "Added volume control and seek functionality",
      "Designed album art display with blur effects"
    ],
    demoUrl: "/apps/music-player",
    images: ["https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1200"],
    featured: false
  },
  {
    slug: "job-portal-platform",
    title: "JobPortal Platform",
    category: "Jobs",
    tags: ["Job Search", "React", "Career", "Recruitment"],
    shortDescription: "Job search platform with application tracking",
    fullDescription: "A comprehensive job search platform featuring job listings, company profiles, application tracking, and resume management. Connects job seekers with employers for successful placements.",
    techStack: ["React", "TypeScript", "Framer Motion", "Tailwind CSS"],
    year: 2026,
    role: "Full Stack Developer",
    highlights: [
      "Built job search with advanced filters",
      "Created application tracking system",
      "Implemented company profile pages",
      "Added resume upload and management",
      "Designed job alert notification system"
    ],
    demoUrl: "/apps/job-portal",
    images: ["https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200"],
    featured: false
  },
  {
    slug: "chat-app-messenger",
    title: "ChatApp Messenger",
    category: "Communication",
    tags: ["Chat", "React", "Real-time", "Messaging"],
    shortDescription: "Real-time messaging app with chat rooms and DMs",
    fullDescription: "A modern real-time messaging application featuring direct messages, group chats, file sharing, and user presence indicators. Built for seamless team and personal communication.",
    techStack: ["React", "TypeScript", "WebSocket", "Tailwind CSS"],
    year: 2026,
    role: "Full Stack Developer",
    highlights: [
      "Implemented real-time messaging with WebSocket",
      "Built group chat and direct messaging",
      "Created file sharing functionality",
      "Added user presence and typing indicators",
      "Designed responsive chat interface"
    ],
    demoUrl: "/apps/chat-app",
    images: ["https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=1200"],
    featured: false
  }
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured);
};

export const getProjectsByCategory = (category: string): Project[] => {
  return projects.filter(project => project.category === category);
};

export const getProjectsByTag = (tag: string): Project[] => {
  return projects.filter(project => project.tags.includes(tag));
};

export const getAllTags = (): string[] => {
  const tags = new Set<string>();
  projects.forEach(project => {
    project.tags.forEach(tag => tags.add(tag));
  });
  return Array.from(tags).sort();
};

export const getAllCategories = (): string[] => {
  const categories = new Set<string>();
  projects.forEach(project => {
    categories.add(project.category);
  });
  return Array.from(categories).sort();
};
