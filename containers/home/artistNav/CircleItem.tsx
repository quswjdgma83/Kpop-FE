import { CircleItemProps } from '@/types/common';
import { Avatar, Button } from '@nextui-org/react';

export default function CircleItem({ logo, label }: CircleItemProps) {
  return (
    <Button
      className="bg-transparent text-white flex items-center gap-5 mr-5 h-[64px]"
      startContent={
        <Avatar src={logo} className="bg-white" size="md" isBordered />
      }
      radius="full"
    >
      <span className="text-2xl font-medium">{label}</span>
    </Button>
  );
}
