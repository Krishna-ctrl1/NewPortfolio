import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    title: "Machine Learning & AI",
    skills: ["NLP", "Transformers", "LLM Fine-Tuning", "RAG", "LangChain", "PyTorch", "TensorFlow", "Scikit-learn"]
  },
  {
    title: "Programming",
    skills: ["Python", "SQL", "R", "JavaScript", "C"]
  },
  {
    title: "Tools",
    skills: ["Docker", "Kubernetes", "MLflow", "Git", "Streamlit", "Jupyter", "Power BI"]
  },
  {
    title: "Research",
    skills: ["Statistical Modeling", "Probability", "Information Retrieval", "Quantum ML"]
  }
];

const SkillsGrid = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const pills = gsap.utils.toArray('.skill-pill');

    gsap.from(pills, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
      },
      y: 30,
      opacity: 0,
      duration: 0.5,
      stagger: 0.05, // This creates the sequential pop-in effect
      ease: "back.out(1.7)" // Adds a slight bounce
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="bg-black text-white py-32 px-6 md:px-20 relative z-10 border-t border-gray-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl font-bold mb-16 tracking-tight text-center">
          Core Architecture
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="glass-panel p-8 md:p-10 rounded-3xl group hover:-translate-y-2 hover:border-purple-400 hover:shadow-[0_20px_50px_rgba(139,92,246,0.25)] transition-all duration-500 relative overflow-hidden">
              {/* Inner ambient glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-xl"></div>

              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-8 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">{category.title}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="skill-pill bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm font-medium text-gray-300 backdrop-blur shadow-sm group-hover:border-purple-500/40 group-hover:text-white transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsGrid;