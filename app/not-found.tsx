import Link from 'next/link';

export default function NotFound() {
  return (
    <div>
      <h1 className="font-serif text-4xl tracking-tight mb-3">404</h1>
      <p className="text-muted mb-8">That door doesn’t open.</p>
      <Link href="/" className="text-muted hover:text-ink text-xs tracking-[0.18em] uppercase">
        ← Home
      </Link>
    </div>
  );
}
