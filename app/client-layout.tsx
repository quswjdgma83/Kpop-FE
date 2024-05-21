'use client';

import { RecoilRoot } from 'recoil';
import { Header, Footer } from '@/components/common';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RecoilRoot>
      <Header />
      <main className="h-full mx-auto mt-10 w-desktop">{children}</main>
      <Footer />
    </RecoilRoot>
  );
}
