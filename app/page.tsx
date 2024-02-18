'use client';

import { Banner, AgencyList, ArtistList, GoodsItem } from '@/containers/home';
import Carousel from '@/containers/home/common/Carousel';
import { itemList } from './goods/page';

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
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

        <Carousel>
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
    </div>
  );
}
