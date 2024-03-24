'use client';
import { useState } from 'react';

import { Input } from '@nextui-org/react';
import EventCard from '@/containers/events/EventCard';
import { KakaoMap } from '@/components/map/KakaoMap';
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
      eventId: 2,
      eventCategoryCd: 201,
      eventName: 'K-팝 스타 팬미팅',
      placeName: '강남 컬처홀',
      address: '135-010',
      streetAddress: '서울특별시 강남구 테헤란로 52길 7',
      detailAddress: '지하 1층',
      content: '팬미팅 및 사인회 진행',
      notes: '코로나19 방역 수칙 준수',
      eventUrl: null,
      latitude: null,
      longitude: null,
      startDate: '2024-03-15',
      endDate: '2024-03-15',
      startTime: '13:00:00',
      endTime: '15:00:00',
      count: 150,
      delYN: null,
      regId: 'kpopfan123',
      regDt: '2024-02-20T10:30:00.123456',
      modId: null,
      modDt: '2024-02-20T10:30:00.123456',
      artistId: 2,
      agencyId: 2,
    },
    {
      eventId: 3,
      eventCategoryCd: 202,
      eventName: '아트 갤러리 전시회',
      placeName: '서울 아트 센터',
      address: '03035',
      streetAddress: '서울특별시 종로구 삼청동 45-1',
      detailAddress: '2층 갤러리',
      content: '현대 미술 전시',
      notes: '예약 필수',
      eventUrl: null,
      latitude: null,
      longitude: null,
      startDate: '2024-04-01',
      endDate: '2024-04-30',
      startTime: '10:00:00',
      endTime: '18:00:00',
      count: 200,
      delYN: null,
      regId: 'artlover456',
      regDt: '2024-03-01T09:00:00.654321',
      modId: null,
      modDt: '2024-03-01T09:00:00.654321',
      artistId: 3,
      agencyId: 3,
    },
    {
      eventId: 4,
      eventCategoryCd: 203,
      eventName: '전통 음악 공연',
      placeName: '국립극장',
      address: '04566',
      streetAddress: '서울특별시 중구 장충단로 59',
      detailAddress: '대극장',
      content: '국악 오케스트라 공연',
      notes: '무료 입장',
      eventUrl: null,
      latitude: null,
      longitude: null,
      startDate: '2024-05-05',
      endDate: '2024-05-05',
      startTime: '16:00:00',
      endTime: '18:00:00',
      count: 300,
      delYN: null,
      regId: 'musicenthusiast789',
      regDt: '2024-04-10T11:45:00.987654',
      modId: null,
      modDt: '2024-04-10T11:45:00.987654',
      artistId: 4,
      agencyId: 4,
    },
    {
      eventId: 5,
      eventCategoryCd: 204,
      eventName: '로컬 푸드 페스티벌',
      placeName: '한강공원',
      address: '03722',
      streetAddress: '서울특별시 마포구 상암동',
      detailAddress: '야외 공연장',
      content: '지역 농산물 및 음식 축제',
      notes: '가족 단위 환영',
      eventUrl: null,
      latitude: null,
      longitude: null,
      startDate: '2024-06-20',
      endDate: '2024-06-22',
      startTime: '11:00:00',
      endTime: '21:00:00',
      count: 500,
      delYN: null,
      regId: 'foodie1010',
      regDt: '2024-05-15T14:20:00.321098',
      modId: null,
      modDt: '2024-05-15T14:20:00.321098',
      artistId: 5,
      agencyId: 5,
    },
    {
      eventId: 6,
      eventCategoryCd: 205,
      eventName: '야외 영화 상영회',
      placeName: '서울시립미술관',
      address: '03144',
      streetAddress: '서울특별시 종로구 세종대로 110',
      detailAddress: '정원',
      content: '클래식 영화 밤',
      notes: '개인 담요 지참 권장',
      eventUrl: null,
      latitude: null,
      longitude: null,
      startDate: '2024-07-15',
      endDate: '2024-07-15',
      startTime: '19:00:00',
      endTime: '23:00:00',
      count: 250,
      delYN: null,
      regId: 'cinemalover1212',
      regDt: '2024-06-25T16:30:00.456789',
      modId: null,
      modDt: '2024-06-25T16:30:00.456789',
      artistId: 6,
      agencyId: 6,
    },
  ];

  const handleToggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex w-full">
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
            <div className="flex flex-row w-[376px] h-[48px] gap-4 mb-2">
              <Input
                key="default"
                type="text"
                className="h-[55px] w-[110px] py-0 text-sm text-basic mb-5 rounded-[8px] border border-solid border-[#5ed0ff]"
                classNames={{ inputWrapper: 'bg-background' }}
                color="default"
                size="sm"
                placeholder="년"
              />
              <Input
                type="text"
                className="h-[55px] w-[105px] py-0 text-sm text-basic mb-5 flex-shrink-0 rounded-[8px] bg-background/80 border border-solid border-[#5ed0ff]"
                classNames={{ inputWrapper: 'bg-background' }}
                size="sm"
                placeholder="월"
              />
              <Input
                type="text"
                className="h-[55px] w-[105px] py-0 text-sm text-basic mb-5 flex-shrink-0 rounded-[8px] bg-background/80 border border-solid border-[#5ed0ff]"
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
