import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getStoryBySlug, getAllStories } from '@/lib/fiction-stories';
import { formatDate } from '@/lib/utils';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { useMDXComponents } from '@/mdx-components';

export async function generateStaticParams() {
  const stories = getAllStories();
  return stories.map((story) => ({
    slug: story.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const story = getStoryBySlug(params.slug);
  if (!story) {
    return {
      title: 'Story Not Found',
    };
  }
  return {
    title: story.title,
    description: story.excerpt,
  };
}

export default function FictionStoryPage({ params }: { params: { slug: string } }) {
  const story = getStoryBySlug(params.slug);

  if (!story) {
    notFound();
  }

  const components = useMDXComponents({});

  return (
    <article className="max-w-2xl mx-auto px-6 py-20">
      <Link href="/fiction" className="text-muted hover:text-foreground mb-8 inline-block transition-colors">
        ← Fiction
      </Link>

      <header className="mb-8">
        <h1 className="text-4xl sm:text-5xl font-semibold mb-4 leading-tight">{story.title}</h1>
        <div className="flex items-center gap-4 text-base text-muted">
          <time>{formatDate(story.date)}</time>
          {story.type && (
            <>
              <span>•</span>
              <span className="capitalize">{story.type.replace('-', ' ')}</span>
            </>
          )}
        </div>
      </header>

      <div className="prose prose-base max-w-none">
        <MDXRemote source={story.content} components={components} />
      </div>
    </article>
  );
}

