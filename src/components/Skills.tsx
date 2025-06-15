
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    category: "Languages",
    skills: ["JavaScript", "TypeScript", "Java", "Python", "Ruby", "SQL", "C", "Racket", "Haskell", "Bash"]
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "React Native", "HTML/CSS", "Tailwind CSS"]
  },
  {
    category: "Backend",
    skills: ["Node.js", "Django", "FastAPI", "Spring Boot", "Ruby on Rails", "Express.js"]
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Firebase", "Prisma", "SQL", "NoSQL"]
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS EC2", "Docker", "Kubernetes", "GitHub Actions", "CI/CD", "Nginx", "Linux"]
  },
  {
    category: "Tools & Technologies",
    skills: ["Git", "GitHub", "Jira", "REST APIs", "Socket.IO", "JWT", "Stripe API", "OpenAI API"]
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Skills & Technologies</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-background rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-primary">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
