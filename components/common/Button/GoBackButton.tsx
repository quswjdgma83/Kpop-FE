'use client';

import { useCallback } from 'react';
import { Button } from '@nextui-org/react';
import { IconArrowLeft } from '@/public/svgs';

export default function GoBackButton() {
  const onClick = useCallback(() => {
    history.back();
  }, []);

  return (
    <Button
      startContent={<IconArrowLeft />}
      className="bg-transparent text-white text-base p-0"
      onClick={onClick}
    >
      뒤로가기
    </Button>
  );
}
