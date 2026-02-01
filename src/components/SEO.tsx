import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const defaultSEO = {
  title: "S&A - Professional Web Development Portfolio",
  description: "Browse our collection of modern web projects including e-commerce platforms, dashboards, and landing pages. Built with React, TypeScript, and modern web technologies.",
  keywords: "web developer, portfolio, React, TypeScript, full stack developer, e-commerce, dashboards, S&A",
  image: "/og-image.jpg",
};

export function SEO({ 
  title, 
  description, 
  keywords, 
  image,
  url 
}: SEOProps) {
  const location = useLocation();
  
  useEffect(() => {
    // Set title
    document.title = title 
      ? `${title} | Project Catalogue` 
      : defaultSEO.title;

    // Set meta tags
    const metaTags: { [key: string]: string } = {
      description: description || defaultSEO.description,
      keywords: keywords || defaultSEO.keywords,
      "og:title": title || defaultSEO.title,
      "og:description": description || defaultSEO.description,
      "og:image": image || defaultSEO.image,
      "og:url": url || window.location.href,
      "og:type": "website",
      "twitter:card": "summary_large_image",
      "twitter:title": title || defaultSEO.title,
      "twitter:description": description || defaultSEO.description,
      "twitter:image": image || defaultSEO.image,
    };

    Object.entries(metaTags).forEach(([name, content]) => {
      let element = document.querySelector(
        `meta[name="${name}"], meta[property="${name}"]`
      );
      
      if (!element) {
        element = document.createElement("meta");
        if (name.startsWith("og:") || name.startsWith("twitter:")) {
          element.setAttribute("property", name);
        } else {
          element.setAttribute("name", name);
        }
        document.head.appendChild(element);
      }
      
      element.setAttribute("content", content);
    });
  }, [title, description, keywords, image, url, location]);

  return null;
}
