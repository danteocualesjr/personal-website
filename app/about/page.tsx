import Link from 'next/link';

export const metadata = {
  title: 'About',
  description: 'Learn more about me, my background, and what I do.',
};

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="max-w-3xl mb-16">
        <p className="text-accent font-medium tracking-wider uppercase text-sm mb-4">
          About Me
        </p>
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
          Hello, I'm [Your Name]
        </h1>
        <p className="text-xl text-muted leading-relaxed">
          A passionate developer, writer, and lifelong learner exploring the 
          intersection of technology and creativity.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Introduction */}
          <section className="bg-card border border-card-border rounded-2xl p-8">
            <h2 className="font-display text-2xl font-semibold mb-4">The Story</h2>
            <div className="prose-custom text-foreground/80 space-y-4 leading-relaxed">
              <p>
                Welcome to my corner of the internet! I'm passionate about building 
                things that matter and sharing what I learn along the way.
              </p>
              <p>
                This website serves as a home for my thoughts, projects, and discoveries. 
                Whether it's diving deep into new technologies, exploring creative ideas, 
                or sharing insights from books I've read—there's always something new to explore.
              </p>
              <p>
                I believe in the power of continuous learning and the magic that happens 
                when we share our knowledge with others. Every project, article, and book 
                review here is a reflection of that journey.
              </p>
            </div>
          </section>

          {/* What I Do */}
          <section className="bg-card border border-card-border rounded-2xl p-8">
            <h2 className="font-display text-2xl font-semibold mb-6">What I Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                    </svg>
                  ),
                  title: 'Development',
                  description: 'Building web applications and exploring new technologies.',
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                    </svg>
                  ),
                  title: 'Writing',
                  description: 'Sharing insights, tutorials, and thoughts through articles.',
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                    </svg>
                  ),
                  title: 'Learning',
                  description: 'Continuously expanding knowledge through books and courses.',
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                    </svg>
                  ),
                  title: 'Creating',
                  description: 'Bringing ideas to life through side projects and experiments.',
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-muted text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Links */}
          <div className="bg-card border border-card-border rounded-2xl p-6">
            <h3 className="font-display text-lg font-semibold mb-4">Explore</h3>
            <div className="space-y-3">
              {[
                { href: '/blog', label: 'Read the Blog', icon: '📝' },
                { href: '/portfolio', label: 'View Projects', icon: '💼' },
                { href: '/books', label: 'Book Collection', icon: '📚' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-accent/5 transition-colors group"
                >
                  <span className="text-xl">{link.icon}</span>
                  <span className="text-sm font-medium group-hover:text-accent transition-colors">
                    {link.label}
                  </span>
                  <svg className="w-4 h-4 ml-auto text-muted group-hover:text-accent group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="bg-gradient-to-br from-accent/10 to-accent-light/10 border border-accent/20 rounded-2xl p-6">
            <h3 className="font-display text-lg font-semibold mb-2">Let's Connect</h3>
            <p className="text-muted text-sm mb-4">
              Have a project in mind or just want to chat? I'd love to hear from you.
            </p>
            <a
              href="mailto:hello@example.com"
              className="btn-primary w-full text-center text-sm"
            >
              Get in Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="bg-card border border-card-border rounded-2xl p-6">
            <h3 className="font-display text-lg font-semibold mb-4">Find Me</h3>
            <div className="flex gap-3">
              {[
                {
                  label: 'GitHub',
                  href: '#',
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                  ),
                },
                {
                  label: 'Twitter',
                  href: '#',
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  ),
                },
                {
                  label: 'LinkedIn',
                  href: '#',
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  ),
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-card-border/50 flex items-center justify-center text-muted hover:bg-accent hover:text-white transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
