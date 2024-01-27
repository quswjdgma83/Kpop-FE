import { Button } from '@nextui-org/react';
import { IconArrowLeft } from '@/public/svgs';

export default function GoBackButton() {
  return (
    <Button
      startContent={<IconArrowLeft />}
      className="bg-transparent text-white text-base p-0"
    >
      뒤로가기
    </Button>
  );
}
