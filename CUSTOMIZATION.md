# 🎯 Quick Customization Guide

## Essential Changes to Make This Portfolio Yours

### 1. Your Personal Information (5 minutes)

#### Name & Title
1. Open `src/pages/Home.tsx`
   - Line 23: Replace `"Your Name"` with your actual name
   - Line 27: Update `"Full Stack Developer & UI Designer"` with your role

2. Open `src/components/Footer.tsx`
   - Line 58: Update copyright text with your name

#### Contact Details
1. Open `src/pages/Contact.tsx`
   - Line 15: Change `your.email@example.com` to your email
   - Lines 16-19: Update all social media URLs:
     - GitHub: `https://github.com/YOURUSERNAME`
     - LinkedIn: `https://linkedin.com/in/YOURUSERNAME`
     - Twitter: `https://twitter.com/YOURUSERNAME`

2. Open `src/components/Footer.tsx`
   - Lines 17-20: Update the same social links

### 2. Your Projects (10-30 minutes)

Open `src/data/projects.ts` and replace the sample projects with yours:

```typescript
{
  slug: "my-amazing-project",           // Must be URL-friendly (no spaces)
  title: "My Amazing Project",
  category: "E-commerce",               // Choose: E-commerce, Dashboard, Landing Page, Web App, Portfolio
  tags: ["React", "Node.js", "API"],    // Your tech stack
  shortDescription: "Brief pitch...",   // Shows on project cards
  fullDescription: "Full story...",     // Shows on project detail page
  techStack: ["React", "TypeScript"],   // All technologies used
  year: 2025,
  role: "Full Stack Developer",
  highlights: [                         // Key accomplishments
    "Built feature X",
    "Improved Y by 50%"
  ],
  demoUrl: "https://myproject.com",     // Live demo link
  repoUrl: "https://github.com/...",    // Optional: GitHub link
  images: [
    "/projects/my-project/hero.jpg",
    "/projects/my-project/gallery1.jpg"
  ],
  featured: true                        // true = shows on homepage
}
```

**Tips:**
- Keep 3-6 featured projects for the homepage
- Use clear, benefit-focused descriptions
- Include real demo links if possible

### 3. Project Images (15-45 minutes)

For each project:

1. **Take screenshots** of your live projects (or use existing ones)
2. **Create folder**: `public/projects/[project-slug]/`
3. **Add images**:
   - `hero.jpg` - Main image (1200x675px recommended)
   - `gallery1.jpg`, `gallery2.jpg` - Additional screenshots
4. **Optimize**: Keep images under 500KB for best performance

**Don't have images?** No problem! The site automatically uses placeholder images with your project name.

### 4. About Page (10 minutes)

Open `src/pages/About.tsx`:

1. **Lines 34-44**: Rewrite the bio in your own words
   - Who you are
   - What you specialize in  
   - What drives you

2. **Lines 12-17**: Update skills
   - Frontend tools you use
   - Backend technologies
   - DevOps/Tools you're proficient in

3. **Lines 19-32**: Customize services
   - What can clients hire you for?
   - Your unique value propositions

### 5. Colors (Optional - 5 minutes)

Want to change the color scheme?

1. Open `src/index.css`
2. Find the `:root` section (lines 6-29)
3. Change the HSL values for:
   - `--primary`: Your brand color
   - `--accent`: Secondary highlights

Visit [shadcn/ui themes](https://ui.shadcn.com/themes) for inspiration!

---

## Testing Your Changes

```bash
# Start development server
npm run dev

# Visit http://localhost:5173
# Test all pages and links
# Check mobile view (press F12 in Chrome)
```

## Deploy to Production

### Quick Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repo
5. Click "Deploy" (uses default settings)
6. Done! You'll get a live URL

### Other Options

- **Netlify**: Build command = `npm run build`, Publish dir = `dist`
- **GitHub Pages**: Use `gh-pages` package
- **Any static host**: Upload the `dist/` folder after running `npm run build`

---

## Final Checklist

- [ ] Updated name and title everywhere
- [ ] Added your email and social links
- [ ] Replaced all 10 sample projects with yours
- [ ] Added project images (or confirmed placeholders look OK)
- [ ] Customized About page bio
- [ ] Tested on mobile and desktop
- [ ] Tested dark mode toggle
- [ ] All demo links work
- [ ] Deployed to production

---

## Need Help?

Check the main [README.md](README.md) for:
- Detailed project structure
- Advanced customization
- Performance tips
- Troubleshooting

**You're all set! 🚀**
