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
    <div className="max-w-2xl mx-auto px-6 py-16">
      <Link href="/" className="text-muted hover:text-foreground mb-8 inline-block">
        ← Back
      </Link>
      
      <h1 className="text-3xl font-semibold mb-12">Writing</h1>

      {posts.length === 0 ? (
        <p className="text-muted">No posts yet.</p>
      ) : (
        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="block group">
                <h2 className="text-xl font-medium mb-2 group-hover:text-foreground">
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
