import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        gsap.from('.edu-card', {
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 80%',
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        });
    }, { scope: containerRef });

    return (
        <div id="education" ref={containerRef} className="relative z-10 bg-black text-white py-24 px-6 md:px-20 border-t border-gray-900">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-5xl font-bold mb-16 tracking-tight border-b border-gray-800 pb-6">
                    Education
                </h2>

                <div className="edu-card glass-panel rounded-3xl p-8 md:p-12 hover:-translate-y-2 hover:border-purple-400 hover:shadow-[0_20px_50px_rgba(139,92,246,0.2)] transition-all duration-500 relative overflow-hidden group">
                    {/* Ambient inner glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-xl"></div>

                    <div className="relative z-10 flex flex-col md:flex-row md:justify-between items-start md:items-center mb-8">
                        <div>
                            <h3 className="text-3xl md:text-4xl font-extrabold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">Indian Institute of Information Technology, Sri City</h3>
                            <p className="text-lg md:text-xl text-gray-300 font-medium">B.Tech (Honors) in Computer Science and Engineering</p>
                        </div>
                        <div className="mt-6 md:mt-0 text-left md:text-right">
                            <span className="inline-block px-4 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 font-mono text-sm tracking-wide mb-2 md:mb-1 block w-max md:ml-auto">2023 – 2027</span>
                            <span className="text-sm text-gray-500 tracking-wider uppercase block">Sri City, Andhra Pradesh</span>
                        </div>
                    </div>

                    <div className="relative z-10 mt-6 pt-6 border-t border-gray-800/50 flex flex-col sm:flex-row gap-6 sm:gap-12">
                        <div>
                            <span className="text-sm text-gray-500 uppercase tracking-widest block mb-1">Specialization</span>
                            <span className="text-xl font-medium text-gray-200">Data Science</span>
                        </div>
                        <div>
                            <span className="text-sm text-gray-500 uppercase tracking-widest block mb-1">CGPA</span>
                            <span className="text-xl font-medium text-cyan-400">8.99 / 10</span>
                        </div>
                        <div>
                            <span className="text-sm text-gray-500 uppercase tracking-widest block mb-1">Graduation</span>
                            <span className="text-xl font-medium text-purple-400">Expected 2027</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;
