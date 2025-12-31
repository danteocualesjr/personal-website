import Link from 'next/link';
import { getFiction } from '@/lib/fiction';

export const metadata = {
  title: 'Fiction',
  description: 'Creative writing.',
};

export default function FictionPage() {
  const fiction = getFiction();

  return (
    <div>
      <Link href="/" className="text-muted hover:text-ink mb-8 inline-block text-xs tracking-[0.18em] uppercase">
        ← Home
      </Link>

      <h1 className="font-serif text-4xl tracking-tight mb-3">Fiction</h1>
      <p className="text-muted text-sm mb-8">Small stories and longer shadows.</p>
      <div className="border-t border-rule mb-10" />

      {fiction.length === 0 ? (
        <p className="text-muted">No works yet.</p>
      ) : (
        <div className="space-y-6">
          {fiction.map((item) => (
            <div key={item.id}>
              <h2 className="font-serif text-lg font-medium mb-1">
                {item.link ? (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
                    {item.title}
                  </a>
                ) : (
                  item.title
                )}
              </h2>
              {item.author && (
                <p className="text-muted text-sm">by {item.author}</p>
              )}
              {item.excerpt && (
                <p className="text-muted text-sm mt-1">{item.excerpt}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
