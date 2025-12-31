
import React, { useState } from 'react';
import { Award, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

const Certificates = () => {
    const [showAll, setShowAll] = useState(false);

    const certificates = [
        {
            title: 'AWS Academy Cloud Foundations',
            issuer: 'AWS Academy',
            image: '/images/Certificates/Krishnakumar-Nailk-AWS.jpg',
            color: 'from-orange-400 to-yellow-400'
        },
        {
            title: 'Oracle Java SE 21 Developer',
            issuer: 'Oracle',
            image: '/images/Certificates/Krishnakumar-Java-SE1-Dev.jpg',
            color: 'from-blue-400 to-indigo-400'
        },
        {
            title: 'SQL & Relational Databases 101',
            issuer: 'IBM / Cognitive Class',
            image: '/images/Certificates/Krishnakumar_Naik.jpg',
            color: 'from-blue-500 to-cyan-500'
        },
        {
            title: 'JavaScript Training',
            issuer: 'Ethnotech Academic Solutions',
            image: '/images/Certificates/Krishnakumar-Naik-JS.jpg',
            color: 'from-yellow-400 to-orange-400'
        },
        {
            title: 'Data Science & Analytics',
            issuer: 'HP LIFE',
            image: '/images/Certificates/Krishnakumar-Naik-DS&A.jpg',
            color: 'from-green-400 to-emerald-400'
        },
        {
            title: 'Data Science & ML Internship',
            issuer: 'YBI Foundation',
            image: '/images/Certificates/Krishnakumar-Naik-DS&ML-ybi.jpg',
            color: 'from-purple-400 to-pink-400'
        },
        {
            title: 'Google Analytics Beginner',
            issuer: 'Google Analytics Academy',
            image: '/images/Certificates/Krishnakumar-Naik-Google Analytics.jpg',
            color: 'from-yellow-500 to-orange-500'
        },
        {
            title: 'Digital Marketing',
            issuer: 'Google Digital Garage',
            image: '/images/Certificates/Krishnakumar-Naik-Fundamentals Of Digital-Marketing.jpg',
            color: 'from-red-400 to-pink-400'
        },
        {
            title: 'Hack2Skill Achievement',
            issuer: 'Hack2Skill',
            image: '/images/Certificates/Hack2skill-Certificate.png',
            color: 'from-teal-400 to-cyan-400'
        }
    ];

    const displayedCertificates = showAll ? certificates : certificates.slice(0, 5);

    return (
        <section id="certificates" className="py-20 bg-black/10">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Certifications
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8"></div>
                    <p className="text-lg text-white/70 max-w-2xl mx-auto">
                        A collection of my professional certifications and achievements in various technologies and fields.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {displayedCertificates.map((cert, index) => (
                        <div
                            key={index}
                            className="group relative bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20"
                        >
                            <div className="aspect-[4/3] overflow-hidden relative">
                                <img
                                    src={cert.image}
                                    alt={cert.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>

                                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md p-2 rounded-full border border-white/20">
                                    <Award className="text-white w-5 h-5" />
                                </div>
                            </div>

                            <div className="p-6">
                                <div className={`w-12 h-1 bg-gradient-to-r ${cert.color} mb-4 rounded-full`}></div>
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                                    {cert.title}
                                </h3>
                                <p className="text-white/60 text-sm mb-4">
                                    {cert.issuer}
                                </p>

                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-medium uppercase tracking-wider text-white/40">Verified Credential</span>
                                    <a
                                        href={cert.image}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 text-white/50 hover:text-white transition-colors"
                                    >
                                        <ExternalLink size={18} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="flex items-center gap-2 px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white font-medium transition-all duration-300 transform hover:scale-105 active:scale-95"
                    >
                        {showAll ? (
                            <>
                                Show Less <ChevronUp size={20} />
                            </>
                        ) : (
                            <>
                                View All Certificates <ChevronDown size={20} />
                            </>
                        )}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Certificates;
