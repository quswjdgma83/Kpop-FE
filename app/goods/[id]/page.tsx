import { GoBackButton } from '@/components/common';

export default function GoodsDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div>
      <GoBackButton />
    </div>
  );
}
