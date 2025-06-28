
import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-black/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 flex items-center justify-center mr-6">
                <Briefcase size={32} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Software Development Intern</h3>
                <p className="text-purple-300 text-lg">Eyeq dot net</p>
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

            <div className="bg-white/5 rounded-lg p-6">
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
    </section>
  );
};

export default Experience;
