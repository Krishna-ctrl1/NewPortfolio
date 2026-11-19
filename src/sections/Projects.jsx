import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { projects, projectFilters } from '../data';
import { ease } from './constants';
import { SectionHead, SpotCard, Arrow, GitHubIcon } from './ui';

function ProjectCard({ p, big }) {
  return (
    <SpotCard className={`group h-full rounded-3xl border border-line bg-ink-2 p-7 md:p-9 flex flex-col ${big ? 'md:min-h-[440px]' : ''}`}>
      <div className="flex items-start justify-between gap-4">
        <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-dim">
          {p.category} · {p.year}
        </div>
        <div className="flex gap-2">
          {p.demo && (
            <a
              href={p.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-full border border-line-2 px-3 py-1 text-xs font-medium text-paper hover:border-signal hover:text-signal transition"
            >
              Live <Arrow className="w-3 h-3" />
            </a>
          )}
          {p.link && (
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${p.title} on GitHub`}
              className="grid h-8 w-8 place-items-center rounded-full border border-line-2 text-mute hover:text-ink hover:bg-paper transition"
            >
              <GitHubIcon className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      <h3 className={`mt-8 font-semibold tracking-[-0.04em] leading-[0.95] ${big ? 'text-4xl md:text-6xl' : 'text-3xl md:text-4xl'}`}>
        {p.title}
      </h3>
      <p className="mt-3 font-serif italic text-xl text-signal">{p.kicker}</p>
      <p className="mt-5 text-mute leading-relaxed">{p.description}</p>

      {p.metrics && (
        <div className="mt-7 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-line pt-6">
          {p.metrics.map((m) => (
            <div key={m.v}>
              <div className="text-xl md:text-2xl font-semibold tracking-tight text-paper">{m.k}</div>
              <div className="mt-1 text-xs text-dim">{m.v}</div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-auto pt-7 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <span key={t} className="rounded-full bg-ink-3 px-3 py-1 font-mono text-[11px] text-mute group-hover:text-paper transition">
            {t}
          </span>
        ))}
      </div>
    </SpotCard>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState('All');
  // Order that tiles a 6-column bento with no gaps: big, big | big, big | small x3 | big, big | small x3
  const order = ['OrbitAI', 'FinAssist', 'AML Investigation Swarm', 'Myoelectric Distillation', 'Autonomous Research Agent', 'Customer Segmentation Engine', 'HN Trend & Sentiment', 'Fraud as a Collective Anomaly', 'Robust Canvas Bot', 'DRAKZ', 'Judas Protocol', 'ERP Bot'];
  const sorted = [...projects].sort((a, b) => (order.indexOf(a.title) + 1 || 99) - (order.indexOf(b.title) + 1 || 99));
  const list = filter === 'All' ? sorted : sorted.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative border-t border-line">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 md:px-10 py-28 md:py-40">
        <SectionHead
          index="03"
          label="Selected work"
          title="Things I’ve"
          accent="built."
          aside={`${projects.length} projects across LLMs, agents, ML research, robotics and full-stack apps. Filter to dig in.`}
        />

        <div className="mb-10 -mx-4 px-4 overflow-x-auto">
          <div role="tablist" aria-label="Filter projects" className="flex w-max gap-2">
            {projectFilters.map((f) => {
              const n = f === 'All' ? projects.length : projects.filter((p) => p.category === f).length;
              const on = f === filter;
              return (
                <button
                  key={f}
                  role="tab"
                  aria-selected={on}
                  onClick={() => setFilter(f)}
                  className={`relative rounded-full px-5 py-2.5 text-sm font-medium transition ${on ? 'text-ink' : 'text-mute hover:text-paper border border-line'}`}
                >
                  {on && <motion.span layoutId="pill" className="absolute inset-0 rounded-full bg-paper" transition={{ duration: 0.45, ease }} />}
                  <span className="relative">
                    {f} <span className={`ml-1 font-mono text-[11px] ${on ? 'text-ink/60' : 'text-dim'}`}>{n}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <motion.div layout className="grid gap-5 md:grid-cols-2 lg:grid-cols-6">
          <AnimatePresence mode="popLayout">
            {list.map((p, i) => {
              // Bento: featured cards take more room when showing everything.
              const big = filter === 'All' && p.featured;
              const span = big ? 'lg:col-span-3' : 'lg:col-span-2';
              return (
                <motion.div
                  key={p.title}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.5, ease, delay: Math.min(i, 6) * 0.03 }}
                  className={span}
                >
                  <ProjectCard p={p} big={big} />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
