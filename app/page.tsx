import Link from 'next/link';
import { getAllPosts } from '@/lib/mdx';

export default function Home() {
  const posts = getAllPosts();
  const favoritePosts = posts.slice(0, 6);

  return (
    <div className="max-w-2xl mx-auto px-6 py-20">
      {/* Name */}
      <h1 className="text-4xl sm:text-5xl font-semibold mb-8 leading-tight">
        Dante O. Cuales, Jr.
      </h1>

      {/* Bio */}
      <div className="space-y-5 mb-16 text-base leading-relaxed">
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

      {/* Favorite Essays */}
      {favoritePosts.length > 0 && (
        <div className="mb-16">
          <p className="mb-5 text-base">Some of my favorite writing includes:</p>
          <ul className="space-y-3 text-base">
            {favoritePosts.map((post) => (
              <li key={post.slug}>
                <Link 
                  href={`/blog/${post.slug}`} 
                  className="hover:text-foreground transition-colors"
                >
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Links */}
      <div className="text-base leading-relaxed">
        <p>
          You can{' '}
          <Link href="/blog" className="hover:text-foreground transition-colors">
            read my writing
          </Link>
          {' '}or{' '}
          <Link href="/portfolio" className="hover:text-foreground transition-colors">
            code
          </Link>
          , or{' '}
          <Link href="/about" className="hover:text-foreground transition-colors">
            follow me online
          </Link>
          . I also{' '}
          <Link href="/fiction" className="hover:text-foreground transition-colors">
            write fiction
          </Link>
          {' '}and{' '}
          <Link href="/books" className="hover:text-foreground transition-colors">
            read books
          </Link>
          . Reach out if interested.
        </p>
      </div>
    </div>
  );
}
