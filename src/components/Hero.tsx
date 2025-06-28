
import React from 'react';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-purple-400 to-pink-400 p-1 mb-6">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">KN</span>
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Krishnakumar Naik
          </h1>
          
          <p className="text-xl md:text-2xl text-purple-300 mb-4">
            Full-Stack Web Developer
          </p>
          
          <p className="text-lg text-white/80 mb-2">
            MERN Stack | Java | Python | C | SQL
          </p>
          
          <div className="flex items-center justify-center text-white/60 mb-8">
            <MapPin size={16} className="mr-2" />
            <span>Yellapur, Uttara Kannada</span>
          </div>
          
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
            Passionate developer with expertise in full-stack development, creative skills in video editing and drawing, 
            and experience building innovative solutions like construction management tools and voice assistants.
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://github.com"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={24} className="text-white" />
            </a>
            <a
              href="https://linkedin.com"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={24} className="text-white" />
            </a>
            <a
              href="mailto:krishna@example.com"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300"
            >
              <Mail size={24} className="text-white" />
            </a>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-white/30 text-white rounded-full hover:bg-white/10 transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
