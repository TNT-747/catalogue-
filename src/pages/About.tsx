import { motion } from "framer-motion";
import { Code2, Palette, Zap, Users, Database, Cloud } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SEO } from "@/components/SEO";

export function About() {
  const skills = [
    {
      category: "Frontend",
      icon: Palette,
      items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion", "Vue.js"],
    },
    {
      category: "Backend",
      icon: Database,
      items: ["Node.js", "Express", "Spring Boot", "PostgreSQL", "MongoDB", "Redis"],
    },
    {
      category: "Tools & DevOps",
      icon: Cloud,
      items: ["Git", "Docker", "AWS", "CI/CD", "Linux", "Nginx"],
    },
  ];

  const services = [
    {
      icon: Code2,
      title: "Web Development",
      description: "Building responsive, performant web applications with modern frameworks and best practices.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive, beautiful interfaces that users love with attention to detail and accessibility.",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Optimizing applications for speed, SEO, and Core Web Vitals to deliver exceptional user experiences.",
    },
    {
      icon: Users,
      title: "Consulting",
      description: "Providing technical guidance and architecture recommendations for your web projects.",
    },
  ];

  return (
    <>
      <SEO 
        title="About"
        description="Learn more about my background, skills, and what I can build for you. Full stack developer specializing in React, TypeScript, and modern web technologies."
      />
      
      <div className="min-h-screen py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">About Me</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate about creating exceptional web experiences
            </p>
          </motion.div>

          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-3xl mx-auto mb-16"
          >
            <Card>
              <CardContent className="pt-6">
                <div className="prose dark:prose-invert max-w-none">
                  <p className="text-lg leading-relaxed">
                    Hi! I'm a <strong>Full Stack Developer & UI Designer</strong> with a passion for 
                    building beautiful, high-performance web applications. With expertise in modern 
                    JavaScript frameworks and a keen eye for design, I create digital experiences 
                    that are both functional and delightful.
                  </p>
                  <p className="text-lg leading-relaxed">
                    I specialize in React, TypeScript, and Node.js, and I love exploring new 
                    technologies and best practices. Whether it's a complex e-commerce platform, 
                    an analytics dashboard, or a stunning landing page, I bring the same level of 
                    dedication and attention to detail to every project.
                  </p>
                  <p className="text-lg leading-relaxed">
                    When I'm not coding, you can find me contributing to open source, writing 
                    technical articles, or exploring the latest design trends. I believe in 
                    continuous learning and sharing knowledge with the community.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-center mb-8">Skills & Technologies</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.category}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    <Card className="h-full">
                      <CardContent className="pt-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 rounded-lg bg-primary/10">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                          <h3 className="font-semibold text-lg">{skill.category}</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {skill.items.map((item) => (
                            <Badge key={item} variant="secondary">
                              {item}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Services Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-center mb-8">What I Can Build</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <Card className="h-full hover:shadow-lg transition-shadow">
                      <CardContent className="pt-6">
                        <div className="flex items-start gap-4">
                          <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                            <p className="text-muted-foreground">{service.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
