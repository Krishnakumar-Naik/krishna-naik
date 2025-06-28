
import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 bg-black/30 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <span className="text-white/80">Made with</span>
            <Heart size={16} className="text-red-400 mx-2" />
            <span className="text-white/80">and</span>
            <Code size={16} className="text-purple-400 mx-2" />
            <span className="text-white/80">by Krishnakumar Naik</span>
          </div>
          
          <div className="text-white/60 text-sm">
            <p>&copy; {new Date().getFullYear()} Krishnakumar Naik. All rights reserved.</p>
            <p className="mt-2">Full-Stack Developer | MERN Stack Specialist | Creative Problem Solver</p>
          </div>
          
          <div className="mt-6">
            <p className="text-white/50 text-xs">
              Yellapur, Uttara Kannada, Karnataka | Building innovative web solutions
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
