import Image from 'next/image';
import Link from 'next/link';
import { Card, CardFooter, CardHeader, Button } from '@nextui-org/react';
import { IconHeart, IconWish } from '@/public/svgs';
import { Views } from '@/components/common';
import { ItemProps } from '@/types/goods';

export default function Item({
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
}: ItemProps) {
  return (
    <Link href={`goods/${item_id}`}>
      <Card className="w-[240px] h-[350px] relative text-white">
        <CardHeader className="absolute top-0">
          <Button
            className="bg-transparent absolute -top-[6px] -left-[3px]"
            isIconOnly
          >
            <IconWish />
          </Button>
          <Button className="absolute top-0 right-0 bg-transparent" isIconOnly>
            <IconHeart />
          </Button>
        </CardHeader>

        <Image
          src={item_image}
          alt="굿즈 이미지"
          width={240}
          height={350}
          className="object-cover"
        />

        <CardFooter className="absolute bottom-0 h-[190px] flex flex-col items-start justify-between gap-2 shadow-large bg-black ">
          <div className="flex flex-col items-start">
            <p className="text-highlight">{item_price.toLocaleString()}원</p>
            <p className="line-clamp-2">{item_label}</p>
          </div>

          <div>
            <p className="text-base">
              🗓️ {`${item_date_start}~${item_date_end}`}
            </p>

            <Views viewNum={item_view} />
          </div>

          <div className="flex gap-2">
            <Image src={user_avatar} width={26} height={26} alt="유저 아바타" />
            <p className="text-xl">{user_name}</p>
            <p className="text-base text-inactive">@{user_id}</p>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
