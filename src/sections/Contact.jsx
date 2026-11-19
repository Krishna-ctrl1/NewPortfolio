import { useState } from 'react';
import { profile } from '../data';
import { Reveal, Arrow } from './ui';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const links = [
    { name: 'GitHub', href: profile.github },
    { name: 'LinkedIn', href: profile.linkedin },
    { name: 'Hugging Face', href: profile.huggingface },
  ];

  return (
    <footer id="contact" className="relative border-t border-line overflow-hidden">
      <div className="absolute bottom-[-30%] left-1/2 -translate-x-1/2 h-[70vw] w-[70vw] max-w-[1100px] max-h-[1100px] rounded-full bg-signal/15 blur-[160px] pointer-events-none" />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 md:px-10 pt-28 md:pt-40 pb-10">
        <Reveal>
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-mute mb-8">
            <span className="text-signal">08</span>
            <span className="h-px w-10 bg-line-2" />
            <span>Contact</span>
          </div>
          <h2 className="text-[clamp(3.4rem,13vw,12rem)] font-semibold tracking-[-0.06em] leading-[0.85]">
            Let’s build
            <br />
            <span className="font-serif italic font-normal tracking-[-0.03em] text-signal">something real.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-14 grid gap-10 md:grid-cols-12 md:items-end">
          <p className="md:col-span-5 text-lg text-mute leading-relaxed">
            Open to full-time AI/ML roles from 2027, research collaborations and ambitious side projects. The fastest way to reach me is email.
          </p>
          <div className="md:col-span-7 flex flex-col sm:flex-row gap-3 md:justify-end">
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-paper text-ink px-7 py-4 text-lg font-semibold hover:bg-signal transition"
            >
              {profile.email}
              <Arrow className="w-5 h-5 transition group-hover:rotate-45" />
            </a>
            <button
              onClick={copy}
              className="inline-flex items-center justify-center rounded-full border border-line-2 px-6 py-4 font-medium hover:border-paper transition"
            >
              {copied ? 'Copied ✓' : 'Copy email'}
            </button>
          </div>
        </Reveal>

        <div className="mt-24 flex flex-col-reverse gap-6 border-t border-line pt-8 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-xs text-dim">
            © {new Date().getFullYear()} {profile.name}. Designed and built by me.
          </p>
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {links.map((l) => (
              <a key={l.name} href={l.href} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-1.5 text-mute hover:text-paper transition">
                {l.name}
                <Arrow className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 group-hover:rotate-45 transition" />
              </a>
            ))}
            <a href="#top" className="text-mute hover:text-paper transition">Back to top ↑</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
