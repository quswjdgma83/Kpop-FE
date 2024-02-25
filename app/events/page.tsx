'use client';
import { useState } from 'react';

import { Input } from '@nextui-org/react';
import EventCard from '@/containers/events/EventCard';
import { KakaoMap } from '@/components';
import IconUpArrow from '@/public/svgs/ArrowUp';
import IconDownArrow from '@/public/svgs/ArrowDown';
import AccordionMenu from '@/containers/events/AccordionMenu';

const Events = () => {
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

  const handleToggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full flex">
      <section className="flex pt-3.5 pl-3.5 pr-5 overflow-y-auto scrollbar-hide border-t border-b border-l border-highlight border-solid border-[1px] w-[376px] h-[2754px]">
        <div>
          <form action="">
            <Input
              type="text"
              className="h-[46px] py-0 text-sm text-basic w-[346px] mb-5 flex-shrink-0 rounded-[8px]"
              size="sm"
              variant="bordered"
              placeholder="검색어를 입력해 주세요"
            />
          </form>
          <AccordionMenu list={events} isOpen={isOpen} />
          <AccordionMenu list={agencies} isOpen={isOpen} />
          <AccordionMenu list={idol_list} isOpen={isOpen} />

          {isOpen && (
            <div className="flex flex-row w-[376px] h-[48px] gap-4 z-999">
              <Input
                key="default"
                type="text"
                className="h-[50px] w-[105px] py-0 text-sm text-basic mb-5 rounded-[8px] border border-solid border-[#5ed0ff]"
                classNames={{ inputWrapper: 'bg-background' }}
                color="default"
                size="sm"
                placeholder="년"
              />
              <Input
                type="text"
                className="h-[50px] w-[105px] py-0 text-sm text-basic mb-5 flex-shrink-0 rounded-[8px] bg-background/80 border border-solid border-[#5ed0ff]"
                classNames={{ inputWrapper: 'bg-background' }}
                size="sm"
                placeholder="월"
              />
              <Input
                type="text"
                className="h-[50px] w-[105px] py-0 text-sm text-basic mb-5 flex-shrink-0 rounded-[8px] bg-background/80 border border-solid border-[#5ed0ff]"
                classNames={{ inputWrapper: 'bg-background' }}
                size="sm"
                placeholder="일"
              />
            </div>
          )}
          <div className="flex flex-col w-[346px] items-center mt-5">
            <button onClick={handleToggleAccordion}>
              {isOpen ? (
                <div className="flex flex-col items-center mb-2">
                  <IconUpArrow />
                  접기
                </div>
              ) : (
                <div className="flex flex-col items-center mb-2">
                  <IconDownArrow />
                  자세히보기
                </div>
              )}
            </button>
          </div>
          <div>
            {event_list.map((event) => {
              // 여기에서 로그를 출력
              console.log(event);
              // 컴포넌트 반환
              return <EventCard key={event.eventId} {...event} />;
            })}
          </div>
        </div>
      </section>
      <section className="flex">
        <div className="w-[904px] relative">
          <main className="relative w-screen h-[2754px]">
            <KakaoMap height="2754px" />
          </main>
        </div>
      </section>
    </div>
  );
};

export default Events;
