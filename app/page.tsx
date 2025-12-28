import Link from 'next/link';
import { getAllPosts } from '@/lib/mdx';
import { getFeaturedProjects } from '@/lib/portfolio';
import BlogCard from '@/components/BlogCard';
import PortfolioCard from '@/components/PortfolioCard';

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 3);
  const featuredProjects = getFeaturedProjects().slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
          Welcome to My Personal Website
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Explore my blog posts, portfolio projects, book collection, and more.
        </p>
      </section>

      {/* Featured Blog Posts */}
      {recentPosts.length > 0 && (
        <section className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Latest Blog Posts</h2>
            <Link
              href="/blog"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      )}

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <section className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Featured Projects</h2>
            <Link
              href="/portfolio"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <PortfolioCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      )}

      {/* Quick Links */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link
          href="/blog"
          className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800 hover:shadow-lg transition-shadow"
        >
          <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-2">Blog</h3>
          <p className="text-blue-700 dark:text-blue-300">Read my latest thoughts and articles</p>
        </Link>
        <Link
          href="/portfolio"
          className="p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800 hover:shadow-lg transition-shadow"
        >
          <h3 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-2">Portfolio</h3>
          <p className="text-green-700 dark:text-green-300">View my projects and work</p>
        </Link>
        <Link
          href="/books"
          className="p-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800 hover:shadow-lg transition-shadow"
        >
          <h3 className="text-xl font-semibold text-purple-900 dark:text-purple-100 mb-2">Books</h3>
          <p className="text-purple-700 dark:text-purple-300">Explore my reading collection</p>
        </Link>
      </section>
    </div>
  );
}

