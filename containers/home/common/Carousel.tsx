import Slider from 'react-slick';

const carouselSettings = {
  // className: 'flex items-center flex-nowrap',
  variableWidth: true,
  infinite: false,
  speed: 500,
  slidesToScroll: 1,
};

export default function Carousel({ children }: { children: React.ReactNode }) {
  return (
    <Slider {...carouselSettings} className="h-[530px]">
      {children}
    </Slider>
  );
}
