import Link from 'next/link';
import { getAllPosts } from '@/lib/mdx';

export default function Home() {
  const posts = getAllPosts();
  const favoritePosts = posts.slice(0, 6); // Adjust as needed

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      {/* Name */}
      <h1 className="text-3xl font-semibold mb-6">Dante O. Qualis, Jr.</h1>

      {/* Bio */}
      <div className="space-y-4 mb-12 text-[15px] leading-relaxed">
        <p>
          I'm a developer and writer. I work at [Company] doing [what you do]. 
          Previously, I worked at [Previous Company]. I've been coding for [X] years 
          and [other relevant experience].
        </p>
        <p>
          My life's work is to make technology easy to understand and interesting 
          to learn about. I'm a [personal detail], [personal detail], and a 
          [interest/hobby]. I last listened to [Song] by [Artist].
        </p>
      </div>

      {/* Favorite Essays */}
      {favoritePosts.length > 0 && (
        <div className="mb-12">
          <p className="mb-4 text-[15px]">Some of my favorite essays include:</p>
          <ul className="space-y-2 text-[15px]">
            {favoritePosts.map((post) => (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="hover:text-foreground">
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
          <Link href="/blog" className="hover:text-foreground">
            read my writing
          </Link>
          {' '}or{' '}
          <Link href="/portfolio" className="hover:text-foreground">
            code
          </Link>
          , or{' '}
          <Link href="/about" className="hover:text-foreground">
            follow me online
          </Link>
          . I also{' '}
          <Link href="/fiction" className="hover:text-foreground">
            write fiction
          </Link>
          {' '}and{' '}
          <Link href="/books" className="hover:text-foreground">
            read books
          </Link>
          . Reach out if interested.
        </p>
      </div>
    </div>
  );
}
