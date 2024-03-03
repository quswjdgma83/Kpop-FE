import { ethnocentric } from '@/public/fonts/fonts';
import { IconSearch } from '@/public/svgs';
import { Input } from '@nextui-org/react';
import ArtistsContainer from '@/containers/artists';

const artistList = [
  {
    imgSrc: '/mocks/artist/artist_rize.png',
    artistName: 'rize',
  },
  {
    imgSrc: '/mocks/artist/artist_plave.png',
    artistName: 'plave',
  },
  {
    imgSrc: '/mocks/artist/artist_bts.png',
    artistName: 'bts',
  },
  {
    imgSrc: '/mocks/artist/artist_TWS.png',
    artistName: 'tws',
  },
  {
    imgSrc: '/mocks/artist/artist_aespa.png',
    artistName: 'aespa',
  },
  {
    imgSrc: '/mocks/artist/artist_redvelvet.png',
    artistName: 'red_velvet',
  },
  {
    imgSrc: '/mocks/artist/artist_boynextdoor.png',
    artistName: 'boynextdoor',
  },
  {
    imgSrc: '/mocks/artist/artist_tomorrowxtomorrow.png',
    artistName: 'tomorrow_x_tomorrow',
  },
  {
    imgSrc: '/mocks/artist/artist_theboyz.png',
    artistName: 'the_boyz',
  },
  {
    imgSrc: '/mocks/artist/artist_itzy.png',
    artistName: 'itzy',
  },
  {
    imgSrc: '/mocks/artist/artist_seventeen.png',
    artistName: 'seventeen',
  },
  {
    imgSrc: '/mocks/artist/artist_lesserafim.png',
    artistName: 'le_sserafim',
  },
  {
    imgSrc: '/mocks/artist/artist_exo.png',
    artistName: 'exp',
  },
  {
    imgSrc: '/mocks/artist/artist_newjeans.png',
    artistName: 'new_jeans',
  },
  {
    imgSrc: '/mocks/artist/artist_qwer.png',
    artistName: 'qwer',
  },
  {
    imgSrc: '/mocks/artist/artist_ohmygirl.png',
    artistName: 'oh_my_girl',
  },
  {
    imgSrc: '/mocks/artist/artist_enhypen.png',
    artistName: 'enhypen',
  },
  {
    imgSrc: '/mocks/artist/artist_monstax.png',
    artistName: 'monsta_x',
  },
  {
    imgSrc: '/mocks/artist/artist_stayc.png',
    artistName: 'STAY C',
  },
  {
    imgSrc: '/mocks/artist/artist_fromis9.png',
    artistName: 'fromis_9',
  },
  {
    imgSrc: '/mocks/artist/artist_blackpink.png',
    artistName: 'blackpink',
  },
  {
    imgSrc: '/mocks/artist/artist_zico.png',
    artistName: 'zico',
  },
  {
    imgSrc: '/mocks/artist/artist_chuu.png',
    artistName: 'chuu',
  },
  {
    imgSrc: '/mocks/artist/artist_kwoneunbi.png',
    artistName: 'kwon_eun_bi',
  },
];

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

      {Array.from(Array(artistList.length / 8), (v, i) =>
        artistList.slice(i * 8, (i + 1) * 8),
      ).map((container) => (
        <ArtistsContainer list={container} />
      ))}
    </section>
  );
}
