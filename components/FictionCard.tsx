import Link from 'next/link';
import Image from 'next/image';
import type { Fiction } from '@/lib/fiction';

interface FictionCardProps {
  fiction: Fiction;
}

const typeLabels = {
  'short-story': 'Short Story',
  novel: 'Novel',
  novella: 'Novella',
  poetry: 'Poetry',
  essay: 'Essay',
};

const statusConfig = {
  published: {
    label: 'Published',
    bg: 'bg-green-500/10',
    text: 'text-green-600 dark:text-green-400',
    border: 'border-green-500/20',
  },
  draft: {
    label: 'Draft',
    bg: 'bg-muted/10',
    text: 'text-muted',
    border: 'border-muted/20',
  },
  'in-progress': {
    label: 'In Progress',
    bg: 'bg-accent/10',
    text: 'text-accent',
    border: 'border-accent/20',
  },
};

export default function FictionCard({ fiction }: FictionCardProps) {
  const status = statusConfig[fiction.status];

  return (
    <div className="group bg-card border border-card-border rounded-2xl overflow-hidden card-hover">
      {/* Cover Image */}
      <div className="relative w-full h-64 bg-gradient-to-br from-accent/20 to-accent-light/20 overflow-hidden">
        {fiction.cover ? (
          <Image
            src={fiction.cover}
            alt={fiction.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-2xl bg-accent/20 flex items-center justify-center">
              <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
              </svg>
            </div>
          </div>
        )}
        
        {/* Type and Status badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          <span className="px-3 py-1 bg-background/90 backdrop-blur-sm text-xs font-medium rounded-full">
            {typeLabels[fiction.type]}
          </span>
          <span className={`px-3 py-1 text-xs font-medium rounded-full border ${status.bg} ${status.text} ${status.border}`}>
            {status.label}
          </span>
        </div>
      </div>

      <div className="p-6">
        {/* Title */}
        <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
          {fiction.title}
        </h3>

        {/* Author */}
        {fiction.author && (
          <p className="text-muted text-sm mb-3">by {fiction.author}</p>
        )}

        {/* Excerpt */}
        {fiction.excerpt && (
          <p className="text-muted mb-4 line-clamp-3 leading-relaxed">
            {fiction.excerpt}
          </p>
        )}

        {/* Tags */}
        {fiction.tags && fiction.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {fiction.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs bg-card-border/50 text-muted rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Meta and Links */}
        <div className="flex items-center justify-between pt-4 border-t border-card-border">
          {fiction.published && (
            <time className="text-xs text-muted">
              {new Date(fiction.published).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
            </time>
          )}
          {fiction.link && (
            <Link
              href={fiction.link}
              className="flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors"
            >
              Read more
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}


