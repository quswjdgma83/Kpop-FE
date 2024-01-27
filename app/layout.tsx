import type { Metadata } from 'next';
import { Providers } from './providers';
import '@/styles/globals.css';
import { inter } from '../public/fonts/fonts';
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
    <html lang="ko" className="bg-background">
      <body className={`${inter.variable} text-white h-full min-h-screen `}>
        <Providers>
          <Header />
          <main className="h-full mx-auto mt-10 w-desktop">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
