import { ethnocentric } from '@/public/fonts/fonts';
import { IconSearch } from '@/public/svgs';
import { Input } from '@nextui-org/react';
import ArtistListContainer from '@/containers/artists/ArtistListContainer';

export default function Artists() {
  return (
    <section className="flex flex-col items-center gap-8">
      <Input
        placeholder="좋아하는 아이돌의 다양한 정보를 검색해보세요!"
        radius="full"
        endContent={<IconSearch color="#006FEE" />}
        className="w-[500px] h-[60px] "
      />
      <h2 className={`${ethnocentric.className} text-4xl `}>Artist</h2>

      <ArtistListContainer />
    </section>
  );
}
