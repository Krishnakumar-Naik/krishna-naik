
import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, FileText, X } from 'lucide-react';

const Experience = () => {
  const [showCertificate, setShowCertificate] = useState(false);

  return (
    <section id="experience" className="py-20 bg-black/20">
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 flex flex-col items-center lg:items-stretch relative">
            {/* Top row: left content and image */}
            <div className="w-full flex flex-col lg:flex-row items-center lg:items-stretch">
              <div className="flex-1">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 flex items-center justify-center mr-6">
                    <Briefcase size={32} className="text-white" />
                  </div>
                  <div className="flex-1 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white">Software Development Intern</h3>
                      <p className="text-purple-300 text-lg uppercase tracking-tight">Eyeq dot net</p>
                    </div>
                    <button
                      onClick={() => setShowCertificate(true)}
                      className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full font-semibold transition-all duration-300 shadow-lg shadow-purple-500/20 transform hover:-translate-y-1 active:scale-95 text-sm self-start md:self-center"
                    >
                      <FileText size={18} />
                      View Certificate
                    </button>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 mb-6 text-white/70">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-2" />
                    <span>3 Months (Offline Internship)</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-2" />
                    <span>Mangaluru</span>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-white mb-4">Key Achievements:</h4>
                  <ul className="space-y-3 text-white/80">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Successfully completed 3 major projects during the internship period</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Gained hands-on experience in real-world software development processes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Collaborated with professional development teams on live projects</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Applied MERN stack knowledge to solve real business problems</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Enhanced skills in project management and client communication</span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Character2 image inside the card, right side on large screens, moved slightly down */}
              <div className="hidden lg:flex items-start justify-end ml-8 mt-12">
                <img src="/images/charecter2.png" alt="Character illustration" className="w-56 h-auto" />
              </div>
            </div>
            {/* Bottom row: Skills Developed section, full width inside card */}
            <div className="bg-white/5 rounded-lg p-6 mt-8 w-full">
              <h4 className="text-lg font-semibold text-white mb-3">Skills Developed:</h4>
              <div className="flex flex-wrap gap-2">
                {['Team Collaboration', 'Project Management', 'Client Relations', 'Code Review', 'Agile Development', 'Problem Solving'].map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-full text-sm text-white/80"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      {showCertificate && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
            onClick={() => setShowCertificate(false)}
          ></div>
          <div className="relative max-w-3xl w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300">
            <div className="absolute top-4 right-4 z-10">
              <button
                onClick={() => setShowCertificate(false)}
                className="p-2 bg-black/50 hover:bg-black/80 text-white rounded-full transition-colors border border-white/20 shadow-lg"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-2">
              <img
                src="/images/Krishnakumar-naik-EyeQ Dot Net.jpg"
                alt="Internship Certificate"
                className="w-full h-auto rounded-xl shadow-2xl"
              />
            </div>

            <div className="bg-black/60 p-4 border-t border-white/10 backdrop-blur-md flex items-center justify-between">
              <div>
                <h4 className="text-white font-bold">Internship Certificate</h4>
                <p className="text-white/60 text-sm">Eyeq dot net - Software Development</p>
              </div>
              <a
                href="/images/Krishnakumar-naik-EyeQ Dot Net.jpg"
                download
                className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-sm rounded-lg transition-colors border border-white/10"
              >
                Download
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Experience;
