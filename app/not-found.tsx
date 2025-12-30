import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-semibold mb-4">404</h1>
      <p className="text-muted mb-8">Page not found.</p>
      <Link href="/" className="hover:text-foreground">
        ← Back home
      </Link>
    </div>
  );
}
