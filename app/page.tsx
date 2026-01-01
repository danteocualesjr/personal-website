import Link from 'next/link';
import { getAllPosts } from '@/lib/mdx';
import { formatDate } from '@/lib/utils';

export default function Home() {
  const posts = getAllPosts();
  const favoritePosts = posts.slice(0, 4);

  return (
    <div className="max-w-4xl mx-auto">
      {/* Centered Hero */}
      <div className="text-center mb-20 space-y-8">
        <div>
          <h1 className="font-serif text-7xl sm:text-8xl md:text-9xl leading-[0.9] tracking-tight mb-6">
            Dante O. Cuales, Jr.
          </h1>
          <div className="w-24 h-1 bg-ink mx-auto mb-8" />
        </div>
        <p className="text-xl sm:text-2xl text-muted max-w-2xl mx-auto leading-relaxed">
          Developer and writer exploring the intersection of technology, creativity, and continuous learning.
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        {/* Left: Bio */}
        <div className="space-y-6">
          <h2 className="text-xs uppercase tracking-[0.18em] text-muted mb-4">
            About
          </h2>
          <div className="space-y-4 text-[15px] leading-relaxed">
            <p>
              I&apos;m a developer and writer. I work at [Company] doing [what you do]. 
              Previously, I worked at [Previous Company]. I&apos;ve been coding for [X] years 
              and [other relevant experience].
            </p>
            <p>
              My life&apos;s work is to make technology easy to understand and interesting 
              to learn about. I&apos;m a [personal detail], [personal detail], and a 
              [interest/hobby]. I last listened to [Song] by [Artist].
            </p>
          </div>
        </div>

        {/* Right: Navigation */}
        <div className="space-y-6">
          <h2 className="text-xs uppercase tracking-[0.18em] text-muted mb-4">
            Explore
          </h2>
          <nav className="space-y-4">
            <Link href="/blog" className="block text-lg hover:text-ink transition-colors">
              → Writing
            </Link>
            <Link href="/portfolio" className="block text-lg hover:text-ink transition-colors">
              → Projects
            </Link>
            <Link href="/books" className="block text-lg hover:text-ink transition-colors">
              → Books
            </Link>
            <Link href="/fiction" className="block text-lg hover:text-ink transition-colors">
              → Fiction
            </Link>
            <Link href="/about" className="block text-lg hover:text-ink transition-colors">
              → About
            </Link>
          </nav>
        </div>
      </div>

      {/* Favorite Writing */}
      {favoritePosts.length > 0 && (
        <div className="border-t border-rule pt-12">
          <h2 className="text-xs uppercase tracking-[0.18em] text-muted mb-8">
            Favorite Writing
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {favoritePosts.map((post) => (
              <article key={post.slug} className="group">
                <Link href={`/blog/${post.slug}`} className="block">
                  <h3 className="text-xl font-medium mb-2 group-hover:text-ink transition-colors">
                    {post.title}
                  </h3>
                  <time className="text-sm text-muted">
                    {formatDate(post.date)}
                  </time>
                </Link>
              </article>
            ))}
          </div>
        </div>
      )}

      {/* Footer Links */}
      <div className="border-t border-rule mt-12 pt-8 text-center text-sm text-muted">
        <p>
          You can{' '}
          <Link href="/blog" className="hover:text-ink">
            read my writing
          </Link>
          {' '}or{' '}
          <Link href="/portfolio" className="hover:text-ink">
            view my code
          </Link>
          . I also{' '}
          <Link href="/fiction" className="hover:text-ink">
            write fiction
          </Link>
          {' '}and{' '}
          <Link href="/books" className="hover:text-ink">
            read books
          </Link>
          .{' '}
          <Link href="/about" className="hover:text-ink">
            Reach out
          </Link>
          {' '}if interested.
        </p>
      </div>
    </div>
  );
}
