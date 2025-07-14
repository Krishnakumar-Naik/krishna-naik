
import React from 'react';
import { Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 bg-black/30 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="text-center">
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
