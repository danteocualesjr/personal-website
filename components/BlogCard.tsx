import Link from 'next/link';
import { formatDate, readingTime } from '@/lib/utils';
import type { BlogPost } from '@/lib/mdx';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const readTime = readingTime(post.content);

  return (
    <Link href={`/blog/${post.slug}`}>
      <article className="group bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-shadow">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {post.title}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{post.excerpt}</p>
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-500">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span>{readTime} min read</span>
        </div>
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </article>
    </Link>
  );
}

