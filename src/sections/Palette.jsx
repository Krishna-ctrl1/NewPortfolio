import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { profile, projects } from '../data';
import { ease, sections } from './constants';

// ⌘K / Ctrl+K quick menu: jump to a section, open a project, copy the email.
export default function Palette({ open, setOpen }) {
  const [q, setQ] = useState('');
  const [i, setI] = useState(0);
  const input = useRef(null);

  const items = useMemo(
    () => [
      ...sections.map((s) => ({ group: 'Go to', label: s.name, run: () => document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth' }) })),
      ...projects.filter((p) => p.link).map((p) => ({ group: 'Projects', label: p.title, hint: p.kicker, run: () => window.open(p.link, '_blank', 'noopener') })),
      { group: 'Actions', label: 'Copy email', hint: profile.email, run: () => navigator.clipboard?.writeText(profile.email) },
      { group: 'Actions', label: 'Email me', hint: profile.email, run: () => (window.location.href = `mailto:${profile.email}`) },
      { group: 'Actions', label: 'GitHub profile', run: () => window.open(profile.github, '_blank', 'noopener') },
      { group: 'Actions', label: 'LinkedIn', run: () => window.open(profile.linkedin, '_blank', 'noopener') },
    ],
    [],
  );

  const shown = items.filter((it) => (it.label + ' ' + (it.hint || '') + ' ' + it.group).toLowerCase().includes(q.toLowerCase()));

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === 'Escape') {
        setOpen(false);
        setQ('');
        setI(0);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [setOpen]);

  useEffect(() => {
    if (!open) return;
    const t = setTimeout(() => input.current?.focus(), 30);
    return () => clearTimeout(t);
  }, [open]);

  // Clear the search whenever the menu closes, so it always opens fresh.
  const close = () => {
    setOpen(false);
    setQ('');
    setI(0);
  };

  const choose = (it) => {
    close();
    setTimeout(() => it.run(), 60);
  };

  const onKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setI((v) => Math.min(shown.length - 1, v + 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setI((v) => Math.max(0, v - 1));
    } else if (e.key === 'Enter' && shown[i]) {
      choose(shown[i]);
    }
  };

  let lastGroup = '';

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-start justify-center bg-ink/70 backdrop-blur-sm px-4 pt-[14vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={close}
        >
          <motion.div
            role="dialog"
            aria-label="Quick menu"
            initial={{ opacity: 0, y: -16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.3, ease }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-xl overflow-hidden rounded-2xl border border-line-2 bg-ink-2 shadow-2xl shadow-black/60"
          >
            <div className="flex items-center gap-3 border-b border-line px-5">
              <span className="text-signal">⌕</span>
              <input
                ref={input}
                value={q}
                onChange={(e) => {
                  setQ(e.target.value);
                  setI(0);
                }}
                onKeyDown={onKeyDown}
                placeholder="Jump to a section, project or action…"
                className="w-full bg-transparent py-4 text-paper placeholder:text-dim outline-none"
              />
              <kbd className="font-mono text-[10px] text-dim border border-line rounded px-1.5 py-0.5">ESC</kbd>
            </div>
            <ul className="max-h-[52vh] overflow-y-auto p-2">
              {shown.length === 0 && <li className="px-4 py-6 text-center text-mute">Nothing matches “{q}”.</li>}
              {shown.map((it, idx) => {
                const head = it.group !== lastGroup;
                lastGroup = it.group;
                return (
                  <li key={it.group + it.label}>
                    {head && <div className="px-3 pt-3 pb-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-dim">{it.group}</div>}
                    <button
                      onMouseEnter={() => setI(idx)}
                      onClick={() => choose(it)}
                      className={`flex w-full items-center justify-between gap-4 rounded-xl px-3 py-2.5 text-left transition ${idx === i ? 'bg-ink-3 text-paper' : 'text-mute'}`}
                    >
                      <span>{it.label}</span>
                      {it.hint && <span className="truncate text-xs text-dim">{it.hint}</span>}
                    </button>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
