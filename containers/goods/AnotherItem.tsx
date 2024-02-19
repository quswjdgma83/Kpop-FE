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
}

export default function AnohterItem({
  item_id,
  item_image,
  item_label,
  item_price,
  artist_name,
  user_name,
  user_avatar,
}: AnotherItemProps) {
  return (
    <Link href="#">
      <Card className="w-[200px] h-[200px] relative" radius="sm" isHoverable>
        <Image
          src={item_image}
          width={200}
          height={200}
          alt={`${artist_name}의 굿즈 ${item_label} 이미지`}
          className="object-cover w-full h-full hover:-z-10"
        />

        <CardFooter className="absolute flex flex-col items-start text-white pt-28 bottom hover:bg-black hover:bg-opacity-50 ">
          <p className="text-lg font-bold text-highlight">
            {item_price.toLocaleString()}원
          </p>
          <p className="text-base font-semibold truncate w-[180px]">
            {item_label}
          </p>
          <div className="flex items-center gap-2">
            <Image
              src={user_avatar}
              width={22}
              height={22}
              alt={`${user_name}의 아바타 이미지`}
            />
            <span className="text-base font-semibold truncate w-[160px]">
              {user_name}
            </span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
