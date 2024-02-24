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
import { itemList } from './goods/page';

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
          {itemList.map(
            ({
              item_id,
              item_image,
              item_label,
              item_price,
              item_date_start,
              item_date_end,
              item_view,
              user_avatar,
              user_name,
              user_id,
            }) => (
              <GoodsItem
                item_id={item_id}
                item_image={item_image}
                item_label={item_label}
                item_price={item_price}
                item_date_start={item_date_start}
                item_date_end={item_date_end}
                item_view={item_view}
                user_avatar={user_avatar}
                user_name={user_name}
                user_id={user_id}
              />
            ),
          )}
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
    </div>
  );
}
