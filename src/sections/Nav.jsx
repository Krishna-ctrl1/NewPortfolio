import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { profile } from '../data';
import { ease, sections } from './constants';


export default function Nav({ onPalette }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => (document.body.style.overflow = '');
  }, [open]);

  const isMac = typeof navigator !== 'undefined' && /Mac|iPhone|iPad/.test(navigator.platform);

  return (
    <>
      <motion.div style={{ scaleX: progress }} className="fixed top-0 left-0 right-0 z-[70] h-[2px] origin-left bg-signal" />

      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? 'py-3' : 'py-5'}`}>
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 md:px-10">
          <div
            className={`flex items-center justify-between rounded-full transition-all duration-500 ${
              scrolled ? 'border border-line bg-ink/75 backdrop-blur-xl pl-5 pr-2 py-2' : 'px-0 py-1 border border-transparent'
            }`}
          >
            <a href="#top" className="flex items-center gap-2.5 font-semibold tracking-tight" onClick={() => setOpen(false)}>
              <span className="grid h-8 w-8 place-items-center rounded-full bg-paper text-ink text-sm font-bold">K</span>
              <span className="hidden sm:inline">{profile.name}</span>
            </a>

            <nav className="hidden lg:flex items-center gap-1">
              {sections.slice(0, -1).map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className={`relative rounded-full px-4 py-2 text-sm transition ${active === s.id ? 'text-paper' : 'text-mute hover:text-paper'}`}
                >
                  {active === s.id && (
                    <motion.span layoutId="navpill" className="absolute inset-0 rounded-full bg-ink-3" transition={{ duration: 0.4, ease }} />
                  )}
                  <span className="relative">{s.name}</span>
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <button
                onClick={onPalette}
                className="hidden md:inline-flex items-center gap-2 rounded-full border border-line px-3 py-2 font-mono text-[11px] text-mute hover:text-paper hover:border-line-2 transition"
                aria-label="Open quick menu"
              >
                <kbd>{isMac ? '⌘' : 'Ctrl'}</kbd>
                <kbd>K</kbd>
              </button>
              <a href="#contact" className="hidden sm:inline-flex rounded-full bg-paper text-ink px-5 py-2.5 text-sm font-semibold hover:bg-signal transition">
                Let’s talk
              </a>
              <button
                onClick={() => setOpen((v) => !v)}
                className="lg:hidden grid h-10 w-10 place-items-center rounded-full border border-line"
                aria-label={open ? 'Close menu' : 'Open menu'}
                aria-expanded={open}
              >
                <span className="relative block h-3 w-4">
                  <span className={`absolute left-0 h-[1.5px] w-full bg-paper transition ${open ? 'top-1.5 rotate-45' : 'top-0'}`} />
                  <span className={`absolute left-0 h-[1.5px] w-full bg-paper transition ${open ? 'top-1.5 -rotate-45' : 'top-3'}`} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.6, ease }}
            className="fixed inset-0 z-40 bg-ink-2 lg:hidden flex flex-col justify-end px-6 pb-12 pt-28"
          >
            <nav className="flex flex-col">
              {sections.map((s, i) => (
                <motion.a
                  key={s.id}
                  href={`#${s.id}`}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease, delay: 0.15 + i * 0.05 }}
                  className="flex items-baseline justify-between border-b border-line py-4 text-4xl font-semibold tracking-[-0.04em]"
                >
                  {s.name}
                  <span className="font-mono text-xs text-dim">{String(i + 1).padStart(2, '0')}</span>
                </motion.a>
              ))}
            </nav>
            <a href={`mailto:${profile.email}`} className="mt-8 font-serif italic text-2xl text-signal">
              {profile.email}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
