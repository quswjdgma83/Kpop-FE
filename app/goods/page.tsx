import Link from 'next/link';
import { Button, Chip } from '@nextui-org/react';
import { IconAdd, IconCancel } from '@/public/svgs';

interface GoodsProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

const categoryItems = [
  {
    index: 0,
    label: '전체',
    category: 'all',
    href: '/goods',
  },
  {
    index: 1,
    label: '인형',
    category: 'doll',
    href: '?category=doll',
  },
  {
    index: 2,
    label: '키링',
    category: 'keyring',
    href: '?category=keyring',
  },
  {
    index: 3,
    label: '응원봉',
    category: 'lightstick',
    href: '?category=lightstick',
  },
  {
    index: 4,
    label: '슬로건',
    category: 'slogan',
    href: '?category=slogan',
  },
  {
    index: 5,
    label: '패션',
    category: 'fashion',
    href: '?category=fashion',
  },
  {
    index: 6,
    label: '포토카드',
    category: 'photocard',
    href: '?category=photocard',
  },
  {
    index: 7,
    label: '포토북',
    category: 'photobook',
    href: '?category=photobook',
  },
  {
    index: 8,
    label: '컵홀더',
    category: 'cupholder',
    href: '?category=cupholder',
  },
  {
    index: 9,
    label: '텀블러',
    category: 'tumbler',
    href: '?category=tumbler',
  },
  {
    index: 10,
    label: '스티커',
    category: 'sticker',
    href: '?category=sticker',
  },
  {
    index: 11,
    label: '잡화',
    category: 'stuff',
    href: '?category=stuff',
  },
  {
    index: 12,
    label: '지류굿즈',
    category: 'paper',
    href: '?category=paper',
  },
];

const orderItems = [
  {
    index: 0,
    label: '최신순',
    order: 'recent',
    href: '?order=recent',
  },
  {
    index: 1,
    label: '추천순',
    order: 'recommend',
    href: '?order=recommend',
  },
  {
    index: 2,
    label: '인기순',
    order: 'popular',
    href: '?order=popular',
  },
  {
    index: 3,
    label: '마감임박순',
    order: 'deadline',
    href: '?order=deadline',
  },
];

const idolItems = [
  {
    index: 0,
    label: 'NCT',
  },
  {
    index: 1,
    label: 'BTS',
  },
  {
    index: 0,
    label: 'New Jeans',
  },
];

export default function Goods({ searchParams }: GoodsProps) {
  return (
    <div className="w-full">
      <section>
        <nav className="flex justify-center gap-5 mb-9">
          {categoryItems.map(({ index, label, category, href }) => {
            const borderColor =
              searchParams?.category === category
                ? 'border-highlight'
                : 'border-basic';

            const textColor =
              searchParams?.category === category
                ? 'text-highlight'
                : 'text-basic';

            return (
              <Link href={href}>
                <Chip
                  variant="bordered"
                  radius="full"
                  key={index}
                  className={`${borderColor} ${textColor} text-base`}
                >
                  {label}
                </Chip>
              </Link>
            );
          })}
        </nav>

        <div className="flex justify-between mb-5">
          <h1 className="text-xl">
            인형 카테고리에 <span className="text-highlight">9999개</span>의
            상품이 등록되어 있습니다.
          </h1>

          <nav>
            {orderItems.map(({ index, label, order, href }) => {
              return (
                <Button
                  size="sm"
                  variant="light"
                  radius="full"
                  key={index}
                  className="text-basic text-lg"
                >
                  {label}
                </Button>
              );
            })}
          </nav>
        </div>

        <div className="flex gap-5 items-center">
          {idolItems.map(({ index, label }) => (
            <Chip
              radius="sm"
              variant="bordered"
              className="text-highlight border-highlight"
              endContent={<IconCancel />}
              // onClose={() => console.log('close')}
            >
              {label}
            </Chip>
          ))}

          <Button
            isIconOnly
            size="sm"
            radius="sm"
            variant="bordered"
            className="text-highlight border-highlight p-0"
          >
            <IconAdd />
          </Button>
        </div>
      </section>
    </div>
  );
}
