
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/10">
      <div className="container mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-blue-400 bg-clip-text text-transparent">
            Albert Huynh
          </h1>
          <h2 className="text-xl md:text-2xl text-primary mb-8 font-semibold">
            Full-Stack Software Developer
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Computer Science student at University of Toronto with experience at IBM, Google Developer Group, 
            and a passion for building impactful web applications and mobile solutions.
          </p>
          <div className="flex justify-center space-x-4 mb-8">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <a href="#contact">Get In Touch</a>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-primary text-primary hover:bg-primary/10">
              <a href="#projects">View Projects</a>
            </Button>
          </div>
          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com/Phalanyx" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/albert-huynh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:alberthuynh.dev@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
