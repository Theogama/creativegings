
import React, { useState } from 'react';
import { ExternalLink, Eye } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const projects = [
    {
      title: "Modern Sushi-man Website",
      category: "Landing Page",
      image: "images/sushi.png",
      description: "A beautiful single-page website for a local restaurant with online menu and reservation system.",
      tech: ["React", "Tailwind CSS", "JavaScript"],
      repoUrl: "https://github.com/Theogama/sushi",
      liveUrl: "https://sushi-eight-tau.vercel.app/"
    },
    {
      title: "Professional CarePulse Health Care System ",
      category: "Business Site",
      image: "images/health.png",
      description: "Multi-page corporate website with service pages, team profiles, and client testimonials.",
      tech: ["NextJs", "Custom Design", "Appwrite"],
      repoUrl: "https://github.com/Theogama/Health-care",
      liveUrl: "https://health-care-tan.vercel.app"
    },
    {
      title: "Snapgram (Instagram Clone)",
      category: "Social Media",
      image: "images/Snapgram.png",
      description: "Full-featured online store with payment gateway, inventory management, and admin dashboard.",
      tech: ["Authenticathion", "TypeScript", "Tailwindcss"],
      repoUrl: "https://github.com/Theogama/snapgram",
      liveUrl: "https://snapgram-chi.vercel.app"
    },
    {
      title: "Travel Agency",
      category: "Starter Site",
      image: "images/travel.png",
      description: "Informative website showcasing services, case studies, and client success stories.",
      tech: ["Custom CMS", "Portfolio Gallery", "Lead Generation"],
      repoUrl: "https://github.com/Theogama/travel",
      liveUrl: "https://travel-five-jade.vercel.app/"
    },
    {
      title: "Pricewise ",
      category: "Custom Development",
      image: "images/pricewise.png",
      description: "Custom booking system with class schedules, trainer profiles, and membership management.",
      tech: ["webscraping", "Tailwindcss", "NextJs"],
      repoUrl: "https://github.com/yourusername/fitness-platform",
      liveUrl: "https://fitness-sample.com"
    },
    {
      title: "3D Portfolio Landing",
      category: "Landing Page",
      image: "images/portfolio.png",
      description: "Modern single-page application with interactive features and lead capture forms.",
      tech: ["React", "Animation", "Three Js"],
      repoUrl: "https://github.com/Theogama/Sandile_Portfolio",
      liveUrl: "https://sandile-portfolio.vercel.app/"
    }
  ];

  // Modal management
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const handlePreview = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleExternalLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Past Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Take a look at some of the websites we've created for our clients. 
            Each project showcases our commitment to quality design and functionality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group backdrop-blur-md bg-background/60 border border-border/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-sm">
                  <div className="flex space-x-4">
                    <Button 
                      variant="ghost"
                      size="icon"
                      onClick={() => handlePreview(project)}
                      className="bg-background/80 text-foreground p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:scale-110"
                      aria-label={`Preview ${project.title}`}
                    >
                      <Eye size={20} />
                    </Button>
                    <Button 
                      variant="ghost"
                      size="icon"
                      onClick={() => handleExternalLink(project.repoUrl)}
                      className="bg-background/80 text-foreground p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:scale-110"
                      aria-label={`Visit repository of ${project.title}`}
                    >
                      <ExternalLink size={20} />
                    </Button>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="backdrop-blur-md bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="backdrop-blur-md bg-muted/60 text-muted-foreground px-3 py-1 rounded-full text-sm border border-border/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for preview */}
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="max-w-lg p-5">
            {selectedProject && (
              <div>
                <DialogHeader>
                  <DialogTitle>{selectedProject.title}</DialogTitle>
                  <DialogDescription>
                    {selectedProject.description}
                  </DialogDescription>
                </DialogHeader>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full rounded-lg my-4"
                  style={{ maxHeight: 330, objectFit: "cover" }}
                />
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="backdrop-blur-md bg-muted/60 text-muted-foreground px-3 py-1 rounded-full text-sm border border-border/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center mt-2">
                  <Button
                    onClick={() => handleExternalLink(selectedProject.liveUrl)}
                    variant="default"
                  >
                    View Live
                  </Button>
                  <Button
                    onClick={() => handleExternalLink(selectedProject.repoUrl)}
                    variant="outline"
                  >
                    Repository
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

        <div className="text-center mt-12 animate-fade-in">
          <a 
            href="#contact" 
            className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-200 hover:scale-105"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
