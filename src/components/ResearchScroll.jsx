import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const researchPapers = [
  {
    title: "Quantum Machine Learning in IoT Networks",
    publisher: "IEEE Engineering Management Review",
    year: "2026",
    status: "Published",
    doi: "https://doi.org/10.1109/EMR.2026.3698824",
    doiLabel: "10.1109/EMR.2026.3698824",
    bullets: [
      "Comprehensive review of QML applications in IoT networks covering architectures, opportunities, and limitations.",
      "Analyzed scalability, computational constraints, data privacy, and real-world deployment of quantum-enhanced systems.",
      "Identified research directions at the intersection of quantum computing, AI, and next-generation IoT ecosystems."
    ]
  },
  {
    title: "Machine Learning for Industry 5.0: A Survey",
    publisher: "IEEE Internet of Things Journal",
    year: "2025",
    status: "Published",
    doi: "https://doi.org/10.1109/JIOT.2025.3604413",
    doiLabel: "10.1109/JIOT.2025.3604413",
    bullets: [
      "Surveyed ML applications in Industry 5.0, analyzing scalability, data distribution, and model robustness challenges.",
      "Cross-institutional collaboration with researchers from IIT Mandi, FinThrive (USA), and Sister Nivedita University."
    ]
  },
  {
    title: "Quantum Machine Learning for Industry 5.0",
    publisher: "Springer Nature",
    year: "2025",
    status: "Published",
    doi: "https://doi.org/10.1007/978-3-031-87837-4_7",
    doiLabel: "978-3-031-87837-4_7",
    bullets: [
      "Explored quantum-enhanced learning frameworks for cyber-physical systems.",
      "Studied hybrid quantum-classical models with focus on scalability and real-world feasibility."
    ]
  }
];

const ResearchScroll = () => {
  const containerRef = useRef(null);
  const scrollWrapperRef = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    const sections = gsap.utils.toArray('.research-card');

    mm.add("(min-width: 768px)", () => {
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          // The length of the scroll dictates how long it stays pinned
          end: () => "+=" + scrollWrapperRef.current.offsetWidth,
        }
      });
    });

    return () => mm.revert();
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="bg-black/40 backdrop-blur-sm text-white md:h-screen md:overflow-hidden h-auto py-24 md:py-0 flex flex-col justify-center border-t border-gray-900 border-b relative z-20">
      <div className="px-6 md:pl-20 mb-12">
        <h2 className="text-5xl font-bold tracking-tight text-white">
          Research & Publications
        </h2>
        <p className="text-gray-400 mt-4 text-xl">Advancing the theoretical foundations of AI.</p>
      </div>

      <div ref={scrollWrapperRef} className="flex flex-col md:flex-row w-full md:w-[120vw] px-6 md:px-20 gap-6 md:gap-8">
        {researchPapers.map((paper, index) => (
          <div
            key={index}
            className="research-card w-full md:w-[40vw] flex-shrink-0 bg-gray-950 border border-gray-800 rounded-3xl p-8 md:p-10 flex flex-col justify-between hover:border-blue-500 transition-colors duration-500"
          >
            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-blue-900/30 text-blue-300 border border-blue-500/20">
                  {paper.publisher}
                </span>
                <span className="text-gray-500 font-mono text-sm">{paper.year}</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-6 leading-snug">{paper.title}</h3>
              <ul className="text-gray-400 text-sm leading-relaxed space-y-3 list-disc pl-5">
                {paper.bullets.map((bullet, idx) => (
                  <li key={idx} className="hover:text-gray-200 transition-colors duration-200">{bullet}</li>
                ))}
              </ul>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-800">
              <span className="text-sm font-mono text-gray-500">
                DOI: <a href={paper.doi} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 hover:underline transition-colors break-all">{paper.doiLabel}</a>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResearchScroll;