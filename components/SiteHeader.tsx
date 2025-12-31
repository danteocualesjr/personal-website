import Link from 'next/link';
import ThemeToggle from '@/components/ThemeToggle';

const links = [
  { href: '/blog', label: 'WRITING' },
  { href: '/fiction', label: 'FICTION' },
  { href: '/books', label: 'BOOKS' },
  { href: '/portfolio', label: 'WORK' },
  { href: '/about', label: 'ABOUT' },
] as const;

export default function SiteHeader() {
  return (
    <header className="border-b border-rule">
      <div className="mx-auto max-w-2xl px-6 py-6">
        <div className="flex items-start justify-between gap-6">
          <div>
            <Link
              href="/"
              className="block font-serif text-2xl leading-tight tracking-tight text-ink hover:opacity-90"
            >
              Dante O. Cuales, Jr.
            </Link>
            <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">
              Songs · Stories · Software
            </p>
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
          </div>
        </div>

        <nav className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs tracking-[0.18em] text-muted">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="hover:text-ink transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}


