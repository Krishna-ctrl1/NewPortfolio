import { skills, leadership } from '../data';
import { Reveal, SectionHead, SpotCard } from './ui';

export default function Stack() {
  const all = skills.flatMap((s) => s.items);
  const half = Math.ceil(all.length / 2);
  const rows = [all.slice(0, half), all.slice(half)];

  return (
    <section id="stack" className="relative border-t border-line overflow-hidden">
      <div className="py-16 md:py-20 space-y-5">
        {rows.map((row, r) => (
          <div key={r} className={`marquee ${r ? 'marquee-reverse' : ''}`} style={{ '--dur': r ? '70s' : '60s' }}>
            {[0, 1].map((k) => (
              <div key={k} className="marquee-track" aria-hidden={k === 1}>
                {row.map((s) => (
                  <span
                    key={s}
                    className={`whitespace-nowrap text-[clamp(2rem,5vw,4rem)] font-semibold tracking-[-0.04em] ${r ? 'text-outline' : 'text-paper'}`}
                  >
                    {s}
                    <span className="mx-6 text-signal font-serif italic font-normal">/</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 md:px-10 pb-28 md:pb-40 pt-12">
        <SectionHead index="05" label="Toolkit" title="The" accent="stack." aside="What I reach for, from training a model to keeping it fast in production." />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((g, i) => (
            <Reveal key={g.group} delay={i * 0.05}>
              <SpotCard className="h-full rounded-3xl border border-line bg-ink-2 p-7">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold tracking-tight">{g.group}</h3>
                  <span className="font-mono text-xs text-dim">{String(g.items.length).padStart(2, '0')}</span>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <span key={s} className="rounded-full border border-line px-3 py-1.5 text-sm text-mute hover:text-paper hover:border-line-2 transition">
                      {s}
                    </span>
                  ))}
                </div>
              </SpotCard>
            </Reveal>
          ))}
        </div>

        <div id="leadership" className="mt-28 md:mt-36">
          <SectionHead index="06" label="Leadership" title="Leading" accent="rooms." />
          <div className="grid gap-5 md:grid-cols-2">
            {leadership.map((l, i) => (
              <Reveal key={l.org} delay={i * 0.08}>
                <SpotCard className="h-full rounded-3xl border border-line bg-ink p-8 md:p-10">
                  <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-signal">{l.date}</div>
                  <h3 className="mt-5 text-3xl md:text-4xl font-semibold tracking-[-0.03em]">{l.title}</h3>
                  <p className="mt-2 font-serif italic text-xl text-mute">{l.org}</p>
                  <ul className="mt-7 space-y-3">
                    {l.points.map((p) => (
                      <li key={p} className="flex gap-3 text-mute leading-relaxed">
                        <span className="mt-[0.6em] h-1 w-3 flex-shrink-0 bg-signal/70" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </SpotCard>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
