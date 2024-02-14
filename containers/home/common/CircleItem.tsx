import { Avatar, Button } from '@nextui-org/react';
import Image from 'next/image';

interface CircleItemProps {
  logo: string;
  label: string;
}

export default function CircleItem({ logo, label }: CircleItemProps) {
  return (
    <div className="flex items-center gap-5 cursor-pointer">
      <Avatar src={logo} className="bg-white" size="lg" isBordered />
      <span className="font-medium text-2xl">{label}</span>
    </div>
  );
}
