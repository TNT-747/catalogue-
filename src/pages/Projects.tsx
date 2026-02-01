import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, SlidersHorizontal, ChevronDown, ChevronUp } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/ProjectCard";
import { projects, getAllTags, getAllCategories } from "@/data/projects";
import { SEO } from "@/components/SEO";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/lib/translations";

type SortOption = "featured" | "newest" | "oldest";

export function Projects() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [sortBy, setSortBy] = useState<SortOption>("featured");
  const [showFilters, setShowFilters] = useState(false);
  const { language } = useLanguage();
  const t = translations[language].projects;

  const allTags = getAllTags();
  const allCategories = getAllCategories();

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const filteredAndSortedProjects = useMemo(() => {
    let filtered = [...projects];

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (project) =>
          project.title.toLowerCase().includes(query) ||
          project.shortDescription.toLowerCase().includes(query) ||
          project.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter(
        (project) => project.category === selectedCategory
      );
    }

    // Filter by tags
    if (selectedTags.length > 0) {
      filtered = filtered.filter((project) =>
        selectedTags.every((tag) => project.tags.includes(tag))
      );
    }

    // Sort
    filtered.sort((a, b) => {
      if (sortBy === "featured") {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return b.year - a.year;
      } else if (sortBy === "newest") {
        return b.year - a.year;
      } else {
        return a.year - b.year;
      }
    });

    return filtered;
  }, [searchQuery, selectedTags, selectedCategory, sortBy]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedTags([]);
    setSelectedCategory("");
  };

  const hasActiveFilters =
    searchQuery || selectedTags.length > 0 || selectedCategory;

  return (
    <>
      <SEO 
        title={t.title}
        description={t.description}
      />
      
      <div className="min-h-screen py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              {t.title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.description}
            </p>
          </motion.div>

          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="sticky top-16 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border rounded-lg shadow-sm mb-8"
          >
            {/* Filter Header with Toggle */}
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center gap-3">
                <SlidersHorizontal className="h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-semibold">Filters & Search</h3>
                  {hasActiveFilters && (
                    <p className="text-xs text-muted-foreground">
                      {searchQuery && "Search active"} 
                      {selectedCategory && ` • ${selectedCategory}`}
                      {selectedTags.length > 0 && ` • ${selectedTags.length} tag${selectedTags.length > 1 ? 's' : ''}`}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2">
                {hasActiveFilters && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearFilters}
                    className="text-xs"
                  >
                    {t.clearAll}
                  </Button>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowFilters(!showFilters)}
                  className="gap-2"
                >
                  {showFilters ? (
                    <>
                      {t.hide} <ChevronUp className="h-4 w-4" />
                    </>
                  ) : (
                    <>
                      {t.show} <ChevronDown className="h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
            </div>

            {/* Collapsible Filter Content */}
            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-6">
                    {/* Search Bar */}
                    <div className="relative mb-6">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="text"
                        placeholder={t.searchPlaceholder}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10 h-11"
                      />
                    </div>

                    {/* Filters Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                      {/* Category Filter */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-sm font-semibold">{t.category}</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <Badge
                            variant={selectedCategory === "" ? "default" : "outline"}
                            className="cursor-pointer hover:shadow-sm transition-shadow"
                            onClick={() => setSelectedCategory("")}
                          >
                            {t.all}
                          </Badge>
                          {allCategories.map((category) => (
                            <Badge
                              key={category}
                              variant={selectedCategory === category ? "default" : "outline"}
                              className="cursor-pointer hover:shadow-sm transition-shadow"
                              onClick={() =>
                                setSelectedCategory(
                                  selectedCategory === category ? "" : category
                                )
                              }
                            >
                              {category}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Sort Filter */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-sm font-semibold">{t.sortBy}</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {(["featured", "newest", "oldest"] as SortOption[]).map(
                            (option) => (
                              <Badge
                                key={option}
                                variant={sortBy === option ? "default" : "outline"}
                                className="cursor-pointer capitalize hover:shadow-sm transition-shadow"
                                onClick={() => setSortBy(option)}
                              >
                                {option}
                              </Badge>
                            )
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Technology Tags Filter */}
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-semibold">{t.filterByTech}</span>
                        {selectedTags.length > 0 && (
                          <span className="text-xs text-muted-foreground">
                            {selectedTags.length} {t.selected}
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {allTags.map((tag) => (
                          <Badge
                            key={tag}
                            variant={selectedTags.includes(tag) ? "default" : "outline"}
                            className="cursor-pointer hover:shadow-sm transition-shadow"
                            onClick={() => toggleTag(tag)}
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-sm text-muted-foreground">
              {t.showing} {filteredAndSortedProjects.length} {t.of} {projects.length}
            </p>
          </div>

          {/* Projects Grid */}
          {filteredAndSortedProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAndSortedProjects.map((project, index) => (
                <ProjectCard key={project.slug} project={project} index={index} />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-lg text-muted-foreground">
                {t.noProjects}
              </p>
              <button
                onClick={clearFilters}
                className="mt-4 text-primary hover:underline"
              >
                {t.clearFilters}
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
}
