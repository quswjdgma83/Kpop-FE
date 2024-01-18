import Link from 'next/link';
import { Button, Chip } from '@nextui-org/react';
import { IconAdd, IconCancel } from '@/public/svgs';
import Item from '@/containers/goods/Item';

interface GoodsProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

const categoryList = [
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

const orderList = [
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

const idolList = [
  {
    index: 0,
    label: 'NCT',
  },
  {
    index: 1,
    label: 'BTS',
  },
  {
    index: 2,
    label: 'New Jeans',
  },
];

const itemList = [
  {
    index: 0,
    item_image: '/mocks/goods_rabbit.png',
    item_label: '🐰맠묘&묘맠 선입금🐱',
    item_price: 14000,
    item_date_start: '2023.11.21',
    item_date_end: '2023.12.05',
    item_view: 999999,
    user_avatar: '/mocks/user_avatar.png',
    user_name: '맠묘',
    user_id: 'markmyo',
  },
  {
    index: 1,
    item_image: '/mocks/goods_rabbit.png',
    item_label: '🐰맠묘&묘맠 선입금🐱',
    item_price: 14000,
    item_date_start: '2023.11.21',
    item_date_end: '2023.12.05',
    item_view: 999999,
    user_avatar: '/mocks/user_avatar.png',
    user_name: '맠묘',
    user_id: 'markmyo',
  },
  {
    index: 2,
    item_image: '/mocks/goods_rabbit.png',
    item_label: '🐰맠묘&묘맠 선입금🐱',
    item_price: 14000,
    item_date_start: '2023.11.21',
    item_date_end: '2023.12.05',
    item_view: 999999,
    user_avatar: '/mocks/user_avatar.png',
    user_name: '맠묘',
    user_id: 'markmyo',
  },
  {
    index: 3,
    item_image: '/mocks/goods_rabbit.png',
    item_label: '🐰맠묘&묘맠 선입금🐱',
    item_price: 14000,
    item_date_start: '2023.11.21',
    item_date_end: '2023.12.05',
    item_view: 999999,
    user_avatar: '/mocks/user_avatar.png',
    user_name: '맠묘',
    user_id: 'markmyo',
  },
  {
    index: 4,
    item_image: '/mocks/goods_rabbit.png',
    item_label: '🐰맠묘&묘맠 선입금🐱',
    item_price: 14000,
    item_date_start: '2023.11.21',
    item_date_end: '2023.12.05',
    item_view: 999999,
    user_avatar: '/mocks/user_avatar.png',
    user_name: '맠묘',
    user_id: 'markmyo',
  },
  {
    index: 5,
    item_image: '/mocks/goods_rabbit.png',
    item_label: '🐰맠묘&묘맠 선입금🐱',
    item_price: 14000,
    item_date_start: '2023.11.21',
    item_date_end: '2023.12.05',
    item_view: 999999,
    user_avatar: '/mocks/user_avatar.png',
    user_name: '맠묘',
    user_id: 'markmyo',
  },
  {
    index: 6,
    item_image: '/mocks/goods_rabbit.png',
    item_label: '🐰맠묘&묘맠 선입금🐱',
    item_price: 14000,
    item_date_start: '2023.11.21',
    item_date_end: '2023.12.05',
    item_view: 999999,
    user_avatar: '/mocks/user_avatar.png',
    user_name: '맠묘',
    user_id: 'markmyo',
  },
  {
    index: 7,
    item_image: '/mocks/goods_rabbit.png',
    item_label: '🐰맠묘&묘맠 선입금🐱',
    item_price: 14000,
    item_date_start: '2023.11.21',
    item_date_end: '2023.12.05',
    item_view: 999999,
    user_avatar: '/mocks/user_avatar.png',
    user_name: '맠묘',
    user_id: 'markmyo',
  },
  {
    index: 8,
    item_image: '/mocks/goods_rabbit.png',
    item_label: '🐰맠묘&묘맠 선입금🐱',
    item_price: 14000,
    item_date_start: '2023.11.21',
    item_date_end: '2023.12.05',
    item_view: 999999,
    user_avatar: '/mocks/user_avatar.png',
    user_name: '맠묘',
    user_id: 'markmyo',
  },
  {
    index: 9,
    item_image: '/mocks/goods_rabbit.png',
    item_label: '🐰맠묘&묘맠 선입금🐱',
    item_price: 14000,
    item_date_start: '2023.11.21',
    item_date_end: '2023.12.05',
    item_view: 999999,
    user_avatar: '/mocks/user_avatar.png',
    user_name: '맠묘',
    user_id: 'markmyo',
  },
  {
    index: 10,
    item_image: '/mocks/goods_rabbit.png',
    item_label: '🐰맠묘&묘맠 선입금🐱',
    item_price: 14000,
    item_date_start: '2023.11.21',
    item_date_end: '2023.12.05',
    item_view: 999999,
    user_avatar: '/mocks/user_avatar.png',
    user_name: '맠묘',
    user_id: 'markmyo',
  },
  {
    index: 11,
    item_image: '/mocks/goods_rabbit.png',
    item_label: '🐰맠묘&묘맠 선입금🐱',
    item_price: 14000,
    item_date_start: '2023.11.21',
    item_date_end: '2023.12.05',
    item_view: 999999,
    user_avatar: '/mocks/user_avatar.png',
    user_name: '맠묘',
    user_id: 'markmyo',
  },
  {
    index: 12,
    item_image: '/mocks/goods_rabbit.png',
    item_label: '🐰맠묘&묘맠 선입금🐱',
    item_price: 14000,
    item_date_start: '2023.11.21',
    item_date_end: '2023.12.05',
    item_view: 999999,
    user_avatar: '/mocks/user_avatar.png',
    user_name: '맠묘',
    user_id: 'markmyo',
  },
  {
    index: 13,
    item_image: '/mocks/goods_rabbit.png',
    item_label: '🐰맠묘&묘맠 선입금🐱',
    item_price: 14000,
    item_date_start: '2023.11.21',
    item_date_end: '2023.12.05',
    item_view: 999999,
    user_avatar: '/mocks/user_avatar.png',
    user_name: '맠묘',
    user_id: 'markmyo',
  },
  {
    index: 14,
    item_image: '/mocks/goods_rabbit.png',
    item_label: '🐰맠묘&묘맠 선입금🐱',
    item_price: 14000,
    item_date_start: '2023.11.21',
    item_date_end: '2023.12.05',
    item_view: 999999,
    user_avatar: '/mocks/user_avatar.png',
    user_name: '맠묘',
    user_id: 'markmyo',
  },
  {
    index: 15,
    item_image: '/mocks/goods_rabbit.png',
    item_label: '🐰맠묘&묘맠 선입금🐱',
    item_price: 14000,
    item_date_start: '2023.11.21',
    item_date_end: '2023.12.05',
    item_view: 999999,
    user_avatar: '/mocks/user_avatar.png',
    user_name: '맠묘',
    user_id: 'markmyo',
  },
  {
    index: 16,
    item_image: '/mocks/goods_rabbit.png',
    item_label: '🐰맠묘&묘맠 선입금🐱',
    item_price: 14000,
    item_date_start: '2023.11.21',
    item_date_end: '2023.12.05',
    item_view: 999999,
    user_avatar: '/mocks/user_avatar.png',
    user_name: '맠묘',
    user_id: 'markmyo',
  },
  {
    index: 17,
    item_image: '/mocks/goods_rabbit.png',
    item_label: '🐰맠묘&묘맠 선입금🐱',
    item_price: 14000,
    item_date_start: '2023.11.21',
    item_date_end: '2023.12.05',
    item_view: 999999,
    user_avatar: '/mocks/user_avatar.png',
    user_name: '맠묘',
    user_id: 'markmyo',
  },
  {
    index: 18,
    item_image: '/mocks/goods_rabbit.png',
    item_label: '🐰맠묘&묘맠 선입금🐱',
    item_price: 14000,
    item_date_start: '2023.11.21',
    item_date_end: '2023.12.05',
    item_view: 999999,
    user_avatar: '/mocks/user_avatar.png',
    user_name: '맠묘',
    user_id: 'markmyo',
  },
  {
    index: 19,
    item_image: '/mocks/goods_rabbit.png',
    item_label: '🐰맠묘&묘맠 선입금🐱',
    item_price: 14000,
    item_date_start: '2023.11.21',
    item_date_end: '2023.12.05',
    item_view: 999999,
    user_avatar: '/mocks/user_avatar.png',
    user_name: '맠묘',
    user_id: 'markmyo',
  },
  {
    index: 20,
    item_image: '/mocks/goods_rabbit.png',
    item_label: '🐰맠묘&묘맠 선입금🐱',
    item_price: 14000,
    item_date_start: '2023.11.21',
    item_date_end: '2023.12.05',
    item_view: 999999,
    user_avatar: '/mocks/user_avatar.png',
    user_name: '맠묘',
    user_id: 'markmyo',
  },
  {
    index: 21,
    item_image: '/mocks/goods_rabbit.png',
    item_label: '🐰맠묘&묘맠 선입금🐱',
    item_price: 14000,
    item_date_start: '2023.11.21',
    item_date_end: '2023.12.05',
    item_view: 999999,
    user_avatar: '/mocks/user_avatar.png',
    user_name: '맠묘',
    user_id: 'markmyo',
  },
  {
    index: 22,
    item_image: '/mocks/goods_rabbit.png',
    item_label: '🐰맠묘&묘맠 선입금🐱',
    item_price: 14000,
    item_date_start: '2023.11.21',
    item_date_end: '2023.12.05',
    item_view: 999999,
    user_avatar: '/mocks/user_avatar.png',
    user_name: '맠묘',
    user_id: 'markmyo',
  },
  {
    index: 23,
    item_image: '/mocks/goods_rabbit.png',
    item_label: '🐰맠묘&묘맠 선입금🐱',
    item_price: 14000,
    item_date_start: '2023.11.21',
    item_date_end: '2023.12.05',
    item_view: 999999,
    user_avatar: '/mocks/user_avatar.png',
    user_name: '맠묘',
    user_id: 'markmyo',
  },
  {
    index: 24,
    item_image: '/mocks/goods_rabbit.png',
    item_label: '🐰맠묘&묘맠 선입금🐱',
    item_price: 14000,
    item_date_start: '2023.11.21',
    item_date_end: '2023.12.05',
    item_view: 999999,
    user_avatar: '/mocks/user_avatar.png',
    user_name: '맠묘',
    user_id: 'markmyo',
  },
  {
    index: 25,
    item_image: '/mocks/goods_rabbit.png',
    item_label: '🐰맠묘&묘맠 선입금🐱',
    item_price: 14000,
    item_date_start: '2023.11.21',
    item_date_end: '2023.12.05',
    item_view: 999999,
    user_avatar: '/mocks/user_avatar.png',
    user_name: '맠묘',
    user_id: 'markmyo',
  },
];

export default function Goods({ searchParams }: GoodsProps) {
  return (
    <div className="w-full">
      <section className="mb-9">
        <nav className="flex justify-center gap-5 mb-9">
          {categoryList.map(({ index, label, category, href }) => {
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
            {orderList.map(({ index, label, order, href }) => {
              return (
                <Button
                  size="sm"
                  variant="light"
                  radius="full"
                  key={index}
                  className="text-lg text-basic"
                >
                  {label}
                </Button>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-5">
          {idolList.map(({ index, label }) => (
            <Chip
              radius="sm"
              variant="bordered"
              className="text-highlight border-highlight"
              endContent={<IconCancel />}
              key={index}
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
            className="p-0 text-highlight border-highlight"
          >
            <IconAdd />
          </Button>
        </div>
      </section>

      <section className="grid grid-cols-5 gap-x-3 gap-y-9">
        {itemList.map(
          ({
            index,
            item_image,
            item_label,
            item_price,
            item_date_start,
            item_date_end,
            item_view,
            user_avatar,
            user_name,
            user_id,
          }) => (
            <Item
              key={index}
              item_image={item_image}
              item_label={item_label}
              item_price={item_price}
              item_date_start={item_date_start}
              item_date_end={item_date_end}
              item_view={item_view}
              user_avatar={user_avatar}
              user_name={user_name}
              user_id={user_id}
            />
          ),
        )}
      </section>
    </div>
  );
}
