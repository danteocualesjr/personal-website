import { getAllPosts } from '@/lib/mdx';
import BlogCard from '@/components/BlogCard';

export const metadata = {
  title: 'Blog',
  description: 'Read my latest blog posts and articles.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Blog</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Thoughts, tutorials, and insights on various topics.
        </p>
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400">No blog posts yet. Check back soon!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}

