import { QueryClientProvider, NextUIProvider } from '@/lib';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import { inter } from '../public/fonts/fonts';
import ClientLayout from './client-layout';

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
      <body className={`${inter.variable} text-white h-full min-h-screen`}>
        <NextUIProvider>
          <QueryClientProvider>
            <ClientLayout>{children}</ClientLayout>
          </QueryClientProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
