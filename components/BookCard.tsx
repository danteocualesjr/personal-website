import Image from 'next/image';
import type { Book } from '@/lib/books';

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {
  const statusConfig = {
    read: {
      label: 'Finished',
      bg: 'bg-green-500/10',
      text: 'text-green-600 dark:text-green-400',
      border: 'border-green-500/20',
    },
    reading: {
      label: 'Reading',
      bg: 'bg-accent/10',
      text: 'text-accent',
      border: 'border-accent/20',
    },
    'want-to-read': {
      label: 'On List',
      bg: 'bg-muted/10',
      text: 'text-muted',
      border: 'border-muted/20',
    },
  };

  const status = statusConfig[book.status];

  return (
    <div className="group bg-card border border-card-border rounded-2xl p-6 card-hover">
      <div className="flex gap-5">
        {/* Book Cover */}
        <div className="relative w-24 h-36 flex-shrink-0 rounded-lg overflow-hidden bg-gradient-to-br from-accent/20 to-accent-light/20 shadow-md">
          {book.cover ? (
            <Image
              src={book.cover}
              alt={`${book.title} cover`}
              fill
              className="object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="w-8 h-8 text-accent/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
              </svg>
            </div>
          )}
        </div>

        {/* Book Info */}
        <div className="flex-1 min-w-0">
          {/* Status Badge */}
          <span className={`inline-flex px-2.5 py-1 text-xs font-medium rounded-full ${status.bg} ${status.text} border ${status.border}`}>
            {status.label}
          </span>

          {/* Title */}
          <h3 className="font-display text-lg font-semibold mt-3 mb-1 group-hover:text-accent transition-colors line-clamp-2">
            {book.title}
          </h3>

          {/* Author */}
          <p className="text-muted text-sm mb-3">by {book.author}</p>

          {/* Rating */}
          {book.rating && (
            <div className="flex items-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${i < book.rating! ? 'text-amber-400' : 'text-card-border'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-sm text-muted ml-1">{book.rating}/5</span>
            </div>
          )}

          {/* Review excerpt */}
          {book.review && (
            <p className="text-sm text-muted line-clamp-2 leading-relaxed italic">
              &ldquo;{book.review}&rdquo;
            </p>
          )}

          {/* Date read */}
          {book.dateRead && (
            <p className="text-xs text-muted/70 mt-3">
              Finished {new Date(book.dateRead).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
