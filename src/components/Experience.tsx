import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import ibmLogo from "../../public/ibm.png";
import gdscLogo from "../../public/gdg.svg";
import utmistLogo from "../../public/utmist.png";

const experiences = [
  {
    company: "IBM",
    title: "Software Engineer",
    date: "May 2025 – Dec 2025",
    tech: ["Ruby", "TypeScript", "Ruby on Rails", "Redis", "Kubernetes", "Helm", "GitHub Actions"],
    highlights: [
      "Built internal tools and microservices for IBM's Learning Management System using Ruby and TypeScript.",
      "Implemented AI learning paths by developing vector similarity search with pgvector and Ruby on Rails.",
      "Engineered a generalized API gateway serving 9M+ annual users using TypeScript, Node, and Redis.",
      "Saved 100+ hours by automating PDFs and PowerPoints into LMS-ready course content using Sidekiq and Redis.",
      "Reduced cloud costs by $10k+ by migrating 5000+ course videos to YouTube from AWS S3 buckets using Ruby.",
      "Automated 500+ hours of course transcriptions by integrating OpenAI Whisper and creating a chunking algorithm.",
      "Sped up video processing pipeline 97% by developing a Ruby on Rails and Redis Pub/Sub microservice, utilizing CUDA video codecs and deployed with Kubernetes, Helm, and GitHub Actions.",
      "Implemented unit and integration tests with RSpec and Jest across Ruby and TypeScript services."
    ]
  },
  {
    company: "University of Toronto Machine Intelligence Team (UTMIST)",
    title: "Software Director",
    date: "May 2025 – Present",
    tech: ["TypeScript", "React", "Supabase", "Next.js", "Google APIs"],
    highlights: [
      "Led 5+ developers to launch an open source content management platform using TypeScript, React, and Supabase.",
      "Streamlined 500+ resumes to companies at social events by creating a REST API with Google APIs in Next.js."
    ]
  },
  {
    company: "Google Developer Group",
    title: "Lead Software Engineer",
    date: "Apr 2025 – Present",
    tech: ["TypeScript", "Python", "FastAPI", "Gemini", "PDF.js"],
    highlights: [
      "Led a team of 10+ developers to create open source projects and build internal tools in Typescript and Python.",
      "Automated reviews for 50+ resumes by creating a stack ranking pipeline using FastAPI, Gemini, and PDF.js.",
      "Sped up workflows by 65% by creating an MCP server for admins to create and manage events for 100+ students."
    ]
  },
  {
    company: "GenAI Genesis",
    title: "Software Engineer",
    date: "Sep 2024 – Apr 2025",
    tech: ["TypeScript", "Firebase", "Python"],
    highlights: [
      "Built a website for Canada's largest AI hackathon with 2200+ users using TypeScript and Firebase.",
      "Processed 5000+ documents, providing the team with cleaned user data for event communication using Python."
    ]
  },
  {
    company: "Toronto Asian Art Museum",
    title: "Software Engineer",
    date: "May 2024 – Aug 2024",
    tech: ["Java", "Android", "Firebase", "JUnit", "Mockito"],
    highlights: [
      "Spearheaded a data management Android app showcasing 100+ artifacts using Java, Android, and Firebase.",
      "Streamlined the artifact image and document upload process from Firebase CDN to Firebase RTD.",
      "Created unit test cases using JUnit and Mockito on critical modules."
    ]
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
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Experience
        </motion.h2>
        <motion.div 
          className="max-w-4xl mx-auto space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((exp, index) => {
            let logo = null;
            if (exp.company === "IBM") logo = ibmLogo;
            if (exp.company.includes("UTMIST")) logo = utmistLogo;
            if (exp.company.includes("Google Developer Group")) logo = gdscLogo;
            return (
              <motion.div key={index} variants={cardVariants}>
                <Card className="hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-primary/50 hover:bg-secondary/10 border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-3">
                        {logo && (
                          <motion.img 
                            src={logo} 
                            alt={exp.company + ' logo'} 
                            className="w-14 h-14 object-contain rounded-full bg-white p-1 border"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ duration: 0.2 }}
                          />
                        )}
                        <div>
                          <CardTitle className="text-xl">{exp.title}</CardTitle>
                          <p className="text-lg font-semibold text-primary">{exp.company}</p>
                        </div>
                      </div>
                      <Badge variant="secondary">{exp.date}</Badge>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.tech.map((tech, techIndex) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: techIndex * 0.1, duration: 0.3 }}
                          viewport={{ once: true }}
                        >
                          <Badge variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-colors duration-200">
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, idx) => (
                        <motion.li 
                          key={idx} 
                          className="text-muted-foreground"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1, duration: 0.4 }}
                          viewport={{ once: true }}
                        >
                          • {highlight}
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
