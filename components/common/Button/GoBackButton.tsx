'use client';

import { useCallback } from 'react';
import { Button } from '@nextui-org/react';
import { IconArrowLeft } from '@/public/svgs';
import { GoBackButtonProps } from '@/types/common';

export default function GoBackButton({ content }: GoBackButtonProps) {
  const onClick = useCallback(() => {
    history.back();
  }, []);

  return (
    <Button
      startContent={<IconArrowLeft />}
      className="p-0 text-base text-white bg-transparent"
      onClick={onClick}
    >
      {content ? content : '뒤로가기'}
    </Button>
  );
}
