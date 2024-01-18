import Image from 'next/image';
import { Card, CardFooter, CardHeader, Button } from '@nextui-org/react';
import { IconEyeOpen, IconHeart } from '@/public/svgs';

interface ItemProps {
  item_image: string;
  item_label: string;
  item_price: number;
  item_date_start: string;
  item_date_end: string;
  item_view: number;
  user_avatar: string;
  user_name: string;
  user_id: string;
}

export default function Item({
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
    <Card
      className="w-[240px] h-[330px] relative"
      isPressable
      isFooterBlurred
      isBlurred
    >
      <CardHeader className="absolute top-0 z-10 flex justify-end">
        <IconHeart />
      </CardHeader>

      <Image
        src={item_image}
        alt="굿즈 이미지"
        width={240}
        height={330}
        className="object-cover w-full h-full"
      />

      <CardFooter className="absolute bottom-0 z-10 flex flex-col items-start gap-2 shadow-large bg-background/70 text-basic">
        <div className="flex flex-col items-start">
          <p className=" text-highlight">{item_price.toLocaleString()}원</p>
          <p>{item_label}</p>
        </div>

        <div>
          <p className="text-base">
            🗓️ {`${item_date_start}~${item_date_end}`}
          </p>

          <div className="flex items-center gap-1 ">
            <IconEyeOpen />
            <p className="text-base text-inactive">
              {item_view.toLocaleString()}
            </p>
          </div>
        </div>

        <div className="flex gap-2">
          <Image src={user_avatar} width={26} height={26} alt="유저 아바타" />
          <p className="text-xl">{user_name}</p>
          <p className="text-base text-inactive">@{user_id}</p>
        </div>
      </CardFooter>
    </Card>
  );
}
