import type { Metadata } from 'next';
import { Providers } from './providers';
import '../styles/globals.css';
import { fontSans } from '../public/fonts/fonts';
import Header from '@/components/common/Header';

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
        className={`bg-background text-white min-h-screen min-w-desktop ${fontSans.variable} font-sans`}
      >
        <Providers>
          <div className="h-screen w-desktop mt-0 mx-auto">
            <Header />
            <main className="flex flex-col items-center h-full">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
