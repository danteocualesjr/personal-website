import Link from 'next/link';
import { getAllPosts } from '@/lib/mdx';

export const metadata = {
  title: 'Writing',
  description: 'Writing and thoughts.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-semibold mb-6">Writing</h1>
      
      <p className="text-[15px] mb-4">By Dante O. Cuales, Jr.</p>
      
      {posts.length === 0 ? (
        <p className="text-[15px] text-muted">No posts yet.</p>
      ) : (
        <>
          <p className="text-[15px] mb-4">Here&apos;s a list of my writing:</p>
          <ul className="space-y-2 text-[15px]">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="hover:text-foreground">
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
