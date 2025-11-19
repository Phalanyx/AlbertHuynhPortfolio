import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { 
  Code2, 
  Globe, 
  Server, 
  Database, 
  Cloud, 
  Settings,
  Terminal,
  FileCode,
  Layers,
  Box,
  Cpu,
  GitBranch,
  Brain,
  Smartphone,
  Users
} from "lucide-react";

const skillCategories = [
  {
    category: "Languages",
    icon: <Code2 className="w-6 h-6" />,
    skills: [
      { name: "Python", icon: <Code2 className="w-4 h-4" /> },
      { name: "Java", icon: <Code2 className="w-4 h-4" /> },
      { name: "JavaScript", icon: <FileCode className="w-4 h-4" /> },
      { name: "TypeScript", icon: <FileCode className="w-4 h-4" /> },
      { name: "Ruby", icon: <Code2 className="w-4 h-4" /> },
      { name: "Bash", icon: <Terminal className="w-4 h-4" /> }
    ],
    color: "from-blue-500 to-cyan-500"
  },
  {
    category: "Frameworks & Libraries",
    icon: <Globe className="w-6 h-6" />,
    skills: [
      { name: "Node", icon: <Server className="w-4 h-4" /> },
      { name: "Express", icon: <Server className="w-4 h-4" /> },
      { name: "Prisma", icon: <Database className="w-4 h-4" /> },
      { name: "Ruby on Rails", icon: <Code2 className="w-4 h-4" /> },
      { name: "Android", icon: <Smartphone className="w-4 h-4" /> },
      { name: "Expo", icon: <Smartphone className="w-4 h-4" /> },
      { name: "Selenium", icon: <Code2 className="w-4 h-4" /> },
      { name: "Next.js", icon: <Globe className="w-4 h-4" /> },
      { name: "React", icon: <Layers className="w-4 h-4" /> },
      { name: "React Native", icon: <Layers className="w-4 h-4" /> }
    ],
    color: "from-green-500 to-emerald-500"
  },
  {
    category: "Tools",
    icon: <Settings className="w-6 h-6" />,
    skills: [
      { name: "Git", icon: <GitBranch className="w-4 h-4" /> },
      { name: "Github", icon: <GitBranch className="w-4 h-4" /> },
      { name: "Jira", icon: <Settings className="w-4 h-4" /> },
      { name: "AWS", icon: <Cloud className="w-4 h-4" /> },
      { name: "Linux", icon: <Terminal className="w-4 h-4" /> },
      { name: "Docker", icon: <Box className="w-4 h-4" /> },
      { name: "Firebase", icon: <Database className="w-4 h-4" /> },
      { name: "SQL", icon: <Database className="w-4 h-4" /> },
      { name: "NoSQL", icon: <Database className="w-4 h-4" /> },
      { name: "REST API", icon: <Server className="w-4 h-4" /> },
      { name: "MongoDB", icon: <Database className="w-4 h-4" /> },
      { name: "Kubernetes", icon: <Cpu className="w-4 h-4" /> },
      { name: "Helm", icon: <Settings className="w-4 h-4" /> }
    ],
    color: "from-purple-500 to-violet-500"
  },
  {
    category: "Concepts",
    icon: <Brain className="w-6 h-6" />,
    skills: [
      { name: "Backend Development", icon: <Server className="w-4 h-4" /> },
      { name: "Frontend Development", icon: <Globe className="w-4 h-4" /> },
      { name: "Fullstack Development", icon: <Layers className="w-4 h-4" /> },
      { name: "Software Engineering", icon: <Code2 className="w-4 h-4" /> },
      { name: "Machine Learning", icon: <Brain className="w-4 h-4" /> },
      { name: "Networking", icon: <Server className="w-4 h-4" /> },
      { name: "CI/CD", icon: <Settings className="w-4 h-4" /> },
      { name: "Microservices", icon: <Box className="w-4 h-4" /> },
      { name: "Infrastructure Engineering", icon: <Cloud className="w-4 h-4" /> },
      { name: "DevOps", icon: <Settings className="w-4 h-4" /> },
      { name: "Automation", icon: <Settings className="w-4 h-4" /> },
      { name: "Agile", icon: <Users className="w-4 h-4" /> }
    ],
    color: "from-orange-500 to-red-500"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Skills & Technologies</h2>
        </motion.div>
        
        <motion.div 
          className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="group"
            >
              <div className="bg-background rounded-xl p-6 shadow-lg border border-border/20 hover:shadow-xl transition-all duration-300 hover:border-primary/30 h-full">
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-white mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {category.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Badge 
                        variant="secondary" 
                        className="text-sm flex items-center gap-1 hover:bg-primary hover:text-primary-foreground transition-all duration-200 cursor-pointer"
                      >
                        {skill.icon}
                        {skill.name}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
