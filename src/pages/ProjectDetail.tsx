import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Share2, Check, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { getProjectBySlug } from "@/data/projects";
import { SEO } from "@/components/SEO";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/lib/translations";
import { useState } from "react";

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = translations[language].projectDetail;
  const [copied, setCopied] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-2">{language === 'ar' ? 'المشروع غير موجود' : 'Project Not Found'}</h1>
          <p className="text-muted-foreground mb-4">
            {language === 'ar' ? 'المشروع الذي تبحث عنه غير موجود.' : "The project you're looking for doesn't exist."}
          </p>
          <Link to="/projects">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t.back}
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleShare = async () => {
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <>
      <SEO 
        title={project.title}
        description={project.shortDescription}
        keywords={project.tags.join(", ")}
      />
      
      <div className="min-h-screen py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Button
              variant="ghost"
              onClick={() => navigate(-1)}
              className="mb-4"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t.back}
            </Button>
          </motion.div>

          {/* Hero Image Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="relative aspect-video rounded-lg overflow-hidden bg-muted mb-4">
              <img
                src={project.images[currentImageIndex]}
                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://placehold.co/1200x675/1f2937/ffffff?text=${encodeURIComponent(project.title)}`;
                }}
              />
            </div>
            
            {/* Thumbnail Navigation */}
            {project.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2">
                {project.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative flex-shrink-0 w-24 h-16 rounded-md overflow-hidden ${
                      index === currentImageIndex
                        ? "ring-2 ring-primary"
                        : "opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://placehold.co/200x150/1f2937/ffffff?text=${index + 1}`;
                      }}
                    />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
                    <p className="text-lg text-muted-foreground">
                      {project.role} • {project.year}
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={handleShare}
                    aria-label="Share project"
                  >
                    {copied ? (
                      <Check className="h-4 w-4 text-green-500" />
                    ) : (
                      <Share2 className="h-4 w-4" />
                    )}
                  </Button>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="secondary">{project.category}</Badge>
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="prose dark:prose-invert max-w-none">
                  <h2 className="text-2xl font-semibold mb-4">{t.overview}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {project.fullDescription}
                  </p>

                  <h2 className="text-2xl font-semibold mb-4">{t.keyFeatures}</h2>
                  <ul className="space-y-2 mb-8">
                    {project.highlights.map((highlight, index) => (
                      <li key={index} className="text-muted-foreground">
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  {/* Demo Preview */}
                  <h2 className="text-2xl font-semibold mb-4">{t.livePreview}</h2>
                  <Card className="mb-8">
                    <CardContent className="p-0">
                      <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
                        <iframe
                          src={project.demoUrl}
                          title={`${project.title} Demo`}
                          className="w-full h-full"
                          sandbox="allow-scripts allow-same-origin"
                          onError={() => {
                            // Iframe blocked or failed to load
                          }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-muted pointer-events-none">
                          <p className="text-sm text-muted-foreground">
                            {t.previewNote}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="sticky top-24 space-y-6"
              >
                {/* Tech Stack */}
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-4">{t.techStack}</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Actions */}
                <Card>
                  <CardContent className="pt-6 space-y-3">
                    <Button
                      className="w-full"
                      onClick={() => window.open(project.demoUrl, "_blank")}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      {t.openDemo}
                    </Button>
                  </CardContent>
                </Card>

                {/* Project Info */}
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-4">{t.projectInfo}</h3>
                    <dl className="space-y-3 text-sm">
                      <div>
                        <dt className="text-muted-foreground">{translations[language].projects.category}</dt>
                        <dd className="font-medium">{project.category}</dd>
                      </div>
                      <div>
                        <dt className="text-muted-foreground">{t.year}</dt>
                        <dd className="font-medium">{project.year}</dd>
                      </div>
                      <div>
                        <dt className="text-muted-foreground">{t.role}</dt>
                        <dd className="font-medium">{project.role}</dd>
                      </div>
                    </dl>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
