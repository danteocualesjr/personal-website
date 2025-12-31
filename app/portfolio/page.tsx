import Link from 'next/link';
import { getProjects } from '@/lib/portfolio';

export const metadata = {
  title: 'Portfolio',
  description: 'Projects and work.',
};

export default function PortfolioPage() {
  const projects = getProjects();

  return (
    <div>
      <Link href="/" className="text-muted hover:text-ink mb-8 inline-block text-xs tracking-[0.18em] uppercase">
        ← Home
      </Link>

      <h1 className="font-serif text-4xl tracking-tight mb-3">Work</h1>
      <p className="text-muted text-sm mb-8">A small list of things I’ve built.</p>
      <div className="border-t border-rule mb-10" />

      {projects.length === 0 ? (
        <p className="text-muted">No projects yet.</p>
      ) : (
        <div className="space-y-8">
          {projects.map((project) => (
            <div key={project.id}>
              <h2 className="font-serif text-xl font-medium mb-2">
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
                    {project.title}
                  </a>
                ) : (
                  project.title
                )}
              </h2>
              <p className="text-muted mb-2">{project.description}</p>
              {project.technologies.length > 0 && (
                <p className="text-sm text-muted">
                  {project.technologies.join(', ')}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
