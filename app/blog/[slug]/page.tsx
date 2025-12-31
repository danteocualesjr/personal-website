import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPostBySlug, getAllPosts } from '@/lib/mdx';
import { formatDate } from '@/lib/utils';
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

  const components = useMDXComponents({});

  return (
    <article>
      <Link href="/blog" className="text-muted hover:text-ink mb-8 inline-block text-xs tracking-[0.18em] uppercase">
        ← Writing
      </Link>

      <header className="mb-8">
        <h1 className="font-serif text-4xl tracking-tight mb-3">{post.title}</h1>
        <time className="text-sm text-muted">{formatDate(post.date)}</time>
      </header>

      <div className="border-t border-rule mb-10" />

      <div className="prose prose-sm max-w-none prose-headings:font-serif prose-a:text-ink prose-a:no-underline hover:prose-a:underline">
        <MDXRemote source={post.content} components={components} />
      </div>
    </article>
  );
}
