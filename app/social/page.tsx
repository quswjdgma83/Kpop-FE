import { Category } from '@/components/common';
import SocialItem from '@/components/social';
import { SocialProps } from '@/types/social';

const categoryList = [
  {
    label: '전체',
    category: 'all',
  },
  {
    label: '거래',
    category: 'transaction',
  },
  {
    label: '오프라인만남',
    category: 'offline',
  },
  {
    label: '온라인만남',
    category: 'online',
  },
  {
    label: '콘서트',
    category: 'concert',
  },
  {
    label: '생일카페',
    category: 'birthday',
  },
  {
    label: '친목',
    category: 'amity',
  },
  {
    label: '봉사활동',
    category: 'volunteer',
  },
  {
    label: '기타',
    category: 'etc',
  },
];

export default function Social({ searchParams }: SocialProps) {
  return (
    <div>
      <section className="mb-9">
        <Category categoryList={categoryList} searchParams={searchParams} />
      </section>

      <section className="grid grid-cols-2 gap-x-7 gap-y-5">
        {Array.from(Array(20))
          .slice(0, 12)
          .map((v, index) => (
            <div className="hover:scale-105 transition-transform duration-300">
              <SocialItem id={index} />
            </div>
          ))}
      </section>
    </div>
  );
}
