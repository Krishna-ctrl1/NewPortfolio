import { useState } from 'react';
import { research } from '../data';
import { Reveal, SectionHead, Arrow } from './ui';

function CopyDoi({ doi }) {
  const [done, setDone] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(`https://doi.org/${doi}`);
      setDone(true);
      setTimeout(() => setDone(false), 1600);
    } catch {
      /* clipboard blocked; the link next to it still works */
    }
  };
  return (
    <button onClick={copy} className="font-mono text-[11px] uppercase tracking-[0.16em] text-dim hover:text-paper transition">
      {done ? 'Copied ✓' : 'Copy DOI'}
    </button>
  );
}

export default function Research() {
  return (
    <section id="research" className="relative border-t border-line bg-ink-2/50">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 md:px-10 py-28 md:py-40">
        <SectionHead
          index="04"
          label="Research"
          title="Published"
          accent="research."
          aside="Three peer-reviewed papers across IEEE and Springer, written with researchers from IIT Mandi, FinThrive (USA) and Sister Nivedita University."
        />

        <ol className="border-t border-line">
          {research.map((r, i) => (
            <Reveal as="li" key={r.title} delay={i * 0.05} className="group border-b border-line">
              <div className="grid gap-4 py-9 md:py-12 md:grid-cols-12 md:gap-8">
                <div className="md:col-span-2 flex md:flex-col gap-3 md:gap-2 items-center md:items-start">
                  <span className="font-mono text-sm text-signal">{String(i + 1).padStart(2, '0')}</span>
                  <span className="font-mono text-xs text-dim">{r.year}</span>
                  <span
                    className={`rounded-full px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] ${
                      r.status === 'Published' ? 'bg-emerald-400/10 text-emerald-300' : 'bg-signal/10 text-signal'
                    }`}
                  >
                    {r.status}
                  </span>
                </div>
                <div className="md:col-span-7">
                  <h3 className="text-2xl md:text-[2.1rem] font-semibold leading-[1.1] tracking-[-0.03em] group-hover:text-signal transition-colors">
                    {r.title}
                  </h3>
                  <p className="mt-2 font-serif italic text-xl text-mute">{r.venue}</p>
                  <p className="mt-4 max-w-2xl text-mute leading-relaxed">{r.abstract}</p>
                </div>
                <div className="md:col-span-3 flex md:flex-col md:items-end gap-4 md:gap-3 md:pt-2">
                  {r.url ? (
                    <>
                      <a
                        href={r.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-line-2 px-4 py-2 text-sm font-medium hover:bg-paper hover:text-ink transition"
                      >
                        Read paper <Arrow className="w-3.5 h-3.5" />
                      </a>
                      <span className="font-mono text-[11px] text-dim break-all md:text-right">{r.doi}</span>
                      <CopyDoi doi={r.doi} />
                    </>
                  ) : (
                    <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-dim">Preprint soon</span>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
