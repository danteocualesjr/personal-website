import type { Metadata } from 'next';
import './globals.css';
import SiteHeader from '@/components/SiteHeader';

export const metadata: Metadata = {
  title: {
    default: 'Dante O. Cuales, Jr.',
    template: '%s | Dante O. Cuales, Jr.',
  },
  description: 'Developer and writer.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-paper text-ink">
        <div className="paper-texture min-h-screen">
          <SiteHeader />
          <main className="mx-auto max-w-2xl px-6 py-12">{children}</main>
          <footer className="mx-auto max-w-2xl px-6 pb-10 text-xs text-muted">
            <div className="border-t border-rule pt-6">
              <p>
                © {new Date().getFullYear()} Dante O. Cuales, Jr. · Built with Next.js
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
