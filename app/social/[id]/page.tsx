import Image from 'next/image';
import { Chip, Button } from '@nextui-org/react';
import { GoBackButton } from '@/components/common';
import { IconEnter, IconParticipant, IconShare } from '@/public/svgs';
import { SocialAnotherItem } from '@/containers/social';

export default function SocialDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div>
      <GoBackButton content="전체" />

      <div className="mt-[30px] flex gap-[30px] mb-[240px]">
        <Image
          src="/mocks/social/social_rize_1.png"
          width={527}
          height={200}
          alt="라이즈 이미지"
          className="object-cover w-[527px] h-[333px] rounded-xl"
        />

        <div className="flex flex-col justify-between w-[500px]">
          <div className="flex gap-[10px] items-center">
            <Chip
              variant="bordered"
              className="text-sm text-white bg-transparent border-white"
            >
              온라인
            </Chip>
            <IconParticipant />
            <span>100 / 999</span>
          </div>
          <h2 className="text-lg font-semibold">
            라이즈들아 진짜 내 통장 다 가져가라♥️
          </h2>
          <p className="font-medium line-clamp-4 h-[96px]">
            라이즈 좋아하는 사람들은 모두 여기로 입장해주세요 짝짝 같이
            생일카페나 팝업스토어 다녀요!
          </p>
          <p className="font-semibold text-inactive">기간제한없음</p>

          <div className="flex gap-5">
            <Button
              startContent={<IconEnter />}
              className="font-medium text-white bg-themeBlue w-[240px] h-[50px]"
            >
              입장하기
            </Button>
            <Button
              startContent={<IconShare />}
              variant="bordered"
              className="font-medium text-white bg-transparent border-themeBlue w-[240px] h-[50px]"
            >
              공유하기
            </Button>
          </div>
        </div>
      </div>

      <section className="flex flex-col gap-[50px]">
        <div className="flex flex-col gap-[30px]">
          <h3 className="text-3xl font-semibold">
            000님의 취향에 맞춰 추천드리는 소셜링은?
          </h3>

          <div className="flex gap-5">
            <SocialAnotherItem />
            <SocialAnotherItem />
            <SocialAnotherItem />
          </div>
        </div>

        <div className="flex flex-col gap-[30px]">
          <h3 className="text-3xl font-semibold">
            라이즈들 사이에서 가장 인기 많은 소셜링은?
          </h3>

          <div className="flex gap-5">
            <SocialAnotherItem />
            <SocialAnotherItem />
            <SocialAnotherItem />
          </div>
        </div>
      </section>
    </div>
  );
}
