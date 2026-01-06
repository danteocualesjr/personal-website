import Link from 'next/link';
import { getBooks } from '@/lib/books';

export const metadata = {
  title: 'Books',
  description: 'Reading list.',
};

export default function BooksPage() {
  const books = getBooks();

  return (
    <div className="max-w-2xl mx-auto px-6 py-20">
      <Link href="/" className="text-muted hover:text-foreground mb-8 inline-block transition-colors">
        ← Home
      </Link>

      <h1 className="text-4xl sm:text-5xl font-semibold mb-8 leading-tight">Books</h1>

      {books.length === 0 ? (
        <p className="text-base text-muted">No books yet.</p>
      ) : (
        <div className="space-y-6">
          {books.map((book) => (
            <div key={book.id}>
              <h2 className="text-xl font-medium mb-1">{book.title}</h2>
              <p className="text-base text-muted">by {book.author}</p>
              {book.rating && (
                <p className="text-sm text-muted mt-1">{book.rating}/5</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
