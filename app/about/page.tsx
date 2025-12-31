import Link from 'next/link';

export const metadata = {
  title: 'About',
  description: 'About me.',
};

export default function AboutPage() {
  return (
    <div>
      <Link href="/" className="text-muted hover:text-ink mb-8 inline-block text-xs tracking-[0.18em] uppercase">
        ← Home
      </Link>

      <h1 className="font-serif text-4xl tracking-tight mb-3">About</h1>
      <p className="text-muted text-sm mb-8">A few lines, no mythology.</p>
      <div className="border-t border-rule mb-10" />

      <div className="space-y-4 text-[15px] leading-relaxed">
        <p>
          More about me coming soon.
        </p>
      </div>
    </div>
  );
}
