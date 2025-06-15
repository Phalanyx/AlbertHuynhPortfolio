
export const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-muted-foreground mb-6">
                I'm a Computer Science student at the University of Toronto, passionate about creating 
                innovative software solutions. Currently working as a Software Developer Intern at IBM, 
                where I've built internal tools and automated document conversion for their LMS platform.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                As VP of Technology at Google Developer Group, I lead a team of 20+ developers building 
                web platforms. I've also contributed to UTMIST, Canada's largest ML-focused student organization, 
                developing their public site and internal platforms.
              </p>
              <p className="text-lg text-muted-foreground">
                My experience spans full-stack development, mobile applications, machine learning, and 
                DevOps. I enjoy tackling complex problems and turning ideas into reality through code.
              </p>
            </div>
            <div className="bg-secondary/20 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>🎓 Computer Science @ University of Toronto</li>
                <li>💼 Software Developer Intern @ IBM</li>
                <li>👥 VP of Technology @ Google Developer Group</li>
                <li>🤖 Developer @ UTMIST ML Team</li>
                <li>📱 Full-Stack & Mobile Development</li>
                <li>☁️ Cloud & DevOps Experience</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
