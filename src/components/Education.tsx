
import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor's in Computer Science",
      institution: "University/College Name",
      location: "Karnataka, India",
      period: "2020 - 2024",
      grade: "First Class",
      description: "Specialized in software development, data structures, algorithms, and full-stack web development.",
      subjects: ["Data Structures & Algorithms", "Web Development", "Database Management", "Software Engineering", "Computer Networks", "Operating Systems"]
    },
    {
      degree: "Pre-University Course (12th)",
      institution: "College Name",
      location: "Uttara Kannada, Karnataka",
      period: "2018 - 2020",
      grade: "Distinction",
      description: "Science stream with focus on Mathematics, Physics, and Chemistry.",
      subjects: ["Mathematics", "Physics", "Chemistry", "Computer Science"]
    },
    {
      degree: "Secondary School Certificate (10th)",
      institution: "School Name",
      location: "Yellapur, Uttara Kannada",
      period: "2017 - 2018",
      grade: "First Class",
      description: "Strong foundation in core subjects with excellent academic performance.",
      subjects: ["Mathematics", "Science", "Social Studies", "Languages"]
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8"></div>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            My educational journey that built the foundation for my technical expertise and problem-solving skills.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={32} className="text-white" />
                </div>

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white mb-2 md:mb-0">
                      {edu.degree}
                    </h3>
                    <div className="flex items-center text-purple-300">
                      <Award size={16} className="mr-2" />
                      <span className="font-semibold">{edu.grade}</span>
                    </div>
                  </div>

                  <p className="text-xl text-purple-200 mb-4">{edu.institution}</p>

                  <div className="flex flex-wrap items-center gap-4 mb-4 text-white/70">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2" />
                      <span>{edu.location}</span>
                    </div>
                  </div>

                  <p className="text-white/80 mb-6">{edu.description}</p>

                  <div>
                    <h4 className="text-white font-semibold mb-3">Key Subjects:</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.subjects.map((subject, subIndex) => (
                        <span
                          key={subIndex}
                          className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80 border border-white/20"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Academic Highlights</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="text-purple-300 font-semibold mb-2">Technical Skills Developed:</h4>
                <ul className="text-white/70 space-y-1 text-sm">
                  <li>• Programming Languages</li>
                  <li>• Web Development Frameworks</li>
                  <li>• Database Design & Management</li>
                  <li>• Software Engineering Principles</li>
                </ul>
              </div>
              <div>
                <h4 className="text-purple-300 font-semibold mb-2">Achievements:</h4>
                <ul className="text-white/70 space-y-1 text-sm">
                  <li>• Consistent academic performance</li>
                  <li>• Strong foundation in CS concepts</li>
                  <li>• Practical project experience</li>
                  <li>• Problem-solving expertise</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
