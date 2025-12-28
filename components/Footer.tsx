import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-20">
      {/* Gradient divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-card-border to-transparent" />
      
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="font-display text-2xl font-semibold">
              Portfolio
            </Link>
            <p className="mt-4 text-muted max-w-sm leading-relaxed">
              Exploring ideas through writing, building meaningful projects, and sharing discoveries along the way.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-muted mb-4">
              Navigate
            </h3>
            <ul className="space-y-3">
              {['Blog', 'Portfolio', 'Books', 'About'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-foreground/70 hover:text-accent transition-colors link-underline"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-muted mb-4">
              Connect
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'GitHub', href: '#' },
                { label: 'Twitter', href: '#' },
                { label: 'LinkedIn', href: '#' },
                { label: 'Email', href: 'mailto:hello@example.com' },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-foreground/70 hover:text-accent transition-colors link-underline"
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-card-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted">
            &copy; {currentYear} All rights reserved.
          </p>
          <p className="text-sm text-muted">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
