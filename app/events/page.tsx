'use client';
import { useState } from 'react';

import { AccordionMenu, AccordionMenu2, KakaoMap } from '@/components';
import { Input } from '@nextui-org/react';

export default function Events() {
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

  // [
  //   {
  //     placeId: 1,
  //     placeCategoryCode: 1,
  //     latitude: 128.4,
  //     longitude: 35.7,
  //     placeName: '뉴진스 팝업스토어',
  //     placeAddress: '서울시 강서구',
  //     placeImg: '뉴진스.img',
  //     placeContent: '뉴진스 팝업스토어 입니다.',
  //     placeFollowerCount: 0,
  //     startDate: '2024-02-01',
  //     endDate: '2024-03-31',
  //     artistId: 1,
  //     agencyId: 1,
  //   },
  //   {
  //     placeId: 2,
  //     placeCategoryCode: 1,
  //     latitude: 128.4,
  //     longitude: 35.7,
  //     placeName: '뉴진스 해린 생일카페',
  //     placeAddress: '서울시 양천구',
  //     placeImg: '뉴진스_해린.img',
  //     placeContent: '뉴진스 해린 생일카페 입니다.',
  //     placeFollowerCount: 0,
  //     startDate: '2024-02-01',
  //     endDate: '2024-03-31',
  //     artistId: 1,
  //     agencyId: 1,
  //   },
  // ];

  const handleToggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full flex">
      <section className="flex pt-3.5 pl-3.5 pr-5 border-t border-b border-l border-highlight border-solid border-[1px]">
        <div className="flex justify-center ">
          <div className="w-[376px] items-center ">
            <form action="">
              <Input
                type="text"
                className="h-[46px] py-0 text-sm text-basic w-[346px] mb-5 flex-shrink-0 rounded-[8px] bg-[#3B3B3B]"
                size="sm"
                variant="bordered"
                placeholder="검색어를 입력해 주세요"
              />
            </form>
            <AccordionMenu list={events} isOpen={isOpen} />
            <AccordionMenu list={agencies} isOpen={isOpen} />
            <AccordionMenu list={idol_list} isOpen={isOpen} />
            <button onClick={handleToggleAccordion}>
              {isOpen ? '닫기' : '열기'}
            </button>
          </div>
        </div>
      </section>
      <section className="flex">
        <div className="w-[904px] relative">
          <main className="relative w-screen h-screen">
            <KakaoMap />
          </main>
        </div>
      </section>
    </div>
  );
}
