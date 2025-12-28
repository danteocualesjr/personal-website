import { getAllPosts } from '@/lib/mdx';
import BlogCard from '@/components/BlogCard';

export const metadata = {
  title: 'Blog',
  description: 'Thoughts, tutorials, and insights on technology and creativity.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="max-w-2xl mb-16">
        <p className="text-accent font-medium tracking-wider uppercase text-sm mb-4">
          The Blog
        </p>
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
          Writing & Ideas
        </h1>
        <p className="text-xl text-muted leading-relaxed">
          Exploring thoughts on technology, creativity, and the journey of continuous learning. 
          Each post is a snapshot of ideas worth sharing.
        </p>
      </div>

      {/* Posts Grid */}
      {posts.length === 0 ? (
        <div className="text-center py-20">
          <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-accent/10 flex items-center justify-center">
            <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
          </div>
          <h2 className="font-display text-2xl font-semibold mb-2">No posts yet</h2>
          <p className="text-muted">New articles coming soon. Stay tuned!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animate">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
