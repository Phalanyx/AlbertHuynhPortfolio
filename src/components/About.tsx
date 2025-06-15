
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Briefcase, Users, Code, Cloud, Smartphone } from "lucide-react";
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
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const About = () => {
  const highlights = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Education",
      content: "Computer Science @ University of Toronto",
      color: "text-blue-400"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Current Role",
      content: "Software Developer Intern @ IBM",
      color: "text-green-400"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Leadership",
      content: "VP of Technology @ Google Developer Group",
      color: "text-purple-400"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Specialization",
      content: "Full-Stack & Mobile Development",
      color: "text-orange-400"
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Technologies",
      content: "Cloud & DevOps Experience",
      color: "text-cyan-400"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Innovation",
      content: "ML & AI Integration",
      color: "text-pink-400"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground"
          >
            About Me
          </motion.h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.div variants={fadeInUp}>
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:border-primary/30">
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground">Who I Am</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      I'm a Computer Science student at the University of Toronto, passionate about creating 
                      innovative software solutions. Currently working as a Software Developer Intern at IBM, 
                      where I've built internal tools and automated document conversion for their LMS platform.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:border-primary/30">
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground">What I Do</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      As VP of Technology at Google Developer Group, I lead a team of 20+ developers building 
                      web platforms. I've also contributed to UTMIST, Canada's largest ML-focused student organization, 
                      developing their public site and internal platforms.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:border-primary/30">
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground">My Passion</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      My experience spans full-stack development, mobile applications, machine learning, and 
                      DevOps. I enjoy tackling complex problems and turning ideas into reality through code.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.div variants={fadeInUp}>
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

              <motion.div variants={fadeInUp}>
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:border-primary/30">
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground">Key Stats</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <motion.div 
                        className="p-4 rounded-lg bg-primary/10 border border-primary/20 hover:bg-primary/20 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="text-2xl font-bold text-primary">20+</div>
                        <div className="text-sm text-muted-foreground">Team Members Led</div>
                      </motion.div>
                      <motion.div 
                        className="p-4 rounded-lg bg-green-500/10 border border-green-500/20 hover:bg-green-500/20 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="text-2xl font-bold text-green-400">2200+</div>
                        <div className="text-sm text-muted-foreground">Hackathon Registrants</div>
                      </motion.div>
                      <motion.div 
                        className="p-4 rounded-lg bg-purple-500/10 border border-purple-500/20 hover:bg-purple-500/20 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="text-2xl font-bold text-purple-400">1000+</div>
                        <div className="text-sm text-muted-foreground">Documents Automated</div>
                      </motion.div>
                      <motion.div 
                        className="p-4 rounded-lg bg-orange-500/10 border border-orange-500/20 hover:bg-orange-500/20 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="text-2xl font-bold text-orange-400">80%</div>
                        <div className="text-sm text-muted-foreground">Cloud Usage Reduced</div>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
