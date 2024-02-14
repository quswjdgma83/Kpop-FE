import { Avatar } from '@nextui-org/react';

interface CircleItemProps {
  logo: string;
  label: string;
}

export default function CircleItem({ logo, label }: CircleItemProps) {
  return (
    <div className="flex items-center gap-5 cursor-pointer pr-10 h-[64px] pl-1">
      <Avatar src={logo} className="bg-white" size="lg" isBordered />
      <span className="font-medium text-2xl">{label}</span>
    </div>
  );
}
