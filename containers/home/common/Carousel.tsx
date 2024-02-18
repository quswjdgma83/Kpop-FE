import Slider from 'react-slick';

interface CarouselProps {
  height: string;
  children: React.ReactNode;
}

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
