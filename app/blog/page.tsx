import Link from 'next/link';
import { getAllPosts } from '@/lib/mdx';

export const metadata = {
  title: 'Writing',
  description: 'Writing and thoughts.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-2xl mx-auto px-6 py-20">
      <h1 className="text-4xl sm:text-5xl font-semibold mb-6 leading-tight">Writing</h1>
      
      <p className="text-base mb-4">By Dante O. Cuales, Jr.</p>
      
      {posts.length === 0 ? (
        <p className="text-base text-muted">No posts yet.</p>
      ) : (
        <>
          <p className="text-base mb-5">Here&apos;s a list of my writing:</p>
          <ul className="space-y-3 text-base">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link 
                  href={`/blog/${post.slug}`} 
                  className="hover:text-foreground transition-colors"
                >
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
