
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const projects = [
  {
    name: "Toronto Asian Art Museum Explorer",
    description: "A Java-based Android application showcasing artifacts from TAAM. Provides users with a rich experience to browse, search, and view detailed information and images of historical pieces from the collection.",
    img: "https://i.imgur.com/nzQoZPG.png",
    github: "https://github.com/marc-issism/TAAMproject",
    tech: ["Java", "Android", "Firebase"]
  },
  {
    name: "Climate Compass",
    description: "An emergency preparedness tool that lists aid resources, climate shelters, and programs for climate refugees. Designed to help users navigate natural disasters safely.",
    img: "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/966/724/datas/original.png",
    github: "https://devpost.com/software/climate-compass",
    tech: ["Next.js", "Django", "Python", "JavaScript"]
  },
  {
    name: "no.ff",
    description: "A League of Legends analytics tool that uses ML (70% accuracy) to predict outcomes and provide strategic insight. Features a chatbot powered by Gemini's API for real-time interaction.",
    img: "https://i.imgur.com/xwqUtdF.png",
    github: "https://github.com/no-ff/no.ff",
    tech: ["Next.js", "Django", "Python", "TensorFlow"]
  },
  {
    name: "CodeWrld",
    description: "Online code editor and executor for 10+ languages with Docker-based sandboxing. Includes token-based auth (JWT), session management, and CI/CD deployment using AWS EC2 and Nginx.",
    github: "https://github.com/Phalanyx/CodeWrld",
    tech: ["TypeScript", "Next.js", "Docker", "AWS", "Nginx"]
  },
  {
    name: "SparkPark",
    description: "A React Native mobile app connecting homeowners with drivers for parking space rentals. Integrated Stripe for payments, Firebase Auth, and geospatial queries in MongoDB.",
    github: "https://github.com/Phalanyx/SparkPark",
    tech: ["React Native", "TypeScript", "Node.js", "MongoDB", "Stripe"]
  },
  {
    name: "Little Learners",
    description: "An educational app helping youth with learning disabilities learn English through games, audio feedback, and personalized AI-generated books and visuals.",
    github: "https://github.com/Phalanyx/LittleLearners",
    tech: ["Next.js", "Node.js", "Prisma", "ChatGPT-4o"]
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover-scale">
              <CardHeader>
                {project.img && (
                  <div className="w-full h-48 bg-secondary/20 rounded-lg mb-4 overflow-hidden">
                    <img 
                      src={project.img} 
                      alt={project.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <CardTitle className="text-lg">{project.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">{tech}</Badge>
                  ))}
                </div>
                {project.github && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
