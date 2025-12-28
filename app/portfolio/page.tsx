import { getProjects } from '@/lib/portfolio';
import PortfolioCard from '@/components/PortfolioCard';

export const metadata = {
  title: 'Portfolio',
  description: 'A collection of projects and work showcasing my skills and experience.',
};

export default function PortfolioPage() {
  const projects = getProjects();

  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="max-w-2xl mb-16">
        <p className="text-accent font-medium tracking-wider uppercase text-sm mb-4">
          Portfolio
        </p>
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
          Selected Work
        </h1>
        <p className="text-xl text-muted leading-relaxed">
          A curated collection of projects that showcase problem-solving, creativity, 
          and technical expertise across different domains.
        </p>
      </div>

      {/* Projects Grid */}
      {projects.length === 0 ? (
        <div className="text-center py-20">
          <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-accent/10 flex items-center justify-center">
            <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
            </svg>
          </div>
          <h2 className="font-display text-2xl font-semibold mb-2">No projects yet</h2>
          <p className="text-muted">Projects will be added soon. Check back later!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animate">
          {projects.map((project) => (
            <PortfolioCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}
