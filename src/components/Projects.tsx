
import React from 'react';
import { ExternalLink, Github, Building, Mic, Music } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Construction Management Tool',
      description: 'A comprehensive web application for managing construction projects, tracking progress, resource allocation, and team coordination.',
      icon: Building,
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      features: ['Project tracking', 'Resource management', 'Team collaboration', 'Progress monitoring'],
      color: 'from-blue-400 to-cyan-400'
    },
    {
      title: 'Voice Assistant',
      description: 'An intelligent voice assistant application with natural language processing capabilities and voice recognition.',
      icon: Mic,
      technologies: ['Python', 'Speech Recognition', 'NLP', 'Machine Learning'],
      features: ['Voice commands', 'Speech synthesis', 'Task automation', 'Smart responses'],
      color: 'from-green-400 to-emerald-400'
    },
    {
      title: 'Music Web App',
      description: 'A modern music streaming platform with playlist management, audio visualization, and social features.',
      icon: Music,
      technologies: ['React', 'Node.js', 'Web Audio API', 'MongoDB'],
      features: ['Music streaming', 'Playlist creation', 'Social sharing', 'Audio visualization'],
      color: 'from-purple-400 to-pink-400'
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8"></div>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Here are some of my major projects that showcase my skills in full-stack development and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 border border-white/10"
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${project.color} flex items-center justify-center mb-6`}>
                <project.icon size={32} className="text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">
                {project.title}
              </h3>
              
              <p className="text-white/70 mb-6">
                {project.description}
              </p>
              
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                <ul className="space-y-1">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-white/70 text-sm">
                      • {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex space-x-4">
                <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                  <ExternalLink size={16} />
                  <span className="text-white text-sm">Live Demo</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 border border-white/30 rounded-lg hover:bg-white/10 transition-all duration-300">
                  <Github size={16} />
                  <span className="text-white text-sm">Code</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
