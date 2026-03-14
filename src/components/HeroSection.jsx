import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const HeroSection = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline();
        tl.from('.hero-headline', {
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: 'power4.out',
            delay: 0.5
        }).from('.hero-sub', {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        }, "-=0.4").from('.hero-cta', {
            y: 20,
            opacity: 0,
            duration: 0.6,
            ease: 'back.out(1.5)'
        }, "-=0.2");
    }, { scope: containerRef });

    return (
        <div id="hero" ref={containerRef} className="relative z-10 flex flex-col justify-center items-center h-screen px-6 text-center">
            <div className="overflow-hidden">
                <h1 className="hero-headline text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter text-white mb-2">
                    Krishna <span className="text-gradient">Gupta</span>
                </h1>
            </div>
            <div className="overflow-hidden mb-8">
                <h2 className="hero-headline text-xl md:text-3xl text-gray-300 font-light tracking-widest mt-2 uppercase">
                    AI Architect & Data Scientist
                </h2>
            </div>

            <p className="hero-sub max-w-3xl text-gray-400 text-lg md:text-xl font-light leading-relaxed mb-10">
                B.Tech (Honors) Data Science student with published research in IEEE and Springer on Quantum ML and Industry 5.0. Experienced in architecting end-to-end AI pipelines, from LLM fine-tuning to scalable MLOps.
            </p>

            <div className="hero-cta flex gap-6">
                <a href="#projects" className="px-8 py-4 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]">
                    View Projects
                </a>
                <a href="#experience" className="px-8 py-4 rounded-full bg-transparent border border-gray-600 hover:border-gray-300 text-white font-semibold transition-all duration-300">
                    My Experience
                </a>
            </div>

            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce flex flex-col items-center text-gray-500">
                <span className="text-xs tracking-[0.2em] mb-2 uppercase">Scroll</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
            </div>
        </div>
    );
};

export default HeroSection;
