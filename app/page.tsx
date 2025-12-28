import Link from 'next/link';
import { getAllPosts } from '@/lib/mdx';
import { getFeaturedProjects } from '@/lib/portfolio';
import BlogCard from '@/components/BlogCard';
import PortfolioCard from '@/components/PortfolioCard';

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 3);
  const featuredProjects = getFeaturedProjects().slice(0, 3);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent-light/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 lg:px-8 py-20 text-center">
          <div className="animate-fade-in">
            <p className="text-accent font-medium tracking-wider uppercase text-sm mb-6">
              Welcome to my corner of the internet
            </p>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight mb-8 text-balance">
              Ideas, Projects &{' '}
              <span className="gradient-text">Discoveries</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted max-w-2xl mx-auto mb-12 font-light leading-relaxed">
              Exploring the intersection of technology, creativity, and continuous learning through writing and building.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                Read the Blog
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/portfolio"
                className="px-6 py-3 border border-card-border rounded-lg font-medium hover:border-accent hover:text-accent transition-all"
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-muted/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-muted/50 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Latest Posts Section */}
      {recentPosts.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 lg:px-8 py-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-accent font-medium tracking-wider uppercase text-sm mb-2">
                From the Blog
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-semibold">
                Latest Writing
              </h2>
            </div>
            <Link
              href="/blog"
              className="text-muted hover:text-accent transition-colors link-underline inline-flex items-center gap-2 self-start md:self-auto"
            >
              View all articles
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animate">
            {recentPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      )}

      {/* Featured Projects Section */}
      {featuredProjects.length > 0 && (
        <section className="relative py-20 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-card/50" />
          
          <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
              <div>
                <p className="text-accent font-medium tracking-wider uppercase text-sm mb-2">
                  Selected Work
                </p>
                <h2 className="font-display text-4xl md:text-5xl font-semibold">
                  Featured Projects
                </h2>
              </div>
              <Link
                href="/portfolio"
                className="text-muted hover:text-accent transition-colors link-underline inline-flex items-center gap-2 self-start md:self-auto"
              >
                View all projects
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animate">
              {featuredProjects.map((project) => (
                <PortfolioCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 py-20">
        <div className="relative bg-card border border-card-border rounded-3xl p-12 md:p-16 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-light/5 rounded-full blur-3xl" />
          
          <div className="relative text-center max-w-2xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6">
              Let's Connect
            </h2>
            <p className="text-muted text-lg mb-8 leading-relaxed">
              I'm always interested in hearing about new projects, opportunities, or just having a conversation about technology and ideas.
            </p>
            <Link
              href="/about"
              className="btn-primary inline-flex items-center gap-2"
            >
              Get in Touch
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
