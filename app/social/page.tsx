import { Category } from '@/components/common';

interface SocialProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

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
    </div>
  );
}
