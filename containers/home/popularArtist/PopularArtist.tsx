import Image from 'next/image';
import { Chip } from '@nextui-org/react';
import RankItem from './RankItem';

const rankItems = [
  {
    rank: 2,
    artist: 'BTS',
    change: 10,
  },
  {
    rank: 3,
    artist: 'NEWJEANS',
    change: 'new',
  },
  {
    rank: 4,
    artist: 'RIZE',
    change: 'new',
  },
  {
    rank: 5,
    artist: 'LE SSERAFIM',
    change: 10,
  },
  {
    rank: 6,
    artist: 'THE BOYZ',
    change: 'new',
  },
  {
    rank: 7,
    artist: 'IVE',
    change: 'new',
  },
];

export default function PopularArtist() {
  return (
    <section className="flex items-center justify-between">
      <div className="flex gap-8">
        <Image
          src="/mocks/popular_artist_nct.png"
          width={230}
          height={230}
          alt="인기 있는 아티스트 1위 이미지"
          className="w-[230px] h-[230px] object-cover rounded-2xl"
        />

        <div className="flex flex-col justify-center gap-7">
          <Chip
            variant="bordered"
            size="lg"
            className="text-white border-highlight bg-component"
          >
            1위
          </Chip>
          <div className="flex flex-col gap-1 items-center">
            <p className="text-xl font-semibold">NCT</p>
            <p className="text-highlight">&#9650; 30</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 grid-rows-3 grid-flow-col w-[840px] gap-x-[130px] gap-y-5">
        {rankItems.map((item) => (
          <RankItem key={item.rank} {...item} />
        ))}
      </div>
    </section>
  );
}
