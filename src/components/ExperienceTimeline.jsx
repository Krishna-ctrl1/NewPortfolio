import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    title: "AI Developer Intern",
    company: "Rayi",
    date: "June 2025 - Aug 2025",
    type: "Remote",
    description: "Architected LLM-based conversational systems for financial analytics, ensuring secure API integration and high-reliability data outputs. Enhanced data integrity by implementing prompt optimization and output validation techniques to eliminate hallucinations in financial reporting. Conducted technical R&D to improve model behavior under domain-specific constraints, mirroring the accuracy requirements of global financial markets."
  },
  {
    title: "Software Engineering Intern",
    company: "OntuneAI",
    date: "May 2025 - June 2025",
    type: "Hybrid",
    description: "Worked on prompt engineering and R&D for improving robustness of LLM-driven systems. Evaluated model behavior under edge cases and domain-specific constraints."
  }
];

const ExperienceTimeline = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray('.timeline-card');

    cards.forEach((card) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 80%", // Triggers when the top of the card is 80% down the screen
          toggleActions: "play none none reverse", // Plays on scroll down, reverses on scroll up
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      });
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative z-10 bg-black text-white py-32 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold mb-16 tracking-tight border-b border-gray-800 pb-6">
          Experience & Architecture
        </h2>

        <div className="flex flex-col gap-12 relative before:absolute before:inset-0 before:ml-4 md:before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-purple-500/30 before:to-transparent">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-card relative z-10 glass-panel p-8 md:p-10 rounded-3xl group hover:-translate-y-2 hover:border-purple-400 hover:shadow-[0_20px_50px_rgba(139,92,246,0.2)] transition-all duration-500 overflow-hidden">
              {/* Ambient inner glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-xl"></div>

              <div className="relative z-10 flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">{exp.title}</h3>
                  <h4 className="text-lg text-gray-400 font-medium">{exp.company} <span className="text-sm font-mono text-gray-500 ml-2 px-2 py-1 border border-gray-800 rounded-md bg-white/5">{exp.type}</span></h4>
                </div>
                <div className="mt-4 md:mt-0 text-right">
                  <span className="inline-block px-4 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 font-mono text-sm tracking-wide">{exp.date}</span>
                </div>
              </div>

              <p className="relative z-10 text-gray-300 leading-relaxed text-sm md:text-base border-t border-gray-800/50 pt-6 mt-4">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceTimeline;