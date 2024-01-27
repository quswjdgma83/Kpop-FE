import Image from 'next/image';
import { Chip, Button } from '@nextui-org/react';
import { GoBackButton } from '@/components/common';

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

export default function GoodsDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div>
      <nav className="my-8">
        <GoBackButton />
      </nav>

      <div className="flex gap-8">
        <Image
          src={item.item_image}
          width={500}
          height={415}
          alt={`굿즈 ${item.item_label} 이미지`}
          className="rounded-2xl object-cover w-[500px] h-[415px]"
        />

        <section className="w-full flex flex-col justify-between">
          <div className="flex flex-col gap-5">
            <div className="flex gap-12">
              <Chip variant="bordered" className="text-white">
                {item.item_category}
              </Chip>
              <p>{`${item.artist_name} / ${item.artist_agency}`}</p>
            </div>
            <Chip color="warning" size="sm">
              whichform
            </Chip>
            <p className="font-semibold text-xl w-[450px] truncate">
              {item.item_label}
            </p>
            <p className="w-[450px] line-clamp-3">{item.item_description}</p>
            <p className="text-highlight text-xl">
              {item.item_price.toLocaleString()}원
            </p>
            <p>
              {item.item_date_start}~{item.item_date_end}
            </p>
          </div>

          <div className="flex gap-6">
            <Button className="w-60 h-[50px] bg-button text-white rounded-lg font-medium text-base">
              구매하러 가기
            </Button>
            <Button
              variant="bordered"
              className="w-60 h-[50px] border-button text-white rounded-lg font-medium text-base"
            >
              좋아요
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
