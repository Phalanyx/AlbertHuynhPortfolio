
import { Mail, Linkedin, Github } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Get In Touch</h2>
        <div className="max-w-2xl mx-auto">
          <p className="text-lg text-muted-foreground text-center mb-12">
            I'm always interested in new opportunities, collaborations, and interesting projects. 
            Feel free to reach out!
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <a 
              href="mailto:alberthuynh.dev@gmail.com" 
              className="flex items-center space-x-3 text-lg hover:text-primary transition-colors group"
            >
              <Mail className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
              <span>alberthuynh.dev@gmail.com</span>
            </a>
            <a 
              href="https://linkedin.com/in/albert-huynh" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-3 text-lg hover:text-primary transition-colors group"
            >
              <Linkedin className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
              <span>LinkedIn</span>
            </a>
            <a 
              href="https://github.com/Phalanyx" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-3 text-lg hover:text-primary transition-colors group"
            >
              <Github className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
