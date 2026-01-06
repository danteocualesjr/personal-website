import Link from 'next/link';
import { getAllStories } from '@/lib/fiction-stories';

export const metadata = {
  title: 'Fiction',
  description: 'Short stories and creative writing.',
};

export default function FictionPage() {
  const stories = getAllStories();

  return (
    <div className="max-w-2xl mx-auto px-6 py-20">
      <Link href="/" className="text-muted hover:text-foreground mb-8 inline-block transition-colors">
        ← Home
      </Link>

      <h1 className="text-4xl sm:text-5xl font-semibold mb-8 leading-tight">Fiction</h1>
      
      <p className="text-base mb-4">By Dante O. Cuales, Jr.</p>

      {stories.length === 0 ? (
        <p className="text-base text-muted">No stories yet.</p>
      ) : (
        <>
          <p className="text-base mb-5">Here&apos;s a list of my stories:</p>
          <ul className="space-y-3 text-base">
            {stories.map((story) => (
              <li key={story.slug}>
                <Link 
                  href={`/fiction/${story.slug}`} 
                  className="hover:text-foreground transition-colors"
                >
                  {story.title}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
