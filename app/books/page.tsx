import { getBooks } from '@/lib/books';
import BooksList from '@/components/BooksList';

export const metadata = {
  title: 'Books',
  description: 'My reading collection, reviews, and recommendations.',
};

export default function BooksPage() {
  const books = getBooks();

  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="max-w-2xl mb-16">
        <p className="text-accent font-medium tracking-wider uppercase text-sm mb-4">
          Library
        </p>
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
          Reading List
        </h1>
        <p className="text-xl text-muted leading-relaxed">
          A collection of books that have shaped my thinking, expanded my knowledge, 
          and sparked new ideas. Each one has left its mark.
        </p>
      </div>

      {/* Books List */}
      {books.length === 0 ? (
        <div className="text-center py-20">
          <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-accent/10 flex items-center justify-center">
            <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
          </div>
          <h2 className="font-display text-2xl font-semibold mb-2">No books yet</h2>
          <p className="text-muted">Reading list will be updated soon!</p>
        </div>
      ) : (
        <BooksList books={books} />
      )}
    </div>
  );
}
