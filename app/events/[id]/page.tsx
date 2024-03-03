'use client';
import { useState } from 'react';

import Image from 'next/image';
import { KakaoMap } from '@/components/map/KakaoMap';
import { GoBackButton } from '@/components/common';
import { Button, Chip } from '@nextui-org/react';
import {
  IconFlag,
  IconFlash,
  IconHeart,
  IconInformation,
  IconLamp,
  IconSend,
} from '@/public/svgs';
import Link from 'next/link';
import { formatEventDates, formatTimeRange } from '@/utils/formater/format';

export default function EventsDetail() {
  const [isOpen, setIsOpen] = useState(false);
  const events = [
    '생일카페',
    '팝업스토어',
    '팬미팅',
    '팬싸인회',
    '전시회',
    '광고',
  ];
  const agencies = ['하이브', '에스엠', '스톤뮤직', '스타쉽', '플레디스'];
  const idol_list = ['방탄소년단', '블락비', '빅스', '비투비', '빅존'];

  const eventDetail = {
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
    count: 1,
    delYN: null,
    regId: 'cheon3924',
    regDt: '2024-02-12T18:52:04.630607',
    modId: null,
    modDt: '2024-02-12T18:52:04.630607',
    artistId: 1,
    agencyId: 1,
  };

  const handleToggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex w-full">
      <section className="flex pt-3.5 pl-3.5 pr-5 overflow-y-auto scrollbar-hide border-t border-b border-l border-highlight border-solid border-[1px] w-[376px] h-[1960px]">
        <div>
          <nav className="md-5">
            <GoBackButton />
          </nav>
          <div className="relative flex flex-col w-[346px] items-center mt-5">
            <Button
              className="absolute bg-transparent bottom-5 right-3"
              isIconOnly
            >
              <IconHeart />
            </Button>
            <Image
              src="/mocks/event_detail.png"
              alt="굿즈 이미지"
              width={340}
              height={400}
              className="rounded-[20px] mb-4"
            />
          </div>
          <div>
            <span className="text-2xl font-semibold text-highlight mb-2.5">
              {eventDetail.placeName}
            </span>
          </div>
          <div className="flex justify-between mb-6 text-2xl font-normal">
            <span>
              {formatEventDates(eventDetail.startDate, eventDetail.endDate)}
            </span>
            <span>{eventDetail.detailAddress}</span>
          </div>
          <div className="flex justify-between p-5 mb-5 text-xl font-normal border-white border-y">
            <div className="flex flex-col items-center pl-10">
              <Button
                as={Link}
                href="https://map.naver.com/p?c=15.00,0,0,0,dh"
                isIconOnly
                className="mb-4 bg-transparent "
              >
                <IconSend />
              </Button>
              <span className="font-semibold text-normal">경로</span>
            </div>
            <div className="w-2 border-r border-white h-50px"></div>
            <div className="flex flex-col items-center pr-10">
              <Button
                as={Link}
                href="https://map.naver.com/p?c=15.00,0,0,0,dh"
                isIconOnly
                className="mb-4 bg-transparent "
              >
                <IconFlash />
              </Button>
              <span className="font-semibold text-normal">원문</span>
            </div>
          </div>
          <div>
            <div
              className="grid grid-cols-2 pb-5 mb-5 font-semibold border-b border-white gap-y-5 text-normal"
              style={{ gridTemplateColumns: '40px auto' }}
            >
              <IconFlag />
              {eventDetail.streetAddress}
              <IconLamp />
              {formatTimeRange(eventDetail.startTime, eventDetail.endTime)}
              <IconInformation />
              {eventDetail.regId}
            </div>
            <div className="grid grid-cols-1 pb-5 mb-5 border-b gap-y-5 border-highlight">
              <div className="grid grid-cols-1 gap-y-3">
                <Chip
                  radius="full"
                  size="lg"
                  className="bg-eventTagBg text-highlight"
                >
                  <span className="font-bold">GIFT</span>
                </Chip>
                <p>
                  기본특전 : 종이컵 + 엽서 + 스티커팩 <br />
                  선착특전 : 뱃지 13일 선착순10명 / 14일 선착순 10명 / 15일
                  선착순 10명 / 16일 선착순 20명
                </p>
                <p className="text-highlight">
                  *모든 특전은 조시 소진될 수 있으며, 특전 디자인이 변동될 수
                  있습니다. <br />
                  *이벤트 음료 주문시에만 특전 수령 가능합니다.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-y-3">
                <Chip
                  radius="full"
                  size="lg"
                  className="bg-eventTagBg text-highlight"
                >
                  <span className="font-bold">HASHTAG EVENT</span>
                </Chip>
                <p>
                  #배달부가이렇게잘생겨도되나요 <br />
                  #배달B00오늘도 파이팅해야지
                </p>
                <p className="text-highlight">
                  해시태그와 함께 방문 후기를 올려주시면 추첨을 통해 소정의
                  선물을 드립니다.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-y-3">
                <Chip
                  radius="full"
                  size="lg"
                  className="bg-eventTagBg text-highlight"
                >
                  <span className="font-bold">LUCKY DRAW EVENT</span>
                </Chip>
                <p>
                  정확한 일정, 실사 및 특전은 추후 타래 공지를 참고해주세요.
                </p>
              </div>
            </div>
            <div>
              <ul className="pl-5 list-disc text-highlight">
                <li>주문은 1인 1메뉴 부탁드립니다.</li>
                <li>
                  영업시간 및 이용방식에 변동이 있을 수 있으니 방문하시는 당일에
                  공지 확인 후 방문해주세요.
                </li>
                <li>모든 특전은 조기 소진될 수 있습니다.</li>
                <li>모든 문의는 카페가 아닌 @jelimonmon으로 부탁드립니다.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="flex">
        <div className="w-[904px] relative">
          <main className="relative w-screen h-screen">
            <KakaoMap height="1960px" />
          </main>
        </div>
      </section>
    </div>
  );
}
