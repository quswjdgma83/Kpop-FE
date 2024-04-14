import { CarouselProps } from '@/types/common';
import Slider from 'react-slick';

const carouselSettings = {
  // className: 'flex items-center flex-nowrap',
  variableWidth: true,
  infinite: false,
  speed: 500,
  slidesToScroll: 1,
};

export default function Carousel({ height, children }: CarouselProps) {
  return (
    <Slider {...carouselSettings} className={height}>
      {children}
    </Slider>
  );
}
