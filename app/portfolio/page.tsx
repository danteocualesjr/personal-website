import Link from 'next/link';
import { getProjects } from '@/lib/portfolio';

export const metadata = {
  title: 'Portfolio',
  description: 'Projects and work.',
};

export default function PortfolioPage() {
  const projects = getProjects();

  return (
    <div className="max-w-2xl mx-auto px-6 py-20">
      <Link href="/" className="text-muted hover:text-foreground mb-8 inline-block transition-colors">
        ← Home
      </Link>

      <h1 className="text-4xl sm:text-5xl font-semibold mb-8 leading-tight">Projects</h1>

      {projects.length === 0 ? (
        <p className="text-base text-muted">No projects yet.</p>
      ) : (
        <div className="space-y-8">
          {projects.map((project) => (
            <div key={project.id}>
              <h2 className="text-xl font-medium mb-2">
                {project.link ? (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-foreground transition-colors"
                  >
                    {project.title}
                  </a>
                ) : (
                  project.title
                )}
              </h2>
              <p className="text-base text-muted mb-2 leading-relaxed">{project.description}</p>
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
