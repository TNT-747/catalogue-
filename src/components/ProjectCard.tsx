import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import type { Project } from "@/data/projects";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/lib/translations";
import { useState } from "react";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const { language } = useLanguage();
  const t = translations[language].projects;
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link to={`/projects/${project.slug}`}>
        <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
          {/* Image */}
          <div className="relative overflow-hidden aspect-video bg-muted">
            {!imageLoaded && (
              <div className="absolute inset-0 animate-pulse bg-muted" />
            )}
            <img
              src={project.images[0]}
              alt={project.title}
              className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
              loading="lazy"
              onLoad={() => setImageLoaded(true)}
              onError={(e) => {
                // Fallback to placeholder
                (e.target as HTMLImageElement).src = `https://placehold.co/600x400/1f2937/ffffff?text=${encodeURIComponent(project.title)}`;
                setImageLoaded(true);
              }}
            />
            {project.featured && (
              <div className="absolute top-3 right-3">
                <Badge variant="default" className="bg-primary/90 backdrop-blur-sm">
                  Featured
                </Badge>
              </div>
            )}
          </div>

          <CardHeader>
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1">
                <CardTitle className="line-clamp-1 group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="mt-1">{project.category}</CardDescription>
              </div>
            </div>
          </CardHeader>

          <CardContent className="flex-1">
            <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
              {project.shortDescription}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
              {project.tags.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{project.tags.length - 3}
                </Badge>
              )}
            </div>
          </CardContent>

          <CardFooter className="text-sm text-muted-foreground">
            {t.clickToView}
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  );
}
