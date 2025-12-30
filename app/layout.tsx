import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Dante O. Qualis, Jr.',
    template: '%s | Dante O. Qualis, Jr.',
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
