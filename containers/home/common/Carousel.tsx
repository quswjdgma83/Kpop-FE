import Slider from 'react-slick';

const carouselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Carousel({ children }: { children: React.ReactNode }) {
  return <Slider {...carouselSettings}>{children}</Slider>;
}
