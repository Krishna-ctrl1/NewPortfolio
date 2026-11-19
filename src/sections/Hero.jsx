import { lazy, Suspense, useEffect, useState } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { profile, ticker } from '../data';
import { ease } from './constants';
import { Arrow } from './ui';

const Globe = lazy(() => import('./Globe'));

const fmtIST = () =>
  new Intl.DateTimeFormat('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false, timeZone: 'Asia/Kolkata' }).format(new Date());

function Clock() {
  const [t, setT] = useState(fmtIST);
  useEffect(() => {
    const fmt = fmtIST;
    const id = setInterval(() => setT(fmt()), 1000);
    return () => clearInterval(id);
  }, []);
  return <span className="tabular-nums">{t} IST</span>;
}

function Line({ children, delay, className = '' }) {
  const reduce = useReducedMotion();
  return (
    <span className="block overflow-hidden pb-[0.08em]">
      <motion.span
        className={`block ${className}`}
        initial={reduce ? false : { y: '110%' }}
        animate={{ y: 0 }}
        transition={{ duration: 1.1, ease, delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const { scrollY } = useScroll();
  const globeY = useTransform(scrollY, [0, 800], [0, 160]);
  const globeOpacity = useTransform(scrollY, [0, 700], [1, 0.25]);

  return (
    <section id="top" className="relative min-h-[100svh] flex flex-col overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute -top-40 right-[-10%] h-[60vw] w-[60vw] max-h-[900px] max-w-[900px] rounded-full bg-signal/10 blur-[140px] pointer-events-none" />

      {/* 3D planet */}
      <motion.div
        style={{ y: globeY, opacity: globeOpacity }}
        className="absolute inset-0 md:left-[38%] md:inset-y-0 md:right-[-6%] top-[8%] md:top-0 pointer-events-auto"
        aria-hidden="true"
      >
        <div className="h-full w-full opacity-45 md:opacity-100">
          <Suspense fallback={null}>
            <Globe />
          </Suspense>
        </div>
      </motion.div>

      <div className="relative z-10 flex-1 flex flex-col justify-end mx-auto w-full max-w-[1400px] px-4 sm:px-6 md:px-10 pt-32 pb-10 md:pb-16 pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8 inline-flex max-w-full w-max items-center gap-3 rounded-full border border-line-2 bg-ink/60 backdrop-blur px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-mute pointer-events-auto"
        >
          <span className="pulse-dot h-2 w-2 rounded-full bg-emerald-400" />
          <span className="text-paper">Now</span>
          <span className="h-3 w-px bg-line-2" />
          <span className="truncate">{profile.now}</span>
        </motion.div>

        <h1 className="font-semibold tracking-[-0.055em] leading-[0.86] text-[clamp(3.6rem,15vw,13.5rem)]">
          <Line delay={0.25}>{profile.first}</Line>
          <Line delay={0.38} className="flex items-baseline gap-[0.2em]">
            <span>{profile.last}</span>
            <span className="font-serif italic font-normal tracking-[-0.02em] text-signal text-[0.42em]">builds AI</span>
          </Line>
        </h1>

        <div className="mt-10 grid gap-8 md:grid-cols-12 md:items-end">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.8 }}
            className="md:col-span-6 lg:col-span-5 text-lg md:text-xl leading-relaxed text-mute"
          >
            <span className="text-paper">{profile.role}.</span> {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.95 }}
            className="md:col-span-6 lg:col-span-7 flex flex-wrap gap-3 md:justify-end pointer-events-auto"
          >
            <a href="#work" className="group inline-flex items-center gap-2 rounded-full bg-paper text-ink px-6 py-3.5 font-semibold transition hover:bg-signal">
              See my work
              <Arrow className="w-4 h-4 transition group-hover:rotate-45" />
            </a>
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 rounded-full border border-line-2 px-6 py-3.5 font-semibold text-paper transition hover:border-paper">
              Say hello
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-5 font-mono text-[11px] uppercase tracking-[0.16em] text-dim"
        >
          <span>{profile.location}</span>
          <span className="hidden sm:inline"><Clock /></span>
          <span className="hidden md:inline">Scroll ↓</span>
        </motion.div>
      </div>

      {/* Ticker */}
      <div className="relative z-10 border-y border-line bg-ink/70 backdrop-blur py-4">
        <div className="marquee" style={{ '--dur': '55s' }}>
          {[0, 1].map((k) => (
            <div key={k} className="marquee-track" aria-hidden={k === 1}>
              {ticker.map((t) => (
                <span key={t} className="flex items-center gap-12 whitespace-nowrap text-sm md:text-base text-mute">
                  {t}
                  <span className="text-signal">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
