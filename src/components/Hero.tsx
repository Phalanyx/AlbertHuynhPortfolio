
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/10">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.h1 
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-foreground via-primary to-blue-400 bg-clip-text text-transparent"
          >
            Albert Huynh
          </motion.h1>
          
          <motion.h2 
            variants={fadeInUp}
            className="text-xl md:text-2xl text-primary font-semibold"
          >
            Full-Stack Software Developer
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Computer Science student at University of Toronto with experience at IBM, Google Developer Group, 
            and a passion for building impactful web applications and mobile solutions.
          </motion.p>
          
          <motion.div 
            variants={fadeInUp}
            className="flex justify-center space-x-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 transition-all duration-300">
                <a href="#contact">Get In Touch</a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" size="lg" asChild className="border-primary text-primary hover:bg-primary/10 transition-all duration-300">
                <a href="#projects">View Projects</a>
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            variants={fadeInUp}
            className="flex justify-center space-x-6"
          >
            <motion.a 
              href="https://github.com/Phalanyx" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github size={24} />
            </motion.a>
            <motion.a 
              href="https://linkedin.com/in/albert-huynh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a 
              href="mailto:alberthuynh.dev@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail size={24} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
