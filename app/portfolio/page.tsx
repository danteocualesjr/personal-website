import { getProjects } from '@/lib/portfolio';
import PortfolioCard from '@/components/PortfolioCard';

export const metadata = {
  title: 'Portfolio',
  description: 'View my portfolio of projects and work.',
};

export default function PortfolioPage() {
  const projects = getProjects();
  const categories = Array.from(new Set(projects.map((p) => p.category)));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Portfolio</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          A collection of my projects and work.
        </p>
      </div>

      {projects.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400">No projects yet. Check back soon!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <PortfolioCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}

