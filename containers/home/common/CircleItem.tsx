import { Avatar, Button } from '@nextui-org/react';

interface CircleItemProps {
  logo: string;
  label: string;
}

export default function CircleItem({ logo, label }: CircleItemProps) {
  return (
    <Button
      className="bg-transparent text-white flex items-center gap-5 mr-5 h-[64px]"
      startContent={
        <Avatar src={logo} className="bg-white" size="md" isBordered />
      }
      radius="full"
    >
      <span className="font-medium text-2xl">{label}</span>
    </Button>
  );
}
