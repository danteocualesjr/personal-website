import type { Metadata } from 'next';
import './globals.css';

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
      <body className="min-h-screen bg-background text-foreground">
        <main>{children}</main>
      </body>
    </html>
  );
}
