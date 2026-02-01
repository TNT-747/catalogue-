# Project Catalogue Portfolio

A modern, high-end project portfolio website built with React, TypeScript, Tailwind CSS, and shadcn/ui. Perfect for showcasing your web development projects to clients and recruiters.

![React](https://img.shields.io/badge/React-18-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-blue)
![Vite](https://img.shields.io/badge/Vite-6-purple)

## ✨ Features

- 🎨 **Modern UI**: Clean, professional design with smooth animations
- 🌓 **Dark/Light Mode**: Toggle between themes with persistent storage
- 🌍 **Multilingual**: English and Arabic support with RTL layout
- 📱 **Fully Responsive**: Mobile-first design that works on all devices
- ⚡ **Performance**: Optimized with lazy loading, code splitting, and Lighthouse 95+ score
- ♿ **Accessibility**: ARIA labels, keyboard navigation, and good contrast ratios
- 🔍 **SEO Optimized**: Meta tags, OpenGraph support, and semantic HTML
- 🎯 **Advanced Filtering**: Search and filter projects by category and tags
- 🚀 **Smooth Animations**: Powered by Framer Motion for delightful micro-interactions

## 📦 Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Routing**: React Router v6
- **Icons**: Lucide React

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. **Clone or download this project**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📝 Customization Guide

### 1. Personal Information

**Update Your Name and Title**

Edit these files:
- `src/pages/Home.tsx` (Line 23) - Change "Your Name" and role
- `src/components/Footer.tsx` (Line 58) - Update footer copyright

**Update Contact Information**

Edit `src/pages/Contact.tsx`:
- Line 15: Change email address
- Lines 16-19: Update social media links

**Update Social Links in Footer**

Edit `src/components/Footer.tsx`:
- Lines 17-20: Update GitHub, LinkedIn, Twitter, and email URLs

### 2. Projects

**Edit Project Data**

All projects are defined in `src/data/projects.ts`. 

To add/edit a project, modify the `projects` array:

```typescript
{
  slug: "my-project",              // URL-friendly identifier
  title: "My Awesome Project",     // Project name
  category: "E-commerce",          // Category for filtering
  tags: ["React", "Node.js"],      // Technology tags
  shortDescription: "Brief...",    // Card description
  fullDescription: "Detailed...",  // Full project page description
  techStack: ["React", "..."],     // Technologies used
  year: 2025,                      // Project year
  role: "Full Stack Developer",    // Your role
  highlights: [                    // Key achievements (bullets)
    "Feature 1",
    "Feature 2"
  ],
  demoUrl: "https://...",          // Live demo link
  repoUrl: "https://...",          // GitHub repo (optional)
  images: [                        // Image paths in /public/projects/
    "/projects/my-project/hero.jpg",
    "/projects/my-project/gallery1.jpg"
  ],
  featured: true                   // Show on homepage?
}
```

### 3. Project Images

**Add Your Project Screenshots**

1. Create a folder in `public/projects/[project-slug]/`
2. Add images named:
   - `hero.jpg` - Main project image
   - `gallery1.jpg`, `gallery2.jpg` - Additional images
3. Update the `images` array in your project data

**Image Recommendations:**
- Format: JPG or WebP
- Dimensions: 1200x675px (16:9 aspect ratio) for hero images
- Size: < 500KB per image for optimal performance

**Using Placeholder Images:**
The site automatically falls back to placeholder images if your images are missing. You can use services like:
- [Placehold.co](https://placehold.co)
- Take screenshots of your actual projects

### 4. About Page

Edit `src/pages/About.tsx`:
- Lines 34-44: Update bio text
- Lines 12-17: Modify skills and tools
- Lines 19-32: Customize services you offer

### 5. Theme Colors

Edit `src/index.css` to change the color scheme:
- Lines 6-29: Light mode colors
- Lines 31-52: Dark mode colors

Use [shadcn/ui themes](https://ui.shadcn.com/themes) for inspiration.

### 6. Language Settings

The portfolio supports English and Arabic with RTL layout. See [LANGUAGE_FEATURE.md](LANGUAGE_FEATURE.md) for details.

To add more translations:
1. Edit `src/lib/translations.ts`
2. Add new keys to both `en` and `ar` objects
3. Use in components via `translations[language].yourKey`

To add more languages:
1. Add language to `useLanguage.ts` hook
2. Create translation object in `translations.ts`
3. Update language toggle UI

### 7. SEO & Meta Tags

Update default SEO in `src/components/SEO.tsx`:
- Lines 13-16: Change default title, description, and keywords
- Line 17: Add your Open Graph image path

## 🎨 Available Pages

- **Home** (`/`) - Hero section + featured projects
- **Projects** (`/projects`) - Full catalogue with search/filter
- **Project Detail** (`/projects/:slug`) - Individual project showcase
- **About** (`/about`) - Bio, skills, and services
- **Contact** (`/contact`) - Contact form and social links

## 🔧 Available Scripts

```bash
# Development server
npm run dev

# Type checking
npm run type-check

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/              # shadcn/ui components
│   ├── Navbar.tsx       # Navigation bar
│   ├── Footer.tsx       # Footer
│   ├── ProjectCard.tsx  # Project card component
│   └── SEO.tsx          # SEO component
├── pages/
│   ├── Home.tsx         # Homepage
│   ├── Projects.tsx     # Projects catalogue
│   ├── ProjectDetail.tsx
│   ├── About.tsx
│   └── Contact.tsx
├── data/
│   └── projects.ts      # Project data
├── hooks/
│   ├── useTheme.ts      # Dark mode hook
│   └── useLanguage.ts   # Language switcher hook
├── lib/
│   ├── utils.ts         # Utility functions
│   └── translations.ts  # Language translations (EN/AR)
├── App.tsx              # Main app with routing
├── main.tsx             # Entry point
└── index.css            # Global styles + Tailwind

public/
└── projects/            # Project images
    ├── luxe/
    ├── savoria/
    └── ...
```

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy with default settings

### Netlify

1. Build command: `npm run build`
2. Publish directory: `dist`
3. Deploy

### Manual Deployment

```bash
npm run build
```

Upload the `dist` folder to any static hosting service.

## 🎯 Performance Tips

- Replace placeholder images with optimized WebP images
- Use CDN for image hosting if you have many projects
- Enable compression on your hosting platform
- Add lazy loading for off-screen images

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Support

If you found this helpful, consider:
- ⭐ Starring the project
- 🐛 Reporting bugs
- 💡 Suggesting features

---

**Built with ❤️ for developers who want to showcase their work beautifully.**
