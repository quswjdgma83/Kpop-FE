import Link from 'next/link';
import { Button, Chip, Input } from '@nextui-org/react';
import { IconAdd, IconCancel, IconSearch } from '@/public/svgs';
import Item from '@/containers/goods/Item';

interface GoodsProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

const categoryList = [
  {
    label: '전체',
    category: 'all',
  },
  {
    label: '인형',
    category: 'doll',
  },
  {
    label: '키링',
    category: 'keyring',
  },
  {
    label: '응원봉',
    category: 'lightstick',
  },
  {
    label: '슬로건',
    category: 'slogan',
  },
  {
    label: '패션',
    category: 'fashion',
  },
  {
    label: '포토카드',
    category: 'photocard',
  },
  {
    label: '포토북',
    category: 'photobook',
  },
  {
    label: '컵홀더',
    category: 'cupholder',
  },
  {
    label: '텀블러',
    category: 'tumbler',
  },
  {
    label: '스티커',
    category: 'sticker',
  },
  {
    label: '잡화',
    category: 'stuff',
  },
  {
    label: '지류굿즈',
    category: 'paper',
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
    label: 'NCT',
  },
  {
    label: 'BTS',
  },
  {
    label: 'New Jeans',
  },
];

const itemList = [
  {
    item_id: '1',
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
    item_id: '2',
    item_image: '/mocks/goods_rabbit.png',
    item_label:
      '[[nct마크 6차 재진행]]크리스마스 후드마크 증명사진 라라라라라라라라',
    item_price: 14000,
    item_date_start: '2023.11.21',
    item_date_end: '2023.12.05',
    item_view: 999999,
    user_avatar: '/mocks/user_avatar.png',
    user_name: '맠묘',
    user_id: 'markmyo',
  },
  {
    item_id: '3',
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
    item_id: '4',
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
    item_id: '5',
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
    item_id: '6',
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
    item_id: '7',
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
    item_id: '8',
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
    item_id: '9',
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
    item_id: '10',
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
    item_id: '11',
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
    item_id: '12',
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
    item_id: '13',
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
    item_id: '14',
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
    item_id: '15',
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
    item_id: '16',
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
    item_id: '17',
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
    item_id: '18',
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
    item_id: '19',
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
    item_id: '20',
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
    item_id: '21',
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
    item_id: '22',
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
    item_id: '23',
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
    item_id: '24',
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
    item_id: '25',
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
    item_id: '26',
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
        <div className="flex flex-col gap-10 justify-center bg-black py-10 mb-8">
          <Input
            size="sm"
            radius="none"
            variant="bordered"
            placeholder="다양한 굿즈들을 검색해보세요 !"
            endContent={<IconSearch />}
            className="h-9 w-[440px] p-0 mx-auto"
          />
          <nav className="flex justify-between px-4">
            {categoryList.map(({ label, category }) => {
              const borderColor =
                searchParams?.category === category
                  ? 'border-highlight'
                  : 'border-white';

              const textColor =
                searchParams?.category === category
                  ? 'text-highlight'
                  : 'text-white';

              return (
                <Button
                  as={Link}
                  href={`?category=${category}`}
                  variant="bordered"
                  radius="full"
                  className={`${borderColor} ${textColor} text-base h-9`}
                >
                  {label}
                </Button>
              );
            })}
          </nav>
        </div>

        <div className="flex justify-between mb-5">
          <h1 className="text-xl">
            인형 카테고리에{' '}
            <span className="text-highlight">
              {itemList.length.toLocaleString()}개
            </span>
            의 상품이 등록되어 있습니다.
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
          {idolList.map(({ label }, index) => (
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

      <section className="grid grid-cols-5 gap-x-4 gap-y-9">
        {itemList.map(
          ({
            item_id,
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
              item_id={item_id}
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
