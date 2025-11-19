import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    "id": 0,
    "name": "EquiCourt",
    "description": "EquiCourt is a multimodal, multi-LLM AI platform that resolves petty disputes in under 3 minutes. It ingests diverse evidence—PDFs, images, voice recordings—summarizes key facts using Cohere, and uses Gemini 2.0 with a legal RAG system to issue verdicts with cited Canadian laws. Designed to make justice swift, fair, and accessible.",
    "img": ["https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/003/476/195/datas/original.png"],
    "github": "https://github.com/oskip0906/Equicourt",
    "tech": ["vite", "cohere", "gemini", "docling", "web speech API", "RAG"]
  },
  {
    name: "Toronto Asian Art Museum Explorer",
    description: "Spearheaded a data management Android app showcasing 100+ artifacts using Java, Android, and Firebase. Streamlined artifact image and document upload process from Firebase CDN to Firebase RTD. Tested critical modules using JUnit and Mockito, achieving 100% coverage on all units.",
    github: "https://github.com/marc-issism/TAAMproject",
    tech: ["Java", "Android", "Firebase", "JUnit", "Mockito"],
    img: "https://i.imgur.com/xwqUtdF.png" // Keeping placeholder or previous image if applicable, but previous was no.ff. I'll use a placeholder or remove img if not available. I'll keep the structure consistent.
  },
  {
    name: "SparkPark",
    description: "Developed a React Native mobile app, enabling homeowners to rent out their driveways as parking spots in Toronto. Created a payment pipeline using Express, Stripe APIs, Firebase Authentication and MongoDB. Deployed a Node.js server using AWS EC2 and Docker, automating build and deployment workflows with GitHub Actions.",
    github: "https://github.com/Phalanyx/SparkPark",
    tech: ["React Native", "Node.js", "TypeScript", "MongoDB", "Stripe", "AWS EC2", "Docker", "GitHub Actions"]
  },
  {
    name: "CodeWrld",
    description: "Created a Code Execution and Social Platform using Next.js which supports 10+ programming languages. Engineered isolated containers for code execution with Node processes and Docker at runtime. Deployed with Docker using AWS EC2, Nginx, and PM2 for efficient application hosting.",
    github: "https://github.com/Phalanyx/CodeWrld",
    img: "https://i.imgur.com/JS0ZkEd.png",
    tech: ["TypeScript", "Node.js", "React", "Docker", "AWS", "Nginx"]
  },
  {
    name: "no.ff",
    description: "Processed 100,000+ requests from Riot API, turning in-game data into cleaned training data using Python. Developed a full-stack app using Django and Next.js, displaying data of the top 200+ players in the world. Implemented an interactive chatbot that provides users with real-time game information using Gemini's API.",
    img: "https://i.imgur.com/xwqUtdF.png",
    github: "https://github.com/no-ff/no.ff",
    tech: ["Python", "JavaScript", "Next.js", "Django", "React", "SQLite", "Gemini API"]
  },
  {
    name: "Little Learners",
    description: "Created a speech-to-text game interface using Nextjs and Node's Web Speech API. Utilized ChatGPT 4o API to generate custom AI images, adding visually stimulating content for young users. Optimized image creation and processing by 90% using Next image optimizations and IO manipulation.",
    github: "https://github.com/Phalanyx/LittleLearners",
    img: "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/003/064/648/datas/original.jpg",
    tech: ["TypeScript", "Next.js", "React", "Prisma", "ChatGPT-4o"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6
    }
  }
};

export const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Featured Projects
        </motion.h2>
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-primary/50 hover:bg-secondary/10 h-full flex flex-col border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader className="flex-grow">
                  {project.img && (
                    <motion.div 
                      className="w-full h-48 bg-secondary/20 rounded-lg mb-4 overflow-hidden"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img 
                        src={Array.isArray(project.img) ? project.img[0] : project.img} 
                        alt={project.name}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                    </motion.div>
                  )}
                  <CardTitle className="text-lg">{project.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between">
                  <div>
                    <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: techIndex * 0.05, duration: 0.3 }}
                          viewport={{ once: true }}
                        >
                          <Badge 
                            variant="outline" 
                            className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  {project.github && (
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button variant="outline" size="sm" asChild className="hover:bg-primary hover:text-primary-foreground transition-colors duration-200">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          View Code
                        </a>
                      </Button>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
