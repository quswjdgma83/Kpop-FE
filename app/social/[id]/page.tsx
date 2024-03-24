import Image from 'next/image';
import { GoBackButton } from '@/components/common';

export default function SocialDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div>
      <GoBackButton content="전체" />
      <Image
        src="/mocks/social/social_rize.png"
        width={527}
        height={200}
        alt="라이즈 이미지"
        className="object-cover w-[527px] h-[333px]"
      />
    </div>
  );
}
