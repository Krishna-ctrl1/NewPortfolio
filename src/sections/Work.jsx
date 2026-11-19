import { experience } from '../data';
import { Reveal, SectionHead, SpotCard } from './ui';

export default function Work() {
  return (
    <section id="work" className="relative border-t border-line">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 md:px-10 py-28 md:py-40">
        <SectionHead
          index="02"
          label="Experience"
          title="Where I"
          accent="ship."
          aside="Right now I build the AI behind Rayi Fintech’s investing assistant: voice, chat, portfolio analysis and the data under it."
        />

        <div className="relative">
          {/* Timeline rail */}
          <div className="absolute left-[7px] md:left-[calc(25%+7px)] top-2 bottom-2 w-px bg-gradient-to-b from-signal via-line-2 to-transparent" />

          <div className="space-y-10 md:space-y-14">
            {experience.map((job, i) => (
              <Reveal key={job.title + job.date} delay={i * 0.05}>
                <div className="grid gap-4 md:grid-cols-4 md:gap-10">
                  {/* Left meta column (desktop) */}
                  <div className="hidden md:block pt-8 text-right">
                    <div className="font-mono text-xs uppercase tracking-[0.18em] text-mute">{job.date}</div>
                    <div className="mt-2 font-mono text-xs text-dim">{job.place}</div>
                  </div>

                  <div className="relative md:col-span-3 pl-8 md:pl-10">
                    <span
                      className={`absolute left-0 md:-left-[1px] top-9 h-[15px] w-[15px] rounded-full border-2 border-ink ${
                        job.current ? 'bg-signal pulse-dot' : 'bg-line-2'
                      }`}
                    />
                    <SpotCard className={`rounded-3xl border p-7 md:p-10 ${job.current ? 'border-signal/40 bg-ink-2' : 'border-line bg-ink'}`}>
                      <div className="md:hidden mb-4 font-mono text-[11px] uppercase tracking-[0.16em] text-mute">
                        {job.date} · {job.place}
                      </div>
                      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                        <h3 className="text-2xl md:text-4xl font-semibold tracking-[-0.03em]">{job.title}</h3>
                        <span className="font-serif italic text-xl md:text-2xl text-signal">@ {job.company}</span>
                        {job.current && (
                          <span className="rounded-full bg-signal/15 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-signal">Current</span>
                        )}
                      </div>
                      {job.summary && <p className="mt-4 text-lg text-paper/90">{job.summary}</p>}
                      <ul className="mt-6 space-y-3">
                        {job.bullets.map((b) => (
                          <li key={b} className="flex gap-3 text-mute leading-relaxed">
                            <span className="mt-[0.6em] h-1 w-3 flex-shrink-0 bg-signal/70" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-7 flex flex-wrap gap-2">
                        {job.stack.map((s) => (
                          <span key={s} className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-mute">
                            {s}
                          </span>
                        ))}
                      </div>
                    </SpotCard>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
