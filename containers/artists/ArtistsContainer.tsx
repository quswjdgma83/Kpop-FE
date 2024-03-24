import Link from 'next/link';
import Image from 'next/image';
import { Card, CardFooter, Chip } from '@nextui-org/react';
import capitalize from '@/utils/capitalize';

interface ArtistsContainerProps {
  list: {
    imgSrc: string;
    artistName: string;
  }[];
}

export default function ArtistsContainer({ list }: ArtistsContainerProps) {
  const [
    artist1,
    artist2,
    artist3,
    artist4,
    artist5,
    artist6,
    artist7,
    artist8,
  ] = list;

  return (
    <section className="relative w-full h-[648px]">
      {artist1 && (
        <Link href={`/artists/${artist1.artistName}`} className="flex">
          <Card
            className={`w-[400px] h-[275px] absolute left-0 top-0 rounded-lg`}
          >
            <Image
              src={artist1.imgSrc}
              width={400}
              height={275}
              className={`w-[400px] h-[275px] object-cover `}
              alt={`${artist1.artistName} 이미지`}
            />
            <CardFooter className="absolute bottom-0">
              <Chip
                size="lg"
                className="px-4 text-xl font-bold text-white bg-black/60 h-11"
              >
                {capitalize(artist1.artistName)}
              </Chip>
            </CardFooter>
          </Card>
        </Link>
      )}
      {artist2 && (
        <Link href={`/artists/${artist2.artistName}`} className="flex">
          <Card
            className={`w-[280px] h-[219px] absolute left-[420px] top-0 rounded-lg`}
          >
            <Image
              src={artist2.imgSrc}
              width={280}
              height={219}
              className={`w-[280px] h-[219px] object-cover `}
              alt={`${artist2.artistName} 이미지`}
            />
            <CardFooter className="absolute bottom-0">
              <Chip
                size="lg"
                className="px-4 text-xl font-bold text-white bg-black/60 h-11"
              >
                {capitalize(artist2.artistName)}
              </Chip>
            </CardFooter>
          </Card>
        </Link>
      )}
      {artist3 && (
        <Link href={`/artists/${artist3.artistName}`} className="flex">
          <Card
            className={`w-[300px] h-[295px] absolute left-[720px] top-0 rounded-lg`}
          >
            <Image
              src={artist3.imgSrc}
              width={300}
              height={295}
              className={`w-[300px] h-[295px] object-cover `}
              alt={`${artist3.artistName} 이미지`}
            />
            <CardFooter className="absolute bottom-0">
              <Chip
                size="lg"
                className="px-4 text-xl font-bold text-white bg-black/60 h-11"
              >
                {capitalize(artist3.artistName)}
              </Chip>
            </CardFooter>
          </Card>
        </Link>
      )}
      {artist4 && (
        <Link href={`/artists/${artist4.artistName}`} className="flex">
          <Card
            className={`w-[240px] h-[295px] absolute right-0 top-0 rounded-lg`}
          >
            <Image
              src={artist4.imgSrc}
              width={240}
              height={295}
              className={`w-[240px] h-[295px] object-cover `}
              alt={`${artist4.artistName} 이미지`}
            />
            <CardFooter className="absolute bottom-0">
              <Chip
                size="lg"
                className="px-4 text-xl font-bold text-white bg-black/60 h-11"
              >
                {capitalize(artist4.artistName)}
              </Chip>
            </CardFooter>
          </Card>
        </Link>
      )}
      {artist5 && (
        <Link href={`/artists/${artist5.artistName}`} className="flex">
          <Card
            className={`w-[400px] h-[352px] absolute left-0 bottom-0 rounded-lg`}
          >
            <Image
              src={artist5.imgSrc}
              width={400}
              height={352}
              className={`w-[400px] h-[352px] object-cover `}
              alt={`${artist5.artistName} 이미지`}
            />
            <CardFooter className="absolute bottom-0">
              <Chip
                size="lg"
                className="px-4 text-xl font-bold text-white bg-black/60 h-11"
              >
                {capitalize(artist5.artistName)}
              </Chip>
            </CardFooter>
          </Card>
        </Link>
      )}
      {artist6 && (
        <Link href={`/artists/${artist6.artistName}`} className="flex">
          <Card
            className={`w-[280px] h-[408px] absolute left-[420px] bottom-0 rounded-lg`}
          >
            <Image
              src={artist6.imgSrc}
              width={280}
              height={408}
              className={`w-[280px] h-[408px] object-cover `}
              alt={`${artist6.artistName} 이미지`}
            />
            <CardFooter className="absolute bottom-0">
              <Chip
                size="lg"
                className="px-4 text-xl font-bold text-white bg-black/60 h-11"
              >
                {capitalize(artist6.artistName)}
              </Chip>
            </CardFooter>
          </Card>
        </Link>
      )}
      {artist7 && (
        <Link href={`/artists/${artist7.artistName}`} className="flex">
          <Card
            className={`w-[240px] h-[332px] absolute left-[720px] bottom-0 rounded-lg`}
          >
            <Image
              src={artist7.imgSrc}
              width={240}
              height={332}
              className={`w-[240px] h-[332px] object-cover `}
              alt={`${artist7.artistName} 이미지`}
            />
            <CardFooter className="absolute bottom-0">
              <Chip
                size="lg"
                className="px-4 text-xl font-bold text-white bg-black/60 h-11"
              >
                {capitalize(artist7.artistName)}
              </Chip>
            </CardFooter>
          </Card>
        </Link>
      )}
      {artist8 && (
        <Link href={`/artists/${artist8.artistName}`} className="flex">
          <Card
            className={`w-[300px] h-[332px] absolute right-0 bottom-0 rounded-lg`}
          >
            <Image
              src={artist8.imgSrc}
              width={300}
              height={332}
              className={`w-[300px] h-[332px] object-cover `}
              alt={`${artist8.artistName} 이미지`}
            />
            <CardFooter className="absolute bottom-0">
              <Chip
                size="lg"
                className="px-4 text-xl font-bold text-white bg-black/60 h-11"
              >
                {capitalize(artist8.artistName)}
              </Chip>
            </CardFooter>
          </Card>
        </Link>
      )}
    </section>
  );
}
