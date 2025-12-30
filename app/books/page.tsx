import Link from 'next/link';
import { getBooks } from '@/lib/books';

export const metadata = {
  title: 'Books',
  description: 'Reading list.',
};

export default function BooksPage() {
  const books = getBooks();

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <Link href="/" className="text-muted hover:text-foreground mb-8 inline-block">
        ← Back
      </Link>
      
      <h1 className="text-3xl font-semibold mb-12">Books</h1>

      {books.length === 0 ? (
        <p className="text-muted">No books yet.</p>
      ) : (
        <div className="space-y-6">
          {books.map((book) => (
            <div key={book.id}>
              <h2 className="text-lg font-medium mb-1">{book.title}</h2>
              <p className="text-muted text-sm">by {book.author}</p>
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
