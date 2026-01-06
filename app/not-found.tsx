import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-20">
      <h1 className="text-4xl sm:text-5xl font-semibold mb-4 leading-tight">404</h1>
      <p className="text-base text-muted mb-8">Page not found.</p>
      <Link href="/" className="text-muted hover:text-foreground transition-colors">
        ← Home
      </Link>
    </div>
  );
}
