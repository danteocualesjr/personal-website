import Link from 'next/link';
import { getAllPosts } from '@/lib/mdx';
import { formatDate } from '@/lib/utils';

export const metadata = {
  title: 'Blog',
  description: 'Writing and thoughts.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div>
      <Link href="/" className="text-muted hover:text-ink mb-8 inline-block text-xs tracking-[0.18em] uppercase">
        ← Home
      </Link>

      <h1 className="font-serif text-4xl tracking-tight mb-3">Writing</h1>
      <p className="text-muted text-sm mb-8">
        Notes, essays, and small dispatches.
      </p>
      <div className="border-t border-rule mb-10" />

      {posts.length === 0 ? (
        <p className="text-muted">No posts yet.</p>
      ) : (
        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="block group">
                <h2 className="font-serif text-xl font-medium mb-2 group-hover:text-ink">
                  {post.title}
                </h2>
                <time className="text-sm text-muted">
                  {formatDate(post.date)}
                </time>
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
