import { Banner, AgencyList } from '@/containers/home';

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      <div>
        <Banner />
      </div>

      <h2 className="font-semibold text-3xl">
        K-Goods에서는 모든 아티스트의 굿즈 정보를 수집하고 있어요
      </h2>

      <div>
        <AgencyList />
      </div>
    </div>
  );
}
