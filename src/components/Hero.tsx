
import React from 'react';
import { Github, Linkedin, Mail, MapPin, Instagram } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-32 pb-20 bg-transparent">
      <div className="container mx-auto px-6 text-center flex flex-col items-center gap-8">
        <div className="animate-fade-in w-full flex flex-col items-center gap-6">
          <img src="/profile.jpg" alt="Profile" className="mx-auto mb-4 w-40 h-40 rounded-full object-cover shadow-lg border-4 border-primary" />
          <h1 className="text-6xl md:text-8xl font-extrabold text-foreground mb-2 tracking-tight drop-shadow-lg">
            Krishnakumar Naik
          </h1>
          <p className="text-2xl md:text-3xl text-foreground/90 font-semibold mb-2">
            Full-Stack Web Developer
          </p>
          <p className="text-lg text-foreground/90 mb-2">
            MERN Stack | Java | Python | C | SQL
          </p>
          <div className="flex items-center justify-center text-foreground/70 mb-4 gap-2">
            <MapPin size={20} className="mr-2" />
            <span>Yellapur, Uttara Kannada</span>
          </div>
          <p className="text-lg text-foreground/90 max-w-2xl mx-auto mb-4">
            Passionate developer with expertise in full-stack development, creative skills in video editing and drawing, 
            and experience building innovative solutions like construction management tools and voice assistants.
          </p>
          <div className="flex justify-center space-x-6 mb-4">
            <a
              href="https://github.com/Krishnakumar-Naik"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={24} className="text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/krishnakumar-naik/"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={24} className="text-white" />
            </a>
            <a
              href="https://www.instagram.com/krishnakumar_naik_/"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={24} className="text-white" />
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
