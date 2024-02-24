'use client';

import {
  Banner,
  AgencyList,
  ArtistList,
  GoodsItem,
  SocialItem,
  EventItem,
  PopularArtist,
  PopularGoods,
} from '@/containers/home';
import Carousel from '@/containers/home/common/Carousel';

const item = {
  item_id: '1',
  item_image: '/mocks/goods_rabbit.png',
  item_label: '🐰맠묘&묘맠 선입금🐱',
  item_price: 14000,
  item_date_start: '2023.11.21',
  item_date_end: '2023.12.05',
  item_view: 999999,
  user_avatar: '/mocks/user_avatar.png',
  user_name: '맠묘',
  user_id: 'markmyo',
};

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <div>
        <Banner />
      </div>

      <div>
        <h2 className="font-semibold text-3xl">
          K-Goods에서는 모든 아티스트의 굿즈 정보를 수집하고 있어요
        </h2>
      </div>

      <div className="flex flex-col gap-5">
        <AgencyList />
        <ArtistList />
      </div>

      <div className="flex flex-col gap-7">
        <h2 className="font-semibold text-3xl">
          내가 선택한 아티스트 굿즈 정보를 확인해보세요!
        </h2>

        <Carousel height="530px">
          {Array.from(Array(20))
            .slice(0, 12)
            .map((v) => (
              <GoodsItem
                key={item.item_id}
                item_id={item.item_id}
                item_image={item.item_image}
                item_label={item.item_label}
                item_price={item.item_price}
                item_date_start={item.item_date_start}
                item_date_end={item.item_date_end}
                item_view={item.item_view}
                user_avatar={item.user_avatar}
                user_name={item.user_name}
                user_id={item.user_id}
              />
            ))}
        </Carousel>
      </div>

      <div className="flex flex-col gap-7">
        <h2 className="font-semibold text-3xl">
          지금 0000에서 가장 인기있는 NCT소모임!🔥
        </h2>

        <Carousel height="200px">
          <SocialItem />
          <SocialItem />
          <SocialItem />
          <SocialItem />
          <SocialItem />
          <SocialItem />
        </Carousel>
      </div>

      <div className="flex flex-col gap-7">
        <h2 className="font-semibold text-3xl">
          12월 1주차 NCT 팝업 및 이벤트 🎉
        </h2>

        <Carousel height="530px">
          <EventItem />
          <EventItem />
          <EventItem />
          <EventItem />
          <EventItem />
          <EventItem />
        </Carousel>
      </div>

      <div className="flex flex-col gap-7">
        <h2 className="font-semibold text-3xl">
          11월 한달 가장 인기 있는 아티스트🎙️
        </h2>

        <PopularArtist />
      </div>

      <div className="flex flex-col gap-7">
        <h2 className="font-semibold text-3xl">
          지금 가장 인기있는 NCT 굿즈🔥
        </h2>

        <PopularGoods />
      </div>

      <div className="flex flex-col gap-7">
        <h2 className="font-semibold text-3xl">
          방탄소년단의 12월 이벤트 및 팝업 정보{' '}
        </h2>

        <Banner />
      </div>
    </div>
  );
}
