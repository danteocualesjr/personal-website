import Link from 'next/link';

export const metadata = {
  title: 'About',
  description: 'About me.',
};

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <Link href="/" className="text-muted hover:text-foreground mb-8 inline-block">
        ← Back
      </Link>
      
      <h1 className="text-3xl font-semibold mb-12">About</h1>

      <div className="space-y-4 text-[15px] leading-relaxed">
        <p>
          More about me coming soon.
        </p>
      </div>
    </div>
  );
}
