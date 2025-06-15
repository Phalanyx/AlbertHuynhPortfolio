
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
    title: "Software Engineer Intern",
    date: "May 2024 – Aug 2024",
    tech: ["Java", "Android", "Firebase"],
    highlights: [
      "Built an Android app to showcase 100+ artifacts using Java and Firebase.",
      "Wrote unit tests using JUnit and Mockito.",
      "Streamlined upload of media assets to Firebase CDN and RTDB."
    ]
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Experience</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">{exp.title}</CardTitle>
                    <p className="text-lg font-semibold text-primary">{exp.company}</p>
                  </div>
                  <Badge variant="secondary">{exp.date}</Badge>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.tech.map((tech) => (
                    <Badge key={tech} variant="outline">{tech}</Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-muted-foreground">
                      • {highlight}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
