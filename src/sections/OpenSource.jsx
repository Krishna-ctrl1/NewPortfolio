import { useEffect, useState } from 'react';
import { profile } from '../data';
import { Reveal, SectionHead, Arrow } from './ui';

// Pulls the latest public repos straight from GitHub, so this list stays
// current without editing the site. Falls back quietly if the API is down.

const langColor = {
  Python: '#3572A5',
  JavaScript: '#f1e05a',
  'Jupyter Notebook': '#DA5B0B',
  HTML: '#e34c26',
  GDScript: '#355570',
  TypeScript: '#3178c6',
};

function ago(iso) {
  const d = (Date.now() - new Date(iso).getTime()) / 86400000;
  if (d < 1) return 'today';
  if (d < 30) return `${Math.round(d)}d ago`;
  if (d < 365) return `${Math.round(d / 30)}mo ago`;
  return `${Math.round(d / 365)}y ago`;
}

export default function OpenSource() {
  const [repos, setRepos] = useState(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const ctrl = new AbortController();
    fetch(`https://api.github.com/users/${profile.githubUser}/repos?per_page=100&sort=pushed`, { signal: ctrl.signal })
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((data) => {
        const list = data
          .filter((r) => !r.fork && r.name !== profile.githubUser)
          .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at))
          .slice(0, 8);
        setRepos(list);
      })
      .catch((e) => {
        if (e?.name !== 'AbortError') setFailed(true);
      });
    return () => ctrl.abort();
  }, []);

  return (
    <section id="github" className="relative border-t border-line">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 md:px-10 py-28 md:py-40">
        <SectionHead
          index="07"
          label="Open source"
          title="Fresh from"
          accent="GitHub."
          aside={
            <>
              Pulled live from{' '}
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-paper underline decoration-signal underline-offset-4">
                @{profile.githubUser}
              </a>
              , most recently pushed first.
            </>
          }
        />

        {failed && (
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-paper underline decoration-signal underline-offset-4">
            See every repository on GitHub <Arrow />
          </a>
        )}

        {!failed && (
          <div className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {(repos || Array.from({ length: 8 })).map((r, i) =>
              r ? (
                <Reveal key={r.id} delay={(i % 4) * 0.04} className="bg-ink">
                  <a
                    href={r.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-full min-h-[190px] flex-col p-6 hover:bg-ink-2 transition"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-semibold tracking-tight break-words group-hover:text-signal transition">
                        {r.name.replace(/^-+|-+$/g, '').replace(/[-_]+/g, ' ')}
                      </h3>
                      <Arrow className="w-4 h-4 flex-shrink-0 text-dim group-hover:text-signal group-hover:rotate-45 transition" />
                    </div>
                    <p className="mt-3 text-sm text-mute line-clamp-3">{r.description || 'No description yet.'}</p>
                    <div className="mt-auto pt-5 flex items-center gap-4 font-mono text-[11px] text-dim">
                      {r.language && (
                        <span className="flex items-center gap-1.5">
                          <span className="h-2 w-2 rounded-full" style={{ background: langColor[r.language] || '#999' }} />
                          {r.language}
                        </span>
                      )}
                      {r.stargazers_count > 0 && <span>★ {r.stargazers_count}</span>}
                      <span className="ml-auto">{ago(r.pushed_at)}</span>
                    </div>
                  </a>
                </Reveal>
              ) : (
                <div key={i} className="bg-ink min-h-[190px] p-6">
                  <div className="h-4 w-2/3 rounded bg-ink-3 animate-pulse" />
                  <div className="mt-4 h-3 w-full rounded bg-ink-3 animate-pulse" />
                  <div className="mt-2 h-3 w-4/5 rounded bg-ink-3 animate-pulse" />
                </div>
              ),
            )}
          </div>
        )}
      </div>
    </section>
  );
}
