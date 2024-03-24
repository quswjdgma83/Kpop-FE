'use client';

import { Banner } from '@/containers/home';
import Image from 'next/image';
import { Button } from '@nextui-org/react';
import IconEdit from '@/public/svgs/Edit';
import { Item } from '@/containers/goods';
import { useRef } from 'react';
import SocialItem from '@/components/social';
import EventCard from '@/containers/events/EventCard';

const itemList = [
  {
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
  },
  {
    item_id: '2',
    item_image: '/mocks/goods_rabbit.png',
    item_label:
      '[[nct마크 6차 재진행]]크리스마스 후드마크 증명사진 라라라라라라라라',
    item_price: 14000,
    item_date_start: '2023.11.21',
    item_date_end: '2023.12.05',
    item_view: 999999,
    user_avatar: '/mocks/user_avatar.png',
    user_name: '맠묘',
    user_id: 'markmyo',
  },
  {
    item_id: '3',
    item_image: '/mocks/goods_rabbit.png',
    item_label: '🐰맠묘&묘맠 선입금🐱',
    item_price: 14000,
    item_date_start: '2023.11.21',
    item_date_end: '2023.12.05',
    item_view: 999999,
    user_avatar: '/mocks/user_avatar.png',
    user_name: '맠묘',
    user_id: 'markmyo',
  },
  {
    item_id: '4',
    item_image: '/mocks/goods_rabbit.png',
    item_label: '🐰맠묘&묘맠 선입금🐱',
    item_price: 14000,
    item_date_start: '2023.11.21',
    item_date_end: '2023.12.05',
    item_view: 999999,
    user_avatar: '/mocks/user_avatar.png',
    user_name: '맠묘',
    user_id: 'markmyo',
  },
  {
    item_id: '5',
    item_image: '/mocks/goods_rabbit.png',
    item_label: '🐰맠묘&묘맠 선입금🐱',
    item_price: 14000,
    item_date_start: '2023.11.21',
    item_date_end: '2023.12.05',
    item_view: 999999,
    user_avatar: '/mocks/user_avatar.png',
    user_name: '맠묘',
    user_id: 'markmyo',
  },
  {
    item_id: '6',
    item_image: '/mocks/goods_rabbit.png',
    item_label: '🐰맠묘&묘맠 선입금🐱',
    item_price: 14000,
    item_date_start: '2023.11.21',
    item_date_end: '2023.12.05',
    item_view: 999999,
    user_avatar: '/mocks/user_avatar.png',
    user_name: '맠묘',
    user_id: 'markmyo',
  },
  {
    item_id: '7',
    item_image: '/mocks/goods_rabbit.png',
    item_label: '🐰맠묘&묘맠 선입금🐱',
    item_price: 14000,
    item_date_start: '2023.11.21',
    item_date_end: '2023.12.05',
    item_view: 999999,
    user_avatar: '/mocks/user_avatar.png',
    user_name: '맠묘',
    user_id: 'markmyo',
  },
  {
    item_id: '8',
    item_image: '/mocks/goods_rabbit.png',
    item_label: '🐰맠묘&묘맠 선입금🐱',
    item_price: 14000,
    item_date_start: '2023.11.21',
    item_date_end: '2023.12.05',
    item_view: 999999,
    user_avatar: '/mocks/user_avatar.png',
    user_name: '맠묘',
    user_id: 'markmyo',
  },
  {
    item_id: '9',
    item_image: '/mocks/goods_rabbit.png',
    item_label: '🐰맠묘&묘맠 선입금🐱',
    item_price: 14000,
    item_date_start: '2023.11.21',
    item_date_end: '2023.12.05',
    item_view: 999999,
    user_avatar: '/mocks/user_avatar.png',
    user_name: '맠묘',
    user_id: 'markmyo',
  },
  {
    item_id: '10',
    item_image: '/mocks/goods_rabbit.png',
    item_label: '🐰맠묘&묘맠 선입금🐱',
    item_price: 14000,
    item_date_start: '2023.11.21',
    item_date_end: '2023.12.05',
    item_view: 999999,
    user_avatar: '/mocks/user_avatar.png',
    user_name: '맠묘',
    user_id: 'markmyo',
  },
  {
    item_id: '11',
    item_image: '/mocks/goods_rabbit.png',
    item_label: '🐰맠묘&묘맠 선입금🐱',
    item_price: 14000,
    item_date_start: '2023.11.21',
    item_date_end: '2023.12.05',
    item_view: 999999,
    user_avatar: '/mocks/user_avatar.png',
    user_name: '맠묘',
    user_id: 'markmyo',
  },
  {
    item_id: '12',
    item_image: '/mocks/goods_rabbit.png',
    item_label: '🐰맠묘&묘맠 선입금🐱',
    item_price: 14000,
    item_date_start: '2023.11.21',
    item_date_end: '2023.12.05',
    item_view: 999999,
    user_avatar: '/mocks/user_avatar.png',
    user_name: '맠묘',
    user_id: 'markmyo',
  },
  {
    item_id: '13',
    item_image: '/mocks/goods_rabbit.png',
    item_label: '🐰맠묘&묘맠 선입금🐱',
    item_price: 14000,
    item_date_start: '2023.11.21',
    item_date_end: '2023.12.05',
    item_view: 999999,
    user_avatar: '/mocks/user_avatar.png',
    user_name: '맠묘',
    user_id: 'markmyo',
  },
];

