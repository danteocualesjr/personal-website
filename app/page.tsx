import Link from 'next/link';
import { getAllPosts } from '@/lib/mdx';
import { formatDate } from '@/lib/utils';

export default function Home() {
  const posts = getAllPosts();
  const recentPosts = posts.slice(0, 3);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
      {/* Left Column - Main Content */}
      <div className="lg:col-span-2 space-y-12">
        {/* Name & Bio */}
        <div className="space-y-6">
          <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl leading-[0.95] tracking-tight">
            Dante O. Cuales, Jr.
          </h1>
          <div className="space-y-4 text-lg leading-relaxed max-w-xl">
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

        {/* Recent Posts */}
        {recentPosts.length > 0 && (
          <div>
            <h2 className="text-xs uppercase tracking-[0.18em] text-muted mb-6">
              Recent Writing
            </h2>
            <div className="space-y-6">
              {recentPosts.map((post) => (
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
      </div>

      {/* Right Column - Navigation & Links */}
      <div className="space-y-12">
        {/* Navigation Card */}
        <div className="border border-rule p-6 space-y-4">
          <h2 className="text-xs uppercase tracking-[0.18em] text-muted">
            Navigate
          </h2>
          <nav className="space-y-3">
            <Link href="/blog" className="block hover:text-ink transition-colors">
              Writing
            </Link>
            <Link href="/portfolio" className="block hover:text-ink transition-colors">
              Projects
            </Link>
            <Link href="/books" className="block hover:text-ink transition-colors">
              Books
            </Link>
            <Link href="/fiction" className="block hover:text-ink transition-colors">
              Fiction
            </Link>
            <Link href="/about" className="block hover:text-ink transition-colors">
              About
            </Link>
          </nav>
        </div>

        {/* Quick Links */}
        <div className="space-y-4 text-sm">
          <p>
            You can{' '}
            <Link href="/blog" className="hover:text-ink">
              read my writing
            </Link>
            {' '}or{' '}
            <Link href="/portfolio" className="hover:text-ink">
              view my code
            </Link>
            .
          </p>
          <p>
            I also{' '}
            <Link href="/fiction" className="hover:text-ink">
              write fiction
            </Link>
            {' '}and{' '}
            <Link href="/books" className="hover:text-ink">
              read books
            </Link>
            .
          </p>
          <p>
            <Link href="/about" className="hover:text-ink">
              Follow me online
            </Link>
            {' '}or reach out if interested.
          </p>
        </div>
      </div>
    </div>
  );
}
