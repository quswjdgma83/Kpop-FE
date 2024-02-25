import Link from 'next/link';
import { Input, Button } from '@nextui-org/react';
import { IconSearch } from '@/public/svgs';

interface CategoryProps {
  categoryList: {
    label: string;
    category: string;
  }[];
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

export default function Category({
  categoryList,
  searchParams,
}: CategoryProps) {
  return (
    <div className="flex flex-col justify-center py-10 mb-8 bg-black gap-10">
      <Input
        size="sm"
        radius="none"
        variant="bordered"
        placeholder="다양한 굿즈들을 검색해보세요 !"
        endContent={<IconSearch />}
        className="h-9 w-[440px] p-0 mx-auto"
      />
      <nav className="flex justify-between px-4">
        {categoryList.map(({ label, category }) => {
          const borderColor =
            searchParams?.category === category
              ? 'border-highlight'
              : 'border-white';

          const textColor =
            searchParams?.category === category
              ? 'text-highlight'
              : 'text-white';

          return (
            <Button
              as={Link}
              href={`?category=${category}`}
              variant="bordered"
              radius="full"
              className={`${borderColor} ${textColor} text-base h-9`}
            >
              {label}
            </Button>
          );
        })}
      </nav>
    </div>
  );
}
