import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        title: "OrbitAI",
        subtitle: "Domain-Specific Satellite Engineering LLM (2025)",
        role: "LLM Fine-Tuning & Deployment",
        link: "https://github.com/Krishna-ctrl1/OrbitAI",
        description: "Fine-tuned LLaMA-3-8B on domain-specific engineering data to improve factual accuracy. Evaluated performance on 100+ structured test cases, identifying failure modes in safety-critical responses. Reduced hallucinations using prompt constraints and validation pipelines. Deployed quantized GGUF model locally via Ollama for low-latency inference.",
        tags: ["Llama-3-8B", "Fine-Tuning", "Ollama", "GGUF"]
    },
    {
        title: "FinAssist",
        subtitle: "RAG-Powered Financial Advisory Agent (2025)",
        role: "LLM Engineering & Vector Search",
        link: "https://github.com/Krishna-ctrl1/finassist-chatbot",
        description: "Built a RAG-based financial advisory system using embedding-based retrieval and semantic search. Designed a query classification pipeline for routing queries across 7 financial domains. Integrated real-time financial APIs for dynamic and context-aware responses. Optimized response generation workflow for improved relevance and efficiency.",
        tags: ["RAG", "Vector Search", "Financial APIs", "Streamlit"]
    },
    {
        title: "DRAKZ: Modular AI Financial Ecosystem",
        subtitle: "Full-Stack AI Platform (2024)",
        role: "Architect & Developer",
        link: "https://github.com/Krishna-ctrl1/DRAKZ-1",
        description: "Architected a modular financial management system integrating asset tracking, analytics, and advisory services. Designed AI-driven stock recommendation and financial planning modules using real-time data. Implemented secure authentication and scalable backend services for multi-user deployment.",
        tags: ["Full-Stack", "AI Analytics", "Secure Backend"]
    }
];

const ProjectsSection = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        const cards = gsap.utils.toArray('.project-card');

        gsap.fromTo(cards,
            { y: 50, opacity: 0 },
            {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 75%",
                },
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out"
            }
        );
    }, { scope: containerRef });

    return (
        <div id="projects" ref={containerRef} className="bg-black text-white py-32 px-6 md:px-20 border-t border-gray-900">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-end mb-16 border-b border-gray-800 pb-6">
                    <h2 className="text-5xl font-bold tracking-tight">
                        Selected Projects
                    </h2>
                    <span className="hidden md:block text-gray-500 font-mono">/ BUILD</span>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="project-card relative block glass-panel p-8 rounded-3xl hover:-translate-y-2 hover:border-cyan-500/50 hover:shadow-[0_15px_40px_rgba(6,182,212,0.2)] transition-all duration-500 group overflow-hidden flex flex-col h-full"
                        >
                            {/* Hover Gradient Background Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="absolute top-8 right-8 text-gray-400 hover:text-white hover:scale-110 transition-all z-20">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                </svg>
                            </a>

                            <div className="relative z-10 flex-grow">
                                <h3 className="text-3xl font-semibold mb-2 text-white group-hover:text-cyan-400 transition-colors pr-10">
                                    {project.title}
                                </h3>
                                <p className="text-sm font-mono text-gray-400 mb-6 border-b border-gray-800 pb-4">
                                    {project.role}
                                </p>

                                <p className="text-gray-300 leading-relaxed mb-8 text-sm">
                                    {project.description}
                                </p>
                            </div>

                            <div className="relative z-10 flex flex-wrap gap-2 mt-auto">
                                {project.tags.map((tag, tIdx) => (
                                    <span key={tIdx} className="bg-white/5 border border-white/10 px-3 py-1 rounded-full text-xs font-medium text-gray-300 group-hover:border-cyan-500/30 group-hover:bg-cyan-900/20 backdrop-blur transition-all">
                                        {tag}
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

export default ProjectsSection;
