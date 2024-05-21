'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useRecoilValue } from 'recoil';
import authState from '@/store/auth';
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
  const auth = useRecoilValue(authState);

  return (
    <header className="h-16 mx-auto ">
      <Navbar
        className="relative items-center"
        shouldHideOnScroll
        position="static"
      >
        <NavbarBrand className="absolute left-[-128px]">
          <Link href="/" className="text-3xl ">
            LOGO
          </Link>
        </NavbarBrand>

        <NavbarContent justify="start">
          <ul className="flex gap-6 ">
            {items.map(({ index, href, label }) => {
              const textColor = pathname?.startsWith(href)
                ? 'text-highlight'
                : 'text-basic';

              return (
                <NavbarItem key={index} className="text-xl">
                  <Link href={href} className={textColor}>
                    {label}
                  </Link>
                </NavbarItem>
              );
            })}
          </ul>
        </NavbarContent>

        <NavbarContent justify="end" className="absolute right-[-127px] gap-7">
          {auth.isAuthenticated ? (
            <>
              <NavbarItem key={4}>
                <Link href="/mypage" className="text-xl">
                  마이페이지
                </Link>
              </NavbarItem>
              <NavbarItem>
                <span className="text-xl">환영합니다, {auth.userEmail}님</span>
              </NavbarItem>
              <NavbarItem>
                <span className="text-xl">로그아웃</span>
              </NavbarItem>
            </>
          ) : (
            <>
              <NavbarItem>
                <Link href="/signin" className="text-xl">
                  로그인
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link href="/signup" className="text-xl">
                  회원가입
                </Link>
              </NavbarItem>
            </>
          )}
        </NavbarContent>
      </Navbar>
    </header>
  );
}
