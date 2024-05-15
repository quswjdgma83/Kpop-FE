'use client';

// import { useGetArtistList } from '@/api/artist';
import ArtistsContainer from './ArtistsContainer';

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
    imgSrc: '/mocks/artist/artist_tws.png',
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

export default function ArtistListContainer() {
  // const { data, hasNextPage, isFetching, fetchNextPage, refetch } =
  //   useGetArtistList();

  return (
    <section className="flex flex-col w-full gap-5">
      {Array.from(Array(artistList.length / 8), (v, i) =>
        artistList.slice(i * 8, (i + 1) * 8),
      ).map((container) => (
        <ArtistsContainer list={container} />
      ))}
    </section>
  );
}
