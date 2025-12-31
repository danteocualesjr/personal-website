import Link from 'next/link';
import { getBooks } from '@/lib/books';

export const metadata = {
  title: 'Books',
  description: 'Reading list.',
};

export default function BooksPage() {
  const books = getBooks();

  return (
    <div>
      <Link href="/" className="text-muted hover:text-ink mb-8 inline-block text-xs tracking-[0.18em] uppercase">
        ← Home
      </Link>

      <h1 className="font-serif text-4xl tracking-tight mb-3">Books</h1>
      <p className="text-muted text-sm mb-8">A shelf I keep coming back to.</p>
      <div className="border-t border-rule mb-10" />

      {books.length === 0 ? (
        <p className="text-muted">No books yet.</p>
      ) : (
        <div className="space-y-6">
          {books.map((book) => (
            <div key={book.id}>
              <h2 className="font-serif text-lg font-medium mb-1">{book.title}</h2>
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
