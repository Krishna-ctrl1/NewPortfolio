import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const researchPapers = [
  {
    title: "Quantum Machine Learning for Industry 5.0",
    publisher: "Springer Nature",
    status: "Published",
    doi: "https://doi.org/10.1007/978-3-031-87837-4_7",
    desc: "Investigated quantum-enhanced learning frameworks for human-machine collaboration and sustainable cyber-physical systems. Developed theoretical insights connecting quantum learning advantages with Industry 5.0 system design."
  },
  {
    title: "Machine Learning for Industry 5.0: A Survey",
    publisher: "IEEE Internet of Things Journal",
    status: "Published",
    doi: "https://doi.org/10.1109/JIOT.2025.3604413",
    desc: "Conducted a structured survey of machine learning techniques across smart manufacturing and federated systems. Proposed a taxonomy linking learning paradigms with real-world system constraints."
  },
  {
    title: "Quantum ML in IoT Networks",
    publisher: "IEEE EMR",
    status: "Under Review",
    doi: "Fundamentals & Applications",
    desc: "Explored quantum-enhanced feature mappings for distributed IoT data streams. Analyzed learning stability and architectural trade-offs using information-theoretic metrics."
  },
  {
    title: "Robust sEMG-Based Learning for Prosthetic Control",
    publisher: "Research Project",
    status: "Ongoing",
    doi: "Under Dr. Sakthi Swarrup J",
    desc: "Designing robust machine learning pipelines for non-stationary biosignals affected by fatigue and sensor drift. Exploring teacher-student and adaptive learning frameworks."
  },
  {
    title: "High-Resolution Air Quality Estimation",
    publisher: "Honors Research Project",
    status: "Ongoing",
    doi: "Under Dr. Mainak Thakur",
    desc: "Developing distributed air-quality monitoring using LoRaWAN-enabled sensor networks. Applying spatial interpolation techniques with uncertainty-aware estimation."
  }
];

const ResearchScroll = () => {
  const containerRef = useRef(null);
  const scrollWrapperRef = useRef(null);

  useGSAP(() => {
    const sections = gsap.utils.toArray('.research-card');

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
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="bg-black/40 backdrop-blur-sm text-white overflow-hidden h-screen flex flex-col justify-center border-t border-gray-900 border-b relative z-20">
      <div className="pl-6 md:pl-20 mb-12">
        <h2 className="text-5xl font-bold tracking-tight text-white">
          Research & Publications
        </h2>
        <p className="text-gray-400 mt-4 text-xl">Advancing the theoretical foundations of AI.</p>
      </div>

      <div ref={scrollWrapperRef} className="flex w-[400vw] md:w-[200vw] px-6 md:px-20 gap-8">
        {researchPapers.map((paper, index) => (
          <div
            key={index}
            className="research-card w-screen md:w-[40vw] flex-shrink-0 bg-gray-950 border border-gray-800 rounded-3xl p-10 flex flex-col justify-between hover:border-blue-500 transition-colors duration-500"
          >
            <div>
              <div className="flex justify-between items-start mb-6">
                <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full ${paper.status === 'Published' ? 'bg-blue-900 text-blue-300' : 'bg-purple-900 text-purple-300'}`}>
                  {paper.status}
                </span>
                <span className="text-gray-500 text-sm">{paper.publisher}</span>
              </div>
              <h3 className="text-3xl font-semibold mb-4 leading-snug">{paper.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {paper.desc}
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-800">
              <span className="text-sm font-mono text-gray-500">
                Info: {paper.doi.startsWith('http') ? (
                  <a href={paper.doi} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 hover:underline transition-colors">{paper.doi}</a>
                ) : (
                  paper.doi
                )}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResearchScroll;