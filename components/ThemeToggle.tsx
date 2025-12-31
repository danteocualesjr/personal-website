'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const nextIsDark = stored ? stored === 'dark' : prefersDark;
    document.documentElement.classList.toggle('dark', nextIsDark);
    setIsDark(nextIsDark);
  }, []);

  function toggle() {
    const next = !isDark;
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
    setIsDark(next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className="rounded-full border border-rule bg-paper px-3 py-1 text-xs tracking-wide text-muted hover:text-ink hover:border-ink/40 transition-colors"
      aria-label="Toggle theme"
    >
      {isDark ? 'LIGHT' : 'DARK'}
    </button>
  );
}


