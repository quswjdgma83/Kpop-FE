import { RankItemProps } from '@/types/artist';
import { Chip } from '@nextui-org/react';

export default function RankItem({ rank, artist, change }: RankItemProps) {
  return (
    <div className="w-[330px] flex justify-between items-center">
      <div className="flex items-center truncate gap-5">
        <Chip
          variant="bordered"
          size="lg"
          className="text-white border-highlight bg-component"
        >
          &ensp;{rank}&ensp;
        </Chip>
        <p className="truncate">{artist}</p>
      </div>
      {change === 'new' ? (
        <p className="text-center w-11 ">NEW</p>
      ) : (
        <p className="text-center text-highlight w-11">&#9650; {change}</p>
      )}
    </div>
  );
}
