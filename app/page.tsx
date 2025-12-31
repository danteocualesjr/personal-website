import Link from 'next/link';
import { getAllPosts } from '@/lib/mdx';

export default function Home() {
  const posts = getAllPosts();
  const favoritePosts = posts.slice(0, 6); // Adjust as needed

  return (
    <div>
      <h1 className="font-serif text-4xl sm:text-5xl leading-[1.05] tracking-tight mb-6">
        Dante O. Cuales, Jr.
      </h1>
      <p className="text-xs uppercase tracking-[0.18em] text-muted mb-10">
        A simple site. A few words. A few works.
      </p>

      {/* Bio */}
      <div className="space-y-4 mb-12 text-[15px] leading-relaxed text-ink/95">
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

      <div className="border-t border-rule my-10" />

      {/* Favorite Essays */}
      {favoritePosts.length > 0 && (
        <div className="mb-12">
          <p className="mb-4 text-xs uppercase tracking-[0.18em] text-muted">
            Favorite writing
          </p>
          <ul className="space-y-2 text-[15px]">
            {favoritePosts.map((post) => (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="hover:text-ink">
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Links */}
      <div className="text-[15px] space-y-1">
        <p>
          You can{' '}
          <Link href="/blog" className="hover:text-ink">
            read my writing
          </Link>
          {' '}or{' '}
          <Link href="/portfolio" className="hover:text-ink">
            code
          </Link>
          , or{' '}
          <Link href="/about" className="hover:text-ink">
            follow me online
          </Link>
          . I also{' '}
          <Link href="/fiction" className="hover:text-ink">
            write fiction
          </Link>
          {' '}and{' '}
          <Link href="/books" className="hover:text-ink">
            read books
          </Link>
          . Reach out if interested.
        </p>
      </div>
    </div>
  );
}
