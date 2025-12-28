import { getBooks } from '@/lib/books';
import BooksList from '@/components/BooksList';

export const metadata = {
  title: 'Books',
  description: 'My reading collection and reviews.',
};

export default function BooksPage() {
  const books = getBooks();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Books</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          My reading collection and reviews.
        </p>
      </div>

      {books.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400">No books yet. Check back soon!</p>
        </div>
      ) : (
        <BooksList books={books} />
      )}
    </div>
  );
}

