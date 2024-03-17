import { Button } from '@nextui-org/react';
import Image from 'next/image';
import { ethnocentric } from '@/public/fonts/fonts';

export default function ArtistDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div>
      <Image
        src={`/mocks/artist/detail/artist_${id}_detail.png`}
        width={1280}
        height={640}
        alt={`아티스트 ${id} 대표 이미지`}
        className="w-[1280px] h-[640px] object-cover"
      />

      <section className="flex flex-col items-center -mt-[75px] gap-[10px] mb-[100px]">
        <Image
          src={`/mocks/artist/detail/artist_${id}_logo.png`}
          width={150}
          height={150}
          alt={`아티스트 ${id} 로고 이미지`}
          className="w-[150px] h-[150px] object-cover"
        />

        <p className="text-inactive">
          데뷔일{' '}
          <span className="text-xl font-semibold text-white ml-[10px]">
            D+173
          </span>
        </p>

        <Button
          variant="bordered"
          color="primary"
          className="w-[350px] h-[52px] text-white font-semibold"
        >
          팔로우
        </Button>
      </section>

      <section className="flex flex-col gap-[30px] w-[720px] mb-[100px]">
        <h2
          className={`${ethnocentric.className} text-4xl border-t-[10px] border-[#0A60FF] max-w-fit`}
        >
          About {id.toUpperCase()}
        </h2>

        <div className="text-xl">
          <p>
            RIIZE(라이즈)는 ‘Rise & Realize’를 더해 만든 이름으로, 함께 성장하고
            꿈을 실현해 나아가는 팀이라는 의미다.
          </p>

          <br />

          <p>
            각자의 개성을 지닌 일곱 명의 멤버가 하나의 팀으로서 쌓아가는
            리얼타임 오디세이(성장사)를 바탕으로, RIIZE만의 감정을 표현하는
            독자적 음악 스타일인 Emotional Pop을 선사한다.{' '}
          </p>

          <br />

          <p>
            RIIZE는 일상의 모든 경험에서 영감을 얻는 Emotional Pop Rookie가
            성장해, 세상 모두의 공감을 불러일으키는 Emotional Pop Artist로서의
            꿈을 실현하겠다는 포부를 가지고 있다.
          </p>
        </div>
      </section>

      <section>
        <h2
          className={`${ethnocentric.className} text-4xl border-t-[10px] border-[#0A60FF] max-w-fit`}
        >
          Member
        </h2>
      </section>
    </div>
  );
}
