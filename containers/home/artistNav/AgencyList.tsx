'use client';

import Slider from 'react-slick';
import CircleItem from './CircleItem';

const agencyItems = [
  {
    agencyName: 'HYBE',
    agencyLogo: '/mocks/agency_hybe.png',
  },
  {
    agencyName: 'JYP',
    agencyLogo: '/mocks/agency_jyp.png',
  },
  {
    agencyName: 'SM',
    agencyLogo: '/mocks/agency_sm.png',
  },
  {
    agencyName: 'YG',
    agencyLogo: '/mocks/agency_yg.png',
  },
  {
    agencyName: 'CUBE',
    agencyLogo: '/mocks/agency_cube.png',
  },
  {
    agencyName: 'STARSHIP',
    agencyLogo: '/mocks/agency_starship.png',
  },
  {
    agencyName: 'PLEDIS',
    agencyLogo: '/mocks/agency_pledis.png',
  },
];

export default function AgencyList() {
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
      {agencyItems.map(({ agencyLogo, agencyName }) => (
        <CircleItem logo={agencyLogo} label={agencyName} key={agencyName} />
      ))}
    </Slider>
  );
}
