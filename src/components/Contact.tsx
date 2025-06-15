
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Linkedin, Github } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Get In Touch</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
            <p className="text-lg text-muted-foreground mb-8">
              I'm always interested in new opportunities, collaborations, and interesting projects. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:alberthuynh.dev@gmail.com" className="text-muted-foreground hover:text-primary">
                  alberthuynh.dev@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Linkedin className="w-5 h-5 text-primary" />
                <a href="https://linkedin.com/in/albert-huynh" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                  LinkedIn Profile
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Github className="w-5 h-5 text-primary" />
                <a href="https://github.com/Phalanyx" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                  GitHub Profile
                </a>
              </div>
            </div>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Send Me a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <textarea 
                    id="message" 
                    className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Your message..."
                  />
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
