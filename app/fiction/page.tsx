import Link from 'next/link';
import { getFiction } from '@/lib/fiction';

export const metadata = {
  title: 'Fiction',
  description: 'Creative writing.',
};

export default function FictionPage() {
  const fiction = getFiction();

  return (
    <div className="max-w-2xl mx-auto px-6 py-20">
      <Link href="/" className="text-muted hover:text-foreground mb-8 inline-block transition-colors">
        ← Home
      </Link>

      <h1 className="text-4xl sm:text-5xl font-semibold mb-8 leading-tight">Fiction</h1>

      {fiction.length === 0 ? (
        <p className="text-base text-muted">No works yet.</p>
      ) : (
        <div className="space-y-6">
          {fiction.map((item) => (
            <div key={item.id}>
              <h2 className="text-xl font-medium mb-1">
                {item.link ? (
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-foreground transition-colors"
                  >
                    {item.title}
                  </a>
                ) : (
                  item.title
                )}
              </h2>
              {item.author && (
                <p className="text-base text-muted">by {item.author}</p>
              )}
              {item.excerpt && (
                <p className="text-base text-muted mt-2 leading-relaxed">{item.excerpt}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
