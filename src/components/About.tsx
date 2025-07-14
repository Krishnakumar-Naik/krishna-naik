
import React from 'react';
import { Code, Palette, Video, Brain } from 'lucide-react';

const About = () => {
  const talents = [
    {
      icon: Code,
      title: 'Development',
      description: 'Full-stack development with MERN stack, Java, Python, and more'
    },
    {
      icon: Video,
      title: 'Video Editing',
      description: 'Creative video editing and post-production skills'
    },
    {
      icon: Palette,
      title: 'Visual Arts',
      description: 'Pencil sketching, painting, and digital art creation'
    },
    {
      icon: Brain,
      title: 'Problem Solving',
      description: 'Analytical thinking and innovative solution development'
    }
  ];

  return (
    <section id="about" className="py-20 bg-black/20">
      <div className="container mx-auto px-6">
        {/* About Me header and underline */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8"></div>
        </div>
        {/* About text above talents grid */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-lg text-foreground/80 leading-relaxed">
            I'm a passionate Full-Stack Web Developer from Yellapur, Uttara Kannada, with a strong foundation in the MERN stack
            and proficiency in multiple programming languages including Java, Python, and C. My journey in technology is complemented
            by creative skills in video editing and visual arts, making me a well-rounded developer who brings both technical expertise
            and creative vision to every project.
          </p>
        </div>
        {/* Talents grid and character image side by side */}
        <div className="max-w-6xl mx-auto relative flex flex-col lg:flex-row items-center lg:items-stretch gap-12 lg:justify-center">
          <div className="bg-card/80 shadow-xl rounded-2xl p-8 flex-1 flex justify-center">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center max-w-4xl mx-auto">
              {talents.map((talent, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                    <talent.icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {talent.title}
                  </h3>
                  <p className="text-foreground/90">
                    {talent.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <img src="/images/charecter1.png" alt="Character illustration" className="hidden lg:block w-56 h-auto absolute -right-24 top-1/2 -translate-y-1/2 z-0 drop-shadow-2xl" />
        </div>
      </div>
    </section>
  );
};

export default About;
