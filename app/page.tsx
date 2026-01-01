import Link from 'next/link';
import { getAllPosts } from '@/lib/mdx';

export default function Home() {
  const posts = getAllPosts();
  const favoritePosts = posts.slice(0, 6);

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="space-y-6">
        <div>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl leading-[1.05] tracking-tight mb-4">
            Dante O. Cuales, Jr.
          </h1>
          <p className="text-lg sm:text-xl text-muted max-w-2xl">
            Developer and writer exploring the intersection of technology, creativity, and continuous learning.
          </p>
        </div>
      </section>

      {/* Quick Navigation */}
      <section>
        <nav className="flex flex-wrap gap-6 text-sm">
          <Link href="/blog" className="hover:text-ink transition-colors">
            Writing
          </Link>
          <Link href="/portfolio" className="hover:text-ink transition-colors">
            Projects
          </Link>
          <Link href="/books" className="hover:text-ink transition-colors">
            Books
          </Link>
          <Link href="/fiction" className="hover:text-ink transition-colors">
            Fiction
          </Link>
          <Link href="/about" className="hover:text-ink transition-colors">
            About
          </Link>
        </nav>
      </section>

      <div className="border-t border-rule" />

      {/* Bio Section */}
      <section className="space-y-4 text-[15px] leading-relaxed max-w-2xl">
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
      </section>

      {/* Favorite Writing */}
      {favoritePosts.length > 0 && (
        <section>
          <h2 className="text-xs uppercase tracking-[0.18em] text-muted mb-6">
            Favorite Writing
          </h2>
          <ul className="space-y-3 text-[15px]">
            {favoritePosts.map((post) => (
              <li key={post.slug}>
                <Link 
                  href={`/blog/${post.slug}`} 
                  className="hover:text-ink transition-colors block"
                >
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Contact/Links */}
      <section className="text-[15px] space-y-2">
        <p>
          You can{' '}
          <Link href="/blog" className="hover:text-ink">
            read my writing
          </Link>
          {' '}or{' '}
          <Link href="/portfolio" className="hover:text-ink">
            view my code
          </Link>
          , or{' '}
          <Link href="/about" className="hover:text-ink">
            follow me online
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
          . Reach out if interested.
        </p>
      </section>
    </div>
  );
}
