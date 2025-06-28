
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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-lg text-white/80 leading-relaxed">
              I'm a passionate Full-Stack Web Developer from Yellapur, Uttara Kannada, with a strong foundation in the MERN stack 
              and proficiency in multiple programming languages including Java, Python, and C. My journey in technology is complemented 
              by creative skills in video editing and visual arts, making me a well-rounded developer who brings both technical expertise 
              and creative vision to every project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {talents.map((talent, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center">
                  <talent.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {talent.title}
                </h3>
                <p className="text-white/70">
                  {talent.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
