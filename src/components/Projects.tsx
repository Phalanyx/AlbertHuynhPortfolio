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
    name: "Climate Compass",
    description: "An emergency preparedness tool that lists aid resources, climate shelters, and programs for climate refugees. Designed to help users navigate natural disasters safely.",
    img: "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/966/724/datas/original.png",
    github: "https://devpost.com/software/climate-compass",
    tech: ["Next.js", "Django", "Python", "JavaScript"]
  },
  {
    name: "no.ff",
    description: "A League of Legends analytics tool that uses a classification model (70% accuracy) to predict outcomes and provide strategic insight. Features a chatbot powered by Gemini's API for real-time interaction.",
    img: "https://i.imgur.com/xwqUtdF.png",
    github: "https://github.com/no-ff/no.ff",
    tech: ["Next.js", "Django", "Python", "TensorFlow"]
  },
  {
    name: "CodeWrld",
    description: "Online code editor and executor for 10+ languages with Docker-based sandboxing. Includes token-based auth (JWT), session management, and CI/CD deployment using AWS EC2 and Nginx.",
    github: "https://github.com/Phalanyx/CodeWrld",
    img: "https://i.imgur.com/JS0ZkEd.png",
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
    img: "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/003/064/648/datas/original.jpg",
    tech: ["Next.js", "Node.js", "Prisma", "ChatGPT-4o"]
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
              <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] hover:border-primary/30 h-full flex flex-col">
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
