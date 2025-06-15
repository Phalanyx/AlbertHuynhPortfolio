
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import ibmLogo from "../../public/ibm.png";
import gdscLogo from "../../public/gdg.svg";
import utmistLogo from "../../public/utmist.png";

const experiences = [
  {
    company: "IBM",
    title: "Software Developer Intern",
    date: "May 2025 – Dec 2025",
    tech: ["Ruby on Rails", "Kubernetes", "Whisper", "Docling"],
    highlights: [
      "Built and deployed internal tools for IBM's Author Workbench LMS platform.",
      "Automated conversion of 1000+ PDFs and PowerPoints into course-ready content using Docling.",
      "Integrated OpenAI Whisper to generate transcripts for uploaded course videos, improving accessibility."
    ]
  },
  {
    company: "University of Toronto Machine Intelligence Team (UTMIST)",
    title: "Software Developer",
    date: "May 2025 – Present",
    tech: ["React", "Next.js", "Django", "Docker", "GitHub Actions", "PostgreSQL"],
    highlights: [
      "Built the public site and internal platform for Canada's largest ML-focused student organization.",
      "Created a job application portal used by 10+ directors to review 100+ applicants."
    ]
  },
  {
    company: "Google Developer Group",
    title: "VP of Technology",
    date: "May 2025 – Present",
    tech: ["TypeScript", "Next.js", "React", "Firebase", "Figma"],
    highlights: [
      "Leading a 20+ member dev team to build web platforms for startups and GDG infrastructure."
    ]
  },
  {
    company: "Google Developer Group",
    title: "Software Engineer",
    date: "Sep 2024 – Apr 2025",
    tech: ["TypeScript", "Next.js", "Firebase", "Docker", "GitHub Actions"],
    highlights: [
      "Built website for Canada's largest AI hackathon with 2200+ registrants and 700+ participants.",
      "Developed application management system for 20+ reviewers to assess submissions.",
      "Reduced cloud usage by 80% by optimizing image loading and processing."
    ]
  },
  {
    company: "Toronto Asian Art Museum",
    title: "Software Engineer",
    date: "May 2024 – Aug 2024",
    tech: ["Java", "Android", "Firebase"],
    highlights: [
      "Built an Android app to showcase 100+ artifacts using Java and Firebase.",
      "Wrote unit tests using JUnit and Mockito.",
      "Streamlined upload of media assets to Firebase CDN and RTDB."
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
      duration: 0.6,
      ease: "easeOut"
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
                <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] hover:border-primary/30">
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
