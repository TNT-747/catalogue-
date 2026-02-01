# Installation & Setup Guide

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18.0 or higher ([Download here](https://nodejs.org/))
- **npm** (comes with Node.js)
- A code editor (VS Code recommended)

Verify your installations:
```bash
node --version  # Should be 18.0+
npm --version   # Should be 8.0+
```

---

## Installation Steps

### 1. Navigate to Project Directory

```bash
cd c:\Users\Kassimi\Desktop\project\Catalogue
```

### 2. Install Dependencies

All dependencies are already defined in `package.json`. Install them:

```bash
npm install
```

This will install:
- React & React DOM
- React Router
- Tailwind CSS
- Framer Motion
- Lucide React (icons)
- TypeScript & Vite
- All development tools

Installation takes about 1-2 minutes depending on your internet speed.

### 3. Start Development Server

```bash
npm run dev
```

You should see output like:
```
  ➜  Local:   http://localhost:5173/
  ➜  press h + enter to show help
```

### 4. Open in Browser

Navigate to `http://localhost:5173` in your browser.

You should see:
- ✅ Homepage with hero section
- ✅ Featured projects grid
- ✅ Working navigation
- ✅ Dark/light mode toggle

---

## Project Commands

### Development

```bash
npm run dev
```
Starts the development server with hot module replacement (HMR).
- Auto-refreshes when you save files
- Shows errors in the browser console
- URL: `http://localhost:5173`

### Build for Production

```bash
npm run build
```
Creates an optimized production build in the `dist/` folder.
- Minifies JavaScript and CSS
- Optimizes images
- Removes debug code
- Output size: ~450KB (gzipped ~140KB)

### Preview Production Build

```bash
npm run preview
```
Serves the production build locally for testing.
- Tests the actual production bundle
- Useful before deploying
- URL: typically `http://localhost:4173`

### Lint Code

```bash
npm run lint
```
Checks your code for errors and style issues.

---

## Project Structure

After installation, your project structure looks like:

```
Catalogue/
├── public/                 # Static assets
│   └── projects/           # Project images
│       ├── luxe/
│       ├── savoria/
│       └── ...
├── src/
│   ├── components/         # Reusable components
│   │   ├── ui/             # UI components (buttons, cards, etc.)
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── ProjectCard.tsx
│   │   └── SEO.tsx
│   ├── pages/              # Page components
│   │   ├── Home.tsx
│   │   ├── Projects.tsx
│   │   ├── ProjectDetail.tsx
│   │   ├── About.tsx
│   │   └── Contact.tsx
│   ├── data/
│   │   └── projects.ts     # Project data
│   ├── hooks/
│   │   └── useTheme.ts     # Dark mode hook
│   ├── lib/
│   │   └── utils.ts        # Utilities
│   ├── App.tsx             # Main app + routing
│   ├── main.tsx            # Entry point
│   └── index.css           # Global styles
├── .github/
│   └── copilot-instructions.md
├── index.html              # HTML template
├── package.json            # Dependencies
├── tailwind.config.js      # Tailwind config
├── tsconfig.json           # TypeScript config
├── vite.config.ts          # Vite config
├── README.md               # Main documentation
└── CUSTOMIZATION.md        # Quick start guide
```

---

## Verifying the Installation

### Check All Pages Work

1. **Home** - `http://localhost:5173/`
2. **Projects** - `http://localhost:5173/projects`
3. **Project Detail** - Click any project card
4. **About** - `http://localhost:5173/about`
5. **Contact** - `http://localhost:5173/contact`

### Test Features

- [ ] Navigation links work
- [ ] Dark/light mode toggle works
- [ ] Search bar filters projects
- [ ] Category/tag filters work
- [ ] Project cards link to detail pages
- [ ] Mobile menu opens and closes
- [ ] Contact form validates inputs
- [ ] All animations are smooth

---

## Troubleshooting

### Port 5173 Already in Use

If you see "Port 5173 is already in use":

```bash
# Stop existing server with Ctrl+C, or:
# Kill all node processes (Windows)
Get-Process node | Stop-Process

# Then restart
npm run dev
```

### Build Errors

If you see TypeScript errors during build:

```bash
# Clear cache and reinstall
rm -rf node_modules
rm package-lock.json
npm install
npm run build
```

### Missing Dependencies

If imports are not found:

```bash
npm install
```

### Styles Not Loading

If Tailwind styles aren't working:

1. Check `src/index.css` has the directives:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

2. Restart the dev server:
   ```bash
   # Ctrl+C to stop, then:
   npm run dev
   ```

---

## Next Steps

After successful installation:

1. **Read** [CUSTOMIZATION.md](CUSTOMIZATION.md) for quick setup
2. **Update** your personal information
3. **Add** your own projects
4. **Customize** colors and content
5. **Deploy** to Vercel/Netlify

---

## Getting Help

- Check [README.md](README.md) for detailed documentation
- Review [CUSTOMIZATION.md](CUSTOMIZATION.md) for personalization
- Open an issue if you encounter problems

**Installation complete! 🎉**

Start customizing in [CUSTOMIZATION.md](CUSTOMIZATION.md)
