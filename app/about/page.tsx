import Link from 'next/link';

export const metadata = {
  title: 'About',
  description: 'About me.',
};

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-20">
      <Link href="/" className="text-muted hover:text-foreground mb-8 inline-block transition-colors">
        ← Home
      </Link>

      <h1 className="text-4xl sm:text-5xl font-semibold mb-8 leading-tight">About</h1>

      <div className="space-y-5 text-base leading-relaxed">
        <p>
          More about me coming soon.
        </p>
      </div>
    </div>
  );
}
