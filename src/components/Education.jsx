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

                <div className="edu-card glass-panel rounded-3xl p-8 md:p-10 hover:border-purple-500 transition-colors duration-500 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative z-10 flex flex-col md:flex-row md:justify-between items-start md:items-center mb-6">
                        <div>
                            <h3 className="text-3xl font-semibold mb-2">Indian Institute of Information Technology</h3>
                            <p className="text-lg text-gray-400">B.Tech (Honors) in Computer Science and Engineering</p>
                        </div>
                        <div className="mt-4 md:mt-0 text-right">
                            <span className="block text-2xl font-bold text-purple-400 mb-1">2023 – 2027</span>
                            <span className="text-sm text-gray-500 tracking-wider uppercase">Sri City, AP</span>
                        </div>
                    </div>

                    <div className="relative z-10 mt-6 pt-6 border-t border-gray-800/50 flex flex-col md:flex-row gap-6 md:gap-12">
                        <div>
                            <span className="text-sm text-gray-500 uppercase tracking-widest block mb-1">Specialization</span>
                            <span className="text-xl font-medium text-gray-200">Data Science</span>
                        </div>
                        <div>
                            <span className="text-sm text-gray-500 uppercase tracking-widest block mb-1">CGPA</span>
                            <span className="text-xl font-medium text-cyan-400">8.91 / 10</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;
