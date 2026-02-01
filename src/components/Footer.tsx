import { Link } from "react-router-dom";
import { Linkedin, Mail, Twitter } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/lib/translations";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();
  const t = translations[language];

  const quickLinks = [
    { name: t.nav.home, path: "/" },
    { name: t.nav.projects, path: "/projects" },
    { name: t.nav.contact, path: "/contact" },
  ];

  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/in/yourusername" },
    { name: "Twitter", icon: Twitter, url: "https://twitter.com/yourusername" },
    { name: "Email", icon: Mail, url: "mailto:your.email@example.com" },
  ];

  return (
    <footer className="border-t bg-muted/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold mb-4">S&A</h3>
            <p className="text-sm text-muted-foreground">
              {t.footer.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.footer.quickLinks}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.footer.connect}</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} S&A. {t.footer.allRights}</p>
        </div>
      </div>
    </footer>
  );
}
