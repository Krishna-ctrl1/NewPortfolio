import { useState } from 'react';
import Nav from './sections/Nav';
import Palette from './sections/Palette';
import Hero from './sections/Hero';
import About from './sections/About';
import Work from './sections/Work';
import Projects from './sections/Projects';
import Research from './sections/Research';
import Stack from './sections/Stack';
import OpenSource from './sections/OpenSource';
import Contact from './sections/Contact';

// The previous design's components are still in src/components for reference.

export default function App() {
  const [palette, setPalette] = useState(false);
  return (
    <div className="relative">
      <div className="grain" aria-hidden="true" />
      <Nav onPalette={() => setPalette(true)} />
      <Palette open={palette} setOpen={setPalette} />
      <main>
        <Hero />
        <About />
        <Work />
        <Projects />
        <Research />
        <Stack />
        <OpenSource />
      </main>
      <Contact />
    </div>
  );
}
