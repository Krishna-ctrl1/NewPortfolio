import { profile, stats, education } from '../data';
import { Reveal, SectionHead, SpotCard, CountUp } from './ui';

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-[1400px] px-4 sm:px-6 md:px-10 py-28 md:py-40">
      <SectionHead
        index="01"
        label="About"
        title="Research mind,"
        accent="production hands."
        aside={profile.summary}
      />

      <div className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.06} className="bg-ink">
            <SpotCard className="h-full p-7 md:p-9">
              <div className="text-[clamp(3rem,6vw,4.75rem)] font-semibold tracking-[-0.05em] leading-none">
                <CountUp to={s.value} decimals={s.decimals || 0} suffix={s.suffix} />
              </div>
              <div className="mt-5 text-paper font-medium">{s.label}</div>
              <div className="mt-1 font-mono text-xs text-dim">{s.sub}</div>
            </SpotCard>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1} className="mt-6">
        <SpotCard className="rounded-3xl border border-line bg-ink-2 p-7 md:p-10 grid gap-8 md:grid-cols-12 md:items-center">
          <div className="md:col-span-7">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-signal mb-3">Education · {education.date}</div>
            <h3 className="text-2xl md:text-4xl font-semibold tracking-[-0.03em] leading-tight">{education.school}</h3>
            <p className="mt-3 text-mute text-lg">{education.degree} — <span className="font-serif italic text-paper">{education.spec}</span></p>
          </div>
          <dl className="md:col-span-5 grid grid-cols-2 gap-6 md:border-l md:border-line md:pl-10">
            <div>
              <dt className="font-mono text-xs uppercase tracking-[0.18em] text-dim">CGPA</dt>
              <dd className="mt-2 text-3xl font-semibold text-signal">{education.cgpa}</dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-[0.18em] text-dim">Graduating</dt>
              <dd className="mt-2 text-3xl font-semibold">2027</dd>
            </div>
            <div className="col-span-2">
              <dt className="font-mono text-xs uppercase tracking-[0.18em] text-dim">Campus</dt>
              <dd className="mt-2 text-paper">{education.place}</dd>
            </div>
          </dl>
        </SpotCard>
      </Reveal>
    </section>
  );
}
