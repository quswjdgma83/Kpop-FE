import Slider from 'react-slick';
import AnotherItem from '@/components/goods';

const item = {
  item_id: '1',
  item_image: '/mocks/goods_bts.png',
  item_label: '럽뷔데이 시애틀에스프레소 통판',
  item_description:
    '시애틀 에스프레소에서 진행하는 럽뷔데이 통판폼이예요~\n통판으로는 카드홀더 세트만 진행합니다.토키털 메탈키링은 핸드 메이드로 작업해서 수량이 많지 않아 카페에서만 구매 가능하세요..',
  item_category: '지류굿즈',
  item_price: 9999999,
  item_date_start: '2023.11.21',
  item_date_end: '2023.12.05',
  item_view: 999999,
  artist_name: '방탄소년단',
  artist_agency: '하이브',
  user_avatar: '/mocks/user_avatar.png',
  user_name: '맠묘',
  user_id: 'markmyo',
};

export default function PopularGoods() {
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
    <div className="flex flex-col gap-10">
      <Slider {...carouselSettings}>
        {Array.from(Array(20))
          .slice(0, 12)
          .map((v) => (
            <div className="pr-6">
              <AnotherItem
                item_id={item.item_id}
                item_image={item.item_image}
                item_label={item.item_label}
                item_price={item.item_price}
                artist_name={item.artist_name}
                user_avatar={item.user_avatar}
                user_name={item.user_name}
                size={350}
              />
            </div>
          ))}
      </Slider>

      <Slider {...carouselSettings}>
        {Array.from(Array(20))
          .slice(0, 12)
          .map((v) => (
            <div className="pr-6">
              <AnotherItem
                item_id={item.item_id}
                item_image={item.item_image}
                item_label={item.item_label}
                item_price={item.item_price}
                artist_name={item.artist_name}
                user_avatar={item.user_avatar}
                user_name={item.user_name}
                size={350}
              />
            </div>
          ))}
      </Slider>
    </div>
  );
}
