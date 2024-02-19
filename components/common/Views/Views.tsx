import { IconEyeOpen } from '@/public/svgs';

export default function Views({ viewNum }: { viewNum: number }) {
  return (
    <div className="flex items-center gap-1 ">
      <IconEyeOpen />
      <p className="text-base text-inactive">{viewNum.toLocaleString()}</p>
    </div>
  );
}
