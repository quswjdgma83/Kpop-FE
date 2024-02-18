'use client';

import Slider from 'react-slick';
import CircleItem from './CircleItem';

const artistItems = [
  {
    artistName: '방탄소년단',
    artistLogo: '/mocks/artist_bts.png',
  },
  {
    artistName: '엑소',
    artistLogo: '/mocks/artist_exo.png',
  },
  {
    artistName: '뉴진스',
    artistLogo: '/mocks/artist_newjeans.png',
  },
  {
    artistName: '르세라핌',
    artistLogo: '/mocks/artist_lesserafim.png',
  },
  {
    artistName: '아이브',
    artistLogo: '/mocks/artist_ive.png',
  },
  {
    artistName: 'NCT',
    artistLogo: '/mocks/artist_nct.png',
  },
];

export default function ArtistList() {
  const carouselSettings = {
    arrows: false,
    dots: false,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    variableWidth: true,
  };

  return (
    <Slider {...carouselSettings}>
      {artistItems.map(({ artistLogo, artistName }) => (
        <CircleItem logo={artistLogo} label={artistName} key={artistName} />
      ))}
    </Slider>
  );
}
