import { Button } from '@nextui-org/react';
import Image from 'next/image';

export default function ArtistDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div>
      <Image
        src={`/mocks/artist/detail/artist_${id}_detail.png`}
        width={1280}
        height={640}
        alt={`아티스트 ${id} 대표 이미지`}
        className="w-[1280px] h-[640px] object-cover"
      />

      <section className="flex flex-col items-center -mt-[75px] gap-[10px]">
        <Image
          src={`/mocks/artist/detail/artist_${id}_logo.png`}
          width={150}
          height={150}
          alt={`아티스트 ${id} 로고 이미지`}
          className="w-[150px] h-[150px] object-cover"
        />

        <p className="text-inactive">
          데뷔일{' '}
          <span className="text-xl font-semibold text-white ml-[10px]">
            D+173
          </span>
        </p>

        <Button
          variant="bordered"
          color="primary"
          className="w-[350px] h-[52px] text-white font-semibold"
        >
          팔로우
        </Button>
      </section>
    </div>
  );
}
