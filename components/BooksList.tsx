'use client';

import { useState } from 'react';
import BookCard from './BookCard';
import type { Book } from '@/lib/books';

interface BooksListProps {
  books: Book[];
}

export default function BooksList({ books }: BooksListProps) {
  const [filter, setFilter] = useState<'all' | Book['status']>('all');

  const filteredBooks =
    filter === 'all' ? books : books.filter((book) => book.status === filter);

  const statusCounts = {
    all: books.length,
    read: books.filter((b) => b.status === 'read').length,
    reading: books.filter((b) => b.status === 'reading').length,
    'want-to-read': books.filter((b) => b.status === 'want-to-read').length,
  };

  return (
    <>
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 mb-8">
        {(['all', 'read', 'reading', 'want-to-read'] as const).map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              filter === status
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            {status === 'all'
              ? 'All Books'
              : status.charAt(0).toUpperCase() + status.slice(1).replace('-', ' ')}{' '}
            ({statusCounts[status]})
          </button>
        ))}
      </div>

      {filteredBooks.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400">No books found in this category.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}
    </>
  );
}

