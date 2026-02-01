# Arabic Language Support

## Overview

The portfolio now supports both English and Arabic languages with full RTL (Right-to-Left) layout support for Arabic.

## Features

### 1. Language Toggle
- **Location**: Language toggle button in the navbar (globe icon)
- **Functionality**: Click to switch between English and Arabic
- **Persistence**: Language preference is saved in localStorage
- **Visual Indicator**: Hover shows the other language name

### 2. RTL Support
- **Automatic Direction**: The entire layout automatically switches to RTL when Arabic is selected
- **HTML Attributes**: Sets both `lang` and `dir` attributes on the HTML element
- **Tailwind Compatibility**: Works seamlessly with Tailwind CSS utility classes

### 3. Translated Components

The following components have been fully translated:

- **Navbar**: Navigation links
- **Home Page**: Hero section, featured projects, CTAs
- **Projects Page**: Filters, search, categories, sort options, results
- **Footer**: Quick links, tagline, copyright

### 4. Technical Implementation

#### useLanguage Hook
Located at: `src/hooks/useLanguage.ts`

```typescript
const { language, toggleLanguage } = useLanguage();
// language: "en" | "ar"
// toggleLanguage: () => void
```

#### Translations File
Located at: `src/lib/translations.ts`

```typescript
import { translations } from "@/lib/translations";
const t = translations[language].home; // Access home page translations
```

### 5. How to Use

#### In Components:
```tsx
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/lib/translations";

function MyComponent() {
  const { language } = useLanguage();
  const t = translations[language].sectionName;
  
  return <h1>{t.title}</h1>;
}
```

#### Adding New Translations:
1. Open `src/lib/translations.ts`
2. Add new keys to both `en` and `ar` objects
3. Use the new keys in your components

## Translation Coverage

### Completed:
- ✅ Navigation (Home, Projects, About, Contact)
- ✅ Home page (all text)
- ✅ Projects page (filters, search, results)
- ✅ Footer (links, tagline)

### Pending (Not Yet Implemented):
- ⏳ About page
- ⏳ Contact page
- ⏳ Project Detail page

## RTL Layout Testing

To test RTL layout:
1. Run the dev server: `npm run dev`
2. Click the language toggle (globe icon) in the navbar
3. Observe:
   - Text direction changes to RTL
   - Layout mirrors appropriately
   - All UI elements remain properly aligned

## Browser Compatibility

- ✅ Chrome/Edge: Full support
- ✅ Firefox: Full support
- ✅ Safari: Full support
- ✅ Mobile browsers: Full support

## Future Enhancements

1. **Complete Translation Coverage**: Translate remaining pages (About, Contact, Project Detail)
2. **Language Detection**: Auto-detect user's browser language preference
3. **URL-based Language**: Add language parameter to URL (e.g., `/ar/projects`)
4. **More Languages**: Easy to extend to support additional languages
5. **Translation Management**: Consider using i18n libraries like `react-i18next` for advanced features

## Notes

- Language preference persists across browser sessions
- Switching language doesn't require page reload
- RTL layout is CSS-based and works with all modern browsers
- Translation keys are type-safe (TypeScript will warn about missing keys)
