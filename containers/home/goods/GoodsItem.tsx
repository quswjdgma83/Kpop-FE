import Image from 'next/image';
import Link from 'next/link';
import {
  Card,
  CardFooter,
  CardHeader,
  CardBody,
  Button,
} from '@nextui-org/react';
import { IconHeart, IconWish } from '@/public/svgs';
import { Views } from '@/components/common';
import { GoodsItemProps } from '@/types/goods';

export default function GoodsItem({
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
}: GoodsItemProps) {
  return (
    <Link href={`goods/${item_id}`} className="flex mr-4">
      <Card className="w-[400px] h-[530px] relative text-white rounded-3xl">
        <CardHeader className="absolute top-0">
          <Button
            className="bg-transparent absolute -top-[6px] -left-[3px]"
            isIconOnly
          >
            <IconWish />
          </Button>
        </CardHeader>

        <Image
          src={item_image}
          alt="굿즈 이미지"
          width={400}
          height={530}
          className="object-cover"
        />

        <CardBody className="absolute bottom-16 h-[160px] flex flex-col justify-between shadow-[inset_0_-160px_100px_0px_rgba(0,0,0,0.5)]">
          <div className="flex flex-col items-start text-xl font-bold">
            <p className="text-highlight">{item_price.toLocaleString()}원</p>
            <p className="line-clamp-2">{item_label}</p>
          </div>

          <div className="flex items-center justify-between w-full">
            <p className="text-base">
              🗓️ {`${item_date_start}~${item_date_end}`}
            </p>

            <Views viewNum={item_view} />
          </div>
        </CardBody>

        <CardFooter className="absolute bottom-0 flex items-center justify-between h-16 bg-black ">
          <div className="flex items-center justify-between w-full">
            <div className="flex gap-2">
              <Image
                src={user_avatar}
                width={26}
                height={26}
                alt="유저 아바타"
              />
              <p className="text-xl">{user_name}</p>
              <p className="text-base text-inactive">@{user_id}</p>
            </div>

            <Button className="bg-transparent " isIconOnly>
              <IconHeart />
            </Button>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
