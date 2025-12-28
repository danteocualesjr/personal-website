import Image from 'next/image';
import type { Book } from '@/lib/books';

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {
  const statusColors = {
    read: 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200',
    reading: 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200',
    'want-to-read': 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200',
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-shadow">
      <div className="flex gap-4">
        {book.cover && (
          <div className="relative w-24 h-36 flex-shrink-0 bg-gray-200 dark:bg-gray-700 rounded">
            <Image
              src={book.cover}
              alt={`${book.title} cover`}
              fill
              className="object-cover rounded"
            />
          </div>
        )}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
            {book.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-3">by {book.author}</p>
          <div className="flex items-center gap-4 mb-3">
            <span
              className={`px-2 py-1 text-xs rounded capitalize ${statusColors[book.status]}`}
            >
              {book.status.replace('-', ' ')}
            </span>
            {book.rating && (
              <div className="flex items-center gap-1">
                <span className="text-yellow-500">★</span>
                <span className="text-gray-600 dark:text-gray-400">{book.rating}/5</span>
              </div>
            )}
          </div>
          {book.review && (
            <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{book.review}</p>
          )}
          {book.dateRead && (
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
              Read on {new Date(book.dateRead).toLocaleDateString()}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

