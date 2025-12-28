import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPosts } from '@/lib/mdx';
import { formatDate, readingTime } from '@/lib/utils';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { useMDXComponents } from '@/mdx-components';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const readTime = readingTime(post.content);
  const components = useMDXComponents({});

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          {post.title}
        </h1>
        <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 mb-4">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span>•</span>
          <span>{readTime} min read</span>
        </div>
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <MDXRemote source={post.content} components={components} />
      </div>
    </article>
  );
}

