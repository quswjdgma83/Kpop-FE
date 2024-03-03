import Link from 'next/link';
import Image from 'next/image';
import { Card, CardFooter, Chip } from '@nextui-org/react';

interface ArtistItemProps {
  imgSrc: string;
  width: number;
  height: number;
  x: string;
  y: string;
  artistName: string;
}

export default function ArtistItem({
  imgSrc,
  width,
  height,
  x,
  y,
  artistName,
}: ArtistItemProps) {
  return (
    <Link href={`/artists/${artistName}`} className="flex h-[300px]">
      <Card
        className={`w-[${width}px] h-[${height}px] absolute ${x} ${y} rounded-lg`}
      >
        <Image
          src={imgSrc}
          width={width}
          height={height}
          className={`w-[${width}px] h-[${height}px] object-cover `}
          alt={`${artistName} 이미지`}
        />
        <CardFooter className="absolute bottom-0">
          <Chip
            size="lg"
            className="px-4 text-xl font-bold text-white bg-black/60 h-11"
          >
            {artistName}
          </Chip>
        </CardFooter>
      </Card>
    </Link>
  );
}
