import Link from 'next/link';
import Image from 'next/image';
import { Card, CardBody, CardFooter } from '@nextui-org/react';

interface AnotherItemProps {
  item_id: string;
  item_image: string;
  item_label: string;
  item_price: number;
  artist_name: string;
  user_name: string;
  user_avatar: string;
  size: number;
}

export default function AnotherItem({
  item_id,
  item_image,
  item_label,
  item_price,
  artist_name,
  user_name,
  user_avatar,
  size,
}: AnotherItemProps) {
  return (
    <Link href={`/goods/${item_id}`} className="flex group">
      <Card
        className={`w-[${size}px] h-[${size}px] relative`}
        radius="sm"
        isHoverable
      >
        <Image
          src={item_image}
          width={size}
          height={size}
          alt={`${artist_name}의 굿즈 ${item_label} 이미지`}
          priority
          className={`object-cover w-[${size}px] h-[${size}px]`}
        />

        <CardFooter className="absolute items-end hidden h-full text-white bg-black bg-opacity-50 group-hover:flex">
          <div>
            <p className="text-lg font-bold text-highlight">
              {item_price.toLocaleString()}원
            </p>
            <p
              className={`text-base font-semibold truncate w-[${size - 20}px]`}
            >
              {item_label}
            </p>
            <div className="flex items-center gap-2">
              <Image
                src={user_avatar}
                width={22}
                height={22}
                alt={`${user_name}의 아바타 이미지`}
              />
              <span
                className={`text-base font-semibold truncate w-[${size - 40}px]`}
              >
                {user_name}
              </span>
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