const event_list = [
  {
    eventId: 1,
    eventCategoryCd: 200,
    eventName: '뉴진스 팝업스토어',
    placeName: '스튜디오미개척지',
    address: '02711',
    streetAddress: '서울특별시 성북구 보국문로18길 6',
    detailAddress: '1층, 2층',
    content: '뉴진스 싸인 포토카드 선착순 100명',
    notes: '이용시간이 변경될 수 있습니다.',
    eventUrl: null,
    latitude: null,
    longitude: null,
    startDate: '2024-02-01',
    endDate: '2024-03-31',
    startTime: '11:00:00',
    endTime: '18:00:00',
    count: 0,
    delYN: null,
    regId: 'cheon3924',
    regDt: '2024-02-12T18:52:04.630607',
    modId: null,
    modDt: '2024-02-12T18:52:04.630607',
    artistId: 1,
    agencyId: 1,
  },
  {
    eventId: 2,
    eventCategoryCd: 300,
    eventName: '르세라핌 팬미팅',
    placeName: '홍대입구역 9번출구',
    address: '04066',
    streetAddress: '서울특별시 마포구 와우산로 94',
    detailAddress: null,
    content: '기본 특전 : 엽서+스티커 선착순 100명',
    notes: '시간 맞춰서 입장 부탁드립니다.',
    eventUrl: null,
    latitude: null,
    longitude: null,
    startDate: '2024-02-01',
    endDate: '2024-02-01',
    startTime: '11:00:00',
    endTime: '18:00:00',
    count: 0,
    delYN: null,
    regId: 'cheon3924',
    regDt: '2024-02-12T18:56:22.8181',
    modId: null,
    modDt: '2024-02-12T18:56:22.8181',
    artistId: 2,
    agencyId: 2,
  },
];

export default function MyPage() {
  const goodsRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  const eventRef = useRef<HTMLDivElement>(null);

  //수평스크롤링 구현
  const handleWheelGoods = (e: React.WheelEvent) => {
    if (!goodsRef.current) return;
    e.preventDefault();
    goodsRef.current.scrollLeft += e.deltaY;
  };

  const handleWheelSocial = (e: React.WheelEvent) => {
    if (!socialRef.current) return;
    e.preventDefault();
    socialRef.current.scrollLeft += e.deltaY;
  };

  const handleWheelEvent = (e: React.WheelEvent) => {
    if (!eventRef.current) return;
    e.preventDefault();
    eventRef.current.scrollLeft += e.deltaY;
  };

  return (
    <div>
      <div>
        <Banner />
      </div>
      <div className="flex items-center gap-10 mt-7">
        <Image
          src="/mocks/mypage_user.png"
          alt="굿즈 이미지"
          width={150}
          height={150}
          className="object-cover"
        />
        <div className="flex flex-col gap-3">
          <Button
            variant="bordered"
            className="w-[345px] h-[50px] border-highlight text-white rounded-lg font-medium text-base"
          >
            닉네임: 방탄소년단짱짱짱
          </Button>
          <Button
            className="w-[345px] h-[50px] bg-highlight text-white rounded-lg font-medium text-base"
            startContent={<IconEdit />}
          >
            프로필 편집하기
          </Button>
        </div>
        <div className="flex items-center p-5 text-xl font-normal border-solid border-2 rounded-lg border-highlight w-[700px] h-[120px]">
          <div className="flex flex-col items-center pr-20 pl-20">
            <span className="font-semibold text-normal">999</span>
            <span className="font-semibold text-normal">팔로워</span>
          </div>
          <div className="w-2 border-r border-white h-[50px]"></div>
          <div className="flex flex-col items-center pr-20 pl-20">
            <span className="font-semibold text-normal">999</span>
            <span className="font-semibold text-normal">팔로잉</span>
          </div>
          <div className="w-2 border-r border-white h-[50px]"></div>
          <div className="flex flex-col items-center pr-20 pl-20">
            <span className="font-semibold text-normal">999</span>
            <span className="font-semibold text-normal">좋아요</span>
          </div>
        </div>
      </div>
      <p className="font-semibold text-[22px] mt-20">내가 좋아요한 굿즈</p>
      <section
        ref={goodsRef}
        className="flex overflow-x-auto gap-x-4 gap-y-9 p-5 scrollbar-hide"
        onWheel={handleWheelGoods}
      >
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
            <Item
              key={item_id} // 고유 key prop 추가
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
      </section>
      <p className="font-semibold text-[22px] mt-20">내가 좋아요한 소셜링</p>
      <section
        ref={socialRef}
        className="flex overflow-x-auto gap-x-7 gap-y-5 scrollbar-hide"
        onWheel={handleWheelSocial}
      >
        {Array.from(Array(20))
          .slice(0, 12)
          .map((v, index) => (
            <div className="min-w-[530px] min-h-[200px]">
              <SocialItem id={index} />
            </div>
          ))}
      </section>
      <p className="font-semibold text-[22px] mt-20">내가 좋아요한 이벤트</p>
      <section
        ref={eventRef}
        className="flex overflow-x-auto gap-x-4 gap-y-9 p-5 scrollbar-hide"
        onWheel={handleWheelEvent}
      >
        {event_list.map((event) => {
          return <EventCard key={event.eventId} {...event} />;
        })}
      </section>
    </div>
  );
}
