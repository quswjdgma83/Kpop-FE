import type { Metadata } from 'next';
import { Providers } from './providers';
import '../styles/globals.css';
import { fontSans } from '../public/fonts/fonts';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

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
          <div className="mx-auto h-100 w-desktop">
            <main className="flex flex-col items-center w-full h-full">
              <Header />
              {children}
              <Footer />
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
