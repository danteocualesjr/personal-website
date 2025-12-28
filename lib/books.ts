import fs from 'fs';
import path from 'path';

const booksPath = path.join(process.cwd(), 'content', 'books', 'books.json');

export interface Book {
  id: string;
  title: string;
  author: string;
  cover?: string;
  rating?: number;
  status: 'read' | 'reading' | 'want-to-read';
  review?: string;
  dateRead?: string;
}

export function getBooks(): Book[] {
  try {
    if (!fs.existsSync(booksPath)) {
      return [];
    }
    const fileContents = fs.readFileSync(booksPath, 'utf8');
    return JSON.parse(fileContents);
  } catch {
    return [];
  }
}

export function getBooksByStatus(status: Book['status']): Book[] {
  return getBooks().filter((book) => book.status === status);
}
