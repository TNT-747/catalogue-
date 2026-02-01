import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Sparkles } from "lucide-react";
import { getFeaturedProjects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { SEO } from "@/components/SEO";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/lib/translations";

export function Home() {
  const featuredProjects = getFeaturedProjects();
  const { language } = useLanguage();
  const t = translations[language].home;

  return (
    <>
      <SEO 
        title="Home"
        description={t.description}
      />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 sm:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium"
              >
                <Sparkles className="h-4 w-4" />
                <span>{t.available}</span>
              </motion.div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                {t.greeting}{" "}
                <span className="text-primary">S&A</span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-muted-foreground mb-4">
                {t.role}
              </p>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                {t.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/projects">
                  <Button size="lg" className="w-full sm:w-auto">
                    {t.viewProjects}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    <Code2 className="mr-2 h-4 w-4" />
                    {t.getInTouch}
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 right-0 -z-10 opacity-20">
            <div className="h-96 w-96 rounded-full bg-primary blur-3xl" />
          </div>
          <div className="absolute bottom-0 left-0 -z-10 opacity-20">
            <div className="h-96 w-96 rounded-full bg-primary blur-3xl" />
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="py-20 bg-muted/40">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                {t.featuredProjects}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t.featuredDescription}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project, index) => (
                <ProjectCard key={project.slug} project={project} index={index} />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center mt-12"
            >
              <Link to="/projects">
                <Button variant="outline" size="lg">
                  {t.viewAll}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
