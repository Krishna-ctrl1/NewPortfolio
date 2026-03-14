import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const leadershipRoles = [
    {
        title: "Student Satellite Club Lead",
        org: "IIIT Sri City",
        date: "Nov 2025 - Present",
        points: [
            "Leading multidisciplinary teams on satellite mission planning, subsystem design, and standards-compliant documentation.",
            "Driving research-oriented development of AI-based tools for satellite engineering analysis."
        ]
    },
    {
        title: "AI/ML & Data Science Domain Lead",
        org: "Google Developer Groups (GDG), IIIT Sri City",
        date: "Aug 2025 - Present",
        points: [
            "Mentoring students in machine learning and data science with strong emphasis on theory and applications.",
            "Organizing research-focused workshops bridging mathematical foundations and real-world AI systems."
        ]
    }
];

const LeadershipSection = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo('.leadership-card',
            { scale: 0.95, y: 40, opacity: 0 },
            {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                },
                scale: 1,
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power3.out'
            }
        );
    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="py-24 px-6 md:px-20 bg-black border-t border-gray-900 relative z-10">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-5xl font-bold mb-16 tracking-tight border-b border-gray-800 pb-6 text-white text-center">
                    Leadership & Initiatives
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {leadershipRoles.map((role, idx) => (
                        <div
                            key={idx}
                            className="leadership-card block glass-panel p-8 md:p-10 rounded-3xl hover:-translate-y-4 hover:border-cyan-400 hover:shadow-[0_20px_50px_rgba(6,182,212,0.3)] hover:bg-white/5 transition-all duration-500 group relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/10 via-purple-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-xl"></div>

                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div>
                                    <div className="inline-block px-4 py-1 rounded-full bg-cyan-950/50 border border-cyan-800/50 mb-6 group-hover:border-cyan-500/50 transition-colors">
                                        <span className="text-sm font-mono text-cyan-400 font-medium tracking-wide">{role.date}</span>
                                    </div>
                                    <h3 className="text-3xl font-extrabold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-500 transition-all duration-300">{role.title}</h3>
                                    <h4 className="text-lg text-gray-400 mb-8 font-medium">{role.org}</h4>
                                </div>

                                <ul className="space-y-5">
                                    {role.points.map((pt, i) => (
                                        <li key={i} className="flex items-start text-gray-300 leading-relaxed text-sm md:text-base group-hover:text-gray-200 transition-colors duration-300">
                                            <span className="mr-4 text-cyan-500 mt-1 flex-shrink-0 align-middle">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                </svg>
                                            </span>
                                            <span className="leading-snug">{pt}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LeadershipSection;
