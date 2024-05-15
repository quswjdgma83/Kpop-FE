import type { Metadata } from 'next';
import { Header, Footer } from '@/components/common';
import { QueryClientProvider, NextUIProvider } from '@/lib';
import '@/styles/globals.css';
import { inter } from '../public/fonts/fonts';

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
        <NextUIProvider>
          <QueryClientProvider>
            <Header />
            <main className="h-full mx-auto mt-10 w-desktop">{children}</main>
            <Footer />
          </QueryClientProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
