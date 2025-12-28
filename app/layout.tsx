import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Personal Website',
    template: '%s | Personal Website',
  },
  description: 'A personal website featuring blog, portfolio, books, and more.',
  openGraph: {
    title: 'Personal Website',
    description: 'A personal website featuring blog, portfolio, books, and more.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-background text-foreground font-body">
        <div className="fixed inset-0 bg-grid pointer-events-none" />
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
