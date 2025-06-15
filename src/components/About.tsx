import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Users, Code, Cloud, Smartphone } from "lucide-react";

const highlights = [
  {
    icon: <GraduationCap className="w-6 h-6" />, title: "Education", content: "Computer Science @ University of Toronto", color: "text-blue-400"
  },
  {
    icon: <Briefcase className="w-6 h-6" />, title: "Current Role", content: "Software Developer Intern @ IBM", color: "text-green-400"
  },
  {
    icon: <Users className="w-6 h-6" />, title: "Leadership", content: "VP of Technology @ Google Developer Group", color: "text-purple-400"
  },
  {
    icon: <Code className="w-6 h-6" />, title: "Specialization", content: "Full-Stack & Mobile Development", color: "text-orange-400"
  },
  {
    icon: <Cloud className="w-6 h-6" />, title: "Technologies", content: "Cloud & DevOps Experience", color: "text-cyan-400"
  },
  {
    icon: <Smartphone className="w-6 h-6" />, title: "Innovation", content: "ML & AI Integration", color: "text-pink-400"
  }
];

export const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto flex flex-col items-center justify-center gap-10">
          {/* Info Cards and Quick Overview */}
          <div className="w-full max-w-2xl space-y-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:border-primary/30">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">About Me</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    I'm a Computer Science student at the University of Toronto, passionate about software development. Currently working as a Software Developer Intern at IBM.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }}>
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:border-primary/30">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">My Passion</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    I'm mainly interested in full stack and web development, building modern and impactful web applications. I also have experience with mobile development, and enjoy creating seamless user experiences across platforms.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            {/* Quick Overview Grid */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }}>
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:border-primary/30">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">Quick Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {highlights.map((item, index) => (
                      <motion.div 
                        key={index} 
                        className="flex items-start space-x-3 p-3 rounded-lg bg-secondary/30 border border-border/30 hover:bg-secondary/50 transition-all duration-300 hover:scale-105"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className={`${item.color} mt-1`}>
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm text-foreground">{item.title}</h4>
                          <p className="text-xs text-muted-foreground">{item.content}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
