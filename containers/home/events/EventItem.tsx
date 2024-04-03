import Image from 'next/image';
import Link from 'next/link';
import { Card, CardFooter, Button } from '@nextui-org/react';
import { IconHeart, IconWish } from '@/public/svgs';
import { Views } from '@/components/common';
import axios from 'axios';
import { useEffect } from 'react';

export default function GoodsItem() {
  useEffect(() => {
    let a = axios.get('/place/list');
    console.log(a);
  }, []);
  return (
    <Link href="#" className="flex mr-4">
      <Card className="w-[400px] h-[530px] relative text-white rounded-3xl">
        <Image
          src="/mocks/event_nct.png"
          alt="굿즈 이미지"
          width={400}
          height={530}
          className="object-cover"
        />

        <CardFooter className="absolute bottom-0 h-[160px] flex justify-between bg-black">
          <div className="flex flex-col justify-between h-full text-xl">
            <div className="flex flex-col gap-3">
              <p className="font-bold text-highlight ">23.12.27(카페 대관)</p>
              <p className="font-semibold">📍디어트리 카페</p>
            </div>
            <p className="text-base">솔밭공원역 1번 출구</p>
          </div>

          <div className="flex flex-col items-center justify-center w-20 h-20 text-xl font-semibold text-black bg-white rounded-full">
            <p>서울시</p>
            <p>도봉구</p>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
