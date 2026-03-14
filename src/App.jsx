import React from 'react';
import Navbar from './components/Navbar';
import HeroBackground from './components/HeroBackground';
import HeroSection from './components/HeroSection';
import Education from './components/Education';
import ExperienceTimeline from './components/ExperienceTimeline';
import ProjectsSection from './components/ProjectsSection';
import ResearchScroll from './components/ResearchScroll';
import SkillsGrid from './components/SkillsGrid';
import LeadershipSection from './components/LeadershipSection';
import ContactFooter from './components/ContactFooter';

function App() {
  return (
    <div className="relative w-full bg-black font-sans text-white">
      <Navbar />

      {/* 3D Canvas Background fixed behind everything */}
      <div className="fixed top-0 left-0 w-full h-screen z-0 pointer-events-none">
        <HeroBackground />
      </div>

      {/* Sections - Ensure positive z-index and relative positioning so they sit above the fixed background */}
      <div className="relative z-10 w-full overflow-hidden">
        <HeroSection />

        <Education />

        <div id="experience">
          <ExperienceTimeline />
        </div>

        <ProjectsSection />

        <div id="research">
          <ResearchScroll />
        </div>

        <div id="skills">
          <SkillsGrid />
        </div>

        <LeadershipSection />

        <ContactFooter />
      </div>
    </div>
  );
}

export default App;