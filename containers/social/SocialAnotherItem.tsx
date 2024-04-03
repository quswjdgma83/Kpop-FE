'use client';

import { IconParticipant } from '@/public/svgs';
import { Card, CardHeader, CardFooter, Chip, Avatar } from '@nextui-org/react';
import Image from 'next/image';

const memberList = [
  {
    name: '쇼타로',
  },
  {
    name: '은석',
  },
  {
    name: '성찬',
  },
  {
    name: '원빈',
  },
  {
    name: '승한',
  },
  {
    name: '소희',
  },
  {
    name: '엔톤',
  },
];

export default function SocialAnotherItem() {
  return (
    <div className="w-[412px] flex flex-col gap-3">
      <Card className="w-[412px] h-[240px] overflow-hidden ">
        <CardHeader className="absolute">
          <div className="flex flex-wrap gap-[5px]">
            {memberList.map(({ name }) => (
              <Chip className="text-sm font-medium text-white bg-black/60">
                {'#' + name}
              </Chip>
            ))}
          </div>
        </CardHeader>
        <Image
          src="/mocks/social/social_rize_2.png"
          width={412}
          height={240}
          alt="라이즈 이미지"
          className="w-[412px] h-[240px] object-cover"
        />
        <CardFooter className="absolute bottom-0 text-lg font-semibold text-white">
          브리즈들 있나요
        </CardFooter>
      </Card>

      <div className="flex items-center justify-between">
        <div className="flex gap-[10px] items-center">
          <Avatar src="/mocks/user_avatar.png" className="w-6 h-6" />
          <p className="text-sm font-medium">졸리다</p>
        </div>

        <div className="flex items-center gap-1">
          <IconParticipant />
          <p className="text-sm font-medium">100/999</p>
        </div>
      </div>
    </div>
  );
}
