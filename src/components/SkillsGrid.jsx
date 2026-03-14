import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    title: "Programming & Databases",
    skills: ["Python", "SQL", "R", "C", "JavaScript (React, Node.js)", "HTML/CSS", "MongoDB"]
  },
  {
    title: "Machine Learning & AI",
    skills: ["NLP (Hugging Face, Transformers)", "LLM Fine-Tuning", "LangChain", "LangGraph", "Scikit-learn", "PyTorch", "TensorFlow", "Keras", "Prompt Engineering"]
  },
  {
    title: "Research & Analytics",
    skills: ["Statistical Modeling", "Probability Theory", "Spatio-Temporal Analysis", "Information Retrieval", "Data Integrity", "Quantum ML"]
  },
  {
    title: "Tools & Deployment",
    skills: ["Git", "Docker", "Kubernetes", "MLflow", "Streamlit", "Jupyter Notebook", "RStudio", "GitHub Actions", "Power BI", "Tableau"]
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
            <div key={idx} className="glass-panel p-8 md:p-10 rounded-3xl group hover:border-purple-500/50 transition-all duration-500 hover:shadow-[0_10px_40px_rgba(139,92,246,0.1)]">
              <h3 className="text-2xl font-semibold mb-8 text-white group-hover:text-purple-400 transition-colors">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="skill-pill bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm font-medium text-gray-300 backdrop-blur shadow-sm group-hover:border-purple-500/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsGrid;