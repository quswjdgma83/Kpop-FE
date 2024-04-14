import Image from 'next/image';
import Link from 'next/link';
import { Card, Avatar } from '@nextui-org/react';
import { IconParticipant } from '@/public/svgs';
import { SocialItemProps } from '@/types/social';

export default function SocialItem({ id, isMain }: SocialItemProps) {
  return (
    <Link href={`/social/${id}`} className={isMain ? 'block mr-6' : ''}>
      <Card
        className={` bg-black px-4 py-7 flex flex-row gap-20 items-center justify-between`}
      >
        <div className="flex flex-col h-full text-white gap-16">
          <p className="line-clamp-2">
            💚only 엔시티 드림💚 공식 포카 교환/양도/거래방
          </p>
          <div className="flex flex-col gap-2">
            <p className="flex items-center gap-2">
              <IconParticipant />
              100 / 999
            </p>
            <div className="flex items-center gap-3">
              <Avatar src="/mocks/social_bts.png" />
              <p>방장</p>
            </div>
          </div>
        </div>

        <Image
          src="/mocks/social_bts.png"
          width={150}
          height={170}
          alt="BTS 소셜 이미지"
          className="object-cover w-[150px] h-[170px] rounded-3xl"
        />
      </Card>
    </Link>
  );
}
