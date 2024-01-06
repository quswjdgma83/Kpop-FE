'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react';

const items = [
  {
    index: 0,
    href: '/goods',
    label: '굿즈',
  },
  {
    index: 1,
    href: '/social',
    label: '소셜',
  },
  {
    index: 2,
    href: '/events',
    label: '이벤트',
  },
  {
    index: 3,
    href: '/artists',
    label: '아티스트',
  },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <Navbar className="py-5 justify-between" shouldHideOnScroll>
      <NavbarBrand className="mr-20">
        <Link href="/" className="text-4xl ">
          LOGO
        </Link>
      </NavbarBrand>

      <NavbarContent justify="start" className="mr-20">
        <ul className="flex gap-4">
          {items.map(({ index, href, label }) => {
            const textColor = pathname?.endsWith(href)
              ? 'text-highlight'
              : 'text-basic';

            return (
              <NavbarItem key={index}>
                <Link href={href} className={textColor}>
                  {label}
                </Link>
              </NavbarItem>
            );
          })}
        </ul>
      </NavbarContent>

      <NavbarContent justify="end" className="ml-80">
        <form action="">
          <input
            type="text"
            className="bg-background border border-basic text-basic w-[300px] h-10 pl-4 text-sm"
            placeholder="다양한 굿즈들을 찾아보세요!"
          />
        </form>
        <NavbarItem className="hidden lg:flex">
          <Link href="/signin">로그인</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/signup">회원가입</Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
