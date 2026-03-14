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

        <div className="flex flex-col gap-12">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-card bg-gray-900 border border-gray-800 p-8 rounded-2xl hover:border-purple-500 transition-colors duration-300">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <h3 className="text-2xl font-semibold text-purple-400">{exp.title}</h3>
                <span className="text-gray-500 font-mono text-sm mt-2 md:mt-0">{exp.date}</span>
              </div>
              <h4 className="text-xl text-gray-300 mb-4">{exp.company}</h4>
              <p className="text-gray-400 leading-relaxed">
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