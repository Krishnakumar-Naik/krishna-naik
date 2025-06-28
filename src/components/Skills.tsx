
import React from 'react';
import { Code, Database, Palette, Video, Globe, Server } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Globe,
      color: 'from-blue-400 to-cyan-400',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'HTML5/CSS3', level: 95 },
        { name: 'Tailwind CSS', level: 80 },
        { name: 'Responsive Design', level: 90 }
      ]
    },
    {
      title: 'Backend Development',
      icon: Server,
      color: 'from-green-400 to-emerald-400',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 80 },
        { name: 'Java', level: 75 },
        { name: 'Python', level: 80 },
        { name: 'C Programming', level: 70 }
      ]
    },
    {
      title: 'Database & Tools',
      icon: Database,
      color: 'from-purple-400 to-pink-400',
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'SQL', level: 80 },
        { name: 'Git/GitHub', level: 90 },
        { name: 'RESTful APIs', level: 85 },
        { name: 'Postman', level: 75 }
      ]
    },
    {
      title: 'Creative Skills',
      icon: Palette,
      color: 'from-orange-400 to-red-400',
      skills: [
        { name: 'Video Editing', level: 85 },
        { name: 'Pencil Sketching', level: 80 },
        { name: 'Digital Painting', level: 75 },
        { name: 'UI/UX Design', level: 70 },
        { name: 'Adobe Creative Suite', level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-black/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8"></div>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            A comprehensive overview of my technical and creative skills, developed through education, projects, and hands-on experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center mr-4`}>
                  <category.icon size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white/90 font-medium">{skill.name}</span>
                      <span className="text-white/70 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div
                        className={`bg-gradient-to-r ${category.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">Additional Competencies</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 flex items-center justify-center">
                  <Code size={32} className="text-white" />
                </div>
                <h4 className="text-white font-semibold mb-2">Problem Solving</h4>
                <p className="text-white/70 text-sm">Analytical thinking and innovative solution development for complex challenges</p>
              </div>
              <div>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 flex items-center justify-center">
                  <Video size={32} className="text-white" />
                </div>
                <h4 className="text-white font-semibold mb-2">Content Creation</h4>
                <p className="text-white/70 text-sm">Video editing, visual storytelling, and multimedia content production</p>
              </div>
              <div>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 flex items-center justify-center">
                  <Globe size={32} className="text-white" />
                </div>
                <h4 className="text-white font-semibold mb-2">Full-Stack Development</h4>
                <p className="text-white/70 text-sm">End-to-end application development from concept to deployment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
