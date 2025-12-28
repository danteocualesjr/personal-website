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

  const filters = [
    { key: 'all' as const, label: 'All Books' },
    { key: 'read' as const, label: 'Finished' },
    { key: 'reading' as const, label: 'Reading' },
    { key: 'want-to-read' as const, label: 'On List' },
  ];

  return (
    <>
      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-10">
        {filters.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setFilter(key)}
            className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              filter === key
                ? 'bg-accent text-white shadow-md shadow-accent/25'
                : 'bg-card border border-card-border text-muted hover:border-accent hover:text-accent'
            }`}
          >
            {label}
            <span className={`ml-2 ${filter === key ? 'text-white/70' : 'text-muted/50'}`}>
              {statusCounts[key]}
            </span>
          </button>
        ))}
      </div>

      {/* Books Grid */}
      {filteredBooks.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-muted">No books found in this category.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 stagger-animate">
          {filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}
    </>
  );
}
