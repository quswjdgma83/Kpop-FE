import type { Metadata } from 'next';
import '@/styles/globals.css';
import { Providers } from './providers';
import clsx from 'clsx';
import { fontSans } from '@/public/fonts/fonts';

export const metadata: Metadata = {
  title: 'K-POP Goods',
  description: 'K-POP Goods Platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body
        className={clsx(
          'bg-background text-white min-h-screen min-w-desktop font-sans antialiased',
          fontSans.variable,
        )}
      >
        <Providers>
          <div className="h-screen ">
            <main className="flex flex-col items-center h-full w-desktop">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
